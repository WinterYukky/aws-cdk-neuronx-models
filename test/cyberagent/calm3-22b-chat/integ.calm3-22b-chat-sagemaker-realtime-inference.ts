import { ExpectedResult, IntegTest } from "@aws-cdk/integ-tests-alpha";
import { App, RemovalPolicy, Stack } from "aws-cdk-lib";
import { Vpc } from "aws-cdk-lib/aws-ec2";
import * as s3 from "aws-cdk-lib/aws-s3";
import { calm3chat22b } from "../../../src";

const app = new App();
const stack = new Stack(
  app,
  "IntegCalm3Chat22bSageMakerRealtimeInferenceStack",
);
const vpc = new Vpc(stack, "Vpc", {
  natGateways: 1,
});
const bucket = new s3.Bucket(stack, "Bucket", {
  autoDeleteObjects: true,
  removalPolicy: RemovalPolicy.DESTROY,
});
const lowCost = new calm3chat22b.SageMakerRealtimeInference(stack, "LowCost", {
  bucket,
  compileVpc: vpc,
  instanceTypeStrategy: calm3chat22b.InstanceTypeStrategy.lowCost,
});
const highPerformance = new calm3chat22b.SageMakerRealtimeInference(
  stack,
  "HighPerformance",
  {
    bucket,
    compileVpc: vpc,
    instanceTypeStrategy: calm3chat22b.InstanceTypeStrategy.highPerformance,
  },
);

const integ = new IntegTest(app, "IntegTest", {
  testCases: [stack],
});
assertGeneratedText(lowCost);
assertGeneratedText(highPerformance);

function assertGeneratedText(
  inference: calm3chat22b.SageMakerRealtimeInference,
) {
  integ.assertions
    .awsApiCall("@aws-sdk/client-sagemaker-runtime", "InvokeEndpoint", {
      EndpointName: inference.endpoint.endpointName,
      Body: JSON.stringify({
        messages: [
          {
            role: "system",
            content: `You are helpfull assistant.`,
          },
          {
            role: "user",
            content:
              "please answer '1+1=?'. You must answer only answer numeric.",
          },
        ],
      }),
      ContentType: "application/json",
      Accept: "application/json",
    })
    .expect(
      ExpectedResult.objectLike({
        Body: '{"generated_text": "2"}',
      }),
    )
    .waitForAssertions();
}
