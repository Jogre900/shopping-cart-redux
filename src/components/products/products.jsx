import React, { useState } from "react";
import { connect } from "react-redux";
import Header from '../header'
const Products = ({ products, agregarAlCarrito, getAmount }) => {
  const [inCart, setInCart] = useState(false);
  
  return (
    <section>
      
      {products.map((p) => (
        <article key={p.id}>
          <p>{p.name}</p>
          <p>{p.price}</p>
          <div>
            
              {(p.inCart)? <p>Agregado</p>: 
              <button onClick={() => agregarAlCarrito(p)}>
              Agregar al Carrito
            </button>
              }
            
          </div>
        </article>
      ))}
    </section>
  );
};

const stateToProps = (state) => {
  return {
    products: state.shoppingCartReducer.products,
  };
};

const dispatchToProps = (dispatch) => ({
  agregarAlCarrito(p) {
    dispatch({
      type: "AGREGAR_CARRITO",
      payload: p,
    });
  },
    getAmount(){
      dispatch({
        type: 'TOTAL'
      })
    }
});

export default connect(stateToProps, dispatchToProps)(Products);
