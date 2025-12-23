import { useState } from "react";

export const User = ({ user }) => {
  const [viewMore, setViewMore] = useState(false);
  const handleViewMore = () => {
    setViewMore(!viewMore);
  };
  return (
    <div>
      <div className="card w-96 border my-2 bg-base-100 text-center card-xs shadow-sm">
        <div className="card-body">
          <h2 className="text-center text-3xl"> User Name:{user.name}</h2>
          <p>User Email:{user.username}</p>
          <div className="justify-center card-actions">
            <button onClick={handleViewMore} className="btn btn-primary">
              {viewMore ? "view less" : "view more"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
