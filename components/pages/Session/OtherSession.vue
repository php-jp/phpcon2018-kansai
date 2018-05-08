<template>
  <div class="home-Other">
    <div class="st-Container">
      <h2 class="home-Other-title">OTHER SESSION</h2>
      <div class="home-Other-list">
        <div class="home-Other_session" v-for="session in sessions" :key="session.title" >
          <!--<img src="" alt="dummy" class="home-Session_Img" >-->
          <div class="home-Other_Img"></div>
          <p class="home-Other_description">{{session.title}}</p>
          <div class="home-Other_triangle">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div class="home-Other_link">
        <a href="" target="_blank" class="home-Other_Btn">
          <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
          <span>タイムテーブルへ</span>
        </a>
        <a href="" target="_blank" class="home-Other_Btn">
          <i class="fa fa-home" aria-hidden="true"></i>
          <span>TOPへ戻る</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
//                dummy
                sessions: [
                    {title: 'session1'},
                    {title: 'session2'},
                    {title: 'session3'},
                    {title: 'session4'},
                    {title: 'session5'},
                    {title: 'session6'}

                ]
            }
        }
    }

</script>

<style lang="scss" scoped>
  @import "~assets/scss/library/_variable.scss";
  @import "~assets/scss/library/_mixin.scss";

  .home-Other {
      width: auto;
      background-color: #004DA4;
      padding: 70px 0;
      &-title{
        margin-bottom: 60px;
      }
      &-list {
        display: flex;
        list-style: none;
        padding: 0;
        justify-content:space-between;
        flex-wrap: wrap;
        margin-bottom: 10px;

      }
      &_session {
        background-color: #5c84b4;
        position: relative;
        width: 45%;
        height: 140px;
        margin-bottom: 50px;
        .home-Other_Img{
          top:-25px;
          left: 46px;
          position: absolute;
          background-color: #ffffff;
          border-radius: 50%;
          height: 60px;
          width: 60px;
        }
        .home-Other_description{
          position: absolute;
          top:50px;
          left: 50px;
        }
        .home-Other_triangle{
          position: absolute;
          top: 88px;
          left:100px;
          width:0;
          height: 0;
          border-top: 25px solid transparent;
          border-right: 25px solid #fff;
          border-bottom: 25px solid #fff;
          border-left: 25px solid transparent;
          color:#144c9c;
          font-size: 18px;
        }

      }
     &_link {
       .home-Other_Btn{
         @include button();
         min-width: 13em;
         font-size: 16px;
         font-weight: 600;
         padding: 15px 2em;
         margin: 1em;
         @include desktop() {
           font-size: 17px;
           padding: 15px 30px;
         }
       }

     }

  }

</style>
