<script setup>
import { ref, computed } from "vue";
import { useModal } from "./composables/useModals.js";
import { productsList } from "./data/products";

const filterModal = useModal();
const basketModal = useModal();
const selectModal = useModal();

const productsInCart = ref({
  // 1918453: 3,
});

const closeModal = () => {
  filterModal.setModalState(false);
  basketModal.setModalState(false);
  selectModal.setModalState(false);
};

const addToCart = (id) => {
  productsInCart.value[id] = Object.keys(productsInCart.value).includes(id.toString()) ? productsInCart.value[id] + 1 : 1;
}

const reduceProductsInCart = (id) => {
  if (productsInCart.value[id] > 0) productsInCart.value[id] = productsInCart.value[id] - 1;
}

const removeProductFromCart = (id) => {
  productsInCart.value[id] = 0;
}

const clearCart = () => {
  productsInCart.value = {};
}

const amountOfProductsInCart = computed(() => {
  let amount = 0;
  for (let product in productsInCart.value) {
    amount += productsInCart.value[product];
  }
  return amount;
})

const totalPrice = computed(() => {
  let total = 0;
  for (let product in productsInCart.value) {
    total += productsList.find((item) => item.id == product).price * productsInCart.value[product];
  }
  return total;
})

</script>

<template>
  <Header :open-basket="basketModal.setModalState" :amountOfProductsInCart="amountOfProductsInCart"/>
  <main>
    <Colors
      :open-filter="filterModal.setModalState"
      :is-filter-open="filterModal.active.value"
      :open-select="selectModal.setModalState"
      :is-select-open="selectModal.active.value"
      :addToCart="addToCart"
    />
  </main>
  <Footer />
  <Basket
    :is-open="basketModal.active.value"
    :open-basket="basketModal.setModalState"
    :productsInCart="productsInCart"
    :amountOfProductsInCart="amountOfProductsInCart"
    :totalPrice="totalPrice"
    :addToCart="addToCart"
    :reduceProductsInCart="reduceProductsInCart"
    :removeProductFromCart="removeProductFromCart"
    :clearCart="clearCart"
  />
  <Overlay
    :is-active="filterModal.active.value || basketModal.active.value || selectModal.active.value"
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
