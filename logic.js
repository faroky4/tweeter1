const TweetModel = function() {

    let _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    let postIdCounter = 2
    let commentIdCounter = 6

    const getPosts = function() {
        return _posts;
    }

    const addPost = function(postTxt) {
        postIdCounter ++
        const newPost = {
            text: postTxt,
            id : "p" + postIdCounter,
            comments:[]
        }
        _posts.push(newPost)
    }

    const removePost = function(postId) {
        let temp = 0
        for (post of _posts) {
            if(post.id == postId) {
                _posts.splice(temp , 1)
            }
            temp ++
        }
        postIdCounter --
    }

    const addComment = function(txt , postId) {
        commentIdCounter ++
        let newcomment = {
            id: "c" + commentIdCounter,
            text: txt
        }
        for(post of _posts) {
            if(post.id == postId) {
                post.comments.push(newcomment)
            }
        }
    }

    const removeComment = function(postId , commentId) {
        let temp = 0
        for(post of _posts) {
            if(post.id == postId) {
                for(comm of post.comments) {
                    if(comm.id == commentId) {
                        post.comments.splice(temp , 1)
                    }
                    temp ++
                }
            }
        }
    }

    return {
        getPosts : getPosts,
        addPost : addPost,
        removePost : removePost,
        addComment : addComment,
        removeComment : removeComment   
    }
}
