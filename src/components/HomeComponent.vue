<template>
  <div>
    <div class="container" style="backgroud-color:red">
      <div class="row">
        <div class="col">1 of 3</div>
        <div class="col-6">2 of 3 (wider)</div>
        <div class="col">3 of 3</div>
      </div>
      <div class="row">
        <div class="col">1 of 3</div>
        <div class="col-5">2 of 3 (wider)</div>
        <div class="col">3 of 3</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #6642b9;
}
</style>
