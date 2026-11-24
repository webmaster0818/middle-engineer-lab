import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "SREとは｜Googleの定義・SLI/SLO/SLA・エラーバジェットの許容停止時間の早見表【2026年】";
const DESCRIPTION =
  "SRE（Site Reliability Engineering）とは、ソフトウェアエンジニアリングの手法でサービスの信頼性を設計・運用する考え方と職種です。Googleの書籍の定義、運用作業50％上限、SLI・SLO・SLAの違い、可用性目標ごとの許容停止時間（当サイト算出）を整理します。";
const URL = "/knowledge/sre/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "SREの定義" },
  { id: "principles", label: "SREの主な原則" },
  { id: "slo", label: "SLI・SLO・SLAの違い" },
  { id: "budget", label: "エラーバジェットと許容停止時間の早見表" },
  { id: "devops", label: "DevOpsとの関係" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "SREとは簡単に言うと何ですか？",
    a: "サービスの信頼性（可用性・レイテンシ・性能など）を、手作業の運用ではなくソフトウェアエンジニアリングの手法で保つ考え方と、それを担う職種です。Googleの書籍では「ソフトウェアエンジニアに運用チームの設計を任せたときに生まれるもの」と説明されています。",
  },
  {
    q: "SREとインフラエンジニアの違いは何ですか？",
    a: "インフラエンジニアはサーバー・ネットワークなどの基盤の構築・運用を担う職種の総称です。SREは、SLOを決めて信頼性を数値で管理し、運用作業を自動化してエンジニアリングに時間を使うことを重視する点に特徴があります。Googleの書籍では、SREの運用作業（チケット・オンコール・手作業）を合計50％までに制限すると説明されています。",
  },
  {
    q: "エラーバジェットとは何ですか？",
    a: "SLO（目標値）を100％から引いた残り、つまり「許容できる失敗の量」です。たとえば可用性のSLOが99.9％なら、30日間で約43.2分の停止が許容範囲になります（当サイト算出）。エラーバジェットを使い切った場合はリリースを止めるなど、開発の速度と安定性の釣り合いを取る判断に使います。",
  },
  {
    q: "SLOは100％にすべきではないのですか？",
    a: "Googleの書籍では、ペースメーカーやアンチロックブレーキなどの例外を除き、ほとんどのサービスで100％は誤った目標だと説明されています。利用者は100％と99.999％の違いを区別できず、利用者とサービスの間には端末やネットワークなど他の要素も多いためです。",
  },
  {
    q: "SREに転職するにはどのような経験が役立ちますか？",
    a: "Googleの書籍では、SREの40〜50％はソフトウェアエンジニアの採用基準に近い人で、UNIXシステムの内部構造とネットワーク（レイヤー1〜3）の専門知識が多いと説明されています。運用経験に加えて、自動化のためにコードを書いた経験を具体的に説明できるよう準備しておくことをおすすめします。移行の手順は「SRE転職ガイド」でご説明しています。",
  },
];

const budgetRows = [
  { slo: "99％", month: "432分（7.2時間）", year: "5,256分（87.6時間）" },
  { slo: "99.5％", month: "216分（3.6時間）", year: "2,628分（43.8時間）" },
  { slo: "99.9％", month: "43.2分", year: "525.6分（8.76時間）" },
  { slo: "99.95％", month: "21.6分", year: "262.8分（4.38時間）" },
  { slo: "99.99％", month: "4.32分", year: "52.56分" },
  { slo: "99.999％", month: "0.432分（約26秒）", year: "5.256分" },
];

