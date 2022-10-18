import { useEffect, useState } from "react";
import api from "../../api";
import "./Home.css";

import PostLayout from "./Components/PostLayout";
import CreatePost from "./Components/CreatePost";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.listDocuments("posts").then((response) => {
            setPosts(response.documents.sort((a, b) => (b.date > a.date ? 1 : -1)));
        })
    }, []);
    return (
        <div>
            {
                function () {
                    if (api.getAccount()) {
                        return <CreatePost />
                    }
                }
            }

            {
                posts.map((post) => {
                    return (
                        <PostLayout key={post.$id} title={post.title} author={post.author} date={post.date} content={post.message} />
                    )
                })
            }
        </div>
    )
}

export default Home