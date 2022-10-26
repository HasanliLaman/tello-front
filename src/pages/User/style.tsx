import styled from "styled-components";

const StyleUser = styled.div`
  background: var(--color-white);
  border-radius: var(--border-radius);
  padding: 3.2rem 2.4rem;
  height: 550px;
  gap: 5rem;
  font-size: 1.4rem;
  line-height: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .user {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    p {
      padding: 1.4rem 1.6rem;
      background: #f2f2f2;
      border-radius: var(--border-radius);
      margin-top: 0.8rem;
    }
  }

  .leaflet-container {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    .user {
      flex-direction: row;
      gap: 3.2rem;

      & > div {
        flex-grow: 1;
      }
    }

    padding: 3.2rem;
  }
`;

export default StyleUser;
