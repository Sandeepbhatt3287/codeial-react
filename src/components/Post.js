import React from 'react';

// it will be function basedd
function Post(Props) {

  let postStyle={
    color: 'grey'
  }
  return (
    <li className="PostItem" style = {postStyle}>
    </li>
        );
}

export default Post;
