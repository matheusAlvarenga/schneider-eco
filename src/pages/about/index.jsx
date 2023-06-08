import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import img1 from '../../assets/about-1.png';
import img2 from '../../assets/about-2.png';
import tech1 from '../../assets/tech-1.png';
import tech2 from '../../assets/tech-2.png';
import tech3 from '../../assets/tech-3.png';
import tech4 from '../../assets/tech-4.png';
import tech5 from '../../assets/tech-5.png';
import tech6 from '../../assets/tech-6.png';
import * as S from './styles';
import { Divider } from '../../components/divider';
import { AuthorCard } from '../../components/author-card';
import { TechCard } from '../../components/tech-card';

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
        <S.Title>Tecnologias utilizadas</S.Title>
        <S.Section>
          <S.TechRow>
            <TechCard img={tech1}>React</TechCard>
            <TechCard img={tech2}>React</TechCard>
            <TechCard img={tech3}>React</TechCard>
            <TechCard img={tech4}>React</TechCard>
            <TechCard img={tech5}>React</TechCard>
            <TechCard img={tech6}>React</TechCard>
          </S.TechRow>
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
