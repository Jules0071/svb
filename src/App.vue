<template>
    <div id="app">
        <svb-header></svb-header>

        <div class="svb-container">
            <svb-button>Verein</svb-button>
            <svb-button>Verein</svb-button>
        </div>

        <svb-footer></svb-footer>

    </div>
</template>

<script>

    import Vue from 'vue'

    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import Button from './components/ui/Button.vue';
    import FontAwesome from '@fortawesome/fontawesome-free/scss/fontawesome.scss';


    export default {
        name: 'app',
        components: {
            'svb-header': Header,
            'svb-footer': Footer,
            'svb-button': Button
        },
        data() {
            return {
                api: 'https://svbuehlertal.de/wp-json/?page=1',
                data: {}
            }
        },
        mounted() {
            this.$http.get(this.api).then((response) => {
                console.log(response.data);
                this.data = response.data
            })
        }
    }
</script>

<style lang="scss">

    @import "scss/global";

</style>
