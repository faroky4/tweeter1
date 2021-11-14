const tweet = TweetModel()
const rend = Renderer()

const posts = tweet.getPosts()
rend.renderPosts(posts)

const post2 = function () {
    let postText = $("#input").val()
    $(input).val("")
    tweet.addPost(postText)
    rend.renderPosts(posts)

}

$('#posts').on('click', '.comment', function(){
    const postID = $(this).closest('.post').data().id
    const inputComment = $(this).closest('.post').find('#input-comment').val()
    $('#input-comment').val("")

    tweet.addComment(inputComment, postID)
    rend.renderPosts(posts)
})

$('#posts').on('click', '.delete', function(){
    const delPost = $(this).closest('.post').data().id
    tweet.removePost(delPost)
    rend.renderPosts(posts)
})

$('#posts').on('click', '.delete-comment', function(){
    const postID = $(this).closest('.post').data().id
    const commentID = $(this).closest('div').data().id
    tweet.removeComment(postID, commentID)
    rend.renderPosts(posts)   
})



