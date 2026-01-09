module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
        'ci',
        'perf',
      ],
    ],
    'subject-empty': [2, 'never'],
    'subject-case': [0],
    'header-max-length': [2, 'always', 100],
  },
  plugins: [
    {
      rules: {
        'header-match-team-pattern': (parsed) => {
          const { header } = parsed;
          // 패턴: type(scope)?: 설명 (#이슈번호)
          const pattern = /^(\w+)(\(.+\))?: .+ \(#\d+\)$/;
          
          if (!pattern.test(header)) {
            return [
              false,
              '커밋 메시지 끝에 (#이슈번호)를 반드시 포함해야 합니다.\n예: feat: 로그인 API 추가 (#123)',
            ];
          }
          return [true, ''];
        },
      },
    },
  ],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'chore',
        'ci',
        'perf',
      ],
    ],
    'subject-empty': [2, 'never'],
    'subject-case': [0],
    'header-max-length': [2, 'always', 100],
    'header-match-team-pattern': [2, 'always'], // 커스텀 규칙 활성화
  },
};