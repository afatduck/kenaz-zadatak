<template>
  <header>
    <vueper-slides
      :duration="5000"
      :bullets="false"
      :slideRatio="425 / 940"
      :dragging-distance="50"
      autoplay
    >
      <template #arrow-left>
        <img src="@/assets/arrow-white-left.svg" alt="Arrow left." />
      </template>
      <template #arrow-right>
        <img src="@/assets/arrow-white-right.svg" alt="Arrow right." />
      </template>
      <vueper-slide
        v-for="(slide, i) in news"
        :key="i"
        :image="require(`@/assets/headers/${slide.headerImage}`)"
      >
        <template #content>
          <div class="slide-content">
            <div class="gradient"></div>
            <div class="text">
              <p class="details">
                <span>{{ slide.date }}</span>
                <span>
                  <img src="@/assets/comment.svg" alt="Comment icon." />
                  {{ slide.comments.length }} Comments
                </span>
              </p>
              <h2>{{ slide.headline }}</h2>
              <router-link :to="{ name: 'news', params: { id: slide.id } }">
                Read article
              </router-link>
            </div>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import { Prop } from "vue-property-decorator"
// typescript <3 <3 <3
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { VueperSlides, VueperSlide } from "vueperslides"
import "vueperslides/dist/vueperslides.css"

@Options({
  components: {
    VueperSlide,
    VueperSlides,
  },
})
export default class HomeView extends Vue {
  @Prop() news!: News[]
}
</script>

<style lang="sass" scoped>
.slide-content
  height: 100%
  display: flex
  flex-direction: column
  justify-content: flex-end
  position: relative
  color: $text-light

.gradient
  position: absolute
  height: 100%
  width: 100%
  background-image: linear-gradient(to bottom, transparent 10%, black)
  z-index: 1

.text
  z-index: 2
  margin: 28px 60px

  a
    text-decoration: none
    color: $text-light
    font-size: 12px
    line-height: 14px
    padding: 6px 14px
    border: 1px solid $text-light
    margin-top: 14px
    display: inline-block

.details
  font-size: 12px
  line-height: 14.45px

  img
    width: 16px
    height: 14px
    margin-left: 18px

h2
  font-size: 24px
  line-height: 28px
  font-weight: 700
  font-family: "Bitter", serif
  margin: 0

@media (screen and min-width: 768px)
  .gradient
    height: 320 / 425 * 100%

  .text
    a
      font-size: 14px
      line-height: 16.86px
      padding: 8px 22px
      margin-top: 18px

  h2
    font-size: 34px
    line-height: 40.8px

@media (screen and min-width: 940px)
  .gradient
    height: 240 / 425 * 100%

  .text
    margin: 28px
</style>
