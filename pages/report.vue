<template>
  <section>
    <sec-hero></sec-hero>
    <sec-session></sec-session>
    <sec-booth></sec-booth>
    <sec-blog></sec-blog>
    <sec-sponsor></sec-sponsor>
    <sec-share></sec-share>
    <sec-presented></sec-presented>
    <p-footer></p-footer>
  </section>
</template>

<script>
import secHero from "~/components/pages/Repo/Hero.vue";
import secSession from "~/components/pages/Repo/Session.vue";
import secBooth from "~/components/pages/Repo/Booth.vue";
import secBlog from "~/components/pages/Repo/Blog.vue";
import secSponsor from "~/components/pages/Repo/Sponsor.vue";
import secShare from "~/components/pages/Repo/Share.vue";
import secPresented from "~/components/pages/Repo/Presented.vue";
import pFooter from "~/components/Footer.vue";

export default {
  components: {
    secHero,
    secSession,
    secBooth,
    secBlog,
    secSponsor,
    secShare,
    secPresented,
    pFooter,
  },
  head: {
    title:
      "PHPカンファレンス関西2018 は 7月14日(土)にグランフロント大阪にて開催!",
    meta: [
      {
        property: "og:title",
        content:
          "PHPカンファレンス関西2018 は 7月14日(土)にグランフロント大阪にて開催!",
      },
      {property: "og:image", content: "https://2018.kphpug.jp/images/ogp.jpg"},
      {property: "og:url", content: "https://2018.kphpug.jp/"},
      {
        property: "og:description",
        content:
          "関西PHPerの夏はこれがなくちゃ始まらない！今年で８回目となる関西最大級のPHPイベント、今年も開催です。全国PHPerが大阪に集結「PHPカンファレンス関西」で心に残る夏の思い出を！",
      },
      {
        name: "description",
        content:
          "関西PHPerの夏はこれがなくちゃ始まらない！今年で８回目となる関西最大級のPHPイベント、今年も開催です。全国PHPerが大阪に集結「PHPカンファレンス関西」で心に残る夏の思い出を！",
      },
    ],
  },
};
</script>

<style lang="scss">
@import "~assets/scss/foundation/_base.scss";
@import "~assets/scss/object/_common.scss";
</style>
