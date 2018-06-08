<template>
  <section>
    <sec-hero></sec-hero>
    <sec-about></sec-about>
    <!--<sec-speakers></sec-speakers>-->
    <sec-time-table></sec-time-table>
    <sec-access></sec-access>
    <sec-sponsor></sec-sponsor>
    <sec-share></sec-share>
    <sec-follow></sec-follow>
    <p-footer></p-footer>
  </section>
</template>

<script>
  import secHero from '~/components/pages/Top/Hero.vue'
  import secAbout from '~/components/pages/Top/About.vue'
  import secSpeakers from '~/components/pages/Top/Speakers.vue'
  import secTimeTable from '~/components/pages/Top/TimeTable.vue'
  import secAccess from '~/components/pages/Top/Access.vue'
  import secSponsor from '~/components/pages/Top/Sponsor.vue'
  import secShare from '~/components/pages/Top/Share.vue'
  import secFollow from '~/components/pages/Top/Follow.vue'
  import pFooter from '~/components/Footer.vue'

  export default{
      components:{
          secHero,
          secAbout,
          secTimeTable,
          secSpeakers,
          secAccess,
          secSponsor,
          secShare,
          secFollow,
          pFooter
      },
      head: {
        title: 'PHPカンファレンス関西2018 は 7月14日(土)にグランフロント大阪にて開催!',
        meta: [
          { property: 'og:title', content: 'PHPカンファレンス関西2018 は 7月14日(土)にグランフロント大阪にて開催!' },
          { property: 'og:image', content: 'https://2018.kphpug.jp/images/ogp.jpg' },
          { property: 'og:url', content: 'https://2018.kphpug.jp/' },
          { property: 'og:description', content: '関西PHPerの夏はこれがなくちゃ始まらない！今年で８回目となる関西最大級のPHPイベント、今年も開催です。全国PHPerが大阪に集結「PHPカンファレンス関西」で心に残る夏の思い出を！' },
          { name: 'description', content: '関西PHPerの夏はこれがなくちゃ始まらない！今年で８回目となる関西最大級のPHPイベント、今年も開催です。全国PHPerが大阪に集結「PHPカンファレンス関西」で心に残る夏の思い出を！' }
        ]
      }
  }

</script>

<style lang="scss">
  @import "~assets/scss/foundation/_base.scss";
  @import "~assets/scss/object/_common.scss";
</style>
