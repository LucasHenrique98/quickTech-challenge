import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: 240px;
  height: 240px;

  border-radius: 5px;

  background-color: #fff;
  box-shadow: 5px 5px 10px 2px black;

  header {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: #19f;

    border-radius: 5px 5px 0px 0px;

    height: 30px;

    span {
      position: absolute;
      left: 0;

      color: #000;
      font-weight: 800;
    }
  }

  img {
    width: 130px;
    height: 130px;

    align-self: center;

    margin-top: 20px;
  }
  span {
    text-align: center;

    font-size: 18px;
    font-weight: 600;
  }
  :hover {
    box-shadow: 5px 5px 4px 2px black;
  }

  @media (max-width: 600px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 375px) {
    width: 180px;
    height: 180px;

    span {
      font-size: 14px;
    }
  }
`;
