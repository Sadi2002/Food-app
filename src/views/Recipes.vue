<template>
  <Navbar />
  <Search />
  <Filters />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Search from "../components/Search.vue";
import Filters from "../components/Filters.vue";
export default {
  components: { Navbar, Search, Filters },
};
</script>

<style></style>
