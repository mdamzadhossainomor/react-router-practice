import { use } from "react";
import { User } from "../user/User";

export const Users = ({ users }) => {
  const allUsers = use(users);
  
  return (
    <div>
      {allUsers.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );

};
