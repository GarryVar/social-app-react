import { useState } from 'react/cjs/react.production.min';
import React from 'react';


// const tokenAcsses = {
// key: 'vDFrSJVinLBdseXePtFc',
// secret: 'mNHcAvOinUcwHakAVnJbLZDKTHMXfogm',
// filter: 'Goa Trance',
// nasaPicturesUrl: new URLSearchParams('https://images-api.nasa.gov/search'),
// imagesApiTokenKey: `key=25297840-2deb4966ec7a9ff1048a05184&q=`
// };

const SearchForm = () => {

  return (
    <>
      <form action="" className="form">
        <label>
          <input type="text" placeholder="Найти..." />
        </label>

        <button type="submit">Найти</button>
      </form>


    </>
  )
}

export default SearchForm;