import React from 'react';
import MonolithicList from './components/monolithic-list';
import SeparatedList from './components/separated-list';
import NormalizedList from './components/normalized-list';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="App-column">
                Monolithic List
                <MonolithicList/>
            </div>

            <div className="App-column">
                Separated List
                <SeparatedList/>
            </div>

            <div className="App-column">
                Normalized List
                <NormalizedList/>
            </div>
        </div>
    );
}

export default App;
