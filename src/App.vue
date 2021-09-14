<template>
  <div id="app">
    <draw-lottery
      :multi-draw-data="multiDrawData"
      :draw-x-y="true"
      ref="helloworld"
      :win-prize-index="'-7700'"
      :tween-max-init="{ delay: 0 }"
      :res-data="resData"
      :get-start="getStart"
      :winIndex="2"
      :get-update="getUpdate"
      :get-complete="getComplete"
      :get-repeat="getReqeat"
    />
    <div class="boxa" @click="helloworldClick"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      sum: 0,
      resData: {
        WH: {
          width: "110",
          height: "110",
        },
        IdBox: ["wi", "id_box"],
        classBox: ["", ""],
        classImg: [""],
      },
      multiDrawData: [
        {
          drawData: [
            {
              src: "https://asset.yskins.com/9frg4EpbifmM1FjkvQtu3hvSMoEF0h9JjjpzfeLv.png",
              name: "1",
            },
            {
              src: "https://asset.yskins.com/Ke4T4zu8wQTmHWdHGFuqwarAzIAe9wPlaMAasu76.png",
              name: "2",
            },
            {
              src: "https://asset.yskins.com/9frg4EpbifmM1FjkvQtu3hvSMoEF0h9JjjpzfeLv.png",
              name: "3",
            },
            {
              src: "https://asset.yskins.com/Ke4T4zu8wQTmHWdHGFuqwarAzIAe9wPlaMAasu76.png",
              name: "4",
            },
          ],
          drawDataSuccess: {
            src: "https://asset.yesskins.com/pvzZR7bOvTkf9jPYlDo1d6rnrA3x7u6RPbCv0Ljm.png",
            name: "中奖1",
          },
        },
        {
          drawData: [
            {
              src: "https://asset.yskins.com/9frg4EpbifmM1FjkvQtu3hvSMoEF0h9JjjpzfeLv.png",
              name: "1",
            },
            {
              src: "https://asset.yskins.com/Ke4T4zu8wQTmHWdHGFuqwarAzIAe9wPlaMAasu76.png",
              name: "2",
            },
            {
              src: "https://asset.yskins.com/9frg4EpbifmM1FjkvQtu3hvSMoEF0h9JjjpzfeLv.png",
              name: "3",
            },
            {
              src: "https://asset.yskins.com/Ke4T4zu8wQTmHWdHGFuqwarAzIAe9wPlaMAasu76.png",
              name: "4",
            },
          ],
          drawDataSuccess: {
            src: "https://asset.yesskins.com/pvzZR7bOvTkf9jPYlDo1d6rnrA3x7u6RPbCv0Ljm.png",
            name: "中奖2",
          },
        },
        {
          drawData: [
            {
              src: "https://asset.yskins.com/9frg4EpbifmM1FjkvQtu3hvSMoEF0h9JjjpzfeLv.png",
              name: "1",
            },
            {
              src: "https://asset.yskins.com/Ke4T4zu8wQTmHWdHGFuqwarAzIAe9wPlaMAasu76.png",
              name: "2",
            },
            {
              src: "https://asset.yskins.com/9frg4EpbifmM1FjkvQtu3hvSMoEF0h9JjjpzfeLv.png",
              name: "3",
            },
            {
              src: "https://asset.yskins.com/Ke4T4zu8wQTmHWdHGFuqwarAzIAe9wPlaMAasu76.png",
              name: "4",
            },
          ],
          drawDataSuccess: {
            src: "https://asset.yesskins.com/pvzZR7bOvTkf9jPYlDo1d6rnrA3x7u6RPbCv0Ljm.png",
            name: "中奖3",
          },
        },
      ],
    };
  },
  mounted() {},
  methods: {
    //动画结束时
    getComplete() {
      console.log("动画结束时...............................");
     let multiDrawData = [
        {
          drawData: [
            {
              src: "./assets/logo.png",
              name: "1",
            },
            {
             src: "./assets/logo.png",
              name: "2",
            },
            {
             src: "./assets/logo.png",
              name: "3",
            },
            {
             src: "./assets/logo.png",
              name: "4",
            },
          ],
          drawDataSuccess: {
             src: "https://asset.yskins.com/9frg4EpbifmM1FjkvQtu3hvSMoEF0h9JjjpzfeLv.png",
            name: "中奖1",
          },
        },
        {
          drawData: [
            {
              src: "./assets/logo.png",
              name: "1",
            },
            {
             src: "./assets/logo.png",
              name: "2",
            },
            {
             src: "./assets/logo.png",
              name: "3",
            },
            {
             src: "./assets/logo.png",
              name: "4",
            },
          ],
          drawDataSuccess: {
            src: "https://asset.yesskins.com/pvzZR7bOvTkf9jPYlDo1d6rnrA3x7u6RPbCv0Ljm.png",
            name: "中奖2",
          },
        },
        {
          drawData: [
            {
              src: "./assets/logo.png",
              name: "1",
            },
            {
             src: "./assets/logo.png",
              name: "2",
            },
            {
             src: "./assets/logo.png",
              name: "3",
            },
            {
             src: "./assets/logo.png",
              name: "4",
            },
          ],
          drawDataSuccess: {
             src: "https://asset.yskins.com/9frg4EpbifmM1FjkvQtu3hvSMoEF0h9JjjpzfeLv.png",
            name: "中奖3",
          },
        },
      ]
      let item = setTimeout(()=>{
              this.sum +=1
             this.$refs.helloworld.play.restart(true);
             this.$refs.helloworld.play.pause();
              if(this.sum >= 2){
                  clearTimeout(item)
                  return
              }
              this.multiDrawData = multiDrawData
              this.$refs.helloworld.playClick()
          },2000)
    },
    //进行中
    getUpdate() {
      console.log("进行中...");
    },
    // 点击开始
    helloworldClick() {
      this.$refs.helloworld.playClick();
    },
    // 开始
    getStart() {
      console.log("开始");
    },
    // 重新开始的时候
    getReqeat() {
      console.log(123456789);
      this.drawData = {
        src: "https://asset.yesskins.com/pvzZR7bOvTkf9jPYlDo1d6rnrA3x7u6RPbCv0Ljm.png",
        name: "中奖123",
      };
    },
  },
};
</script>

<style>
.id_box {
  width: 330px;
  height: 330px;
  border: 1px solid red;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  background-size: 100% 100%;
  background-image: url("https://farmskins.com/dist/img/logo.88024c66.png");
}
.id_box::before {
  content: "";
  width: 3px;
  height: 110px;
  background: yellow;
  position: absolute;
  z-index: 9;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.boxa {
  width: 50px;
  height: 50px;
  border-radius: 6px;
  margin-top: 4px;
  background: red;
  display: inline-block;
  position: absolute;
}
</style>
