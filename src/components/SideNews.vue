<template>
  <div class="side-news" :style="{ height }">
    <div class="menu">
      <button
        :class="currentTab === 'popular' && 'active'"
        @click="changeTab('popular')"
      >
        Popular
      </button>
      <button
        :class="currentTab === 'topRated' && 'active'"
        @click="changeTab('topRated')"
      >
        Top Rated
      </button>
      <button
        :class="currentTab === 'comments' && 'active'"
        @click="changeTab('comments')"
      >
        Comments
      </button>
    </div>
    <section ref="section">
      <router-link
        v-for="(item, index) in current"
        :to="{ name: 'news', params: { id: item.id } }"
        :key="index"
      >
        <div>
          <p class="comments"><i />{{ item.comments.length }}</p>
          <p class="date">{{ item.date }}</p>
          <h4>{{ item.headline }}</h4>
        </div>
        <img
          :src="require(`@/assets/headers/${item.headerImage}`)"
          :alt="item.headline"
        />
      </router-link>
    </section>
    <div :class="rerender"></div>
  </div>
</template>

<script lang="ts">
import { Maybe } from "@/utils"
import { Options, Vue } from "vue-class-component"
import { Prop, Ref } from "vue-property-decorator"

type Tabs = "popular" | "topRated" | "comments"

@Options({
  methods: {
    changeTab(tab: Tabs): void {
      this.currentTab = tab
      this.$refs.section.classList.remove("anim")
      this.$refs.section.classList.add("anim")
      setTimeout(() => {
        this.current = this[tab]
        this.rerender = !this.rerender
      }, 500)
      setTimeout(() => this.$refs.section.classList.remove("anim"), 1000)
    },
    maybeSection(id: string): Maybe<number> {
      return Maybe.of(id)
        .map((id) => document.getElementById(id))
        .map((el: HTMLElement) => el.offsetHeight)
    },
    setHeight(): void {
      const maybeNews = this.maybeSection("news-section")
      const maybeSports = this.maybeSection("sports-section")
      const height = maybeNews.get() + maybeSports.get()
      if (height && window.innerWidth >= 960) {
        this.height = `${height + 18}px`
      } else {
        this.height = "fit-content"
      }
    },
  },
  mounted(): void {
    this.current = this[this.currentTab]
    this.setHeight()
    window.addEventListener("resize", this.setHeight)
  },
  beforeDestroy(): void {
    window.removeEventListener("resize", this.setHeight)
  },
})
export default class SideNews extends Vue {
  @Prop() popular!: News[]
  @Prop() topRated!: News[]
  @Prop() comments!: News[]
  @Ref("section") section!: HTMLDivElement
  currentTab: Tabs = "popular"
  current: News[] = []
  rerender = false
  height = "fit-content"
}
</script>

<style lang="sass" scoped>
$hover: #453C75
$menu: #3E3668
$active: #FCC44D
$p-color: #ACB3BA

@keyframes section-anim
  0%
    transform: translateX(0)
    opacity: 1
  49%
    transform: translateX(-50%)
    opacity: 0
  51%
    transform: translateX(50%)
    opacity: 0
  100%
    transform: translateX(0)
    opacity: 1

.anim
  animation: section-anim 1s ease-in-out

.side-news
  overflow: hidden
  background-color: $primary

.menu
  height: 54px
  background-color: $menu
  display: flex
  align-items: center
  justify-content: space-around
  box-sizing: border-box
  padding: 0 28px

  button
    border: none
    border-bottom: 1px solid
    outline: none
    display: inline-block
    font-family: inherit
    background-color: transparent
    color: #fff
    font-size: 14px
    line-height: 16.86px
    padding: 0
    margin: 0
    cursor: pointer
    &:hover
      color: #ccc
    &.active
      color: $active

a
  display: block
  text-decoration: none
  boxsizing: border-box
  padding: 20px 32px
  border-bottom: 1px solid $menu
  display: flex
  gap: 10px
  justify-content: space-between
  &:hover
    background-color: $hover

.comments
  text-align: right

p
  margin: 0
  font-size: 10px
  line-height: 12.04px
  color: $p-color

  i
    background-image: url(@/assets/comment.svg)
    display: inline-block
    width: 11px
    height: 10px
    background-size: contain
    margin-right: 3px

h4
  font-size: 14px
  line-height: 16.8px
  font-family: "Bitter", serif
  font-weight: 700
  color: #fff

img
  width: 70px
  height: 70px
  border: 2px solid white
  object-fit: cover
</style>
