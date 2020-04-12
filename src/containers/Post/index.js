import React from 'react'
import Card from '../../components/UI/Card'
import './style.css'
import BlogPost from '../../components/BlogPost'
import Sidebar from '../../components/Sidebar'

/**
* @author
* @function Post
**/

const Post = (props) => {
  
  return(
    <section className="container">
      <BlogPost/>
      <Sidebar /> 
    </section>
   )

 }

export default Post