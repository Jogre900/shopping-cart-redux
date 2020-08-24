import React from "react";
import { connect } from "react-redux";

const Titulares = ({ titulares, removerTitular }) => {
  return (
    <section>
      <h2>Titulares:</h2>
      {titulares.map((t) => (
        <article key={t.id}>
          <p>{t.name}</p>
          <div>
            <button onClick={() => removerTitular(t)}>X</button>
          </div>
        </article>
      ))}
    </section>
  );
};

const mapStateToProps = (state) => ({
  titulares: state.managerReducer.titulares,
});

const mapDispatchToProps = (dispatch) => ({
  removerTitular(titular) {
    dispatch({
      type: "ELIMINAR_JUGADOR",
      payload: titular,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);
