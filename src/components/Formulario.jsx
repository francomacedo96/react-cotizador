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

    const monedas = [
        { id: "USD", nombre: "Dolar de Estados Unidos" },
        { id: "MXN", nombre: "Peso Mexicano" },
        { id: "EUR", nombre: "Euro" },
        { id: "GBP", nombre: "Libra esterlina" },
        { id: "UYU", nombre: "Peso Uruguayo" }
    ]

    const [SelectMonedas] = useSelectMonedas("elige tu moneda", monedas)
    const [SelectCripto] = useSelectMonedas("elige tu cripto")

    return (


        <form action="">

            <SelectMonedas />
            <SelectCripto />

            <InputSubmit
                type="text"
                value="Cotizar"
            />


        </form>

    )
}

export default Formulario