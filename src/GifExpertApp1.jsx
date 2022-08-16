import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory1';
// import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


    const [categorias, setCategorias] = useState( ['One Punch','Samurai X','Dragon Ball','Overwatch'])

    // const handleAdd = (elemento) =>{
    //     setCategorias([...categorias, elemento]);
    //     //Esta es otra forma extendida de hacerlo
    //     // setCategorias( cats => [ ...cats, elemento ]);
    // }

  return (
      <>
        <h2>GifExpertApp</h2>
      
       {/*  De aqui toma el nombre la funcion pasada al componente */
       /* AddCategory va a recibir AddCategorias como nombre de funcion */
       /* El arreglo de categorias va implicito */}
       <AddCategory AddCategorias={ setCategorias }></AddCategory>
       
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
