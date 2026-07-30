import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/sony/" },
  title: "ソニーグループの転職難易度と年収は？平均1155万円【2026年・有報】エンジニア転職ガイド",
  description:
    "ソニーグループのエンジニア中途採用を有価証券報告書・公式採用ページの一次情報で解説。提出会社平均年収1,155万円(2026年3月期)、ジョブ型人事、半導体・PlayStationの技術領域を中立にまとめました。",
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
  { id: "middle", label: "30代・40代から見たソニー" },
  { id: "agent", label: "おすすめエージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "ソニーグループ株式会社（証券コード6758・東証プライム）"],
  ["業種", "エレクトロニクス・ゲーム・半導体・エンタテインメント（持株会社）"],
  ["平均年収", "1,155万円（2026年3月期・提出会社＝持株会社単体／全従業員平均・賞与含む）"],
  ["平均年齢", "42.7歳（2026年3月期・提出会社単体）"],
  ["従業員数", "2,166名（2026年3月期・提出会社単体）／連結 約11万名"],
  ["本社所在地", "東京都港区"],
  ["人事制度", "ジョブグレード制（社員等級。I5までが一般社員層との社員言及あり）"],
  ["技術スタック", "C++ / Python / TypeScript / Verilog-HDL・SystemC（半導体）/ AWS・Azure 等（事業会社により異なる）"],
];

const salaryRows: [string, string][] = [
  ["平均年収（提出会社単体・全従業員）", "1,155万円"],
  ["平均年齢", "42.7歳"],
  ["対象", "ソニーグループ株式会社（持株会社）単体の従業員"],
];

const faqs = [
  { q: "ソニーグループはエンジニアの中途採用を行っている？", a: "はい。ソニーグループのキャリア採用ポータルや、ソニー株式会社・ソニーセミコンダクタソリューションズ・ソニーネットワークコミュニケーションズなど各事業会社の採用サイトで、経験者採用（キャリア採用）の募集が行われています。ソニーは持株会社制で多数の事業会社があるため、応募先・職種は会社ごとに分かれます。" },
  { q: "ソニーグループの平均年収はいくら？", a: "2026年3月期の有価証券報告書によると、提出会社（ソニーグループ株式会社単体＝持株会社）の平均年間給与は1,155万円、平均年齢42.7歳です。これは持株会社の全従業員（エンジニア以外も含む）の平均で、PlayStationや半導体などの事業会社ごとの給与水準は別途異なります。" },
  { q: "ソニーのエンジニア職の提示年収レンジは公開されている？", a: "ソニーは職種別・等級別の年収レンジを公式に開示していません。求人サイトでも常時公開されているわけではないため、当ガイドでは推測の数値表は掲載していません。基準値としては有価証券報告書の提出会社平均1,155万円が参考になりますが、これは持株会社単体の数値である点に注意が必要です。" },
  { q: "ソニーのジョブ型人事制度とは？", a: "ソニーは専門性を重視するジョブグレード制（社員等級制度）を採用しています。OpenWork上の社員言及では「I5までが一般社員層」といった等級構造への言及が見られます。技術スペシャリストとマネジメントの双方のキャリアパスがあるとされますが、等級ごとの具体的な給与レンジは公式開示されていません。" },
  { q: "ソニーグループにはどんなエンジニア職がある？", a: "PlayStation関連（ソニー・インタラクティブエンタテインメント）、CMOSイメージセンサー等の半導体設計（ソニーセミコンダクタソリューションズ）、ネットワーク・クラウドサービス、AV機器・カメラ・スマートフォンの製品開発など、ハードからソフト・クラウドまで幅広い領域があります。応募は各事業会社単位です。" },
  { q: "ソニーの半導体部門で使われる技術は？", a: "ソニーセミコンダクタソリューションズの採用情報では、CMOSイメージセンサーやシステムLSIのアナログ／デジタル回路設計、FPGA設計・実装に、Verilog-HDLやSystemCなどの開発言語が用いられると記載されています。電気電子・情報・物理・材料などの専攻知識が活きる職種が多いとされています。" },
  { q: "ソニーで英語力は必要？", a: "グローバル展開のプロジェクトや海外拠点との連携がある職種では英語が求められます。一方、国内中心のプロジェクトでは日本語主体のポジションもあります。必要な語学要件は各事業会社・各募集要項で異なるため、応募時に確認が必要です。" },
  { q: "ソニーグループへの転職で有利な経験は？", a: "募集会社により異なりますが、組み込み・画像処理・信号処理、半導体回路設計（Verilog-HDL/SystemC）、機械学習、クラウド／Web開発、ゲームプラットフォーム開発などの専門経験が評価されやすい傾向があります。担当領域での深い専門性が中途採用では重視されます。" },
];

