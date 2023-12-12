import { Datepicker, Input, initTE } from "tw-elements";
import React, { useEffect } from "react";
import AppModal from "./core/components/app_modal/app_modal";
import RootProvider from './core/providers/root_providers';
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './core/routers/app_router';
//registro de Swiper
import {register as registerSwiper} from 'swiper/element/bundle'

registerSwiper();

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

/*
const App = () => {
  return (
    <>

    <RootProvider>
    
            <RouterProvider router={appRouter} />
            
   </RootProvider>
   
    </>
  );
};
*/

export default App

/* <div>Test MAIN!!!</div> */