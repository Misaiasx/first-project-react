import styled from "styled-components";
import Backgraoud from "../../assets/background1.svg";
export const Container = styled.div`
  background: url("${Backgraoud}");
  background-size: cover;

  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 40px;
  height: 100vh;
`;
export const Image = styled.img`
  margin-top: 30px;
`;

export const ContainerItens = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;
  padding: 50px 36px;

  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const H1 = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-size: 34px;
  font-weight: bold;
  line-height: 40px;

  text-align: center;

  color: #ffffff;
  margin-bottom: 80px;
`;

export const InputLabel = styled.p`
  font-style: normal;
  font-size: 18px;
  font-weight: bold;
  line-height: 22px;
  letter-spacing: -0.408px;

  color: #ffffff;
  margin-left: 25px;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  width: 342px;
  height: 58px;
  padding-left: 25px;
  margin-bottom: 34px;
  border: none;
  outline: none;

  font-style: normal;
  font-size: 20px;
  font-weight: normal;
  line-height: 28px;

  color: #ffffff;
`;

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 130px;

  border-radius: 14px;

  background: rgba(0, 0, 0, 0.8);
  border: none;

  font-style: normal;
  font-size: 17px;
  font-weight: bold;
  line-height: 28px;

  color: #ffffff;

  cursor: pointer;

  justify-content: center;
  align-items: center;
  display: flex;
  gap: 20px;
  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

