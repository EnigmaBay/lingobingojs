import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DauberLayer from './DauberLayer';
import randomGen from './funcLib/RandomGen.js';
import wordImporter from './funcLib/WordImporter.js';
import wordProcessor from './funcLib/WordProcessor.js';
import './tempstyle.css';

export default class Gameboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dauberedTiles : [],
    };
  }
  rowBuilder(randWords) {
    let result = [];
    for (let row = 0; row < 5; row++) {
      result.push(<Row key={row} className='mx-0'>{this.tileBuilder(row, randWords)}</Row>);
    }
    return result;
  }

  tileBuilder(row, randWords) {
    let result = [];
    const incrementor = row * 5;
    for (let col=0; col < 5; col++) {
      const idx = col + incrementor;
      const currentWord = randWords[idx];
      result.push(
        <Col key={idx} className='word-tile'>
          <DauberLayer id={idx} styleClass={this.state.dauberedTiles[idx] ? 'daubered' : 'plain'} word={currentWord}
            handleTileClick={e => this.handleTileClick(e)}/>
        </Col>);
    }
    return result;
  }
  handleTileClick(e){
    let id = e.currentTarget.id;
    if(id !== null){
      this.setState((prevState) => {
        prevState.dauberedTiles[id] = true;
        return {dauberedTiles: prevState.dauberedTiles};
      });
      console.log('click ' + id);
      console.log(this.state.dauberedTiles);
    }
  }
  render() {
    const randInts = randomGen(24);
    let words = wordImporter();
    const randWords = wordProcessor(words, randInts);
    const rows = this.rowBuilder(randWords);

    return (
      <Container fluid className='px-0' >
        <Row className='mx-0'>
          <Col></Col>
          <Col xs={'auto'}>Lets Play Bingo!</Col>
          <Col></Col>
        </Row>
        {rows}
      </Container>
    );
  }
}
