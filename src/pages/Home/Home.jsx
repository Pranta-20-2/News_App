import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border-2 border-red-500">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=" md:col-span-2 border-2 border-red-500">
                    <h2 className="text-4xl">News Coming Soon</h2>
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;