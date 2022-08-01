<template>
  <footer>
    <div class="footer-inner">
      <div class="title">
        <img src="@/assets/logo-large-blue.svg" alt="Logo" />
        <h2>Kenaz</h2>
      </div>
      <h3 class="subscribeH3">Newsletter</h3>
      <h3 class="tagsH3">Tags Widget</h3>
      <p class="dim details details1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo
        ante.
      </p>
      <p class="dim details details2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo
        ante.
      </p>
      <div class="tags">
        <p class="tag">assueverit</p>
        <p class="tag">utroquoe</p>
        <p class="tag">probo</p>
        <p class="tag">assuev</p>
        <p class="tag">probo</p>
        <p class="tag">assuevverit</p>
        <p class="tag">titl</p>
        <p class="tag">assuevverit</p>
        <p class="tag">assuevverit</p>
        <p class="tag">utroquoe</p>
        <p class="tag">probo</p>
        <p class="tag">assuevverit</p>
        <p class="tag">utroquoe</p>
      </div>
      <div class="socials">
        <img src="@/assets/rss.svg" alt="rss" />
        <img src="@/assets/facebook.svg" alt="facebook" />
        <img src="@/assets/twitter.svg" alt="twitter" />
        <img src="@/assets/dribble.svg" alt="dribble" />
        <img src="@/assets/linkedin.svg" alt="linkedin" />
        <img src="@/assets/youtube.svg" alt="youtube" />
        <img src="@/assets/skype.svg" alt="skype" />
      </div>
      <div class="subscribe">
        <input type="text" placeholder="Your mail" />
        <button>Subscribe</button>
      </div>
      <div class="spacer"></div>
      <FooterNews title="Featured" :news="news.slice(30, 33)" />
      <FooterNews title="Random" :news="news.slice(40, 43)" />
      <TwitterFeed
        :feed="[
          {
            name: 'Envato @envato',
            link: '#',
            content:
              'Is this your typical million dollar day in the park? http://enva.to/150vxFC  Happy @TrueThemes Day! #ThemeForest pic.twitter.com/EHz7awxOXy',
          },
          {
            name: 'Envato @envato',
            link: '#',
            content: 'Happy TrueThemes Day http://enva.to/1dRzgLD',
          },
          {
            name: 'Envato @envato',
            link: '#',
            content:
              '@robscri I would really want to look into what\'s taking so long. Thank you ever so much! ^TC',
          },
        ]"
      />
      <div class="spacer"></div>
    </div>
    <hr />
    <div class="bot">
      <p>© 2013 - Kenaz Template - Proudly made at Plava tvornica Croatia</p>
      <p>
        <a href="#">Typography</a> - <a href="#">Templates</a> -
        <a href="#">Contact Form</a> - <a href="#">404 Page</a>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import FooterNews from "./FooterNews.vue"
import news from "@/data/data.json"
import TwitterFeed from "./TwitterFeed.vue"

@Options({
  components: {
    FooterNews,
    TwitterFeed,
  },
})
export default class Footer extends Vue {
  news = news
}
</script>

<style lang="sass" scoped>
// Ares
.subscribeH3
  grid-area: "subscribeH3"

.tagsH3
  grid-area: "tagsH3"

.details1
  grid-area: "details1"

.details2
  grid-area: "details2"

footer
  border-top: 20px solid $primary
  background-color: $background-dark
  padding: 50px 0 64px 0
  width: 100vw
.footer-inner
  max-width: calc( 100% - 20px )
  margin: 0 auto
  display: grid
  gap: $gap
  grid-template-columns: 1fr
  grid-template-areas: "title" "details1" "subscribeH3" "details2" "subscribe" "tagsH3" "tags" "socials"
  &>*
    justify-content: center

.title
  display: flex
  gap: 18px
  align-items: flex-end
  grid-area: title

  h2
    font-family: "Bitter", serif
    font-weight: normal
    font-size: 29.62px
    line-height: 51.81px
    margin: 0
    color: #45B0E3

h3
  color: #CCC
  align-self: end

.dim
  color: $text-dim

.details
  font-family: "Bitter", serif
  font-weight: 400
  font-size: 14px
  line-height: 20px
  margin: 0

.tags
  display: flex
  flex-wrap: wrap
  gap: 4px
  grid-area: tags
  height: fit-content

  .tag
    background-color: #333
    box-sizing: border-box
    padding: 4px 8px
    font-size: 12px
    line-height: 20px
    color: $text-dim
    margin: 0
    height: 28px
    &:hover
      background-color: $primary
      color: #ccc
      cursor: pointer

.socials
  display: flex
  gap: 6px
  grid-area: socials

  img
    cursor: pointer
    width: 38px
    height: 38px

.subscribe
  height: 53px
  display: flex
  grid-area: subscribe

  input
    flex-grow: 1
    background-color: #333
    height: 100%
    color: #999
    outline: none
    border: none
    padding-left: 20px
    font-size: 16px
    line-height: 19.26px
    box-sizing: border-box

  button
    background-color: $primary
    border: none
    outline: none
    padding: 0 20px
    color: #ccc
    font-size: 16px
    line-height: 19.26px
    height: 100%
    @extend %center-child

.spacer
  height: 68px
  grid-column: 1 / -1

hr
  position: absolute
  left: 0
  height: 2px
  background-color: #333
  width: 100%
  border: none
  margin: 0

.bot
  max-width: calc( 100% - 20px )
  display: flex
  flex-direction: column
  align-items: center
  justify-content: space-between
  margin-top: 18px
  font-size: 12px
  line-height: 14.45px
  color: #999
  margin: 0 auto
  padding-top: 10px
  p
    margin: 0
  a
    color: #999
    text-decoration: none
    &:hover
      color: #ccc

@media (min-width: 768px)
  .footer-inner
    grid-template-columns: 1fr 1fr
    grid-template-areas: "title socials" "subscribeH3 tagsH3" "details1 details2" "subscribe tags"
    &>*
      justify-content: inherit

@media (min-width: 960px)
  .footer-inner, .bot
    max-width: $container-width

  .footer-inner
    grid-template-columns: 1fr 1fr 1fr
    grid-template-areas: "title subscribeH3 tagsH3" "details1 details2 tags" "socials subscribe tags"
    &>*
      justify-content: inherit

  .bot
    flex-direction: row
</style>
