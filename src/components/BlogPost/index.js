import React, {useState, useEffect} from 'react'
import './style.css'
import Card from '../UI/Card'
import blogPost from '../../data/blog.json';

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
  return(
        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">Blog Category</span>
                    <h1 className="postTitle">Post title</h1>
                    <span className="postedBy">posted on 2/11/2020 by Mahesh Vora</span>
                </div>

                <div className="postImageContainer">
                    <img src={require('../../PostImages/wordpress-introduction.jpg')} alt="Post Image" />    
                </div>

                <div className="postContent">
                    <h3>this is test post</h3>
                    <p>This is the post description</p>
                </div>
                
            </Card>
        </div>
   )

 }

export default BlogPost