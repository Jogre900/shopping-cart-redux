import React from "react";
import { connect } from "react-redux";

const Jugadores = ({ jugadores, agregarTitular, agregarSuplente }) => {
  console.log(jugadores)
    return (
    <section>
      <h2>Jugadores:</h2>
      {jugadores.map((j) => (
        <article key={j.id}>
          <p>{j.name}</p>
        <div>
            <button onClick={() => agregarTitular(j)}>Titular</button>
            <button onClick={() => agregarSuplente(j)}>Suplente</button>
        </div>
        </article>
      ))}
    </section>
  );
};

const mapStateToProps = (state) => ({
    jugadores: state.managerReducer.jugadores
})

const mapDispatchToProps = (dispatch) => ({
    agregarTitular(j){
        dispatch({
            type: 'AGREGAR_TITULAR',
            payload: j 
        })
    },
    agregarSuplente(j){
        dispatch({
            type: 'AGREGAR_SUPLENTE',
            payload: j
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);
