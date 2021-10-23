import React from 'react';
import Blog from './Blog'
import Button from './Button'
class ClassBased extends React.Component{
    // counter = 1;
    state = {
        counter:1,
        counter2:1
    }
    setCounter =   (num) => {
    //    this.state.counter = this.state.counter + 1;

 this.setState({
        counter:this.state.counter+num,
        
    },() => {
        console.log(this.state.counter,"from func"); 
        this.setState({counter2:this.state.counter+2})
    });//asynchrouns

    // this.setState({counter2:this.state.counter +1})
    }


    render(){
        // console.log(this.state.counter,this.state.counter2,"from render")
        return (
            <>
            <h1>
                Clicked {this.state.counter}
            </h1>
            <h1>
                Clicked update counter2  {this.state.counter2}
            </h1>
            <Blog blogCounter={this.state.counter}/>
            {/* <button onClick={()=>this.setCounter(10)}>Click me</button> */}
            
            <Button handleCounter={this.setCounter}/>
            </>
        );
    }
}

export default ClassBased;