<template>
  <div class="home-Title">
    <div class="home-Title_airPlane">
      <div class="home-Title_Cloud1"></div>
      <div class="home-Title_Cloud2"></div>
    </div>
    <div class="st-Container">
      <div class="home-Title_Logo"></div>
      <p class="home-Title_SalesCopy">関西PHPerの夏はこれがなくちゃ始まらない！</p>
      <p class="home-Title_Text">7.14 Sat グランフロント大阪</p>
    </div>
    <div class="home-Title_CloudLeft"></div>
    <div class="home-Title_CloudRight"></div>
    <div class="home-Title_Wave"></div>
    <div class="home-Title_Elephants">
      <a class="home-Title_Attention" href="https://phpcon-kansai-2018.peatix.com/">チケット販売中！</a>
      <div class="home-Title_Elephant"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/library/_variable.scss";
  @import "~assets/scss/library/_mixin.scss";

  .home-Title {
    width: 100%;
    background-color: $clr_main;
    position: relative;
    height: 580px;
    @include desktop {
      width: 100%;
      height: 720px;
    }

    .st-Container {
      @include desktop() {
        max-width: 768px;
      }
    }
    .home-Title_airPlane {
      @include desktop() {
        margin: 0 auto;
        max-width: 768px;
        position: relative;
      }
    }

    .home-Title_Cloud1 {
      width: 20vw;
      min-width: 80px;
      height: 20vw;
      min-height: 84px;
      background-image: url("/images/airplane.png");
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      top: 60px;
      right: 2vw;
      @include desktop() {
        width: 180px;
        height: 122px;
        top: 100px;
        right: 0;
      }
    }

    .home-Title_Cloud2 {
      width: 20vw;
      min-width: 84px;
      height: 20vw;
      min-height: 84px;
      background-image: url("/images/airplaneCloud.png");
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      top: 280px;
      left: 0;
      @include desktop() {
        width: 200px;
        height: 132px;
        top: 400px;
        left: 0;
      }
    }

    .home-Title_Logo {
      display: inline-block;
      margin-top: 40px;
      margin-bottom: 40px;
      width: 230px;
      height: 270px;
      background-image: url("/images/title.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      z-index: 100;
      @include desktop() {
        margin-top: 60px;
        width: 400px;
        height: 330px;
      }
    }

    .home-Title_SalesCopy {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .home-Title_Text {
      font-size: 1.8rem;
      font-weight: bold;
      @include desktop() {
      }
    }

    .home-Title_CloudLeft {
      min-width: 100px;
      width: 25vw;
      max-height: 550px;
      background-image: url("/images/cloud_left.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: left bottom;
      position: absolute;
      bottom: 0;
      left: 0;
      &::before {
        content: "";
        display: block;
        padding-top: 130%;
      }
    }

    .home-Title_CloudRight {
      min-width: 100px;
      width: 25vw;
      max-height: 550px;
      background-image: url("/images/cloud_right.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: right bottom;
      position: absolute;
      bottom: 0;
      right: 0;
      &::before {
        content: "";
        display: block;
        padding-top: 130%;
      }
    }

    .home-Title_Wave {
      z-index: 10;
      width: 100%;
      max-height: 90px;
      background-image: url("/images/ocean.png");
      background-repeat: repeat-x;
      background-size: contain;
      position: absolute;
      bottom: -30px;
      &::before {
        content: "";
        display: block;
        padding-top: 20%;
      }
    }

    .home-Title_Elephants {
      z-index: 100;
      position: absolute;
      width: 100%;
      left: 50%;
      transform: translateX(-50%);
      bottom: -35px;
    }

    .home-Title_Elephant {
      width: 60px;
      height: 60px;
      background-image: url("/images/elephant.png");
      background-repeat: no-repeat;
      background-size: contain;
      position: relative;
      top: -30px;
      left: 55%;
      @include desktop() {
        width: 112px;
        height: 98px;
        left: 53%;
      }
    }

    .home-Title_Attention {
      padding: 1.5rem;
      border-radius: 10px;
      font-weight: bold;
      color: $clr_base;
      text-decoration: none;
      text-align: center;
      background: $clr_accent;
      position: relative;
      top: -60px;
      text-decoration: underline;

      &::after {
        display: inline-block;
        content: "";
        width: 20px;
        height: 20px;
        background-image: url("~/assets/images/parts_triangle.svg");
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        top: 38px;
        left: 50%;
        transform: translateX(-50%);
       }
    }
  }
</style>
