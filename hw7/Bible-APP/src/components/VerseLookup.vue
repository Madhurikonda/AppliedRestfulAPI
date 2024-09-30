<template>
  <div class="verse-lookup">
    <input v-model="input" placeholder="Enter a random verse" />
    <button @click="fetchVerse">Get Specific Verse</button>
    <p v-if="verse">{{ verse }}</p>
  </div>
</template>

<script>
export default {
  name: "VerseLookup",
  data() {
    return {
      input: "",
      verse: "",
    };
  },
  methods: {
    async fetchVerse() {
      if (this.input.trim() === "") {
        // If input is empty, display an error message and exit.
        this.verse = "Please enter a valid verse reference.";
        return;
      }

      try {
        const response = await fetch(
          `https://labs.bible.org/api/?passage=${this.input}&type=json`
        );
        const data = await response.json();
        if (data && data.length > 0) {
          const scripture = `${data[0].bookname} ${data[0].chapter}:${data[0].verse} - ${data[0].text}`;
          this.verse = scripture;
        } else {
          this.verse = "Could not retrieve the specified verse.";
        }
      } catch (error) {
        this.verse = "Error: Unable to fetch the specified verse.";
      }
    },
  },
};
</script>

<style scoped>
input {
  padding: 8px;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  padding: 10px;
  background-color: #ff5722;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #e64a19;
}

p {
  margin-top: 15px;
  font-size: 1.1em;
}
</style>
