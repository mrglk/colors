<script setup>
import { useCart } from "../composables/useCart.js";
const { addToCart } = useCart();

const props = defineProps({
  id: Number,
  type: String,
  name: String,
  price: Number,
  photo: Array,
});
</script>

<template>
  <div class="catalogItem">
    <div class="catalogItem__photo">
      <img class="catalogItem__photoImg" :alt="type" :src="photo[0]" />
      <img :alt="type" :src="photo[1]" />
    </div>
    <p class="catalogItem__title">{{ type }} {{ name }}</p>
    <div class="catalogItem__bottom">
      <p class="catalogItem__price">{{ price }}</p>
      <button class="catalogItem__button" @click="addToCart(id)"></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.catalogItem {
  max-width: 278px;
}

.catalogItem:hover {
  cursor: pointer;

  & .catalogItem__button {
    display: block;
  }

  & .catalogItem__photoImg {
    opacity: 0;
  }
}
.catalogItem__photo {
  position: relative;
  height: 0;
  padding-bottom: 100%;
  margin-bottom: 16px;
}

.catalogItem__photoImg {
  position: absolute;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  transition: all 0.1s ease-in;
}
.catalogItem__title {
  font-weight: 300;
  font-size: 16px;
  line-height: 1.12;
  letter-spacing: 0.02em;
  color: $black;
  margin: 0 0 16px 0;
}

.catalogItem__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 14px;
  border-bottom: 1px solid #0000001a;
}

.catalogItem__price {
  font-weight: 600;
  font-size: 16px;
  margin: 8px 0;

  &::after {
    content: " ₽";
  }
}

.catalogItem__button {
  display: none;
  position: relative;
  cursor: pointer;
  border: none;
  width: 80px;
  height: 32px;
  border-radius: 8px;
  background-color: $grey;
  transition: all 0.1s ease-in;

  &:hover {
    background-color: $green;
  }

  &::after,
  &::before {
    position: absolute;
    display: block;
    content: "";
    width: 11.67px;
    height: 1px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $black;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(90deg);
  }
}

@media screen and (max-width: 950px) {
  .catalogItem:hover .catalogItem__photoImg {
    opacity: 1;
}
  .catalogItem__title {
    font-weight: 300;
    font-size: 14px;
    line-height: 1.12;
    letter-spacing: 0.02em;
    color: $black;
    margin: 0 0 16px 0;
  }
  .catalogItem__button {
    display: block;
    width: 40px;
    height: 24px;
    border-radius: 6px;

    &:hover {
    background-color: $grey;
  }

  &:active {
    background-color: $green;
  }

    &::after,
    &::before {
      position: absolute;
      display: block;
      content: "";
      width: 9.33px;
      height: 2px;
    }
  }
}

@media screen and (max-width: 750px) {
  .catalogItem__title {
    font-weight: 300;
    font-size: 14px;
    line-height: 1.12;
    letter-spacing: 0.02em;
    color: $black;
    margin: 0 0 16px 0;
  }
}
</style>
