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
  dateModified = "2026-06-05",
}: ArticleJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `https://middle-engineer.com${url}`,
    datePublished,
    dateModified,
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
