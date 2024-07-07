import React from 'react';

function AlertToast(props) {
  return (
    <div className="toast top-20">
      <div className="alert alert-info bg-accent text-white">
        <span>{props.text}</span>
      </div>
    </div>
  );
}

export default AlertToast;
