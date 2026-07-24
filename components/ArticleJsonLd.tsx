import pageDates from "./page-dates.json";

interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}

export default function ArticleJsonLd({
  title,
  description,
  url,
  datePublished = "2026-06-05",
  dateModified,
}: ArticleJsonLdProps) {
  // dateModified は「実際の最終編集日」(git履歴由来・scripts/gen-page-dates.mjs)を優先。
  // 偽の一括鮮度更新を避け、正確な鮮度シグナルのみを出力する。
  const modified =
    (pageDates as Record<string, string>)[url] ?? dateModified ?? datePublished;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    inLanguage: "ja",
    url: `https://middle-engineer.com${url}`,
    datePublished,
    dateModified: modified,
    author: {
      "@type": "Organization",
      name: "ミドルエンジニア転職ラボ",
      url: "https://middle-engineer.com",
    },
    publisher: {
      "@type": "Organization",
      name: "ミドルエンジニア転職ラボ",
      url: "https://middle-engineer.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://middle-engineer.com${url}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
