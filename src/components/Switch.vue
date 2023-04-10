<script setup>
const props = defineProps({
  title: String,
  checked: Boolean,
  setSelectedFilters: Function,
  label: String,
});
</script>

<template>
  <div class="switch">
    <label class="switch__checkbox">
      <input
        class="switch__input"
        type="checkbox"
        :checked="checked"
        @click="setSelectedFilters(label)"
      />
      <span class="switch__slider round"></span>
    </label>
    <p class="switch__title">{{ title }}</p>
  </div>
</template>

<style lang="scss" scoped>
.switch {
  display: flex;
  align-items: center;
}
.switch__checkbox {
  position: relative;
  display: inline-block;
  width: 36px;
  height: 22px;
}
.switch__input {
  display: none;
}
.switch__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 40px;
  background-color: $grey;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.switch__slider:before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  left: 7px;
  bottom: 7px;
  border-radius: 50%;
  background-color: $black;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.switch__input:checked + .switch__slider {
  background-color: $green;
}

.switch__input:focus + .switch__slider {
  box-shadow: 0 0 1px $green;
}

.switch__input:checked + .switch__slider:before {
  transform: translateX(14px);
  -webkit-transform: translateX(14px);
  -ms-transform: translateX(14px);
}

.switch__title {
  margin: 0 0 0 12px;
  font-size: 12px;
  color: $black;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

@media screen and (max-width: 950px) {
  .switch__title {
    margin: 0 0 0 14px;
    font-size: 14px;
  }
}

@media screen and (max-width: 650px) {
  .switch__title {
    margin: 0 0 0 12px;
    font-size: 12px;
  }
}
</style>
