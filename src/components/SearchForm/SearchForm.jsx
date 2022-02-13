import { useState } from 'react/cjs/react.production.min';
import React from 'react';
import style from


// const tokenAcsses = {
// key: 'vDFrSJVinLBdseXePtFc',
// secret: 'mNHcAvOinUcwHakAVnJbLZDKTHMXfogm',
// filter: 'Goa Trance',
// nasaPicturesUrl: new URLSearchParams('https://images-api.nasa.gov/search'),
// imagesApiTokenKey: `key=25297840-2deb4966ec7a9ff1048a05184&q=`
// };

const SearchForm = () => {
  const [state, setState] = React.useState(0);
  const [state2, setState2] = React.useState(1);


  return (
    <>
      <form action="" className="form" onSubmit={evt => evt.preventDefault()}>
        <label>
          <input type="text" placeholder="Найти..." onInput={evt => setState(evt.target.value)} />
        </label>

        <button type="submit">Найти</button>
      </form>


    </>
  )
}

export default SearchForm;