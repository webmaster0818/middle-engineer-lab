import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/cookpad/" },
  title: "クックパッドへのエンジニア転職｜年収・技術スタック・選考の現実",
  description:
    "クックパッドのエンジニア中途採用を有価証券報告書・公式技術ブログの一次情報で解説。平均年収約948万円(2024年12月期)、世界最大級のRailsモノリス、30代40代の現実を中立にまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：転職難易度と向くエンジニア" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "feature", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術スタック（公開情報）" },
  { id: "salary", label: "年収データ" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "社員口コミの傾向" },
  { id: "middle", label: "30代・40代から見たクックパッド" },
  { id: "agent", label: "おすすめエージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "クックパッド株式会社（証券コード2193・東証）"],
  ["業種", "料理レシピサービス／フードテック（Webサービス）"],
  ["平均年収", "約948万円（2024年12月期・提出会社単体／全従業員平均・賞与含む）"],
  ["事業内容", "レシピサービス「cookpad」の国内・海外運営、生鮮食品EC等"],
  ["従業員数", "提出会社単体で約100名規模に縮小（事業再編後）"],
  ["技術スタック", "Ruby on Rails（世界最大級のモノリス）／AWS（ECS）／自社製Hako／GitHub Actions（self-hosted runner）"],
];

const salaryRows: [string, string][] = [
  ["平均年収（提出会社単体・全従業員）", "約948万円"],
  ["対象年度", "2024年12月期（有価証券報告書）"],
  ["集計範囲", "エンジニア以外も含む全従業員平均"],
  ["留意点", "事業再編で従業員約100名規模に縮小。中核人材中心の構成で平均が高めに出ている可能性"],
];

const faqs = [
  { q: "クックパッドはエンジニアの中途採用を行っている？", a: "クックパッドは継続的にソフトウェアエンジニアの中途採用を行ってきた企業です。ただし近年は事業再編により従業員規模が大きく縮小しており、募集職種・募集枠は時期によって大きく変動します。最新の募集状況は必ず公式採用ページでご確認ください。" },
  { q: "クックパッドの平均年収はいくら？", a: "2024年12月期の有価証券報告書によると、提出会社（クックパッド株式会社単体）の平均年間給与は約948万円です。これは賞与を含む全従業員（エンジニア以外も含む）の平均で、職種別・等級別の内訳は公式に開示されていません。なお、事業再編で従業員数が約100名規模に縮小しており、中核人材中心の構成となっているため平均が高めに出ている可能性がある点に留意が必要です。" },
  { q: "クックパッドのエンジニア職の提示年収レンジは公開されている？", a: "クックパッドは職種別・等級別の年収レンジを公式に常時開示していません。求人サイトでも継続的に公開される確定レンジがないため、当ガイドでは推測の数値表は掲載していません。目安として有価証券報告書の平均約948万円（2024年12月期）が参考値になりますが、これは全従業員平均である点に注意してください。" },
  { q: "クックパッドで使われている技術スタックは？", a: "クックパッドは世界最大級規模のRuby on Railsモノリスを運用してきたことで知られ、Rubyコミッターが在籍するなどRubyコミュニティへの貢献が大きい企業です。インフラはAWS上でコンテナ（ECS）を活用し、自社製のデプロイツール「Hako」やGitHub Actionsのself-hosted runnerを用いた開発基盤が技術ブログで公開されています。" },
  { q: "クックパッドの選考フローは？", a: "クックパッドは選考フローの詳細を公式に網羅的には公開していません。一般的なWeb企業と同様、書類選考→複数回の面接（技術面接を含む）→内定という流れが想定されますが、具体的な回数・内容は職種・時期により異なります。創作した固定フローは掲載せず、最新は公式採用ページや担当エージェントで確認することをおすすめします。" },
  { q: "クックパッドの事業再編は転職にどう影響する？", a: "クックパッドは過去数年で事業の選択と集中・海外事業の整理などを進め、従業員規模が大きく縮小しました。これは「少人数の中核チームで大規模サービスを運用する」フェーズを意味し、入社後に一人あたりが担う技術的責任は大きくなる傾向があります。組織の安定性・事業の方向性は応募前に最新のIR情報で確認することが重要です。" },
  { q: "クックパッドへの転職で有利な経験は？", a: "公開情報からは、Ruby on Railsによる大規模・長寿命サービスの開発運用経験、モノリスの保守・リファクタリング経験、AWS上でのコンテナ運用やCI/CD整備の経験が親和性が高いと考えられます。少人数で広い領域をカバーする自走力も評価されやすい傾向があります。" },
  { q: "クックパッドのエンジニア転職は未経験でも可能？", a: "クックパッドの中途採用は即戦力の経験者採用が基本です。特に組織縮小後は少数精鋭の構成となっており、完全未経験からの参入は現実的ではありません。まずはRubyやWebサービス開発の実務経験を別企業で積むのが一般的な道筋です。" },
];

