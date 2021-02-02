<template>
  <div class="search">
    <div class="card">
      <div class="card-content">
        <div class="field has-addons">
          <div class="control is-flex-grow-1">
            <input
              v-model="zipcodeFiltered"
              class="input has-text-primary"
              type="text"
              placeholder="Enter Zip Code"
            />
            <div v-if="error">{{ error }}</div>
          </div>
          <div class="control">
            <button
              @click="search"
              class="button is-info has-background-primary-dark"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchService from "../../services/Search";
export default {
  name: "Search",
  data: () => {
    return {
      zipcode: "",
      result: {},
    };
  },
  methods: {
    async search() {
      if (this.zipcode == "" || !this.zipcode) {
        this.error;
      } else {
        const result = await SearchService.get(this.zipcode);
        const data = await result.data;
        this.result = data;
      }
    },
  },
  computed: {
    zipcodeFiltered: {
      get() {
        return this.zipcode;
      },
      set(newValue) {
        if (!newValue) return "";
        this.zipcode = newValue.replace(/\D/g, "");
      },
    },
    error() {
      if (this.zipcode.length < 1) {
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
