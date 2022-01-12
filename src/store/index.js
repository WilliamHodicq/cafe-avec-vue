import { createStore } from 'vuex'

export default createStore({
  state: {
    restaurantName: "La belle vue",
    shoppingCart: 0,
    simpleMenu: [
      {
        name: "Croissant",
        image: {
          source: "/images/croissant.jpg",
          alt: "Un croissant"
        },
        inStock: true,
        quantity: 1,
        price: 2.99
      },
      {
        name: "Baguette de pain",
        image: {
          source: "/images/french-baguette.jpeg",
          alt: "Quatre baguettes de pain"
        },
        inStock: true,
        quantity: 1,
        price: 3.99
      },
      {
        name: "Éclair",
        image: {
          source: "/images/eclair.jpg",
          alt: "Éclair au chocolat"
        },
        inStock: false,
        quantity: 1,
        price: 4.99
      }
    ],
    contact:{
      address: "18 avenue du Beurre, Paris, France",
      email: "hello@cafewithavue.bakery",
      phone: "01 88 88 88 88"
    }
  },
  getters: {
    copyright: (state) => {
      const currentYear = new Date().getFullYear()

      return `Copyright ${state.restaurantName} ${currentYear}`
    }
  },
  mutations: {
    ADD_ITEMS_TO_SHOPPING_CART(state, amount) {
      state.shoppingCart += +amount
    }
  },
  actions: {
    updateShoppingCart({ commit }, amount) {
      commit("ADD_ITEMS_TO_SHOPPING_CART", amount)
    }
  },
  modules: {
  }
})