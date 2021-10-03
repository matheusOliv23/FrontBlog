import styled from 'styled-components'


export const Container = styled.header`
  width: 100%;
  height: 8rem;
  border-bottom: 2px solid #33ff7c ;
  box-shadow:  0 0 1em ; 
`
export const Logo = styled.a`  
  font-size: 1.6rem;
  font-weight: bold;
  color: #33ff7c;  
`
export const Nav = styled.nav`
  display: flex; 
  flex-direction: column;  
  text-align: center;
  align-items: center;

  @media (min-width: 768px){
  flex-direction: row;
  margin-right: 4rem;
  margin-left: 2rem;
  justify-content: space-between;
  }
`
export const Menu = styled.ul`
  display: flex; 
  flex-direction: column;  
  text-align: center; 
  
  @media (min-width: 768px){
    flex-direction: row;
    justify-content: space-between;
    gap: 7rem;
    margin: 2rem;
    font-size: 1.3rem;
  }
`
export const Titulo = styled.li`
  display: flex; 
  flex-direction: column;  
  text-align: center;
  line-height: 1.3rem;

  &:hover{
    color: #33ff7c ;
  }
`