import { BarChart } from '../../../components/bar-chart';
import { DemoContent } from '../../../components/demo-content';
import { DemoSidebar } from '../../../components/demo-sidebar';
import { DemoText } from '../../../components/demo-text';
import { DemoTitle } from '../../../components/demo-title';
import { FlexColumn } from '../../../components/flex-column';

import * as S from './styles';

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
      </DemoContent>
    </S.Container>
  );
}
