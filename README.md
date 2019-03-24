
## 使用方法 
安装依赖 npm install
启动开发环境 npm start
线上打包 npm run build


### 遇到的问题
1. 在配置css模块化之后，使用antd页面样式报错，原来是在打包时将antd的样式也打包，造成的错误。只需要在webpack中配置对antd的样式不进行打包即可
2. 解决this.props.history.push无法跳转的问题.是因为此时props中没有history属性，需要从父组件中进行传递  
3. 组件中引用图片报错，原因是webpack为配置打包。配置url-loader可以解决