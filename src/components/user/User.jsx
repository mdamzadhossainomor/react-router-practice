import { use } from "react";

export const User = ({ users }) => {
  const user = use(users);
  return (
    <div>
      {user.map((user) => (
        <div key={user.id}>
          <li>User Name: {user.name}</li>
          </div>
          
      ))}
    </div>
  );
};
