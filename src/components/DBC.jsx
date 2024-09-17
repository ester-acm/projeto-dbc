// DBC.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BoardContainer = styled.div`
  width: 300px;
  height: 400px;
  background-color: #00979D;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const ColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Pin = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => props.active ? '#FFD700' : '#808080'};
  border-radius: 50%;
  margin: 10px 0;
`;

const Label = styled.span`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StatusContainer = styled.div`
  margin-top: 20px;
  color: white;
`;

const DBC = ({ A, B, p1Connected, p2Connected }) => {
  const energyA = A ? 'Positiva' : 'Desligada';
  const energyB = B ? 'Negativa' : 'Desligada';
  
  const p1Status = p1Connected ? (A ? 'Energizada (Positiva)' : 'Não energizada') : 'Desconectada';
  const p2Status = p2Connected ? (B ? 'Energizada (Negativa)' : 'Não energizada') : 'Desconectada';

  return (
    <BoardContainer>
      <ColumnContainer>
        <Column>
          <Label>A+</Label>
          {[...Array(10)].map((_, index) => (
            <Pin key={`a-${index}`} active={A} />
          ))}
        </Column>
        <Column>
          <Label>B-</Label>
          {[...Array(10)].map((_, index) => (
            <Pin key={`b-${index}`} active={B} />
          ))}
        </Column>
        <Column>
          <Label>P1</Label>
          {[...Array(10)].map((_, index) => (
            <Pin key={`p1-${index}`} active={p1Connected && A} />
          ))}
        </Column>
        <Column>
          <Label>P2</Label>
          {[...Array(10)].map((_, index) => (
            <Pin key={`p2-${index}`} active={p2Connected && B} />
          ))}
        </Column>
      </ColumnContainer>
      <StatusContainer>
        <div>Variável A (Positiva): {energyA}</div>
        <div>Variável B (Negativa): {energyB}</div>
        <div>Porta P1: {p1Status}</div>
        <div>Porta P2: {p2Status}</div>
      </StatusContainer>
    </BoardContainer>
  );
};

DBC.propTypes = {
  A: PropTypes.bool,
  B: PropTypes.bool,
  p1Connected: PropTypes.bool,
  p2Connected: PropTypes.bool
};

DBC.defaultProps = {
  A: false,
  B: false,
  p1Connected: false,
  p2Connected: false
};

export default DBC;