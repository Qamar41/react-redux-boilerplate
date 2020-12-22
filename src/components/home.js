import React from 'react'

import { connect } from 'react-redux'
// import Home from './components/home'
import {set_data} from '../store/actions'




class Home extends React.Component{

    render(){
        let user={name:'Ahmad Raza',age:21}
        console.log(this.props.users)
        return(

            <div>
                <h1>Home Page</h1>

                <br />

                <button onClick={()=>this.props.set_data(user)}>Click</button>
            </div>
        )
    }
}



 
const mapStateToProps = (state)=>({
    users:state.users
  })
  
  const mapDispatchtoProps =(dispatch)=>({
  set_data : (data)=>dispatch(set_data(data))
  }) 
  
  
  export default connect(mapStateToProps,mapDispatchtoProps)(Home);
  


// export default Home