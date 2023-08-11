import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import { useEffect } from 'react'

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

    useEffect(() => {
      const consultarAPI = async () => {
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
        
        const respuesta = await fetch(url)
        console.log(respuesta)

    }
      consultarAPI()
    }, [])
    

    const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas)

    return (


        <form action="">

            <SelectMonedas />
            

            <InputSubmit
                type="text"
                value="Cotizar"
            />


        </form>

    )
}

export default Formulario