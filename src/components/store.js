import { createStore, combineReducers } from "redux";

const dataNumbers = {
  numbers: [],
};

const dataUsers = {
  users: [],
};

const manager = {
  jugadores: [
    {
      id: 1,
      name: "Pedro",
    },
    {
      id: 2,
      name: "Moises",
    },
    {
      id: 3,
      name: "Juan",
    },
  ],
  titulares: [],
  suplentes: [],
};

const apiData = {
  apiUsers: [],
};

const productList = {
  products: [
    {
      id: 1,
      name: "Franela",
      price: 220.0,
      amount: 1,
      inCart: false,
    },
    {
      id: 2,
      name: "Pantalon",
      price: 80.0,
      amount: 1,
      inCart: false,
    },
    {
      id: 3,
      name: "Zapatos",
      price: 90.0,
      amount: 1,
      inCart: false,
    },
  ],
  shoppingCart: [],
  total: 0,
  amount: 0,
};

const numbersReducer = (state = dataNumbers, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        numbers: state.numbers.concat(action.payload),
      };
    case "REMOVE":
      return {
        ...state,
        numbers: state.numbers.filter((u) => u !== action.payload),
      };
    default:
      break;
  }
  return state;
};

const usersReducer = (state = dataUsers, action) => {
  switch (action.type) {
    case "AGREGAR":
      return {
        ...state,
        users: state.users.concat(action.payload),
      };
    case "REMOVER":
      return {
        ...state,
        users: state.users.filter((u) => u.id !== action.payload.id),
      };

    default:
      break;
  }
  return state;
};

const managerReducer = (state = manager, action) => {
  switch (action.type) {
    case "AGREGAR_TITULAR":
      return {
        ...state,
        titulares: state.titulares.concat(action.payload),
        jugadores: state.jugadores.filter((j) => j.id !== action.payload.id),
      };
    case "AGREGAR_SUPLENTE":
      return {
        ...state,
        suplentes: state.suplentes.concat(action.payload),
        jugadores: state.jugadores.filter((j) => j.id !== action.payload.id),
      };
    case "ELIMINAR_JUGADOR":
      return {
        ...state,
        jugadores: state.jugadores.concat(action.payload),
        titulares: state.titulares.filter((j) => j.id !== action.payload.id),
        suplentes: state.suplentes.filter((j) => j.id !== action.payload.id),
      };

    default:
      break;
  }
  return state;
};

const apiReducer = (state = apiData, action) => {
  if (action.type === "GUARDAR_DATOS") {
    return {
      ...state,
      apiUsers: state.apiUsers.concat(action.payload),
    };
  }
  return state;
};

const shoppingCartReducer = (state = productList, action) => {
  switch (action.type) {
    case "AGREGAR_CARRITO":
      return {
        ...state,
        products: state.products.map((p) => {
          if (p.id === action.payload.id) p.inCart = true;
          return p;
        }),
        shoppingCart: state.shoppingCart.concat(action.payload),
        amount: state.amount + 1,
      };
    case "ELIMINAR_PRODUCTO":
      return {
        ...state,
        products: state.products.map(p => {
          if(p.id === action.payload.id) p.inCart = false
          return p
        }),
        shoppingCart: state.shoppingCart.filter((p) => p !== action.payload),
      };
    case "TOTAL":
      let { total, amount } = state.shoppingCart.reduce(
        (cartTotal, item) => {
          const { price, amount } = item;
          const totalItem = price * amount;

          cartTotal.total += totalItem;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    case "CANTIDAD":
      console.log(action.payload);
      return {
        ...state,
        shoppingCart: state.shoppingCart.map((item) => {
          if (item.id === action.payload.p.id) {
            if (action.payload.toggle === "inc") {
              return (item = { ...item, amount: item.amount + 1 });
            } else {
              return (item = { ...item, amount: item.amount - 1 });
            }
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  numbersReducer,
  usersReducer,
  managerReducer,
  apiReducer,
  shoppingCartReducer,
});
const store = createStore(reducers);
export default store;

// store.subscribe(() => {
//   console.log("store update!", store.getState());
// });

store.dispatch({
  type: "ADD",
  payload: [100, 200, 300, 400, 500],
});

store.dispatch({
  type: "REMOVE",
  payload: 500,
});

store.dispatch({
  type: "AGREGAR",
  payload: [
    {
      id: 1,
      name: "jose",
      dni: "19222907",
    },
    {
      id: 2,
      name: "maria",
      dni: "19255907",
    },
    {
      id: 3,
      name: "jhon",
      dni: "20784698",
    },
  ],
});

store.dispatch({
  type: "REMOVER",
  payload: {
    id: 2,
    name: "maria",
    dni: "19255907",
  },
});
