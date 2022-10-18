import React from 'react'

const CreatePost = ({username}) => {
  return (
    <article className="Blog-Post">
        <div className="Blog-Post-Top">
            <div className="Blog-Post-Top-Left">
                <h2 className="Blog-Title">Hello, {username}</h2>
            </div>
            <div className="Blog-Post-Top-Right">
                <p className="Blog-Author"></p>
                <p className="blog-Date"></p>
            </div>
        </div>
        <div className="Blog-Post-Content">
            <pre className="Blog-Content"></pre>
        </div>
    </article>
  )
}

export default CreatePost