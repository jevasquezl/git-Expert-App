import React,{useState} from 'react';
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';
//Usando el indice o archivo de barril
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {


    const [categorias, setCategorias] = useState( ['One Punch','Samurai X','Dragon Ball','Overwatch'])

    const handleAdd = (elemento) =>{

        if(categorias.includes(elemento)) return;

        setCategorias([...categorias, elemento]);
        //Esta es otra forma extendida de hacerlo
        // setCategorias( cats => [ ...cats, elemento ]);
    }

  return (
      <>
        <h2>GifExpertApp</h2>
      
       <AddCategory
            onNewCaterory = { (elemento) => handleAdd(elemento) }
        />
    
        {

            categorias.map( (element) => (
                <GifGrid  
                key = { element } 
                categoria = { element } 
                />
                // <p key = { element } >Hola</p>
            ))

        }
    </>
  )
}
