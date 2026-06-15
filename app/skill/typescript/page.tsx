import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE =
  "TypeScriptエンジニアの転職完全ガイド【2026年】年収・求人の探し方";
const DESCRIPTION =
  "TypeScriptエンジニアの転職市場を公表データで解説。求人ボックス・paizaの言語別年収、求人の探し方、30代・40代の参入ルート、おすすめエージェントまで実用的にまとめました。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：TypeScript転職の攻め方" },
  { id: "market", label: "市場・年収データ（公表値）" },
  { id: "level", label: "求められる経験レベル" },
  { id: "career", label: "キャリアパスの選択肢" },
  { id: "find", label: "求人の探し方・強いエージェント" },
  { id: "entry", label: "経験浅めからの参入ルート" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "study", label: "スキルアップ・学習戦略" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "voice", label: "転職活動の口コミ傾向" },
  { id: "faq", label: "よくある質問" },
];

const salaryRows = [
  ["求人ボックス（正社員・給料ナビ）", "TypeScriptエンジニア 平均約696万円", "2025年時点・求人ボックス"],
  ["paiza 言語別 提示年収", "TypeScriptは2位グループ（1位Goは約723.9万円）", "2025年版・2025年12月発表"],
  ["求人ボックス 言語別求人トレンド", "TypeScript求人の平均年収は高位帯（Goと同水準）", "2025年版・求人ボックスジャーナル"],
  ["レバテック 年代別（正社員SE参考値）", "30代約499万円／40代約618万円", "2025年・レバテック公表値"],
];

const careerPaths = [
  {
    title: "フルスタックエンジニア路線",
    body: "TypeScript + Next.js + Node.jsでフロントからバックエンドまで一貫して開発する道。SaaS・スタートアップでコアメンバーとして少数精鋭チームを担うケースが多く、求人要件でも「フロント／バックを横断できる人」が高く評価される傾向があります。",
  },
  {
    title: "フロントエンドアーキテクト路線",
    body: "デザインシステム構築、パフォーマンス最適化、アクセシビリティ対応など、フロントエンド技術のスペシャリストとして大規模プロダクトの技術的意思決定を担う道。型設計やモノレポ運用の経験が差別化要素になります。",
  },
  {
    title: "テックリード・EM路線",
    body: "技術選定やチームビルディングを担うテックリードから、EM（エンジニアリングマネージャー）やVPoEへ。TypeScriptの技術基盤を保ちながら、組織のアウトプットを最大化する役割。30代後半〜40代で選ばれやすいパスです。",
  },
];

const faqs = [
  {
    q: "TypeScriptエンジニアの平均年収はどのくらいですか？",
    a: "求人ボックスの給料ナビ（2025年時点）では、TypeScriptエンジニア正社員の平均年収は約696万円とされています。paizaの「プログラミング言語に関する調査（2025年版・2025年12月発表）」でも、TypeScriptは提示年収で上位（1位Goは約723.9万円）に位置づけられています。実際の金額は経験・役割・企業フェーズで変動します。",
  },
  {
    q: "TypeScriptの将来性はどう見ればよいですか？",
    a: "TypeScriptはJavaScript互換の静的型付け言語として、フロントエンド（React/Next.js）からバックエンド（Node.js等）まで採用が広がっています。求人ボックスやpaizaの言語別調査でも継続的に上位の年収帯に位置しており、当面は需要が安定すると考えられます。ただし将来予測は断定できないため、複数の公表データで傾向を確認するのが安全です。",
  },
  {
    q: "TypeScript転職で評価されやすいスキルは？",
    a: "React/Next.jsの実務経験、型設計（ジェネリクス・ユーティリティ型）、REST/GraphQLのAPI設計、テスト（Vitest/Jest/Playwright）、CI/CD構築などが求人要件で頻出します。クラウド（AWS/GCP）でのデプロイ経験やフルスタック開発力があると選択肢が広がります。",
  },
  {
    q: "JavaScriptからTypeScriptへの移行は難しいですか？",
    a: "JavaScriptの知識はそのまま活かせます。型システムとジェネリクスの理解に1〜2か月かければ実務レベルに近づきます。既存JSプロジェクトへ段階的に型を入れた経験は、求人でも具体的なアピール材料になります。",
  },
  {
    q: "TypeScriptエンジニアにおすすめの転職エージェントは？",
    a: "IT/Web特化で高年収求人が多いレバテックキャリア、Web・ゲーム業界に強いGeekly、スタートアップ求人とカジュアル面談に強いGreenの併用が定番です。求人母数を確保したい場合はリクルートエージェントITやdoda ITも候補になります。",
  },
  {
    q: "40代のTypeScriptエンジニアでも転職できますか？",
    a: "可能です。フルスタック経験やテックリード・アーキテクト経験のある層は需要があります。レバテックの年代別公表値（2025年）でも40代正社員SEの平均は約618万円と、年代が上がるほど水準が上がる傾向です。即戦力性と再現性のある実績提示が鍵になります。",
  },
  {
    q: "未経験・経験浅めからTypeScript案件に入れますか？",
    a: "JavaScript実務やWeb制作の経験があれば、型導入・小規模機能から実績を積み、ポートフォリオ（Next.js + TypeScript構成のアプリ）を用意して臨むのが現実的です。最初から大規模SaaSを狙うより、TypeScript採用の中小プロダクトで実務年数を作る方が通りやすい傾向があります。",
  },
];

