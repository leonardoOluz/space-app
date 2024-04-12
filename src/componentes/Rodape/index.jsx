import { styled } from 'styled-components';

const RodapeEstilizado = styled.footer`
   align-items: center;
   color: white;
   font-size: 16px;
   display: flex;
   justify-content: space-between;
   gap: 5rem;
   background-color: #041833;
   padding: 0 2rem;
`;

const ListaDoRodapeEstilizada = styled.ul`
    display: flex;
    gap: 1.5rem;
    list-style: none;
    align-items: center;
`;

const Rodape = () => {
    return (
        <RodapeEstilizado>
            <nav>
                <ListaDoRodapeEstilizada>
                    <li>
                        <a href='https://www.facebook.com/?locale=pt_BR'>
                            <img src='/imagens/sociais/facebook.svg' alt='logo facebook' />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/'>
                            <img src='/imagens/sociais/twitter.svg' alt='logo twitter' />
                        </a>
                    </li>
                    <li>
                        <a href='https://twitter.com/home?lang=pt-br'>
                            <img src='/imagens/sociais/instagram.svg' alt='logo instagram' />
                        </a>
                    </li>
                </ListaDoRodapeEstilizada>
            </nav>
            <p>
                Desenvolvido por Leonardo Luz
            </p>
        </RodapeEstilizado>
    )
};

export default Rodape;
