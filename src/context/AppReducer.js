export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_ZOO":
      return {
        ...state,
        zoos: [...state.zoos, action.payload],
        foundZoos: [...state.zoos, action.payload],
      };

    case "EDIT_ZOO":
      const updatedZoo = action.payload;

      const updatedZoos = state.zoos.map((zoo) => {
        if (zoo.id === updatedZoo.id) {
          return updatedZoo;
        }
        return zoo;
      });

      let foundZoos = [];
      if (state.isSearchActive) {
        foundZoos = state.foundZoos.map((zoo) => {
          if (zoo.id === updatedZoo.id) {
            return updatedZoo;
          }
          return zoo;
        });
      }

      return {
        ...state,
        zoos: updatedZoos,
        foundZoos: foundZoos,
      };

    case "REMOVE_ZOO":
      let foundZoosRemove = [];
      if (state.isSearchActive) {
        foundZoosRemove = state.foundZoos.filter(
          (zoo) => zoo.id !== action.payload
        );
      }

      return {
        ...state,
        zoos: state.zoos.filter((zoo) => zoo.id !== action.payload),
        foundZoos: foundZoosRemove,
      };

    case "SEARCH_ZOOS":
      const searchValue = action.payload.toLowerCase();
      return {
        ...state,
        isSearchActive: !action.payload.lenght > 0 || false,
        foundZoos: state.zoos.filter((zoo) => {
          const zooNameLowerCase = zoo.zooName.toLowerCase();
          return zooNameLowerCase.search(searchValue) !== -1;
        }),
      };

    case "ORDER_ZOOS":
      const fieldName = action.payload;

      let zoos = [];
      let foundZoosOrder = [];
      if (fieldName === "none") {
        zoos = state.zoos
          .sort((first, second) => first.id - second.id)
          .reverse();
        foundZoosOrder = state.foundZoos
          .sort((first, second) => first.id - second.id)
          .reverse();
      } else if (fieldName === "numOfVisitors") {
        zoos = state.zoos
          .sort((first, second) => first.numOfVisitors - second.numOfVisitors)
          .reverse();
        foundZoosOrder = state.foundZoos
          .sort((first, second) => first.numOfVisitors - second.numOfVisitors)
          .reverse();
      } else if (fieldName === "numOfAnimals") {
        zoos = state.zoos
          .sort((first, second) => first.numOfAnimals - second.numOfAnimals)
          .reverse();
        foundZoosOrder = state.foundZoos
          .sort((first, second) => first.numOfAnimals - second.numOfAnimals)
          .reverse();
      }

      return {
        ...state,
        zoos: zoos,
        foundZoos: foundZoosOrder,
      };

    default:
      return state;
  }
}
