// import { useState, useEffect } from 'react';
// import { getGifs } from '../helpers/GetGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';


export const GifGrid = ({categoria}) => {
       

    // Opcion 1
    // const [imagenes, setImagenes] = useState([]);  
    // useEffect(()=>{
    // getGifs(categoria)
    // .then( newImagenes => setImagenes(newImagenes) )
    // },[categoria]);
    // useEffect(()=>{
    //     getGifs(categoria)
    //     .then( newImagenes => setImagenes(newImagenes) )
    //     },[categoria]);

    // Opcion 2
    // const [imagenes, setImagenes] = useState([]);  

    // const getImages = async() => {
    //     const newImagenes = await getGifs( categoria );
    //     setImagenes(newImagenes);
    // }

    // useEffect(()=>{
    //     getImages();
    //     },[categoria]);

    // Opcion 3
    const { imagenes, isLoading } = useFetchGifs( categoria );
      

  return ( 
        <>            
            <p> {categoria} </p> 
            {
                isLoading ? (<h2>Cargando... </h2>) : null

            }

            <div className="card-grid">
                {
                    imagenes.map( (img) => (
                        <GifItem key = { img.id } imagen = { img } />
                        // <div className="card">
                        //     <img src = {img.urlimg} alt= {img.titulo} />
                        // </div>
                    ) )
                }
                {/* {
                    imagenes.map( (img) => <p> {img.titulo} </p> )
                } */}
            </div>
        </>
  )
}

