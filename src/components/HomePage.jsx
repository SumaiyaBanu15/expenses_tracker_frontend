import React, { useState } from 'react'
import '../components/style.css'
import NavBar from './NavigationBar/NavBar'
import Dashboard from './Dashboard/Dashboard'
import Income from './Income/Income'
import Expenses from './Expenses/Expenses'
import { useGlobalContext } from './context/Context'

function HomePage() {
const [active, setActive] = useState(1);

const global = useGlobalContext();
// console.log(global) 

const displayData = () => {
  switch(active){
    case 1:
      return <Dashboard />
    case 2:
      return <Expenses />
    case 3: 
      return <Income />
     default: 
          <Dashboard />     
  }
}
  return <>
<div className="container-fluid">
  <div className="row">
    <div className="col-md-4">
      <NavBar active={active} setActive={setActive} />
    </div>
    <div className="col-md-8">
      {displayData()}
    </div>
  </div>
</div>
  </>
}

export default HomePage