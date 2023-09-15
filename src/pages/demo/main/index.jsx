import { DemoContent } from '../../../components/demo-content';
import { DemoSidebar } from '../../../components/demo-sidebar';
import { DemoText } from '../../../components/demo-text';
import { DemoTitle } from '../../../components/demo-title';
import { FlexColumn } from '../../../components/flex-column';

import * as S from './styles';

export function MainPage() {
  return (
    <S.Container>
      <DemoSidebar />
      <DemoContent>
        <FlexColumn>
          <DemoTitle>Seja bem-vindo</DemoTitle>
          <DemoText>Aqui esta um resumo do seu mes no sistema.</DemoText>
        </FlexColumn>
      </DemoContent>
    </S.Container>
  );
}
