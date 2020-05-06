<template>
  <div id="app" class="mx-auto h-screen flex justify-center items-center bg-gray-300">
    <RandomJoke/>
  </div>
</template>

<script>
import RandomJoke from "./components/RandomJoke"

export default {
  name: "App",
  components: {
    RandomJoke
  }
}
</script>

