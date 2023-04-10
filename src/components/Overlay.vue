<script setup>
const props = defineProps({
  isActive: Boolean,
  closeModal: Function,
});
</script>

<template>
  <div
    :class="[{ 'overlay--active': isActive }, 'overlay']"
    @click="closeModal"
  ></div>
</template>

<style scoped>
.overlay {
  position: fixed;
  left: 0;
  top: 0;
  width: 101%;
  height: 101%;

  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 3;

  cursor: pointer;

  transition: opacity 400ms ease, visibility 400ms ease;
  background: rgba(0, 0, 0, 0.7);
}

.overlay--active {
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
}
</style>
