import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Graph Plotting App</h1>
  </header>
)

const Map = (props) => (
  <div className=' map ' >

      
      
      
    </svg>
  </div>
)

const Menu = (props) => (
  <div className='side-bar'>
    <div className='menu-icones'>

      

    </div>
  </div>
)

class FreeWifiHotspotApp extends Component {
  
  state = {

 

  }
  


  componentDidMount() {


  }

  





  render () {
    return (
      <div 
      className='App-container'>

        <Menu 
          
        />
        <Map 
    
      
        />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <FreeWifiHotspotApp />

  </div>
)

export default App

