import { MdErrorOutline } from "react-icons/md";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    axiosPublic
      .post("/login", data)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Log In Successfully!");
          console.log(res?.data);
          localStorage.setItem("accessToken", res?.data?.accessToken);
          //   navigate("/");
        }
      })
      .catch((error) => {
        if (error?.response?.data?.error)
          toast.error(error?.response?.data?.error);
      });
  };

  return (
    <>
      <div className="bg-gray-100 flex h-full items-center pb-16">
        <div className="w-full max-w-md mx-auto p-6">
          <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm ">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl md:text-4xl font-bold text-gray-800">
                  Log In Now!
                </h1>
              </div>

              <div className="mt-5 sm:mt-6">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="grid gap-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("email", {
                          required: "Email is required.",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email format.",
                          },
                        })}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-violet-500 focus:ring-violet-500 disabled:opacity-50 disabled:pointer-events-none border"
                      />
                      <p>
                        {errors.email && (
                          <span className="text-red-600 text-xs flex items-center gap-0.5">
                            <MdErrorOutline />
                            {errors.email?.message}
                          </span>
                        )}
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium mb-2"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        {...register("password", {
                          required: "Password is required.",
                        })}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-violet-500 focus:ring-violet-500 disabled:opacity-50 disabled:pointer-events-none border"
                      />
                      <p>
                        {errors.password && (
                          <span className="text-red-600 text-xs flex items-center gap-0.5">
                            <MdErrorOutline />
                            {errors.password?.message}
                          </span>
                        )}
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-800 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Log In
                    </button>
                  </div>
                </form>
                <p className="mt-2 text-sm text-gray-600">
                  Don&apos;t have an account?
                  <Link
                    className="text-violet-600 decoration-2 hover:underline font-medium "
                    to="/register"
                  >
                    Register here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
