import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "フロントエンドとバックエンドの違い｜役割・技術・開発者調査の職種構成を比較【2026年】";
const DESCRIPTION =
  "フロントエンドとバックエンドの違いを、担当する範囲・主な技術・必要な知識で比較します。Stack Overflow Developer Survey 2025の職種構成（フルスタック27％・バックエンド14.2％・フロントエンド4.3％）と、Webフレームワークの利用率を当サイトで分類して整理します。";
const URL = "/knowledge/frontend-backend/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "difference", label: "フロントエンドとバックエンドの違い" },
  { id: "roles", label: "開発者調査で見る職種の構成" },
  { id: "tech", label: "主な技術と利用率" },
  { id: "fullstack", label: "フルスタックという選択肢" },
  { id: "career", label: "転職・キャリアの考え方" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "フロントエンドとバックエンドの違いを簡単に言うと何ですか？",
    a: "フロントエンドは、利用者がブラウザやアプリで直接見て操作する画面側を作る領域です。バックエンドは、サーバー側でデータの保存・処理・認証などを行い、画面側に必要なデータを返す領域です。両者はAPIなどを通じてデータをやり取りします。",
  },
  {
    q: "フロントエンドとバックエンドのエンジニアはどちらが多いですか？",
    a: "Stack Overflow Developer Survey 2025（回答43,560件）では、現在の職種として「バックエンド開発者」を選んだ人が14.2％、「フロントエンド開発者」が4.3％、「フルスタック開発者」が27％でした。世界の開発者を対象とした任意回答の調査であり、日本の労働市場の構成とは異なる可能性があります。",
  },
  {
    q: "フロントエンドとバックエンドはどちらが難しいですか？",
    a: "求められる知識の種類が異なるため、一概には比較できません。フロントエンドはブラウザの仕組み・UI・アクセシビリティなど、バックエンドはデータベース・セキュリティ・性能設計などの知識が中心になります。ご自身の関心や経験に近い領域から始めるのが現実的です。",
  },
  {
    q: "Node.jsはフロントエンドとバックエンドのどちらですか？",
    a: "Node.jsは、JavaScriptをブラウザの外（主にサーバー側）で実行するための実行環境で、一般にはバックエンドの技術に分類されます。ただし、フロントエンド開発のビルドツールの実行にも広く使われています。",
  },
  {
    q: "フロントエンドからバックエンドへ転職できますか？",
    a: "可能です。JavaScriptやTypeScriptの経験はNode.jsでのサーバー開発にも生かせます。移行の手順は当サイトの「フロントエンドからバックエンドへの転職」でご説明しています。",
  },
];

