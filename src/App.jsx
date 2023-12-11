import { Datepicker, Input, initTE } from "tw-elements";
import React, { useEffect } from "react";
import YourComponent from './components/Modal';
import AppModal from "./core/components/app_modal/app_modal";

export const App = () => {
  useEffect(() => {
    initTE({ Datepicker, Input });
  }, []);
  return (
    <>
    <AppModal/>
    </>
  )
}

export default App

/* <div>Test MAIN!!!</div> */