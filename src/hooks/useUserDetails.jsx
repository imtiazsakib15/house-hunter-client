import useAxiosPublic from "./useAxiosPublic";

const useUserDetails = () => {
  const axiosPublic = useAxiosPublic();
  const accessToken = localStorage.getItem(accessToken);
  console.log(accessToken);
  //   axiosPublic
  //     .post("/register", data)
  //     .then((res) => {
  //       if (res.status === 201) {
  //         toast.success("Successfully registered!");
  //         navigate("/");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       if (error?.response?.data?.error)
  //         toast.error(error?.response?.data?.error);
  // });
  return <div></div>;
};

export default useUserDetails;
