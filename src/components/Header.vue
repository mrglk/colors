<script setup>
import { computed } from "vue";

const props = defineProps({
  openBasket: Function,
  closeBasket: Function,
  amountOfProductsInCart: Number,
});
</script>

<template>
  <header class="header container">
    <div class="container__row">
      <div class="header__inner">
        <div class="header__burgerMenu">
          <img src="/svg/burger.svg" alt="Burger menu" />
        </div>
        <div class="header__logoWrapper">
          <div class="header__logo">
            <a href="#" class="header__logo"
              ><img src="/svg/logo.svg" alt="Colors logo"
            /></a>
          </div>
        </div>
        <div class="header__center">
          <nav class="header__nav">
            <a href="#" class="header__navLink">Продукты</a>
            <a href="#" class="header__navLink">Цвета</a>
            <a href="#" class="header__navLink">Вдохновение</a>
            <a href="#" class="header__navLink">Советы</a>
            <a href="#" class="header__navLink">Найти магазин</a>
          </nav>
          <div class="header__phone">
            <a href="tel:+74952217769">+7 (495) 221-77-69</a>
            <p>Заказать звонок</p>
          </div>
        </div>
        <div class="header__toolbar">
          <a href="#" class="header__toolbarItem">
            <img
              class="header__toolbarIcon"
              src="/svg/search.svg"
              alt="Search"
            />
          </a>
          <a href="#" class="header__toolbarItem">
            <img
              class="header__toolbarIcon"
              src="/svg/profile.svg"
              alt="Profile"
            />
          </a>
          <a href="#" class="header__toolbarItem">
            <img
              class="header__toolbarIcon"
              src="/svg/heart.svg"
              alt="Wishlist"
            />
          </a>
          <div class="header__toolbarItem header__basketWrapper">
            <button class="header__basket" @click="openBasket(true)">
              {{ amountOfProductsInCart > 9 ? "9+" : amountOfProductsInCart }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <Basket />
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  height: 104px;
}
.header__inner {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.header__burgerMenu {
  display: none;
  cursor: pointer;
}

.header__logoWrapper {
  display: flex;
  align-items: center;
}
.header__logo {
  width: 131px;
}
.header__center {
  display: flex;
  justify-content: space-between;
  width: 66%;
  // width: 63%;
  margin: 0 20px;
}

.header__nav {
  display: flex;
  align-items: center;
}

.header__navLink {
  font-size: 14px;
  margin-right: 24px;
  color: $black;
  text-decoration: none;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  &:hover {
    color: $green;
    transition: color 0.1s ease-in;
  }
}

.header__phone {
  & a {
    font-size: 16px;
    font-weight: 500;
    color: $black;
    text-decoration: none;
    letter-spacing: -0.02em;

    &:hover {
      color: $green;
      transition: color 0.1s ease-in;
    }
  }

  & p {
    font-size: 14px;
    opacity: 0.3;
    margin: 0;
  }
}

.header__toolbar {
  display: flex;
  align-items: center;

  &Item {
    cursor: pointer;
    margin-left: 24px;
    text-decoration: none;
  }
}

.header__basket {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 12px;
  background-color: $green;
  color: $black;
  border: none;
  border-radius: 200px;
  padding: 5px 8px;
  width: 24px;
  height: 24px;
}

@media screen and (max-width: 1200px) {
  .header__navLink {
    margin-right: 19px;
  }

  .header__phone a {
    font-size: 14px;
  }

  .header__toolbarItem {
    margin-left: 19px;
  }
}

@media screen and (max-width: 1120px) {
  .header {
    height: 64px;
  }
  .header__burgerMenu {
    display: block;
  }
  .header__logo {
    width: 99px;
  }
  .header__center {
    display: none;
  }

  .header__toolbarItem:not(:last-child) {
    display: none;
  }
}
</style>
