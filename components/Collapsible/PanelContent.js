import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class PanelContent extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.isActive || nextProps.isActive
  }

  render() {
    const { prefixCls, isActive, children } = this.props
    const contentCls = classnames({
      [`${prefixCls}-content`]: true,
      [`${prefixCls}-content-active`]: isActive,
      [`${prefixCls}-content-inactive`]: !isActive,
    });
    const child = <div className={`${prefixCls}-content-box`}>{children}</div>
    return (
      <div
        className={contentCls}
        role="tabpanel"
      >{child}</div>
    );
  }
}

PanelContent.propTypes = {
  prefixCls: PropTypes.string,
  children: PropTypes.any,
  destroyInactivePanel: PropTypes.bool,
};

export default PanelContent