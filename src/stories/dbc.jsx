import React from 'react';
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
  background-color: #FFD700;
  border-radius: 50%;
  margin: 10px 0;
`;

const Label = styled.span`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
`;

const DBC = () => {
  return (
    <BoardContainer>
      <ColumnContainer>
        <Column>
          <Label>A+</Label>
          {[...Array(10)].map((_, index) => (
            <Pin key={`a-${index}`} />
          ))}
        </Column>
        <Column>
          <Label>B-</Label>
          {[...Array(10)].map((_, index) => (
            <Pin key={`b-${index}`} />
          ))}
        </Column>
        <Column>
          <Label>P1</Label>
          {[...Array(10)].map((_, index) => (
            <Pin key={`p1-${index}`} />
          ))}
        </Column>
        <Column>
          <Label>P2</Label>
          {[...Array(10)].map((_, index) => (
            <Pin key={`p2-${index}`} />
          ))}
        </Column>
      </ColumnContainer>
    </BoardContainer>
  );
};

export default DBC;