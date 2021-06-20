import React from 'react';
import { setFilter } from '../Actions';
import { connect } from 'react-redux';

function Link({ active, children, onClick }) {
  if (active) {
    return <b className="filter selected">{children}</b>;
  } else {
    return (
      <a
        href="#"
        className="filter not-selected"
        onClick={(ev) => {
          ev.preventDefault();
          onClick();
        }}
      >
        {children}
      </a>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    active: state.filter === ownProps.filter,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => dispatch(setFilter(ownProps.filter)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);
