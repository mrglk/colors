import { ref, computed } from "vue";
import { productsList } from "../data/products.js"

function cart() {
    const productsInCart = ref({});

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
        return Object.entries(productsInCart.value).reduce((acc, [currenuId, count]) => {
            return acc += productsInCart.value[currenuId]
        }, 0)
    })

    const totalPrice = computed(() => {
        return Object.entries(productsInCart.value).reduce((total, [currenuId, count]) => {
            return total += productsList.get(+currenuId).price * productsInCart.value[currenuId]
        }, 0)
    })

    return {
        productsInCart,
        addToCart,
        reduceProductsInCart,
        removeProductFromCart,
        clearCart,
        amountOfProductsInCart,
        totalPrice
    };
}

const a = cart();

export const useCart = () => {
    return a;
}