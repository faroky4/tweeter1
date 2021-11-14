
const Renderer = function (){
 
    const renderPosts = function(posts){

        $('#posts').empty()

        for(let post of posts){

            let postBox = 
            $(`<div class="post" data-id="${post.id}">
            <p class="post-text">${post.text}</p>
            <div class="comments">${renderComments(post.comments)}</div>
            <div class = "user">
            <input type="text" placeholder="What do you think?" id="input-comment">
                <button class="comment">Comment</button>
                <button class="delete">Delete Post</button>
            </div>
            </div>`)

            $("#posts").append(postBox)
        }
    }

    const renderComments = function(comments){
            let finalComment = ""
            for(let comment of comments){
                finalComment += `<div data-id="${comment.id}"><span class='delete-comment'>X</span> ${comment.text}</div>`

            }

            return finalComment
    }       

    return {
        renderPosts
    }
    

}

