import React, { useState, useEffect } from 'react'
import axios from 'axios'

const MainPage = () => {

  const [info, setInfo] = useState()

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('http://www.mocky.io/v2/5dece3d333000052002b9037')
      setInfo(data)
    }
    getData()
  }, [])

  console.log(info)

  if (!info) return null


  return (
    <div className="section">
      <div className="container">
        <div className="mainPage">
          <h1>{info.title.rendered}</h1>
        </div>
      </div>
    </div>


  )


}

export default MainPage