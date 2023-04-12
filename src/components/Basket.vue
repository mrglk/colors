<script setup>
import { productsList } from "../data/products";
import { setDeclension } from "../utils/helpers.js";
import { useCart } from "../composables/useCart.js";
const { productsInCart, addToCart, clearCart, amountOfProductsInCart, totalPrice } = useCart();

const props = defineProps({
  isOpen: Boolean,
  openBasket: Function,
});
</script>

<template>
  <div :class="[{ 'basket--active': isOpen }, 'basket']">
    <div class="basket__inner" v-if="productsInCart">
      <div class="basket__top">
        <h2 class="basket__header">Корзина</h2>
        <button class="basket__close" @click="openBasket(false)"></button>
      </div>
      <div class="basket__content">
        <div class="basket__contentHeader">
          <p class="basket__count">
            {{ setDeclension(amountOfProductsInCart) }}
          </p>
          <button
            class="basket__clear"
            v-if="productsInCart"
            @click="clearCart()"
          >
            очистить список
          </button>
        </div>
        <div
          v-if="productsInCart"
          class="basket__list"
        >
          <div
            class="basket__listItem"
            v-for="[id, count] in Object.entries(productsInCart)"
            :key="id"
          >
            <BasketItem
              :key="id"
              :count="count"
              :product="productsList.get(+id)"
              :delated="count === 0"
            />
          </div>
        </div>
        <div v-else class="basket__none">Корзина пустая</div>
      </div>
      <div class="basket__bottom">
        <div class="basket__total">
          <p class="basket__totalTitle">Итого</p>
          <p class="basket__totalPrice">
            {{ new Intl.NumberFormat("ru-RU").format(totalPrice) }}
          </p>
        </div>
        <button class="basket__button">Оформить заказ</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.basket {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 4;
  height: 100%;
  transform: translateX(100%);
  transition: transform 300ms ease;
}
.basket--active {
  transform: translateX(0%);
}

.basket__inner {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: $white;
  height: 100%;
  min-width: 600px;
  padding: 32px 40px 40px 40px;
}

.basket__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
}

.basket__header {
  font-weight: 500;
  font-size: 30px;
  line-height: 0.88;
  margin: 0;
  letter-spacing: -0.04em;
}

.basket__close {
  cursor: pointer;
  position: relative;
  border: 1px solid #0000001a;
  border-radius: 200px;
  width: 48px;
  height: 48px;
  background-color: transparent;

  &::after,
  &::before {
    position: absolute;
    display: block;
    content: "";
    width: 15.6px;
    height: 1.4px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background-color: $black;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}

.basket__content {
  flex-grow: 1;
  overflow-y: scroll;
}

.basket__none {
  text-align: center;
  margin-top: 30px;
}

.basket__contentHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #0000001a;
}

.basket__count {
  font-size: 14px;
  line-height: 1.12;
  margin: 0;
}

.basket__clear {
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: $black;
  font-weight: 300;
  opacity: 0.4;
  font-size: 14px;
  line-height: 1.12;
}

.basket__bottom {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
}

.basket__totalTitle {
  font-size: 16px;
  margin: 0;
}

.basket__totalPrice {
  font-size: 30px;
  font-weight: 500;
  letter-spacing: -0.02em;
  margin: 0;

  &::after {
    content: "₽";
  }
}

.basket__button {
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: $green;
  color: $black;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 20px 57px;
  margin: 0;
  transition: all 0.1s ease-in-out;
}

@media screen and (max-width: 650px) {
  .basket {
    width: 100%;
  }
  .basket__inner {
    min-width: 100%;
  }
}

@media screen and (max-width: 550px) {
  .basket__inner {
    padding: 20px 30px 30px 30px;
  }

  .basket__top {
    margin-bottom: 40px;
  }

  .basket__header {
    font-size: 24px;
  }

  .basket__count {
    font-size: 12px;
  }

  .basket__clear {
    font-size: 12px;
  }

  .basket__totalTitle {
    font-size: 14px;
    margin: 0;
  }

  .basket__totalPrice {
    font-size: 24px;
  }

  .basket__button {
    padding: 16px 43px;
  }
}

@media screen and (max-width: 370px) {
  .basket__totalPrice {
    margin-bottom: 13px;
  }
  .basket__bottom {
    flex-direction: column;
  }
}
</style>
