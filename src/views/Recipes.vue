<template>
  <Navbar />
  <Search />
  <Filters />
  <YourRecipes />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Search from "../components/Search.vue";
import Filters from "../components/Filters.vue";
import YourRecipes from "../components/YourRecipes.vue";
export default {
  components: { Navbar, Search, Filters, YourRecipes },
};
</script>

<style></style>
