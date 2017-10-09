import React, { Component } from 'react'

class ExpandRenderer extends Component {
	render() {
        return (
            <div className="tc">
                <h3>{this.props.item.user_name}</h3>
                <h4>{this.props.item.email}</h4>
                <p>More information about this user available <a href='#'>here</a></p>
            </div>
        );
    }
}

export default ExpandRenderer