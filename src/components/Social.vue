<template>
  <div class="social">
    <h3>Soical</h3>
    <div class="social-media-container">
      <a href="#" class="social-media">
        <img src="@/assets/facebook.svg" alt="Facebook logo" />
        <h4>Like</h4>
        <p>25041 Fans</p>
      </a>
      <a href="#" class="social-media">
        <img src="@/assets/twitter.svg" alt="Twitter logo" />
        <h4>Follow</h4>
        <p>25041 Followers</p>
      </a>
      <a href="#" class="social-media">
        <img src="@/assets/youtube.svg" alt="YouTube logo" />
        <h4>Subscribe</h4>
        <p>941 Subscribers</p>
      </a>
    </div>
    <div class="tv">
      <h3>Kenaz TV</h3>
      <img src="@/assets/tv_thumbnail.png" alt="Video thumbnail" />
      <p class="date-sm">August 26, 2013</p>
      <h4>
        August 26, 2013NASA releases portrait of a planet waving at Saturn
      </h4>
    </div>
    <div class="banners">
      <Placeholder :text="['banner', '300x250']" />
      <Placeholder :text="['banner', '300x250']" />
    </div>
    <img src="@/assets/facebook-feed.png" alt="Facebook feed." />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component"
import Placeholder from "./Placeholder.vue"

@Options({
  components: {
    Placeholder,
  },
})
export default class Soical extends Vue {}
</script>

<style lang="sass" scoped>
.social
  display: flex
  flex-direction: column
  gap: 16px

*
  text-decoration: none
  color: inherit

.social-media-container
  display: flex
  flex-direction: column
  gap: 8px

.social-media
  display: flex
  height: 42px

  img
    height: 100%

  h4
    font-size: 18px
    line-height: 18px
    background-color: #ddd
    height: 100%
    width: 120px
    padding: 12px 16px
    box-sizing: border-box
    flex-grow: 1

  p
    font-size: 14px
    margin: 0
    color: #fff
    line-height: 16.86px
    background-color: $primary
    height: 100%
    width: 144px
    padding: 12px 16px
    box-sizing: border-box

.tv
  background-color: #fff
  h3
    margin: 16px 0 32px 32px
  p
    margin: 16px 0 0 32px
  h4
    margin: 0 32px 24px

.banners
  display: grid
  gap: 8px
  grid-template-columns: 1fr 1fr
  background-color: #ddd
  box-sizing: border-box
  padding: 18px
</style>
