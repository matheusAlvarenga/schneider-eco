import { Button } from '../../../components/button';
import { DemoContent } from '../../../components/demo-content';
import { DemoSidebar } from '../../../components/demo-sidebar';
import { DemoText } from '../../../components/demo-text';
import { DemoTitle } from '../../../components/demo-title';
import { FlexColumn } from '../../../components/flex-column';
import { Post } from '../../../components/post';
import { posts } from '../../../constants/posts';

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
        <S.InputWrapper>
          <S.TextArea placeholder="Escreva aqui um pouco mais sobre suas experiencias, aventuras ou seus pensamentos do dia... Vamos compartilhar com nossa comunidade!" />
          <Button>Fazer postagem</Button>
        </S.InputWrapper>
        {posts.map((post) => (
          <Post
            active={post.active}
            avatar={`https://robohash.org/${post.name.split(' ')[0]}.svg`}
            content={post.content}
            email={post.email}
            name={post.name}
            time={post.time}
          />
        ))}

      </DemoContent>
    </S.Container>
  );
}
