import React from 'react'

export const GifItem = ({imagen}) => {

    return (
        <>
            <div className="card">
                <img src = {imagen.urlimg} alt= {imagen.titulo} />
                <p>{imagen.titulo} </p>
            </div>
        </>
    )
}