export default function SrePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url={URL} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "SREとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          SREとは｜Googleの定義・SLI/SLO/SLA・エラーバジェットの許容停止時間の早見表
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月25日 | 公式資料の確認日: 2026年11月25日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】SREとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>SRE（Site Reliability Engineering：サイト信頼性エンジニアリング）とは、ソフトウェアエンジニアリングの手法でサービスの信頼性を設計・運用する考え方と、それを担う職種です。Googleが社内で始めた運用の方法として知られています。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・Googleの書籍では「ソフトウェアエンジニアに運用チームの設計を任せたときに生まれるもの」と定義されています</li>
              <li>・運用作業（チケット・オンコール・手作業）は合計50％までに制限し、残りを自動化などの開発に充てます</li>
              <li>・信頼性はSLO（目標値）で管理し、100％との差を「エラーバジェット」として使います。99.9％なら30日で約43.2分です（当サイト算出）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、Googleが公開している書籍『Site Reliability Engineering』（sre.googleで全文公開）の記述をもとに、SREの定義と原則、SLI・SLO・SLAの違いを説明します。あわせて、可用性の目標値ごとに許容される停止時間を当サイトで計算した早見表を掲載します。
        </p>

        <DataNote
          surveyedAt="2026年11月25日"
          sources={["Google『Site Reliability Engineering』Introduction", "Google『Site Reliability Engineering』Chapter 4: Service Level Objectives"]}
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

        <section id="definition" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SREの定義</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            GoogleでSREチームを立ち上げたBenjamin Treynor Slossは、書籍の序章で「SRE is what happens when you ask a software engineer to design an operations team.」（SREとは、ソフトウェアエンジニアに運用チームの設計を任せたときに生まれるものだ）と説明しています。従来はシステム管理者が手作業で行っていた運用を、ソフトウェアで自動化する発想が出発点です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            同書によると、SREチームはサービスの可用性・レイテンシ・性能・効率・変更管理・監視・緊急対応・キャパシティ計画に責任を持ちます。チームの構成は、50〜60％がGoogleのソフトウェアエンジニアと同じ採用手続きで採用された人、残りの40〜50％はその基準に近く（必要なスキルの85〜99％）、UNIXシステムの内部構造やネットワーク（レイヤー1〜3）など運用に役立つ専門知識を持つ人だと書かれています。
          </p>
        </section>

        <section id="principles" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SREの主な原則</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">原則</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">書籍での説明（当サイト要約）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">運用作業の50％上限</td><td className="border border-slate-200 px-3 py-2">チケット・オンコール・手作業などの運用作業は、SRE全体で合計50％までに制限する。残りの時間でサービスを安定させ、運用しやすくする開発を行う</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">エラーバジェット</td><td className="border border-slate-200 px-3 py-2">100％は誤った目標であり、SLOとの差を「使ってよい失敗の量」として、リリースの速度と安定性の対立を解消する</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">SLOによる管理</td><td className="border border-slate-200 px-3 py-2">利用者にとって重要な指標（SLI）を決め、目標値（SLO）を定めて、信頼性を数値で管理する</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Google『Site Reliability Engineering』Introduction。要約は当サイトによるものです。</p>
        </section>

        <section id="slo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SLI・SLO・SLAの違い</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">用語</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">意味</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">例</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">SLI（Service Level Indicator）</td><td className="border border-slate-200 px-3 py-2">提供しているサービスの水準を、注意深く定義して測る定量的な指標</td><td className="border border-slate-200 px-3 py-2">リクエストのレイテンシ、エラー率、スループット</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">SLO（Service Level Objective）</td><td className="border border-slate-200 px-3 py-2">SLIで測るサービス水準の目標値（または範囲）</td><td className="border border-slate-200 px-3 py-2">検索リクエストの平均レイテンシを100ミリ秒未満にする</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">SLA（Service Level Agreement）</td><td className="border border-slate-200 px-3 py-2">SLOを満たせなかった場合の結果（返金など）を含む、利用者との明示的・暗黙的な契約</td><td className="border border-slate-200 px-3 py-2">月間稼働率を下回った場合の利用料の減額</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Google『Site Reliability Engineering』Chapter 4: Service Level Objectives。同章では、Google Compute Engineの公表目標が99.95％（three and a half nines）と紹介されています（書籍執筆時点）。</p>
        </section>

        <section id="budget" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エラーバジェットと許容停止時間の早見表</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            可用性のSLOごとに、許容される停止時間（エラーバジェット）を当サイトで計算しました。30日間（43,200分）と365日間（525,600分）に「100％−SLO」を掛けた値です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">可用性のSLO</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">30日間の許容停止時間</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">365日間の許容停止時間</th>
                </tr>
              </thead>
              <tbody>
                {budgetRows.map((r) => (
                  <tr key={r.slo}>
                    <td className="border border-slate-200 px-3 py-2">{r.slo}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.month}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 当サイト算出。実際のサービスでは、時間ではなく成功したリクエストの割合でSLOを定めることも多く、その場合は許容される失敗リクエスト数で考えます。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            「9」が1つ増えるごとに許容停止時間は10分の1になります。99.9％から99.99％に上げると、30日あたりの許容停止時間は43.2分から4.32分に減り、人が気づいてから手作業で復旧するのは難しい水準になります。SREが自動化を重視するのはこのためです。
          </p>
        </section>

        <section id="devops" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">DevOpsとの関係</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Googleの書籍は、DevOpsを「SREの中核となる原則のいくつかを、より幅広い組織・管理体制・人員に一般化したもの」、SREを「独自の拡張を加えたDevOpsの具体的な実装」と見ることもできる、と説明しています。DevOpsが文化・実践の総称であるのに対し、SREはSLOやエラーバジェットといった具体的な運用方法と職種を伴う点が異なります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            DevOpsの定義と成果の測り方は<Link href="/knowledge/devops/" className="text-blue-600 hover:underline">DevOpsとは</Link>、SREへの転職の進め方は<Link href="/career/sre/" className="text-blue-600 hover:underline">SRE転職ガイド</Link>と<Link href="/career/infra-to-sre/" className="text-blue-600 hover:underline">インフラエンジニアからSREへ</Link>でご説明しています。
          </p>
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
            <li>Google『Site Reliability Engineering』Introduction：https://sre.google/sre-book/introduction/</li>
            <li>Google『Site Reliability Engineering』Chapter 4: Service Level Objectives：https://sre.google/sre-book/service-level-objectives/</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "SRE転職ガイド", href: "/career/sre/" },
              { name: "インフラエンジニアからSREへ", href: "/career/infra-to-sre/" },
              { name: "DevOpsとは", href: "/knowledge/devops/" },
              { name: "Kubernetesエンジニアの転職ガイド", href: "/skill/kubernetes/" },
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
