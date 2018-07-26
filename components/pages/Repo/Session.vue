<template>
  <div class="home-Session">
    <div class="home-Session_Wave"></div>

   <div class="st-Container">
    <h2 class="home-Session_Title">SESSION</h2>


       　   　    <div class="section" style="height: auto;">
                    <div class="section_room">
                      <h2>c01 + c02</h2>
                    </div>
                    <div class="session_img">
                      <img src="images/name.png">
                      </div>
                    <div class="session_inner">
                      <h2 style="height: auto;">初心者「に」教えて欲しいこと</h2>
                      <p>松藤 秀治</p>
                    </div>
                    <div class="box">
                    <div class="session_slidebox">
                      <div class="session_button" style="height: auto;"><a class="session_slide" href="http://blog.shin1x1.com/entry/2017/07/18/000000" target="_blank">SLIDE<i class="fa fa-external-link session_slide_icon"></i></a>
                      </div>
                      </div>
                      </div>
                    </div>

                  </div>
</div>

</template>

<script>
</script>

<style lang="scss" scoped>
@import "~assets/scss/library/_variable.scss";
@import "~assets/scss/library/_mixin.scss";

.home-Session {
  padding: 70px 0 70px 0;
  width: auto;
  background-color: $clr_main;

  &_Wave {
    width: 100%;
    height: 20px;
    background-image: url("~/assets/images/wavyLine-keyColor.png");
    background-repeat: repeat-x;
    background-size: contain;
    position: relative;
    top: -90px;
  }

  &_Title {
    @include secTitle;
    margin-bottom: 30px;
  }

  @include desktop() {
    margin-bottom: 30px;
    height: 400px;
  }
}

.section {
  background: #fef5be;
  max-width: 285px;
  color: #124d9e;

  &_room {
    width: 100%;
    background-color: #f8e71c;
  }

  &_inner {
    padding: 5px;
  }
}

.session_inner h2 {
  max-width: 200px;
  display: inline-block;
  text-align: center;
}

.session_slidebox {
  display: inline-block;
  font-size: 1rem;
  padding: 7px 20px;
  border-radius: 25px;
  text-decoration: none;
  color: #fff;
  background-image: linear-gradient(#f8e71c);
  margin: 10px;
  max-width: 181px;
}

.box {
  max-width: 285px;
  background-color: #fff;
}
</style>
