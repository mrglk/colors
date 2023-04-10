<script setup>
import { ref, computed } from "vue";
import { productsList } from "../data/products";
import { setDeclension } from "../utils/helpers.js";

const props = defineProps({
  openFilter: Function,
  isFilterOpen: Boolean,
  openSelect: Function,
  isSelectOpen: Boolean,
  addToCart: Function,
});

const options = [
  {
    title: "Сначала дорогие",
    label: "isExpensive",
  },
  {
    title: "Сначала недорогие",
    label: "isCheap",
  },
  {
    title: "Сначала популярные",
    label: "isPopular",
  },
  {
    title: "Сначала новые",
    label: "isNew",
  },
];

const filters = [
  {
    title: "Новинки",
    label: "isNew",
  },
  {
    title: "Есть в наличии",
    label: "inStock",
  },
  {
    title: "Контрактные",
    label: "isContract",
  },
  {
    title: "Эксклюзивные",
    label: "isExclusive",
  },
  {
    title: "Распродажа",
    label: "onSale",
  },
];

const selectedOptionIndex = ref(0);
const selectedFilters = ref([]);

const setSelectedOptionIndex = (index) => {
  selectedOptionIndex.value = index;
  props.openSelect(false);
};

const setSelectedFilters = (filter) => {
  if (selectedFilters.value.includes(filter)) {
    selectedFilters.value = selectedFilters.value.filter(
      (label) => label != filter
    );
    return;
  }
  selectedFilters.value.push(filter);
};

const sortedProducts = computed(() => {
  let products = [...productsList];
  if (selectedFilters.value.length != 0)
    products = products.filter((product) =>
      selectedFilters.value.every((option) => product[option])
    );

  switch (options[selectedOptionIndex.value].label) {
    case "isExpensive":
      return products.sort((a, b) => b.price - a.price);
    case "isCheap":
      return products.sort((a, b) => a.price - b.price);
    case "isNew":
      return products.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    case "isPopular":
      return products.sort((a, b) => b.orders - a.orders);
    default:
      return products;
  }
});
</script>

<template>
  <section class="container">
    <div class="catalog container__row">
      <div class="catalog__filter">
        <Filter
          :isOpen="isFilterOpen"
          :openFilter="openFilter"
          :filters="filters"
          :selectedFilters="selectedFilters"
          :setSelectedFilters="setSelectedFilters"
        />
      </div>
      <div class="catalog__content">
        <div class="catalog__header">
          <p class="catalog__count">
            {{ setDeclension(sortedProducts.length) }}
          </p>
          <div class="catalog__filterButtonWrapper">
            <button class="catalog__filterButton" @click="openFilter(true)">
              Фильтры
            </button>
          </div>
          <div class="catalog__select">
            <Select
              :options="options"
              :selectedIndex="selectedOptionIndex"
              :setSelectedIndex="setSelectedOptionIndex"
              :isOpen="isSelectOpen"
              :openSelect="openSelect"
            />
          </div>
        </div>
        <div class="catalog__list" v-if="sortedProducts.length != 0">
          <div
            class="catalog__item"
            v-for="product in sortedProducts"
            v-bind:key="product.id"
          >
            <CatalogItem
              v-bind:key="product.id"
              v-bind:id="product.id"
              v-bind:type="product.type"
              v-bind:name="product.name"
              v-bind:price="product.price"
              v-bind:photo="product.photo"
              :addToCart="addToCart"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.catalog {
  display: flex;
}

.catalog__filter {
  margin-right: 138px;
}
.catalog__content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.catalog__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 44px;
}

.catalog__count {
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin: 0;
  color: $black;
}

.catalog__filterButton {
  cursor: pointer;
  display: none;
  border: none;
  background-color: transparent;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: $black;
}

.catalog__list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 16px;
  column-gap: 24px;
}

@media screen and (max-width: 1600px) {
  .catalog__header {
    margin-bottom: 34px;
  }

  .catalog__filter {
    margin-right: 100px;
  }
}

@media screen and (max-width: 1200px) {
  .catalog__header {
    margin-bottom: 24px;
  }

  .catalog__filter {
    margin-right: 50px;
  }
  .catalog__list {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 15px;
  }
}

@media screen and (max-width: 1050px) {
  .catalog__list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 950px) {
  .catalog__filter {
    z-index: 5;
    margin-right: 0;
  }
  .catalog__filterButton {
    display: block;
  }
  .catalog__list {
    grid-template-columns: repeat(3, 1fr);
  }

  .catalog__count {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .catalog__list {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 24px;
  }
}
</style>
