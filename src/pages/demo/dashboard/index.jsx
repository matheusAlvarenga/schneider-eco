import { useNavigate } from 'react-router-dom';
import { BarChart } from '../../../components/bar-chart';
import { CourseCard } from '../../../components/course-card';
import { DemoContent } from '../../../components/demo-content';
import { DemoSidebar } from '../../../components/demo-sidebar';
import { DemoText } from '../../../components/demo-text';
import { DemoTitle } from '../../../components/demo-title';
import { FlexColumn } from '../../../components/flex-column';
import course1 from '../../../assets/course-1.png';

import * as S from './styles';
import { Divider } from '../../../components/divider';
import { ChallengeDataCard } from '../../../components/challenge-data-card';
import { classes } from '../../../constants/classes';
import { data } from '../../../constants/data';

export function DashboardPage() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <DemoSidebar />
      <DemoContent>
        <FlexColumn>
          <DemoTitle>Dados gerais</DemoTitle>
          <DemoText>Dados gerais sobre os usuarios do sistema.</DemoText>
        </FlexColumn>
        {data.map((item) => (
          <BarChart title={item.title} value={item.value} totalValue={item.totalValue} unit="usuarios" />
        ))}
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
          {classes.map((course, index) => (
            <CourseCard points={course.points} onClick={() => navigate(`/demo/classes/${index}`)} key={`course-${course.title}`} img={course.image}>
              {course.title}
            </CourseCard>
          ))}
        </S.List>
      </DemoContent>
    </S.Container>
  );
}
