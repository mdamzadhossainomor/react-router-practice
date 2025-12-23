import React, { use } from 'react'

export const UserDetails = ({ userDetails }) => {
    const { email, address } = use(userDetails);
    
  return (
    <div>
      <h2 className="text-center text-2xl"> Additional User Details</h2>
      <h3>User Email : {email}</h3>
      <h3>User Address : {address.street}</h3>
    </div>
  );
};
