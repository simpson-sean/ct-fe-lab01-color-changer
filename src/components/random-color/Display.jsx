import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ rdmColor }) => {
    return <div style={{ background: rdmColor, height: 400, width: 400, borderRadius:20 }}>{ }</div>
};

Display.propTypes = {
    rdmColor: PropTypes.string.isRequired,
};

export default Display;