import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow1.svg";
import Trash from "../../assets/trash.svg";
import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";

import {
  Container,
  
  Image,
 
  Button,
  User,
} from "./styles";

function Users() {

  const [users, setUsers ] = useState([])
  const history = useHistory();

 


  useEffect(()=>{
    async function fetchUsers(){
      const {data: newUsers} = await axios.get("http://localhost:3001/users/");
    
      setUsers(newUsers);

    }

    fetchUsers() 
  
  },[])


  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter((user) => user.id === userId);
   
    setUsers(newUsers);
  }
 function goBackPage() {
  history.push("/")
 }


  return (
    <Container>
      <Image alt="logo-imagem" src= {Avatar} />
      <ContainerItens isBlur={true}>
        <H1>Usuarios</H1>
        
      
        <ul>
          {users.map((user)=>(
          <User key ={user.id}>
            <p>{user.name} - {user.age}</p>
            <button onClick={()=> deleteUser(user.id)}><img src={Trash} alt="trash can"/></button>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage}>
        <img alt="seta" src={Arrow} />Voltar
       
        </Button>
      </ContainerItens>
    </Container>
  );
          }

export default Users;
