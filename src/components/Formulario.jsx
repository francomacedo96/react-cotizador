import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import { useState, useEffect } from 'react'
import Error from './Error'

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
    margin-top: 30px;

    &:hover {
        background-color: #797de6;
    }
`

const Formulario = () => {

    const [cripto, setCripto] = useState([])
    const [error, setError] = useState(false)


    const [moneda, SelectMon] = useSelectMonedas("Elige tu moneda", monedas)
    const [criptomoneda, SelectCripto] = useSelectMonedas("Elige tu cripto", cripto)

    useEffect(() => {
        const consultarAPI = async () => {

            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"

            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const arrayCryptos = resultado.Data.map(cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName,
                }

                return objeto;
            })
            setCripto(arrayCryptos)

        }
        consultarAPI()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        if ([moneda, criptomoneda].includes("")) {
            console.log("vacio")
            setError(true)
        }

        console.log("enviando")

    }

    return (
        <>
            {error && <Error>Todos los campos obligatorios</Error>}
            <form onSubmit={handleSubmit}>

                <SelectMon />
                <SelectCripto />

                <InputSubmit
                    type="submit"
                    value="Cotizar"
                />


            </form>
        </>
    )
}

export default Formulario