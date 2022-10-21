import { useEffect, useState } from "react";
import api from "../../api";
import "./Home.css";

import PostLayout from "./Components/PostLayout";
import CreatePost from "./Components/CreatePost";
import AuthorView from "./Components/AuthorView";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [username, setUsername] = useState('')
    useEffect(() => {
        api.getAccount().then((response) => {
            setUsername(response.name)
        })
    }, [])

    useEffect(() => {
        api.listDocuments("posts").then((response) => {
            setPosts(response.documents.sort((a, b) => (b.date > a.date ? 1 : -1)));
        })
    }, []);

    var LoggedIn;

    if (username) {
        LoggedIn = <CreatePost username={username} />
    }

    return (
        <div>
            {LoggedIn}

            {
                posts.map((post) => {
                    if (post.author == username) {
                        return <AuthorView key={post.$id} id={post.$id} title={post.title} author={post.author} date={post.date} content={post.message} />
                    } else {
                        return (
                            <PostLayout key={post.$id} title={post.title} author={post.author} date={post.date} content={post.message} />
                        )
                    }
                })
            }
        </div>
    )
}

export default Home