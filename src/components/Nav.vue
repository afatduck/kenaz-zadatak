<template>
  <nav>
    <div class="row top">
      <div>
        <div class="logo">
          <img src="../assets/logo-small.svg" alt="Kenaz logo." />
        </div>
        <router-link to="/" class="title">Kenaz</router-link>
        <a href="/" class="link">Media</a>
        <a href="/" class="link">Marketing</a>
        <a href="/" class="link">Contact</a>
        <div class="search">
          <input type="text" placeholder="Search" />
          <img src="../assets/search-small.svg" alt="Seach icon" />
        </div>
      </div>
    </div>
    <div class="row bot">
      <div>
        <template v-for="category in categories" :key="category">
          <router-link :to="`/category/${category}`">
            <div
              :class="[
                'tab',
                category,
                $router.currentRoute.value.path === `/category/${category}` &&
                  'active',
              ]"
            >
              <span>{{ category }}</span>
            </div>
          </router-link>
        </template>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue } from "vue-class-component"

export default class Nav extends Vue {
  categories = ["news", "business", "sport", "life", "tech", "travel"]
}
</script>

<style lang="sass" scoped>
a
  color: white
  text-decoration: none

nav
  display: flex
  flex-direction: column
  align-items: center
.row
  width: 100vw
  height: 53px

  > div
    max-width: $container-width
    margin: 0 auto
    display: flex
    align-items: center

.top
  background-color: $background-dark

  .link
    font-size: 14px
    line-height: 27px
    padding-right: 28px
    display: block
    margin-right: 6px

  .title
    font-family: "Bitter", serif
    font-size: 24px
    line-height: 27px
    margin-left: 9px
    margin-right: auto

  .logo, .search
    @extend %center-child
    background-color: rgba(255, 255, 255, .05)
    height: 53px
    width: 62px

  .search
    transition: width .8s ease-in-out
    overflow: hidden
    display: flex
    justify-content: flex-end

    img
      cursor: pointer
      padding: 0 24px
      width: 16px

    input
      flex-grow: 1
      background-color: transparent
      height: 40px
      margin: 0 8px
      color: white
      outline: none
      border: none
      padding-left: 8px

    &:hover
      width: 300px
.bot
  background-color: $primary
  font-family: "Bitter", serif
  font-size: 18px
  line-height: 21.6px
  font-weight: 700
  text-transform: uppercase
  color: white

  .active
    border-bottom-width: 0
    background-color: var(--category-color)
.tab
  @extend %center-child
  height: 53px
  padding: 0 20px
  border-bottom: 6px solid var(--category-color)
  box-sizing: border-box
  cursor: pointer
  transition: border-bottom-width .5s ease-in-out
  position: relative

  span
    z-index: 2

  &::before
    content: ""
    position: absolute
    width: 100%
    height: 0
    background-color: var(--category-color)
    margin-top: auto
    align-self: flex-end
    transition: height .5s ease-in-out

  &:hover
    border-bottom-width: 0px

  &:hover::before
    height: 100%
</style>
