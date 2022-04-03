import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'bootstrap/js/dist/modal';
import axios from 'axios';
import Post from './components/Post';

document.addEventListener('DOMContentLoaded',getPosts);

function getPosts(){
    axios.get('http://localhost:5050/post').then(res => {
   
     Post.showPosts(res.data);

    })
}

