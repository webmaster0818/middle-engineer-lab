import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "Webディレクターとは｜仕事内容・公的な職業分類での位置づけ・Web関連18職業名の分類【2026年】";
const DESCRIPTION =
  "Webディレクターとは、ウェブサイト制作の予算・要員・進捗・品質を管理し、制作を指揮・監督する職種です。厚生労働省編職業分類での位置づけ、Webプロデューサーやデザイナーとの違い、関連資格を一次資料で整理します。";
const URL = "/knowledge/web-director/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "Webディレクターの公的な位置づけ" },
  { id: "work", label: "Webディレクターの仕事内容" },
  { id: "compare", label: "Webプロデューサー・デザイナー・プログラマーとの違い" },
  { id: "data", label: "Web関連18職業名の分類（当サイト集計）" },
  { id: "cert", label: "必要な資格と関連する民間資格" },
  { id: "related", label: "制作・転職の詳しい情報" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "Webディレクターとは簡単に言うと何をする仕事ですか？",
    a: "ウェブサイトを制作するために、予算・要員・進捗・品質を管理し、制作の業務を監督する仕事です。厚生労働省編職業分類（2022年改定）では、Webディレクターをこのように説明し、小分類020-99「他に分類されない法務・経営・文化芸術等の専門的職業」に分類しています。",
  },
  {
    q: "WebディレクターとWebプロデューサーの違いは何ですか？",
    a: "厚生労働省編職業分類では、Webプロデューサーを「ウェブサイトの企画、予算・制作要員の確保、制作の進捗管理など」の仕事、Webディレクターを「予算・要員・進捗・品質の管理、業務の監督など」の仕事として書き分けています。企画と予算・要員の確保まで担うのがプロデューサー、制作の現場の管理と監督を担うのがディレクターという整理です。どちらも同じ小分類020-99に分類されます。実際の役割分担は企業によって異なります。",
  },
  {
    q: "WebディレクターとWebデザイナーの違いは何ですか？",
    a: "Webデザイナーは、要件定義、ページの構成、文字・配置・配色・アイコンなどの視覚的要素をソフトウェアでデザインし、ウェブサイトを制作する職業として、小分類017-01「ウェブデザイナー」に分類されています。同じ説明の中で、予算・要員・進捗・品質の管理や業務の監督に従事するものはWebディレクター（020-99）に分類すると明記されています。",
  },
  {
    q: "Webディレクターになるのに資格は必要ですか？",
    a: "当サイトの確認範囲では、Webディレクターとして働くために必須とされる資格はありません。知識を示す民間資格には、一般社団法人ウェブ解析士協会の「ウェブ解析士」（試験60分・60問、受験料17,600円・税込）や、サーティファイの「Webクリエイター能力認定試験」（得点率65％以上で合格）などがあります。",
  },
  {
    q: "Webディレクターの平均年収は公的な統計で分かりますか？",
    a: "当サイトの確認では、分かりません。令和7年賃金構造基本統計調査の職種（小分類）の表を確認したところ、Webディレクターに当たる独立した職種区分はありませんでした。民間の求人サイトなどが公表する年収は調査対象や算出方法が異なるため、参照する際は出典と集計方法をご確認ください。",
  },
];

const compareRows = [
  {
    name: "Webディレクター",
    code: "020-99 他に分類されない法務・経営・文化芸術等の専門的職業",
    work: "ウェブサイトを制作するため、予算・要員・進捗・品質の管理、業務の監督などを行う",
  },
  {
    name: "Webプロデューサー",
    code: "020-99（同上）",
    work: "ウェブサイトの企画、予算・制作要員の確保、制作の進捗管理などを行う",
  },
  {
    name: "Webデザイナー",
    code: "017-01 ウェブデザイナー",
    work: "要件定義、ページ構成、文字・配置・配色・アイコンなどの視覚的要素をデザインし、ウェブサイトを制作する",
  },
  {
    name: "Webプログラマー・HTMLコーダー",
    code: "009-03 プログラマー",
    work: "設計書にもとづいてプログラムを作成する。HTMLのコーディングもここに分類される",
  },
  {
    name: "Webプランナー",
    code: "033-03 企画・調査事務員",
    work: "所管業務の企画・立案、市場調査などの企画事務を行う",
  },
  {
    name: "ホームページ更新係員",
    code: "043-01 パーソナルコンピュータ操作員、ホームページ関連事務員",
    work: "ウェブサイトに掲載された文字・数字情報、画像などを更新し、サイトを維持・管理する",
  },
  {
    name: "ITプロジェクトマネージャ（参考）",
    code: "010-03 IT プロジェクトマネージャ",
    work: "システム開発プロジェクトの責任者として、実行計画の作成、予算・要員・進捗・品質の管理、業務の監督を行う",
  },
];