export default function CookpadCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="クックパッド エンジニア転職ガイド" description="クックパッドへのエンジニア転職を有価証券報告書・公式技術ブログの一次情報で解説。平均年収約948万円(2024年12月期)、世界最大級のRailsモノリス、技術スタックをまとめました。" url="/company/cookpad/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "クックパッド" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">クックパッドへのエンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          クックパッド株式会社へのエンジニア中途採用について、有価証券報告書と公式技術ブログの一次情報をもとに、転職難易度・年収・技術スタック・選考の実態を中立にまとめました。月間数千万人規模の料理レシピサービスを、世界最大級のRuby on Railsモノリスで支えてきた、Rubyエンジニアにとって象徴的な企業です。事業再編で組織規模が縮小している点も含めて、30代・40代が押さえるべき現実を解説します。
        </p>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 出典は各データの直後に明記しています。</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】クックパッドの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: クックパッド株式会社の平均年間給与は約948万円です（2024年12月期 有価証券報告書・提出会社単体／全従業員平均・賞与含む）。ただし事業再編で従業員が約100名規模に縮小しており、中核人材中心で平均が高めに出ている可能性があります。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・平均年収 約948万円（2024年12月期 有報・単体全従業員平均）。エンジニア以外も含む平均です。</li><li>・事業再編で従業員が約100名規模に縮小し、中核人材中心の構成のため平均が高めに出ている可能性に留意が必要です。</li><li>・職種別・等級別の年収レンジは非開示。当ガイドでは創作した数値表は掲載していません。実額は求人・面談でご確認ください。</li></ul>
        </div>

        <DataNote surveyedAt="2026年6月" sources={["クックパッド 有価証券報告書（2024年12月期）", "クックパッド開発者ブログ（techlife）", "IRBANK", "OpenWork（口コミ傾向）"]} />

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度と向くエンジニア</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-sm text-blue-900 font-bold mb-3">転職難易度：高い（少数精鋭・Railsの大規模運用経験者向け）</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・中核は<strong>世界最大級規模のRuby on Railsモノリス</strong>。長寿命・大規模サービスの設計・運用経験者に向く。Rubyコミッターが在籍する技術文化が魅力。</li>
              <li>・事業再編で<strong>従業員が約100名規模に縮小</strong>。少人数で広い領域を担うため、自走力と技術的責任を引き受ける姿勢が求められる。</li>
              <li>・有報の平均年収は<strong>約948万円（2024年12月期・単体・全従業員平均）</strong>だが、中核人材中心の構成で平均が高めに出ている可能性に留意。</li>
            </ul>
            <p className="text-xs text-blue-800 mt-3">逆に、大人数の整った組織で役割分担された開発を望む人や、事業の安定性を最優先する人は、組織規模・事業の方向性を最新のIRで見極めることをおすすめします。</p>
          </div>
        </section>

        <nav aria-label="目次" className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="basic" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（出典付き）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm"><tbody>
              {basicData.map(([label, value], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}><th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td></tr>
              ))}
            </tbody></table>
          </div>
          <p className="text-xs text-slate-500">出典：クックパッド「有価証券報告書」2024年12月期（提出会社＝クックパッド株式会社単体の従業員データ）、IRBANK集計、クックパッド開発者ブログ。従業員数は事業再編後の概数で、最新値は各IR資料をご確認ください。</p>
        </section>

        <section id="feature" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">世界最大級のRailsモノリスを運用する文化</h3><p className="text-sm text-petrol-deep">クックパッドは長年にわたり、巨大なRuby on Railsモノリスでサービスを運用してきたことで国内外に知られています。Rubyコミッターが在籍し、OSSやRubyコミュニティへの貢献が活発な点は、Rubyエンジニアにとって大きな魅力です。大規模コードベースの設計・改善に向き合えるかが採用のポイントになります。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">少人数の中核チームで広い領域を担う</h3><p className="text-sm text-petrol-deep">事業再編により従業員が約100名規模に縮小した結果、一人あたりが担当する技術領域は広くなる傾向があります。フロントからインフラ、運用までを横断的に見られる自走力のあるエンジニアが活躍しやすい環境です。役割が細分化された大組織とは異なる働き方になります。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">公開された技術基盤と発信文化</h3><p className="text-sm text-petrol-deep">クックパッド開発者ブログ（techlife）では、AWS上のコンテナ運用、自社製デプロイツール、CI/CDの工夫などが継続的に発信されてきました。技術発信に積極的な文化があり、外部からも開発の実態を把握しやすいのが特徴です。</p></div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式技術ブログの公開情報）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">以下はクックパッドの公式技術ブログ・公開発表で確認できる範囲の情報です。確認できない言語・ツールは記載していません。</p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Ruby on Rails</strong>：サービスの中核。世界最大級規模のモノリスを運用。Rubyコミッターが在籍</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>AWS（ECS）</strong>：クラウド基盤。コンテナでアプリケーションを運用</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Hako</strong>：自社製のコンテナデプロイツール（OSSとして公開）</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>GitHub Actions（self-hosted runner）</strong>：CI/CDの実行基盤</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：クックパッド開発者ブログ（techlife）、公開された技術登壇・OSSリポジトリ。Rubyの基礎は<Link href="/skill/ruby/" className="text-petrol hover:underline">Ruby/Railsエンジニアの転職市場</Link>もあわせてご覧ください。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100"><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">項目</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">内容（2024年12月期・提出会社単体）</th></tr></thead>
              <tbody>{salaryRows.map(([k, v], i) => (<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{k}</td><td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium">{v}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-2">
            上表はクックパッドの<strong>有価証券報告書（2024年12月期）</strong>に記載された提出会社（クックパッド株式会社単体）の数値です。これは<strong>エンジニア以外も含む全従業員の平均</strong>であり、職種別・等級別の年収は公式に開示されていません。特に重要なのは、<strong>事業再編で従業員が約100名規模に縮小し、中核人材中心の構成になっている</strong>点で、これにより平均年収が高めに出ている可能性があります。そのため当ガイドでは出典のない等級別年収表は掲載していません。
          </p>
          <p className="text-xs text-slate-500">出典：クックパッド「有価証券報告書」2024年12月期、IRBANK集計。エンジニア職の提示年収レンジは公式・求人サイトで継続的に確認できる公開値がないため記載を控えています。年代別の相場感は<Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収相場</Link>・<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>を参照してください。</p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公開情報の範囲）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">クックパッドは選考フローの詳細な回数・内容を公式に網羅的には公開していません。創作した固定フローは掲載せず、一般的なWeb企業の中途採用で想定される大枠のみを示します。</p>
          <ol className="space-y-3">
            {[
              ["STEP 1", "書類選考", "公式採用ページまたはエージェント経由で応募。職務経歴・実績を確認。"],
              ["STEP 2", "面接（複数回）", "技術面接を含む複数回の面接が想定される。回数・形式は職種・時期で変動。"],
              ["STEP 3", "内定", "条件提示。具体的な選考期間は公式に明示されていない。"],
            ].map(([step, title, desc], i) => (
              <li key={i} className="flex gap-4 border border-slate-200 rounded-lg p-4">
                <span className="shrink-0 text-xs font-bold text-petrol-deep bg-petrol-soft rounded px-2 py-1 h-fit">{step}</span>
                <div><p className="font-bold text-slate-800 text-sm mb-1">{title}</p><p className="text-sm text-slate-600">{desc}</p></div>
              </li>
            ))}
          </ol>
          <p className="text-xs text-slate-500 mt-2">注：上記は一般的な想定であり、クックパッド固有の確定フローではありません。最新は公式採用ページ・担当エージェントでご確認ください。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">具体的な面接質問リストは公式に公開されておらず、断定はできません。公開情報と口コミプラットフォームの傾向から、評価されやすいと考えられるポイントを一般化して挙げます。</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>Ruby on Railsによる大規模・長寿命サービスの設計・運用への理解</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>モノリスの保守性・リファクタリングや技術的負債への向き合い方</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>少人数で広い領域を担う自走力・オーナーシップ</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>AWS上でのコンテナ運用・CI/CD整備の実務経験</li>
          </ul>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">社員口コミの傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、クックパッドについて<strong>「技術力の高いエンジニアが多くRubyの技術文化が魅力」「裁量が大きく自走できる人には面白い環境」</strong>という声が見られる一方、<strong>「事業再編・組織変更の影響が大きく、事業の方向性に不安を感じる場面があった」「規模縮小により体制が流動的になった時期がある」</strong>といった指摘も見られます。技術への評価は高い一方、組織・事業の安定性については時期による変動を踏まえた見極めが必要です。
          </p>
          <p className="text-xs text-slate-500">出典：OpenWork掲載の社員クチコミの傾向を要約（個別スコア・原文の転載はしていません）。評価は部署・時期・職種により大きく異なります。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たクックパッド</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>30代・40代のRuby/Railsエンジニアにとって、クックパッドは「大規模モノリスと長く向き合ってきた技術的蓄積」を直接活かせる希少な環境です。長寿命サービスの設計判断・技術的負債との付き合い方といった、ミドル層の経験が最も価値を発揮する領域が中核にあります。Rubyコミッターが在籍する文化のなかで、自身の専門性をさらに深められる点は大きな魅力です。</p>
            <p>一方で、事業再編により従業員が約100名規模に縮小している点は、ミドル層こそ慎重に評価すべきポイントです。少人数体制は裁量と責任が大きい反面、組織の安定性や事業の方向性が流動的になりやすい側面もあります。家庭や生活基盤が固まっている40代では特に、入社前に最新のIR情報で事業の現状を確認し、自分のキャリアプランと照らし合わせることが重要です。</p>
            <p>転職活動では、ミドル層の年収交渉・市場価値の整理も押さえておきたいところです。<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の把握</Link>や<Link href="/knowledge/40s-reality/" className="text-petrol hover:underline">40代エンジニア転職の現実</Link>、Web系への移行を考える場合は<Link href="/industry/sier-to-web/" className="text-petrol hover:underline">SIerからWeb系への転職</Link>もあわせて確認してください。</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-800 text-sm mb-3">向いている人</p>
              <ul className="space-y-2 text-sm text-green-900">
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>Ruby on Railsの大規模・長寿命サービス開発経験者</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>モノリスの保守・改善や技術的負債と向き合うのが好き</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>少人数で広い領域を自走的に担いたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>Rubyコミュニティ・OSS貢献の文化に魅力を感じる</li>
              </ul>
            </div>
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-800 text-sm mb-3">向いていない人</p>
              <ul className="space-y-2 text-sm text-rose-900">
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>大人数の整った組織で役割分担された開発を望む</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>事業・組織の安定性を最優先したい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>Ruby以外のモダンスタックを主戦場にしたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>明確に整備された手順・教育体制を前提にしたい</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="agent" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">クックパッド転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化で高年収・Web系求人に強い。技術面接対策のサポートが受けられる。" }, { name: "Green", href: "/review/green/", desc: "Web系・自社開発企業の求人が豊富。Rubyやスタートアップ系に強み。" }, { name: "paiza転職", href: "/review/paiza/", desc: "コーディングスキルで評価される仕組み。技術力で勝負したい人向け。" }].map((agent, i) => (<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
          <p className="text-xs text-slate-500 mt-3">特定企業の求人保有状況は時期により変動します。複数社の併用で求人の取りこぼしを防ぐのが定石です。詳しくは<Link href="/compare/agents/" className="text-petrol hover:underline">エージェント比較</Link>を参照してください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">クックパッドへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">Web系・Ruby求人に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="faq" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ name: "Ruby/Railsエンジニアの転職市場", href: "/skill/ruby/" }, { name: "freeeの転職ガイド", href: "/company/freee/" }, { name: "マネーフォワードの転職ガイド", href: "/company/moneyforward/" }, { name: "BASEの転職ガイド", href: "/company/base/" }, { name: "STORESの転職ガイド", href: "/company/stores/" }, { name: "40代エンジニアの転職の現実", href: "/knowledge/40s-reality/" }].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
