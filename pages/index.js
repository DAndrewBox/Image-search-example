import Head from 'next/head'

import { useState } from 'react'
import ResultsHome from './components/Results/ResultsHome';
import SearchHome from './components/Search/SearchHome'

export default function Search() {
  const [ showImages, setShowImages ] = useState(false);
  const [ imageUrls, setImageUrls ] = useState([]);

  return (
    <>
      <Head>
        <title>Buscador Unsplash</title>
        <meta name="description" content="Unsplash searcher" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
      </Head>

      {( showImages ?
        <ResultsHome
          imageUrls = {imageUrls}
          setShowImages = {setShowImages}
        />
        :
        <SearchHome
          setShowImages = {setShowImages}
          setImageUrls = {setImageUrls}
        />
      )}
    </>
  )
}
