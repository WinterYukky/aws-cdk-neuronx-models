import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { Vpc } from "aws-cdk-lib/aws-ec2";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { calm3chat22b } from "../../../src";

describe("Calm3Chat22bSageMakerRealtimeInference lowCost", () => {
  const app = new App();
  const stack = new Stack(app, "MyStack");
  const vpc = new Vpc(stack, "Vpc");
  const bucket = new Bucket(stack, "Bucket");
  new calm3chat22b.SageMakerRealtimeInference(stack, "LowCost", {
    bucket,
    compileVpc: vpc,
    instanceTypeStrategy: calm3chat22b.InstanceTypeStrategy.lowCost,
  });
  const template = Template.fromStack(stack);
  it("lowCost compile instance type should inf2.8xlarge", () => {
    template.hasResourceProperties("AWS::Batch::ComputeEnvironment", {
      ComputeResources: {
        InstanceTypes: ["inf2.8xlarge"],
      },
    });
  });
  it("lowCost inference instance type should ml.trn1.2xlarge", () => {
    template.hasResourceProperties("AWS::SageMaker::EndpointConfig", {
      ProductionVariants: [
        {
          InstanceType: "ml.trn1.2xlarge",
        },
      ],
    });
  });
});

describe("Calm3Chat22bSageMakerRealtimeInference highPerformance", () => {
  const app = new App();
  const stack = new Stack(app, "MyStack");
  const vpc = new Vpc(stack, "Vpc");
  const bucket = new Bucket(stack, "Bucket");
  new calm3chat22b.SageMakerRealtimeInference(stack, "HighPerformance", {
    bucket,
    compileVpc: vpc,
    instanceTypeStrategy: calm3chat22b.InstanceTypeStrategy.highPerformance,
  });
  const template = Template.fromStack(stack);
  it("highPerformance compile instance type should inf2.24xlarge", () => {
    template.hasResourceProperties("AWS::Batch::ComputeEnvironment", {
      ComputeResources: {
        InstanceTypes: ["inf2.24xlarge"],
      },
    });
  });
  it("highPerformance inference instance type should ml.inf2.24xlarge", () => {
    template.hasResourceProperties("AWS::SageMaker::EndpointConfig", {
      ProductionVariants: [
        {
          InstanceType: "ml.inf2.24xlarge",
        },
      ],
    });
  });
});
