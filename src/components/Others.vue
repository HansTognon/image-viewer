<template lang="html">
<div class="preferences">
  <div class="preferences__box">
    <div class="preferences__box__content">
      <h1>Image Viewer</h1>
      <p>2020- Hans Tognon</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Preferences",
  props: {
    show: {
      type: Boolean,
      required: true,
      default: () => false
    }
  }
}
</script>

<style lang="scss">
.preferences {
  position: fixed; top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 3;
  display: flex; align-items: center;
  justify-content: center;

  &__box {
    font-size: 14px;
    width: 250px; height: 150px;
    background-color: transparent;
    backdrop-filter: blur(5px);
    color: #090000;
    border-radius: 10px;
    display: flex; align-items: center;
    justify-content: center;

  }
}
</style>
