import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/ntt/" },
  title: "NTT（日本電信電話）の年収は平均1069万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "NTT（持株会社・日本電信電話）へのエンジニア転職を実データで解説。有価証券報告書の持株単体平均年収1,069万円（2025年3月期）、IOWN・AI・クラウド等のR&D職種、選考フロー、30代40代の現実までまとめました。事業会社（ドコモ/データ等）とは別の点も明記。",
};

const salaryTrend: [string, string][] = [
  ["2021年3月期", "930万円"],
  ["2022年3月期", "952万円"],
  ["2023年3月期", "971万円"],
  ["2024年3月期", "1,023万円"],
  ["2025年3月期", "1,069万円"],
];

const basicData: [string, string][] = [
  ["企業名", "日本電信電話株式会社（NTT・持株会社／東証プライム・9432）"],
  ["事業領域", "グループ全体の経営戦略・基盤的研究開発（R&D）。通信・ITサービスはNTTドコモ、NTTデータ、NTT東日本／西日本等の事業会社が担当"],
  ["平均年間給与", "1,069万円（2025年3月期 有価証券報告書・提出会社＝持株単体の全社員平均）"],
  ["平均年齢", "41.8歳（2025年3月期 有価証券報告書・提出会社＝持株単体）"],
  ["本社所在地", "東京都千代田区"],
  ["技術領域（公式採用情報・R&D）", "IOWN（光・無線）、AI・データ分析、クラウド・コンテナ、ソフトウェア工学、セキュリティ等"],
];

const toc = [
  ["conclusion", "結論：難易度と向いているエンジニア"],
  ["basic", "基本データ（出典付き）"],
  ["structure", "持株会社と事業会社の違い（重要）"],
  ["features", "エンジニア採用の特徴"],
  ["stack", "技術領域・募集職種（公式採用情報ベース）"],
  ["salary", "年収データ（有価証券報告書ベース）"],
  ["flow", "選考フロー"],
  ["middle", "30代・40代エンジニアの視点"],
  ["agents", "転職におすすめのエージェント"],
  ["faq", "よくある質問"],
  ["related", "関連記事"],
];

const faqs = [
  {
    q: "NTTの平均年収はいくらですか？",
    a: "2025年3月期の有価証券報告書によると、提出会社である日本電信電話株式会社（NTT持株会社・単体）の平均年間給与は1,069万円、平均年齢は41.8歳です。これは持株会社単体の全社員平均であり、NTTドコモ・NTTデータ・NTT東日本／西日本など事業会社の数字とは異なります。",
  },
  {
    q: "NTT（持株）とNTTドコモ・NTTデータは別の会社ですか？",
    a: "はい。日本電信電話株式会社（NTT持株会社）はグループの経営戦略と基盤的研究開発（R&D）を担う会社で、実際の通信・ITサービスはNTTドコモ、NTTデータグループ、NTT東日本／西日本などの事業会社が担います。本ページの年収・技術領域は持株会社（および直下のR&D部門）に関するものです。",
  },
  {
    q: "NTT（持株）はどんなエンジニアを募集していますか？",
    a: "持株会社直下のNTT研究所（R&D）が経験者採用を行っており、IOWN構想（光を中心とした次世代基盤）、AI・データ分析、クラウド・コンテナ、IoT処理基盤、ソフトウェア工学、セキュリティなどの研究開発職が中心です。先端技術の研究志向が強い領域です。",
  },
  {
    q: "IOWNとは何ですか？",
    a: "IOWN（アイオン）は、光を中心とした革新的技術により、従来インフラの限界を超えた高速大容量通信と膨大な計算リソースを実現することを目指すNTTの次世代基盤構想です。NTT研究所では、そのアーキテクチャや通信・品質・オペレーション技術の研究開発が行われています。",
  },
  {
    q: "NTTへの転職難易度は高いですか？",
    a: "持株会社直下のR&Dは研究色が強く、該当領域の研究・開発実績や専門性が重視されます。事業に近い開発がしたい場合は、NTTドコモやNTTデータグループなどの事業会社の求人も選択肢になります。応募先が持株か事業会社かを意識することが重要です。",
  },
  {
    q: "NTT（持株）の働き方の評判は？",
    a: "OpenWork等の口コミプラットフォームでは、研究開発・大企業としての安定性や制度面を評価する声が見られます（2026年6月時点の口コミ傾向）。実態は研究所・部門により異なります。",
  },
  {
    q: "30代・40代でもNTT（持株・R&D）に転職できますか？",
    a: "提出会社（持株）の平均年齢は41.8歳とミドル層が中心で、経験者採用（中途）も行われています。研究・開発領域での実績や論文・OSS等のアウトプット、専門性があると評価されやすい傾向です。",
  },
];

