import React from 'react'
import './style.css'
import Card from '../UI/Card'
/**
* @author Mahesh Vora
* @function Sidebar
**/

const Sidebar = (props) => {
  return(
    <div className="sidebarContainer">
      <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="cardBody">
          <p className="personalBio">I am Mahesh Vora. My specialization in Front end and back end developement.</p>
        </div>
      </Card>
      
      <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Card>

      <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>

        <div className="recentPosts">
          <div className="recentPost">
            <h3>Post Title</h3>
            <span>July 21, 2018</span>
          </div>
          <div className="recentPost">
            <h3>Post Title</h3>
            <span>July 21, 2018</span>
          </div>
        </div>
      </Card>
    </div>

   )

 }

export default Sidebar