export default function TypeScriptSkillPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/skill/typescript/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "TypeScriptエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          TypeScriptエンジニアの転職完全ガイド【2026年】年収・求人の探し方
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | TypeScript転職市場の動向を30代・40代エンジニア向けに解説
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス 給料ナビ（2025年時点）",
            "paiza プログラミング言語に関する調査（2025年版）",
            "レバテック 年代別平均年収（2025年）",
          ]}
        />

        {/* 結論 */}
        <section id="conclusion" className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：TypeScript転職の攻め方</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              TypeScriptは求人ボックス・paizaの言語別調査でも上位の年収帯にあり、求人母数も多い「強いスキル」です。求人DBサイトで件数を眺めるだけでなく、<strong>「React/Next.jsの実務 × 型設計 × テスト」の3点セットで自分の市場価値を言語化</strong>し、IT特化エージェントに相談して非公開求人にアクセスするのが最短ルートです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・年収を狙うなら自社開発SaaS／メガベンチャー、技術裁量を狙うならスタートアップ。</li>
              <li>・30代・40代はフルスタック・テックリード経験が武器。即戦力性を前面に。</li>
              <li>・エージェントはレバテックキャリア／Geekly／Greenの併用が定番。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-blue-600 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">TypeScriptの市場・年収データ（公表値）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            TypeScriptはフロントエンド開発の事実上の標準となり、バックエンドやモバイル（React Native）にも活用範囲が広がっています。年収データは出典により集計対象（正社員／フリーランス／求人提示額）が異なるため、複数のソースを並べて傾向を読むのが安全です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">出典</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収の目安</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">時点・備考</th>
                </tr>
              </thead>
              <tbody>
                {salaryRows.map(([src, val, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{src}</td>
                    <td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium">{val}</td>
                    <td className="px-4 py-3 text-slate-500 border-b border-slate-200 text-xs">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            ※ 求人ボックスの「言語別求人トレンド」では、提示年収ベースの集計で正社員平均（約696万円）より高い数値が出ることがあります。これは高年収求人を含む求人側の数値であり、実際の決定年収とは異なる点に注意してください。フリーランス調査（フリーランスボード等）の単価・年収はさらに高めに出る傾向があり、雇用形態が違う前提で読む必要があります。
          </p>
        </section>

        {/* 経験レベル */}
        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル（求人要件の傾向）</h2>
          <div className="space-y-3">
            {[
              ["ジュニア〜ミドル（実務2〜4年）", "React/TypeScriptの実務、コンポーネント設計、API連携、基本的なテスト。自社開発の中小プロダクトやSIerのモダン案件で募集が見られる層。"],
              ["ミドル〜シニア（実務4〜8年）", "型設計・状態管理・パフォーマンス最適化に加え、設計レビューや若手育成。求人で最も母数が多く、年収交渉もしやすい層。"],
              ["シニア・リード（実務8年〜）", "アーキテクチャ選定、モノレポ／CI/CD整備、チームの技術的意思決定。テックリード・EM求人の中心。30代後半〜40代の主戦場。"],
            ].map(([level, body], i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{level}</h3>
                <p className="text-sm text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* キャリアパス */}
        <section id="career" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスの選択肢</h2>
          <div className="space-y-4">
            {careerPaths.map((p, i) => (
              <div key={i} className="bg-blue-50 rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{p.title}</h3>
                <p className="text-sm text-blue-700">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方・強いエージェント</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            TypeScript求人は「自社開発の年収重視」「スタートアップの裁量重視」で探し方が変わります。求人サイトの件数だけで判断せず、技術スタックや開発文化の情報を引き出せるエージェントを使い分けるのが効率的です。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web特化。高年収求人比率が高く（公開求人の高年収帯が多いとの二次情報）、Web系・SaaSのTypeScript案件に強み。技術に明るいアドバイザーが在籍。</p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web/ゲーム業界に特化。提案スピードが強みで、TypeScript/React求人が充実。企業の技術スタック情報の提供が手厚い。</p>
              <Link href="/review/geekly/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Green</h3>
              <p className="text-sm text-slate-600 mb-2">成功報酬型の転職サイト（ダイレクトリクルーティング）。カジュアル面談で社風や技術文化を確かめてから進めたいスタートアップ志向の人向け。</p>
              <Link href="/review/green/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            求人母数を最大化したい場合は<Link href="/review/recruit-it/" className="text-blue-600 hover:underline">リクルートエージェントIT</Link>や<Link href="/review/doda-it/" className="text-blue-600 hover:underline">doda ITエンジニア</Link>も併用候補です。複数併用の進め方は<Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">エージェント複数利用ガイド</Link>を参照してください。
          </p>
        </section>

        {/* 参入ルート */}
        <section id="entry" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからの参入ルート</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            {[
              "JavaScript実務／Web制作の経験を起点に、既存プロジェクトへ段階的に型を導入した実績を作る。",
              "Next.js + TypeScript構成の公開ポートフォリオ（GitHub）を用意し、設計意図を説明できるようにする。",
              "いきなり大規模SaaSを狙わず、TypeScript採用の中小プロダクトで実務年数を積む。",
              "テスト（Vitest/Playwright）やCI/CDの基礎を押さえ、品質面のアピール材料を増やす。",
            ].map((t, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-blue-600 font-bold shrink-0">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500 mt-3">
            関連: <Link href="/knowledge/portfolio/" className="text-blue-600 hover:underline">ポートフォリオの作り方</Link> / <Link href="/knowledge/inexperienced-30s/" className="text-blue-600 hover:underline">30代・実務浅めからの転職</Link>
          </p>
        </section>

        {/* 30代・40代視点 */}
        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            ミドル層の強みは「型・設計・テストを含めた再現性のある開発経験」と「チームを前に進めた実績」です。レバテックの年代別公表値（2025年）でも、正社員SEの平均は30代で約499万円、40代で約618万円と年代が上がるほど水準が上がる傾向があり、TypeScriptのようなモダンスタックの即戦力性を示せれば交渉余地は十分にあります。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            一方、年齢が上がるほど「マネジメントもできるのか」を問われやすくなります。テックリード・EMの両にらみで職務経歴書を整理し、技術とチーム貢献の両面を書き分けると刺さりやすくなります。年代別の市場感は<Link href="/age/30s/" className="text-blue-600 hover:underline">30代の転職ガイド</Link>・<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職ガイド</Link>も参照してください。
          </p>
        </section>

        {/* 学習戦略 */}
        <section id="study" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {[
              ["型を武器にする", "ジェネリクス、条件型、ユーティリティ型、型ガードを実プロジェクトで使い分けられるレベルを目指す。"],
              ["エコシステムを押さえる", "Next.js App Router、React Server Components、状態管理（Zustand/Jotai）、tRPC/GraphQLなど周辺技術の引き出しを増やす。"],
              ["品質で差をつける", "Vitest/Playwrightでのテスト、型安全なAPI設計、CI/CDの整備経験は面接で具体的に語れる強みになる。"],
              ["アウトプットを残す", "OSSへのPR、技術記事、設計の意思決定ログ（ADR）など、思考プロセスが見える成果物を蓄積する。"],
            ].map(([t, d], i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1">{t}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            学び続ける習慣づくりは<Link href="/knowledge/continuous-learning/" className="text-blue-600 hover:underline">継続的な学習の進め方</Link>も参考になります。
          </p>
        </section>

        {/* 向き不向き */}
        <section id="fit" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">TypeScript転職が向いている人・向いていない人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3 text-sm">向いている人</h3>
              <ul className="space-y-2 text-sm text-green-900">
                {[
                  "型で堅牢さを担保する設計に面白さを感じる",
                  "フロントからバックまで横断して開発したい",
                  "Web系自社開発・SaaSでモダンな技術に触れたい",
                  "リモート中心の柔軟な働き方を志向している",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="font-bold shrink-0">✓</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-lg p-5">
              <h3 className="font-bold text-slate-700 mb-3 text-sm">向いていないかもしれない人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "型を書く手間より速度を最優先したい現場志向が強い",
                  "レガシーな受託・SES中心の環境から動く気がない",
                  "フロントエンドの変化の速さに追従する余裕が今ない",
                  "単一技術を長期間深掘りしたい（TSは周辺技術の更新が速い）",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="font-bold shrink-0">･</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 口コミ傾向 */}
        <section id="voice" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職活動の口コミ傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Qiita Job Change・みん評などの口コミプラットフォームでは、TypeScript／フロントエンド転職に関して「GitHubのコードと型設計を見せると技術面接がスムーズだった」「自社開発企業ではテストやCI/CDの整備経験を深く聞かれた」といった声が見られます。エージェント利用については、IT/Web特化型に対して「技術スタックの解像度が高く提案が的確」という肯定的な傾向がある一方、「初回面談後の連絡が遅いことがあった」という指摘も一部に見られます。あくまで傾向であり、担当者やタイミングによって体験は異なります。
          </p>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">TypeScriptのスキルを活かした転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに登録して、あなたのTypeScriptスキルの市場価値と非公開求人を確認しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Reactエンジニア転職ガイド", href: "/skill/react/" },
              { name: "フロントエンドエンジニア転職ガイド", href: "/skill/frontend/" },
              { name: "AWSエンジニア転職ガイド", href: "/skill/aws/" },
              { name: "30代の転職ガイド", href: "/age/30s/" },
              { name: "レバテックキャリアの評判", href: "/review/levtech/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
              >
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    
      <section className="mx-auto max-w-3xl px-4 pb-10">
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
          <h2 className="font-bold text-slate-900 mb-2">この技術と関連の深い掲載企業</h2>
          <p className="text-xs text-slate-500 mb-2">各社の公開技術情報でこの技術への言及が確認できた掲載企業です。年収・選考は各社ページをご覧ください。</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/colopl/" className="text-blue-700 hover:underline">コロプラ</a></li><li><a href="/company/cyberagent/" className="text-blue-700 hover:underline">サイバーエージェント</a></li><li><a href="/company/cybozu/" className="text-blue-700 hover:underline">サイボウズ</a></li><li><a href="/company/dena/" className="text-blue-700 hover:underline">DeNA</a></li><li><a href="/company/dmm/" className="text-blue-700 hover:underline">DMM.com</a></li><li><a href="/company/freee/" className="text-blue-700 hover:underline">freee</a></li><li><a href="/company/gmo-internet/" className="text-blue-700 hover:underline">GMOインターネットグループ</a></li><li><a href="/company/gree/" className="text-blue-700 hover:underline">グリー（GREE）</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-blue-700 hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-blue-700 hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
