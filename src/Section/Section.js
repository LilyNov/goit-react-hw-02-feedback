import React from 'react';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <section>
      {title === 'Please leave feedback' ? (
        <h2>Please leave feedback</h2>
      ) : (
        <h3>Statistics</h3>
      )}

      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
