import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { MdErrorOutline } from "react-icons/md";
import toast from "react-hot-toast";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axiosPublic
      .post("/register", data)
      .then((res) => {
        if (res.status === 201) {
          toast.success("Successfully registered!");
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
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
                  Register Now!
                </h1>
              </div>

              <div className="mt-5 sm:mt-6">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="grid gap-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("name", { required: "Name is required." })}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-violet-500 focus:ring-violet-500 disabled:opacity-50 disabled:pointer-events-none border"
                      />
                      <p>
                        {errors.name && (
                          <span className="text-red-600 text-xs flex items-center gap-0.5">
                            <MdErrorOutline />
                            {errors.name?.message}
                          </span>
                        )}
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register("phone", {
                          required: "Phone is required.",

                          pattern: {
                            value: /^\+880/,
                            message:
                              "Only Bangladeshi(+880) phone numbers are allowed.",
                          },
                        })}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-violet-500 focus:ring-violet-500 disabled:opacity-50 disabled:pointer-events-none border"
                      />
                      <p>
                        {errors.phone && (
                          <span className="text-red-600 text-xs flex items-center gap-0.5">
                            <MdErrorOutline />
                            {errors.phone?.message}
                          </span>
                        )}
                      </p>
                    </div>
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
                          minLength: {
                            value: 6,
                            message:
                              "Password should have at least 6 characters.",
                          },
                          maxLength: {
                            value: 32,
                            message:
                              "Password should contain less than 32 characters.",
                          },
                          pattern: {
                            value: /(?=.*[0-9])(?=.*[A-Z])/,
                            message:
                              "Password should have at least one capital letter, and one number.",
                          },
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

                    <div>
                      <label
                        htmlFor="role"
                        className="block mb-2 text-sm font-medium"
                      >
                        Select a role
                      </label>
                      <select
                        id="role"
                        {...register("role", {
                          required: "Role is required.",
                        })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
                      >
                        <option value="">Choose a role</option>
                        <option value="Owner">Owner</option>
                        <option value="Renter">Renter</option>
                      </select>
                      <p>
                        {errors.role && (
                          <span className="text-red-600 text-xs flex items-center gap-0.5">
                            <MdErrorOutline />
                            {errors.role?.message}
                          </span>
                        )}
                      </p>
                    </div>

                    <div>
                      <div className="flex gap-1.5 pb-1">
                        <input
                          id="toc"
                          {...register("toc", {
                            required: "Please accept our terms and conditions.",
                          })}
                          type="checkbox"
                          className="shrink-0 mt-0.5 border-gray-200 rounded text-violet-600  focus:ring-violet-500"
                        />
                        <label htmlFor="toc" className="text-sm font-medium">
                          I accept the{" "}
                          <Link
                            className="text-violet-600 decoration-2 hover:underline font-medium"
                            to=""
                          >
                            Terms and Conditions
                          </Link>
                        </label>
                      </div>
                      <p>
                        {errors.toc && (
                          <span className="text-red-600 text-xs flex items-center gap-0.5">
                            <MdErrorOutline />
                            {errors.toc?.message}
                          </span>
                        )}
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-800 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Register
                    </button>
                  </div>
                </form>
                <p className="mt-2 text-sm text-gray-600">
                  Already have an account?
                  <Link
                    className="text-violet-600 decoration-2 hover:underline font-medium "
                    to="/login"
                  >
                    Log in here
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

export default Register;
