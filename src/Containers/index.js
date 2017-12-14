import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Screen from './Screen';

class Containers extends React.Component {
    render(){
        return(
        <div className="Containers">
            <Header/>
            <Screen/>
            <Footer/>
        </div>
        );
    }
}

export default Containers;