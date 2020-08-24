import React from "react";
import { connect } from "react-redux";

const Suplentes = ({ suplentes, eliminarSuplente }) => {
  return (
    <section>
      <h2>Suplentes:</h2>
      {suplentes.map((s) => (
        <article key={s.id}>
          <p>{s.name}</p>
          <div>
            <button onClick={() => eliminarSuplente(s)}>X</button>
          </div>
        </article>
      ))}
    </section>
  );
};

const stateToProps = (state) => ({
  suplentes: state.managerReducer.suplentes,
});

const dispatchToProps = (dispatch) => ({
  eliminarSuplente(suplente) {
    dispatch({
      type: "ELIMINAR_JUGADOR",
      payload: suplente,
    });
  },
});

export default connect(stateToProps, dispatchToProps)(Suplentes);
