<template>
  <Nav></Nav>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Nav from "./components/Nav.vue"

export default defineComponent({
  components: {
    Nav,
  },
})
</script>

<style lang="sass">
@import './styles/css-vars.css'
@import './styles/shared.sass'

@font-face
  font-family: "Varela Round"
  src: url("assets/font/varela-round.woff2") format("woff2"), url("assets/font/varela-round.woff") format("woff")
  font-weight: 400

@font-face
  font-family: "Bitter"
  src: url("assets/font/bitter-regular.woff2") format("woff2"), url("assets/font/bitter-regular.woff") format("woff")
  font-weight: 400

@font-face
  font-family: "Bitter"
  src: url("assets/font/bitter-bold.woff2") format("woff2"), url("assets/font/bitter-bold.woff") format("woff")
  font-weight: 700

body
  background-color: $background
  margin: 0

#app
  font-family: "Varela Round", sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
</style>
