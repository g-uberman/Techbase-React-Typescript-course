import React from 'react';
import './App.css';

interface AppProps {
  headerText: string;
  extraText?: string; //optional prop
}

// props need to be passed here before use below:

function App({ headerText, extraText='default text'}: AppProps) {
  return (
    <>
    <h1>{headerText}</h1>
    {extraText && <p>{extraText}</p>}
    </>
  );
}

export default App;
