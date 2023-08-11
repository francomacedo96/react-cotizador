import styled from '@emotion/styled'

const Texto = styled.div `
    background-color: #fc4747;
    color: #fff;
    padding: 15px;
    font-size: 18px;
    text-transform: uppercase;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    text-align: center;
    border-radius: 10px;
`

const Error = ({children}) => {
  return (
    <Texto> {children} </Texto>
  )
}

export default Error