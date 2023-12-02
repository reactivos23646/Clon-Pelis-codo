import React from 'react'

const App_navMovie = () => {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark" data-bs-theme="dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src="./src/images/logoNetflix.png" width="120" height="120" alt="logo"></img>
                        </a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="../navbar/pages/Series.jsx">Series</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="../navbar/pages/Peliculas.jsx">Peliculas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="../navbar/pages/NovedadesPopulares.jsx">Novedades populares</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="../navbar/pages/MiLista.jsx">Mi lista</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="../navbar/pages/ExploraPorIdioma.jsx">Explora por idioma</a>
                                </li>
                            </ul>


                            <div className="navbar-nav flex flex-row ml-auto gap-7 items-center">
                                <div className="icon-color">
                                    <i className="bi bi-search" type="submit"></i>
                                </div>
                            </div>

                            <div>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">Niños</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="icon-color">
                                <i className="bi bi-bell" type="submit"></i>
                            </div>

                            <div>
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown-center">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src="./src/images/avatar_1.jpg" className="rounded float-start" width="40" height="40" alt="avatar"></img>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Usuario 1</a></li>
                                            <li><a className="dropdown-item" href="#">Usuario 2</a></li>
                                            <li><a className="dropdown-item" href="#">Usuario 3</a></li>
                                            <li><a className="dropdown-item" href="#">Administrar Perfiles</a></li>
                                            <li><a className="dropdown-item" href="#">Tranferir Perfil</a></li>
                                            <li><a className="dropdown-item" href="#">Cuenta</a></li>
                                            <li><a className="dropdown-item" href="#">Centro de ayuda</a></li>
                                            <li><hr className="dropdown-divider"></hr></li>
                                            <li><a className="dropdown-item" href="#">Cerrar sesión en Netflix</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};
    
export default App_navMovie;