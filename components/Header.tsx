import Link from 'next/link'
import { Logo, Container, Nav, Menu, Titulo } from '../styles/Header'


const Header: React.FC = () => {
  return (

   
      <Container>
        <Nav>
          <Link href="/">
            <Logo>&lt;FRONT&frasl;&gt;</Logo>
          </Link>
          <Menu>
            <Titulo>
              <Link href="/">
                <a>Artigos</a>
              </Link>
            </Titulo>
            <Titulo>
              <Link href="/">
                <a>Criar Blog</a>
              </Link>
            </Titulo>
            <Titulo>
              <Link href="/">
                <a>Sobre Mim</a>
              </Link>
            </Titulo>
          </Menu>
        </Nav>
      </Container>
     
  )
}

export default Header
