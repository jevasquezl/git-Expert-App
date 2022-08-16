


  export const getGifs = async (categoria) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=4&api_key=VJz6PyzD7UtIT9fFyzeLMTi5Ts76el79&q=${categoria}&`;
    const resp =  await fetch( url );
    const { data } = await resp.json();

    
    const gifs = data.map( img => {
            return {
                    id : img.id,
                    titulo : img.title,
                    urlimg : img.images.fixed_height_small.url
                    
            };
      })

      return gifs;

    };