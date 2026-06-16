import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "DMM.com エンジニア転職ガイド【2026年版】技術・選考の実態と年収の考え方",
  description:
    "DMM.com（合同会社DMM.com）へのエンジニア転職を実データで解説。非上場のため平均年収は公式非開示である点を明記し、Go/PHP/TypeScript等の技術スタック、50以上の事業領域、選考フロー、30代40代の現実までまとめました。",
};

const basicData: [string, string][] = [
  ["企業名", "合同会社DMM.com（非上場。持株会社は合同会社DMM.com Group）"],
  ["事業領域", "動画配信・電子書籍・ゲーム・オンライン英会話・FX/金融・太陽光発電など50以上の事業"],
  ["平均年間給与", "公式非開示（非上場の合同会社で有価証券報告書の提出義務がないため）"],
  ["平均年齢", "公式非開示（同上）"],
  ["従業員数", "DMMグループ全体で多数（公式採用ページで最新値を確認）"],
  ["本社所在地", "東京都港区（六本木）"],
  ["技術スタック（公式情報ベース）", "Go / PHP / Python / Ruby / TypeScript / React / Vue.js / Django / Rails / MySQL / AWS / GCP（事業・チームにより異なる）"],
];

const toc = [
  ["conclusion", "結論：難易度と向いているエンジニア"],
  ["basic", "基本データ（出典付き）"],
  ["salary-note", "年収について（重要・非開示の前提）"],
  ["features", "エンジニア採用の特徴"],
  ["stack", "技術スタック（公式情報ベース）"],
  ["flow", "選考フロー"],
  ["interview", "面接で重視される点"],
  ["middle", "30代・40代エンジニアの視点"],
  ["agents", "転職におすすめのエージェント"],
  ["faq", "よくある質問"],
  ["related", "関連記事"],
];

const faqs = [
  {
    q: "DMM.comの平均年収はいくらですか？",
    a: "DMM.com（合同会社DMM.com）は非上場の合同会社であり、有価証券報告書の提出義務がないため、平均年間給与・平均年齢といった公式の開示データは存在しません。当ページでは創作した数値は掲載していません。実際の提示年収は、募集ポジション・等級・スキルにより決まるため、公式採用ページや転職エージェント経由で個別に確認するのが確実です。",
  },
  {
    q: "なぜDMMの年収データが載っていないのですか？",
    a: "上場企業は有価証券報告書で平均年間給与を開示しますが、DMM.comは非上場の合同会社のため、この開示義務がありません。出典のない年収額を掲載することは正確性・信頼性の観点で適切でないと判断し、本ページでは「非開示」と正直に明記しています。",
  },
  {
    q: "DMM.comのエンジニア選考フローは？",
    a: "公開されている採用情報によると、エンジニア職はスキルチェックシート等を提出して書類選考され、適性検査や複数回の面接（技術面接・課題を含む場合あり）を経て内定に至るのが一般的です。中途は即戦力採用が多く、実務経験が重視されます。職種により内容が異なるため、各求人で確認してください。",
  },
  {
    q: "DMM.comの技術スタックは？",
    a: "公式技術ブログ・採用情報によると、組織として開発言語をGoに統一する取り組みを進めている部門がある一方、Python/Django、Ruby on Rails、TypeScript/React/Vue.jsなど、事業・チームにより多様な技術が使われています。インフラはAWS・GCPが用いられます。",
  },
  {
    q: "DMM.comは何の会社ですか？事業領域は？",
    a: "DMMグループは、動画配信・電子書籍・オンラインゲーム・オンライン英会話・FX/金融・太陽光発電など50以上の事業を展開する企業グループです。エンタメ・ゲーム・金融を軸に幅広い領域でサービスを運営しているのが特徴です。",
  },
  {
    q: "DMM.comのエンジニアに求められる経験は？",
    a: "公開情報によると、中途では即戦力採用が中心で、実務経験（目安として3年程度）が求められるポジションが多い傾向です。事業領域が広いため、Web・ゲームプラットフォーム・インフラなど、応募する領域に合った経験が重視されます。",
  },
  {
    q: "30代・40代でもDMM.comに転職できますか？",
    a: "DMMは多数の事業を抱え、即戦力を求めるポジションが多いため、特定領域での専門性・実績を持つ30代・40代のミドルエンジニアにとって挑戦しやすい環境といえます。年収は非開示のため、提示額は個別求人・面談で必ず確認しましょう。",
  },
];

