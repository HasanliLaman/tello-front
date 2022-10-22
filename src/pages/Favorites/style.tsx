import styled from "styled-components";

const StyleFavorites = styled.section`
  padding: 4rem 0 8.8rem;

  h2 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.8rem;
    color: #4f4f4f;
    margin-bottom: 2.4rem;
  }

  .products {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.4rem 1.6rem;
  }

  @media (min-width: 768px) {
    padding: 4rem 0rem 17rem;

    h2 {
      margin-bottom: 4.8rem;
    }

    .products {
      grid-template-columns: repeat(3, 1fr);
      gap: 3.2rem 2.2rem;
    }
  }

  @media (min-width: 1000px) {
    .products {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default StyleFavorites;
