<template>
  <main>
    <Placeholder :text="['banner', '940x120']" />
    <HeaderNews :news="news.slice(0, 5)" />
    <div class="content">
      <div class="main">
        <CategoryDisplay
          :category="'news'"
          :grid="[3, 1]"
          :news="news.filter((item) => item.category === 'news').slice(0, 3)"
          :conentDirection="'column'"
          id="news-section"
        ></CategoryDisplay>
        <CategoryDisplay
          :category="'sport'"
          :grid="[3, 1]"
          :news="news.filter((item) => item.category === 'sport').slice(0, 3)"
          :conentDirection="'column'"
          id="sports-section"
        ></CategoryDisplay>
        <Placeholder :text="['banner', '620x120']" :span="2"></Placeholder>
        <CategoryDisplay
          :category="'business'"
          :grid="[2, 2]"
          :news="
            news.filter((item) => item.category === 'business').slice(0, 4)
          "
          :conentDirection="size === 'sm' ? 'column' : 'row'"
        ></CategoryDisplay>
        <Placeholder :text="['banner', '620x120']" :span="2"></Placeholder>
        <NewsCarousel
          :news="news.slice(10, 15)"
          :visibleSlides="2"
          :title="'News Carousel'"
          :className="'car-yellow'"
        ></NewsCarousel>
        <div class="small-carousels">
          <NewsCarousel
            :news="news.slice(15, 20)"
            :visibleSlides="1"
            :title="'Editorials'"
            :className="'car-brown'"
          ></NewsCarousel>
          <NewsCarousel
            :news="news.slice(20, 25)"
            :visibleSlides="1"
            :title="'Local News'"
            :className="'car-brown'"
          ></NewsCarousel>
        </div>
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
    <Placeholder :text="['banner', '940x120']" />
    <Gallery
      :images="
        Array(7)
          .fill(undefined)
          .map((a, i) => require(`@/assets/gallery/${i + 1}.webp`))
      "
    />
  </main>
  <Footer />
</template>

<script lang="ts">
import Placeholder from "@/components/Placeholder.vue"
import { Vue, Options } from "vue-class-component"
import HeaderNews from "../components/HeaderNews.vue"
import data from "@/data/data.json"
import CategoryDisplay from "../components/CategoryDisplay.vue"
import NewsCarousel from "../components/NewsCarousel.vue"
import Gallery from "../components/Gallery.vue"
import Footer from "../components/Footer.vue"
import SideNews from "../components/SideNews.vue"
import Social from "../components/Social.vue"

@Options({
  components: {
    Placeholder,
    HeaderNews,
    CategoryDisplay,
    NewsCarousel,
    Gallery,
    Footer,
    SideNews,
    Social,
  },
  methods: {
    resizeHandler() {
      if (window.innerWidth < 768) {
        this.size = "sm"
      } else if (window.innerWidth < 940) {
        this.size = "md"
      } else {
        this.size = "lg"
      }
    },
  },
  mounted() {
    this.resizeHandler()
    window.addEventListener("resize", this.resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeHandler)
  },
})
export default class HomeView extends Vue {
  news: News[] = data as News[]
  size: "sm" | "md" | "lg" = "sm"
}
</script>

<style lang="sass" scoped>
main
  @extend %main

.small-carousels
  display: flex
  flex-direction: column
  gap: $gap

  > *
    flex-grow: 1
</style>
