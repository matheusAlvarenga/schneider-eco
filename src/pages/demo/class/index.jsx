import { useParams } from 'react-router-dom';
import { DemoContent } from '../../../components/demo-content';
import { DemoSidebar } from '../../../components/demo-sidebar';
import { DemoText } from '../../../components/demo-text';
import { DemoTitle } from '../../../components/demo-title';
import { FlexColumn } from '../../../components/flex-column';

import * as S from './styles';
import { classes } from '../../../constants/classes';
import { Button } from '../../../components/button';

export function ClassPage() {
  const { id } = useParams();

  const selectedClass = classes[id];

  return (
    <S.Container>
      <DemoSidebar />
      <DemoContent>
        <FlexColumn>
          <DemoTitle>
            {selectedClass.title}
          </DemoTitle>
          <DemoText>{selectedClass.description}</DemoText>
        </FlexColumn>
        <iframe
          style={{ width: '100%', height: '100%' }}
          src={selectedClass.videoUrl}
          title={selectedClass.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
        <S.ButtonWrapper>
          <Button onClick={() => alert('Certificado compartilhado com sucesso.')}>Compartilhar certificado</Button>
        </S.ButtonWrapper>
      </DemoContent>
    </S.Container>
  );
}
