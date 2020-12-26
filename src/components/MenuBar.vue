<template lang="html">
<transition name="show-bar">
  <div id="menubar" class="menu-bar" v-show="show">
    <div class="menu-bar__left">
      <span class="menu-bar__left__item" @click="$emit('open')"
        alt="Open a file"
      >
        <unicon name="image-v"/>
      </span>
    <span class="menu-bar__right__item" @click="$emit('zoom-in')"
      alt="Zoom in"
    >
      <unicon name="search-plus"/>
    </span>
    <span class="menu-bar__right__item" @click="$emit('zoom-out')"
      alt="Zoom out"
    >
      <unicon name="search-minus"/>
    </span>
    <span class="menu-bar__left__item" @click="$emit('preferences')"
    alt="Preferences"
    >
      <unicon name="bars" height="25" width="25"/>
    </span>
    </div>
  </div>
</transition>
</template>

<script>
export default {
    name: 'MenuBar',
    props: {
      show: {
        type: Boolean,
        required: true,
        default: () => true
      }
    }
}
</script>

<style lang="scss" scoped>
.menu-bar {
  position: fixed; top: 0; left: calc((100vw / 2) - 250px);
  height: 35px; width: 450px;
  border-radius: 0 0 18px 18px;
  display: flex; justify-content: center;
  background-color: #000; color: #fff;
  align-items: center;

  &__right__item--rotateY {
    transform: rotateY(-180deg);
  }

  &__left{
    display: flex; justify-content: space-evenly;
    align-items: center;
  }

  &__left {
    width: 45%; height: 100%;
    &__item {
      font-size: 16px;
      font-weight: 300;
      height: 100%; width: 50px;
      display: flex; justify-content: center;
      align-items: center;
      }
  }
}
</style>
