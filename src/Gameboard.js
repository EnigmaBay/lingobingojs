import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DauberLayer from './DauberLayer';
import PartyFavor from './funcLib/PartyFavor';
import glitterData from './glitter-types.json';
import BingoAnnouncer from './BingoAnnouncer';
import './tempstyle.css';
import './screenpartystyle.css';

export default class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    // selectedTheme can be converted to a prop or user-accessible variable to select a theme
    this.selectedTheme = 'light';
  }

  rowBuilder(randWords) {
    let result = [];
    for (let row = 0; row < 5; row++) {
      result.push(
        <Row
          key={row}
          className='mx-0'
        >{this.tileBuilder(row, randWords)}</Row>
      );
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
          className='word-col p-1'
          data-theme={this.selectedTheme}
        >
          <DauberLayer
            id={idx}
            styleClass={this.props.dauberedTiles[idx] ?
              'daubered' :
              'plain'}
            datatheme={this.selectedTheme}
            word={currentWord}
            handleTileClick={e => this.props.handleTileClick(e)}
          />
        </Col>);
    }
    return result;
  }

  renderGameboard(rows) {
    return (
      <Container fluid className='px-0' >
        <Row className='m-2'>
          <Col></Col>
          <Col xs={'auto'}
            className='rounded-4 themed-text lets-play'
            data-theme={this.selectedTheme}
          >Lets Play Bingo!</Col>
          <Col></Col>
        </Row>
        {rows}
      </Container>
    );
  }

  getPartyFavors(message) {
    return (
      <Container fluid className='px-0'>
        {glitterData.map((item) => {
          return (
            <PartyFavor
              key={item.id}
              classname={item.styleclass}
              src={item.url}
              alt={item.alt}
            />
          );
        })}
        <BingoAnnouncer
          classname={'bingo'}
          text={message}
        />
      </Container>
    );
  }

  render() {
    const rows = this.rowBuilder(this.props.randwords);
    const gameBoard = this.renderGameboard(rows);
    const currentMove = this.props.moves;
    const bingoAnnouncementText = 'B I N G O in ' + currentMove + ' words !';
    const partyfavors = this.getPartyFavors(bingoAnnouncementText);
    const bingoed = this.props.isBingoed;

    return (
      <>
        <div>{bingoed && partyfavors}</div>
        <div>{gameBoard}</div>
      </>
    );
  }
}

Gameboard.propTypes = {
  randwords: PropTypes.array,
  moves: PropTypes.number,
  dauberedTiles: PropTypes.array,
  handleTileClick: PropTypes.func,
  isBingoed: PropTypes.bool
};
