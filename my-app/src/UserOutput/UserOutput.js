import React from 'react';

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
     
      <p>Hello {props.userName}!</p>
    </div>
  );
};

export default UserOutput;
