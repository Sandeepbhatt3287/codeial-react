import React from 'react';
import axios from 'axios';
import Post from './Post';

// it will be class based 
class PostsList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            posts:[]
        }
        this.getPosts();
    }

    getPosts(){
        axios.get('http://localhost:8000/api/v1/posts').then((data)=>{console.log(data)})
    }

render(){
    return (
        <div>
        <h1>Codeial Posts</h1>
        <ul>
             {
                 this.state.posts.map((post)=> <Post post={post} key={post._id}></Post>)
             }
        </ul>
        </div>
          );

        }
      }

export default PostsList;
