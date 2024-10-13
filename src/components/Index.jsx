import React from 'react';
import '../styles/Left.css';
import "../styles/Index.css";
import Left from './Left.jsx';
import Right from './Right.jsx';

function Index() {

    return (
        <div className="app">
            <div className="left">
                <Left />
            </div>
            <div className="right">
                <Right />
            </div>
        </div>
    );
}

export default Index;