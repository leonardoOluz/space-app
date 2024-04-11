import Titulo from "../Titulo";
import Imagem from "./Imagem";
import Populares from "./Populares";
import Tags from "./Tags";
import { styled } from 'styled-components';

const GaleriaContainer = styled.div`
   display: flex;
   
   `;
const SecaoFluida = styled.section`
   flex-grow: 1;
`;
const ListaImagem = styled.ul`
   display: flex;
   flex-wrap: wrap;
   gap: 1.5rem;
`;
const Galeria = ({ fotos = [], aoFotoSelecionada, aoALternarFavorito, setTag }) => {
    return (
        <>
            <Tags setTag={setTag} />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ListaImagem>
                        {fotos.map(foto => <Imagem
                            aoZoomSolicitado={aoFotoSelecionada}
                            aoALternarFavorito={aoALternarFavorito}
                            key={foto.id}
                            foto={foto}
                        />)}
                    </ListaImagem>
                </SecaoFluida>
                <Populares />

            </GaleriaContainer>

        </>
    )
};

export default Galeria;