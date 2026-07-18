import Analytics from "@/components/Analytics";
import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, Fraunces } from "next/font/google";
import "./globals.css";

const zen = Zen_Kaku_Gothic_New({
  variable: "--font-zen",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const SITE_NAME = "CareeHUB for Mid Engineer";

export const metadata: Metadata = {
  title: {
    default: "CareeHUB for Mid Engineer | 30代・40代エンジニアの転職エージェント比較",
    template: "%s | CareeHUB for Mid Engineer",
  },
  description:
    "30代・40代のITエンジニアに特化した転職エージェント比較メディア。年収データ・口コミ・体験談をもとに厳選10社を徹底比較。企業別年収(有報準拠)・言語別年収・スキル別ガイドも提供します。",
  metadataBase: new URL("https://middle-engineer.com"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: SITE_NAME,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${zen.variable} ${fraunces.variable} h-full antialiased`}>
      <head>
        <meta name="google-site-verification" content="MiojnMKoq58QasFBnGrCu1LDQk2Vgg0Nu6wPw1xCO2k" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE_NAME,
              url: "https://middle-engineer.com",
              description: "30代・40代のITエンジニアに特化した転職エージェント比較メディア",
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: SITE_NAME,
              url: "https://middle-engineer.com",
              publisher: { "@type": "Organization", name: SITE_NAME, url: "https://middle-engineer.com" },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

const NAV = [
  { href: "/#ranking", label: "比較ランキング" },
  { href: "/review/", label: "評判・口コミ" },
  { href: "/salary/company-ranking/", label: "企業年収" },
  { href: "/company/", label: "企業別" },
  { href: "/skill/", label: "スキル別" },
  { href: "/cert/", label: "資格別" },
  { href: "/faq/", label: "お役立ち" },
];

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <a href="/" className="flex items-center gap-2.5 group">
      <svg viewBox="0 0 64 64" width="28" height="28" aria-hidden className="shrink-0">
        <rect width="64" height="64" rx="14" fill={light ? "#16191c" : "#16191c"} />
        <line x1="32" y1="32" x2="20" y2="18" stroke="#f6f4ef" strokeWidth="2.5" opacity="0.55" />
        <line x1="32" y1="32" x2="46" y2="20" stroke="#f6f4ef" strokeWidth="2.5" opacity="0.55" />
        <line x1="32" y1="32" x2="40" y2="46" stroke="#f6f4ef" strokeWidth="2.5" opacity="0.55" />
        <circle cx="32" cy="32" r="8" fill="#0e6e68" />
        <circle cx="20" cy="18" r="4.5" fill="#f6f4ef" />
        <circle cx="46" cy="20" r="4.5" fill="#f6f4ef" />
        <circle cx="40" cy="46" r="4.5" fill="#f6f4ef" />
      </svg>
      <span className="flex items-baseline gap-2">
        <span className={`font-display text-xl font-semibold tracking-tight ${light ? "text-paper" : "text-ink"}`}>
          Caree<span className="text-petrol">HUB</span>
        </span>
        <span className={`hidden sm:inline text-[10px] tracking-[0.18em] uppercase ${light ? "text-paper/55" : "text-ink-faint"}`}>
          for Mid Engineer
        </span>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur-md border-b border-[var(--line)]">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Wordmark />
        <nav className="hidden md:flex items-center gap-7 text-sm text-ink-soft">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="ul-grow hover:text-ink transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <MobileMenu />
      </div>
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-right text-[10px] text-ink-faint pb-1">PRを含みます</p>
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <div className="md:hidden">
      <input type="checkbox" id="mobile-menu" className="peer hidden" />
      <label htmlFor="mobile-menu" className="flex flex-col gap-1.5 cursor-pointer p-2" aria-label="メニュー">
        <span className="block w-6 h-0.5 bg-ink peer-checked:rotate-45 peer-checked:translate-y-2 transition-transform" />
        <span className="block w-6 h-0.5 bg-ink peer-checked:opacity-0 transition-opacity" />
        <span className="block w-6 h-0.5 bg-ink peer-checked:-rotate-45 peer-checked:-translate-y-2 transition-transform" />
      </label>
      <nav className="hidden peer-checked:block absolute top-full left-0 w-full bg-paper border-t border-[var(--line)] shadow-xl">
        <div className="flex flex-col p-4 gap-4 text-sm text-ink-soft">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-petrol transition-colors">
              {n.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-paper/70 text-sm mt-20">
      <div className="max-w-5xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <Wordmark light />
            <p className="text-xs leading-relaxed mt-4 text-paper/55">
              30代・40代のITエンジニアに特化した転職エージェント比較メディア。
              年収データ・口コミ・実績をもとに、最適なエージェントとキャリアの選択肢をご紹介します。
            </p>
          </div>
          <div>
            <p className="text-paper font-medium mb-3 text-xs tracking-wider uppercase">コンテンツ</p>
            <ul className="space-y-1.5 text-xs">
              <li><a href="/compare/" className="hover:text-petrol transition-colors">エージェント比較</a></li>
              <li><a href="/review/" className="hover:text-petrol transition-colors">評判・口コミ一覧</a></li>
              <li><a href="/salary/company-ranking/" className="hover:text-petrol transition-colors">企業年収ランキング</a></li>
              <li><a href="/salary/skill-ranking/" className="hover:text-petrol transition-colors">言語別年収ランキング</a></li>
              <li><a href="/skill/" className="hover:text-petrol transition-colors">スキル別ガイド</a></li>
              <li><a href="/company/" className="hover:text-petrol transition-colors">企業別ガイド</a></li>
              <li><a href="/career/" className="hover:text-petrol transition-colors">キャリアパス</a></li>
              <li><a href="/knowledge/" className="hover:text-petrol transition-colors">転職ノウハウ</a></li>
              <li><a href="/industry/" className="hover:text-petrol transition-colors">業界別ガイド</a></li>
              <li><a href="/salary/" className="hover:text-petrol transition-colors">年収帯別ガイド</a></li>
              <li><a href="/cert/" className="hover:text-petrol transition-colors">資格別ガイド</a></li>
              <li><a href="/area/" className="hover:text-petrol transition-colors">エリア別ガイド</a></li>
              <li><a href="/faq/" className="hover:text-petrol transition-colors">よくある質問</a></li>
            </ul>
          </div>
          <div>
            <p className="text-paper font-medium mb-3 text-xs tracking-wider uppercase">主要エージェント</p>
            <ul className="space-y-1.5 text-xs">
              <li><a href="/review/levtech/" className="hover:text-petrol transition-colors">レバテックキャリア</a></li>
              <li><a href="/review/geekly/" className="hover:text-petrol transition-colors">Geekly</a></li>
              <li><a href="/review/mynavi-it/" className="hover:text-petrol transition-colors">マイナビIT AGENT</a></li>
              <li><a href="/review/workport/" className="hover:text-petrol transition-colors">ワークポート</a></li>
              <li><a href="/review/doda-it/" className="hover:text-petrol transition-colors">doda(IT特化)</a></li>
            </ul>
          </div>
          <div>
            <p className="text-paper font-medium mb-3 text-xs tracking-wider uppercase">サイト情報</p>
            <ul className="space-y-1.5 text-xs">
              <li><a href="/about/" className="hover:text-petrol transition-colors">運営者情報</a></li>
              <li><a href="/editorial/" className="hover:text-petrol transition-colors">記事制作ポリシー</a></li>
              <li><a href="/terms/" className="hover:text-petrol transition-colors">利用規約</a></li>
              <li><a href="/privacy/" className="hover:text-petrol transition-colors">プライバシーポリシー</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-paper/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-paper/50">
            当サイトはアフィリエイトプログラムに参加しています。最新情報は各公式サイトでご確認ください。
          </p>
          <p className="text-xs text-paper/50">&copy; 2026 CareeHUB for Mid Engineer</p>
        </div>
      </div>
    </footer>
  );
}
