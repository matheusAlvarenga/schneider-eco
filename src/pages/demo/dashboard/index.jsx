import { BarChart } from '../../../components/bar-chart';
import { CourseCard } from '../../../components/course-card';
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
import { Divider } from '../../../components/divider';
import { ChallengeDataCard } from '../../../components/challenge-data-card';

export function DashboardPage() {
  return (
    <S.Container>
      <DemoSidebar />
      <DemoContent>
        <FlexColumn>
          <DemoTitle>Dados gerais</DemoTitle>
          <DemoText>Dados gerais sobre os usuarios do sistema.</DemoText>
        </FlexColumn>
        <BarChart title="Usuarios ativos nos utimos 7 dias" value={20} totalValue={40} unit="usuarios" />
        <BarChart title="Usuarios ativos nos utimos 7 dias" value={20} totalValue={40} unit="usuarios" />
        <BarChart title="Usuarios ativos nos utimos 7 dias" value={20} totalValue={40} unit="usuarios" />
        <BarChart title="Usuarios ativos nos utimos 7 dias" value={20} totalValue={40} unit="usuarios" />
        <Divider height="4rem" />
        <FlexColumn>
          <DemoTitle>Desafios</DemoTitle>
          <DemoText>Aqui estao os dados dos usuarios que fazem desafios.</DemoText>
        </FlexColumn>
        <S.List>
          <ChallengeDataCard
            title="Reciclagem Consciente"
            img={course1}
            data={['1.185 Concluiram',
              '2.841 Em andamento',
              '4.026 Inscritos']}
          />
          <ChallengeDataCard
            title="Reciclagem Consciente"
            img={course1}
            data={['1.185 Concluiram',
              '2.841 Em andamento',
              '4.026 Inscritos']}
          />
          <ChallengeDataCard
            title="Reciclagem Consciente"
            img={course1}
            data={['1.185 Concluiram',
              '2.841 Em andamento',
              '4.026 Inscritos']}
          />
          <ChallengeDataCard
            title="Reciclagem Consciente"
            img={course1}
            data={['1.185 Concluiram',
              '2.841 Em andamento',
              '4.026 Inscritos']}
          />
          <ChallengeDataCard
            title="Reciclagem Consciente"
            img={course1}
            data={['1.185 Concluiram',
              '2.841 Em andamento',
              '4.026 Inscritos']}
          />
        </S.List>
        <Divider height="4rem" />
        <FlexColumn>
          <DemoTitle>Video aulas</DemoTitle>
          <DemoText>Aqui estao os dados de usuarios de alguns cursos.</DemoText>
        </FlexColumn>
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
          <CourseCard img={course4}>
            Economia de Energia
          </CourseCard>
        </S.List>
      </DemoContent>
    </S.Container>
  );
}
