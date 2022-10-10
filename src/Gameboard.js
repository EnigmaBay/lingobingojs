import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DauberLayer from './DauberLayer';
import './tempstyle.css';
import checkForBingo from './funcLib/CheckForBingo';

export default class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: 1,
      isBingoed: false,
      dauberedTiles: [
        false, false, false, false, false,
        false, false, false, false, false,
        false, false, true, false, false,
        false, false, false, false, false,
        false, false, false, false, false,
      ],
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
    for (let col = 0; col < 5; col++) {
      const idx = col + incrementor;
      const currentWord = randWords[idx];
      result.push(
        <Col key={idx}
          className='word-col'
          // inline style is neccessary here to override the defualt style for 'Col'
          style={{ padding: 0 }}
        >
          <DauberLayer id={idx} styleClass={this.state.dauberedTiles[idx] ? 'daubered' : 'plain'} word={currentWord}
            handleTileClick={e => this.handleTileClick(e)} />
        </Col>);
    }
    return result;
  }

  handleTileClick(e) {
    const incrMoves = this.state.moves + 1;
    const trueTiles = this.state.dauberedTiles;
    const completedMoves = this.state.moves;
    const bingoed = checkForBingo(trueTiles, completedMoves);

    let id = e.currentTarget.id;
    if (id !== null) {
      this.setState((prevState) => {
        prevState.dauberedTiles[id] = true;
        prevState.moves = incrMoves;
        prevState.isBingoed = bingoed;
        return { dauberedTiles: prevState.dauberedTiles };
      });
      console.log('click ' + id);
      console.log(this.state.dauberedTiles);
    }
  }

  renderGameboard(rows) {
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

  render() {
    const rows = this.rowBuilder(this.props.randwords);
    const gameBoard = this.renderGameboard(rows);

    const bingoed = this.state.bingoed;

    return (
      <>
        {bingoed === true ? gameBoard : <div>BINGO!</div>}
      </>
    );
  }
}

Gameboard.propTypes = {
  randwords: PropTypes.array
};
