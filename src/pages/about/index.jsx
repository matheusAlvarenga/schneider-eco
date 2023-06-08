import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import img1 from '../../assets/about-1.png';
import * as S from './styles';

export function AboutPage() {
  return (
    <S.Wrapper>
      <Header />
      <S.Hero background={img1}>
        <S.HeroTitle>
          Conheça mais sobre esse projeto
        </S.HeroTitle>
      </S.Hero>
      <Footer />
    </S.Wrapper>
  );
}
