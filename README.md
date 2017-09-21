## vue-num-keyboard
为vue提供的自定义数字键盘
## 使用方法
```shell
npm i vue-num-keyboard --save
```
```javascript
import shKeyBoard from 'vue-num-keyboard'
import 'vue-num-keyboard/style.css'
Vue.use(shKeyBoard);

```

```html
<sh-keyboard
	v-model="value"   // 输入框的值
	inter="5"         // 限制整数位数
	decimal="2"       // 小数位数
	placeholder="请输入提现金额"
	label="提现金额"/>
```

## 效果图

![image](https://songhaoreact.github.com/vue-num-keyboard/blob/master/demo.gif)