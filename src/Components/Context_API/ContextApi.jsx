import React, { createContext, useEffect, useState } from 'react'

import axios from 'axios'

const apiData = createContext()

const ContextApi = ({children}) => {

    const [data, setData] = useState([])

    // axios nilam akti veriable a then just call corlam useEffect a.............................
    let getData = ()=> axios.get('https://dummyjson.com/products?&limit=0')
    .then((res) =>{
        setData(res.data.products)
    })

    useEffect(()=>{

        getData()
       
    }, [])

  return (
    <apiData.Provider value={data}>{children} </apiData.Provider>
  )
}

export  {ContextApi, apiData}
