
## 使用方法 
安装依赖 npm install
启动开发环境 npm start
线上打包 npm run build


### 遇到的问题
1. 在配置css模块化之后，使用antd页面样式报错，原来是在打包时将antd的样式也打包，造成的错误。只需要在webpack中配置对antd的样式不进行打包即可
2. 解决this.props.history.push无法跳转的问题.是因为此时props中没有history属性，需要从父组件中进行传递  
3. 组件中引用图片报错，原因是webpack为配置打包。配置url-loader可以解决
4. redux配置
5. 使用ES7的async和await报错。使用`babel-plugin-transform-runtime`插件解决。并在.babelrc文件中添加
~~~
"plugins": [[
    "transform-runtime",
    {
        "helpers":false,
        "polyfill":false,
        "regenerator":true,
        "moduleName":"babel-runtime"
    }
]]
~~~




### 收获

1. compose函数源码分析
~~~
function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

    //reduce为数组中的每个元素依次执行回调函数
  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}
~~~
- 责任链设计模式的体现

2. redux中间体thunk中间体的理解：
> 对于react构建页面来说，页面和后台的数据交互无外乎两种，一种是主动触发，比如是加载页面时触发，或者是用户的点击，输入等触发。无论哪种对于数据的操作，对于view来说。都会派发一个action

> 在redux中，每次更新后的store都会对应着一个新的view。而Store里边数据的更新依赖action的触发-----store。dispatch(action)会自执行初始化中creteStore中注入的reducers。从而计算出新的状态。