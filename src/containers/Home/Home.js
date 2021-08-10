import React from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import MainNavbar from '../../components/Header/Navigation/Navbar/Navbar';
import SmoothScroll from '../../hoc/SmoothScroll';

const Home = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  const toggleModal = () => {
    return setModalShow(!modalShow);
  };

  return (
    <div>
      <MainNavbar openModal={toggleModal} />
      <SmoothScroll>
        <Header toggleModal={toggleModal} modalShow={modalShow} />
        <Main />
        <Footer />
      </SmoothScroll>
    </div>
  );
};

export default Home;
