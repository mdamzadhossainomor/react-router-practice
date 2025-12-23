import { Suspense } from "react";
import { User } from "../user/User";
const users = fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
  res.json()
);
export const Users = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading users...</div>}>
        <User users={users} />
      </Suspense>
    </div>
  );
};
