// DBC.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BoardContainer = styled.div`
  width: 400px;
  height: 500px;
  background-color: #00979D;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  position: relative;
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

const LED = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#00FF00' : '#333333'};
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: ${props => props.active ? '0 0 10px #00FF00' : 'none'};
`;

const DBC = ({ A, B, p1Connected, p2Connected }) => {
  const energyA = A ? 'Positiva' : 'Desligada';
  const energyB = B ? 'Negativa' : 'Desligada';
  
  const p1Status = p1Connected ? 'Conectada' : 'Desconectada';
  const p2Status = p2Connected ? 'Conectada' : 'Desconectada';

  const ledActive = A && B;

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
            <Pin key={`p1-${index}`} active={p1Connected} />
          ))}
        </Column>
        <Column>
          <Label>P2</Label>
          {[...Array(10)].map((_, index) => (
            <Pin key={`p2-${index}`} active={p2Connected} />
          ))}
        </Column>
      </ColumnContainer>
      <LED active={ledActive} />
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