import { useNavigate } from 'react-router-dom';
import { DemoContent } from '../../../components/demo-content';
import { DemoSidebar } from '../../../components/demo-sidebar';
import { DemoText } from '../../../components/demo-text';
import { DemoTitle } from '../../../components/demo-title';
import { FlexColumn } from '../../../components/flex-column';

import * as S from './styles';
import { CourseCard } from '../../../components/course-card';
import { classes } from '../../../constants/classes';

export function ClassesPage() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <DemoSidebar />
      <DemoContent>
        <FlexColumn>
          <DemoTitle>Video aulas</DemoTitle>
          <DemoText>Aqui estao alguns cursos disponiveis.</DemoText>
        </FlexColumn>
        <S.List>
          {classes.map((course, index) => (
            <CourseCard onClick={() => navigate(`/demo/classes/${index}`)} key={`course-${course.title}`} img={course.image}>
              {course.title}
            </CourseCard>
          ))}

        </S.List>
      </DemoContent>
    </S.Container>
  );
}
