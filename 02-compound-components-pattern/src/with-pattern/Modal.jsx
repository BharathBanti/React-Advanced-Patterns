function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

// Lego blocks
function ModalHeader({ children }) {
  return <div className="modal-header">{children}</div>;
}

function ModalBody({ children }) {
  return <div className="modal-body">{children}</div>;
}

function ModalFooter({ children }) {
  return <div className="modal-actions">{children}</div>;
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;

// flexible
// reusable
// scalable