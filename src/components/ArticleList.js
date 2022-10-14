import React from "react";
import Article from "./Article"

function ArticleList(prop) {

        const filler = prop.posts.map((post)=>{
            return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
        })

    return (
        <main>
            {filler}
        </main>
    )
}

export default ArticleList;