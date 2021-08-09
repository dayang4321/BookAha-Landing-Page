import React, { useEffect, useRef } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import useWindowSize from '../../hooks/useWindowSize';
import MainNavbar from '../../components/Header/Navigation/Navbar/Navbar';
import SmoothScroll from '../../hoc/SmoothScroll';

const Home = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  const toggleModal = () => {
    return setModalShow(!modalShow);
  };

  //Hook to grab window size
  const size = useWindowSize();

  // Ref for parent div and scrolling div
  // const app = useRef();
  // const scrollContainer = useRef();

  // // Configs
  // const data = {
  //   ease: 0.1,
  //   current: 0,
  //   previous: 0,
  //   rounded: 0,
  // };

  // // Run scrollrender once page is loaded.
  // useEffect(() => {
  //   requestAnimationFrame(() => skewScrolling());
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // //set the height of the body.
  // useEffect(() => {
  //   setTimeout(() => {
  //         setBodyHeight();
  //   }, 100);

  // }, [size.height]);

  // //Set the height of the body to the height of the scrolling div
  // const setBodyHeight = () => {
  //   document.body.style.height = `${
  //     scrollContainer.current.getBoundingClientRect().height
  //   }px`;
  // };

  // // Scrolling
  // const skewScrolling = () => {
  //   //Set Current to the scroll position amount
  //   data.current = window.scrollY;
  //   // Set Previous to the scroll previous position
  //   data.previous += (data.current - data.previous) * data.ease;
  //   // Set rounded to
  //   data.rounded = Math.round(data.previous * 100) / 100;

  //   // Difference between
  //   const difference = data.current - data.rounded;
  //   const acceleration = difference / size.width;
  //   const velocity = +acceleration;
  //   const skew = velocity * 7.5;

  //   //Assign skew and smooth scrolling to the scroll container
  //   scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

  //   //loop vai raf
  //   requestAnimationFrame(() => skewScrolling());
  // };
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
