import { Suspense, useState } from "react";
import { UserDetails } from "./UserDetails";
import { Link } from "react-router";

export const User = ({ user }) => {
  const { id, name, username } = user;
  const [viewMore, setViewMore] = useState(false);
  const handleViewMore = () => {
    setViewMore(!viewMore);
  };
  const userDetails = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());
  return (
    <div>
      <div className="card w-96 border my-2 bg-base-100 text-center card-xs shadow-sm">
        <div className="card-body">
          <h2 className="text-center text-3xl"> User Name:{name}</h2>
          <p>User Email:{username}</p>
          <div className="justify-between card-actions">
            <button onClick={handleViewMore} className="btn btn-primary">
              {viewMore ? "view less" : "view more"}
            </button>
            <Link to={`${id}`} className="btn btn-primary">
              Params view
            </Link>
          </div>
        </div>

        {viewMore && (
          <Suspense fallback={<div>Loading...</div>}>
            <UserDetails userDetails={userDetails} />
          </Suspense>
        )}
      </div>
    </div>
  );
};
