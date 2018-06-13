<template>
  <section>
    <p-header></p-header>
    <sec-table></sec-table>
    <sec-share></sec-share>
    <sec-follow></sec-follow>
    <p-footer></p-footer>
  </section>
</template>

<script>
import pHeader from '~/components/Header.vue'
import secTable from '~/components/pages/TimeTable/time_table.vue'
import secShare from '~/components/pages/Top/Share.vue'
import secFollow from '~/components/pages/Top/Follow.vue'
import pFooter from '~/components/Footer.vue'

export default{
  components:{
    pHeader,
    secTable,
    secShare,
    secFollow,
    pFooter

  },
  head :{
      title: 'タイムテーブル | PHP カンファレンス関西 2018',
      meta: [
          { property: 'og:title', content: 'タイムテーブル | PHP カンファレンス関西 2018' },
          { property: 'og:image', content: 'https://2018.kphpug.jp/images/ogp.jpg' },
          { property: 'og:url', content: 'https://2018.kphpug.jp/time_table' },
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
