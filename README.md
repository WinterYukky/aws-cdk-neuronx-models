# AWS CDK Neuronx Models

This construct library is a construct library optimized for hosting OSS models in Inferentia2 and Trainium1 on SageMaker. You can host a cost-effective model simply by setting an instance type strategy.

## Install

```bash
npm i aws-cdk-neuronx-models
```

## Example

The following code is an example of defining `cyberagent/calm3-22b-chat`. The names of the constructs differ depending on each model, but they are basically the same.

## Instance Type and workers every strategies

| model                     | strategy         | instance type    | number of workers | number of positions | quantization |
| ------------------------- | ---------------- | ---------------- | ----------------- | ------------------- | ------------ |
| cyberagent/calm3-22b-chat | LOW_COST         | ml.trn1.2xlarge  | 1                 | 1024                | s8           |
| cyberagent/calm3-22b-chat | HIGH_PERFORMANCE | ml.inf2.24xlarge | 3                 | 4096                |
