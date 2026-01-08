import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';

/**
 * cebab-case를 PasCalCase로 변환합니다.
 */
function cebabCaseToPascalCase(str: string) {
  return str.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
}

/**
 * 하위 디렉토리를 읽은 후 그 이름과 PascalCase로 변환한 이름을 반환합니다.
 */
async function getTestPages() {
  const testDir = path.join(process.cwd(), 'app', 'test');
  try {
    const dirents = await fs.readdir(testDir, { withFileTypes: true });
    const dirs = dirents
      .filter(dirent => dirent.isDirectory())
      .map(dirent => ({
        href: dirent.name,
        name: cebabCaseToPascalCase(dirent.name)
      }));
    return dirs;
  } catch (error) {
    console.error("Failed to read test directory:", error);
    return [];
  }
}

export default async function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const testPages = await getTestPages();

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r border-gray-200 p-4">
        <Link href={"/test"} className="text-2xl font-bold mb-5 block hover:underline">Test Menu</Link>
        <nav>
          <ul className='flex flex-col gap-2'>
            {testPages.map(page => (
              //TODO: 버튼 공통 컴포넌트 생성 후 해당 디자인 적용
              <li key={page.href}>
                <Link href={`/test/${page.href}`} className="p-2 border flex items-center justify-center hover:underline">{page.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
