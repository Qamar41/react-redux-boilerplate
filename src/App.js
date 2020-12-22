import React from 'react'
import logo from './logo.svg';
import './App.css';
import Expense from './components/expense'
import { connect } from 'react-redux'
import Home from './components/home'
import {set_data} from './store/actions'

class App extends React.Component {

  render()
  {
    console.log(this.props)
  
  return (
    <div className='App'>
      
      <Home  />
    </div>
  );
}
}
 
const mapStateToProps = (state)=>({
  users:state.users
})

const mapDispatchtoProps =(dispatch)=>({
set_data : (data)=>dispatch(set_data(data))
}) 


export default connect(mapStateToProps,mapDispatchtoProps)(App);
