import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">404</h1>
        <p>The page you are looking is not available</p>
        <Link className="px-5 py-2 bg-violet-700 rounded">Go Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
