import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/GetGifs';

// Un hook es una funcion que retorna algo
export const useFetchGifs = ( categoria ) => {
   
    const [imagenes, setImagenes] = useState([]);  
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImagenes = await getGifs( categoria );
        setImagenes(newImagenes);
        setIsLoading(false);
    }

    useEffect(()=>{
        getImages();
        },[]);
  
    return {
        imagenes: imagenes,
        isLoading: isLoading
        

}
}