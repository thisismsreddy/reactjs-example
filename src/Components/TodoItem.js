import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
        console.log('what is going on')
    );
  }
}

TodoItem.propTypes = {
  todo: React.PropTypes.object
}

export default TodoItem;