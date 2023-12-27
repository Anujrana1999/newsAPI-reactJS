import './App.css';

import { Component, useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'



interface category {
  category: string,
  progress: any,
}

const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState()

  setProgress(progress)

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          height={3}
          color='#374151'
          progress={progress}
        />
        <Routes>
          <Route path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="business" category="business" />} />
          <Route path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" category="business" />} />
          <Route path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" category="entertainment" />} />
          <Route path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key="general" category="general" />} />
          <Route path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" category="health" />} />
          <Route path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" category="science" />} />
          <Route path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" category="sports" />} />
          <Route path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" category="technology" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
