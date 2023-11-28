import React from "react";
import AppTitle from "../app_title/app_title";
import { AppSwiper } from "../carrusel/app_swiper";
import AppSwiperSlide from "../carrusel/components/app_swiper_slider";


const AppCarruselSection = ({ title, data }) => {
  return (
    <>
      <AppTitle >{title}</AppTitle>
      <AppSwiper>
        {data?.map((e) => (
          <AppSwiperSlide key={e.id}>
            <div
              style={{
                aspectRatio:"16/9",
                width: "290px",
                backgroundImage: `url(${e.backdrop})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <h3>{e.title}</h3>
            </div>
          </AppSwiperSlide>
        ))}
      </AppSwiper>
    </>
  );
};

export default AppCarruselSection;
