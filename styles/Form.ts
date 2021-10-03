import styled from "styled-components";


export const Container = styled.div` 
  width: 100%;
  text-align: center;
  margin: 20px 0 10px;

  transition: transform 3s;
  transform: scale(0.5) translateY(1);

   @keyframes aparecer{
   from{ transform: translateX(0px)}; 
   to {transform: translateX(800px)};
 }


  @media (min-width:768px){
    width: 500px;
    border:2px solid white;
    border-radius: 2px;
    height: 80vh; 
    left: 50%;
    margin: -130px 0 0 -210px;                 
    position: absolute; 
    top: 20% ;
  }
`

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  padding:1rem ;
  width: 100%;
  height: 100vh;

  label{
  margin-bottom: 2rem;  
  font-weight: 500;
  font-size: 1.3rem;


  }

  input{
  border: 1px solid green;
  border-radius: 0.5rem;
  background-color:  rgb(231, 223, 223);
  height: 2rem;
  padding: 0 2rem;
  outline: none;
  font-size: 1.5rem;
  text-align: left;
  width: 100%;

  &:focus{
    border-color: #000;
  }
  }
  
  @media (min-width: 768px){
    height: 500px;
  }
  
`
export const ButtonForm = styled.button`
  text-transform: uppercase;
  background-color: #181818;
  cursor: pointer;
  width: 50%;
  border-radius: 2px;

  font-size: 1.2rem;
  color: rgb(231, 223, 223);
  padding: 1rem 2rem;
  border: 2px solid #fff;
  margin-bottom: 1rem;

  &:hover{
    background-color: green;
  }
`

export const TextForm = styled.textarea`
  border-radius: 0.5rem;
  margin-bottom: 5rem;
  font-size: 1.5rem;
  vertical-align: top;
  height: 5em;
  resize: vertical;

  &:focus{
    border-color: #000;
  }
`