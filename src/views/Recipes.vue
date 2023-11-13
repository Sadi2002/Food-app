<template>
  <Navbar />
  <Search />
  <Filters />
  <YourRecipes />
  <BottomNav />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Search from "../components/Search.vue";
import Filters from "../components/Filters.vue";
import YourRecipes from "../components/YourRecipes.vue";
import BottomNav from "../components/BottomNav.vue";
export default {
  components: { Navbar, Search, Filters, YourRecipes, BottomNav },
};
</script>

<style></style>
