import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

const ROUTE = "https://jsonplaceholder.typicode.com/users";

const DatosApi = ({ reduxData, guardarDatos }) => {
  const [data, setData] = useState({});

  const getData = async () => {
    let data = await axios.get(ROUTE);
    alert("Datos Recibidos");
    setData(data.data);
  };
  return (
    <section>
      <h2>Api Con Axios y Redux!</h2>
      <button onClick={() => getData()}>Solicitar Data</button>
      <button onClick={() => guardarDatos(data)}>Mandar Datos a Redux</button>
      <section>
        <h3>Datos desde Redux</h3>
        <div id="reduxArticle">
          {reduxData.map((u, i) => (
            <article key={i}>
              <p>{u.name}</p>
              <p>{u.email}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};

const stateToProps = (state) => ({
  reduxData: state.apiReducer.apiUsers,
});

const dispatchToProps = (dispatch) => ({
  guardarDatos(data) {
    document.getElementById("reduxArticle").innerHTML = "";
    dispatch({
      type: "GUARDAR_DATOS",
      payload: data,
    });
  },
});
export default connect(stateToProps, dispatchToProps)(DatosApi);
