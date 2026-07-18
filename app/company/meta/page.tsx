import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/meta/" },
  title: "Meta Japan エンジニア転職ガイド｜年収・選考・開発文化【2026年版】",
  description:
    "Meta（旧Facebook）Japanのエンジニア中途採用を公式採用情報・levels.fyi等の出典付きで解説。総報酬の考え方、コーディング面接、英語要件、30代40代の戦い方までまとめました。",
};

const tocItems = [
  { id: "conclusion", label: "結論：転職難易度と向くエンジニア" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "features", label: "エンジニア採用の特徴" },
  { id: "proscons", label: "入社のメリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "tech", label: "技術スタック・開発文化" },
  { id: "salary", label: "年収データ" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "選考で重視される点" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "agents", label: "おすすめエージェント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const faqs = [
  {
    q: "Meta Japanのエンジニア年収はどのくらいですか？",
    a: "Meta Japan（合同会社）は有価証券報告書による年収開示がありません。年収比較サイトlevels.fyi等では、ソフトウェアエンジニアの総報酬（基本給＋株式報酬＋ボーナス）がレベル別に幅広く公開されており、シニア以上では株式報酬（RSU）が総報酬を大きく押し上げるとされます（出典: levels.fyi、2026年時点・回答者ベース・変動大）。正確なレンジはオファー内容で確認してください。",
  },
  {
    q: "Meta Japanの面接はどんな形式ですか？",
    a: "エンジニア職ではコーディング面接が中心で、加えてシステム設計や行動面接が課されることが一般的とされます。最終段階まで主に1対1のオンライン面接で進み、最終面接は東京オフィスで実施される場合もあると二次の解説で紹介されています（出典: 各種選考解説の要約）。出題はアルゴリズム寄りで、定番の対策が有効とされます。",
  },
  {
    q: "Meta Japanにはどんなチーム・領域がありますか？",
    a: "公式採用ページ（metacareers.com）では、AI・エンジニアリング・リサーチ・プロダクト・デザインなど幅広い領域の募集が掲載されています。東京オフィスはInstagramをはじめとするプロダクトやコミュニティ・経済機会の創出に関わるチームが紹介されています。募集状況は時期により変動します。",
  },
  {
    q: "Meta Japanで英語力はどの程度必要ですか？",
    a: "グローバル組織であり、業務・面接ともに英語で行われる比重が高いポジションが多いため、ビジネスレベル以上の英語力が求められることが一般的です。ポジションにより要件は異なるため、募集要項を確認してください。",
  },
  {
    q: "Meta Japanのエンジニア文化の特徴は？",
    a: "「Move Fast」に代表されるスピード重視の文化が知られています。入社後に複数チームを経験してから配属先を選ぶBootcamp的な仕組みが語られることがありますが、制度の運用は時期により変わるため、選考過程で最新の運用を確認するのが確実です。",
  },
  {
    q: "Meta Japanへの転職で有利な経験は？",
    a: "大規模システムの設計・運用経験、アルゴリズム・データ構造の強さ、React/React Nativeの実務経験、ML/AI分野の研究・開発経験などが評価されやすいとされます。技術力に加え、非エンジニアにも技術を明快に説明できる力も重視されると二次解説で紹介されています。",
  },
  {
    q: "Meta Japanの転職難易度は高いですか？",
    a: "コーディング面接の水準が高く、応募も集中するため難易度は高めです。一方で、アルゴリズムの定番対策と大規模開発の実務経験を備えれば挑戦の土台は作れます。準備期間を十分に取ることが現実的です。",
  },
  {
    q: "Meta Japanのオフィスはどこにありますか？",
    a: "報道（Impress Watch等）によれば、Metaの東京オフィスは虎ノ門ヒルズ ビジネスタワーに置かれ、ハイブリッドワークを前提にコラボレーションの場として設計されていると紹介されています。勤務形態はポジションにより異なるため募集要項で確認してください。",
  },
];

export default function MetaCompanyPage() {
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
      <ArticleJsonLd title="Meta Japan エンジニア転職ガイド" description="Meta（旧Facebook）Japanのエンジニア中途採用を公式採用情報・levels.fyi等の出典付きで解説。総報酬の考え方、コーディング面接、英語要件までまとめました。" url="/company/meta/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "フロントエンドスペシャリスト路線の転職ガイド", href: "/skill/react/" }, { name: "Pythonの転職ガイド", href: "/skill/python/" }, { name: "PHPの転職ガイド", href: "/skill/php/" }, { name: "C++の転職ガイド", href: "/skill/cpp/" }, { name: "GraphQLの転職ガイド", href: "/skill/graphql/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "Meta Japan" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Meta Japan エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 業界最高水準の総報酬で知られるSNS・AI企業</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】Meta Japanの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: Meta Japan（Facebook Japan合同会社）は合同会社のため、有価証券報告書による公式の平均年収は非公表です。年収比較サイトlevels.fyi等で総報酬（基本給・株式報酬・ボーナスの合計）がレベル別に参考値として公開されています。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・公式平均は非公表（合同会社のため有報開示なし）。</li><li>・levels.fyi等の参考値では、シニア以上で株式報酬（RSU）が総報酬を大きく押し上げます（2026年時点・回答者ベース・変動大）。</li><li>・出典の取れる等級別年収表はなく、正確なレンジはオファー内容での確認が前提です。RSUは株価変動の影響を受けます。</li></ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Meta（旧Facebook）の日本法人は、Instagram等のプロダクトやAI・インフラ領域に関わるエンジニアリング職を擁します。本ガイドは、公式採用ページ（metacareers.com）、年収比較サイトlevels.fyi、各種選考解説の公開情報のみを根拠に、エンジニア中途採用の実像を出典付きで整理します。合同会社のため有価証券報告書による年収開示がない点を踏まえ、年収は「変動の大きい参考値」として扱います。30代・40代のミドルエンジニアが現実的に準備を進められる情報を重視しました。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "Meta公式採用ページ metacareers.com",
            "levels.fyi(総報酬の参考値)",
            "各種選考解説・口コミの要約",
            "Impress Watch(東京オフィス)",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-petrol hover:underline">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度と向くエンジニア</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="font-bold text-blue-900 mb-3">難易度は「高い」。アルゴリズム力×大規模開発×英語が揃う人に向く。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>● <strong>向いている人</strong>：アルゴリズム・データ構造に強く、大規模分散システムの開発経験があり、英語で業務遂行できる人。ML/AIやReact系の専門性も活きる。</li>
              <li>● <strong>魅力</strong>：総報酬（特に株式報酬）の水準が高く、最先端のAI・大規模プロダクトに関われること。</li>
              <li>● <strong>注意点</strong>：コーディング面接の難度が高く、十分な準備期間が必要。年収はlevels.fyi等の参考値で振れ幅が大きく、制度・組織は変動する。</li>
            </ul>
          </div>
        </section>

        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（出典付き）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["企業名", "Facebook Japan合同会社（Meta）"],
                  ["業種", "SNS・AI・メタバース"],
                  ["有報による年収開示", "なし（合同会社のため）"],
                  ["年収の参考値", "levels.fyi等で総報酬がレベル別に公開。シニア以上はRSUが総報酬を大きく押し上げる（2026年時点・回答者ベース・変動大）"],
                  ["技術スタック", "Hack(PHP) / Python / C++ / React・React Native / PyTorch / GraphQL 等（公開情報）"],
                  ["英語要件", "業務・面接ともに英語比重が高い（ポジションにより異なる）"],
                  ["東京オフィス", "虎ノ門ヒルズ ビジネスタワー（報道ベース）。ハイブリッドワーク前提"],
                  ["採用ページ", "metacareers.com（東京勤務の募集を検索・応募）"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※年収はlevels.fyi等の回答者ベースの参考値で、レベル・職種・株式報酬の評価額により大きく変動します。最新の募集職種・条件は<a href="https://www.metacareers.com/jobs" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">Meta公式採用ページ</a>でご確認ください。
          </p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">株式報酬（RSU）比率の高い総報酬</h3>
              <p className="text-sm text-petrol-deep">外資テックの中でもRSUの比率が高いことで知られ、levels.fyi等の参考値ではシニア以上で総報酬が大きく伸びるレンジが公開されています。基本給だけでなく、株式報酬を含めた「総報酬」で評価する視点が重要です（出典: levels.fyi、2026年時点）。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">「Move Fast」のスピード重視文化</h3>
              <p className="text-sm text-petrol-deep">迅速なリリースサイクルと意思決定を重んじる文化が知られています。入社後に複数チームを経験して配属を決める仕組みが語られることもありますが、制度運用は時期により変わるため最新情報の確認が必要です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">AI・大規模プロダクトの最先端</h3>
              <p className="text-sm text-petrol-deep">PyTorchの開発元であり、生成AIや大規模インフラ、Instagram等のプロダクト開発に関われます。ML/AIや大規模システムに関心のあるエンジニアにとって魅力的な環境です。</p>
            </div>
          </div>
        </section>

        <section id="proscons" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">入社のメリット・デメリット</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            公式採用情報・levels.fyi・各種選考解説の傾向から、メリット・デメリットの両面を整理します。総報酬の多くを占める株式報酬の特性など、注意点も具体的に確認しておきましょう。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3 text-sm">メリット</h3>
              <ul className="space-y-2 text-sm text-green-900">
                <li>● 総報酬（特にRSU）の水準が高く、シニア以上で大きく伸びる事例がある</li>
                <li>● PyTorch・React等を生み出す最先端のAI・大規模プロダクトに関われる</li>
                <li>● コーディング面接中心で、準備量がものを言う実力本位の選考</li>
                <li>● 大規模トラフィックを前提とした設計・運用の経験を積める</li>
              </ul>
            </div>
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <h3 className="font-bold text-rose-800 mb-3 text-sm">デメリット・注意点</h3>
              <ul className="space-y-2 text-sm text-rose-900">
                <li>● コーディング面接の難度が高く、十分な準備期間が必要</li>
                <li>● 総報酬の多くを株式報酬（RSU）が占め、株価変動で実受取額が上下する</li>
                <li>● 業務・面接ともに英語比重が高いポジションが多い</li>
                <li>● 「Move Fast」のスピード文化や組織変更への適応が求められる</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3 text-sm">向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✓ アルゴリズム・データ構造に強く、コーディング面接に準備時間を割ける</li>
                <li>✓ 大規模分散システムの設計・運用経験がある</li>
                <li>✓ 英語で業務遂行でき、非エンジニアにも技術を説明できる</li>
                <li>✓ ML/AIやReact系の専門性を活かしたい</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3 text-sm">向いていない人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✕ コーディング面接対策の時間を確保できない</li>
                <li>✕ 安定した固定給を重視し、株式報酬の変動を許容できない</li>
                <li>✕ 英語でのコミュニケーションに不安が大きい</li>
                <li>✕ 落ち着いた変化の少ない環境を強く望む</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="tech" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック・開発文化</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            以下はMetaが公開している技術や一般に知られる情報に基づく概観です。チーム・領域により使用技術は大きく異なります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5 mb-4">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>バックエンド</strong>：Hack（PHP系）/ C++ / Python 等</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>フロントエンド</strong>：React / React Native（いずれもMeta発のOSS）</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>API</strong>：GraphQL（Meta発のOSS）</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>ML/AI</strong>：PyTorch を中心とした機械学習基盤</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>開発文化</strong>：自社製OSSを多数生み出す内製志向＋スピード重視</li>
            </ul>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm">
            React・React Native・GraphQL・PyTorchなど、現在広く使われるOSSの多くがMeta発であることからもわかるように、技術を自ら生み出し標準化する文化が強い企業です。大規模トラフィックを前提とした設計・運用の経験が活きやすい環境です。
          </p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Meta Japanは<strong>合同会社のため有価証券報告書による平均年収の公式開示がありません</strong>。そのため、信頼できる単一の公式数値は存在せず、年収比較サイトの回答者データを「参考値」として扱う必要があります。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
            <p className="text-sm text-slate-700 leading-relaxed mb-2">
              <strong>levels.fyi（2026年時点・回答者ベース）：</strong>ソフトウェアエンジニアの総報酬がレベル別に公開されており、基本給・株式報酬（RSU）・ボーナスの合計で評価されます。シニア以上ではRSUが総報酬を大きく押し上げる構造で、レンジは広く取られています。
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>重要：</strong>これらは投稿者の偏り・レベル・株式評価額・時期で大きく変動する参考値です。当サイトでは出典の取れない等級別年収表は掲載しません。具体的な額は選考過程で提示されるオファーで確認してください。RSUは株価変動の影響も受ける点に留意が必要です。
            </p>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm">
            参考までに、レバテック公表（2025年）の正社員SE平均年収は30代約499万円・40代約618万円です（出典: レバテック ガイド記事）。外資テックのトップ層はこれを大きく上回りますが、総報酬の多くを占めるRSUは変動リスクを伴う点を理解しておきましょう。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Metaは選考フローの詳細を網羅的に公式公開していないため、以下は公式採用ページの応募方式と、各種選考解説から一般に知られる範囲の概観です。職種・チームにより内容は異なります。
          </p>
          <ol className="space-y-3">
            {[
              ["1. 応募（metacareers.com）", "公式採用ページで東京勤務の募集を検索し応募。リクルーターからのスカウトやリファラル経由のルートもあるとされる。"],
              ["2. リクルーター面談／初期スクリーニング", "経歴・志向の確認と、選考の流れの説明。"],
              ["3. 技術面接（コーディング中心・複数回）", "アルゴリズム・データ構造のコーディング面接が中心。シニア以上はシステム設計面接も。主にオンラインの1対1で実施されるとされる。"],
              ["4. 行動面接・最終・オファー", "協働姿勢や影響力を見る行動面接を経て、レベル判定とオファー提示。最終は東京オフィスで実施される場合もある。"],
            ].map(([title, desc], i) => (
              <li key={i} className="border border-slate-200 rounded-lg p-4">
                <p className="font-bold text-slate-800 text-sm mb-1">{title}</p>
                <p className="text-sm text-slate-600">{desc}</p>
              </li>
            ))}
          </ol>
          <p className="text-xs text-slate-500 mt-3">※選考フローは非公開部分が多く、上記は二次解説から一般に知られる範囲です。実際の手順は応募ポジションにより異なります。</p>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考で重視される点</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            二次解説・口コミ傾向から重視されやすい観点を整理します（個別の面接質問の断定は避け、一般に知られる範囲にとどめます）。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>アルゴリズム・データ構造を用いた問題解決力（コーディング面接）</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>大規模システムの設計力（シニア以上はシステム設計面接で確認）</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>複数プロジェクトをやり切った経験と、ビジネス視点・影響力</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>技術を非エンジニアにも明快に説明できるコミュニケーション力と英語力</li>
            </ul>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm mt-4">
            コーディング対策は<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト対策ガイド</Link>、設計面接は<Link href="/knowledge/system-design/" className="text-petrol hover:underline">システム設計面接の準備</Link>、行動面接は<Link href="/knowledge/behavioral/" className="text-petrol hover:underline">行動面接（STAR法）対策</Link>を参考にしてください。
          </p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>年齢より「準備量」が結果を左右する企業。</strong>Metaの選考はコーディング面接の比重が高く、現場で長くマネジメント寄りに進んできた30代・40代ほど、アルゴリズム対策に意図的な準備時間を割く必要があります。逆に言えば、準備さえ積めば年齢を理由に不利になりにくい、実力本位の選考です。シニア以上ではシステム設計と「影響力の実績」が評価軸になり、ここはミドル層の経験が活きる領域です。
            </p>
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>総報酬の「中身」を冷静に見る。</strong>提示額の多くを株式報酬（RSU）が占めるため、株価変動で実受取額が上下します。家計や生活設計の観点では、基本給の比率やベスティング条件まで確認したうえで意思決定するのが安全です。オファー比較の考え方は<Link href="/knowledge/offer-compare/" className="text-petrol hover:underline">複数オファーの比較ガイド</Link>も参考になります。
            </p>
            <p className="text-sm text-amber-900 leading-relaxed">
              市場価値の整理は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">エンジニアの市場価値の測り方</Link>、外資特有の進め方は<Link href="/knowledge/overseas/" className="text-petrol hover:underline">外資・グローバル転職ガイド</Link>も合わせてご覧ください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Meta Japan転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラス・スカウト型。外資テックを扱うヘッドハンター経由の案件に出会いやすい。" },
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化で高年収求人比率が高い。面接対策サポートも活用できる。" },
              { name: "リクルートエージェントIT", href: "/review/recruit-it/", desc: "国内最大級の求人数。非公開求人が豊富で外資系の選択肢も広い。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">外資は公式応募・リファラルも有力ルートです。併用の考え方は<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">転職エージェントの併用ガイド</Link>を参照してください。</p>
        </section>

        <section id="faq" className="mb-10 scroll-mt-20">
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
          <h2 className="text-xl font-bold mb-3">Meta Japanへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">外資IT企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "AWSジャパンの転職ガイド", href: "/company/aws-japan/" },
              { name: "Google Japan の転職ガイド", href: "/company/google/" },
              { name: "Amazon Japan の転職ガイド", href: "/company/amazon/" },
              { name: "Microsoft Japan の転職ガイド", href: "/company/microsoft/" },
              { name: "Apple Japan の転職ガイド", href: "/company/apple/" },
              { name: "システム設計面接の準備", href: "/knowledge/system-design/" },
              { name: "ハイクラス向けエージェント比較", href: "/compare/highclass/" },
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
