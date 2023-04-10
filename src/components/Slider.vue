<script setup>
import { ref, computed } from "vue";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliderData = ref([
  {
    src: "/src/assets/imgs/slider.jpg",
    srcset: "/src/assets/imgs/slider-2x.jpg 2x",
    title: "Краски",
    description:
      "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
  },
  {
    src: "/src/assets/imgs/slider.jpg",
    srcset: "/src/assets/imgs/slider-2x.jpg 2x",
    title: "Краски",
    description:
      "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
  },
  {
    src: "/src/assets/imgs/slider.jpg",
    srcset: "/src/assets/imgs/slider-2x.jpg 2x",
    title: "Краски",
    description:
      "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
  },
  {
    src: "/src/assets/imgs/slider.jpg",
    srcset: "/src/assets/imgs/slider-2x.jpg 2x",
    title: "Краски",
    description:
      "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
  },
  {
    src: "/src/assets/imgs/slider.jpg",
    srcset: "/src/assets/imgs/slider-2x.jpg 2x",
    title: "Краски",
    description:
      "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
  },
  {
    src: "/src/assets/imgs/slider.jpg",
    srcset: "/src/assets/imgs/slider-2x.jpg 2x",
    title: "Краски",
    description:
      "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
  },
]);
</script>

<template>
  <section class="slider container">
    <swiper
      class="slider__swiper"
      :modules="[Pagination, Autoplay, Navigation]"
      :navigation="{ nextEl: '#slider__next' }"
      :loop="true"
      :pagination="{ el: '#slider__pagination', clickable: true }"
      :autoplay="{
        delay: 7000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
    >
      <swiper-slide v-for="data in sliderData" :key="data.description">
        <div class="slider__inner">
          <div class="slider__imgWrapper">
            <img :src="data.src" :srcset="data.srcset" :alt="data.title" />
          </div>
          <div class="container">
            <div class="container__row">
              <div class="slider__content">
                <div class="slider__breadcrumbs">
                  <a href="#" class="slider__breadcrumbsLink">Главная</a>
                  <a href="#" class="slider__breadcrumbsLink">Продукты</a>
                  <a href="#" class="slider__breadcrumbsLink">Краски</a>
                </div>
                <div class="slider__text">
                  <h1 class="slider__header">{{ data.title }}</h1>
                  <p class="slider__description">
                    {{ data.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <div class="slider__nextWrapper">
        <button id="slider__next">
          <img src="/svg/slider-arrow.svg" alt="Slider button" />
        </button>
      </div>
    </swiper>
    <div id="slider__pagination"></div>

    <div class="container slider__mobileVisible">
      <div class="container__row">
        <div class="slider__content">
          <div class="slider__breadcrumbs">
            <a href="#" class="slider__breadcrumbsLink">Главная</a>
            <a href="#" class="slider__breadcrumbsLink">Продукты</a>
            <a href="#" class="slider__breadcrumbsLink">Краски</a>
          </div>
          <div class="slider__text">
            <h1 class="slider__header">Краски</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.slider {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider__mobileVisible {
  display: none;
}

.slider__inner {
  width: 100%;
  position: relative;
}
.slider__imgWrapper {
  width: 100%;
}

.slider__imgWrapper img {
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: center;
}

#slider__pagination {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 16px;
  padding: 3px 20px 7.5px 20px;
  z-index: 4;
  width: auto;
  margin-top: -108px;

  &.slider__pagination {
    width: 6px;
    height: 6px;
    background-color: $white;
    margin: 0 4px;
  }
}

.swiper-pagination-horizontal.swiper-pagination-bullets
  .swiper-pagination-bullet {
  width: 6px;
  height: 6px;
  background-color: $white;
  margin: 0 4px;
}

.slider__nextWrapper {
  cursor: pointer;
  position: absolute;
  bottom: 29%;
  right: 22%;
  z-index: 4;
}

#slider__next {
  cursor: pointer;
  padding: 0;
  border: none;
  background-color: transparent;

  & img {
    width: 22px;
  }
}

.slider__content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 0;
  padding-top: 217px;
  padding-bottom: 214px;
}

.slider__breadcrumbs {
  position: absolute;
  display: flex;
  top: 32px;
  left: 0;
}
.slider__breadcrumbsLink {
  display: flex;
  align-items: center;
  font-size: 10px;
  color: $white;
  opacity: 0.3;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;

  &:not(:last-child):after {
    display: block;
    content: "";
    width: 3px;
    height: 3px;
    background-color: #c4c4c4;
    opacity: 0.3;
    margin: 0 8px;
  }
}

.slider__text {
  text-align: center;
  color: $white;
}

.slider__header {
  font-size: 72px;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 88%;
  margin: 0 0 24px 0;
}
.slider__description {
  max-width: 472px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1.3;
  margin: 0;
}

@media screen and (max-width: 1250px) {
  .slider__nextWrapper {
    right: 13%;
  }
}

@media screen and (max-width: 950px) {
  .slider__swiper {
    display: none;
  }
  .slider__mobileVisible {
    display: block;
  }
  .slider__content {
    border-top: 1px solid #f6f6f6;
    justify-content: flex-start;
    padding-top: 74px;
    padding-bottom: 0;
  }

  .slider__breadcrumbs {
    top: 16px;
  }

  .slider__breadcrumbsLink {
    color: $black;
    opacity: 0.3;
  }

  .slider__text {
    padding-bottom: 0;
  }
  .slider__header {
    font-size: 36px;
    color: $black;
    margin: 0;
  }
}
</style>
