import Link from 'next/link';
import { sectionPages } from '@/lib/sectionPages';

// 同じカテゴリの全ページへのリンク（各セクションの layout.tsx から出す）
export default function SectionList({ section, name }: { section: string; name: string }) {
  const pages = sectionPages(section);
  return (
    <nav aria-label={`${name}の記事一覧`} className="max-w-5xl mx-auto px-5 py-10 border-t border-black/10">
      <p className="text-sm font-medium mb-3">
        <Link href={`/${section}/`} className="hover:text-petrol">{name}の記事一覧（{pages.length}本）</Link>
      </p>
      <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-black/60">
        {pages.map((p) => (
          <li key={p.href}>
            <Link href={p.href} className="hover:text-petrol">{p.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
