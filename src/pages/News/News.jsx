import Header from "../Shared/Header/Header";
import { useParams } from "react-router-dom"
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import NavBar from "../Shared/NavBar/NavBar";

const News = () => {
    const { id } = useParams()
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 my-10">
                <div className=" md:col-span-3 border-2 p-5">
                    <h2 className="text-2xl font-bold">Dragon News</h2>
                    <div className="p-4">
                        <img src={id.image_url} alt="" />
                        {id}
                        {id.title}
                    </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;