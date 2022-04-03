class Post{

    constructor(){
        this.post_timeline = document.getElementById('post-timeline-content');
    }


    showPosts(posts){

        let post = '';
        posts.reverse().map(( data,index ) => {
            let {name,user_photo,content,post_photo} = data; 
            post += `
            <div class="card shadow-sm my-3">
            <div class="card-body">
                <div class="user-timeline-info">
                    <div class="user-info">
                        <img id="user-timeleine-photo" src="${user_photo}" alt="">
                        <h5 class="ms-3">${ name }</h5>
                    </div>
                    <button>...</button>
                </div>

                <div class="user-post-content">
                    <p>${content}</p>
                    <img class="img-fluid" src="${post_photo}" alt="">
                </div>
            </div>
        </div>
            
            `
        })

        this.post_timeline.innerHTML = post;

    }


}
let post = new Post;
export default post;