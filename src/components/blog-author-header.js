import React from "react"
import dotDoge from "../images/dotdoge_v2.png";

class BlogAuthorHeader extends React.Component {
    render() {
        return <section className="text-center border-b border-gray-300 pb-4 mb-4">
            <h2 className="block flex justify-center items-center">
            <img
            alt="Cat and human sitting on a couch"
            className="inline rounded-full mr-2"
            style={{height:"2rem"}}
            src={dotDoge}
            /> 
            <span className="text-xl pr-2">Hello, World.</span>
            </h2>
        </section>
    }
}

export default BlogAuthorHeader