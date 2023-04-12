import { ref, computed } from "vue";
import { productsList } from "../data/products.js"

function cart() {
    const productsInCart = ref({});

    const addToCart = (id) => {
        productsInCart.value[id] = (productsInCart.value[id] ?? 0) + 1;
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

    const totalPriceForOneProduct = (id) => {
        return productsList.get(+id).price * productsInCart.value[id]
    }
    
    const amountOfProductsInCart = computed(() => {
        return Object.values(productsInCart.value).reduce((acc, count) => acc + count , 0)
    })

    const totalPrice = computed(() => {
        return Object.entries(productsInCart.value).reduce((acc, [currentId, count]) => {
            return acc += productsList.get(+currentId).price * count
        }, 0)
    })

    const onCloseModal = () => {
        for (let id in productsInCart.value) {
            productsInCart.value[id] === 0 && delete productsInCart.value[id];
        }
    }

    return {
        productsInCart,
        addToCart,
        reduceProductsInCart,
        removeProductFromCart,
        clearCart,
        amountOfProductsInCart,
        totalPriceForOneProduct,
        totalPrice,
        onCloseModal
    };
}

const cartInstance = cart();

export const useCart = () => {
    return cartInstance;
}