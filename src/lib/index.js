import Draw from './draw.vue'
import TweenMax from 'gsap'

let vueDraw = {}
vueDraw.install =  (Vue) => {
    // 注册全局组件 - 这个是npm导入的模块
    Vue.prototype.$TweenMax = TweenMax
    // 自定义组件的名称
    Vue.component(Draw.name, Draw)
}
//global情况下自动安装
if (typeof  window !== 'undefined' && window.Vue) {
    window.Vue.use(vueDraw)
  }
export default vueDraw