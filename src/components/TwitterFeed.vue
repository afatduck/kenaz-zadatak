<template>
  <div>
    <h3>{{ title }}</h3>
    <router-link v-for="(item, index) in feed" :key="index" :to="item.link">
      <h5>
        <i />
        {{ item.name }}
      </h5>
      <p :class="{ m0: index === feed.length - 1 }">
        {{ item.content }}
      </p>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component"
import { Prop } from "vue-property-decorator"

interface Feed {
  name: string
  content: string
  link: string
}

export default class TwitterFeed extends Vue {
  @Prop() title = "Twitter Feed"
  @Prop() feed!: Feed[]
}
</script>

<style lang="sass" scoped>
*
  text-decoration: none

h3
  color: white
  margin-bottom: 26px

i
  background-image: url("@/assets/twitter-small.svg")
  display: inline-block
  width: 22px
  height: 15px
  margin-right: 4px

h5
  font-family: "Bitter", serif
  font-weight: normal
  font-size: 14px
  line-height: 16px
  color: $text-dim
  margin: 0 0 4px 0

p
  color: #ccc
  font-size: 13px
  line-height: 18px
  margin-bottom: 36px
  margin-top: 0

m0
  margin: 0
</style>
