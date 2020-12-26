<template>
  <div id="app">
    <menu-bar :show="show"
      @open="openFile"
      @switch-theme="console('switched')"
      @preferences="console('updated')"
      @rotate-90="console('rotate')"
      @rotate="console('rotate+90')"
      @zoom-in="console('zoomed in')"
      @zoom-out="console('zoomed out')"
    />
    <transition name="show-control">
      <span class="controls--left" @click="to(-1)">
        <unicon name="angle-left-b"/>
      </span>
    </transition>
    <div id="rendering-area" :height="canvasHeight" :width="canvasWidth">
        <canvas id="canvas" :height="canvasHeight" :width="canvasWidth">
          Not supported
        </canvas>
    </div>
    <transition name="show-control">
      <span class="controls--right" @click="to(1)">
        <unicon name="angle-right-b"/>
      </span>
    </transition>
    <!-- <others :show="showDetails"/> -->
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue'
// import Others from './components/Others.vue'

export default {
  name: 'App',
  components: {
    MenuBar,
    // Others
  },
  data() {
    return {
      show: true,
      // showDetails: true,
      canvasHeight: 470,
      canvasWidth: 700,
      image: null,
      context: null,
      current: 0,
      source: [],
    }
  },
  methods: {
    openFile() {
      this.source = window.ipcR.sendSync('open-file') ?? []
      if(this.source !== [])
        this.source = this.source
          .map((file) => { return {src: 'img://' + file} })
          console.log(this.source)
      this.to(0)
    },
    to(index) {
      switch (index) {
        case 0:
          this.current = index
          break
        case 1:
          if (this.current + 1 >= this.source.length)
            this.current = 0
          else
            this.current += 1
          break
        case -1: // Mal fait
          if (this.current - 1 < 0)
            this.current = this.source.length - 1
          else
            this.current -= 1
          break;
        default:
          break;
      }
      console.log(this.current)
      this.image.src = this.source[this.current].src
    },
    rotate() {
      // ...
    },
    zoomIn() {

    },
    zoomOut() {

    },
    updateCanvasSize() {
      this.canvasWidth = window.innerWidth - 100
      this.canvasHeight = window.innerHeight - 100

      // update menubar position
      let menu =  document.querySelector("#menubar")
      menu.style.left = `${(window.innerWidth / 2) - 225}px`
    },
    showImage() {
      this.context.drawImage(this.image, 0, 0, this.canvasWidth,
        this.canvasHeight)
    },
    updateImageSize() {
      this.context.drawImage(this.image, 0, 0, this.canvasWidth,
        this.canvasHeight)
    }
  },
  mounted() {
    this.context = document.querySelector("#canvas").getContext("2d")
    this.image = new Image()
    this.image.onload = this.showImage
    window.addEventListener('resize', this.updateCanvasSize)
    window.addEventListener('resize', this.updateImageSize)

    // adjust menubar size via Js
    let menu =  document.querySelector("#menubar")
    menu.style.left = `${(window.innerWidth / 2) - 225}px`
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%; max-height: 100%;
}

body {
  width: 100%; height: 100%;
  background-color: #fcefcd;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .controls--left, .controls--right {
    height: 35px; width: 35px; text-align: center;
    display: flex; justify-content: center;
    align-items: center;
    background-color: #000;
    position: fixed; top: calc((100vh / 2) - 50px);
    div {
      display: flex; justify-content: center;
      align-items: center;
    }
  }
  .controls--left { left: 10px; border-radius: 5px 0 0 5px;}
  .controls--right { right: 10px; border-radius: 0 5px 5px 0;}

  #rendering-area {
    margin: 60px 50px 70px 50px;
  }
}

.show-controls-enter-active {}
</style>
