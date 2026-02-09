import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import perfectionist from 'eslint-plugin-perfectionist'
import { defineConfig, globalIgnores } from 'eslint/config'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      perfectionist,
    },
    rules: {
      // ===== Import 정렬 =====
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'type',
          ],
        },
      ],
      'perfectionist/sort-named-imports': ['error', { type: 'natural' }],
      'perfectionist/sort-named-exports': ['error', { type: 'natural' }],

      // ===== 주석 띄어쓰기 =====
      'spaced-comment': [
        'error',
        'always',
        {
          markers: ['/'],
          exceptions: ['-', '+', '*'],
        },
      ],

      // ===== TypeScript 규칙 =====
      // any 금지
      '@typescript-eslint/no-explicit-any': 'error',

      // enum 금지 (const object + as const 권장)
      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSEnumDeclaration',
          message: 'enum 대신 const object + as const를 사용하세요.',
        },
      ],

      // 타입 네이밍 규칙 (PascalCase 강제)
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
        },
      ],

      // ===== 코드 스타일 =====
      // 중괄호 필수
      curly: ['error', 'all'],
    },
  },

  // 기본 ignores
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '*.config.mjs',
    '*.config.js',
    '*.config.ts',
  ]),
])

export default eslintConfig
