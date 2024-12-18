import styled from "styled-components";

export const CardContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;

  .ellipse {
    position: absolute;
    left: -12%;
    top: 1%;
    width: 10rem;

    @media (max-width: 1200px) {
      display: none;
    }
  }
`;

export const CardContactContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;
  gap: 2rem;

  @media (min-width: 1200px) {
    flex-direction: row;
  }

  .description {
    max-width: 40rem;
    text-align: start;

    h2 {
      color: ${({ theme }) => theme.secondColor};
      font-size: 1.5rem;
      margin-bottom: 1rem;
      line-height: 1.2;

      @media (min-width: 768px) {
        font-size: 2rem;  
      }

      @media (min-width: 994px) {
        font-size: 2.5rem;  
      }
    }

    p {
      color: ${({ theme }) => theme.gray};
      max-width: 35rem;
      line-height: 1.5;
    }
  }

  .contact {
    img {
      width: 10rem;
      object-fit: cover;

      @media (min-width: 768px) {
        width: 20rem;
      }

      @media (min-width: 1200px) {
        width: 30rem;
      }
    }
  }
`;
