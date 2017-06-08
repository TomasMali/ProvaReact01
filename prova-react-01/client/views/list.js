import React, { Component } from 'react'
import { render as reactRender } from 'react-dom'
import { renderToString as reactRenderToString } from 'react-dom/server'

import { Mongo } from 'meteor/mongo';

export const info = new Mongo.Collection(null);


export class List extends Component {

  constructor(props) {
	super(props);

	this.state = {value: '',
      num: 1,
      ids: Array(1),
			values: Array(1),
	};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);

	  rows = [];

    for(i=0;i<this.state.num;i++){
      this.state.ids[i]=''+i;
    	rows.push(<input type="text" name={this.state.ids[i]}
      defaultValue={this.state.values[i]} onChange={this.handleChange}/>);
    	/* rows.push(<input type="text" name=idefaultValue={this.state.values[1]} onChange={this.handleChange}/>);
    	rows.push(<input type="text" name="2" defaultValue={this.state.values[2]} onChange={this.handleChange}/>);
    	inp=<input type="text" name="it3" defaultValue={this.state.value} onChange={this.handleChange}/>; */

    }
  }

  handleChange(event) {
    //this.setState({value: event.target.value});
    this.state.values[event.target.name]= event.target.value;
	//console.log(this.state.values[event.target.name]);
  }

  handleSubmit(event) {
    var j;
    var id;
    /*for(i=0; i<this.state.num;i++){
        console.log(this.state.ids[i]+" - "+this.state.values[i]);
        j=info.findOne({_id:this.state.ids[i]});
        console.log(j);
        //id=""+this.state.ids[i];
        if(j==undefined)
          info.insert({_id:this.state.ids[i], value: this.state.values[i]});
        else
          info.update({_id:this.state.ids[i]},{_id:this.state.ids[i],value: this.state.values[i]});
    }*/
    for(i=0; i<this.state.num;i++)
      info.insert({value: this.state.values[i]});
      /*info.insert({_id: '1', value: this.state.values[1]});
      info.insert({_id: '2', value: this.state.values[2]});*/
    event.preventDefault();
  }



  render() {
    return (
      <li onClick={() => this.handleClick()}><button type="button" >Lista</button></li>
    );
  }

  handleClick(){
//{rows}
	var a=(
		<div id="crea_lista">
      <h1 id="prova">Crea la tua lista</h1>
			{rows}
      <button type="button" onClick={this.handleAdd}>Aggiungi</button>
			<button type="button" onClick={this.handleSubmit}>Invia</button>
		</div>
	);
	reactRender(a, document.getElementById('set_bubble'))
  }

  sendClick(){
	//for (var i=0; i < 3; i++) {
		//info.insert({_id: '0', value: 'rows[0].value'});
		//rows[0].value="ciao";

		console.log();
	//}

  }

  handleAdd(){

      this.state.num+=1;
      for(i=this.state.ids.length;i<this.state.num;i++){
        this.state.ids.push(i);//[i]=''+i;
        this.state.values.push("");//[i]=''+i;
      	rows.push(<input type="text" name={this.state.ids[i]} defaultValue={this.state.values[i]} onChange={this.handleChange}/>);
        this.handleClick();
      }
  }

}
