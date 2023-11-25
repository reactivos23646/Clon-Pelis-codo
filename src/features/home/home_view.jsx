import React from 'react'
import { useAuth } from '../../core/auth/hook/use_auth';
import { AppSwiper } from '../../core/components/carrusel/app_swiper';

const HomeView = ()=>{

    const { logout, isLoggedIn } = useAuth();

    console.log("estado ", isLoggedIn);

return  (
        <div>
            <h1>HOME VIEW</h1>
            <button onClick={logout}>Cerrar Sesión</button> 
            <p><br /></p>
            <h2>Películas más Populares</h2>
            <AppSwiper>
            {
                Array.from({length:10}).map((_,index)=>(
                    <swiper-slide key={index}>
                    <div 
                        style={{
                            color:"red",
                            height:"150px",
                            width:"250px",
                            backgroundColor: "white"
                    }}>
                        <h3>Slider {index+1} </h3>

                    </div>
                    </swiper-slide>
                ))
            }

            </AppSwiper>

            <h2>Novedades</h2>
            <AppSwiper>
            {
                Array.from({length:10}).map((_,index)=>(
                    <swiper-slide key={index}>
                    <div 
                        style={{
                            color:"red",
                            height:"150px",
                            width:"250px",
                            backgroundColor: "white"
                    }}>
                        <h3>Slider {index+1} </h3>

                    </div>
                    </swiper-slide>
                ))
            }

            </AppSwiper>
            <h2>Continúa Viendo</h2>
            <AppSwiper>
            {
                Array.from({length:10}).map((_,index)=>(
                    <swiper-slide key={index}>
                    <div 
                        style={{
                            color:"red",
                            height:"150px",
                            width:"250px",
                            backgroundColor: "white"
                    }}>
                        <h3>Slider {index+1} </h3>

                    </div>
                    </swiper-slide>
                ))
            }

            </AppSwiper>
        </div>

        )

}

export default HomeView