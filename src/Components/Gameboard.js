import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PartyFavor from '../funcLib/PartyFavor';
import glitterData from '../JSON/glitter-types.json';
import BingoAnnouncer from './BingoAnnouncer';
import rowBuilder from './RowBuilder';

import '../CSS/screenpartystyle.css';

export default class Gameboard extends React.Component {
  constructor(props) {
    super(props);
  }

  renderGameboard(rows) {
    return (
      <Container fluid className='px-0'>
        <Row className='m-2'>
          <Col></Col>
          <Col xs={'auto'}
            className='rounded-4 themed-header lets-play'
            data-theme={this.props.dataTheme}
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
    const rows = this.props.dauberedTiles
      ? rowBuilder(this.props.randwords, this.props.dataTheme, this.props.dauberedTiles, this.props.handleTileClick)
      : null;
    const gameBoard = this.props.dauberedTiles ? this.renderGameboard(rows) : null;
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
  isBingoed: PropTypes.bool,
  dataTheme: PropTypes.string
};
