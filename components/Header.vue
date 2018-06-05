<template>
  <header class="p-header">
    <a href="/" class="p-header_link">
      <div class="p-header_image"></div>
    </a>
  </header>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "~assets/scss/library/_variable.scss";
@import "~assets/scss/library/_mixin.scss";

.p-header {
  background-color: $clr_base;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  &_link {
    display: inline-block;
    width: 100%;
    height: 60px;
    text-decoration: none;
    @include desktop() {
      height: 65px;
    }
  }
  &_image {
    width: 300px;
    height: 40px;
    background-image: url("/images/navLogo.svg");
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @include desktop() {
      width: 400px;
      height: 50px;
    }
  }
}
</style>