import React from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer'


const Home = (props) => {
    return (
        <div className="App">
        <Header />
        <Main/>
            <Footer />
            </div>
        
    );
}

export default Home;