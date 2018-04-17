<template>
  <div class="home-Title">
    <div class="st-Container">
      <div class="home-Title_Cloud1"></div>
      <div class="home-Title_Cloud2"></div>
      <div class="home-Title_Logo"></div>
    </div>
    <div class="home-Title_TextArea">
      <p class="home-Title_SalesCopy">関西PHPerの夏はこれがなくちゃ始まらない！</p>
      <p class="home-Title_Text">7.14 Sat グランフロント大阪</p>
    </div>
    <div class="home-Title_Cloud3"></div>
    <div class="home-Title_Cloud4"></div>
    <div class="home-Title_Wave"></div>
    <div class="home-Title_Elephants">
      <a class="home-Title_Attention" href="#home-Wanted">スピーカー・スポンサー２次募集中！</a>
      <div class="home-Title_Elephant"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/library/_variable.scss";
  @import "~assets/scss/library/_mixin.scss";

  .home-Title {
    width: auto;
    background-color: $clr_main;
    position: relative;

    .st-Container {
      position: relative;
      padding: 0 50px;
      height: calc(570px + 25vw);
      @include desktop() {
        max-width: 768px;
        height: calc(450px + 30vw);
        padding: 0;
      }

      .home-Title_Cloud1 {
        margin-left: 100px;
        width: 20vw;
        min-width: 84px;
        height: 20vw;
        min-height: 84px;
        background-image: url("/images/airplaneCloud.png");
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        top: 280px;
        left: -100px;
        @include desktop() {
          width: 200px;
          height: 132px;
          top: 400px;
          left: -100px;
        }
      }

      .home-Title_Cloud2 {
        margin-right: 130px;
        width: 20vw;
        min-width: 84px;
        height: 20vw;
        min-height: 84px;
        background-image: url("/images/airplane.png");
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        top: 70px;
        right: -120px;
        @include desktop() {
          width: 180px;
          height: 122px;
          top: 100px;
          right: -100px;
        }
      }

      .home-Title_Logo {
        z-index: 100;
        margin-left: auto;
        margin-right: auto;
        width: 230px;
        height: 270px;
        background-image: url("/images/title.svg");
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;
        bottom: 0;
        @include desktop() {
          width: 335px;
          height: 392px;
        }
      }
    }

    .home-Title_TextArea {
      position: absolute;
      width: 70%;
      top: 380px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 5;
      @include desktop() {
        top: 480px;
      }
    }

    .home-Title_SalesCopy {
      font-size: 16px;
      @include desktop() {
        font-size: 21px;
      }
    }

    .home-Title_Text {
      font-size: 18px;
      @include desktop() {
        font-size: 25px;
      }
    }

    .home-Title_Cloud3 {
      z-index: 1;
      min-width: 80px;
      width: 25vw;
      min-height: 125px;
      height: 35vw;
      background-image: url("/images/cloud_left.png");
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      top: 515px;
      left: 0;
      @include desktop() {
        max-width: 480px;
        width: 30vw;
        height: 555px;
        top: 360px;
      }
    }

    .home-Title_Cloud4 {
      z-index: 1;
      min-width: 80px;
      width: 25vw;
      min-height: 125px;
      height: 35vw;
      background-image: url("/images/cloud_right.png");
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      top: 520px;
      right: 0;
      @include desktop() {
        max-width: 480px;
        width: 30vw;
        height: 555px;
        top: 360px;
      }
    }

    .home-Title_Wave {
      z-index: 2;
      width: 100%;
      height: 217px;
      background-image: url("/images/ocean.png");
      background-repeat: repeat-x;
      background-size: contain;
      position: absolute;
      top: calc(530px + 25vw);
      max-height: 217px;
      @include desktop() {
        top: calc(390px + 30vw);
      }
    }

    .home-Title_Elephants {
      z-index: 101;
      position: absolute;
      top: calc(510px + 25vw);
      width: 100%;
      left: 50%;
      transform: translateX(-50%);
      @include desktop() {
        top: calc(390px + 30vw);
      }
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
      padding: 1rem;
      border-radius: 1rem;
      font-size: 14px;
      font-weight: bold;
      color: $clr_base;
      text-decoration: none;
      text-align: center;
      background: $clr_accent;
      position: relative;
      top: -60px;
      @include desktop() {
        top: -60px;
        font-size: 18px;
      }

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
        @include desktop() {
          top: 42px;
        }
       }
    }
  }
</style>
