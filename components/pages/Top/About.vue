<template>
  <div class="home-Description">
    <div class="st-Container">
      <h2 class="home-Description_Title">About<br>php conference Kansai 2018</h2>
      <p class="home-Description_Intro">関西PHPerの夏はこれがなくちゃ始まらない！<br>今年で８回目となる関西最大級のPHPイベント、今年も開催です。<br><br>全国PHPerが大阪に集結「PHPカンファレンス関西」で心に残る夏の思い出を！</p>
      <div class="home-Past">
        <p>過去のイベントの様子はこちら</p>
        <div class="home-Past_List">
          <a href="https://2017.kphpug.jp/" target="_blank">2017</a>
          <a href="http://conference.kphpug.jp/2016/" rel="noopener" target="_blank">2016</a>
          <a href="http://conference.kphpug.jp/2015/" rel="noopener" target="_blank">2015</a>
          <a href="http://conference.kphpug.jp/2014/" rel="noopener" target="_blank">2014</a>
          <a href="http://conference.kphpug.jp/2013/" rel="noopener" target="_blank">2013</a>
          <a href="http://conference.kphpug.jp/2012/" rel="noopener" target="_blank">2012</a>
          <a href="http://conference.kphpug.jp/2011/" rel="noopener" target="_blank">2011</a>
        </div>
      </div>
      <div class="home-Wanted" id="home-Wanted">
        <h2 class="home-Wanted_Title">Wanted!</h2>
        <p class="home-Wanted_Description">間もなく開催 PHPカンファレンス関西 2018<br>本編最後のコンテンツ、LT参加者募集中です！</p>
        <a class="home-Wanted_Speaker" href="https://goo.gl/forms/jfF5X8kH56glakzY2" target="_blank">
          <i class="fa fa-microphone" aria-hidden="true"></i>
          <span>&nbsp;LT募集 申し込み</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/library/_variable.scss";
  @import "~assets/scss/library/_mixin.scss";

  .home-Description {
    @include secPaddiong;
    padding-top: 50px;
    @include desktop {
      padding-top: 80px;
    }

    width: auto;
    background-color: $clr_base;

    &_Title {
      @include secTitle;
    }

    &_Intro {
       margin-bottom: 30px;

      @include desktop() {
        margin-bottom: 50px;
      }
    }
  }
  .home-Past {
    margin-bottom: 30px;
    padding: 20px 0;
    border-radius: 30px;
    background: $clr_baseDark;

    @include desktop() {
      margin-bottom: 60px;
      border-radius: 100px;
    }

    &_List {
      a {
        display: inline-block;
        margin-left: 18px;
        margin-right: 18px;
        color: $clr_accent;
      }
    }
  }
  .home-Wanted {
    padding: 40px 20px;
    border-radius: 80px;
    background: $clr_accent;

    @include desktop() {
      padding: 40px 100px 70px;
    }

    &_Title {
      @include secTitle($clr_base);
    }

    &_Description {
      color: $clr_base;
      margin-bottom: 20px;

      @include desktop() {
        margin-bottom: 50px;
      }
    }

    &_Speaker {
      @include button(#fff,$clr_base);
      margin: 0 5px 10px 5px;
      max-width: 200px;
      width: 100%;
      padding: 15px 15px;
      @include desktop() {
        margin: 0 15px 10px 5px;
        padding: 15px 30px;
      }
    }

    &_Sponsor {
      @include button(#fff,$clr_base);
      margin: 0 5px 10px 5px;
      max-width: 200px;
      width: 100%;
      padding: 15px 15px;
      @include desktop() {
        margin: 0 0 10px 5px;
        padding: 15px 30px;
      }
    }
  }
</style>
