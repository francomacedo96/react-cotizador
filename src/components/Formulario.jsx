import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    text-align: center;
    transition: background-color .3s ease;
    cursor: pointer;

    &:hover {
        background-color: #797de6;
    }
`

const Formulario = () => {
    const [SelectMonedas] = useSelectMonedas()

    SelectMonedas()

    return (


        <form action="">

            <InputSubmit
                type="text"
                value="Cotizar"
            />


        </form>

    )
}

export default Formulario