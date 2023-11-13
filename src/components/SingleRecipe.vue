<template>
  <div class="single-recipe">
    <router-link
      :to="{ name: 'SingleRecipe', params: { id: recipes.id } }"
    ></router-link>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
