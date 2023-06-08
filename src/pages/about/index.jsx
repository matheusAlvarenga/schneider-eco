import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import img1 from '../../assets/about-1.png';
import img2 from '../../assets/about-2.png';
import * as S from './styles';
import { Divider } from '../../components/divider';
import { AuthorCard } from '../../components/author-card';

export function AboutPage() {
  return (
    <S.Wrapper>
      <Header />
      <S.Hero background={img1}>
        <S.HeroTitle>
          Conheça mais sobre esse projeto
        </S.HeroTitle>
      </S.Hero>
      <Divider height="8rem" />
      <S.Column>
        <S.Title>Enrol for a couse now</S.Title>
        <S.Section>
          <S.Row>
            <S.TextSection>
              <S.SmallTitle>Nossos desafios</S.SmallTitle>
              <S.Subtitle>Enquanto voce ajuda a melhorar o mundo</S.Subtitle>
              <S.Text>
                Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum,
                dignissim pharetra. Aliquam Lorem ipsum dolor sit at, consectetur
                adipielit. Facilisi fermentum, dignissim pharetra. Aliquam
              </S.Text>
            </S.TextSection>
            <S.Image src={img2} />
          </S.Row>
        </S.Section>
      </S.Column>
      <Divider height="8rem" />
      <S.Column>
        <S.Title>Enrol for a couse now</S.Title>
        <S.Section>
          <S.Row>
            <S.Image src={img2} />
            <S.TextSection>
              <S.SmallTitle>Nossos desafios</S.SmallTitle>
              <S.Subtitle>Enquanto voce ajuda a melhorar o mundo</S.Subtitle>
              <S.Text>
                Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum,
                dignissim pharetra. Aliquam Lorem ipsum dolor sit at, consectetur
                adipielit. Facilisi fermentum, dignissim pharetra. Aliquam
              </S.Text>
            </S.TextSection>
          </S.Row>
        </S.Section>
      </S.Column>
      <Divider height="8rem" />
      <S.Column>
        <S.Title>Nossa equipe</S.Title>
        <S.Section>
          <S.SmallRow>
            <AuthorCard text="Desenvolvedor" name="Matheus Alvarenga" />
            <AuthorCard text="Designer" name="Heloisa Ridolfi" />
            <AuthorCard text="Product Owner" name="Barbara Marins" />
          </S.SmallRow>
        </S.Section>
      </S.Column>
      <Divider height="8rem" />
      <Footer />
    </S.Wrapper>
  );
}
