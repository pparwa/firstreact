import React,{Component} from 'react';
import './App.css';
import Head from './component/header';
import Title from './component/head';

 export default class App extends Component {
  constructor(props){
    super(props)
    this.state ={box:[
    {number:1,name:'react'}
    ,{number:2,name:'js'}]}
  

  this.additem=this.additem.bind(this)
  this.deletitem=this.deletitem(this)

} 
  
 additem(messeage)
 {
  var n = this.state.box.length
  {console.log( messeage)}
  this.setState(state =>{
    return{
    ...state,
  
    box:[
      
        ...state.box,
        { number:n+1,name:messeage},
    ]
  


    }
  })
 }
 deletitem(event)
 {
   
  /* var box = [...this.state.box]
   {console.log(box)}
   var filter = box.filter(function(item)
   {
    return item.number !== event.target.id
   })
   this.setState(state =>{
    return{
      ...state,
    
      box:[
        
          filter
          
      ]
    
  
    }  
   
 })*/
}

render(){
  const tasks = this.state.box.map((item) =>{
    return(
        <>
        <ul className="task">
            <li>{item.number}</li>
            <li>{item.name}</li>
            <li ><div className='border' id={item.number} ><svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg></div></li>
        </ul>
        <hr/>
        </>
    )
 })
  return (
    <>
    <div className='width'>
    
    <Head input={this.state.input} additem={this.additem}/>
    <Title />
    {tasks}
    
    </div>
    </>
  );
}
}


