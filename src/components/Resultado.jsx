import styled from "@emotion/styled"

const Res = styled.div`
    color: white;
    font-family: "Lato", sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Texto = styled.p`
    
`

const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight: 700;
    }
`
const Imagen = styled.img `
    display: block;
    width: 120px;
`

const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, IMAGEURL, LASTUPDATE, CHANGEPCT24HOUR } = resultado

    return (
        <Res>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="img cripto" />
            <div>
            <Precio> El precio es de: <span> {PRICE} </span> </Precio>

                <Texto> Precio más alto del día: <span> {HIGHDAY} </span> </Texto>
                <Texto> Precio más bajo del día: <span> {LOWDAY} </span> </Texto>
                <Texto> Últimas 24 horas: <span> {CHANGEPCT24HOUR} </span> </Texto>
                <Texto> Última actualización: <span> {LASTUPDATE} </span> </Texto>
            </div>

        </Res>
    )
}

export default Resultado