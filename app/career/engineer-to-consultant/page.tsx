import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "エンジニアからITコンサルへの転職｜進め方とスキルギャップ",
  description:
    "エンジニアからITコンサルタントへの転職活動の進め方を、スキルギャップ比較表・移行ステップ・職務経歴書のBefore/After例文付きで解説。30代40代の現実的なルートも紹介します。",
};

const TITLE = "エンジニアからITコンサルへの転職｜進め方とスキルギャップ";
const DESC =
  "エンジニアからITコンサルタントへの転職活動の進め方を、スキルギャップ比較表・移行ステップ・職務経歴書のBefore/After例文付きで解説。30代40代の現実的なルートも紹介します。";
const URL = "/career/engineer-to-consultant/";

const toc = [
  { id: "conclusion", label: "結論：現実性と攻め方" },
  { id: "gap", label: "スキルギャップ比較表" },
  { id: "build", label: "必要スキルの身につけ方" },
  { id: "steps", label: "移行ステップ（在職中の準備）" },
  { id: "resume", label: "職務経歴書での見せ方（Before/After）" },
  { id: "salary", label: "年収の考え方" },
  { id: "agents", label: "活動で使うエージェント" },
  { id: "midage", label: "30代・40代の進め方" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows = [
  {
    axis: "成果物",
    engineer: "動くシステム・コード・設計書",
    consultant: "提案資料・分析レポート・実行計画",
    gap: "中",
  },
  {
    axis: "評価される軸",
    engineer: "実装品質・技術選定・運用安定性",
    consultant: "課題定義・論点整理・合意形成",
    gap: "大",
  },
  {
    axis: "コミュニケーション相手",
    engineer: "開発チーム・社内の事業部門",
    consultant: "クライアントの経営層・部門責任者",
    gap: "大",
  },
  {
    axis: "思考様式",
    engineer: "ボトムアップ（実装から積み上げ）",
    consultant: "トップダウン（論点から仮説検証）",
    gap: "中",
  },
  {
    axis: "ドキュメント",
    engineer: "設計書・README・仕様書",
    consultant: "PowerPoint中心のストーリー資料",
    gap: "中",
  },
  {
    axis: "そのまま活きる力",
    engineer: "要件定義・上流設計・技術的実現性の判断",
    consultant: "テクニカル領域で即戦力評価される",
    gap: "活用",
  },
];

const buildSteps = [
  {
    title: "ロジカルシンキングの基礎を固める",
    desc: "MECE・ピラミッドストラクチャー・仮説思考といったコンサルの共通言語を書籍やケース教材で学びます。エンジニアの構造化能力は土台として有利で、要件をツリーで分解してきた経験はそのまま論点分解に転用できます。",
  },
  {
    title: "ストーリー型の資料作成に慣れる",
    desc: "設計書は網羅性、コンサル資料は『結論→根拠→打ち手』の流れが評価軸です。普段の社内提案を1枚のスライドに要約する練習を繰り返すと、面接の課題提出でも差がつきます。",
  },
  {
    title: "業界・業務ドメインの知識を1つ深める",
    desc: "金融・製造・小売など志望領域のビジネス構造と典型課題を理解しておくと、技術と業務をつなぐテクニカルコンサルとしての訴求力が高まります。現職で関わったドメインを起点にすると最短です。",
  },
  {
    title: "ケース面接・フェルミ推定の対策をする",
    desc: "総合系・戦略系ファームではケース面接が課されます。市販のケース問題集で『前提を置く→構造化→定量化→示唆』の型を体に入れます。テクノロジー系ファーム中心なら比重は下がります。",
  },
];

const migrationSteps = [
  {
    phase: "0〜1ヶ月",
    title: "棚卸しと志望ファームの分類",
    desc: "自分の経験を『上流（要件定義・PM）』『実装』『運用』で棚卸しし、テクノロジー系／総合系／戦略系のどのレイヤーを狙うか決めます。エンジニア経験が直接効くのはテクノロジー系・DX系です。",
  },
  {
    phase: "1〜3ヶ月",
    title: "資料化スキルと論点分解の訓練",
    desc: "現職の改善提案を、課題・原因・打ち手・効果の構造でスライド化する習慣をつけます。OKであれば社内勉強会で発表し、非エンジニアに説明する経験を積むと面接で語れる実績になります。",
  },
  {
    phase: "3〜5ヶ月",
    title: "職務経歴書をコンサル向けに書き換え",
    desc: "『何を作ったか』ではなく『どんな課題をどう解決し、ビジネスにどう効いたか』へ表現を転換します（後述のBefore/After参照）。エージェントに添削を依頼します。",
  },
  {
    phase: "5ヶ月〜",
    title: "ケース対策と並行して応募",
    desc: "テクニカル領域は技術面接＋志望動機が中心、総合・戦略系はケース面接対策を3〜6ヶ月見込みます。在職中に進め、内定条件が固まってから退職交渉に入るのが安全です。",
  },
];

const agents = [
  {
    name: "アクシスコンサルティング",
    point: "コンサル業界特化のエージェント。ファームごとの選考傾向やケース面接対策の情報を得やすく、未経験からのコンサル転職の相談先として定番です。",
    href: null,
  },
  {
    name: "ビズリーチ",
    point:
      "ハイクラス・スカウト型。年収750万円以上をハイクラスと位置づけ、コンサルファームからのスカウトが届きやすい。市場価値の客観把握にも使えます（2025年4月時点・二次情報で登録者282万人規模）。",
    href: "/review/bizreach-it/",
  },
  {
    name: "レバテックキャリア",
    point:
      "IT/Web特化。テクニカルコンサル・DXコンサルなど技術力を評価する求人に強く、エンジニア経歴をそのまま武器にしたい場合の併用先として有力です。",
    href: "/review/levtech/",
  },
];

const faqs = [
  {
    q: "エンジニア何年目からITコンサルに転職できる？",
    a: "実務3〜5年で要件定義や上流設計の経験があれば応募ラインに乗りやすいです。年数そのものより、課題を定義して解決まで導いた経験を語れるかが重視されます。",
  },
  {
    q: "コーディングスキルはコンサルで活きる？",
    a: "テクニカルコンサルやDX領域では強みになります。技術的な実現可能性を正確に判断できる人材は希少で、クライアントの構想を地に足のついた計画に落とす役割で評価されます。",
  },
  {
    q: "資料作成やケース面接が不安。どこから対策する？",
    a: "まず『結論→根拠→打ち手』で1枚にまとめる練習から始め、テクノロジー系ファーム中心ならこれで足ります。総合・戦略系を狙う場合はケース問題集で構造化と定量化の型を3〜6ヶ月かけて訓練します。",
  },
  {
    q: "年収は上がる？下がる？",
    a: "個社の提示レンジ次第で断定はできません。ファームは等級で年収が決まるため、上のレイヤーで採用されれば上がる一方、未経験入社で等級が下がると一時的に横ばい・微減もあります。提示は必ず書面で確認しましょう。",
  },
  {
    q: "激務というイメージは本当？",
    a: "プロジェクトとファームの方針によります。近年はリモートやフレックスを導入するファームも増えていますが、繁忙期の負荷は事前に現場社員へのカジュアル面談で確認するのが確実です。",
  },
  {
    q: "どのタイプのファームを選ぶべき？",
    a: "技術を軸にするならテクノロジー系・IT系ファーム、業務改革まで踏み込むなら総合系、経営課題が中心なら戦略系です。エンジニア経験の活用度はテクノロジー系が最も高くなります。",
  },
  {
    q: "在職中と退職後、どちらで活動すべき？",
    a: "在職中の活動を推奨します。コンサル選考は期間が読みにくく、ケース対策にも時間がかかるため、収入を確保しながら進める方が条件交渉でも有利です。",
  },
  {
    q: "ITコンサルが合わなかった場合、エンジニアに戻れる？",
    a: "戻る選択肢はあります。コンサルで培った課題定義力や折衝力はテックリード・PdM・EMで評価されます。詳しくは関連記事のITコンサル→エンジニア転職を参照してください。",
  },
];

const related = [
  { name: "ITコンサル→エンジニア転職", href: "/career/consultant-to-engineer/" },
  { name: "外資系IT企業への転職", href: "/career/domestic-to-foreign/" },
  { name: "年収アップを狙うエンジニアの戦略", href: "/purpose/salary-up/" },
  { name: "職務経歴書の書き方ガイド", href: "/knowledge/resume/" },
  { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
  { name: "ハイクラス向けエージェント比較", href: "/compare/highclass/" },
];

export default function EngineerToConsultantPage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url={URL} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "エンジニア→ITコンサル転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニアからITコンサルへの転職｜活動の進め方
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | エンジニア経験を活かしてコンサルへ転身する転職活動ガイド
        </p>

        <p className="text-slate-600 leading-relaxed mb-2">
          エンジニアからITコンサルタントへの転職は、上流工程や経営課題に踏み込みたいミドル層にとって現実的なキャリアパスです。本記事は「どう転職活動を進めるか」に特化し、現職とのスキルギャップ・在職中の準備ステップ・職務経歴書の書き換え例を具体的に解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag（システムエンジニア・受託開発）",
            "ビズリーチ会社概要（二次情報含む）",
            "レバテックキャリア公式ガイド",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">
              結論：上流・要件定義の経験があれば現実的。テクノロジー系から狙う
            </h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・要件定義や上流設計の経験があるエンジニアは、テクニカル／DX系ファームで即戦力評価されやすい。</li>
              <li>・ギャップが大きいのは「評価される軸」と「対話相手」。実装力よりも課題定義と合意形成の見せ方が鍵。</li>
              <li>・在職中に資料化スキルと論点分解を訓練し、職務経歴書を『成果と示唆』中心に書き換えるのが王道。</li>
            </ul>
          </div>
        </section>

        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルギャップ比較表（エンジニア vs ITコンサル）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            転職活動で最初にやるべきは、現職とのギャップの可視化です。下表で「そのまま活きる力」と「埋めるべき力」を切り分けると、準備の優先順位が決まります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">比較軸</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">エンジニア（現職）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ITコンサル（転職先）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ギャップ</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.axis}</td>
                    <td className="px-4 py-3 text-slate-600">{row.engineer}</td>
                    <td className="px-4 py-3 text-slate-600">{row.consultant}</td>
                    <td className="px-4 py-3 text-slate-600">{row.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="build" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">必要スキルの身につけ方</h2>
          <div className="space-y-4">
            {buildSteps.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">移行ステップ（在職中にできる準備）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            コンサル選考は準備期間が読みにくいため、在職中に少しずつ進めるのが安全です。目安スケジュールは次のとおりです。
          </p>
          <div className="space-y-4">
            {migrationSteps.map((s, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-bold text-white bg-slate-700 rounded px-2 py-1">{s.phase}</span>
                  <h3 className="font-bold text-slate-800">{s.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書での見せ方（Before/After例文）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            エンジニアの職務経歴書は「作ったもの」を列挙しがちですが、コンサル選考では「課題・打ち手・ビジネスへの効果」を語る形が刺さります。実装中心の記述を、課題解決ストーリーへ書き換えた例を示します。
          </p>
          <div className="space-y-4">
            <div className="border border-red-200 rounded-lg p-5 bg-red-50/40">
              <p className="font-bold text-red-700 text-sm mb-2">Before（実装の羅列）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                ECサイトのバックエンドをJava/Spring Bootで開発。AWS上にAPIを構築し、データベース設計とバッチ処理を担当。運用保守も実施。
              </p>
            </div>
            <div className="border border-emerald-200 rounded-lg p-5 bg-emerald-50/40">
              <p className="font-bold text-emerald-700 text-sm mb-2">After（課題→打ち手→効果＋技術的示唆）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                受注処理の遅延でカート離脱が課題化していたEC事業に対し、ボトルネックを分析のうえ非同期バッチへ再設計を提案・主導。レスポンス改善により事業部のKPI改善に貢献。技術的実現性の観点から、事業部門と要件の優先順位付けを合意形成した点が役割の中心。
              </p>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-3">
            ※数値はご自身の実績に置き換えてください。書き方の型は<Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方ガイド</Link>も参照。
          </p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            ファームは等級で年収が決まるため、「どの等級で採用されるか」が年収を左右します。レンジは個社の提示で確認するのが原則です。市場の相場感としては、厚生労働省 job tag のシステムエンジニア（受託開発）の平均年収が578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）であり、エンジニアからの転職ではこの水準を基準に提示額を比較していくと判断しやすくなります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            また、転職者全体の傾向として、doda（パーソルキャリア）の2024年度決定年収レポート（2025年5月公表）では転職者の約6割が年収アップ、IT・通信の平均決定年収は469万円（2023年度）から486万円（2024年度）へと推移しています。コンサル転職でも、上のレイヤーで採用されれば上振れの余地がありますが、未経験等級スタートでは横ばいになる可能性も踏まえて条件交渉に臨みましょう。
          </p>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活動で使うエージェント</h2>
          <div className="space-y-3">
            {agents.map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">
                  {agent.href ? (
                    <Link href={agent.href} className="text-petrol-deep hover:underline">{agent.name}</Link>
                  ) : (
                    agent.name
                  )}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{agent.point}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="midage" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の進め方</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            30代・40代でコンサルへ移る場合、ポテンシャルより「即戦力として何を持ち込めるか」が問われます。マネジメント・大規模システムの上流・特定ドメインの深い知見など、年齢に見合う専門性を1本の軸として打ち出すと選考が通りやすくなります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            年収面では、レバテックが公表する年代別平均年収（2025年）で正社員SEが30代約499万円・40代約618万円、年収1,000万円以上の割合が30代8.01%・40代12.67%（career.levtech.jp/freelance.levtech.jpガイド記事）とされており、ミドル層は提示レンジの個人差が大きくなります。等級と提示額を必ず書面で確認し、前職比だけでなく将来の昇給カーブも含めて判断しましょう。
          </p>
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
          <h2 className="text-xl font-bold mb-3">ITコンサル転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            エンジニア経験を活かせるコンサルポジションをプロが提案します。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors"
              >
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
