import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MainPage = () => {

  const [info, setInfo] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('http://www.mocky.io/v2/5dece3d333000052002b9037')
      setInfo(data)
    }
    getData()
  }, [])

  console.log(info)

  return (
    <>
    </>
  )



}
export default MainPage
