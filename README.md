# draw lottery
一个横向竖向滚动抽奖，用到import TweenMax from 'gsap'，TweenMax的插件
let webUrl = 网址：https://www.tweenmax.com.cn/api/tweenmax/TweenMax()
```js
<draw-lottery/>
```
## props
| 描述 | 名称 | 类型 | 例子 | 解释 |  
| :----- | :-----:| :-----:  | :----- | :----- |
| 动画时间 | animationTime | Number | 10 | 10秒 |
| 列表数据  | drawData | Array | [{src:'',name:''}] | 至少传输五个 |
| 中奖位置 | winPrizeIndex | String  | -2000 | 多少px，按照宽度或者高度来的 |
| 中奖前留几个 | winIndex | Number | 5 | （是第五个） |
| 滚动方式 | drawXY | Boolean  | Y:true X:false |  Y:true X:false |
| 模型数据 | resData | Object  | resData 定义样式 | 下方resData | 
| 中奖数据 | drawDataSuccess | Object | {src:'',name:''} | 两个参数 |
| 动画初始化 | TweenMaxInit | Object | {ease:""} | webUrl上方地址 | 
| 开始动画 | getStart | Function | 收不到参数（bug） | webUrl上方地址 |
| 进行中 | getUpdate | Function | 收不到参数（bug） | webUrl上方地址 |
| 已结束 | getComplete | Function | 收不到参数（bug） |  webUrl上方地址 |
| Repeat | getRepeat | Function | 收不到参数（bug） | webUrl上方地址 |

### resData 定义样式
   - WH:定义宽高必填，其他样式随便，定义在style内的样式，
   - IdBox：最外层div添加类，可以添加背景，
   - Flex：套在滚动的外框添加类，这个控制横竖想滚动，
   - classBox:每一个滚动的小item添加类，
   - classImg：内部图片添加类，
   - 名称使用div包裹，可使用.XX div{}定义
```json
{
    WH:{
    width:'110',
    height:"110",
    overflow:"hidden",
    },
    IdBox:[''],
    classBox:['',''],
    classImg:[''],Flex:['']
}
```

    