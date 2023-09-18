import { DemoContent } from '../../../components/demo-content';
import { DemoSidebar } from '../../../components/demo-sidebar';
import { DemoText } from '../../../components/demo-text';
import { DemoTitle } from '../../../components/demo-title';
import { FlexColumn } from '../../../components/flex-column';
import course1 from '../../../assets/course-1.png';
import course2 from '../../../assets/course-2.png';
import course3 from '../../../assets/course-3.png';
import course4 from '../../../assets/course-4.png';

import * as S from './styles';
import { CourseCard } from '../../../components/course-card';
import { RewardBadge } from '../../../components/reward-badge';

export function MainPage() {
  return (
    <S.Container>
      <DemoSidebar />
      <DemoContent>
        <FlexColumn>
          <DemoTitle>Seja bem-vindo</DemoTitle>
          <DemoText>Aqui esta um resumo do seu mes no sistema.</DemoText>
        </FlexColumn>
        <DemoTitle>Cursos assistidos</DemoTitle>
        <S.List>
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
        </S.List>
        <DemoTitle>Recompensas resgatadas</DemoTitle>
        <S.RewardsList>
          <RewardBadge points="25.000 pontos" text="Vale-viagem para um destino" />
          <RewardBadge points="25.000 pontos" text="Vale-viagem para um destino" />
          <RewardBadge points="25.000 pontos" text="Vale-viagem para um destino" />
          <RewardBadge points="25.000 pontos" text="Vale-viagem para um destino" />
          <RewardBadge points="25.000 pontos" text="Vale-viagem para um destino" />
          <RewardBadge points="25.000 pontos" text="Vale-viagem para um destino" />
          <RewardBadge points="25.000 pontos" text="Vale-viagem para um destino" />
          <RewardBadge points="25.000 pontos" text="Vale-viagem para um destino" />
        </S.RewardsList>
      </DemoContent>
    </S.Container>
  );
}
