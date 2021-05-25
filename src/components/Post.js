import React from 'react';

// it will be function basedd
function Post(props) {

  let postStyle={
    color: 'grey'
  }
  return (
    <li className="PostItem" style = {postStyle}>
      {props.post.content}
      {props.post.user.name}
    </li>
        );
}

export default Post;
