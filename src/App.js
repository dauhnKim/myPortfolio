import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

import Home from './routes/Home'
import Work from './routes/Work'
import About from './routes/About'
import Resume from './routes/Resume'
import Contact from './routes/Contact'

import Header from './components/Header'
import Tooltip from './components/Tooltip'

const options = {
  hour: '2-digit',
  minute: '2-digit',
}
const App = () => {
  const [time, setTime] = useState(null)

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
  }, [time])

  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </Header>
      </BrowserRouter>

      <Tooltip
        content={
          <>
            Hi, there! <br />
            Don't aske me why I am here. <br />I am just here ;)
          </>
        }
        direction="top"
        delay="0"
      >
        <span className="time">{time}</span>
      </Tooltip>
    </div>
  )
}

export default App
