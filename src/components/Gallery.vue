<template>
  <div class="modal" ref="modal" @click="closeModal()">
    <img src="" alt="Modal Image" @click="(e) => e.stopPropagation()" />
  </div>
  <div class="gallery" ref="gallery">
    <div class="gradient"></div>
    <div class="open-wrapper">
      <img src="@/assets/search.svg" alt="Search icon." @click="openModal()" />
    </div>
    <vueper-slides :duration="5000" :slideRatio="400 / 940" autoplay>
      <template #bullets="{ bulletIndexes, goToSlide, currentSlide }">
        <div
          v-for="(slideIndex, i) in bulletIndexes"
          :key="i"
          :class="{ active: currentSlide === slideIndex, bullet: true }"
          @click="goToSlide(slideIndex)"
        >
          <img :src="images[i]" alt="Image" />
        </div>
      </template>
      <template #arrow-right>
        <img
          class="arrow"
          src="@/assets/arrow-white-right.svg"
          alt="Arrow right."
        />
      </template>
      <template #arrow-left>
        <img
          class="arrow"
          src="@/assets/arrow-white-left.svg"
          alt="Arrow left."
        />
      </template>
      <vueper-slide v-for="(image, i) in images" :key="i" :image="image">
      </vueper-slide>
    </vueper-slides>
  </div>
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
    VueperSlides,
    VueperSlide,
  },
  methods: {
    openModal(): void {
      const image = this.$refs.gallery
        .querySelector(".active")
        .querySelector("img").src
      this.$refs.modal.querySelector("img").src = image
      this.$refs.modal.classList.add("open")
    },
    closeModal(): void {
      this.$refs.modal.classList.remove("open")
    },
  },
})
export default class Gallery extends Vue {
  @Prop() images!: string[]
  @Ref("gallery") gallery!: HTMLElement
  @Ref("modal") modal!: HTMLElement
}
</script>

<style lang="sass" scoped>
.gallery
  position: relative

.gradient
  position: absolute
  bottom: 0
  z-index: 2
  height: 55%
  width: 100%
  background-image: linear-gradient(to bottom, transparent, black)

.bullet
  z-index: 3
  cursor: pointer

  img
    width: 100%
    aspect-ratio: 1
    object-fit: cover

.active
  pointer-events: none
  filter: brightness(.4)

.arrow
  transform: translateY(-100%)

.open-wrapper
  @extend %center-child
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%

  img
    z-index: 3
    cursor: pointer
    transform: translateY(-50px)
    height: 80px

.modal
  @extend %center-child
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  z-index: -2
  background-color: rgba(0, 0, 0, .8)
  opacity: 0
  transition: opacity .3s ease-in-out

  img
    width: 90%

.open
  opacity: 1
  z-index: 5
</style>
