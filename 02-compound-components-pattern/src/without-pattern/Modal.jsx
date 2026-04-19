import React from 'react';

function Modal({ title, body, secondaryAction, primaryAction }) {
  return (
    <div className="modal-overlay">
      <div className='modal'>
        <button className='modal-close'>&times;</button>
        <h2 className='modal-header'>{title}</h2>
        <p className='modal-body'>{body}</p>
        <div className='modal-actions'>
          {secondaryAction}
          {primaryAction}
        </div>
      </div>
    </div>
  );
}

export default Modal;
  