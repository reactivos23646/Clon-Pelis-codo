import React from 'react'

import RootProvider from './core/providers/root_providers';
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './core/routers/app_router';
//registro de Swiper
import {register as registerSwiper} from 'swiper/element/bundle'

registerSwiper();

const App = () => {
  return (
    <>

    <RootProvider>
    
            <RouterProvider router={appRouter} />
            
   </RootProvider>
   
    </>
  );
};

export default App;
