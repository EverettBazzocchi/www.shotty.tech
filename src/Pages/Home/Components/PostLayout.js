import "./PostLayout.css";

function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

const PostLayout = ({ title, author, date, content }) => {

    let newDate = new Date(date);
    newDate = timeSince(newDate) + " ago";

    return (
        <article className="Blog-Post">
            <div className="Blog-Post-Top">
                <div className="Blog-Post-Top-Left">
                    <h2 className="Blog-Title">{title}</h2>
                </div>
                <div className="Blog-Post-Top-Right">
                    <p className="Blog-Author">{author}</p>
                    <p className="blog-Date">{newDate}</p>
                </div>
            </div>
            <div className="Blog-Post-Content">
                <pre className="Blog-Content">{content}</pre>
            </div>
        </article>
    )
}

export default PostLayout