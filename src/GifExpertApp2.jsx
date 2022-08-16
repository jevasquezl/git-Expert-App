import React,{useState} from 'react';
import { AddCategory2 } from './components/AddCategory2';
// import { GifGrid } from './components/GifGrid';

export const GifExpertApp2 = () => {


    const [categorias, setCategorias] = useState( ['One Punch','Samurai X','Dragon Ball','Overwatch'])

    const handleAdd = (elemento) =>{

        if(categorias.includes(elemento)) return;

        setCategorias([...categorias, elemento]);
        //Esta es otra forma extendida de hacerlo
        // setCategorias( cats => [ ...cats, elemento ]);
    }

  return (
      <>
        <h2>GifExpertApp2</h2>
      
       <AddCategory2 
            onNewCaterory = { (event) => handleAdd(event) }
        />
       
        {/* <button onClick={handleAdd}>Agregar</button> */}

        <ol>
            {
                // categorias.map((element,ix) => {
                //     return <li key={ix}>{element}</li>
                // }) 

                categorias.map(element => 
                    <li key={element}>{element}</li>
                 ) 

                // categorias.map( element => (
                // //     <GifGrid 
                // //     key = { element } 
                // //     categoria = { element } 
                // //     />
                // // ))

            }
        </ol>
    </>
  )
}
