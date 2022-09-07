import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const SearchComponents = styled.div`
  /* border: 5px solid gray; */
  /* display: flex; */

  section {
    /* border: 5px solid black; */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    /* align-content: center; */

    div {
      display: flex;

      input {
        border: 1px solid gray;
        border-radius: 0.4rem 0 0 0.4rem;
        outline-style: none;
        padding: 0.5rem;
      }

      button {
        border-radius: 0 0.4rem 0.4rem 0;
        transition: 0.2s;
        :hover {
          background-color: rgba(0, 0, 0, 0.9);
          color: red;
        }
      }
    }

    aside {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      padding: 0.8rem;

      div {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        align-items: center;
        justify-content: center;

        a {
          border-radius: 0.5rem;
          border: 1px solid gray;
          text-decoration: none;

          aside {
            width: 180px;
            max-height: 70%;

            div {
              p {
                color: rgba(0, 0, 0, 0.9);
                text-align: center;
              }
            }
          }
        }

        div {
          button {
            border: 1px solid salmon;
            width: 210px;
            height: 50px;
            border-radius: 0.3rem;
            transition: 0.2s;
            font-size: 0.9rem;
            :hover {
              background-color: rgba(0, 0, 0, 0.9);
              color: red;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;

export const SidebarComponents = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  label {
    border: 1px solid gray;
    padding: 0.2rem;
    /* background-color: black; */
    /* color: whitesmoke; */
    margin: 0.2rem;
    border-radius: 0.3rem;
    :hover {
      background-color: rgba(0, 0, 0, 0.2);
      color: red;
    }
  }
`;
