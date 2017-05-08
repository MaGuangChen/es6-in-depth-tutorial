import React , { Component } from 'react';
import {FormGroup,FormControl,InputGroup,Glyphicon} from 'react-bootstrap';
import Gallery from './Gallery.js';

class Global extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: '',
            items: []
        }
    }
    search(){
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
        fetch(`${BASE_URL}${this.state.query}`,{method:"GET"})
             .then(response => response.json())
             .then(json => {
                 let { items } = json;
                 this.setState({items});

             });
             
             console.log('search',this.state.query);
    }
   render(){
       return (
           <div className="Global">
           <h2>Paul的書籍探索</h2>
           <p>（使用es6 babel react撰寫串接google books api）</p>
           <FormGroup>
             <InputGroup>
               <FormControl 
                type="text" 
                placeholder="搜個書吧" 
                onChange={event => this.setState({query: event.target.value})}
                onKeyPress= {
                    event => {
                      if(event.key === 'Enter'){
                          this.search();
                      }
                    }
                }
               />
               <InputGroup.Addon onClick = {()=>this.search()}>
                  <Glyphicon glyph="search"></Glyphicon>
               </InputGroup.Addon>
               
             </InputGroup>
           </FormGroup>
           <Gallery items={this.state.items} />
           </div>
       )
   }
}

export default Global;
//state 代表著
/*使用state要用constructor*/