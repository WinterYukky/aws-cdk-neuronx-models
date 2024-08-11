import { IVpc } from "aws-cdk-lib/aws-ec2";
import { IBucket } from "aws-cdk-lib/aws-s3";
import {
  CompileOptions,
  Model,
  NeuronxCompile,
  NeuronxInstanceType,
  OptLevel,
  QuantDtype,
  TransformersNeuronxSageMakerInferenceModelData,
  TransformersNeuronxSageMakerRealtimeInferenceEndpoint,
} from "aws-cdk-neuronx-patterns";
import { Construct } from "constructs";

export class InstanceTypeStrategy {
  /**
   * In order to reduce costs, 8-bit quantization and number of positions are adjusted at 1024,
   * so that the accelerator device is operated as one.
   * Since inf2.xlarge does not have enough host memory, trn1.2xlarge is used.
   */
  static lowCost = new InstanceTypeStrategy(
    NeuronxInstanceType.TRN1_2XLARGE,
    NeuronxInstanceType.INF2_8XLARGE,
    {
      nPositions: 1024,
      optLevel: OptLevel.MODEL_EXECUTION_PERFORMANCE,
      quantDtype: QuantDtype.S8,
      tpDegree: 2,
    },
  );
  /**
   * Set as default as much as possible and use 2 accelerator devices per worker.
   */
  static highPerformance = new InstanceTypeStrategy(
    NeuronxInstanceType.INF2_24XLARGE,
    NeuronxInstanceType.INF2_24XLARGE,
    {
      optLevel: OptLevel.MODEL_EXECUTION_PERFORMANCE,
      tpDegree: 4,
    },
  );
  readonly nPositions?: number;
  readonly optLevel?: OptLevel;
  readonly quantDtype?: QuantDtype;
  readonly tpDegree?: number;
  constructor(
    readonly instanceType: NeuronxInstanceType,
    readonly instanceTypeForCompile: NeuronxInstanceType,
    options: CompileOptions,
  ) {
    this.nPositions = options.nPositions;
    this.optLevel = options.optLevel;
    this.quantDtype = options.quantDtype;
    this.tpDegree = options.tpDegree;
  }
}
export interface SageMakerRealtimeInferenceProps {
  /**
   * VPC in which this will launch compile worker instance.
   */
  readonly compileVpc: IVpc;
  /**
   * The bucket to upload model data for hosting.
   */
  readonly bucket: IBucket;
  /**
   * The strategy of instance types.
   */
  readonly instanceTypeStrategy: InstanceTypeStrategy;
}

export class SageMakerRealtimeInference extends Construct {
  readonly endpoint: TransformersNeuronxSageMakerRealtimeInferenceEndpoint;
  constructor(
    scope: Construct,
    id: string,
    props: SageMakerRealtimeInferenceProps,
  ) {
    super(scope, id);
    const compile = new NeuronxCompile(this, "NeuronxCompile", {
      vpc: props.compileVpc,
      bucket: props.bucket,
      model: Model.fromHuggingFace("cyberagent/calm3-22b-chat"),
      compileOptions: props.instanceTypeStrategy,
      instanceType: props.instanceTypeStrategy.instanceTypeForCompile,
    });
    const resource = new TransformersNeuronxSageMakerRealtimeInferenceEndpoint(
      this,
      "RealtimeInference",
      {
        modelData:
          TransformersNeuronxSageMakerInferenceModelData.fromNeuronxCompile(
            compile,
          ),
        instanceType: props.instanceTypeStrategy.instanceType,
      },
    );
    this.endpoint = resource;
  }
}