export default function NttCompanyPage() {
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
      <ArticleJsonLd title="NTT（日本電信電話）エンジニア転職ガイド" description="NTT（持株会社・日本電信電話）へのエンジニア転職を実データで解説。有価証券報告書の持株単体平均年収1,069万円（2025年3月期）、IOWN・AI・クラウド等のR&D職種、選考フロー、30代40代の現実までまとめました。" url="/company/ntt/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "NTT（日本電信電話）" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">NTT（日本電信電話）エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | グループのR&Dを担う持株会社のエンジニア採用</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】NTT（日本電信電話）の年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 提出会社（持株会社・日本電信電話株式会社単体）の平均年間給与は1,069万円です（2025年3月期 有価証券報告書・全社員平均、平均年齢41.8歳）。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・平均年間給与 1,069万円（2025年3月期 有報・持株単体／全社員平均）。ドコモ・データ・東西など事業会社の数字とは異なります。</li><li>・推移は2021年3月期930万円→2023年3月期971万円→2024年3月期1,023万円→2025年3月期1,069万円と上昇傾向（各期 有報）。</li><li>・職種・等級別の公式レンジは非公表。提示は等級・役割で決まるため、求人・面談での確認が必要です。</li></ul>
        </div>

        <p className="text-slate-600 leading-relaxed mb-4">
          日本電信電話株式会社（NTT）は、グループ全体の経営戦略と基盤的研究開発（R&D）を担う東証プライム上場（証券コード9432）の持株会社です。通信・ITサービスはNTTドコモ、NTTデータグループ、NTT東日本／西日本などの事業会社が担っており、本ページが扱うのは<strong>持株会社（および直下のNTT研究所）</strong>です。有価証券報告書・公式採用情報・口コミプラットフォームの公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "日本電信電話 有価証券報告書（2025年3月期・第40期）",
            "NTT公式 採用ページ／NTT R&D 経験者採用",
            "NTT研究所（ソフトウェアイノベーションセンタ等）採用情報",
            "OpenWork（口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              NTT（持株）は<strong>IOWN・AI・クラウドなど次世代基盤の研究開発（R&D）を担う会社</strong>です。事業に近いサービス開発というより、先端技術の研究・基盤づくりに関わりたいエンジニア・研究者に向きます。サービス開発志向ならドコモ／データ等の事業会社が選択肢です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：IOWN・AI・クラウド基盤・ソフトウェア工学などの研究開発実績があり、長期視点の技術開発に取り組みたい人</li>
              <li>● <strong>向いていない人</strong>：エンドユーザー向けサービスを高速に開発・改善したい人（→事業会社が適）</li>
              <li>● <strong>30代・40代</strong>：持株単体の平均年齢41.8歳。研究・開発の専門性があればミドル中途の枠は現実的</li>
            </ul>
          </div>
        </section>

        <nav aria-label="目次" className="mb-10 border border-slate-200 rounded-xl p-5 bg-slate-50">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 text-sm">
            {toc.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="text-petrol hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="basic" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（出典付き）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-2/5 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢は2025年3月期 有価証券報告書に基づく提出会社（日本電信電話株式会社＝持株会社単体）の全社員平均値。事業会社（ドコモ・データ・東西等）の数字とは異なります。技術領域は公式採用情報（2026年6月時点）。</p>
        </section>

        <section id="structure" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">持株会社と事業会社の違い（重要）</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-sm text-amber-900 leading-relaxed space-y-3">
            <p>
              「NTT」と一口に言っても、応募先によって仕事内容も年収も大きく異なります。本ページの数字は<strong>持株会社（日本電信電話株式会社・単体）</strong>のものです。
            </p>
            <ul className="space-y-1.5">
              <li>● <strong>持株会社（本ページ）</strong>：グループの経営戦略と基盤的R&D。NTT研究所が先端技術を担当。</li>
              <li>● <strong>NTTドコモ</strong>：モバイル通信・スマートライフ等のサービス事業。</li>
              <li>● <strong>NTTデータグループ</strong>：SI・ITサービス（金融・公共・法人システム等）。当サイトの<Link href="/company/ntt-data/" className="text-petrol-deep underline">NTTデータ ガイド</Link>を参照。</li>
              <li>● <strong>NTT東日本／西日本</strong>：地域通信インフラ。</li>
            </ul>
            <p>サービス開発に近い仕事を望むなら事業会社、先端技術の研究・基盤開発を望むなら持株会社のR&Dが選択肢になります。</p>
          </div>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">基盤的研究開発（R&D）が中心</h3>
              <p className="text-sm text-petrol-deep">持株会社直下のNTT研究所は、グループ全体の基盤的研究開発を推進しています。IOWN構想に代表される次世代の通信・情報処理基盤など、長期視点の技術開発が中心で、研究色の強い募集が多いのが特徴です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">IOWN・AI・クラウドの先端領域</h3>
              <p className="text-sm text-petrol-deep">ネットワークサービスシステム研究所ではIOWN（光・無線）関連の研究、ソフトウェアイノベーションセンタではクラウド・コンテナ技術、AI処理基盤、IoT処理基盤、ソフトウェア工学などの研究開発が行われています。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">経験者採用（中途）の専用ルート</h3>
              <p className="text-sm text-petrol-deep">NTT R&Dは経験者採用の専用サイトを設けており、研究・開発の専門性を持つ人材を中途で受け入れています。研究成果や技術的なアウトプットが評価軸になりやすい領域です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術領域・募集職種（公式採用情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            NTT（持株）のR&Dは公式採用情報（NTT R&D 経験者採用・各研究所ページ、2026年6月時点）で、先端技術の研究開発職を募集しています。主な領域は以下の通りです。具体的な使用技術・必須要件は募集ポジションにより異なります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>IOWN・ネットワーク</strong>：光を中心とした次世代基盤、通信トラヒック・品質・オペレーション技術</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>AI・データ分析</strong>：AI処理基盤、先進的なデータ分析アルゴリズム</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>クラウド・コンテナ</strong>：ITサービスを支えるクラウド・コンテナ技術</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>IoT処理基盤</strong>：膨大なデータを扱うためのIoT処理基盤技術</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>ソフトウェア工学・セキュリティ</strong>：ソフトウェア工学分野の研究、セキュリティ技術</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: NTT公式 採用ページ／NTT R&D 経験者採用・各研究所紹介（2026年6月時点）。具体的な必須要件は各求人をご確認ください。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            上場企業である日本電信電話は、有価証券報告書で提出会社（持株会社単体）の平均年間給与を開示しています。<strong>2025年3月期は1,069万円（平均年齢41.8歳・持株単体の全社員平均）</strong>で、近年は上昇傾向にあります。なお、これは持株会社単体の数字で、事業会社（ドコモ・データ・東西等）の水準とは異なります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年度（決算期）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年間給与（持株会社単体・全社員平均）</th>
                </tr>
              </thead>
              <tbody>
                {salaryTrend.map(([year, val], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{year}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mb-4">出典: 日本電信電話 有価証券報告書（各年3月期）。いずれも技術職に限らない提出会社（持株会社単体）の<strong>全社員平均</strong>の平均年間給与です。エンジニア個人の年収は等級・役割により異なります。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">上記は持株会社単体の全社員平均であり、NTTドコモ・NTTデータ・NTT東西など事業会社の年収とは異なります。エンジニア職に限定した公式な提示年収レンジは一次情報が乏しいため本ページでは断定しません。提示額は募集ポジション・等級により幅があるため、個別求人ごとに確認するのが確実です。</p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            NTT R&D 経験者採用ページで公開されている一般的な流れです。最新の内容は<a href="https://group.ntt/jp/careers/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">NTT公式 採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>募集ポジション（研究所・テーマ）の確認・応募（エントリー）</li>
            <li>書類選考</li>
            <li>面接（複数回。研究・技術内容の確認を含む）</li>
            <li>内定・条件提示</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: NTT公式 採用ページ／NTT R&D 経験者採用の要約。選考は研究所・職種・時期により変動します。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              NTT（持株）は提出会社の平均年齢41.8歳（2025年3月期・全社員平均）と、ミドル層が中心の組織です。R&Dは専門性が評価軸になるため、30代・40代のミドルエンジニアでも<strong>IOWN・AI・クラウド基盤・ソフトウェア工学などの研究・開発実績があれば即戦力として歓迎されやすい</strong>環境です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。NTT持株の全社員平均（1,069万円）はこれを大きく上回りますが、これは管理職・上位等級を含む持株単体の全社平均であり、入社時の提示は等級・役割次第です。30代・40代は「自分が当てはまる等級の水準」を個別求人・面談で確認することが重要です。
            </p>
            <p>
              なお、サービス開発に近い仕事を望むなら<Link href="/company/ntt-data/" className="text-petrol hover:underline">NTTデータ</Link>などの事業会社、通信×ITなら<Link href="/company/kddi/" className="text-petrol hover:underline">KDDI</Link>や<Link href="/company/softbank/" className="text-petrol hover:underline">ソフトバンク</Link>も比較対象になります。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">NTT転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。研究開発・先端技術領域の求人にも対応し、非公開求人も豊富。" },
              { name: "JACリクルートメント", href: "/review/jac-recruitment/", desc: "大手・外資・ハイクラスに強く、研究職・専門職・管理職求人に対応。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。実務経験者への提案数が多く提案スピードが速い。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">複数エージェントの併用については<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">エージェント併用のコツ</Link>も参考にしてください。</p>
        </section>

        <section id="faq" className="mb-10">
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

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">NTTへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">研究開発・通信大手の転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "NTTデータ エンジニア転職ガイド", href: "/company/ntt-data/" },
              { name: "KDDI エンジニア転職ガイド", href: "/company/kddi/" },
              { name: "ソフトバンク エンジニア転職ガイド", href: "/company/softbank/" },
              { name: "金融業界のエンジニア転職", href: "/industry/finance/" },
              { name: "企業別エンジニア転職ガイド一覧", href: "/company/" },
              { name: "40代エンジニアの転職事情", href: "/age/40s/" },
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
