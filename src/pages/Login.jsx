import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/actions/authActions";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setloginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(loginData));
    console.log(loginData);
    navigate("/");
  };

  return (
    <section className="py-26 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <Link className="inline-block mx-auto mb-6" to="#">
              <img src="nigodo-assets/logo-icon-nigodo.svg" alt="" />
            </Link>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
              Sign in
            </h2>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block mb-2 font-extrabold" htmlFor="">
                Email
              </label>
              <input
                className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-blue-900 bg-white shadow border-2 border-blue-900 rounded"
                type="email"
                required
                name="email"
                onChange={handleChange}
                placeholder="email"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-extrabold" htmlFor="">
                Password
              </label>
              <input
                className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-blue-900 bg-white shadow border-2 border-blue-900 rounded"
                type="password"
                required
                name="password"
                onChange={handleChange}
                placeholder="**********"
              />
            </div>
            <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
              <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                <label>
                  <input type="checkbox" />
                  <span className="ml-1 font-extrabold">Remember me</span>
                </label>
              </div>
              <div className="w-full lg:w-auto px-4">
                <Link
                  className="inline-block font-extrabold hover:underline"
                  to="#"
                >
                  {" "}
                  Forgot your password?
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-blue-800 hover:bg-blue-900 border-3 border-blue-900 shadow rounded transition duration-200"
            >
              Sign in
            </button>
            <p className="text-center font-extrabold">
              Don&rsquo;t have an account?{" "}
              <Link className="text-red-500 hover:underline" to="#">
                {" "}
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
