import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";




const Register = () => {
    const { registerUser } = useContext(AuthContext)
    const handleRegister = (e) => {

        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password);

        registerUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.error(error))


    }
    return (
        <div className="flex flex-col bg-gray-200">
            <NavBar></NavBar>
            <div className="border-2 w-1/2 mx-auto py-16 bg-white my-10 rounded-lg shadow-lg">
                <h2 className="text-3xl text-center">Register now</h2>
                <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-[60%] mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="your name" name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="photo" name="photo" className="input input-bordered" />
                    </div>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center my-5"> Already have an account? <Link className=" font-semibold text-blue-300 underline" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;