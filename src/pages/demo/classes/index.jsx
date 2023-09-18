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

export function ClassesPage() {
  return (
    <S.Container>
      <DemoSidebar />
      <DemoContent>
        <FlexColumn>
          <DemoTitle>Video aulas</DemoTitle>
          <DemoText>Aqui estao alguns cursos disponiveis.</DemoText>
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
      </DemoContent>
    </S.Container>
  );
}
