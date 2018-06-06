<template>
    <div class="ttsession" v-if="session">
      <div class="ttsession--track">{{floor}}</div>
      <div class="ttsession--title" >{{session.title}}</div>
      <div class="ttsession--image" v-if="session.name" >
        <img v-lazy="`/images/speakers/${session.image}`" v-if="session.image">
      </div>
      <div class="ttsession--name" >{{session.name}}</div>
      <div class="ttsession--linksheet"></div>
      <div class="ttsession--link">＋</div>
    </div>
    <div class="ttsession tt_else" v-else>
        <div class="ttsession--track">{{floor}}</div>
        <div class="ttsession--title" ></div>
    </div>
</template>

<script>
  import TimeTableRow from "./time_table_row"
    export default {
    props:["session","floor"],
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


$link-border-size: 1em;

.ttsession{
  width: 100%;
  height: 100%;

  position: relative;

  &--cdefault{
  }
  &--track{
    color: white;
    @include desktop() {
      display: none;
    }
  }
  &--title{
    text-align: left;
    padding: .5em;
    line-height: 1em;
    @include desktop() {
      padding: 2em 1em;
      line-height: 2em;
    }
  }
  &--image{
    position: absolute;
    top: 8em;
    width: 100%;
    @include desktop() {
      width: auto;
      top: auto;
      bottom: 1em;
      left: 1em;
    }
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
    @include desktop() {
      width: auto;
      top: auto;
      bottom: 2.5em;
      left: 6em;
    }
  }

  &--linksheet{
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 0em;
    height: 0em;
    border-top: $link-border-size solid transparent;
    border-left: $link-border-size solid transparent;
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
  .ttsession--track {
    background-color: $clr_main;
  }
  .ttsession--linksheet {
    border-right: $link-border-size solid $clr_main;
    border-bottom: $link-border-size solid $clr_main;
  }
}
.ttsession.type-b{
  background: $clr_accent_light;
  .ttsession--track {
    background-color: $clr_accent;
    color: $clr_baseDark;
  }
  .ttsession--linksheet {
    border-right: $link-border-size solid $clr_accent;
    border-bottom: $link-border-size solid $clr_accent;
  }
}
.ttsession.type-c{
  background: $clr_base_light;
  .ttsession--track {
    background-color: $clr_base;
  }
  .ttsession--linksheet {
    border-right: $link-border-size solid $clr_base;
    border-bottom: $link-border-size solid $clr_base;
  }
}


</style>
