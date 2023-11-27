import React from 'react'
import { useAuth } from '../../core/auth/hook/use_auth';
import { AppSwiper } from '../../core/components/carrusel/app_swiper';
import { getPopularMovies, getPlayingMovies,getUpcomingMovies } from './services/movie.services';
import useSWR from 'swr';


const HomeView = ()=>{

    const {
        data: popularMovies,
        error: popularMoviesError,
        isLoading: popularMoviesIsLoading,
      } = useSWR("getPopularMovies", getPopularMovies);
    
      const {
        data: upComingMovies,
        error: upComingMoviesError,
        isLoading: upComingMoviesIsLoading,
      } = useSWR("getUpcomingMovies",getUpcomingMovies);

      const {
        data: playingMovies,
        error: playingMoviesError,
        isLoading: playingMoviesIsLoading,
      } = useSWR("getPlayingMovies", getPlayingMovies);

    const { logout, isLoggedIn } = useAuth();

    console.log("estado ", isLoggedIn);
    console.log(upComingMovies);

return  (
        <div>
            <h1>HOME VIEW</h1>
            <button onClick={logout}>Cerrar Sesión</button> 
            <p><br /></p>

            <h2>Películas más Populares</h2>
            <AppSwiper>
            {
                popularMovies?.map((e,index)=>(
                    <swiper-slide key={index}>
                    <div 
                        style={{
                            color:"red",
                            height:"150px",
                            width:"250px",
                            backgroundImage: `url(${e.backdrop})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                    }}>
                        <h3>{e.title}</h3>

                    </div>
                    </swiper-slide>
                ))
            }

            </AppSwiper>

            <h2>Novedades</h2>
            <AppSwiper>
            {
                upComingMovies?.map((e,index)=>(
                    <swiper-slide key={index}>
                    <div 
                        style={{
                            color:"red",
                            height:"150px",
                            width:"250px",
                            backgroundImage: `url(${e.backdrop})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                    }}>
                        <h3> {e.title} </h3>

                    </div>
                    </swiper-slide>
                ))
            }

            </AppSwiper>
            <h2>Continúa Viendo</h2>
            <AppSwiper>
            {
                playingMovies?.map((e,index)=>(
                    <swiper-slide key={index}>
                    <div 
                        style={{
                            color:"red",
                            height:"150px",
                            width:"250px",
                            backgroundImage: `url(${e.backdrop})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                    }}>
                        <h3>{e.title}</h3>

                    </div>
                    </swiper-slide>
                ))
            }

            </AppSwiper>
        </div>

        )

}

export default HomeView