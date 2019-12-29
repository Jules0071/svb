<template>
    <div class="svb-viewer">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">I'm Slide {{ slide }}</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>

    // require styles
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        components: {
            swiper,
            swiperSlide
        },
        props: {
            msg: String
        },
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                swiperSlides: [1, 2, 3, 4, 5]
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },

        methods: {
            callback() {

            }
        },

        mounted() {
            setInterval(() => {
                if (this.swiperSlides.length < 10) {
                    this.swiperSlides.push(this.swiperSlides.length + 1)
                }
            }, 3000)
        }
    }
</script>

<style scoped>

</style>
