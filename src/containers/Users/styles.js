import styled from "styled-components";
import Backgraoud from "../../assets/backgraound.svg";

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






export const Button = styled.button`
  width: 342px;
  height: 74px;
 margin-top: 120px;
  border-radius: 14px;

  background: transparent;
  border: 1px solid #FFFFFF;

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

  img{
    transform: rotate(180deg);
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;

  width: 342px;
  height: 58px;

  border: none;
  outline: none;

p{
  font-style: normal;
  font-weight:normal;
  font-size: 20px;
  line-height:28.13px ;

  color: #FFFFFF;

}

button{
  background: none;
  border: none;
  cursor:pointer;
}


`;
