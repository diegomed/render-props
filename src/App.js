import React from "react";
import "./App.css";

function SuperButton({ buttonText }) {
  function doSomething() {
    console.log('hello coders!');
  }
  return <button type='button' onClick={doSomething}>{ buttonText }</button>
}

function SuperForm(props) {
  console.log(props);
  return (
    <>
      <h1>{props.title}</h1>
      {props.boton({ buttonText: 'SuperForm Button' })}
    </>
  );
}

export default function App() {
  return (
    <SuperForm title='Hey!' boton={SuperButton} />
  );
}
