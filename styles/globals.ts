import {createGlobalStyle} from 'styled-components'


export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');
  html,
body {
  padding: 0;
  margin: 0;  
  font-family: Roboto, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

body{
  background:#121214 ;
  color: #e1e1e6;
}

a {
  color: inherit;
  text-decoration: none;  
  cursor: pointer;
}

* {
  box-sizing: border-box;
  list-style: none;
}

`