const webRows = [
  { major: "02 研究・技術の職業", minor: "009-01 ソフトウェア開発技術者（WEB・オープン系）", names: "ソフトウェア開発技術者（WEB・オープン系）、Web系ソフトウェア開発技術者、システムエンジニア（WEBサイト開発）", count: 3 },
  { major: "02 研究・技術の職業", minor: "009-03 プログラマー", names: "HTMLコーダー、Webアプリケーションプログラマー、Webプログラマー", count: 3 },
  { major: "03 法務・経営・文化芸術等の専門的職業", minor: "017-01 ウェブデザイナー", names: "ウェブデザイナー、Webデザイナー、Webクリエイター、ホームページデザイナー", count: 4 },
  { major: "03 法務・経営・文化芸術等の専門的職業", minor: "020-99 他に分類されない法務・経営・文化芸術等の専門的職業", names: "Webディレクター、Webプロデューサー", count: 2 },
  { major: "06 事務的職業", minor: "033-03 企画・調査事務員", names: "Webプランナー、Webマーケティング事務員", count: 2 },
  { major: "06 事務的職業", minor: "036-04 インターネット応接等事務員", names: "Webショップ店長", count: 1 },
  { major: "06 事務的職業", minor: "043-01 パーソナルコンピュータ操作員、ホームページ関連事務員", names: "ホームページ関連事務員、ホームページ更新係員、ホームページ更新事務員", count: 3 },
];

