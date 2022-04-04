import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'bootstrap/js/dist/modal';
import axios from 'axios';
import Post from './components/Post';
import { Alert } from 'bootstrap';

document.addEventListener('DOMContentLoaded',getPosts);

document.getElementById('postform').addEventListener('submit', createpost);

function getPosts(){

    axios.get('http://localhost:5050/post').then(res => { Post.showPosts(res.data) });
}


function createpost(e){
    e.preventDefault()


    let formData = new FormData(e.target);
    let data = Object.fromEntries(formData.entries());

    console.log(data);

     if (data.name == '' || data.uphoto =='' || data.content == '') {
         Alert.danger('All Fields are required');
         
     }
     else{

        axios.post('http://localhost:5050/post',{
            name : data.name,
            user_photo: data.uphoto,
            content: data.content,
            post_photo: data.photo
            
        }).then(res => { Post.showPosts(res.data) });
        getPosts();
        

     }


}
















/**
 * {
            "id"            :1,
            "name"          :"Rahat",
            "user_photo"    :"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
            "content"       : "what's on your mind, name ",
            "post_photo"    :"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"

        },
        {
            "id"            :2,
            "name"          :"Tamim",
            "user_photo"    :"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
            "content"       : "what's on your mind, name ",
            "post_photo"    :"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"

        },
        {
            "id"            :3,
            "name"          :"Faysal",
            "user_photo"    :"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
            "content"       : "what's on your mind, name ",
            "post_photo"    :"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"

        },
        {
            "id"            :4,
            "name"          :"Faysal",
            "user_photo"    :"https://cdn.sharechat.com/59edfdb_1609063544840_sc_img_webp.webp",
            "content"       : "what's on your mind, name ",
            "post_photo"    :"https://aajbikel.com/static/c1e/client/76794/migrated/b2e0644ca834743880428db2f631501b.jpg"

        }
 * 
 */