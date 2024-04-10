import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className="text-2xl font-bold p-2">All Category: {categories.length}</h2>
            <div className="p-4 space-y-6">
            {
                categories.map(category =>

                    <Link to={`/category/${category.id}`} className=" block border-2 py-4 rounded-lg hover:bg-gray-200 font-semibold  pl-4 md:pl-16" key={category.id}>{category.name}</Link>

                )
            }
             <br />
            </div>
        </div>
    );
};

export default LeftSideNav;