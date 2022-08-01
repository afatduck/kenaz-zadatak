<template>
  <section :class="category">
    <div class="top">
      <h3>{{ categoryCapitalized }}</h3>
      <router-link :to="{ name: 'category', params: { category } }">
        See all
      </router-link>
    </div>
    <div
      class="grid"
      :style="{
        gridTemplateColumns: `repeat(${grid[0]}, 1fr)`,
        gridTemplateRows: `repeat(${grid[1]}, 1fr)`,
      }"
    >
      <router-link
        :to="{ name: 'news', params: { id: item.id } }"
        :class="['grid-item', conentDirection]"
        v-for="(item, index) in news"
        :key="index"
      >
        <img
          :src="require(`@/assets/headers/${item.headerImage}`)"
          :alt="item.headline"
          :class="conentDirection"
        />
        <div class="text">
          <p class="date-sm">{{ item.date }}</p>
          <h4>{{ item.headline }}</h4>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import { Prop } from "vue-property-decorator"

@Options({
  computed: {
    categoryCapitalized() {
      return this.category.charAt(0).toUpperCase() + this.category.slice(1)
    },
  },
})
export default class CategoryDisplay extends Vue {
  @Prop() category!: Categories
  @Prop() grid!: [number, number]
  @Prop() news!: News[]
  @Prop() conentDirection!: "row" | "column"
}
</script>

<style lang="sass" scoped>
section
  border-left: 13px var(--category-color) solid
  padding: 24px 32px 32px
  box-sizing: border-box
  background-color: white

a
  text-decoration: none
  color: inherit
.top
  display: flex
  justify-content: space-between
  align-items: flex-end
  margin-bottom: 30px
  a
    color: $link
    font-size: 14px
    line-height: 16.86px
    position: relative
    display: inline-block
    &::after
      content: ""
      position: absolute
      height: 2px
      width: 100%
      left: 0
      background-color: $link
      opacity: .3
      bottom: -5px

.grid
  display: grid
  gap: 20px
  max-width: 100%

img
  aspect-ratio: 85 / 64
  object-fit: cover

.grid-item
  display: flex
  grid-column: span 1
  grid-row: span 1

a.row
  flex-direction: row
  gap: 16px

a.column
  flex-direction: column
  gap: 6px

img.row
  max-width: 50%

img.column
  max-width: 100%
</style>
