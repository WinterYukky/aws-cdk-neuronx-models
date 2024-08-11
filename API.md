# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SageMakerRealtimeInference <a name="SageMakerRealtimeInference" id="aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInference"></a>

#### Initializers <a name="Initializers" id="aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInference.Initializer"></a>

```typescript
import { calm3chat22b } from 'aws-cdk-neuronx-models'

new calm3chat22b.SageMakerRealtimeInference(scope: Construct, id: string, props: SageMakerRealtimeInferenceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInference.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInference.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInference.Initializer.parameter.props">props</a></code> | <code>aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInferenceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInference.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInference.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInference.Initializer.parameter.props"></a>

- *Type:* aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInferenceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInference.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInference.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInference.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInference.isConstruct"></a>

```typescript
import { calm3chat22b } from 'aws-cdk-neuronx-models'

calm3chat22b.SageMakerRealtimeInference.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInference.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInference.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInference.property.endpoint">endpoint</a></code> | <code>aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInference.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInference.property.endpoint"></a>

```typescript
public readonly endpoint: TransformersNeuronxSageMakerRealtimeInferenceEndpoint;
```

- *Type:* aws-cdk-neuronx-patterns.TransformersNeuronxSageMakerRealtimeInferenceEndpoint

---


## Structs <a name="Structs" id="Structs"></a>

### SageMakerRealtimeInferenceProps <a name="SageMakerRealtimeInferenceProps" id="aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInferenceProps"></a>

#### Initializer <a name="Initializer" id="aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInferenceProps.Initializer"></a>

```typescript
import { calm3chat22b } from 'aws-cdk-neuronx-models'

const sageMakerRealtimeInferenceProps: calm3chat22b.SageMakerRealtimeInferenceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInferenceProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The bucket to upload model data for hosting. |
| <code><a href="#aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInferenceProps.property.compileVpc">compileVpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC in which this will launch compile worker instance. |
| <code><a href="#aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInferenceProps.property.instanceTypeStrategy">instanceTypeStrategy</a></code> | <code>aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy</code> | The strategy of instance types. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInferenceProps.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The bucket to upload model data for hosting.

---

##### `compileVpc`<sup>Required</sup> <a name="compileVpc" id="aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInferenceProps.property.compileVpc"></a>

```typescript
public readonly compileVpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

VPC in which this will launch compile worker instance.

---

##### `instanceTypeStrategy`<sup>Required</sup> <a name="instanceTypeStrategy" id="aws-cdk-neuronx-models.calm3chat22b.SageMakerRealtimeInferenceProps.property.instanceTypeStrategy"></a>

```typescript
public readonly instanceTypeStrategy: InstanceTypeStrategy;
```

- *Type:* aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy

The strategy of instance types.

---

## Classes <a name="Classes" id="Classes"></a>

### InstanceTypeStrategy <a name="InstanceTypeStrategy" id="aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy"></a>

#### Initializers <a name="Initializers" id="aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy.Initializer"></a>

```typescript
import { calm3chat22b } from 'aws-cdk-neuronx-models'

new calm3chat22b.InstanceTypeStrategy(instanceType: NeuronxInstanceType, instanceTypeForCompile: NeuronxInstanceType, options: CompileOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy.Initializer.parameter.instanceType">instanceType</a></code> | <code>aws-cdk-neuronx-patterns.NeuronxInstanceType</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy.Initializer.parameter.instanceTypeForCompile">instanceTypeForCompile</a></code> | <code>aws-cdk-neuronx-patterns.NeuronxInstanceType</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy.Initializer.parameter.options">options</a></code> | <code>aws-cdk-neuronx-patterns.CompileOptions</code> | *No description.* |

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy.Initializer.parameter.instanceType"></a>

- *Type:* aws-cdk-neuronx-patterns.NeuronxInstanceType

---

##### `instanceTypeForCompile`<sup>Required</sup> <a name="instanceTypeForCompile" id="aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy.Initializer.parameter.instanceTypeForCompile"></a>

- *Type:* aws-cdk-neuronx-patterns.NeuronxInstanceType

---

##### `options`<sup>Required</sup> <a name="options" id="aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy.Initializer.parameter.options"></a>

- *Type:* aws-cdk-neuronx-patterns.CompileOptions

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy.property.highPerformance">highPerformance</a></code> | <code>aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy</code> | Set as default as much as possible and use 2 accelerator devices per worker. |
| <code><a href="#aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy.property.lowCost">lowCost</a></code> | <code>aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy</code> | In order to reduce costs, 8-bit quantization and number of positions are adjusted at 1024, so that the accelerator device is operated as one. |
| <code><a href="#aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy.property.instanceType">instanceType</a></code> | <code>aws-cdk-neuronx-patterns.NeuronxInstanceType</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy.property.instanceTypeForCompile">instanceTypeForCompile</a></code> | <code>aws-cdk-neuronx-patterns.NeuronxInstanceType</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy.property.nPositions">nPositions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy.property.optLevel">optLevel</a></code> | <code>aws-cdk-neuronx-patterns.OptLevel</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy.property.quantDtype">quantDtype</a></code> | <code>aws-cdk-neuronx-patterns.QuantDtype</code> | *No description.* |
| <code><a href="#aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy.property.tpDegree">tpDegree</a></code> | <code>number</code> | *No description.* |

---

##### `highPerformance`<sup>Required</sup> <a name="highPerformance" id="aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy.property.highPerformance"></a>

```typescript
public readonly highPerformance: InstanceTypeStrategy;
```

- *Type:* aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy

Set as default as much as possible and use 2 accelerator devices per worker.

---

##### `lowCost`<sup>Required</sup> <a name="lowCost" id="aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy.property.lowCost"></a>

```typescript
public readonly lowCost: InstanceTypeStrategy;
```

- *Type:* aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy

In order to reduce costs, 8-bit quantization and number of positions are adjusted at 1024, so that the accelerator device is operated as one.

Since inf2.xlarge does not have enough host memory, trn1.2xlarge is used.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy.property.instanceType"></a>

```typescript
public readonly instanceType: NeuronxInstanceType;
```

- *Type:* aws-cdk-neuronx-patterns.NeuronxInstanceType

---

##### `instanceTypeForCompile`<sup>Required</sup> <a name="instanceTypeForCompile" id="aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy.property.instanceTypeForCompile"></a>

```typescript
public readonly instanceTypeForCompile: NeuronxInstanceType;
```

- *Type:* aws-cdk-neuronx-patterns.NeuronxInstanceType

---

##### `nPositions`<sup>Optional</sup> <a name="nPositions" id="aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy.property.nPositions"></a>

```typescript
public readonly nPositions: number;
```

- *Type:* number

---

##### `optLevel`<sup>Optional</sup> <a name="optLevel" id="aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy.property.optLevel"></a>

```typescript
public readonly optLevel: OptLevel;
```

- *Type:* aws-cdk-neuronx-patterns.OptLevel

---

##### `quantDtype`<sup>Optional</sup> <a name="quantDtype" id="aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy.property.quantDtype"></a>

```typescript
public readonly quantDtype: QuantDtype;
```

- *Type:* aws-cdk-neuronx-patterns.QuantDtype

---

##### `tpDegree`<sup>Optional</sup> <a name="tpDegree" id="aws-cdk-neuronx-models.calm3chat22b.InstanceTypeStrategy.property.tpDegree"></a>

```typescript
public readonly tpDegree: number;
```

- *Type:* number

---



