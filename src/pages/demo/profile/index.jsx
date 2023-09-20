import { Button } from '../../../components/button';
import { DemoContent } from '../../../components/demo-content';
import { DemoSidebar } from '../../../components/demo-sidebar';
import profile from '../../../assets/profile.png';

import * as S from './styles';

export function ProfilePage() {
  return (
    <S.Container>
      <DemoSidebar />
      <DemoContent>
        <S.ProfileWrapper>
          <S.ProfilePicture src={profile} />
          <S.ProfileName>Olivia dos Santos</S.ProfileName>
          <Button>Desconectar</Button>
        </S.ProfileWrapper>
      </DemoContent>
    </S.Container>
  );
}
