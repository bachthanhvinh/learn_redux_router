import { useRoutes } from "react-router-dom";
import { routers } from "../../routers";

export const AllRouter = () => {
  const element = useRoutes(routers);
  return <>{element}</>;
};
