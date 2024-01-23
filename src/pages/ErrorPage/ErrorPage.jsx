import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center px-5">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">404</h1>
        <p>The page you are looking is not available</p>
        <button className="mt-5">
          <Link className="px-5 py-2 bg-violet-600 hover:bg-violet-700 rounded font-semibold text-white">
            Go Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
