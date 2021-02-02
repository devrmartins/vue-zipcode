<template>
  <div class="search">
    <div class="card">
      <div class="card-content">
        <div class="field has-addons">
          <div class="control is-flex-grow-1">
            <input
              v-model="zipcodeFiltered"
              class="input has-text-primary"
              maxlength="18"
              type="text"
              placeholder="Enter Zip Code"
              @keyup="changeZipcode"
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
      error: ""
    };
  },
  methods: {
    async search() {
      const isValid = this.validate();
      if (isValid) {
        const result = await SearchService.get(this.zipcode);
        const data = await result.data;
        this.result = data;
      }
    },
    changeZipcode() {
      if (this.error) {
        this.error = ""
      }
    },
    validate() {

      if (this.zipcode == "" || !this.zipcode) {
        this.error = "Zipcode is required";
        return false;
      }

      if (this.zipcode.length < 8) {
        this.error = "Zipcode is invalid. Must be 8 characters";
        return false;
      }

      return true;
    }
  },
  computed: {
    zipcodeFiltered: {
      get() {
        return this.zipcode;
      },
      set(newValue) {
        if (!newValue) return "";
        newValue = newValue.replace(/\D/g, "");
        this.zipcode = newValue.substr(0, 8);
        console.log(this.zipcode)
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
