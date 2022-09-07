import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const HeaderComponents = styled.div`
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem;
  border-radius: 0.4rem;
  background-color: black;
  
  a {
    padding: 0.8rem;
    text-decoration: none;
  }

  h1 {
    color: whitesmoke;
    text-decoration: none;
    font-size: 1.3rem;
  }

  span {
    color: red;
    text-decoration: none;
    font-size: 1.5rem;
    
  }
`;
