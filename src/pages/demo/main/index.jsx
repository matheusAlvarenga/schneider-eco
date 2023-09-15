import { DemoContent } from '../../../components/demo-content';
import { DemoSidebar } from '../../../components/demo-sidebar';

import * as S from './styles';

export function MainPage() {
  return (
    <S.Container>
      <DemoSidebar />
      <DemoContent>
        <h1>Main Page</h1>
      </DemoContent>
    </S.Container>
  );
}
