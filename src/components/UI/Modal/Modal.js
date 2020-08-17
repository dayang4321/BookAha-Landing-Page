import React from 'react'
import { Modal } from 'react-bootstrap'
import logo from '../Logo/logo.svg'
import './Modal.css'


const MainModal=(props)=> {
    return (
      <Modal {...props} size="xl" aria-labelledby="registration-modal"  dialogClassName="modal-wide" centered>
        <Modal.Header closeButton>
          <img src={logo} alt="logo" className="footer-logo mx-auto"/> 
        </Modal.Header>
        <Modal.Body>
            {props.children}
        </Modal.Body>
      </Modal>
    );
}



export default MainModal
  

  
//   function App() {
//     const [modalShow, setModalShow] = React.useState(false);
  
//     return (
//       <>
//         <Button variant="primary" onClick={() => setModalShow(true)}>
//           Launch vertically centered modal
//         </Button>
  
//         <MyVerticallyCenteredModal
//           show={modalShow}
//           onHide={() => setModalShow(false)}
//         />
//       </>
//     );
//   }
  