import { awscdk, ReleasableCommits } from "projen";
const cdkVersion = "2.151.0";
const project = new awscdk.AwsCdkConstructLibrary({
  author: "WinterYukky",
  authorAddress: "49480575+WinterYukky@users.noreply.github.com",
  cdkVersion,
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.4.0",
  name: "aws-cdk-neuronx-models",
  projenrcTs: true,
  repositoryUrl: "https://github.com/WinterYukky/aws-cdk-neuronx-models.git",
  prettier: true,
  eslintOptions: {
    dirs: ["src", "test"],
  },
  keywords: ["neuronx", "sagemaker"],
  deps: ["aws-cdk-neuronx-patterns@0.0.10"],
  peerDeps: ["aws-cdk-neuronx-patterns@0.0.10"],
  description:
    "A collection that optimizes inference environment of Neuronx for each model",
  devDeps: [
    `@aws-cdk/integ-runner@${cdkVersion}-alpha.0`,
    `@aws-cdk/integ-tests-alpha@${cdkVersion}-alpha.0`,
    "aws-cdk-neuronx-patterns@0.0.10",
  ] /* Build dependencies for this module. */,
  releasableCommits: ReleasableCommits.ofType([
    "feat",
    "fix",
    "revert",
    "Revert",
  ]),
  packageName: "aws-cdk-neuronx-models" /* The "name" in package.json. */,
});
project.addTask("integ", {
  exec: "integ-runner",
  description: "Run integration tests",
  receiveArgs: true,
});

project.addTask("integ:update", {
  exec: "integ-runner --update-on-failed",
  description: "Run integration tests and update on any failed tests",
  receiveArgs: true,
});
project.synth();
