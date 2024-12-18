import styled from 'styled-components';

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundSecond};
  border-radius: 10px;
  padding: 1.5rem;
  margin: 5rem 0 2.5rem;

  .AboutImg {
    width: 10rem;
    border-radius: 5px;
    margin-bottom: 2rem;
  }

  .aboutContent {
    padding: 0 1rem;
    text-align: start;
    max-width: 31rem;

    h2 {
      color: ${({ theme }) => theme.cyan_500};
    }

    p {
      color: ${({ theme }) => theme.textPrimary};
    }

    strong {
      color: ${({ theme }) => theme.gray_easy};

      a {
        color: ${({ theme }) => theme.gray};
        border-bottom: 1px solid ${({ theme }) => theme.gray};
        transition: color 0.3s, border-bottom 0.3s;

        &:hover {
          color: ${({ theme }) => theme.cyan_400};
          border-bottom: 1px solid ${({ theme }) => theme.cyan_400};
        }
      }
    }

    .aboutButton {
      display: flex;
      gap: 1.5rem;

      @media (max-width: 468px) {
        flex-direction: column;
      }
    }
  }

  .aboutDescription {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 994px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;

    .AboutImg {
      width: 320px;
    }

    .aboutContent {
      width: 40rem;
      margin-bottom: 3rem;
    }
  }
`;
