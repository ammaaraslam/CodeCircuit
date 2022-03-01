import React from "react";

class LikeButton extends React.Component {
    state = {
        likes: 0
      };
      incrementMe = () => {
        let addLike = this.state.likes + 1
        this.setState({
            likes: addLike
        })
      }    
    
    render() {
        
        return (
            <div>
                <button onClick={this.incrementMe}>♥ {this.state.likes}</button>
            </div>
        )
      }
    } 
export default LikeButton