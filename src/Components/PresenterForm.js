import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import CustomAccordionToggle from './CustomAccordionToggle';
import FetchCategories from './FetchCategories';

export default function PresenterForm() {
  const [categoryListVisible, setCategoryListVisible] = useState(false);
  const [theme] = useOutletContext();

  function handleGetCategories(e) {
    e.preventDefault();
    console.log('handleGetCategories called.');
    setCategoryListVisible(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (e.target.formCategoryGetWords !== undefined) {
      console.log(
        'e.target.formCategoryGetWords.value:',
        e.target.formCategoryGetWords.value
      );
    }
    if (e.target.formCategoryAddWord !== undefined) {
      console.log(
        'e.target.formCategoryAddWord category, word:',
        e.target.formCategoryAddWord[0].value,
        e.target.formCategoryAddWord[1].value
      );
    }
    console.log('handleSubmit completed.');
  }

  return (
    <Accordion
      defaultActiveKey='0'
      className='themed-text rounded-4 p-2'
      data-theme={theme}
    >
      {/* Get Categories and Get Words in Category */}
      <Card data-theme={theme} className='themed-background mt-2'>
        <Card.Header data-theme={theme}>
          <CustomAccordionToggle eventKey='0'>
            View Existing Categories or Words
          </CustomAccordionToggle>
        </Card.Header>
        <Accordion.Collapse eventKey='0'>
          <Card.Body className='themed-text rounded-4 m-3' data-theme={theme}>
            {/* A button to call GetCategories. */}
            <div className='d-flex justify-content-between'>
              <span className='text-muted'>
                Click Get Categories to see existing categories.
              </span>
              <button
                type='submit'
                className='themed-button-sm'
                data-theme={theme}
                onClick={handleGetCategories}
              >
                Get Categories
              </button>
            </div>
            {categoryListVisible && <FetchCategories />}
            <hr></hr>
            <Form onSubmit={handleSubmit}>
              <Form.Group className='my-3' controlId='formCategoryGetWords'>
                <Form.Control
                  type='text'
                  placeholder='category'
                  className='themed-header'
                />
              </Form.Group>
              <div className='d-flex justify-content-between'>
                <Form.Text className='text-muted'>
                  Enter a category you have already added words to.
                </Form.Text>
                <button
                  type='submit'
                  className='themed-button-sm'
                  data-theme={theme}
                >
                  Get Words
                </button>
              </div>
            </Form>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      {/* Add New Word or List of Words to a Category */}
      <Card data-theme={theme} className='themed-background mt-2'>
        <Card.Header data-theme={theme}>
          <CustomAccordionToggle eventKey='1'>
            Add A New Word Or A List Of Words To A Category
          </CustomAccordionToggle>
        </Card.Header>
        <Accordion.Collapse eventKey='1'>
          <Card.Body className='themed-text rounded-4 m-3' data-theme={theme}>
            {/* Add New Words to New or Existing Category */}

            <Form onSubmit={handleSubmit}>
              <div className='d-flex justify-content-between'>
                <Form.Group className='my-3' controlId='formCategoryAddWord'>
                  <Form.Control
                    type='text'
                    placeholder='category'
                    className='themed-header'
                  />
                  <Form.Text className='text-muted'>
                    Enter a category to add a word to.
                  </Form.Text>
                  <Form.Control
                    type='text'
                    placeholder='word'
                    className='themed-header'
                  />
                  <Form.Text className='text-muted'>
                    Enter a new word to add to the category.
                  </Form.Text>
                </Form.Group>
                <div>
                  <button
                    type='submit'
                    className='themed-button-sm'
                    data-theme={theme}
                  >
                    Add Word
                  </button>
                </div>
              </div>
            </Form>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
