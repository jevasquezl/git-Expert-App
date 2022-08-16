import React,{ useState } from 'react';
// import PropTypes from 'prop-types';

// export const AddCategory = ( props ) => {
// es mejor desestructurando setCategorias
export const AddCategory = ( {AddCategorias} ) => {
    
    const [inputValue, setInputValue] = useState('Hola mundo!!'); //Hay que poner algo '' para que no sea undefined

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSummit = (e) =>{
        e.preventDefault();
        if( inputValue.trim().length > 0){
            AddCategorias((cats) => [inputValue, ...cats]);
            setInputValue('');
        }        
    }

    return (
        <form onSubmit = {(event) => handleSummit(event)}>
            <h2>AddCategory !!!!</h2>
            <input 
            type = "text"
            placeholder = 'No se como se refleja'
            value = { inputValue } 
            onChange = {(event) => handleInputChange(event)}
            />
        {/* <button type='submmit'>Agregar</button>  */}
        </form>        
  )
}

AddCategory.prototype = {
    // setCategorias: PropTypes.func.isRequired
}