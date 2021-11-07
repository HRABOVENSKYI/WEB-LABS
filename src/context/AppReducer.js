import ACTIONS from "./Actions";

export default function appReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_ZOO:
      return {
        ...state,
        zoos: [...state.zoos, action.payload],
      };

    case ACTIONS.EDIT_ZOO:
      const updatedZoo = action.payload;

      const updatedZoos = state.zoos.map((zoo) => {
        if (zoo.id === updatedZoo.id) {
          return updatedZoo;
        }
        return zoo;
      });

      return {
        ...state,
        zoos: updatedZoos,
      };

    case ACTIONS.REMOVE_ZOO:
      return {
        ...state,
        zoos: state.zoos.filter((zoo) => zoo.id !== action.payload),
      };

    case ACTIONS.FILTER_ZOOS:
      return {
        ...state,
        filters: { ...state.filters, ...action.payload },
      };

    default:
      return state;
  }
}
