<template>
  <div id="app">
    <div class="container">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <Search />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./components/search/Search";

export default {
  name: "App",
  components: { Search },
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
