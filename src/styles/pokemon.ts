import styled from 'styled-components';

export const Body = styled.div`
  position: fixed;

  display: flex;
  justify-content: center;

  width: 100%;
  height: 100vh;

  background-image: url('/assets/background.jpg');
  background-attachment: fixed;
  background-position: right;

  .card {
    display: flex;
    justify-content: space-around;

    position: relative;

    width: 1000px;
    height: 300px;

    border: 2px solid gray;
    border-radius: 5px;

    background-color: #fff;

    margin-top: 60px;

    .pokemon {
      display: flex;
      flex-direction: column;
      justify-content: center;

      margin-left: 20px;
      margin-top: 20px;
    }

    .pokemonStats {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .pokemonType {
      background-color: red;
      color: white;

      border-radius: 5px;

      margin-left: 5px;
      text-align: center;
    }

    .sprites {
      width: 50px;
      height: 50px;
    }

    .status {
      display: flex;
      flex-direction: column;

      font-weight: bold;
    }

    .leftContainer {
      display: flex;
      align-items: center;
    }

    header {
      background-color: gray;

      font-size: 20px;
      font-weight: bold;

      height: 30px;
      width: 100%;

      position: absolute;
    }

    img {
      width: 200px;
      height: 200px;
    }
  }
`;
