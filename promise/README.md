### Promise API
#### Promise.all
- 参数： 接受一个数组，数组内部都是Promise实例
- 返回值： 返回一个Promise实例，这个Promise实例的状态转移取决于参数的Promise实例状态变化。当参数中所有的实例都处于resolve状态时，返回的Promise实例会变为resolve状态。如果任何一个实例中处于rejectr状态，返回的Promise实例变为reject状态
```JavaScript
Promise.all([p1, p2]).then((function(result) {
  console.log(result)
}))
```
> 不管两个promise谁先完成，Promise.all方法都会按照数组里面的顺序将结果返回

#### Promise.race
- 参数：接受一个数组，数组内都是Promsie的实例
- 返回值：返回一个Promise实例，这个Promise实例的状态取决于参数的Promise实例的状态变化。当参数中任何一个实例处于resolve状态时，返回的Promise实例会变味resolve状态，如果参数值中任何一个实例处于reject状态，返回的Promise实例变味reject状态

#### Promise.resolve
返回一个Promise实例，这个实例处于resolve状态

根据传入的参数不同有不同的功能：
- 值（对象、数组、字符串等）:作为resolve传递出去的值
- Promises实例： 原封不动返回

#### Promise.reject
返回一个Promise实例，这个实例处于reject状态
- 参数一般就是抛出的错误信息


