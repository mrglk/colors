<script setup>
const props = defineProps({
  openFilter: Function,
  isFilterOpen: Boolean,
  openSelect: Function,
  isSelectOpen: Boolean,
  addToCart: Function
});

</script>

<template>
  <div class="home">
    <div class="home__slider">
      <Slider />
    </div>
    <div class="home__catalog">
      <Catalog
        :open-filter="openFilter"
        :is-filter-open="isFilterOpen"
        :open-select="openSelect"
        :is-select-open="isSelectOpen"
        :addToCart="addToCart"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home__slider {
  margin-bottom: 72px;
}

.home__catalog {
  margin-bottom: 141px;
}

@media screen and (max-width: 950px) {
  .home__slider {
    margin-bottom: 48px;
  }
  .home__catalog {
    margin-bottom: 64px;
  }
}
</style>
