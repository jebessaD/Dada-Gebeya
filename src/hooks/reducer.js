const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_ALL":
      return { ...state, products: [] };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            return { ...product, amount: 0 };
          }
          return product;
        }),
      };
    case "ADD_TO_CART":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload && product.amount >= 1) {
            console.log("all ready added");
            return product;
          }
          if (product.id === action.payload) {
            return { ...product, amount: product.amount + 1 };
          }
          return product;
        }),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            if (product.amount > 0) {
              return { ...product, amount: product.amount - 1 };
            }
          }
          return product;
        }),
      };

    case "INCREASE_AMOUNT":
      return {
        ...state,
        products: state.products.map((product) => {
          // console.log("value increasedd");
          if (product.id === action.payload) {
            // console.log("product.added", product.id);
            return { ...product, amount: product.amount + 1 };
          }

          return product;
        }),
      };

    case "SET_AMOUNT":
      const newAmount = state.products.reduce((acc, curr) => {
        return acc + curr.amount;
      }, 0);
      return { ...state, amount: newAmount };

    case "SET_TOTAL":
      const tot = state.products.reduce((acc, curr) => {
        return acc + curr.amount * curr.price;
      }, 0);
      return { ...state, total: tot };

    case "FETCH_PRODUCTS":
      const data = JSON.parse(localStorage.getItem("ALL_CURRENT_DATA"));
      if (!data || !data.products.length) {
        const newProducts = action.payload.map((product) => {
          return { ...product, amount: 0 };
        });
        return { ...state, products: newProducts };
      } else {
        return { ...state };
      }

    case "CHANGE_LOADING":
      return { ...state, loading: false };

    case "ERROR":
      return { ...state, error: true };

    case "CHANGE_MODE":
      return { ...state, darkMode: !state.darkMode };
    default:
      return { ...state };
  }
};

export default reducer;
