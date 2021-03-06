import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'


class App extends React.Component
{
state={latt:null,errorMessage:''};


componentDidMount(){
  window.navigator.geolocation.getCurrentPosition(
    position=>this.setState({lat:position.coords}),
  err=>this.setState({errorMessage:err.message})
    
  
  );
}
renderContent()
{
  if(this.state.errorMessage&&!this.state.lat)
  {
    return <Spinner message="Please enable location service and refresh"/>
  }
  if(!this.state.errorMessage&&this.state.lat)
  {
    console.log(this.state.lat)
    return <SeasonDisplay lat={this.state.lat.latitude} />
  }
 
 
   return <Spinner message="Please accept location request and refresh"/>
}

  render()
  { 
  return <div className="border red">{this.renderContent()}</div>

}
}
ReactDOM.render(<App />,document.querySelector('#root'))
