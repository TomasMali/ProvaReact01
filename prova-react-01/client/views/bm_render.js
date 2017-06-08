import React, { Component } from 'react'
import { render as reactRender } from 'react-dom'
import { renderToString as reactRenderToString } from 'react-dom/server'
import { Mongo } from 'meteor/mongo';

import styles from './main.css'

import {List} from './list.js'

export class BubbleMenu extends Component {

  render() {
    return (
      /*<h1 className={styles.hello}>First Button</h1>*/

      <div id="bubble_menu">
      	<h1 id="title"> LISTA BOLLE </h1>

        <ul>
          <li><button type="button">Meteo</button></li>
          <List/>
          <li><button type="button">Sondaggio</button></li>
        </ul>

      </div>
    );
  }
}

/* dentro la classe handleClick(p){
  if(p=="List")
    reactRender(<List/>, document.getElementById('set_bubble'))
  }

  <button type="button" onClick={() => this.handleClick("List")}>Lista</button>

*/

export default function renderMyStuff() {
  if (typeof document === 'undefined') {
    return reactRenderToString(<BubbleMenu />)
  } else {
    reactRender(<BubbleMenu />, document.getElementById('bm_root'))
  }
}
