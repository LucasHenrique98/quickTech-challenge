import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 240px);
  grid-template-rows: auto;
  grid-row-gap: 70px;
  grid-column-gap: 120px;

  justify-content: center;
  align-items: center;

  width: 99vw;
  height: 100%;

  margin-top: 60px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(4, 200px);
    grid-column-gap: 100px;
    background-size: cover;
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 200px);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 200px);
  }

  @media (max-width: 375px) {
    grid-template-columns: repeat(2, 180px);
    grid-column-gap: 10px;
    grid-row-gap: 30px;
  }
`;
