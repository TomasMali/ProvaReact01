import React, { Component } from 'react'
import { render as reactRender } from 'react-dom'
import { renderToString as reactRenderToString } from 'react-dom/server'

import { info } from './list.js';

import styles from './main.css'


export class BubbleView extends Component {
  render() {

    const inptext = info.find().fetch();
    /*todo1 = info.findOne({_id: '1'});
    todo2 = info.findOne({_id: '2'});*/
    //console.log(inptext);
    var a=[];
    for(i=0;i<inptext.length;i++){
      a.push(
        <li>{inptext[i].value}</li>
      );
    }
    return (
	<div>
  <h1>La tua lista</h1>
  <ul>
   {a}

  </ul>
	</div>
    );
  }
}

/*<h1>{todo0.value}</h1>
<h1>{todo1.value}</h1>
<h1>{todo2.value}</h1>*/

export default function renderMyStuff() {
  if (typeof document === 'undefined') {
    return reactRenderToString(<BubbleView />)
  } else {
    reactRender(<BubbleView /> , document.getElementById('bv_root'))
  }
}
