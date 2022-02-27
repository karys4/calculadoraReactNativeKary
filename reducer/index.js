import { initialState } from "./constants";
import { actions } from "./action";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.CLICK_NUMBER:
      if (state.currentValue === "0" && action.value != ".") {
        return {
          ...state,
          currentValue: `${action.value}`,
        };
      }

      if (action.value === "." && state.pointCounter !== 0) {
        return state;
      }

      if (action.value === ".") {
        return {
          ...state,
          currentValue: `${state.currentValue}${action.value}`,
          pointCounter: 1,
        };
      }

      return {
        ...state,
        currentValue: `${state.currentValue}${action.value}`,
      };

    case actions.CLICK_C:
      return initialState;

    case actions.CLICK_OPERATOR:
      return {
        operator: action.value,
        previousValue: state.currentValue,
        currentValue: "0",
        pointCounter: 0,
      };
    case actions.CLICK_EQUAL:
      const current = parseFloat(state.currentValue);
      const previous = parseFloat(state.previousValue);

      switch (state.operator) {
        case "+":
          return {
            ...initialState,
            currentValue: previous + current,
          };
        case "-":
          return {
            ...initialState,
            currentValue: previous - current,
          };
          case "x":
          return {
            ...initialState,
            currentValue: previous * current,
          };

          case "/":
          return {
            ...initialState,
            currentValue: previous / current,
          };

          case "%":
          return {
            ...initialState,
            currentValue: previous % current,
          };

        default:
          return state;
      }
    default:
      state;
  }
};

export { reducer, actions, initialState };
