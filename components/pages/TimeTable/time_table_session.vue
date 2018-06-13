<template>
    <div :class="sessionClass" v-if="session">
        <div class="ttsession--track">{{floor}}</div>
        <div class="ttsession--inner">
            <div class="ttsession--title">{{session.title}}</div>
        </div>
        <div class="ttsession--speaker" v-if="session.name">
            <img class="ttsession--img" v-lazy="`/images/speakers/${session.image}`" v-if="session.image">
            <span class="ttsession--name">{{session.name}}</span>
        </div>
        <div class="ttsession--linksheet"></div>
    </div>
    <div class="ttsession tt_else" v-else>
        <div class="ttsession--track">{{floor}}</div>
        <div class="ttsession--title"></div>
    </div>
</template>

<script>
  import TimeTableRow from "./time_table_row"

  export default {
    props: ["session", "floor"],
    data() {
      return {}
    },
    computed:{
      sessionClass(){
        return {
          ttsession: true,
          inactive: this.session && !this.session.title
        }
      }
    },
    components: {
      TimeTableRow
    }
  }

</script>

<style lang="scss" scoped>
    @import "~assets/scss/library/_variable.scss";
    @import "~assets/scss/library/_mixin.scss";

    $link-border-size: 20px;

    .ttsession {
        width: 100%;
        height: 100%;
        position: relative;

        &--cdefault {
        }
        &--track {
            color: white;
            @include desktop() {
                display: none;
            }
        }
        &--inner {
            padding: 10px;
            box-sizing: border-box;
            @include desktop {
                padding: 20px;
            }
        }
        &--title {
            text-align: left;
            font-weight: bold;
            line-height: 1.6;
            @include desktop() {
                font-size: 1.7rem;
            }
        }
        &--speaker {
            display: inline-block;
            padding: 15px;
            position: absolute;
            left: 50%;
            top: 13em;
            transform: translateX(-50%);
            @include desktop {
                top: 7.6em;
                left: 0;
                transform: none;
            }
        }
        &--img {
            display: block;
            margin: 0 auto;
            margin-bottom: 5px;
            width: 50px;
            border-radius: 50%;
            background: white;
            @include desktop {
                display: inline-block;
            }
        }
        &--name {
            margin: 0 auto;
            display: block;
            width: 100px;
            text-align: center;
            font-size: 1.3rem;
            @include desktop() {
                display: inline-block;
                margin-left: .7em;
                width: auto;
                font-size: 1.6rem;
                vertical-align: 25px;
            }
        }

        &--linksheet {
            position: absolute;
            bottom: 0px;
            right: 0px;
            width: 0em;
            height: 0em;
            border-top: $link-border-size solid transparent;
            border-left: $link-border-size solid transparent;
        }
        &--clong {
            width: 20vw;
        }
    }

    .ttsession.type-a {
        background: $clr_main_light;
        .ttsession--track {
            background-color: $clr_main;
            font-size: 1.2rem;
            font-weight: bold;
            padding: 2px 0;
        }
        .ttsession--linksheet {
            display: none;
            border-right: $link-border-size solid $clr_main;
            border-bottom: $link-border-size solid $clr_main;
            &::after {
                display: inline-block;
                content: "\f067";
                font-family: FontAwesome;
                font-size: 1.4rem;
                color: #fff;
                position: absolute;
                bottom: -19px;
                right: -14px;
            }
        }
    }
    .ttsession.type-a.inactive {
        background: rgba(4,195,174,0.1);
        background-image: url("~/assets/images/elephant.png");
        background-position: center;
        background-repeat: no-repeat;
    }

    .ttsession.type-b {
        background: $clr_accent_light;
        .ttsession--track {
            background-color: $clr_accent;
            color: $clr_baseDark;
            font-size: 1.2rem;
            font-weight: bold;
            padding: 2px 0;
        }
        .ttsession--linksheet {
            display: none;
            border-right: $link-border-size solid $clr_accent;
            border-bottom: $link-border-size solid $clr_accent;
            &::after {
                display: inline-block;
                content: "\f067";
                font-family: FontAwesome;
                font-size: 1.4rem;
                color: #fff;
                position: absolute;
                bottom: -19px;
                right: -14px;
            }
        }
    }
    .ttsession.type-b.inactive {
        background: rgba(248,231,28,0.1);
        background-image: url("~/assets/images/elephant.png");
        background-position: center;
        background-repeat: no-repeat;
    }

    .ttsession.type-c {
        background: $clr_base_light;
        .ttsession--track {
            background-color: $clr_base;
            font-size: 1.2rem;
            font-weight: bold;
            padding: 2px 0;
        }
        .ttsession--linksheet {
            display: none;
            border-right: $link-border-size solid $clr_base;
            border-bottom: $link-border-size solid $clr_base;
            &::after {
                display: inline-block;
                content: "\f067";
                font-family: FontAwesome;
                font-size: 1.4rem;
                color: #fff;
                position: absolute;
                bottom: -19px;
                right: -14px;
            }
        }
    }
    .ttsession.type-c.inactive {
        background: rgba(18,77,158,0.05);
        background-image: url("~/assets/images/elephant.png");
        background-position: center;
        background-repeat: no-repeat;
    }


</style>
