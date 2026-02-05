import { ReviewDetail } from '@/types/api-response/review-response'

export const MOCK_REVIEW_DETAIL: ReviewDetail = {
  id: 201,
  author: {
    id: 34,
    nickname: '콘솔매니아',
    profileImgUrl: 'https://dummyimage.com/200x200/000/fff&text=profile+image',
  },
  content:
    '스토리와 연출의 완성도가 매우 높은 게임입니다. 초반에는 전개가 다소 느리게 느껴질 수 있지만, 중반 이후부터는 캐릭터 서사와 게임플레이가 잘 맞물리면서 몰입도가 급격히 올라갑니다. 전투 밸런스도 전반적으로 안정적이지만, 특정 구간에서는 난이도 스파이크가 느껴졌습니다.',
  rating: 4.7,
  likeCount: 256,
  createdAt: new Date('2025-01-20T09:18:00Z'),
  comments: [
    {
      id: 3001,
      author: {
        id: 51,
        nickname: '스토리중시',
        profileImgUrl: null,
      },
      content: '중반 이후 몰입도 상승한다는 말에 공감합니다.',
      createdAt: new Date('2025-01-20T10:01:00Z'),
    },
    {
      id: 3002,
      author: {
        id: 52,
        nickname: '액션좋아',
        profileImgUrl:
          'https://dummyimage.com/200x200/000/fff&text=profile+image',
      },
      content: '난이도 스파이크 구간이 정확히 어디였는지 궁금하네요.',
      createdAt: new Date('2025-01-20T10:12:00Z'),
    },
    {
      id: 3003,
      author: {
        id: 53,
        nickname: '헤드폰유저',
        profileImgUrl: null,
      },
      content: '사운드 디자인 때문에 밤에 플레이하면 더 좋더라고요.',
      createdAt: new Date('2025-01-20T10:30:00Z'),
    },
    {
      id: 3004,
      author: {
        id: 54,
        nickname: '플래티넘헌터',
        profileImgUrl:
          'https://dummyimage.com/200x200/000/fff&text=profile+image',
      },
      content: '트로피 난이도는 생각보다 쉬운 편이었습니다.',
      createdAt: new Date('2025-01-20T10:45:00Z'),
    },
    {
      id: 3005,
      author: {
        id: 55,
        nickname: '재플레이각',
        profileImgUrl: null,
      },
      content: '엔딩 보고 나서 바로 2회차 들어갔어요.',
      createdAt: new Date('2025-01-20T11:05:00Z'),
    },
  ],
}
