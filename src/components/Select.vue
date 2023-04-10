<script setup>
import { computed } from "vue";

const props = defineProps({
  options: Array,
  isOpen: Boolean,
  openSelect: Function,
  selectedIndex: Number,
  setSelectedIndex: Function,
});

const unselectedOptions = computed(() => {
  return props.options.filter(
    (item) => item.title !== props.options[props.selectedIndex].title
  );
});
</script>

<template>
  <div class="select" @click="openSelect(isOpen ? false : true)">
    <div class="select__selected" :class="{ 'select__selected--open': isOpen }">
      <span>{{ options[selectedIndex].title }}</span>
    </div>
    <div class="select__options" :class="{ 'select__options--hide': !isOpen }">
      <div
        class="select__option"
        v-for="option of unselectedOptions"
        :key="options.indexOf(option)"
        @click.stop.prevent="setSelectedIndex(options.indexOf(option))"
      >
        {{ option.title }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.select {
  position: relative;
  outline: none;
  z-index: 4;
}

.select__selected {
  z-index: 4;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  min-width: 180px;
  word-wrap: unset;
  top: -6px;
  right: 0;
  cursor: pointer;
  font-weight: 500;
  font-size: 12px;

  line-height: 15px;
  color: $black;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: none;
  outline: none;
  margin-right: 14px;
}

.select__selected--open {
  position: absolute;
  justify-content: flex-start;
  background-color: $green;
  top: -10px;
  right: 0;
  width: 280px;
  height: 48px;
  margin-right: 0;
  padding: 17px 24px;

  &:hover {
    background-color: $green;
  }
}

.select__selected:after {
  position: absolute;
  display: block;
  content: "";
  top: 31%;
  right: -12px;
  width: 8px;
  height: 6px;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI1IiB2aWV3Qm94PSIwIDAgOCA1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNCA0LjVMNy40NjQxIDBMMC41MzU4OTggMEw0IDQuNVoiIGZpbGw9IiMyMDIwMjAiLz4KPC9zdmc+Cg==");
}

.select__selected--open:after {
  display: none;
}
.select__options {
  position: absolute;
  top: 38px;
  right: 0;
  z-index: 1;
  color: $black;
  background-color: $white;
  overflow: hidden;

  &--hide {
    display: none;
  }
}

.select__option {
  color: $black;
  width: 280px;
  height: 48px;
  padding: 17px 24px;
  cursor: pointer;
  user-select: none;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: 0.06em;
  text-transform: uppercase;

  &:hover {
    background-color: $green;
  }
}
</style>
