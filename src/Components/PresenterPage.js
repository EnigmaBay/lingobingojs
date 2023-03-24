import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useOutletContext } from 'react-router-dom';
import Footer from './Footer.js';

export default function PresenterPage() {
  // theme can be converted to a prop or user-accessible variable to select a theme
  const [theme] = useOutletContext();
  // custom toggle function courtesy of react-bootstrap documentation
  function CustomToggle({ children, eventKey, theme }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!')
    );

    return (
      <button
        type='button'
        className='themed-acc-button'
        data-theme={theme}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  return (
    <Container
      fluid
      className='main-output-borders themed-background page'
      data-theme={theme}
    >
      <Row>
        <Col></Col>
        <Col sm={4}>
          <div data-theme={theme} className='themed-header text-center'>
            Presenter Home
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col md='auto'></Col>
        <Col className='md-8 pb-4'>
          <Accordion
            defaultActiveKey='0'
            className='themed-text rounded-4 pb-4'
            data-theme={theme}
          >
            <Card data-theme={theme} className='themed-background mt-4'>
              <Card.Header data-theme={theme}>
                <CustomToggle eventKey='0' theme={theme}>
                  <Card.Text data-theme={theme}>
                    View Existing Categories and Words
                  </Card.Text>
                </CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey='0'>
                <Card.Body>
                  <Card.Text
                    className='themed-text rounded-4'
                    data-theme={theme}
                  >
                    {/* A button to call GetCategories. */}
                    <button
                      type='submit'
                      className='themed-acc-button'
                      data-theme={theme}
                    >
                      Get Categories
                    </button>
                  </Card.Text>
                  <Card.Text
                    className='themed-text rounded-4'
                    data-theme={theme}
                  >
                    {/* A form to allow entering a category then call GetWords.
                     */}
                    <Form>
                      <Form.Group
                        className='mb-3'
                        controlId='formCategoryGetWords'
                      >
                        <Form.Control
                          type='text'
                          placeholder='category'
                          className='themed-header'
                        />
                        <Form.Text className='text-muted'>
                          Enter a category you have already added words to.
                        </Form.Text>
                      </Form.Group>
                      <button
                        type='submit'
                        className='themed-acc-button'
                        data-theme={theme}
                      >
                        Get Words
                      </button>
                    </Form>
                  </Card.Text>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey='0'>
                <Card.Body>
                  <Card.Text
                    className='themed-text rounded-4'
                    data-theme={theme}
                  >
                    {/* Output from GetCategories or GetWords. */}
                    <div id='categoriesResult'>id categoriesResult</div>
                  </Card.Text>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card data-theme={theme} className='themed-background'>
              <Card.Header data-theme={theme}>
                <CustomToggle eventKey='1' theme={theme}>
                  <Card.Text data-theme={theme}>
                    Add New Words to New or Existing Category
                  </Card.Text>
                </CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey='1'>
                <Card.Body>
                  <Card.Text
                    className='themed-text rounded-4'
                    data-theme={theme}
                  >
                    A form to allow adding a word to a specified category then
                    call PostWord.
                  </Card.Text>
                  <Card.Text
                    className='themed-text rounded-4'
                    data-theme={theme}
                  >
                    A form to allow adding a CSV list of words to add to a
                    category then call PostWords.
                  </Card.Text>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey='1'>
                <Card.Body>
                  <Card.Text
                    className='themed-text rounded-4'
                    data-theme={theme}
                  >
                    Output from Add Word or Add Bulk Words.
                  </Card.Text>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card data-theme={theme} className='themed-background'>
              <Card.Header data-theme={theme}>
                <CustomToggle eventKey='2' theme={theme}>
                  <Card.Text data-theme={theme}>
                    Edit Existing Word in Existing Category
                  </Card.Text>
                </CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey='2'>
                <Card.Body>
                  <Card.Text
                    className='themed-text rounded-4'
                    data-theme={theme}
                  >
                    A form to allow replacing an existing word with another
                    specified word then call PatchWord.
                  </Card.Text>
                  <Card.Text
                    className='themed-text rounded-4'
                    data-theme={theme}
                  >
                    A form to allow entering a word and then call DeleteWord.
                  </Card.Text>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey='2'>
                <Card.Body>
                  <Card.Text
                    className='themed-text rounded-4'
                    data-theme={theme}
                  >
                    Output from Edit or Delete word
                  </Card.Text>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card data-theme={theme} className='themed-background'>
              <Card.Header data-theme={theme}>
                <CustomToggle eventKey='3' theme={theme}>
                  <Card.Text data-theme={theme}>
                    Add New or Delete Existing Gameboard
                  </Card.Text>
                </CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey='3'>
                <Card.Body>
                  <Card.Text
                    className='themed-text rounded-4'
                    data-theme={theme}
                  >
                    A form to allow entering a category then call PostGameboard.
                  </Card.Text>
                  <Card.Text
                    className='themed-text rounded-4'
                    data-theme={theme}
                  >
                    A form to allow entering a category then call
                    DeleteGameboard.
                  </Card.Text>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey='3'>
                <Card.Body>
                  <Card.Text
                    className='themed-text rounded-4'
                    data-theme={theme}
                  >
                    Output from add gameboard and delete gameboard
                  </Card.Text>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
        <Col md='auto'></Col>
      </Row>
      <Row>
        <Footer dataTheme={theme} />
      </Row>
    </Container>
  );
}
