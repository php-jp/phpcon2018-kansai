<template>
  <div class="home-Sponsor">
    <div class="home-Sponsor_Wave"></div>
    <div class="st-Container">
      <h2 class="home-Sponsor_Title">SPONSOR BOOTH</h2>

<div class="content">
  <img class="boothimg" src=/images/booth1.png alt="">
  <div class="content_textleft">広々としたスポンサーブースにはなんと前回の倍近くの企業様の出展が！！<br>
  PHPカンファレンス関西初出展の企業様も多く、各スポンサーブースではオリジナリティ溢れるコンテンツをご用意されていました。<br>
  参加者はスポンサーブースに行くと貴重な情報と素敵なグッズをゲットできるだけでなく「ガラポン抽選カード」も集めることができて、まさに一石三鳥！！</div>
</div>

<div class="content">


  <div class="content_text">カンファレンスの大きな役割の一つ「人と人、人と企業を繋ぐこと」<br>
  カンファレンス運営はご協賛してくださる企業様とイベントに参加してくださるみなさまがいなければ決して成り立ちません。<br>
  今年度のカンファレンスでは今まで以上に多くの参加者の方と企業様に交流が生まれ、スポンサーブースがとても活気溢れた空間となりました。<br>
  ここで生まれたつながりが今後も末長く続いていきますように...☆</div>
  <img class="boothimg" src=/images/booth2.png  alt="">
</div>

<h2 class="home-Sponsor_Title">GARAPON BOOTH</h2>
  <div class="content">
  <img class="boothimg" src=/images/booth3.png  alt="">

  <div class="content_textleft">今年で8回目となるPHPカンファレンス関西では毎年たくさんの方々にご来場いただいている感謝の気持ちをこめ、ハズレなしの「ガラポン抽選会」を企画しました。<br>
  肝心の景品はケース付きのロゴ入り液晶クリーナー、イベントのロゴ＆カワイイぞうさんの入った木製ケーブルホルダー、ロゴ入りA4サイズの nu-board と超豪華！！<br>
  ぺちこんでゲットしたグッズを使えば、今まで以上に業務がはかどっちゃうかも！？</div>
  </div>


  <div class="content">
  <div class="content_text">ガラポン抽選会では「PHPといえば...」のぞうさんをモチーフとしたトランプカードがとってもカワイイと大好評♪<br>
      ついつい集めたくなっちゃうこのカード、実はセッションルームにワイルドカードとして使える「ジョーカー」もご用意していました！<br>
      全絵柄とジョーカーを集めるとトランプカードは13種類。あなたは何種類集めることができましたか？</div>
        <img class="boothimg" src=/images/booth4.png  alt="">
  </div>

</div>

</div>
</template>

<script>
export default {
  computed: {
    platinum() {
      return this.$store.state.sponsors.platinum;
    },
    gold() {
      return this.$store.state.sponsors.gold;
    },
    silver() {
      return this.$store.state.sponsors.silver;
    },
    media() {
      return this.$store.state.sponsors.media;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/library/_variable.scss";
@import "~assets/scss/library/_mixin.scss";

.home-Sponsor {
  padding: 70px 0 70px 0;
  width: auto;
  background: $clr_baseDark;

  &_Wave {
    width: 100%;
    height: 20px;
    background-image: url("~/assets/images/wavyLine-dark.png");
    background-repeat: repeat-x;
    background-size: contain;
    position: relative;
    top: -90px;
  }

  &_Title {
    @include secTitle;
    margin-top: 50px;
  }

  &_Description {
    max-width: 770px;
    width: 100%;
    margin: 0 auto;
    padding: 0 0 30px 0;
  }

  &_Large {
    display: inline-block;
    max-width: 330px;
    width: 100%;
    margin: 0 5px 30px 5px;
    cursor: pointer;

    @include desktop() {
      max-width: 440px;
      margin: 0 15px 40px 15px;
    }
  }

  &_Medium {
    display: inline-block;
    max-width: 150px;
    width: 100%;
    margin: 0 5px 5px 5px;
    cursor: pointer;

    @include desktop() {
      max-width: 215px;
      margin: 0 10px 15px 10px;
    }
  }

  &_Small {
    display: inline-block;
    max-width: 100px;
    width: 100%;
    cursor: pointer;
    margin: 0 5px 5px 5px;

    @include desktop() {
      max-width: 150px;
      margin: 0 10px 15px 10px;
    }
  }

  &_Image {
    width: 100%;
  }
}

.content {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;

  &_text {
    text-align: left;
    width: 465px;
  }

  &_textleft {
    text-align: left;
    margin-left: auto;
    width: 465px;
  }
}
.boothimg {
  max-width: 465px;
  min-width: 282px;
  width: 100%;
  height: 100%;
}
</style>
