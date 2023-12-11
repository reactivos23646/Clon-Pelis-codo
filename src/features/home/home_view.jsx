import React from 'react'
import { useAuth } from '../../core/auth/hook/use_auth';
import { AppSwiper } from '../../core/components/carrusel/app_swiper';
import { getPopularMovies, getPlayingMovies,getUpcomingMovies } from './services/movie.services';
import useSWR from 'swr';
import AppButton from '../../core/components/button/app_button';
import AppCarruselSection from '../../core/components/app_carrusel_section/app_carrusel_section';
import AppCard from '../../core/components/app_card/app_card';
import AppModal from '../../core/components/app_modal/app_modal';
import modalPopulares from '../../core/components/modales/components/modal_populares';



const HomeView = ()=>{

    const { isOpen, closeModal, openModal} = isModal();

    const {} = modalPopulares();

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
            <AppButton onClick={logout}>Cerrar Sesión</AppButton>
            <p><br/></p>

            <AppCarruselSection title={"Películas más populares"} data={popularMovies}/>
            <p><br/></p>
            <AppCarruselSection title={"Novedades: agregadas recientemente"} data={upComingMovies}/>
            <p><br/></p>
            <AppCarruselSection title={"Continuar viendo"} data={playingMovies}/>

            <button Onclick ={openModal}>Abrir</button>

            <AppModal open={isOpen} onClickedOut={closeModal}>
              <div>
                <modalPopulares/>
              </div>

            </AppModal>
            
            
        </div>

        )

}

export default HomeView