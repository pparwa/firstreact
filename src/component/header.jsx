import React,{Component} from "react";

export default class Head extends Component
{  
    constructor(props)
    {
        super(props);
        this.state =
        {
            input :""
        }
        this.transfer = this.transfer.bind(this)
        this.send = this.send.bind(this)
    
    }
    

    transfer(event)
    {
     this.setState({
        input:event.target.value
     })  
     console.log(this.state.input) 
    }
    send()
    {
        this.props.additem(this.state.input)
        this.setState({
            input:""
        })

    }
    render(){
    return(
        <>
        <div className="header">
            <input className="input" placeholder="type your task"  value={this.state.input} onChange={this.transfer}></input>
            <button onClick={this.send}>Add</button>
            
        </div>
        </>
    )
 }
}
