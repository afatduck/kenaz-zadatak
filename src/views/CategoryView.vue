<template>
  <main v-if="news.length">
    <Placeholder :text="['banner', '940x120']" />
    <HeaderNews :news="news.slice(0, 5)" />
    <div class="content">
      <div class="main">
        <NewsPreview
          :news="news.slice(0 + (page - 1) * 6, 6 + (page - 1) * 6)"
          :title="categoryCapitalized()"
        />
        <div class="pagination">
          <router-link
            v-for="(_, index) in Math.ceil(news.length / 6)"
            :key="index"
            :to="{ query: { page: index + 1 } }"
            :class="{ active: page === index + 1 }"
          >
            {{ index + 1 }}
          </router-link>
        </div>
      </div>
      <aside>
        <SideNews
          :popular="news.slice(0, 5)"
          :topRated="news.slice(5, 10)"
          :comments="
            news
              .sort((a, b) => b.comments.length - a.comments.length)
              .slice(0, 5)
          "
        />
        <Social />
      </aside>
    </div>
    <Placeholder :text="['banner', '620x120']" />
  </main>
  <Footer></Footer>
</template>

<script lang="ts">
import Placeholder from "@/components/Placeholder.vue"
import { Vue, Options } from "vue-class-component"
import HeaderNews from "../components/HeaderNews.vue"
import data from "@/data/data.json"
import Footer from "../components/Footer.vue"
import SideNews from "../components/SideNews.vue"
import Social from "../components/Social.vue"
import NewsPreview from "../components/NewsPreview.vue"

@Options({
  components: {
    Placeholder,
    HeaderNews,
    Footer,
    SideNews,
    Social,
    NewsPreview,
  },
  methods: {
    categoryCapitalized() {
      return this.category.charAt(0).toUpperCase() + this.category.slice(1)
    },
  },
  mounted() {
    this.news = data.filter(
      (item) => item.category === this.$route.params.category
    )
    if (!this.news.length) {
      this.$router.push("/")
      return
    }
    this.category = this.$route.params.category
    this.page = Number(this.$route.query.page) || 1
    this.$watch(
      () => this.$route.params.category,
      (category: string) => {
        if (this.$route.name !== "category") return
        this.news = data.filter((item) => item.category === category)
        if (!this.news.length) {
          this.$router.push("/")
          return
        }
        this.category = category
      }
    )
    this.$watch(
      () => this.$route.query.page,
      (page: string) => {
        this.page = parseInt(page) || 1
      }
    )
  },
})
export default class HomeView extends Vue {
  news: News[] = []
  category!: Categories
  page = 1
}
</script>

<style lang="sass" scoped>
main
  @extend %main

.pagination
  display: flex
  background-color: white
  padding: 32px
  grid-column: 1 / span 2
  gap: 2px

  a
    @extend %center-child
    text-decoration: none
    width: 32px
    height: 32px
    color: $primary
    font-size: 14px
    line-height: 16.86px
    background-color: #ddd

    &:hover
      background-color: #ccc

    &.active
      background-color: $primary
      color: white
</style>
