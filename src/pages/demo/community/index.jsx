import { DemoContent } from '../../../components/demo-content';
import { DemoSidebar } from '../../../components/demo-sidebar';
import { DemoText } from '../../../components/demo-text';
import { DemoTitle } from '../../../components/demo-title';
import { FlexColumn } from '../../../components/flex-column';

import * as S from './styles';

export function CommunityPage() {
  return (
    <S.Container>
      <DemoSidebar />
      <DemoContent>
        <FlexColumn>
          <DemoTitle>Comunidade</DemoTitle>
          <DemoText>Veja mais sobre as pessoas da sua empresa.</DemoText>
        </FlexColumn>
      </DemoContent>
    </S.Container>
  );
}
