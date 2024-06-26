import { useState } from 'react'
import './App.css'
import TabSection from './Components/TabSection/TabSection'
import Header from './Components/Header/Header'
import Slider from './Components/Slider/Slider'
import TableSection from './Components/TableSection/TableSection.jsx'
import { gallery } from './data.js'
import GameSection from './Components/GameSection/GameSection.jsx'
import Footer from './Components/Footer/Footer.jsx'

function App() {
  const [tab, setTab] = useState('gallery')//состояния активной вкладки
  return (
    <>
      <main className='main'>
        <Header /> {/* компонента хедера*/}
        <TabSection active={tab} onChange={(active) => setTab(active)} /> {/* компонента выбора вкладки */}
        <section className='section'> {/* содержимое вкладки отображаем взависимти от выбранной вкладки*/}

          {tab == 'gallery' &&
            <>
              <Slider data={gallery} amount={3} />
            </>}

          {tab == 'table' &&
            <>
              <TableSection />
            </>}

          {tab == 'game' &&
            <>
              <GameSection />
            </>}
        </section>


      </main>
      <Footer></Footer>  {/* футер */}

    </>
  )
}

export default App
