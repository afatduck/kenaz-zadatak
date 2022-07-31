<template>
  <section :class="category">
    <div class="top">
      <h3>{{ category.charAt(0).toUpperCase() + category.slice(1) }}</h3>
      <router-link :to="`/category/${category}`"> See all </router-link>
    </div>
    <div
      class="grid"
      :style="{
        gridTemplateColumns: `repeat(${grid[0]}, 1fr)`,
        gridTemplateRows: `repeat(${grid[1]}, 1fr)`,
      }"
    >
      <router-link
        :to="`news/${item.id}`"
        class="grid-item"
        v-for="(item, index) in news"
        :key="index"
        :style="{
          flexDirection: conentDirection,
          gap: conentDirection === 'row' ? '16px' : '6px',
        }"
      >
        <img
          :src="require(`@/assets/headers/${item.headerImage}`)"
          :alt="item.headline"
          :style="{ maxWidth: conentDirection === 'row' ? '50%' : '100%' }"
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
import { Vue } from "vue-class-component"
import { Prop } from "vue-property-decorator"

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
</style>
