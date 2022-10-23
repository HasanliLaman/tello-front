import styled from "styled-components";

const StyleCommentsContainer = styled.section`
  padding-bottom: 8.8rem;

  & > p {
    padding: 4rem 0 2rem;
    font-size: 1.7rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    padding-bottom: 14rem;
  }
`;

export default StyleCommentsContainer;
