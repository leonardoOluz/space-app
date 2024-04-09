/* Componentes criado pessoalmente sem acompanhar o corso. */
/* No momento sem using */
import { styled } from 'styled-components';

const ConteudoBanner = styled.main`
   position: absolute;
   top: 192px;
   right: 15px;
   img {
     max-width: 100%;
     border-radius: 16px;
    }
    h2 {
        width: 22%;
        line-height: 44px;
        font-size: 2.2rem;
        position: absolute;
        top: 65px;
        left: 95px;
        color: #FFFFFF;
    }
`;

const BannerPrincipal = () => {
    return (
        <ConteudoBanner>
            <img src='/src/assets/banner.png' alt='Banner ceu azul' />
            <h2>A galeria mais completa de fotos do espaço!</h2>
        </ConteudoBanner>
    )
};

export default BannerPrincipal;