import { useParams } from 'react-router-dom';
import { DemoContent } from '../../../components/demo-content';
import { DemoSidebar } from '../../../components/demo-sidebar';
import { DemoText } from '../../../components/demo-text';
import { DemoTitle } from '../../../components/demo-title';
import { FlexColumn } from '../../../components/flex-column';

import * as S from './styles';
import { challenges } from '../../../constants/challenges';
import { BarChart } from '../../../components/bar-chart';

export function ChallengePage() {
  const { id } = useParams();

  const challenge = challenges[id];

  return (
    <S.Container>
      <DemoSidebar />
      <DemoContent>
        <FlexColumn>
          <DemoTitle>{challenge.title}</DemoTitle>
          <DemoText>{challenge.description}</DemoText>
        </FlexColumn>
        <BarChart title="Porcentagem de conclusão" value={challenge.percent} totalValue={100} unit="%" />
        <S.List>
          {challenge.tasks.map((task, index) => (
            <S.Task key={task.title}>
              <S.TaskTitle>
                {index + 1}
                )
                {' '}
                {task.title}
              </S.TaskTitle>
              <S.TaskDescription>{task.description}</S.TaskDescription>
            </S.Task>
          ))}
        </S.List>
      </DemoContent>
    </S.Container>
  );
}
