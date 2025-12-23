import { useLoaderData } from "react-router";

export const ParamsData = () => {
  const { phone, website, name } = useLoaderData();

  return (
    <div>
      <h2 className="text-center text-3xl"> User Details Page</h2>
      <h3 className="text-center text-2xl"> User Name : {name}</h3>
      <h3 className="text-center text-2xl"> User Phone : {phone}</h3>
      <h3 className="text-center text-2xl"> User Website : {website}</h3>
    </div>
  );
};
