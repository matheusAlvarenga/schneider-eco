import * as Icon from 'react-icons/fa';
import { Button } from '../../components/button';
import { Header } from '../../components/header';
import img1 from '../../assets/home-1.png';
import img2 from '../../assets/home-2.png';
import img3 from '../../assets/home-3.png';
import course1 from '../../assets/course-1.png';
import course2 from '../../assets/course-2.png';
import course3 from '../../assets/course-3.png';
import course4 from '../../assets/course-4.png';
import ins1 from '../../assets/instructor-1.png';
import ins2 from '../../assets/instructor-2.png';
import ins3 from '../../assets/instructor-3.png';
import ins4 from '../../assets/instructor-4.png';
import ins5 from '../../assets/instructor-5.png';
import * as S from './styles';
import { Badge } from '../../components/badge';
import { Divider } from '../../components/divider';
import { CourseCard } from '../../components/course-card';
import { Footer } from '../../components/footer';
import { InstructorCard } from '../../components/instructor-card';

export function Home() {
  return (
    <S.Wrapper>
      <Header />
      <S.Section>
        <S.Row>
          <S.Column>
            <S.Title>
              Mudando o
              {' '}
              <S.Highlight>Mundo</S.Highlight>
              {' '}
              a cada recompensa!
            </S.Title>
            <Button onClick={() => window.open('https://youtu.be/nnsXNaaj6b8')}>Assista o Vídeo Pitch</Button>
          </S.Column>
          <S.Column>
            <S.Image src={img1} />
          </S.Column>
        </S.Row>
      </S.Section>
      <S.Section>
        <S.Row>
          <Badge icon={<Icon.FaVideo />}>Cursos Online</Badge>
          <Badge icon={<Icon.FaLightbulb />}>Desafios</Badge>
          <Badge icon={<Icon.FaStar />}>Ranking</Badge>
          <Badge icon={<Icon.FaTrophy />}>Recompensas</Badge>
          <Badge icon={<Icon.FaRecycle />}>Um Mundo Melhor</Badge>
        </S.Row>
      </S.Section>
      <Divider height="8rem" />
      <S.Section>
        <S.Row>
          <S.TextSection>
            <S.SmallTitle>Supere desafios</S.SmallTitle>
            <S.Subtitle>e ganhe recompensas sustentáveis agora!</S.Subtitle>
            <S.Text>
              Aceite nossos desafios ecológicos diários para impulsionar sua jornada
              rumo à sustentabilidade. Assista a vídeos inspiradores, participe ativamente
              e ganhe recompensas incríveis por suas ações ecológicas positivas. Junte-se
              a nós hoje mesmo e transforme desafios em oportunidades para um mundo mais verde!
            </S.Text>
          </S.TextSection>
          <S.Image2 src={img2} />
        </S.Row>
      </S.Section>
      <Divider height="8rem" />
      <S.Section>
        <S.Column>
          <S.SessionTitle>Alguns de nossos cursos</S.SessionTitle>
          <S.Row>
            <CourseCard img={course1}>
              Economia de Agua
            </CourseCard>
            <CourseCard img={course2}>
              Ecologia no dia-a-dia
            </CourseCard>
            <CourseCard img={course3}>
              Reciclagem
            </CourseCard>
            <CourseCard img={course4}>
              Economia de Energia
            </CourseCard>
          </S.Row>
        </S.Column>
      </S.Section>
      <Divider height="8rem" />
      <S.Section>
        <S.Row>
          <S.Image2 src={img3} />
          <S.TextSection>
            <S.SmallTitle>Aprenda, cresça</S.SmallTitle>
            <S.Subtitle>e ganhe recompensas sustentáveis agora!</S.Subtitle>
            <S.Text>
              Explore nossa variedade de cursos ecológicos e aprofunde seus conhecimentos
              sobre sustentabilidade. Aprenda de forma interativa, conclua os desafios
              propostos e seja recompensado por suas conquistas. Junte-se a nossa comunidade
              e abra caminho para um futuro sustentável, enquanto ganha recompensas exclusivas!
            </S.Text>
          </S.TextSection>
        </S.Row>
      </S.Section>
      <Divider height="8rem" />
      <S.Section>
        <S.Column>
          <S.SessionTitle>Conheça nossos instrutores</S.SessionTitle>
          <S.Row>
            <InstructorCard img={ins1} name="John Mark" subtitle="Especialista em ESG na Amazon" />
            <InstructorCard img={ins2} name="Erick Marques" subtitle="Eco Coach" />
            <InstructorCard img={ins3} name="James Smith" subtitle="Referencia em ESG na Schneider" />
            <InstructorCard img={ins4} name="Lora Shrof" subtitle="Engenheira Ambiental Senior" />
            <InstructorCard img={ins5} name="Zeng Chin" subtitle="Gestor de Pessoas no Facebook" />
          </S.Row>
        </S.Column>
      </S.Section>
      <Divider height="8rem" />
      <Footer />
    </S.Wrapper>
  );
}
