import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from '../header'

const ShoppingCart = ({
  products,
  eliminarProducto,
  getTotal,
  total,
  toggleCant
}) => {
  //const [total, setTotal] = useState(0)
  useEffect(() => {
    getTotal();
  });
  
  return (
    <section>
    
      <h2>Lista de Productos Agregados:</h2>
      {products &&
        products.map((p, i) => (
          <article key={i}>
            <p>{p.name}</p>
            <p>{p.price}</p>
            {/* hack */}
            <div>
              <button onClick={() => toggleCant(p,'inc')}>+</button>
              <span>{p.amount}</span>
              <button onClick={() => {
                (p.amount === 1) ? eliminarProducto(p) : toggleCant(p,'dic')
              }}>-</button>
            </div>
            <div>
              <button onClick={() => eliminarProducto(p)}>Eliminar</button>
            </div>
          </article>
        ))}
      <div>
        <p>
          Total: <span>{total} $</span>
        </p>
      </div>
    </section>
  );
};

const stateToProps = (state) => {
  return {
    products: state.shoppingCartReducer.shoppingCart,
    total: state.shoppingCartReducer.total
  };
};

const dispatchToProps = (dispatch) => ({
  eliminarProducto(item) {
    dispatch({
      type: "ELIMINAR_PRODUCTO",
      payload: item,
    });
  },
  toggleCant(p,toggle){
    dispatch({
      type: 'CANTIDAD',
      payload: {
        p,
        toggle
      }
    })
  },
  getTotal() {
    dispatch({
      type: "TOTAL",
    });
  },
});

export default connect(stateToProps, dispatchToProps)(ShoppingCart);
