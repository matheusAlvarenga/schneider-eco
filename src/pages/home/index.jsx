import * as Icon from 'react-icons/fa';
import { Button } from '../../components/button';
import { Header } from '../../components/header';
import img1 from '../../assets/home-1.png';
import * as S from './styles';
import { Badge } from '../../components/badge';

export function Home() {
  return (
    <S.Wrapper>
      <Header />
      <S.Row>
        <S.Column>
          <S.Title>
            Mudando o
            {' '}
            <S.Highlight>Mundo</S.Highlight>
            {' '}
            a cada recompensa!
          </S.Title>
          <Button>Assista o Vídeo Pitch</Button>
        </S.Column>
        <S.Column>
          <S.Image src={img1} />
        </S.Column>
      </S.Row>
      <S.Row>
        <Badge icon={<Icon.FaVideo />}>Cursos Online</Badge>
        <Badge icon={<Icon.FaLightbulb />}>Desafios</Badge>
        <Badge icon={<Icon.FaStar />}>Ranking</Badge>
        <Badge icon={<Icon.FaTrophy />}>Recompensas</Badge>
        <Badge icon={<Icon.FaRecycle />}>Um Mundo Melhor</Badge>
      </S.Row>
    </S.Wrapper>
  );
}
