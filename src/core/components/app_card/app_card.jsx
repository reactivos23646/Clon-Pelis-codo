import React from 'react'
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';



const image = {
  show: false,
  src:"https://picsum.photos/300/150", 
  alt:"imagen de TMDB",
}

const defaultConfig = {
  image,
};




const AppCard = ( {children, config=defaultConfig, ...props}) => {
  return (
    <article
        {...props}
        style={{
            position:"relative",
            display: "flex",
            flexDirection:"column",
            justifyContent: "space-between",
            aspectRatio: "16/9",
            height:"150px",
           
            ...props.style,

        }}
    >
        <img
            style={{
              position:"absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              top: "0",
              left: "0",
              zIndex:"-1",

            }}
            src="https://picsum.photos/300/150" alt="imagen de TMDB"/> 
        
        {children}
        
    </article>
  )
}

AppCard.Header = Header;
AppCard.Body = Body;
AppCard.Footer = Footer;

export default AppCard