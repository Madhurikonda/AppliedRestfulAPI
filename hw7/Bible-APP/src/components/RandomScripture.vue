<template>
  <div class="random-scripture">
    <button @click="fetchRandomScripture">Get Random Scripture</button>
    <p v-if="verse">{{ verse }}</p>
  </div>
</template>

<script>
export default {
  name: "RandomScripture",
  data() {
    return {
      verse: "",
    };
  },
  methods: {
    async fetchRandomScripture() {
      try {
        const response = await fetch(
          "https://labs.bible.org/api/?passage=random&type=json"
        );
        const data = await response.json();
        if (data && data.length > 0) {
          const scripture = `${data[0].bookname} ${data[0].chapter}:${data[0].verse} - ${data[0].text}`;
          this.verse = scripture;
        } else {
          this.verse = "Could not retrieve a random verse.";
        }
      } catch (error) {
        this.verse = "Error: Unable to fetch random verse.";
      }
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

p {
  margin-top: 15px;
  font-size: 1.1em;
}
</style>
