import { DemoContent } from '../../../components/demo-content';
import { DemoSidebar } from '../../../components/demo-sidebar';
import { DemoText } from '../../../components/demo-text';
import { DemoTitle } from '../../../components/demo-title';
import { FlexColumn } from '../../../components/flex-column';

import * as S from './styles';

export function ClassesPage() {
  return (
    <S.Container>
      <DemoSidebar />
      <DemoContent>
        <FlexColumn>
          <DemoTitle>Video aulas</DemoTitle>
          <DemoText>Aqui estao alguns cursos disponiveis.</DemoText>
        </FlexColumn>
      </DemoContent>
    </S.Container>
  );
}
