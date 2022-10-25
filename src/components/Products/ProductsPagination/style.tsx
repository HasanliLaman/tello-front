import styled from "styled-components";

const StyleProductsPagination = styled.div`
  .previous,
  .next {
    width: 36px;
    height: 36px;
    border: 1px solid #e0e0e0;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .pages {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    font-size: 1.5rem;
    margin-top: 5rem;
  }

  .page {
    width: 32px;
    height: 40px;
    background: var(--color-green);
    border-radius: var(--border-radius);
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > ul {
    display: flex;
    font-size: 2rem;
    line-height: 2.8rem;
    color: #2e3a59;
    gap: 2.2rem;
    justify-content: center;
    margin-top: 5.6rem;
    align-items: center;

    li {
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    .page {
      height: 32px;
    }

    & > ul {
      gap: 4rem;
      color: #4f4f4f;
      margin-top: 7.6rem;
    }
  }
`;

export default StyleProductsPagination;
