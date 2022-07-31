<template>
  <section :class="[className, 'news-carousel']">
    <h3>{{ title }}</h3>
    <div class="content">
      <vueper-slides
        :gap="3"
        :visible-slides="visibleSlides"
        :bullets="false"
        :fixed-height="height"
      >
        <template #arrow-right>
          <i></i>
        </template>
        <template #arrow-left>
          <i></i>
        </template>
        <vueper-slide v-for="(item, index) in news" :key="index">
          <template #content>
            <router-link :to="`/news/${item.id}`" ref="items">
              <img :src="`/headers/${item.headerImage}`" :alt="item.headline" />
              <p class="date-sm">{{ item.date }}</p>
              <h4>{{ item.headline }}</h4>
            </router-link>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import { Prop, Ref } from "vue-property-decorator"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { VueperSlides, VueperSlide } from "vueperslides"
import "vueperslides/dist/vueperslides.css"

@Options({
  components: {
    VueperSlide,
    VueperSlides,
  },
  methods: {
    resizeHandler() {
      const heights = this.$refs.items.map(
        (item: { $el: HTMLAnchorElement }) => item.$el.offsetHeight
      )
      this.height = Math.max(...heights) + "px"
    },
  },
  mounted() {
    window.addEventListener("resize", this.resizeHandler)
    this.resizeHandler()
  },
  unmounted() {
    window.removeEventListener("resize", this.resizeHandler)
  },
})
export default class NewsCarousel extends Vue {
  @Prop() news!: News[]
  @Prop() visibleSlides!: number
  @Prop() title!: string
  @Prop() className!: string
  @Ref("items") items!: HTMLAnchorElement[]
  height = "0px"
}
</script>

<style lang="sass" scoped>
section
  box-sizing: border-box
  padding: 24px 32px 32px
  background-color: white
  border-left: 13px solid
  position: relative

.content
  margin-top: 30px

img
  width: 100%
  aspect-ratio: 26 / 15
  object-fit: cover

a
  text-decoration: none
  color: inherit
  display: block
</style>
