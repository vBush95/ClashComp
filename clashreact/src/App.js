import React from 'react';
import './App.scss';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Champion from "./components/Champions/Champion";
import LinkeSeite from "./components/LinkeSeite/LinkeSeite";

function App() {
  return (
    <div className="App">
 
       <header className="App-header">
            ClashComp
      </header> 


      <main>
      
        <DndProvider backend={HTML5Backend} >

            <LinkeSeite className="links" /> 

          <Champion /> 

          <div className="rechts">
           rechts
          </div>

        </DndProvider>
      
      </main>


      <footer>

        Footer

      </footer> 
      
    </div>
  );
}

export default App;
