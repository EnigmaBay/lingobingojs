import React from 'react';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { useOutletContext } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function CustomAccordionToggle({ children, eventKey }) {
  const [theme] = useOutletContext();
  const decoratedOnClick = useAccordionButton(eventKey, (key) =>
    console.log('eventkey is', key)
  );

  return (
    <button
      type='button'
      data-theme={theme}
      className='themed-button-sm'
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

CustomAccordionToggle.propTypes = {
  children: PropTypes.node.isRequired,
  eventKey: PropTypes.number,
};
