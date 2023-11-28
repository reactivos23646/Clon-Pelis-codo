import { Datepicker, Input, initTE } from "tw-elements";
import React, { useEffect } from "react";
import YourComponent from './components/Modal';

export const App = () => {
  useEffect(() => {
    initTE({ Datepicker, Input });
  }, []);
  return (
    <>
    <YourComponent/>
    </>
  )
}

export default App

/* <div>Test MAIN!!!</div> */