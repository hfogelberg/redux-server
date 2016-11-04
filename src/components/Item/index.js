import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';

export default class Item extends Component{
  render() {
    const {className, ...props} = this.props;
    return (
      <div className={classnames('About', className)} {...props} >
        <h1>Item</h1>
      </div>
    );
  }
}
