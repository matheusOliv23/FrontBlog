import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #fff;
  animation: aparecer 1s;
  animation-direction: normal;

  @keyframes aparecer {
    from {
      transform: translateX(-200px);
    }
    to {
      transform: translateX(120px);
    }
  }

  h2 {
    margin-bottom: 1rem;
    color: #fff;
  }
  a {
    font-size: 1.3rem;
  }

  a:hover {
    color: blue;
  }

  @media (min-width: 1024px) {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  border: 2px solid blue;
  margin-top: 2rem;
  background-color: #121212;

  border: 2px solid #33ff7c;
  box-shadow: 0 0 0.5em;

  @media (min-width: 768px) {
    width: 800px;
  }
`;

export const ImgCard = styled.img`
  // background-image: url(../components/Img/sasithon-prehofer-pixabay.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 10rem;
  width: 10rem;
  margin: 1rem;
`;

export const Texto = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const BtnDel = styled.button`
  color: #fff;
  font-size: 1.2rem;
  background-color: rgb(160, 43, 43);
  border: none;
  padding: 0.3rem;
  border-radius: 2px;
  outline: none;
  cursor: pointer;

  margin-bottom: 1rem;
  &:hover {
    background-color: #fff;
    color: rgb(160, 43, 43);
  }
`;

export const ArtigoStyle = styled.div`
  width: 700px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  line-height: 2rem;
  margin: 0 auto;
  height: auto;
  font-size: 1.2rem;
`;

export const Codes = styled.div`
  width: 700px;
  height: auto;
  border: 2px solid #33ff7c;
`;
