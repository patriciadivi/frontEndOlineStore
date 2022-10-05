import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const CardComponents = styled.div`

section {
  display: flex;
  justify-content: center;
  align-items: center;

  div {
      display: flex;
      flex-wrap: wrap;
      max-width: 80%;
      div {
        /* background-color: blue; */
        display: flex;
        /* flex-direction: column; */
        border-radius: 0.5rem;
        border: 1px solid gray;
        margin: 0.8rem auto 1rem;
        padding: 0.5rem;
        /* width: 210px; */
        img {
          width: 90px;
          margin: 0.8rem auto 0;
        }

        p {
          padding: 0.5rem;
          text-align: center;
          max-width: 200px;
        }

        span {
          color: darkgreen;
          margin: auto 0.8rem;
          font-size: 16pt;
        }

        button {
          width: 25px;
          height: 25px;
          margin: auto 4px;
          transition: 0.2s;
          :hover {
            background-color: rgba(0, 0, 0, 0.8);
            color: red;
            border-radius: 0 0.4rem 0.4rem 0;
            border: 1px solid red;
          }
        }
      }
        /* background-color: red;     */
  }
}

`;
