import {styled} from 'styled-components';

const Titulo = styled.h2`
  font-size: 32px;
  color: #7B78E6;
  align-items: ${props => props.$alinhamento ? props.$alinhamento: 'left'};
`;

export default Titulo;