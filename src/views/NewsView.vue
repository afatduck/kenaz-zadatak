<template>
  <main>
    <Placeholder :text="['banner', '940x120']" :span="3"></Placeholder>
    <header v-if="id">
      <img
        :src="require(`@/assets/headers/${current.headerImage}`)"
        :alt="current.headline"
      />
      <div>
        <p class="date-sm">{{ current.date }}</p>
        <h1>{{ current.headline }}</h1>
      </div>
    </header>
    <div class="content">
      <div class="main">
        <div class="news" v-if="id">
          <template v-for="(item, index) in current.content" :key="index">
            <p v-if="item.type === 'text'">{{ item.value }}</p>
            <img
              v-if="item.type === 'image'"
              :src="require(`@/assets/headers/${item.value}`)"
            />
          </template>
          <img class="fake" src="@/assets/socials.png" alt="Fake socials" />
        </div>
        <Placeholder :text="['banner', '620x120']" :span="2"></Placeholder>
        <div class="author" v-if="id">
          <h2>About the Author</h2>
          <div>
            <img
              :src="require(`@/assets/authors/${current.author.id}.webp`)"
              :alt="current.author.name"
            />
            <p>{{ current.author.about }}</p>
          </div>
        </div>
        <Comments :comments="current.comments" v-if="id" />
      </div>
      <aside>
        <SideNews
          :popular="news.slice(50, 55)"
          :topRated="news.slice(55, 60)"
          :comments="
            news
              .sort((a, b) => b.comments.length - a.comments.length)
              .slice(0, 5)
          "
        />
        <Social />
      </aside>
    </div>
  </main>
  <Footer></Footer>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component"
import Placeholder from "@/components/Placeholder.vue"
import data from "@/data/data.json"
import SideNews from "@/components/SideNews.vue"
import Social from "@/components/Social.vue"
import Footer from "@/components/Footer.vue"
import Comments from "../components/Comments.vue"

@Options({
  components: {
    Placeholder,
    SideNews,
    Social,
    Footer,
    Comments,
  },
  mounted() {
    this.id = parseInt(this.$route.params.id)
    const current = data.filter((item) => item.id === this.id)
    if (!current.length) {
      this.$router.push("/")
      return
    }
    this.current = current[0]
    this.$watch(
      () => this.$route.params.id,
      (_id: string) => {
        if (this.$route.name !== "news") return
        const id = parseInt(_id)
        this.id = id
        const current = data.filter((item) => item.id === id)
        if (!current.length) {
          this.$router.push("/")
          return
        }
        this.current = current[0]
      }
    )
  },
})
export default class NewsView extends Vue {
  news = data as News[]
  id = 0
  current!: News
}
</script>

<style lang="sass" scoped>
$header-text: #222
$other-text: #444

main
  @extend %main

h2
    font-family: "Bitter", serif
    font-size: 24px
    font-weight: bold
    line-height: 28.8px
    color: $text-dark
    margin-bottom: 32px

header
  grid-column: 1 / -1
  position: relative

  img
    max-width: 100%

  div
    background-image: linear-gradient(to bottom, transparent, $background 70%)
    padding: 48px 32px 32px
    width: 100%
    box-sizing: border-box
    color: $header-text
    position: absolute
    bottom: 0

    h1
      margin: 16px 0 0 0
      font-family: "Bitter", serif
      font-weight: bold
      font-size: 22px
      line-height: 24px

    p
      color: $header-text

.news
  grid-column: 1 / span 2
  background-color: #fff
  padding: 16px 0
  overflow: hidden

  img
    max-width: 100%

  p
    margin: 32px
    font-family: "Bitter", serif
    font-size: 14px
    line-height: 22px
    color: $other-text

  .fake
    margin-left: 16px

.author
  background-color: white
  box-sizing: border-box
  padding: 16px 32px 32px
  grid-column: 1 / span 2

  div
    display: flex
    gap: 20px

  img
    object-fit: cover
    width: 110px
    height: 110px

  p
    margin: 0
    font-family: "Bitter", serif
    font-size: 13px
    line-height: 20px
    color: $other-text

@media (min-width: 768px)
  header div h1
    font-size: 44px
    line-height: 52.8px
</style>
