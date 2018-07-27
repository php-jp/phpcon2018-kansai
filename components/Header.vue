<template>
  <header class="p-header">
    <router-link
        to="/"
        class="p-header_link">
      <div class="p-header_logo"></div>
    </router-link>
  </header>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "~assets/scss/library/_variable.scss";
@import "~assets/scss/library/_mixin.scss";

.p-header {
  background-color: $clr_base;
  width: 100%;

  &_link {
    display: block;
    padding: 10px 0;
    width: 100%;
    @include desktop {
      padding: 15px 0;
    }
  }
  &_logo {;
    display: inline-block;
    width: 100%;
    height: 30px;
    background-image: url("/images/navLogo.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    @include desktop() {
      height: 40px;
    }
  }
}
</style>