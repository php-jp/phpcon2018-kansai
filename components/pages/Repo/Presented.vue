<template>
  <div class="home-Presented">
    <div class="home-Presented_Wave"></div>
    <div class="st-Container">
      <h2 class="home-Presented_Title">PRESENTED</h2>
    </div>
    <img src="/images/logo_phpug.png">
    <div class="home-Presented_presentedname">KANSAI PHP USERS GROUP</div>
    </div>
</template>

<style lang="scss" scoped>
@import "~assets/scss/library/_variable.scss";
@import "~assets/scss/library/_mixin.scss";

.home-Presented {
  width: auto;
  color: $clr_base;
  background-color: #fff;
  padding: 70px 0;

  &_Wave {
    width: 100%;
    height: 20px;
    background-image: url("~/assets/images/wavyLine-white.png");
    background-repeat: repeat-x;
    background-size: contain;
    position: relative;
    top: -90px;
  }

  &_Title {
    @include secTitle($clr_base);
  }

  &_presentedname {
    display: inline-block;
    margin-top: 50px;
    margin-bottom: 100px;
    vertical-align: middle;
    font-size: 1.8em;
    font-weight: 700;
    color: rgb(53, 53, 53);
    margin-left: 20px;
  }
}
</style>
