//import createPortal from "react-dom"
import App_footerMovie from "../../../core/app_footerMovie/app_footerMovie";
import App_navMovie from "../../../core/app_navMovie/app_navMovie";
//import AppCard from "../../../core/components/app_card/app_card";
//import AppCarouselSection from "../../../core/components/app_carousel_section/app_carousel_section";
import AppSwiper from "../../../core/components/app_swiper/app_swiper";
import AppSwiperSlide from "../../../core/components/app_swiper/components/app_swiper_slide";



const HomeView = () => {
    
    return (
        <>
        <App_navMovie/>

        <div>
            <h1>Series</h1>
            <AppSwiper>
                {Array.from({ length: 10}).map((_,index) => (
                    <AppSwiperSlide key={index}>
                        <div
                            style={{
                                height: '150px',
                                width:'250px',
                                backgroundColor: 'red',
                            }}
                        >
                            <h3>{index}</h3>
                        </div>
                    </AppSwiperSlide>
                    ))}
            </AppSwiper>

            <h1>Continuar viendo contenido de...</h1>
            <AppSwiper>
                {Array.from({ length: 10}).map((_,index) => (
                    <AppSwiperSlide key={index}>
                        <div
                            style={{
                                height: '150px',
                                width:'250px',
                                backgroundColor: 'red',
                            }}
                        >
                            <h3>{index}</h3>
                        </div>
                    </AppSwiperSlide>
                    ))}
            </AppSwiper>

            <h1>Peliculas Mejor Puntuadas</h1>
            <AppSwiper>
                {Array.from({ length: 10}).map((_,index) => (
                    <AppSwiperSlide key={index}>
                        <div
                            style={{
                                height: '150px',
                                width:'250px',
                                backgroundColor: 'red',
                            }}
                        >
                            <h3>{index}</h3>
                        </div>
                    </AppSwiperSlide>
                    ))}
            </AppSwiper>

            <App_footerMovie/>
        </div>
        </>
    );
};


export default HomeView;