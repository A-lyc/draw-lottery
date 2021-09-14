<template>
<!-- 多个老虎机，可以自由横板竖版转动，重复转动 去除了两个属性drawDataArr,drawDataSuccess -->
  <div class="draw">
    <div>
      <div>
        <div :class="resData.IdBox" class="" :style="!drawXY ? '' : 'display: flex;'">
          <!-- 一个老虎机转动 -->
         <!-- <template v-if='multiDrawData.length<=1'>
          <div ref="box"
            :class="resData.Flex"
            :style="!drawXY ? 'display: flex;' : ''">
            <div v-for="(item, index) in drawDataArr" :key="index">
              <div :style="`width:${resData.WH.width}px;height:${resData.WH.height}px`"
                :class="resData.classBox" >
                <img width="100px" height=""
                  :class="resData.classImg"
                  :src="item.src"
                  :alt="item.name" />
                <div>{{ item.name }}</div>
                <slot></slot>
              </div>
            </div>
          </div>
         </template> -->
        <!-- 多个老虎机转动 -->
        <template>
          <div
            v-for="(t, i) in multiDataArr"
            :key="i"
            ref="box"
            :class="resData.Flex"
            :style="!drawXY ? 'display: flex;' : ''">
            <div v-for="(item, index) in t.drawData" :key="index">
              <div
                :style="`width:${resData.WH.width}px;height:${resData.WH.height}px`"
                :class="resData.classBox"
              >
                <img
                  width="100px"
                  height=""
                  :class="resData.classImg"
                  :src="item.src"
                  :alt="item.name"
                />
                <div>{{ item.name }}</div>
                <slot></slot>
              </div>
            </div>
          </div>
        </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "draw-lottery",
  props: {
    
    multiDrawData: { type: Array, default(){return[1]} },
    // 动画持续时间
    animationTime: { type: Number, default: 10 },
    // 中将的位置，多少px，按照宽度或者高度来的
    winPrizeIndex: { type: String, default: "-2200" },
    // 中奖的前面留几个
    winIndex: { type: Number, default: 0 },
    // 横向还是竖向滚动 Y:true X:false
    drawXY: { type: Boolean, default: true },
    // 模型数据 - 可以使用插槽定义
    resData: {
      type: Object,
      default() {
        return {
          // 定义宽高 item的宽高
          WH: {
            width: "110",
            height: "110",
            // overflow:"hidden",
          },
          IdBox: [""],
          classBox: ["", ""],
          classImg: [""],
        };
      },
    },
    // 动画操作 初始化设置，没有开始动画
    TweenMaxInit: {
      type: Object,
      default() {
        return {
          repeatDelay: 1, // 重复之前的等待
          repeat: 0, // 重复播放多少次
          yoyo: false, // 例如当你设置了repeat:2，如果没设置yoyo，那么动画是这样的123-123-123
          ease: "Expo.easeOut", //动画属性
          delay: 0, // 延迟多少秒
        };
      },
    },
    // 执行动画的函数
    getStart: {
      type: Function,
      default() {
        return () => {
          console.log("动画开始");
        };
      },
    },
    getUpdate: {
      type: Function,
      default() {
        return () => {
          console.log("进行中");
        };
      },
    },
    getComplete: {
      type: Function,
      default() {
        return () => {
          console.log("已结束");
        };
      },
    },
    getRepeat: {
      type: Function,
      default() {
        return () => {
          console.log("......");
        };
      },
    },
  },
  data() {
    return {
      play: null,
   
    }
  },
  computed: {
    // 需要整除
    drawSuccess() {
      let index = 0;
      // Y周滚动  高度 否则是宽度
      if (this.drawXY) {
        index = (this.winPrizeIndex * -1) / this.resData.WH.height;
      } else {
        index = (this.winPrizeIndex * -1) / this.resData.WH.width;
      }
      return Number(index.toFixed(0));
      // return index
    },
    // 渲染100个数据
    drawDataArr() {
      let arrData = JSON.parse(JSON.stringify(this.drawData));
      let arr = [];
      for (let i = 0; i < 100; i++) {
        arr.push(arrData[Math.floor(Math.random() * arrData.length)]);
      }
      arr.splice(this.drawSuccess + this.winIndex - 1, 0, this.drawDataSuccess); // 在21个位置上
      return arr;
    },
    // 多个老虎机的时候需要每个渲染100个
    multiDataArr() {
      let arrData = JSON.parse(JSON.stringify(this.multiDrawData));
      for (let i = 0; i < arrData.length; i++) {
        for(let j = 0 ;j< 100;j++){
          arrData[i].drawData.push(arrData[i].drawData[Math.floor(Math.random() * arrData.length)])
        }
         arrData[i].drawData.splice(this.drawSuccess + this.winIndex - 1, 0, arrData[i].drawDataSuccess); // 在21个位置上
      }
      console.log(arrData)
      return arrData;
    },
  },
  methods: {
    // 开始制作动画
    playStart() {
      this.play = this.$TweenMax.to(this.$refs["box"], this.animationTime, {
        y: this.drawXY ? this.winPrizeIndex : "",
        x: this.drawXY ? "" : this.winPrizeIndex,
        repeatDelay: 1, // 重复之前的等待
        yoyo: false, // 例如当你设置了repeat:2，如果没设置yoyo，那么动画是这样的123-123-123
        repeat: 0, // 重复播放多少次
        ease: "Expo.easeOut", //动画属性
        delay: 0, // 延迟多少秒
        // 动画执行过程中
        onUpdate: this.getUpdate,
        onUpdateParams: [this.$refs["box"], "param2 value"], // 如何传递当前这个 方法定义在外面不知道this该指向哪一个
        // 动画开始的时候
        onStart: this.getStart,
        onStartParams: ["{self}", "param2"],
        onStartScope: Object,
        // 动画结束时
        onComplete: this.getComplete,
        onCompleteParams: ["{self}", "param2"],

        //
        onRepeat: this.getRepeat,
        // 传输进来外部修改的值，覆盖现有的值
        ...this.TweenMaxInit,
      });
    },
    // 点击开始
    playClick() {
      this.playStart();
    },
    // 停止动画重新开始
    playClickStop() {
      try {
        this.play.restart(true);
        this.play.pause();
      } catch (e) {
        alert("请先开始动画");
        return "请先开始动画";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.green {
  width: 110px;
  height: 110px;
  text-align: center;
  color: #000;
  border-radius: 6px;
  display: inline-block;
  background: red;
  margin: 10px;
  background-color: #6fb936;
}
</style>
