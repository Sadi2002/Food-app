<template>
  <div class="ingredient">
    <h1>{{ recipe ? recipe.description : null }}</h1>
  </div>
</template>

<script>
export default {
  props: ["recipe"],
  setup() {},
};
</script>
<style></style>
