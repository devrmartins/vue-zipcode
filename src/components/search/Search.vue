<template>
  <div class="search">
    <div class="card">
      <div class="card-content">
        <div class="field has-addons">
          <div class="control is-flex-grow-1">
            <input
              v-model="searchFiltered"
              class="input has-text-primary"
              type="text"
              placeholder="Enter Zip Code"
            />
            <div v-if="error">{{ error }}</div>
          </div>
          <div class="control">
            <button class="button is-info has-background-primary-dark">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data: () => {
    return {
      search: "",
    };
  },
  computed: {
    searchFiltered: {
      get() {
        return this.search;
      },
      set(newValue) {
        if (!newValue) return "";
        this.search = newValue.replace(/\D/g, "");
      },
    },
    error() {
      if (this.search.length < 1) {
        return "Search is required";
      } else {
        return "";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
