import api from '../../../api'
import { useEffect, useState } from 'react'

import "./PostLayout.css";
import { NavLink } from 'react-router-dom';

function updatePost(id) {
    let title = document.getElementById("title" + id).innerHTML;
    let content = document.getElementById("content" + id).innerHTML;

    api.updateDocument("posts", id, {title: title, message: content}).then((response) => {
        let errorElement = document.getElementById("error" + id);
        errorElement.innerHTML = "Post updated successfully";
    }).catch((error) => {
        let errorElement = document.getElementById("error" + id);
        errorElement.innerHTML = "Error: " + error.message;
    });
}

function deletePost(id) {
    api.deleteDocument("posts", id).then((response) => {
        window.location.reload();
    }).catch((error) => {
        let errorElement = document.getElementById("error" + id);
        errorElement.innerHTML = "Error: " + error.message;
    });
}

function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
        if (Math.floor(interval) === 1) {
            return Math.floor(interval) + " year";
        } else {
            return Math.floor(interval) + " years";
        }
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        if (Math.floor(interval) === 1) {
            return Math.floor(interval) + " month";
        } else {
            return Math.floor(interval) + " months";
        }
    }
    interval = seconds / 86400;
    if (interval > 1) {
        if (Math.floor(interval) === 1) {
            return Math.floor(interval) + " day";
        } else {
            return Math.floor(interval) + " days";
        }
    }
    interval = seconds / 3600;
    if (interval > 1) {
        if (Math.floor(interval) === 1) {
            return Math.floor(interval) + " hour";
        } else {
            return Math.floor(interval) + " hours";
        }
    }
    interval = seconds / 60;
    if (interval > 1) {
        if (Math.floor(interval) === 1) {
            return Math.floor(interval) + " minute";
        } else {
            return Math.floor(interval) + " minutes";
        }
    }
    if (Math.floor(seconds) === 1) {
        return Math.floor(seconds) + " second";
    } else {
        return Math.floor(seconds) + " seconds";
    }
}

const AuthorView = ({id, title, author, date, content }) => {

    let newDate = new Date(date);
    newDate = timeSince(newDate) + " ago";

    return (
        <article className="Blog-Post Author-View">
            <div className="Blog-Post-Top">
                <div className="Blog-Post-Top-Left">
                    <h2 contentEditable="true" id={"title" + id} className="Blog-Title" dangerouslySetInnerHTML={{__html: title}}></h2>
                </div>
                <div className="Blog-Post-Top-Right">
                    <p className="Blog-Author">You ({author})</p>
                    <p className="blog-Date">{newDate}</p>
                </div>
            </div>
            <p className='editError' id={"error" + id}></p>
            <div className="Blog-Post-Content">
                <pre contentEditable="true" id={"content" + id} className="Blog-Content" dangerouslySetInnerHTML={{__html: content}}></pre>
                <div className='Post-Buttons'>
                <button className="Blog-Post-Button" onClick={() => {updatePost(id)}}>Save</button>
                <button className="Blog-Post-Button" onClick={() => {deletePost(id)}}>Delete</button>
                </div>
            </div>
        </article>
    )
}

export default AuthorView