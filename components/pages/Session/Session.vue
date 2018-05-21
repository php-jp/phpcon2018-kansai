<template>
  <div class="home-Session">
    <div class="st-Container">
      <h2 class="home-Session_title">SESSION</h2>
      <p class="home-Session_text">初心者から上級者まで楽しめるセッションが目白押し!これから始めようと思っていたフレームワークや、気になっていた技術についての情報が得られるかも!?（仮）クリックするとセッション詳細が確認できます</p>
      <div class="home-Session_overScroll">
        <div class="home-Session_TimeSelect">
          <div class="home-Session_Time" v-for="time in times" :key="time.time" >
            {{time.time}}
          </div>
        </div>
      </div>
      <div class="home-Session_Main">
        <h3 class="home-Session_RoomNumber">Room C01+C02</h3>
        <div class="home-Session_MainWrap">
          <span class="home-Session_TimeSchedule">10:00 - 11:40</span>
          <h3 class="home-Session_MainTitle">25字でできるPHPできるあんなことやこんなこと</h3>
          <h5 class="home-Session_MainSubTitle">- サブタイトルがある場合、このエリアに入ります。 -</h5>
          <div class="home-Session_MainText">
            <p>PHP5.3以降PHPはめまぐるしい変化を遂げ様々な新機能が追加されてきました。新しく追加された機能の一つ一つは、便利で有用なものの、まだ使った事がない、よくわからないという人も多いのではないでしょうか？</p>
            <p>Composerって何だろう、というところから、PHP7.1最新の新機能まで、今現場で使えるPHPの新機能をおさらいしていきましょう。</p>
          </div>
          <div class="home-Session_Profile">
            <div class="home-Session_ProfileImgWrap">
              <div class="home-Session_ProfileImg"></div>
            </div>
            <div class="home-Session_Personal">
              <div class="home-Session_ProfileName">安井 利紗</div>
              <div class="home-Session_ProfileCompany">株式会社chatbox</div>
              <p class="home-Session_ProfileText">Web制作のご相談、技術顧問に関するご相談、イベント・スクールに関するお問い合わせなど、 chatbox に関する相談・ご質問はお気軽に下記「お問い合わせフォーム」からお願いいたします。</p>
            </div>
            <div class="home-Session_Links">
              <a href="" class="home-Session_Twitter"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
              <a href="" class="home-Session_Facebook"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
              <a href="" class="home-Session_Link"><i class="fas fa-link"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="home-Session_Other">
        <h2>同時刻の他のセッション</h2>
        <div class="home-Session_Lists">
          <div class="home-Session_List" v-for="item in items" :key="item.item">
            <h3 class="home-Session_OtherRoomNumber">{{item.room}}</h3>
            <a href="" class="home-Session_Item">
              <div class="home-Session_OtherDescription">
                <div class="home-Session_OtherImg"></div>
                <p class="home-Session_OtherText">{{item.msg}}</p>
                <div class="home-Session_OtherIcon"><i class="fas fa-plus" aria-hidden="true"></i></div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="home-Session_Wave"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clickNumber:0,
      isSelect:false,
      times:[
        {time:'10:00'},
        {time:'10:00'},
        {time:'10:00'},
        {time:'10:00'},
        {time:'10:00'},
      ],
      items:[
        {room:'Room C01+C02', msg:'25文字でできるPHPできるあんなことやこんなこと'},
        {room:'Room C01+C02', msg:'25文字でできるPHPできるあんなことやこんなこと'}
      ]
    }
  }
}



</script>

