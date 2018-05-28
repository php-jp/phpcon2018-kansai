<template>
    <div class="ttsession">
      <div class="ttsession--track">C01+C02</div>
      <div class="ttsession--title">サンプルタイトル</div>
      <div class="ttsession--image">
        <img src="http://placehold.it/500x500" alt="">
      </div>
      <div class="ttsession--name">ほげほげ</div>
      <div class="ttsession--linksheet"></div>
      <div class="ttsession--link">＋</div>
    </div>
</template>

<script>
  import TimeTableRow from "./time_table_row"
    export default {
        data() {
            return {

            }
        },
      components:{
          TimeTableRow
      }
    }

</script>

<style lang="scss" scoped>
    @import "~assets/scss/library/_variable.scss";
    @import "~assets/scss/library/_mixin.scss";



.ttsession{
  width: 100%;
  height: 100%;

  position: relative;

  &--cdefault{
  }
  &--track{
    background-color: black;
    color: white;
    margin-bottom: 15px;
  }
  &--title{
    text-align: left;
  }
  &--image{
    position: absolute;
    top: 8em;
    width: 100%;
    img{
      width: 3em;
      border-radius: 50%;
    }
  }
  &--name{
    position: absolute;
    top: (8em + 3em ) * 10/8 + .5; // font-size .8em 補正の 10/8 と .5 の余白
    width: 100%;
    text-align: center;
    font-size: .8em;
  }
  $link-border-size: 1em;
  &--linksheet{
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 0em;
    height: 0em;
    border-top: $link-border-size solid transparent;
    border-left: $link-border-size solid transparent;
    border-right: $link-border-size solid black;
    border-bottom: $link-border-size solid black;
  }
  &--link{
    position: absolute;
    width: $link-border-size;
    height: $link-border-size;
    line-height: $link-border-size;
    font-weight: bold;
    bottom: 0;
    right: 0;
    text-align: center;

    color:white;

  }
  &--clong{
    width: 20vw;
  }
}

.ttsession.type-a{
  background: $clr_main_light;
}
.ttsession.type-b{
  background: $clr_accent_light;
}
.ttsession.type-c{
  background: $clr_base_light;
}


</style>
