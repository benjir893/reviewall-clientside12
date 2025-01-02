import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";

const Registration = () => {
  const { signUp, updateUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signUp(data.email, data.password).then((userCredential) => {
      const newUser = userCredential.user;
      console.log(newUser);
      updateUser(data.userName, data.photourl)
      .then(()=>{
        console.log("user name and photo added")
        reset();
        navigate(from, {replace:true});
      }).catch(error =>console.error(error))
    });
  };
  return (
    <>
      <Helmet>
        <title>BisstroBoss|Registration</title>
      </Helmet>
      <div
        className="hero bg-base-200 min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/tPtv9w0/loginbanner2.jpg)",
        }}
      >
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold">Register Yet?</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  // name="userName"
                  {...register("userName", { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
                {errors.userName?.type === "required" && (
                  <p role="alert" className="text-red-600">
                    User name is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  {...register("photourl", { required: true })}
                  placeholder="enter the photo url please"
                  className="input input-bordered"
                  required
                />
                {errors.photourl?.type === "required" && (
                  <p role="alert" className="text-red-600">
                    Photo url is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  // name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                {errors.email?.type === "required" && (
                  <p role="alert" className="text-red-600">
                    email is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  // name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*_])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "required" && (
                  <p role="alert" className="text-red-600">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p role="alert" className="text-red-600">
                    Password must be at least six digits
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p role="alert" className="text-red-600">
                    Password must not be more then 20 digits
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p role="alert" className="text-red-600">
                    Password has to be uppercase lowercase number and special
                    character combination
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value={"Register"}
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registration;
