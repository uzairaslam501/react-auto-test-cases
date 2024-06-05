import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ buttons }) => {
  return (
    <div className="flex space-x-2">
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={button.onClick}
          className={`px-4 py-2 rounded ${button.className}`}
          title={button.title || ''}
        >
          {button.icon && <i className={`mr-2 ${button.icon}`}></i>}
          {button.label || ''}
        </button>
      ))}
    </div>
  );
};

Buttons.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      onClick: PropTypes.func,
      className: PropTypes.string,
      title: PropTypes.string,
      icon: PropTypes.string,
    })
  ).isRequired,
};

export default Buttons;
