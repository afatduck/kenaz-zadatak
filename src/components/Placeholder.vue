<template>
  <div>
    <p v-for="p in text" :key="p">{{ p }}</p>
  </div>
</template>

<script lang="ts">
import { Prop } from "vue-property-decorator"
import { Vue } from "vue-class-component"

export default class Placeholder extends Vue {
  @Prop() text!: string[]
}
</script>

<style lang="sass" scoped>
div
  @extend %center-child
  flex-direction: column
  border: 1px solid #D7D7D7
  background: white
  height: 128px
p
  font-size: 14px
  line-height: 16.86px
  text-align: center
  color: #999999
  margin: 0
</style>