export default function WebDirectorKnowledgePage() {
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
          { name: "Webディレクターとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Webディレクターとは｜仕事内容・公的な職業分類での位置づけ・Web関連18職業名の分類
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月27日 | 公式資料の確認日: 2026年11月27日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】Webディレクターとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>Webディレクターとは、ウェブサイトを制作するために、予算・要員・進捗・品質の管理や業務の監督を行う職種です（厚生労働省編職業分類 2022年改定の説明による）。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・職業分類では、IT技術者ではなく、アートディレクターやゲームディレクターと同じ「他に分類されない法務・経営・文化芸術等の専門的職業」（020-99）に分類されています</li>
              <li>・企画と予算・要員の確保を担うWebプロデューサー、視覚的なデザインを担うWebデザイナー、プログラムを作るWebプログラマーとは分類上も区別されています</li>
              <li>・職業分類で名称にWeb・ウェブ・ホームページなどを含む職業名は18件あり、3つの大分類・7つの小分類に分かれていました（当サイト集計）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、独立行政法人労働政策研究・研修機構（JILPT）が公表している「第5回改定 厚生労働省編職業分類 職業分類表」の記載をもとに、Webディレクターとはどのような職種かをご説明します。あわせて、同じ分類表の索引からWeb関連の職業名を当サイトで抜き出し、どの分類に属するかを1つの表にまとめました。
        </p>

        <DataNote
          surveyedAt="2026年11月27日"
          sources={["JILPT「第5回改定 厚生労働省編職業分類 職業分類表」（2022年12月）", "総務省「日本標準職業分類」（平成21年12月告示）", "厚生労働省「令和7年賃金構造基本統計調査」職種（小分類）第1表", "ウェブ解析士協会・サーティファイ 公式サイト"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Webディレクターの公的な位置づけ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            厚生労働省編職業分類（2022年改定）では、Webディレクターは小分類020-99「他に分類されない法務・経営・文化芸術等の専門的職業」の例示職業名として掲載されています。この小分類の説明には「ウェブサイトの制作指揮・監督」という仕事が含まれており、Webディレクターはこの仕事に当たります。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            また、小分類017-01「ウェブデザイナー」の説明の中で、「ウェブサイトを制作するため、予算・要員・進捗・品質の管理、業務の監督などの仕事に従事するもの」はWebディレクター（020-99）に分類すると明記されています。本記事では、この記載をWebディレクターの公的な説明として扱います。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            020-99は大分類03「法務・経営・文化芸術等の専門的職業」の中分類020「その他の法務・経営・文化芸術等の専門的職業」に含まれます。同じ小分類の例示職業名は49件あり、その中にはアートディレクター、クリエイティブディレクター（広告業）、ゲームディレクター、広告ディレクター、レコーディングディレクターなど、名称に「ディレクター」を含む職業が7件あります（当サイト集計）。Webディレクターは、プログラムを作る技術者ではなく、制作物の指揮・監督を担う専門職として整理されていることが分かります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            一方、統計の基準である総務省の日本標準職業分類（平成21年12月告示）では、小分類224「デザイナー」の例示に「ウェブデザイナー」はありますが、「Webディレクター」という職業名の例示はありませんでした。日本標準職業分類のどの項目に当たるかを示す公式の記載は、当サイトでは確認できていません。
          </p>
        </section>

        <section id="work" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Webディレクターの仕事内容</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            厚生労働省編職業分類の説明に挙がっている仕事は、次の5つです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">職業分類に書かれた仕事</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">ウェブサイト制作での具体例（当サイトの整理）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">予算の管理</td><td className="border border-slate-200 px-3 py-2">制作費・外注費の見積もりと、実績との差の確認</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">要員の管理</td><td className="border border-slate-200 px-3 py-2">デザイナー・コーダー・ライターなどの担当の割り当て</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">進捗の管理</td><td className="border border-slate-200 px-3 py-2">制作スケジュールの作成と、公開日までの遅れの確認</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">品質の管理</td><td className="border border-slate-200 px-3 py-2">表示崩れ・リンク切れ・誤字などの確認と修正指示</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">業務の監督</td><td className="border border-slate-200 px-3 py-2">制作物が要件どおりかの確認と、制作チームへの指示</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：JILPT「第5回改定 厚生労働省編職業分類 職業分類表」017-01 ウェブデザイナー（p.108）の分類注記(5)。右列は公的な定義ではなく、当サイトによる例示です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            職業分類の説明には「企画」や「予算・制作要員の確保」は含まれておらず、これらはWebプロデューサーの仕事として書かれています。ただし、実際の求人では、Webディレクターがサイトの企画や顧客との要件のすり合わせ、公開後のアクセス解析まで担う例もあり、担当範囲は企業によって異なります。求人を比較する際は、肩書きではなく「企画から担うか」「予算に責任を持つか」を確認することをおすすめします。
          </p>
        </section>

        <section id="compare" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Webプロデューサー・デザイナー・プログラマーとの違い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            厚生労働省編職業分類の説明をもとに、Webディレクターと近い職業の違いを当サイトで整理しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">職業名</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">厚生労働省編職業分類の小分類</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">分類表の説明（当サイト要約）</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r) => (
                  <tr key={r.name}>
                    <td className="border border-slate-200 px-3 py-2">{r.name}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.code}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.work}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：JILPT「第5回改定 厚生労働省編職業分類 職業分類表」010-03（p.91）、017-01（p.108）、020-99（p.118）、033-03、043-01ほか。要約は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            比較すると、Webディレクターの説明（予算・要員・進捗・品質の管理、業務の監督）は、ITプロジェクトマネージャ（010-03）の説明とほぼ同じ管理項目を挙げています。違いは対象で、ITプロジェクトマネージャはシステム開発のプロジェクト全体、Webディレクターはウェブサイトの制作を対象としています。分類上も、ITプロジェクトマネージャは大分類02「研究・技術の職業」、Webディレクターは大分類03「法務・経営・文化芸術等の専門的職業」と、別の大分類に置かれています。
          </p>
        </section>

        <section id="data" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Web関連18職業名の分類（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「Web系の仕事」と一口に言っても、公的な職業分類ではいくつもの分類に分かれています。当サイトでは、厚生労働省編職業分類の第5章「小分類項目名及び例示職業名索引」から、名称に「Web」「WEB」「ウェブ」「HTML」「ホームページ」のいずれかを含む項目を抜き出し、所属する小分類・大分類ごとに集計しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">大分類</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">小分類</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">該当する職業名</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">件数</th>
                </tr>
              </thead>
              <tbody>
                {webRows.map((r) => (
                  <tr key={r.minor}>
                    <td className="border border-slate-200 px-3 py-2">{r.major}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.minor}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.names}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.count}</td>
                  </tr>
                ))}
                <tr className="bg-slate-50 font-medium">
                  <td className="border border-slate-200 px-3 py-2" colSpan={3}>合計（3大分類・7小分類）</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">18</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">算出方法：JILPT公表の職業分類表PDF（shokugyo05.pdf、全522ページ）をpdftotextでテキスト化し、索引から上記の語を含む項目を抽出して、本文の小分類の説明と照合しました（2026年11月27日、当サイト実施）。表記ゆれ（ウェブデザイナー／Webデザイナー）は索引どおり別件として数えています。小分類名そのもの（ソフトウェア開発技術者（WEB・オープン系）、ウェブデザイナー、ホームページ関連事務員）も1件に含めています。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            18件は、研究・技術の職業（大分類02）、法務・経営・文化芸術等の専門的職業（大分類03）、事務的職業（大分類06）に6件ずつ分かれていました。Webディレクターが属する020-99に入るのは、Webディレクター・Webプロデューサーの2件だけです。ウェブサイトの仕事のうち、プログラムを書く仕事は技術職、デザインと制作の指揮・監督は専門職、企画事務や更新作業は事務職として扱われていることになります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            なお、賃金の公的統計である令和7年賃金構造基本統計調査の職種（小分類）第1表に掲載されている職種名を当サイトですべて確認したところ、Webディレクターに当たる独立した職種区分はありませんでした。そのため、本記事ではWebディレクターの平均年収を掲載していません。
          </p>
        </section>

        <section id="cert" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">必要な資格と関連する民間資格</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            当サイトの確認範囲では、Webディレクターとして働くために必須とされる資格はありません。知識を示す手段として、次のような民間資格があります。いずれもWebディレクターの専用資格ではなく、解析や制作の知識を確認するものです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">資格名（実施団体）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主な内容</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">試験の形式・費用（公式サイトの記載）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">ウェブ解析士（一般社団法人ウェブ解析士協会）</td><td className="border border-slate-200 px-3 py-2">KPI設計、ユーザー行動分析、広告効果測定、GA4の操作と活用など。2025年版から生成AIの活用と評価も出題範囲</td><td className="border border-slate-200 px-3 py-2">オンライン・4択60問・60分。受験料17,600円（税込・認定費用込）、公式テキスト4,400円</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">Webクリエイター能力認定試験（サーティファイ）</td><td className="border border-slate-200 px-3 py-2">HTML／CSSによるWebページのデザインとコーディング</td><td className="border border-slate-200 px-3 py-2">スタンダード60分・エキスパート110分。得点率65％以上で合格。受験料は2026年4月から6,400円（スタンダード）・8,000円（エキスパート）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：ウェブ解析士協会「ウェブ解析士とは」、サーティファイ「Webクリエイター能力認定試験」（いずれも2026年11月27日確認）。受験料は改定されることがあるため、申し込み前に公式サイトをご確認ください。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            職業分類の説明にある「予算・要員・進捗・品質の管理」は、プロジェクトマネジメントの考え方と重なります。体系的に学ぶ場合は、当サイトの<Link href="/knowledge/project-manager/" className="text-blue-600 hover:underline">プロジェクトマネージャーとは</Link>もあわせてご覧ください。
          </p>
        </section>

        <section id="related" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">制作・転職の詳しい情報</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            本記事はWebディレクターという職種の定義と公的な位置づけに絞ってご説明しました。近いテーマは次の記事で扱っており、それぞれ目的が異なります。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7">
            <li>サイトを自分で作る手順（ディレクションではなく制作の実務）：<Link href="/knowledge/website-howto/" className="text-blue-600 hover:underline">Webサイトの作り方</Link></li>
            <li>コードを書く側の職種への転職：<Link href="/skill/frontend/" className="text-blue-600 hover:underline">フロントエンドエンジニア転職ガイド</Link></li>
            <li>画面設計・体験設計の専門職への転身：<Link href="/knowledge/uiux/" className="text-blue-600 hover:underline">UI/UXエンジニアへの転身ガイド</Link></li>
            <li>システム開発の管理職種との比較：<Link href="/knowledge/project-manager/" className="text-blue-600 hover:underline">プロジェクトマネージャーとは</Link></li>
            <li>IT職種の全体像：<Link href="/knowledge/it-engineer-types/" className="text-blue-600 hover:underline">ITエンジニアの種類一覧</Link></li>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月27日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>JILPT「職業分類表 改定の経緯とその内容」掲載ページ：https://www.jil.go.jp/institute/seika/shokugyo/bunrui/index.html</li>
            <li>JILPT「第5回改定 厚生労働省編職業分類 職業分類表」（010-03、017-01、020-99、033-03、036-04、043-01、第5章 索引）：https://www.jil.go.jp/institute/seika/shokugyo/bunrui/documents/shokugyo05.pdf</li>
            <li>総務省「日本標準職業分類」（平成21年12月告示、小分類224・249）：https://www.soumu.go.jp/main_content/000661290.pdf</li>
            <li>厚生労働省「令和7年賃金構造基本統計調査」職種（小分類）第1表（e-Stat）：https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421116</li>
            <li>一般社団法人ウェブ解析士協会「ウェブ解析士とは」：https://www.waca.or.jp/license/wa/</li>
            <li>サーティファイ「Webクリエイター能力認定試験」：https://www.sikaku.gr.jp/web/wc/</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "プロジェクトマネージャーとは", href: "/knowledge/project-manager/" },
              { name: "Webサイトの作り方", href: "/knowledge/website-howto/" },
              { name: "フロントエンドエンジニア転職ガイド", href: "/skill/frontend/" },
              { name: "UI/UXエンジニアへの転身ガイド", href: "/knowledge/uiux/" },
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
