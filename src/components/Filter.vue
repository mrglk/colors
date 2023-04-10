<script setup>
const props = defineProps({
  filters: Array,
  isOpen: Boolean,
  openFilter: Function,
  setSelectedFilters: Function,
  selectedFilters: Array,
});
</script>

<template>
  <div :class="[{ 'filter--active': props.isOpen }, 'filter']">
    <button class="filter__close" @click="openFilter(false)"></button>
    <div class="filter__inner">
      <div
        class="filter__item"
        v-for="filter in filters"
        v-bind:key="filter.label"
      >
        <Switch
          :key="filter.label"
          :title="filter.title"
          :label="filter.label"
          :checked="selectedFilters.includes(filter.label)"
          :setSelectedFilters="setSelectedFilters"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter {
  position: relative;
}

.filter__item:not(:last-child) {
  margin-bottom: 10px;
}

.filter__close {
  cursor: pointer;
  display: none;
  width: 28px;
  height: 4px;
  border: none;
  border-radius: 40px;
  background-color: $black;
  opacity: 0.6;
  position: absolute;
  top: 12px;
  left: calc(50% - 16px);
  z-index: 4;
}

@media screen and (max-width: 950px) {
  .filter {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 4;
    width: 100%;
    transform: translateY(100%);
    transition: transform 300ms ease;
  }
  .filter--active {
    transform: translateY(0%);
  }

  .filter__inner {
    position: relative;
    background-color: $white;
    width: 100%;
    min-height: 318px;
    border-radius: 24px 24px 0px 0px;
    padding: 54px 24px;
  }

  .filter__close {
    display: block;
  }

  .filter__item:not(:last-child) {
    margin-bottom: 14px;
  }
}

@media screen and (max-width: 650px) {
  .filter__item:not(:last-child) {
    margin-bottom: 10px;
  }
}
</style>
