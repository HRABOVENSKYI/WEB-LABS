export const addToCart = (zoo) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      zooId: zoo.id,
      zooName: zoo.name,
      price: zoo.entranceFee,
      quantity: 1,
    },
  };
};

export const increment = (zooId) => {
  return { type: "INCREMENT_QTY", payload: zooId };
};

export const decrement = (zooId) => {
  return { type: "DECREMENT_QTY", payload: zooId };
};

export const remove = (zooId) => {
  return { type: "REMOVE_FROM_CART", payload: zooId };
};
