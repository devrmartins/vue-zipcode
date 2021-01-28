<template>
  <div id="app">
    <div class="container">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
#app {
  width: 100vw;
  height: 100vh;
  padding-top: 50px;
  background-color: #f8f8f8;
}
</style>
