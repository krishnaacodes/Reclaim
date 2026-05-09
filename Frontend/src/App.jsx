import { useState } from 'react'
import Navbar from './components/navBar'
import Hero from './components/Hero'
import ItemsSection from './components/ItemsSection'

import ReportModal from './components/ReportModal'




function App() {

  const [showModal,setShowModal] = useState(false);
  

  return (
    <>
    <Navbar  openModal={()=>setShowModal(true)}></Navbar>
    <Hero></Hero>
    <ItemsSection></ItemsSection>


    {showModal && <ReportModal closeModal={()=>setShowModal(false)} />}

    

    
    
    </>
  )
}

export default App
