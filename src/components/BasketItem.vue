<script setup>
import { useCart  } from "../composables/useCart.js";
const { addToCart, reduceProductsInCart, removeProductFromCart } = useCart();

const props = defineProps({
  count: Number,
  product: Object,
  delated: Boolean,
});

const {type, title, name, photo, id, price} = props.product;

</script>

<template>
  <div class="basketItem">
    <div
      :class="[{ 'basketItem__inner--delated': delated }, 'basketItem__inner']"
    >
      <div class="basketItem__photo">
        <img :src="photo" :alt="product.type" />
      </div>
      <div class="basketItem__textAndButtons">
        <div class="basketItem__left">
          <div class="basketItem___data">
            <p class="basketItem___name">{{ type }} {{ name }}</p>
            <p class="basketItem___price">{{ price }}</p>
          </div>
        </div>
        <div class="basketItem__right">
          <div class="basketItem__counter">
            <button
              :class="[
                { 'basketItem__countButton--desabled': delated },
                'basketItem__countButton basketItem__countButton--decrease',
              ]"
              @click="reduceProductsInCart(id)"
              :disabled="delated"
            />
            <p v-if="delated">1</p>
            <p v-else>{{ count }}</p>
            <button
              :class="[
                { 'basketItem__countButton--desabled': delated },
                'basketItem__countButton basketItem__countButton--increase',
              ]"
              @click="addToCart(id)"
              :disabled="delated"
            />
          </div>
          <div class="basketItem__deleteAndrestore">
            <button
              v-if="delated"
              class="basketItem__restore"
              @click="addToCart(id)"
            >
              <img src="/svg/restore.svg" alt="Restore" />
            </button>
            <button
              v-else
              class="basketItem__delete"
              @click="removeProductFromCart(id)"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.basketItem {
  display: flex;
  align-items: center;
  padding: 12px 7px 12px 0;
  border-bottom: 1px solid #0000001a;
  overflow: hidden;
}

.basketItem__inner {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  &--delated {
    opacity: 0.4;
  }
}

.basketItem__textAndButtons {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.basketItem__left {
  display: flex;
  align-items: center;
}

.basketItem__right {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.basketItem__photo {
  position: relative;
  min-width: 96px;
  height: 96px;
  margin-right: 8px;

  & img {
    position: absolute;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
}

.basketItem___data {
  flex-grow: 1;
  max-width: 165px;
  margin-right: 20px;
}

.basketItem___name {
  font-weight: 300;
  font-size: 16px;
  line-height: 1.1;
  letter-spacing: 0.02em;
  margin: 0 0 16px 0;
}

.basketItem___price {
  font-weight: 600;
  font-size: 16px;
  margin: 0;

  &::after {
    content: " ₽";
  }
}

.basketItem__counter {
  display: flex;
  align-items: center;
  margin-right: 20px;

  & p {
    pointer-events: none;
    text-align: center;
    width: 20px;
    font-size: 16px;
    margin: 0 10px;
  }
}

.basketItem__countButton {
  position: relative;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  width: 40px;
  height: 24px;
  background-color: $grey;
  transition: background-color 0.1s ease-in;

  &:hover {
    background-color: $green;
  }

  &--desabled:hover {
    cursor: default;
    background-color: $grey;
  }
}
.basketItem__countButton--decrease::after {
  position: absolute;
  display: block;
  content: "";
  width: 9.33px;
  height: 1.4px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: $black;
}

.basketItem__countButton--increase::after,
.basketItem__countButton--increase::before {
  position: absolute;
  display: block;
  content: "";
  width: 9.33px;
  height: 1.4px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: $black;
}

.basketItem__countButton--increase::before {
  transform: translate(-50%, -50%) rotate(90deg);
}

.basketItem__deleteAndrestore {
  min-width: 37px;
  display: flex;
  justify-content: flex-end;
}
.basketItem__delete {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;

  &::after,
  &::before {
    position: absolute;
    display: block;
    content: "";
    width: 17px;
    height: 1.4px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background-color: $black;
    opacity: 0.2;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}

.basketItem__restore {
  cursor: pointer;
  position: relative;
  border: none;
  background-color: transparent;
  padding: 0;

  & img {
    width: 24px;
    height: 24px;
  }
}

@media screen and (max-width: 550px) {
  .basketItem {
    padding: 8px 4px 8px 0;
  }
  .basketItem__textAndButtons {
    align-items: flex-start;
    flex-direction: column;
  }

  .basketItem__left {
    margin-bottom: 10px;
  }

  .basketItem___name {
    font-size: 14px;
    margin-bottom: 6px;
  }

  .basketItem___price {
    font-size: 14px;
  }

  .basketItem__counter {
    display: flex;
    align-items: center;
    margin-right: 30px;
    & p {
      pointer-events: none;
      text-align: center;
      width: 20px;
      font-size: 14px;
      margin: 0 8px;
    }
  }

  .basketItem__deleteAndrestore {
    position: absolute;
    top: 12px;
    right: 10px;
    min-width: 18px;
  }

  .basketItem__restore img {
    width: 16px;
    height: 16px;
  }
}

@media screen and (max-width: 370px) {
  .basketItem__deleteAndrestore {
    top: 50%;
    right: 3px;
  }
}

@media screen and (max-width: 320px) {
}
</style>
