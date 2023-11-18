import React, { useContext } from 'react'
import { Ourcontext } from './Myapp'

const UseContext = () => {
   const {stdNumber, mydata, dataimg} = useContext(Ourcontext)
   console.log(stdNumber.id);
  return (
    <div>
       <p>{mydata}</p> 
       <img src={dataimg}  alt="fghj"/>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque molestiae reprehenderit voluptate accusantium minus reiciendis temporibus voluptas quaerat ipsa, impedit illum mollitia assumenda qui esse sit adipisci dolore architecto pariatur.</p>
    </div>
  )
}

export default UseContext