export default function SonyCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="ソニーグループ エンジニア転職ガイド" description="ソニーグループへのエンジニア転職を有価証券報告書・公式採用ページの一次情報で解説。提出会社平均年収1,155万円(2026年3月期)、ジョブ型人事、半導体・PlayStationの技術領域をまとめました。" url="/company/sony/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "ソニーグループ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ソニーグループへのエンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          ソニーグループ株式会社（持株会社）と主要事業会社へのエンジニア中途採用について、有価証券報告書と公式採用ページの一次情報をもとに、転職難易度・年収・技術スタック・選考フローを中立にまとめました。PlayStation、世界シェア上位のイメージセンサー、AV・クラウドなど、ハードからソフトまで幅広い技術領域を持つ点が最大の特徴です。
        </p>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 出典は各データの直後に明記しています。</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】ソニーグループの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 有価証券報告書上の平均年間給与は1,155万円ですが、これは持株会社ソニーグループ株式会社（6758・提出会社単体、全従業員平均、平均年齢42.7歳、2026年3月期）の数値で、事業会社の現場エンジニアの水準を直接表すものではありません。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・提出会社=持株会社単体の平均年間給与 1,155万円（2026年3月期 有報・全従業員平均、対象2,166名）。</li><li>・持株会社のコーポレート機能中心の数値で、PlayStation・半導体などの事業会社の現場エンジニア年収を直接表しません。</li><li>・職種別・等級別（ジョブグレード制）の年収は非公開。提示は内定時に事業会社単位で個別確認が必要です。</li><li>・「ソニー エンジニア 年収」で検索される方へ: エンジニア職の公表実額はありません。有報値は持株会社の全職種平均であり、エンジニアの提示額はジョブグレードと事業会社(ソニー(株)・SIE等)で決まります。</li></ul>
        </div>

        <DataNote surveyedAt="2026年6月" sources={["ソニーグループ 有価証券報告書（2026年3月期）", "ソニー各社 公式採用サイト", "日本経済新聞 会社情報", "OpenWork（口コミ傾向）"]} />

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度と向くエンジニア</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-sm text-blue-900 font-bold mb-3">転職難易度：高い（専門特化・事業会社別の経験者採用）</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・半導体・PlayStation・クラウドなど<strong>領域ごとに事業会社が分かれる</strong>ため、自分の専門に合う応募先選びが起点。組み込み・画像処理・回路設計・機械学習などの専門家に向く。</li>
              <li>・<strong>ジョブグレード制</strong>で専門性が評価される一方、等級別の給与レンジは非公開。提出会社（持株会社）平均は<strong>1,155万円（2026年3月期・有報）</strong>。</li>
              <li>・選考は書類→専門面接が中心で、担当領域の<strong>深い技術的議論</strong>が問われやすい。</li>
            </ul>
            <p className="text-xs text-blue-800 mt-3">「ソニー」と一括りにせず、PlayStation（SIE）／半導体（SSS）など、どの事業会社の何の職種かを明確にして臨むことが重要です。</p>
          </div>
        </section>

        <nav aria-label="目次" className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {toc.map((t) => (<li key={t.id}><a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a></li>))}
          </ol>
        </nav>

        <section id="basic" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（出典付き）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm"><tbody>
              {basicData.map(([label, value], i) => (<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}><th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td></tr>))}
            </tbody></table>
          </div>
          <p className="text-xs text-slate-500">出典：ソニーグループ「有価証券報告書」2026年3月期（提出会社＝ソニーグループ株式会社＝持株会社単体の従業員データ）、日本経済新聞 会社情報、各事業会社の採用サイト。<strong>提出会社は持株会社のため、平均年収はPlayStationや半導体などの事業会社の実態を直接表すものではありません。</strong></p>
        </section>

        <section id="feature" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">持株会社制で事業会社ごとに採用</h3><p className="text-sm text-petrol-deep">ソニーグループは持株会社制をとり、PlayStation（ソニー・インタラクティブエンタテインメント）、半導体（ソニーセミコンダクタソリューションズ）、ネットワーク（ソニーネットワークコミュニケーションズ）など事業会社ごとに採用窓口・職種が分かれます。応募先の選定が最初のステップです。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">ジョブグレード制でスペシャリストを評価</h3><p className="text-sm text-petrol-deep">専門性に応じたジョブグレード制を採用しています。OpenWorkの社員言及では「I5までが一般社員層」といった等級構造への言及が見られ、技術スペシャリストとマネジメントの双方のキャリアパスがあるとされます。等級別の具体的給与は非公開です。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">ハードからソフト・クラウドまでの広さ</h3><p className="text-sm text-petrol-deep">CMOSイメージセンサーなどの半導体から、ゲームプラットフォーム、AV機器、クラウドサービスまで、ハードとソフトを横断する技術領域を持つ点が特徴です。自分の専門が活きる領域を選びやすい反面、領域ごとに求められるスキルセットは大きく異なります。</p></div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式採用ページの公開情報）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">事業会社により技術スタックは大きく異なります。以下は各社の採用情報で公開されている範囲の例です。</p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>半導体（ソニーセミコンダクタソリューションズ）</strong>：Verilog-HDL・SystemCによる回路設計、FPGA設計・実装。デバイス／光学シミュレーション</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>製造・オペレーション系（GMO等）</strong>：C#・ASP.NET・TypeScript・Azure・AWS など</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>共通的に</strong>：C++（組み込み・製品ソフト）、Python（AI・データ）、各種クラウド（AWS／Azure）</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：ソニーセミコンダクタソリューションズ採用サイト、ソニーグローバルマニュファクチャリング＆オペレーションズ募集職種、ソニー株式会社 採用情報。職種・部署により使用技術は異なります。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100"><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">項目</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">数値（2026年3月期・提出会社単体）</th></tr></thead>
              <tbody>{salaryRows.map(([k, v], i) => (<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{k}</td><td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium">{v}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-2">
            上表はソニーグループの<strong>有価証券報告書（2026年3月期）</strong>に記載された提出会社（ソニーグループ株式会社＝持株会社）単体の数値です。<strong>これは持株会社のコーポレート機能を中心とした全従業員の平均</strong>であり、PlayStationや半導体といった事業会社の現場エンジニアの年収を直接表すものではありません。職種別・等級別の年収は公式に開示されていないため、当ガイドでは出典のない等級別年収表は掲載していません。
          </p>
          <p className="text-xs text-slate-500">出典：ソニーグループ「有価証券報告書」2026年3月期、日本経済新聞 会社情報。エンジニア職の提示年収レンジは継続的に確認できる公式・求人公開値がないため記載を控えています。</p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式採用ページベース）</h2>
          <ol className="space-y-3">
            {[
              ["STEP 1", "応募（事業会社別）", "ソニーグループ キャリア採用ポータル、または各事業会社の採用サイトの募集要項から応募。"],
              ["STEP 2", "書類選考", "職務経歴書・スキルシートで専門領域とのマッチを確認。"],
              ["STEP 3", "面接（複数回）", "技術面接で担当領域の専門的議論。実プロジェクト経験を深掘りされる傾向。"],
              ["STEP 4", "内定", "ジョブグレードに基づく処遇提示。"],
            ].map(([step, title, desc], i) => (
              <li key={i} className="flex gap-4 border border-slate-200 rounded-lg p-4">
                <span className="shrink-0 text-xs font-bold text-petrol-deep bg-petrol-soft rounded px-2 py-1 h-fit">{step}</span>
                <div><p className="font-bold text-slate-800 text-sm mb-1">{title}</p><p className="text-sm text-slate-600">{desc}</p></div>
              </li>
            ))}
          </ol>
          <p className="text-xs text-slate-500 mt-2">出典：ソニーグループ キャリア採用ポータル、各事業会社の採用サイト。具体的な回数・内容は事業会社・職種により異なります。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">具体的な面接質問リストは公式に公開されておらず、断定はできません。公開情報と口コミ傾向から、評価されやすいと考えられる観点を一般化して挙げます。</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>応募する事業会社・職種の領域（半導体／ゲーム／クラウド等）での専門的な深さ</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>実プロジェクトでの役割・技術的意思決定の具体性（深掘りされやすい）</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>自律的にキャリアを切り拓く姿勢（口コミでも自由裁量を重視する文化との言及）</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>グローバル職種では英語でのコミュニケーション力</li>
          </ul>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">社員口コミの傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、ソニーグループについて<strong>「自由な社風」「やりたいことを形にする文化」「若いうちから幅広い仕事を任せてもらえる」</strong>といった肯定的な声が見られます。一方で<strong>「キャリアは自分で切り拓くもの、という考え方が強く、受け身では伸びにくい」</strong>という趣旨の指摘もあり、自律的なキャリア形成が前提になる傾向がうかがえます。給与制度としてはジョブグレード制への言及が多く見られます。
          </p>
          <p className="text-xs text-slate-500">出典：OpenWork掲載の社員クチコミの傾向を要約（個別スコア・原文の転載はしていません）。評価は事業会社・部署・職種により大きく異なります。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たソニー</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>提出会社単体の<strong>平均年齢は42.7歳</strong>（2026年3月期・有報）で、持株会社は比較的シニアな年齢構成です。事業会社では領域により年齢構成は異なりますが、専門性を軸にしたジョブ型評価のため、30代・40代でも<strong>担当領域の深い専門性があれば中途で評価されやすい</strong>環境といえます。</p>
            <p>半導体回路設計、画像処理・信号処理、組み込み、機械学習、ゲームプラットフォームなど、長年積み上げた専門性が直接活きるのがソニーの強みです。一方で「どの事業会社か」によって働き方・技術・処遇が大きく変わるため、ミドル層は応募前に事業会社単位で実態を見極めることが重要です。年収面では、提出会社平均1,155万円はあくまで持株会社の数値である点を踏まえ、内定時の処遇を個別に確認しましょう。</p>
            <p>ハイクラス・専門職の転職では、スカウト型サービスの活用も有効です。<Link href="/knowledge/scout/" className="text-petrol hover:underline">スカウトの活用法</Link>や<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉の進め方</Link>もあわせて確認してください。</p>
          </div>
        </section>

        <section id="agent" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ソニーグループ転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラス・スカウト型。大手メーカーの専門職スカウトが届くことも。" }, { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化で高年収求人比率が高い。技術面接対策のサポートあり。" }, { name: "doda（IT）", href: "/review/doda-it/", desc: "国内最大級の求人数で大手メーカー・事業会社の求人を幅広くカバー。" }].map((agent, i) => (<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
          <p className="text-xs text-slate-500 mt-3">求人保有状況は時期により変動します。<Link href="/compare/highclass/" className="text-petrol hover:underline">ハイクラス向け比較</Link>もあわせて参照してください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">ソニーグループへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">大手メーカー・ハイクラスに強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="faq" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "Azureの転職ガイド", href: "/skill/azure/" }, { name: "フルスタックの転職ガイド", href: "/skill/typescript/" }, { name: "Pythonの転職ガイド", href: "/skill/python/" }, { name: "C++の転職ガイド", href: "/skill/cpp/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "任天堂の転職ガイド", href: "/company/nintendo/" }, { name: "パナソニックの転職ガイド", href: "/company/panasonic/" }, { name: "日立製作所の転職ガイド", href: "/company/hitachi/" }, { name: "DeNAの転職ガイド", href: "/company/dena/" }, { name: "ハイクラス向けエージェント比較", href: "/compare/highclass/" }, { name: "40代エンジニアの転職の現実", href: "/knowledge/40s-reality/" }].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
