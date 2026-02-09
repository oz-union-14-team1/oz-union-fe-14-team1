export const buildDescription = (topTraits: string[]): string => {
  const descriptions: Record<string, string> = {
    immersive: '게임 속 세계에 깊이 빠져드는 것을 즐기시는군요!',
    intense: '긴장감 넘치는 플레이를 좋아하시네요!',
    peaceful: '여유롭고 평화로운 게임을 선호하시는군요!',
    healing: '게임으로 힐링하는 걸 좋아하시네요!',
    challenging: '어려운 도전을 즐기는 진정한 게이머시군요!',
    story: '스토리와 서사에 몰입하는 것을 좋아하시네요!',
    action: '역동적인 액션을 즐기시는군요!',
    strategic: '전략적인 플레이를 선호하시네요!',
    solo: '나만의 시간을 즐기는 솔로 플레이어시군요!',
    social: '함께 즐기는 게임을 좋아하시네요!',
    competitive: '경쟁에서 승리하는 짜릿함을 아시는군요!',
    cooperative: '협동 플레이의 재미를 아시는 분이시네요!',
    casual: '가볍게 즐기는 게임을 좋아하시는군요!',
    explorer: '새로운 세계를 탐험하는 것을 즐기시네요!',
    creative: '창작과 건설의 재미를 아시는 분이시네요!',
    collector: '수집의 즐거움을 아시는 분이시네요!',
    puzzle: '퍼즐을 풀며 머리 쓰는 걸 좋아하시네요!',
    horror: '스릴 넘치는 공포 게임을 즐기시는군요!',
    emotional: '감동적인 스토리에 빠져드는 것을 좋아하시네요!',
    fantasy: '판타지 세계관을 좋아하시는군요!',
    scifi: 'SF와 미래 세계관에 관심이 많으시네요!',
    freedom: '자유롭게 탐험하는 오픈월드를 선호하시는군요!',
    fast: '빠른 템포의 게임을 즐기시네요!',
  }

  for (const trait of topTraits) {
    if (descriptions[trait]) {
      return descriptions[trait]
    }
  }

  return '당신만의 특별한 플레이 스타일을 가지고 계시네요!'
}
