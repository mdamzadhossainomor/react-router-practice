import { Suspense } from "react";
import { Users } from "../users/users";

const users = fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
  res.json()
);
export const AllUsers = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading users...</div>}>
        <Users users={users} />
      </Suspense>
    </div>
  );
};
