import React from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ label }) => {
  return (
    <div>
      <p>{label}</p>
    </div>
  );
};

ProductList.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ProductList;
