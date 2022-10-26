import styled from "styled-components";

const StyleUserProfile = styled.div`
  background-color: var(--color-white);
  border-radius: var(--border-radius);
  padding: 3.2rem 2.4rem;
  color: var(--color-dark-gray);

  h2 {
    margin-bottom: 3.2rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    font-size: 1.6rem;
    line-height: 2.4rem;

    .logout {
      display: flex;
      align-items: center;
      gap: 1.6rem;
    }

    li {
      a {
        display: flex;
        align-items: center;
        gap: 1.6rem;
      }
      cursor: pointer;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
      }
    }

    .active {
      color: var(--color-green);

      img {
        filter: brightness(0) saturate(100%) invert(58%) sepia(85%)
          saturate(398%) hue-rotate(91deg) brightness(98%) contrast(86%);
      }
    }
  }
`;

export default StyleUserProfile;
