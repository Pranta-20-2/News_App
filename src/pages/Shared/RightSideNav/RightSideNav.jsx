import { FaFacebook, FaGoogle, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"

const RightSideNav = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold p-2">Login With</h2>
            <div className="p-4 space-y-4 mb-6">
                <button className="btn btn-outline border-2 border-blue-400 w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            <div className="p-4 mb-6">
                <h2 className="text-2xl font-semibold mb-3">Find Us On</h2>
                <a className="flex text-lg items-center border-2 rounded-t-lg p-3" href="">
                    <FaFacebook className="mr-3"></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className="flex text-lg items-center border-x-2 p-3" href="">
                    <FaTwitter className="mr-3"></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className="flex text-lg items-center border-2 rounded-b-lg p-3" href="">
                    <FaInstagram className="mr-3"></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
            {/* q zone */}
            <div className="p-4 mb-6">
                <div className=" bg-gray-200 p-3">
                    <h2 className="text-2xl font-semibold mb-3"> Q-Zone </h2>
                    <div className="space-y-4">
                        <img src={qZone1} alt="" />
                        <img src={qZone2} alt="" />
                        <img src={qZone3} alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default RightSideNav;