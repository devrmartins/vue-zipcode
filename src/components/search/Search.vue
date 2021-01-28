<template>
  <div class="search">
    <div class="card">
      <div class="card-content">
        <div class="field has-addons">
          <div class="control is-flex-grow-1">
            <input
              class="input has-text-primary"
              type="text"
              placeholder="Enter Zip Code"
            />
          </div>
          <div class="control">
            <a class="button is-info has-background-primary-dark">
              Search
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
