import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/button';
import { DemoContent } from '../../../components/demo-content';
import { DemoSidebar } from '../../../components/demo-sidebar';
import profile from '../../../assets/profile.png';

import * as S from './styles';
import { classes } from '../../../constants/classes';
import { CourseCard } from '../../../components/course-card';
import { DemoTitle } from '../../../components/demo-title';

export function ProfilePage() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <DemoSidebar />
      <DemoContent>
        <S.ProfileWrapper>
          <S.ProfilePicture src={profile} />
          <S.ProfileName>Olivia dos Santos</S.ProfileName>
          <Button>Desconectar</Button>
        </S.ProfileWrapper>
        <DemoTitle>Cursos assistidos</DemoTitle>
        <S.List>
          {classes.slice(0, 3).map((course, index) => (
            <CourseCard onClick={() => navigate(`/demo/classes/${index}`)} key={`course-${course.title}`} img={course.image}>
              {course.title}
            </CourseCard>
          ))}
        </S.List>
      </DemoContent>
    </S.Container>
  );
}
