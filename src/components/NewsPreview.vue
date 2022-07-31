<template>
  <section>
    <h2>{{ title }}</h2>
    <article v-for="(item, index) in news" :key="index">
      <h3>{{ item.headline }}</h3>
      <div class="details">
        <span><i />{{ item.date }}</span>
        <span>Author: {{ item.author.name }}</span>
        <span>{{ item.comments.length }} Comments</span>
      </div>
      <div class="content">
        <img :src="`/headers/${item.headerImage}`" :alt="item.headline" />
        <div>
          <p>{{ item.content[0].value }}</p>
          <router-link :to="`/news/${item.id}`">Read article</router-link>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import { Prop } from "vue-property-decorator"

@Options({})
export default class NewsPreview extends Vue {
  @Prop() news!: News[]
  @Prop() title = "News"
}
</script>

<style lang="sass" scoped>
section
  background-color: white
  box-sizing: border-box
  padding: 16px 32px 0px

article
  padding-bottom: 64px
  border-bottom: 2px solid $background

h2
  font-size: 24px
  line-height: 28.8px
  margin: 0
  margin-bottom: 12px
  font-family: "Bitter", serif
  font-weight: 700
  color: $text-dark

h3
  font-size: 24px
  line-height: 28px
  margin: 24px 0 0 0
  font-family: "Bitter", serif
  font-weight: 700

.details
  height: 48px
  display: flex
  gap: 16px
  font-size: 12px
  line-height: 14.45px
  color: $text-dim
  align-items: center

  i
    display: inline-block
    width: 16px
    height: 16px
    background-image: url("@/assets/calendar.svg")
    margin-right: 4px

.content
  display: flex
  gap: 20px

img
  width: 170px
  height: 128px
  object-fit: cover

p
  font-family: "Bitter", serif
  font-size: 14px
  line-height: 22px
  font-weight: 400
  color: #444
  margin: 0

a
  display: inline-block
  margin-top: 24px
  font-size: 14px
  line-height: 16.86px
  text-decoration: none
  color: white
  padding: 8px 22px
  background-color: $primary
</style>
