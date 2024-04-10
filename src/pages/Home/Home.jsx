import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import {useLoaderData} from "react-router-dom"
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData()
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border-2 border-red-500">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=" md:col-span-2 space-y-6">
                    <h2 className="text-4xl">News Coming Soon: {news.length}</h2>
                    {
                        news.map(aNews => <NewsCard key={aNews._id} aNews={aNews}></NewsCard>)
                    }
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;