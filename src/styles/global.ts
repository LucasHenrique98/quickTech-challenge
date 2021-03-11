import styled from 'styled-components';

export const Body = styled.body`
  width: 100%;
  height: 100%;

  overflow: hidden;

  font-family: sans-serif;

  background-image: url('/assets/background.jpg');
  background-attachment: fixed;
  background-position: right;
  background-size: 100% auto;
  background-size: cover;

  a {
    text-decoration: none;
    color: black;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  }
`;
