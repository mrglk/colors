import { createApp } from 'vue'
import App from './App.vue'
import Filter from "./components/Filter.vue"
import Switch from "./components/Switch.vue"
import Basket from "./components/Basket.vue";
import BasketItem from "./components/BasketItem.vue";
import Select from "./components/Select.vue";
import CatalogItem from "./components/CatalogItem.vue";
import Slider from './components/Slider.vue';
import Catalog from './components/Catalog.vue';
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Overlay from "./components/Overlay.vue";
import Colors from "./pages/Colors.vue";

const app = createApp(App);
app.component('Filter', Filter);
app.component('Switch', Switch);
app.component('Basket', Basket);
app.component('BasketItem', BasketItem);
app.component('Select', Select);
app.component('CatalogItem', CatalogItem);
app.component('Slider', Slider);
app.component('Catalog', Catalog);
app.component('Header', Header);
app.component('Footer', Footer);
app.component('Overlay', Overlay);
app.component('Colors', Colors);
app.mount('#app');