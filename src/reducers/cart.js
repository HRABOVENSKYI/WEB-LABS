const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.find((zoo) => zoo.zooId === action.payload.zooId)) {
        return state.map((zoo) => {
          if (zoo.zooId === action.payload.zooId) {
            let priceForOne = zoo.price / zoo.quantity;
            zoo.quantity++;
            zoo.price += priceForOne;
            return zoo;
          }
          return zoo;
        });
      }
      return [...state, action.payload];
    case "INCREMENT_QTY":
      return state.map((zoo) => {
        if (zoo.zooId === action.payload) {
          let priceForOne = zoo.price / zoo.quantity;
          zoo.quantity++;
          zoo.price += priceForOne;
          return zoo;
        }
        return zoo;
      });
    case "DECREMENT_QTY":
      return state.map((zoo) => {
        if (zoo.zooId === action.payload && zoo.quantity >= 2) {
          let priceForOne = zoo.price / zoo.quantity;
          zoo.quantity--;
          zoo.price -= priceForOne;
          return zoo;
        }
        return zoo;
      });
    case "REMOVE_FROM_CART":
      return state.filter(zoo => zoo.zooId !== action.payload);
    default:
      return state;
  }
};

export default cartReducer;