export default function FrontendBackendPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const cell = "border border-slate-200 px-3 py-2";

  return (
    <>
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url={URL} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "フロントエンドとバックエンドの違い" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          フロントエンドとバックエンドの違い｜役割・技術・開発者調査の職種構成を比較
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月25日 | 調査資料の確認日: 2026年11月25日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】フロントエンドとバックエンドの違い</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>フロントエンドは利用者が見て操作する画面側、バックエンドはサーバー側でデータの保存・処理を行う側の開発領域です。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・Stack Overflow Developer Survey 2025では、職種の回答はフルスタック27％、バックエンド14.2％、フロントエンド4.3％でした</li>
              <li>・2024年調査のフロントエンドは5.6％で、調査側は前年の6.6％から減ったと記載しています（設問・選択肢は年により異なります）</li>
              <li>・Webフレームワークの利用率は、Node.js 48.7％、React 44.7％が上位です（2025年・回答23,678件）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、フロントエンドとバックエンドの役割の違いを整理したうえで、Stack Overflowが公開している開発者調査の職種構成と技術の利用率を紹介します。技術をフロントエンド・バックエンドに分けた表は、各技術の公式の位置づけをもとに当サイトが分類したものです。
        </p>

        <DataNote
          surveyedAt="2026年11月25日"
          sources={["Stack Overflow「2025 Developer Survey」Developers・Technology", "Stack Overflow「2024 Developer Survey」Developer Profile"]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="difference" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フロントエンドとバックエンドの違い</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={`${cell} text-left`}>比較項目</th>
                  <th className={`${cell} text-left`}>フロントエンド</th>
                  <th className={`${cell} text-left`}>バックエンド</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={cell}>担当する範囲</td><td className={cell}>ブラウザ・アプリの画面、操作、表示の速さ</td><td className={cell}>サーバー、データベース、API、認証、外部サービスとの連携</td></tr>
                <tr><td className={cell}>プログラムが動く場所</td><td className={cell}>主に利用者の端末（ブラウザ）</td><td className={cell}>主にサーバー・クラウド</td></tr>
                <tr><td className={cell}>主な言語</td><td className={cell}>HTML、CSS、JavaScript、TypeScript</td><td className={cell}>Java、Python、PHP、Go、Ruby、C#、JavaScript（Node.js）など</td></tr>
                <tr><td className={cell}>必要な知識の例</td><td className={cell}>UI設計、アクセシビリティ、ブラウザの描画、状態管理</td><td className={cell}>データベース設計、セキュリティ、性能・可用性、インフラ</td></tr>
                <tr><td className={cell}>成果が見える形</td><td className={cell}>画面の見た目・使いやすさ</td><td className={cell}>処理の正確さ・速さ・安定性</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 当サイトによる一般的な整理です。実際の担当範囲は企業・プロジェクトによって異なります。</p>
        </section>

        <section id="roles" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">開発者調査で見る職種の構成</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Stack Overflow Developer Surveyでは、回答者に現在の職種を1つ選んでもらっています。2025年と2024年の主な職種の割合を並べました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={`${cell} text-left`}>職種</th>
                  <th className={`${cell} text-right`}>2025年（回答43,560件）</th>
                  <th className={`${cell} text-right`}>2024年（回答58,950件）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={cell}>フルスタック開発者</td><td className={`${cell} text-right`}>27％</td><td className={`${cell} text-right`}>30.7％</td></tr>
                <tr><td className={cell}>バックエンド開発者</td><td className={`${cell} text-right`}>14.2％</td><td className={`${cell} text-right`}>16.7％</td></tr>
                <tr><td className={cell}>フロントエンド開発者</td><td className={`${cell} text-right`}>4.3％</td><td className={`${cell} text-right`}>5.6％</td></tr>
                <tr><td className={cell}>デスクトップ・エンタープライズアプリ開発者</td><td className={`${cell} text-right`}>4.3％</td><td className={`${cell} text-right`}>4.2％</td></tr>
                <tr><td className={cell}>モバイル開発者</td><td className={`${cell} text-right`}>3％</td><td className={`${cell} text-right`}>3.4％</td></tr>
                <tr><td className={cell}>組込み開発者</td><td className={`${cell} text-right`}>2.8％</td><td className={`${cell} text-right`}>2.7％</td></tr>
                <tr><td className={cell}>アーキテクト（ソフトウェア・ソリューション）</td><td className={`${cell} text-right`}>6.1％</td><td className={`${cell} text-right`}>（選択肢なし）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            出典：Stack Overflow「2025 Developer Survey」Developers（Role）、「2024 Developer Survey」Developer Profile（Developer type）。全回答者の値です。2025年は設問文が変わり、アーキテクトが新設されたため、年ごとの増減は参考値としてご覧ください。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            フロントエンド・バックエンドの両方を担うフルスタック開発者が最も多く、フロントエンド専任の割合は小さくなっています。ただし、この調査は世界の開発者を対象とした任意回答の調査で、日本の求人の構成を示すものではありません。
          </p>
        </section>

        <section id="tech" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主な技術と利用率</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            2025年調査の「Webフレームワークと技術」で利用率が高かった技術を、主に使われる領域ごとに当サイトで分類しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={`${cell} text-left`}>技術</th>
                  <th className={`${cell} text-left`}>主な領域（当サイト分類）</th>
                  <th className={`${cell} text-right`}>利用率</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={cell}>Node.js</td><td className={cell}>バックエンド（実行環境）</td><td className={`${cell} text-right`}>48.7％</td></tr>
                <tr><td className={cell}>React</td><td className={cell}>フロントエンド</td><td className={`${cell} text-right`}>44.7％</td></tr>
                <tr><td className={cell}>jQuery</td><td className={cell}>フロントエンド</td><td className={`${cell} text-right`}>23.4％</td></tr>
                <tr><td className={cell}>Next.js</td><td className={cell}>フロントエンド＋サーバー側（両方）</td><td className={`${cell} text-right`}>20.8％</td></tr>
                <tr><td className={cell}>Express</td><td className={cell}>バックエンド</td><td className={`${cell} text-right`}>19.9％</td></tr>
                <tr><td className={cell}>ASP.NET Core</td><td className={cell}>バックエンド</td><td className={`${cell} text-right`}>19.7％</td></tr>
                <tr><td className={cell}>Angular</td><td className={cell}>フロントエンド</td><td className={`${cell} text-right`}>18.2％</td></tr>
                <tr><td className={cell}>Vue.js</td><td className={cell}>フロントエンド</td><td className={`${cell} text-right`}>17.6％</td></tr>
                <tr><td className={cell}>FastAPI</td><td className={cell}>バックエンド（Python）</td><td className={`${cell} text-right`}>14.8％</td></tr>
                <tr><td className={cell}>Spring Boot</td><td className={cell}>バックエンド（Java）</td><td className={`${cell} text-right`}>14.7％</td></tr>
                <tr><td className={cell}>Flask</td><td className={cell}>バックエンド（Python）</td><td className={`${cell} text-right`}>14.4％</td></tr>
                <tr><td className={cell}>Django</td><td className={cell}>バックエンド（Python）</td><td className={`${cell} text-right`}>12.6％</td></tr>
                <tr><td className={cell}>Laravel</td><td className={cell}>バックエンド（PHP）</td><td className={`${cell} text-right`}>8.9％</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            出典：Stack Overflow「2025 Developer Survey」Technology（Web frameworks and technologies・全回答者・回答23,678件）。複数回答のため合計は100％になりません。領域の分類は当サイトによるものです。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            調査側は、FastAPIの利用率が前年から5ポイント増えたことを、Webフレームワーク分野で最も大きな変化の一つとしています。言語ごとの転職事情は<Link href="/skill/python/" className="text-blue-600 hover:underline">Python</Link>・<Link href="/skill/java/" className="text-blue-600 hover:underline">Java</Link>・<Link href="/skill/typescript/" className="text-blue-600 hover:underline">TypeScript</Link>の各ガイドでご説明しています。
          </p>
        </section>

        <section id="fullstack" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フルスタックという選択肢</h2>
          <p className="text-slate-600 leading-relaxed">
            フルスタック開発者は、フロントエンドとバックエンドの両方を担当する職種です。上の調査では最も多く選ばれた職種でした。Next.jsのように画面とサーバー側の処理を1つのフレームワークで扱える技術も利用が広がっています。一方で、両方の領域で深い専門性を求められるため、まずはどちらかを軸にして範囲を広げる進め方が一般的です。詳しくは<Link href="/career/backend-to-fullstack/" className="text-blue-600 hover:underline">バックエンド→フルスタックへの転身ガイド</Link>をご覧ください。
          </p>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職・キャリアの考え方</h2>
          <ul className="text-slate-600 leading-relaxed space-y-2">
            <li>・フロントエンドの求人・年収は<Link href="/skill/frontend/" className="text-blue-600 hover:underline">フロントエンドエンジニア転職ガイド</Link>でご説明しています。</li>
            <li>・フロントエンドからサーバー側へ移る手順は<Link href="/career/frontend-to-backend/" className="text-blue-600 hover:underline">フロントエンドからバックエンドへの転職</Link>をご覧ください。</li>
            <li>・逆の移行は<Link href="/career/backend-to-frontend/" className="text-blue-600 hover:underline">バックエンドからフロントエンドへの転職</Link>で解説しています。</li>
          </ul>
        </section>

        <section id="faq" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800">
                  <span>Q. {faq.q}</span>
                  <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section id="sources" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月25日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>Stack Overflow「2025 Developer Survey」Developers（Role）：https://survey.stackoverflow.co/2025/developers</li>
            <li>Stack Overflow「2025 Developer Survey」Technology（Web frameworks and technologies）：https://survey.stackoverflow.co/2025/technology</li>
            <li>Stack Overflow「2024 Developer Survey」Developer Profile（Developer type）：https://survey.stackoverflow.co/2024/developer-profile</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "JavaとJavaScriptの違い", href: "/knowledge/java-javascript/" },
              { name: "フロントエンドエンジニア転職ガイド", href: "/skill/frontend/" },
              { name: "フロントエンドからバックエンドへの転職", href: "/career/frontend-to-backend/" },
              { name: "バックエンド→フルスタックへの転身ガイド", href: "/career/backend-to-fullstack/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
