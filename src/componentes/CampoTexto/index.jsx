import { styled } from 'styled-components';
import Lupa from './search.png';

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;

const InputTexto = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;   
    `;

const IconeLupa = styled.img`
 position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;

const CampoTexto = ({setFiltro}) => {
    return (

        <ContainerEstilizado>
            <InputTexto onChange={(evento) => {setFiltro(evento.target.value)}} type='text' placeholder='O que você procura?'/>
            <IconeLupa src={Lupa} alt='icone de lupa'/>
        </ContainerEstilizado>
    )
}

export default CampoTexto;