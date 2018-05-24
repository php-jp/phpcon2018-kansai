<template>
    <section>
        <sec-table></sec-table>
        <sec-share></sec-share>
        <sec-follow></sec-follow>
        <p-footer></p-footer>
    </section>
</template>

<script>

    import secTable from '~/components/pages/TimeTable/time_table.vue'
    import secShare from '~/components/pages/Top/Share.vue'
    import secFollow from '~/components/pages/Top/Follow.vue'
    import pFooter from '~/components/Footer.vue'

    export default{
        components:{
            secTable,
            secShare,
            secFollow,
            pFooter

        }
    }

</script>


<style lang="scss">
    @import "~assets/scss/foundation/_base.scss";
    @import "~assets/scss/object/_common.scss";
</style>
