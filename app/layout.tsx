import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "ミドルエンジニア転職ラボ | 30代・40代エンジニア転職エージェント比較",
    template: "%s | ミドルエンジニア転職ラボ",
  },
  description:
    "30代・40代のITエンジニアに特化した転職エージェント比較サイト。年収UP実績・口コミ・体験談をもとに厳選10社を徹底比較。製造業からIT、金融からフィンテックなど業界横断キャリアも支援。",
  metadataBase: new URL("https://middle-engineer-lab.pages.dev"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "ミドルエンジニア転職ラボ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="min-h-full flex flex-col font-[var(--font-noto-sans-jp)] bg-white text-slate-800">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="bg-[#0F172A] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-sm font-bold">
            ME
          </div>
          <span className="text-lg font-bold tracking-tight">
            ミドルエンジニア<span className="text-blue-400">転職ラボ</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="/#ranking" className="hover:text-blue-400 transition-colors">ランキング</a>
          <a href="/#age" className="hover:text-blue-400 transition-colors">年代別</a>
          <a href="/#industry" className="hover:text-blue-400 transition-colors">業界別</a>
          <a href="/faq/" className="hover:text-blue-400 transition-colors">お役立ち</a>
        </nav>
        <MobileMenu />
      </div>
      <div className="max-w-5xl mx-auto px-4 pb-1">
        <p className="text-right text-[10px] text-slate-400">PRを含みます</p>
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <div className="md:hidden">
      <input type="checkbox" id="mobile-menu" className="peer hidden" />
      <label
        htmlFor="mobile-menu"
        className="flex flex-col gap-1.5 cursor-pointer p-2"
      >
        <span className="block w-6 h-0.5 bg-white peer-checked:rotate-45 peer-checked:translate-y-2 transition-transform" />
        <span className="block w-6 h-0.5 bg-white peer-checked:opacity-0 transition-opacity" />
        <span className="block w-6 h-0.5 bg-white peer-checked:-rotate-45 peer-checked:-translate-y-2 transition-transform" />
      </label>
      <nav className="hidden peer-checked:block absolute top-full left-0 w-full bg-[#0F172A] border-t border-slate-700 shadow-xl">
        <div className="flex flex-col p-4 gap-4 text-sm font-medium">
          <a href="/#ranking" className="hover:text-blue-400 transition-colors">ランキング</a>
          <a href="/#age" className="hover:text-blue-400 transition-colors">年代別</a>
          <a href="/#industry" className="hover:text-blue-400 transition-colors">業界別</a>
          <a href="/faq/" className="hover:text-blue-400 transition-colors">お役立ち</a>
        </div>
      </nav>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-400 text-sm">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-white font-bold text-lg mb-2">
              ミドルエンジニア<span className="text-blue-400">転職ラボ</span>
            </p>
            <p className="text-xs leading-relaxed">
              30代・40代のITエンジニアに特化した転職エージェント比較サイトです。
              実際の利用者の口コミ・年収UP実績をもとに、最適なエージェントをご紹介します。
            </p>
          </div>
          <div>
            <p className="text-white font-medium mb-2">コンテンツ</p>
            <ul className="space-y-1 text-xs">
              <li><a href="/#ranking" className="hover:text-blue-400 transition-colors">エージェントランキング</a></li>
              <li><a href="/#age" className="hover:text-blue-400 transition-colors">年代別おすすめ</a></li>
              <li><a href="/#industry" className="hover:text-blue-400 transition-colors">業界別特集</a></li>
              <li><a href="/faq/" className="hover:text-blue-400 transition-colors">よくある質問</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-medium mb-2">エージェント一覧</p>
            <ul className="space-y-1 text-xs">
              <li><a href="/review/levtech/" className="hover:text-blue-400 transition-colors">レバテックキャリア</a></li>
              <li><a href="/review/geekly/" className="hover:text-blue-400 transition-colors">Geekly</a></li>
              <li><a href="/review/mynavi-it/" className="hover:text-blue-400 transition-colors">マイナビIT AGENT</a></li>
              <li><a href="/review/workport/" className="hover:text-blue-400 transition-colors">ワークポート</a></li>
              <li><a href="/review/doda-it/" className="hover:text-blue-400 transition-colors">doda(IT特化)</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            当サイトはアフィリエイトプログラムに参加しています。
            掲載情報は2024年12月時点のものです。最新情報は各公式サイトでご確認ください。
          </p>
          <p className="text-xs">&copy; 2024 ミドルエンジニア転職ラボ</p>
        </div>
      </div>
    </footer>
  );
}
