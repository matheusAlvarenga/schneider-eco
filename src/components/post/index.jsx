import * as S from './styles';

export function Post({
  name, email, time, content, avatar, active,
}) {
  return (
    <S.Container>
      <S.PostHeading>
        <S.UserWrapper>
          <S.AvatarWrapper>
            <S.AvatarImage src={avatar} />
            {active && <S.AvatarActive />}
          </S.AvatarWrapper>
          <S.NameWrapper>
            <S.Name>{name}</S.Name>
            <S.Email>{email}</S.Email>
          </S.NameWrapper>
        </S.UserWrapper>
        <S.Time>{time}</S.Time>
      </S.PostHeading>
      <S.PostContent>
        {content}
      </S.PostContent>
    </S.Container>
  );
}
