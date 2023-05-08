import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useOutletContext } from 'react-router-dom';
import CustomAccordionToggle from './CustomAccordionToggle';

export default function PresenterForm() {
  const [theme] = useOutletContext();

  return (
    <Accordion
      defaultActiveKey='0'
      className='themed-text rounded-4 pb-4'
      data-theme={theme}
    >
      <Card data-theme={theme} className='themed-background mt-4'>
        <CustomAccordionToggle eventKey='0'>
          <Card.Header data-theme={theme}>Please Login</Card.Header>
        </CustomAccordionToggle>
        <Accordion.Collapse eventKey='0'>
          <Card.Body className='themed-text rounded-4 mb-2' data-theme={theme}>
            {/* A button to call GetCategories. */}
            You Must Register and Login Before Using This Form
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
