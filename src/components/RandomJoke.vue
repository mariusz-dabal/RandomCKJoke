<template>
  <div class="w-3/4 bg-blue-600 rounded-lg shadow-xl p-6 m-6 flex flex-col justify-center">
    <h1 class="text-center text-4xl py-4 px-2">Get your daily dose of Chuck Norris Jokes!</h1>
    <p class="mt-6 py-6 px-2 text-center">{{ joke }}</p>
    <button
      class="w-64 mt-6 mx-auto py-4 px-2 bg-gray-700 text-white hover:bg-gray-800 transition ease-out duration-500 rounded"
      @click="getRandomJoke"
    >Random Joke
      <font-awesome-icon icon="dice" class="ml-2 text-lg"/>
    </button>

    <p class="text-xs text-center pt-6">Zadanie rekrutacyjne Grupa.it Mariusz Dąbal</p>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "RandomJoke",

  data() {
    return {
      joke: null
    }
  },

  mounted() {
    this.getRandomJoke()
  },

  methods: {
    getRandomJoke() {
      axios
        .get("https://api.chucknorris.io/jokes/random")
        .then(response => {
          this.joke = response.data.value
        })
        .catch(error => {
          this.joke = "Sorry there was an error. Chuck will be back shortly."
          console.log(error)
        })
    }
  }
}
</script>

