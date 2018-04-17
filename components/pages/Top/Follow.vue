<template>
  <div class="home-Follow">
    <div class="home-Follow_Wave"></div>
    <div class="st-Container">
      <h2 class="home-Follow_Title">Follow SNS</h2>
      <p class="home-Follow_Call">PHPカンファレンス関西のSNSアカウントをフォローして最新情報チェック！</p>
      <div class="home-Follow_SNS">
        <a href="https://twitter.com/phpcon_kansai" target="_blank" class="home-Follow_Twitter">
          <i aria-hidden="true" class="fa fa-twitter fa-lg"></i>
          <span>&nbsp;twitterアカウント</span>
        </a>
        <a href="https://www.facebook.com/pcon.kansai/" target="_blank" class="home-Follow_Facebook">
          <i aria-hidden="true" class="fa fa-facebook fa-lg"></i>
          <span>&nbsp;Facebookグループ</span>
        </a>
        <a href="https://www.facebook.com/pcon.kansai/" target="_blank" class="home-Follow_Facebook">
          <i aria-hidden="true" class="fa fa-facebook fa-lg"></i>
          <span>&nbsp;お知らせを受け取る</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/library/_variable.scss";
  @import "~assets/scss/library/_mixin.scss";

  .home-Follow {
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

    &_Call {
      max-width: 239px;
      width: 100%;
      margin: 0 auto;

      @include desktop() {
        max-width: 450px;
        width: 100%;
      }
    }

    &_SNS {
      margin-top: 40px;
      .home-Follow_Twitter {
        @include button();
        font-size: 12px;
        padding: 15px 10px;
        @include desktop() {
          font-size: 17px;
          padding: 15px 30px;
        }
      }
      .home-Follow_Facebook {
        @include button();
        font-size: 12px;
        padding: 15px 10px;
        @include desktop() {
          font-size: 17px;
          padding: 15px 30px;
        }
      }
    }
  }
</style>
