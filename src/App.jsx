import { RouterProvider } from "react-router-dom";
import { appRouter } from "./core/routes/app_router";
import RootProvider from "./core/providers/root_provider.jsx";

// Swiper
import { register as registerSwiper } from "swiper/element/bundle";
import App_navMovie from "./core/app_navMovie/app_navMovie.jsx";
import App_footerMovie from "./core/app_footerMovie/app_footerMovie.jsx";


registerSwiper();

const App = () => {
  return (
    <>
      <RootProvider>
        <App_navMovie/>
        <RouterProvider router={appRouter}/>
        <App_footerMovie/>
      </RootProvider>
    </>
  );
};
export default App