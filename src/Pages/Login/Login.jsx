import { useEffect, useRef, useState } from "react";
import slide1 from "../../../src/assets/slide1.jpg";
import slide2 from "../../../src/assets/slide2.jpg";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handlelogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  const handleCaptch = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>BisstroBoss|Login</title>
      </Helmet>
      <div
        className="hero bg-base-200 min-h-screen "
        style={{
          backgroundImage: " URL(https://i.ibb.co/17ZrYXx/banana-pancacke.jpg)",
        }}
      >
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold py-3">Login now!</h1>
            <img className="rounded-lg" src={slide1}></img>
          </div>
          <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handlelogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  ref={captchaRef}
                  name="captcha"
                  placeholder="type the text above"
                  className="input input-bordered"
                  required
                />
                <button
                  onClick={handleCaptch}
                  className="btn btn-outline btn-accent btn-xs"
                >
                  validate
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value={"LOGIN"}
                />
              </div>
            </form>
            <Link to={"/register"}>
              <button className="btn btn-outline btn-warning">
                Register Yet?
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;