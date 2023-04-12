<script setup>
import { useModal } from "./composables/useModals.js";
import { useCart } from "./composables/useCart.js";
const { onCloseModal } = useCart();

const filterModal = useModal();
const basketModal = useModal();
const selectModal = useModal();

const closeModal = () => {
  filterModal.setModalState(false);
  basketModal.setModalState(false)
  selectModal.setModalState(false);
  onCloseModal();
};

</script>

<template>
  <Header :open-basket="basketModal.setModalState" />
  <main>
    <PageColors
      :open-filter="filterModal.setModalState"
      :is-filter-open="filterModal.active.value"
      :open-select="selectModal.setModalState"
      :is-select-open="selectModal.active.value"
    />
  </main>
  <Footer />
  <Basket
    :is-open="basketModal.active.value"
    :closeBasket="closeModal"
  />
  <Overlay
    :is-active="
      filterModal.active.value ||
      basketModal.active.value ||
      selectModal.active.value
    "
    :close-modal="closeModal"
  />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

body {
  font-family: $generalFont;
  background-color: $white;
  margin: auto;
  color: $black;
}

main {
  flex: 1 0 auto;
}

img {
  max-width: 100%;
  height: auto;
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.container__row {
  display: flex;
  width: 100%;
  max-width: 1920px;
  padding-left: 64px;
  padding-right: 64px;
}

@media screen and (max-width: 1700px) {
  .container__row {
    padding-left: 50px;
    padding-right: 50px;
  }
}

@media screen and (max-width: 960px) {
  .container__row {
    padding-left: 30px;
    padding-right: 30px;
  }
}

@media screen and (max-width: 620px) {
  .container {
    padding: 0;
  }
  .container__row {
    padding-left: 24px;
    padding-right: 24px;
  }
}
</style>
