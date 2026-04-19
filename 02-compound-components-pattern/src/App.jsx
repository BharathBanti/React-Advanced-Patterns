import { useState } from 'react';
import './App.css';
// import Modal from './without-pattern/Modal';
import Modal from './with-pattern/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Modal without pattern */}
      {/* <Modal
        title="Delete Account"
        body="Are you sure to delete your account?"
        secondaryAction={<button className="secondary">Cancel</button>}
        primaryAction={<button className="primary">Confirm</button>}
      /> */}

      {/* Modal with pattern */}
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>
          <h2>Welcome</h2>
        </Modal.Header>
        <Modal.Body>
          <p>Hello, welcome to your new account</p>
          <p>Let's take few minutes to explore</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="secondary">Cancel</button>
          <button className="primary">Confirm</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
