import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";
const Login = () => {
    const { user , signIn } =useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    const handleLoginSubmit = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signIn(email,password)
        .then(result => {
            console.log(result.user)
            // navigate after login
            navigate(location?.state ? location.state : '/')

        })
        .catch(error => console.error(error))

    }
    return (
        <div className="flex flex-col bg-gray-200">
            <NavBar></NavBar>
            <div className="border-2 w-1/2 mx-auto py-16 bg-white my-10 rounded-lg shadow-lg">
                <h2 className="text-3xl text-center">Please Login</h2>
                <form onSubmit={handleLoginSubmit} className=" md:w-3/4 lg:w-[60%] mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center my-5"> Do not have an account? <Link className=" font-semibold text-blue-300 underline" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;