<style lang="scss" scoped>
  @import "~assets/scss/library/_variable.scss";
  @import "~assets/scss/library/_mixin.scss";
  .home-Session{
    padding:20px 0 70px 0;
    &_text {
      margin-bottom: 50px;
    }
    &_overScroll {
      overflow-x: scroll;
      margin-bottom: 20px;
      .home-Session_TimeSelect {
        display: inline-block;
        white-space: nowrap;
        .home-Session_Time {
          display: inline-block;
          width: 70px;
          height: 50px;
          border-radius: 10px;
          background-color: #fff;
          color: #44648c;
          margin: 0 10px 0 0;
        }
      }
    }
    &_Main {

    }
    &_RoomNumber {
      background-color: transparent;
      width: 50%;
      text-align: center;
      border: 1px solid #fff;
      border-bottom: transparent;
      border-radius: 10px 10px 0 0;
      margin: 0;
      line-height: 3;
      @include desktop() {
        width: 25%;
      }
    }
    &_MainWrap {
      background-color: #fff;
      color: $clr_baseDark;
      padding: 30px 30px;
      text-align: left;
      @include desktop() {
        padding: 30px 50px;
      }
    }
    &_TimeSchedule {
      background-color: #ccc;
      padding: 5px;
      border-radius: 5px;
    }
    &_MainTitle {

    }
    &_MainSubTitle {

    }
    &_MainText {
      margin-bottom: 30px;
    }
    &_Profile {
      border-top: 1px solid $clr_baseDark;
      text-align: center;
    }
    &_ProfileImgWrap {
      @include desktop() {
        display: inline-block;
        width: 30%;
        text-align: left;
      }
    }
    &_ProfileImg {
      background-image: url('http://placehold.it/150x150');
      width: 150px;
      height: 150px;
      background-size: contain;
      border-radius: 50%;
      margin: 40px 10px 10px 10px;
      display: inline-block;
    }
    &_Personal {
      display: inline-block;
      width: 100%;
      margin-bottom: 20px;
      @include desktop() {
        text-align: left;
        margin: 0;
        width: 70%;
      }
    }
    &_ProfileName {
      font-weight: bold;
      font-size: 24px;
    }
    &_ProfileCompany {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 20px;
    }
    &_ProfileText {
      text-align: left;
    }
    &_Links {
      @include desktop() {
        text-align: left;
      }
    }
    &_Twitter {
      position: relative;
      top: 0;
      display: inline-block;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background-color: #ccc;
      margin: 0 10px;
      @include desktop() {
        margin: 0 0 0 10px;
      }
      i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: $clr_baseDark;
      }
    }
    &_Facebook {
      position: relative;
      top: 0;
      display: inline-block;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background-color: #ccc;
      margin: 0 10px;
      @include desktop() {
        margin: 0 0 0 10px;
      }
      i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: $clr_baseDark;
      }
    }
    &_Link {
      position: relative;
      top: 0;
      display: inline-block;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background-color: #ccc;
      margin: 0 10px;
      @include desktop() {
        margin: 0 0 0 10px;
      }
      i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: $clr_baseDark;
      }
    }
    &_Lists {
      list-style: none;
      text-align: left;
      color: $clr_baseDark;
      padding: 0;
      @include desktop() {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
    &_List {
      margin-bottom: 20px;
      @include desktop() {
        width: 48%;
      }
    }
    &_OtherRoomNumber {
      background-color: $clr_accent;
      width: 50%;
      text-align: center;
      border-radius: 10px 10px 0 0;
      margin: 0;
      line-height: 3;
      @include desktop() {
        width: 40%;
      }
    }
    &_Item {
      display: inline-block;
      text-decoration: none;
      background-color: #fff;
      color: $clr_baseDark;
      width: 100%;
    }
    &_OtherDescription {
      position: relative;
    }
    &_OtherImg {
      background-image: url('http://placehold.it/100x100');
      width: 100px;
      height: 100px;
      background-size: contain;
      border-radius: 50%;
      margin: 10px;
      display: inline-block;
    }
    &_OtherText {
      display: inline-block;
      width: 50%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      @include desktop() {
        width: 60%;
      }
    }
    &_OtherIcon {
      position: absolute;
      bottom: 0;
      right: 0;
      border: 25px solid transparent;
      border-right: 25px solid $clr_accent;
      border-bottom: 25px solid $clr_accent;
      i {
        position: absolute;
        top: 50%;
        transform: translateY(-25%);
        font-size: 25px;
        color: #fff;
      }
    }
  }

</style>