export default function DmmCompanyPage() {
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
      <ArticleJsonLd title="DMM.com エンジニア転職ガイド" description="DMM.com（合同会社DMM.com）へのエンジニア転職を実データで解説。非上場のため平均年収は公式非開示である点を明記し、Go/PHP/TypeScript等の技術スタック、50以上の事業領域、選考フロー、30代40代の現実までまとめました。" url="/company/dmm/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "GCPの転職ガイド", href: "/skill/gcp/" }, { name: "フロントエンドスペシャリスト路線の転職ガイド", href: "/skill/react/" }, { name: "Vue.jsの転職ガイド", href: "/skill/vue/" }, { name: "フルスタックの転職ガイド", href: "/skill/typescript/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "DMM.com" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">DMM.com エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | 50以上の事業を展開する非上場メガベンチャーのエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          DMM.com（合同会社DMM.com）は、動画配信・電子書籍・オンラインゲーム・オンライン英会話・FX/金融・太陽光発電など50以上の事業を展開する企業グループです。<strong>非上場の合同会社であり、上場企業のような有価証券報告書による平均年収の開示はありません。</strong>本ページでは、公式採用ページ・公式技術ブログ等の公開情報をもとに、創作した数値を用いずにエンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "DMMグループ公式 採用ページ／技術ブログ（inside.dmm.com 等）",
            "DMM公式 企業情報",
            "口コミプラットフォーム（傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              DMM.comは<strong>50以上の事業を抱え、Goへの統一などモダンな技術投資も進める非上場メガベンチャー</strong>です。事業領域が非常に広く、Web・ゲームプラットフォーム・インフラなど多様なポジションがあります。非上場のため平均年収は公式非開示で、提示額は個別求人での確認が前提です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：特定領域での実務経験（即戦力）があり、幅広い事業の中で挑戦したいエンジニア</li>
              <li>● <strong>向いていない人</strong>：開示された年収データを重視して応募先を決めたい人（DMMは非開示）</li>
              <li>● <strong>30代・40代</strong>：専門性・実績があれば即戦力として評価されやすい</li>
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
          <p className="text-xs text-slate-400 mt-2">※DMM.comは非上場の合同会社のため、有価証券報告書による平均年収・平均年齢の公式開示はありません。技術スタック・事業領域は公式採用情報・技術ブログ等の公開情報ベース（2026年6月時点）。</p>
        </section>

        <section id="salary-note" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収について（重要・非開示の前提）</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-sm text-amber-900 leading-relaxed space-y-3">
            <p>
              上場企業は有価証券報告書で「平均年間給与」を開示しますが、<strong>DMM.comは非上場の合同会社であり、この開示義務がありません</strong>。そのため、公式な平均年収・平均年齢のデータは存在しません。
            </p>
            <p>
              本ページでは、出典のない年収額を創作して掲載することはしていません。各種口コミサイトに参考値が出ることはありますが、サンプル数や母集団が不明で、提出会社ベースの公式データとは性質が異なります。
            </p>
            <p>
              実際の提示年収は、募集ポジション・等級・スキル・経験により決まります。<strong>正確な金額は、DMM公式採用ページの求人票、または転職エージェント経由で個別に確認するのが確実です。</strong>
            </p>
          </div>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">50以上の事業を横断する開発機会</h3>
              <p className="text-sm text-petrol-deep">DMMグループは動画・電子書籍・ゲーム・英会話・FX/金融・太陽光発電など極めて幅広い事業を展開しています。Web、ゲームプラットフォーム、インフラ、データなど多様な領域のポジションがあり、関心に合わせたキャリア選択がしやすいのが特徴です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Goへの統一などモダンな技術投資</h3>
              <p className="text-sm text-petrol-deep">公式技術ブログによると、一部の組織では開発言語をGoに統一し、チーム間でノウハウを共有する取り組みが進められています。技術発信（inside.dmm.com等）にも積極的で、技術改善への投資が見られます。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">即戦力中心の中途採用</h3>
              <p className="text-sm text-petrol-deep">公開情報によると、中途採用は即戦力を求めるポジションが多く、実務経験（目安3年程度）が重視されます。応募する事業・領域での経験が評価されやすい傾向です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            DMMは事業・チームにより技術スタックが大きく異なります。公開されている技術ブログ・採用情報で確認できる主な技術は以下の通りです。応募先の求人で実際の構成を確認してください。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>サーバーサイド</strong>：Go（言語統一の取り組みあり）、PHP、Python（Django）、Ruby（Rails）</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Webフロントエンド</strong>：TypeScript、React、Vue.js</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>データベース</strong>：MySQL 等</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>インフラ</strong>：AWS、GCP、Docker（AWS Fargate等のコンテナ運用事例あり）</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: DMMグループ公式 技術ブログ（inside.dmm.com 等）／採用情報（2026年6月時点）。事業・チーム別の構成です。</p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開されている採用情報をもとにした一般的な流れです。最新の内容は<a href="https://dmm-corp.com/recruit/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">公式採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>書類選考（スキルチェックシート・職務経歴書等）</li>
            <li>適性検査（ポジションにより実施）</li>
            <li>面接（複数回。技術面接・課題を含む場合あり）</li>
            <li>最終面接</li>
            <li>内定・オファー面談</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: DMMグループ公式 採用ページ／選考体験談の要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>即戦力としての実務経験・技術力（応募領域の言語/技術）</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>技術面接・課題で示す実装力と設計の妥当性</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>応募事業・プロダクトへの理解と志望動機</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>チームでの協働姿勢・主体性</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              DMMは多数の事業を抱え、即戦力を求めるポジションが多いため、<strong>特定領域での専門性・実績を持つ30代・40代のミドルエンジニアにとって挑戦しやすい</strong>環境です。Goへの統一など技術改善も進んでおり、レガシー刷新やアーキテクチャ設計といったミドル層の強みが活きる場面もあります。
            </p>
            <p>
              年収面では、DMMは非上場で公式の年収開示がないため、本ページでは具体額を示しません。参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円ですが、これは業界全体の目安であり、DMMの提示額は個別求人によります。30代・40代は<strong>提示額・等級・評価制度を面談で必ず確認する</strong>ことが重要です。
            </p>
            <p>
              事業領域が広いため、これまでの専門性に合うポジションを選べる点はミドル層にメリットです。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">DMM転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。メガベンチャー求人に強く、非公開求人も豊富。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。実務経験者への提案数が多く提案スピードが速い。" },
              { name: "Green", href: "/review/green/", desc: "IT/Webベンチャーに強い成功報酬型転職サイト。カジュアル面談中心。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">非開示企業は提示年収の見極めが重要です。<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉のコツ</Link>や<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">エージェント併用のコツ</Link>も参考にしてください。</p>
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
          <h2 className="text-xl font-bold mb-3">DMMへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">非開示企業の提示年収はエージェント経由で把握しやすくなります。無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "GMOインターネットグループ エンジニア転職ガイド", href: "/company/gmo-internet/" },
              { name: "サイバーエージェント エンジニア転職ガイド", href: "/company/cyberagent/" },
              { name: "DeNA エンジニア転職ガイド", href: "/company/dena/" },
              { name: "KADOKAWA エンジニア転職ガイド", href: "/company/kadokawa/" },
              { name: "年収交渉のコツ", href: "/knowledge/salary-negotiation/" },
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
