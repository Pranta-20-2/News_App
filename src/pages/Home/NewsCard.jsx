import { Link } from "react-router-dom";

const NewsCard = ({ aNews }) => {
    const { title, image_url, details,_id } = aNews
    return (
        <div className="card bg-base-100 shadow-lg mb-16">
            <div className=" py-6 px-3 space-y-6">
                <h2 className="card-title">{title}</h2>
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    {
                        details.length > 200
                            ?
                            <div>
                                <p>{details.slice(0, 200)}</p>
                                <Link to={`/news/${_id}`} className=" text-orange-300 font-semibold underline ">Read more....</Link>
                            </div>
                            :
                            <p>{details}</p>

                    }
                </div>
            </div>
        </div >
    );
};

export default NewsCard;