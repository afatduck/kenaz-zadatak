<template>
  <div>
    <h3>{{ title }}</h3>
    <template v-for="(item, index) in news" :key="index">
      <router-link class="item" :to="`/news/${item.id}`">
        <div>
          <div class="details">
            <p>{{ item.date }}</p>
            <p>{{ item.comments.length }}</p>
          </div>
          <h4>{{ item.headline }}</h4>
        </div>
        <img :src="`/headers/${item.headerImage}`" :alt="item.headline" />
      </router-link>
      <hr v-if="index != news.length - 1" />
    </template>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component"
import { Prop } from "vue-property-decorator"

export default class FooterNews extends Vue {
  @Prop() title!: string
  @Prop() news!: News[]
}
</script>

<style lang="sass" scoped>
.item
  display: flex
  gap: 14px
  justify-content: space-between
  width: 100%
  text-decoration: none

.details
  color: $text-dim
  display: flex
  justify-content: space-between

  p
    margin: 0
    font-size: 10px
    line-height: 12.04px

img
  border: 3px solid white
  width: 66px
  height: 66px
  box-shadow: 0px 1px 1px rgba(0, 0, 1, 0.3)
  object-fit: cover

hr
  height: 2px
  background-color: $text-dim
  margin: 20px 0
  border: none
  width: 100%
  opacity: .2

h3
  color: white
  margin-bottom: 26px

h4
  color: #ccc
  margin-top: 4px

a>div
  flex-grow: 1
</style>
