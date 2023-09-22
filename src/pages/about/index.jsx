import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import img1 from '../../assets/about-1.png';
import img2 from '../../assets/about-2.png';
import img3 from '../../assets/about-3.png';
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
      <S.Section>
        <S.Row>
          <S.TextSection>
            <S.SmallTitle>Ganhe recompensas</S.SmallTitle>
            <S.Subtitle>e ajude o planeta: junte-se agora!</S.Subtitle>
            <S.Text>
              Faça parte de uma comunidade que promove a sustentabilidade e a
              ecologia no ambiente de trabalho. Assista a vídeos educativos,
              participe de desafios e ganhe recompensas por suas boas ações ecológicas.
              Junte-se a nós hoje mesmo e faça a diferença para um futuro mais sustentável!
            </S.Text>
          </S.TextSection>
          <S.Image src={img2} />
        </S.Row>
      </S.Section>
      <Divider height="8rem" />
      <S.Column>
        <S.Title>Tecnologias utilizadas</S.Title>
        <S.Section>
          <S.TechRow>
            <TechCard img={tech1}>React</TechCard>
            <TechCard img={tech2}>Styled Components</TechCard>
            <TechCard img={tech3}>UX Writing e Storytelling</TechCard>
            <TechCard img={tech4}>UX/UI Design</TechCard>
            <TechCard img={tech5}>ESG</TechCard>
            <TechCard img={tech6}>HTML + CSS</TechCard>
          </S.TechRow>
        </S.Section>
      </S.Column>
      <Divider height="8rem" />
      <S.Column>
        <S.Title>O Desafio</S.Title>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <S.Text2>
            Desenvolver um sistema sustentável e ecológico apresenta uma série de desafios
            únicos. Primeiramente, é necessário garantir a integração perfeita entre as
            diferentes áreas de conhecimento, como tecnologia, sustentabilidade e
            engajamento do usuário. A criação de um sistema eficaz requer uma compreensão
            profunda dos princípios de sustentabilidade e das melhores práticas de
            engajamento para incentivar a mudança de comportamento.
            <br />
            <br />
            Além disso, outro desafio é a necessidade de equilibrar a complexidade técnica
            com uma experiência do usuário intuitiva. A interface deve ser amigável e
            atrativa, garantindo que os funcionários possam facilmente acessar vídeos
            educativos, participar de desafios e reivindicar suas recompensas. A combinação
            de conhecimentos em UX Writing, UX Design e React é fundamental para criar uma
            experiência coesa e agradável, ao mesmo tempo em que oferece funcionalidades
            robustas e eficientes para o sistema.
          </S.Text2>
        </div>
      </S.Column>
      <Divider height="8rem" />
      <S.Section>
        <S.Row>
          <S.Image src={img3} />
          <S.TextSection>
            <S.SmallTitle>Juntos, criando um futuro sustentável e recompensador</S.SmallTitle>
            <S.Text>
              Combinando conhecimentos em sustentabilidade, tecnologia e engajamento do usuário,
              enfrentamos os desafios de criar um sistema que promove a consciência ecológica.
              Através de desafios, vídeos educativos e recompensas, capacitamos nossos
              funcionários a adotar práticas sustentáveis. Juntos, estamos construindo um
              futuro onde a sustentabilidade é recompensada, impulsionando mudanças positivas
              em prol do nosso planeta.
            </S.Text>
          </S.TextSection>
        </S.Row>
      </S.Section>
      <Divider height="8rem" />
      <S.Column>
        <S.Title>Nossa equipe</S.Title>
        <S.Section>
          <S.SmallRow>
            <AuthorCard text="Desenvolvedor" name="Matheus Alvarenga" />
            <AuthorCard text="Designer" name="Heloisa Ridolfi" />
            <AuthorCard text="Desenvolvedora" name="Ana Luiza" />
            <AuthorCard text="Product Owner" name="Barbara Marins" />
            <AuthorCard text="Desenvolvedora" name="Luana Batista" />
          </S.SmallRow>
        </S.Section>
      </S.Column>
      <Divider height="8rem" />
      <Footer />
    </S.Wrapper>
  );
}
