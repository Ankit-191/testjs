import React, { useContext } from 'react'
import { Ourcontext } from './Myapp'

const Usebtn = () => {
    const {setMydata} = useContext(Ourcontext)
    function changeData(){
        setMydata("Goasdfasddara")
   }
  return (
    <div>
        <button onClick={changeData}>click</button>
    </div>
  )
}

export default Usebtn