import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import CustomAccordionToggle from '../Components/CustomAccordionToggle';
import AddWord from './AddWord';
import AddWords from './AddWords';
import FetchCategories from './FetchCategories.js';
import FetchWords from './FetchWords';

export default function PresenterForm(props) {
  const [categoryListVisible, setCategoryListVisible] = useState(false);
  const [wordsListVisible, setWordsListVisible] = useState(false);
  const [addWordListVisible, setAddWordListVisible] = useState(false);
  const [addWordsListVisible, setAddWordsListVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedWord, setSelectedWord] = useState('');
  const [selectedWords, setSelectedWords] = useState('');
  const [theme] = useOutletContext();

  function handleGetCategories(event) {
    event.preventDefault();
    console.log('handleGetCategories called.');
    const visibility = categoryListVisible ? false : true;
    setCategoryListVisible(visibility);
  }

  function handleGetWords(event) {
    event.preventDefault();
    if (event.target.formCategoryGetWords !== undefined) {
      console.log(
        'e.target.formCategoryGetWords.value:',
        event.target.formCategoryGetWords.value
      );
    }
    const category = event.target.formCategoryGetWords.value.trim();
    setSelectedCategory(category);
    const visibility = wordsListVisible ? false : true;
    setWordsListVisible(visibility);
  }

  function handleAddWord(event) {
    event.preventDefault();
    console.log('handleAddWord e.target:', event.target);
    const category = event.target.addWordCategory.value.trim();
    const word = event.target.addWordWord.value.trim();
    setSelectedCategory(category);
    setSelectedWord(word);
    console.log(
      'end handleAddWord() method with category, word',
      category,
      word
    );
    const visibility = addWordListVisible ? false : true;
    setAddWordListVisible(visibility);
  }

  function handleAddWords(event) {
    event.preventDefault();
    const category = event.target.addWordsCategory.value.trim();
    const words = event.target.addWordsWords.value.trim();
    console.log('handleAddWords category', category);
    console.log('handleAddWords words', words);
    setSelectedCategory(category);
    setSelectedWords(words);
    const visibility = addWordsListVisible ? false : true;
    setAddWordsListVisible(visibility);
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
            {categoryListVisible && (
              <FetchCategories
                encodedPayload={props.encodedPayload}
                accessToken={props.accessToken}
              />
            )}
            <hr></hr>
            <Form onSubmit={handleGetWords}>
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
              {wordsListVisible && (
                <FetchWords
                  encodedPayload={props.encodedPayload}
                  accessToken={props.accessToken}
                  category={selectedCategory}
                />
              )}
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

            <Form onSubmit={handleAddWord}>
              <div className='d-flex justify-content-between'>
                <Form.Group className='my-3'>
                  <Form.Control
                    type='text'
                    placeholder='category'
                    className='themed-header'
                    id='addWordCategory'
                  />
                  <Form.Text className='text-muted'>
                    Enter a category to add a word to.
                  </Form.Text>
                  <Form.Control
                    type='text'
                    placeholder='word'
                    className='themed-header'
                    id='addWordWord'
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
                {addWordListVisible && (
                  <AddWord
                    encodedPayload={props.encodedPayload}
                    accessToken={props.accessToken}
                    category={selectedCategory}
                    newWord={selectedWord}
                  />
                )}
              </div>
            </Form>

            <hr />
            {/* Add New Comma Separated List of Words */}

            <Form onSubmit={handleAddWords}>
              <div className='d-flex justify-content-between'>
                <Form.Group className='my-3'>
                  <Form.Control
                    type='text'
                    placeholder='category'
                    className='themed-header'
                    id='addWordsCategory'
                  />
                  <Form.Text className='text-muted'>
                    Enter a category to add a word to.
                  </Form.Text>
                  <Form.Control
                    type='text'
                    placeholder='first, second, third'
                    className='themed-header'
                    id='addWordsWords'
                  />
                  <Form.Text className='text-muted'>
                    Enter a comma-separated list of words to add to the
                    category.
                  </Form.Text>
                </Form.Group>
                <div>
                  <button
                    type='submit'
                    className='themed-button-sm'
                    data-theme={theme}
                  >
                    Add Words
                  </button>
                </div>
                {addWordsListVisible && (
                  <AddWords
                    encodedPayload={props.encodedPayload}
                    accessToken={props.accessToken}
                    category={selectedCategory}
                    words={selectedWords}
                  />
                )}
              </div>
            </Form>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

PresenterForm.propTypes = {
  accessToken: PropTypes.string,
  encodedPayload: PropTypes.string,
};
