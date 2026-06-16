import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "Flutterエンジニアの転職完全ガイド【2026年】年収・求人の探し方";
const DESCRIPTION =
  "Flutterエンジニアの転職市場を公表データで解説。フリーランスボード調査の案件年収、求人の探し方、ネイティブ未経験からの参入ルート、30代・40代の視点、おすすめエージェントをまとめました。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：Flutter転職の攻め方" },
  { id: "market", label: "市場・年収データ（公表値）" },
  { id: "level", label: "求められる経験レベル" },
  { id: "career", label: "キャリアパスの選択肢" },
  { id: "find", label: "求人の探し方・強いエージェント" },
  { id: "entry", label: "ネイティブ未経験からの参入ルート" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "study", label: "スキルアップ・学習戦略" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "voice", label: "転職活動の口コミ傾向" },
  { id: "faq", label: "よくある質問" },
];

const salaryRows = [
  ["フリーランスボード（フリーランス案件）", "Flutter案件 平均年収約927万円・月単価約77.2万円", "2025年・INSTANTROOM調査"],
  ["別調査（フリーランス案件）", "Flutter案件 平均年収約831万円・案件の79%超がフルリモート", "2025年・フリーランス案件調査（CodeZine報）"],
  ["レバテック 年代別（正社員SE参考値）", "30代約499万円／40代約618万円", "2025年・レバテック公表値"],
  ["doda IT・通信（決定年収・参考）", "IT・通信の平均決定年収 469万→486万円", "2024年度・パーソルキャリア2025年5月公表"],
];

const careerPaths = [
  { role: "Flutterモバイルエンジニア", note: "iOS/Android両対応のアプリ開発。1人で両OSをカバーできる効率性が評価される中心ポジション。" },
  { role: "モバイルテックリード", note: "Flutter導入推進、状態管理・アーキテクチャ設計、チームのリード。30代後半〜40代の主戦場。" },
  { role: "フリーランス（Flutter案件）", note: "スタートアップのMVP開発やBtoCアプリ案件。フルリモート比率が高い傾向（2025年調査で79%超）。" },
];

const points = [
  { num: "1", title: "FlutterアプリをApp Store/Google Playに公開する", desc: "ストアに公開されたアプリが最大のアピールです。Riverpod/BLoCによる状態管理、API連携、プッシュ通知など実務レベルの機能を含めましょう。" },
  { num: "2", title: "Dart言語の深い理解を示す", desc: "isolate、Stream、非同期処理、ジェネリクスなどDartの特性を理解していることが面接で評価されます。pub.devでのパッケージ公開も有効です。" },
  { num: "3", title: "ネイティブ連携の知識を持つ", desc: "プラットフォームチャネルによるネイティブ連携、カメラ・GPS・Bluetoothなどデバイス機能へのアクセス経験があると市場価値が高まります。" },
];

const faqs = [
  {
    q: "Flutterエンジニアの平均年収はどのくらいですか？",
    a: "雇用形態で大きく異なります。フリーランスボードの調査（2025年・INSTANTROOM）ではFlutter案件の平均年収が約927万円・月単価約77.2万円、別のフリーランス案件調査では約831万円とされています。正社員はレバテックの年代別公表値（2025年）で正社員SE平均が30代約499万円・40代約618万円であることが参考になります。フリーランスは正社員より高めに出る前提で読んでください。",
  },
  {
    q: "Flutterの需要は今後も続きますか？",
    a: "拡大傾向と見られます。GoogleがFlutterの開発に注力し、モバイル・Web・デスクトップのマルチプラットフォーム対応が進んでいます。スタートアップを中心に開発効率を重視する企業の採用が見られます。ただし将来予測は断定できないため、フリーランス案件調査などの公表データで継続的に傾向を確認するのが安全です。",
  },
  {
    q: "React NativeとFlutterはどちらが有利ですか？",
    a: "求人数ではReact Nativeがやや多い傾向ですが、Flutterはパフォーマンスやマルチプラットフォーム対応で支持されています。Dart言語の習得が必要ですが、TypeScript経験者は比較的スムーズに移行できます。両方の概念を理解しておくとモバイル全般で選択肢が広がります。",
  },
  {
    q: "Flutterの求人はどんな企業に多いですか？",
    a: "スタートアップ（MVP開発）、BtoCアプリ企業、フィンテック企業などに多く見られます。少人数でiOS/Android両対応を効率的に進めたい企業がFlutterを採用する傾向があります。フリーランス案件はフルリモート比率が高い点も特徴です。",
  },
  {
    q: "ネイティブ開発経験がなくてもFlutterで転職できますか？",
    a: "可能です。FlutterはWidget単位でUIを構築するため、UIKit/Jetpack Composeの知識がなくても開発できます。ただしプラットフォームチャネルによるネイティブ連携の知識があると評価が高まります。まずは公開アプリで実績を作るのが近道です。",
  },
  {
    q: "Flutterエンジニアにおすすめの転職エージェントは？",
    a: "スタートアップのFlutter求人が見つかりやすいGeekly、モバイル案件全般に強いレバテックキャリア、ハイクラス・スカウト型のビズリーチが候補です。公開済みのポートフォリオアプリを準備して臨むと選考が進みやすくなります。",
  },
];

export default function FlutterSkillPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/skill/flutter/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Flutterエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Flutterエンジニアの転職完全ガイド【2026年】年収・求人の探し方
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Flutterエンジニアの転職市場を30代・40代向けに解説
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "フリーランスボード調査（INSTANTROOM・2025年）",
            "レバテック 年代別平均年収（2025年）",
            "doda 決定年収レポート（2024年度・2025年5月公表）",
          ]}
        />

        {/* 結論 */}
        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：Flutter転職の攻め方</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              Flutterは「1人でiOS/Android両対応できる効率性」が評価され、フリーランス案件では高単価が出やすいスキルです（フリーランスボード調査で案件平均年収約927万円・2025年）。正社員求人は母数がネイティブほど多くないため、<strong>公開済みアプリ＋Dart/状態管理の実績で“即戦力”を可視化</strong>し、モバイルに強いエージェントで案件を引き出すのが効率的です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・正社員は中小・スタートアップが中心、フリーランスはフルリモート比率が高い。</li>
              <li>・ネイティブ未経験でも公開アプリで実績を作れば参入可能。</li>
              <li>・エージェントはGeekly／レバテックキャリア／ビズリーチが候補。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-petrol hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed text-sm">
            FlutterはGoogleが開発したクロスプラットフォームフレームワークで、1つのコードベースからiOS、Android、Web、デスクトップアプリを構築できます。開発効率とUI品質の高さから、スタートアップを中心に採用が広がっています。Skia/Impellerレンダリングによりネイティブに近いパフォーマンスを実現できる点も特徴です。
          </p>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Flutterの市場・年収データ（公表値）</h2>
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
            ※ Flutterの言語別「正社員」平均を単独で示す確実な公表統計は乏しいため、ここではフリーランス案件調査と年代別の正社員SE参考値を併記しています。フリーランスの単価・年収は正社員より高めに出る前提で読んでください。
          </p>
        </section>

        {/* 経験レベル */}
        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル（求人要件の傾向）</h2>
          <div className="space-y-3">
            {[
              ["ジュニア〜ミドル（Flutter実務1〜3年）", "Widget設計、状態管理（Riverpod/BLoC）、API連携、公開アプリ実績。スタートアップや受託で募集が見られる層。"],
              ["ミドル〜シニア（実務3〜6年）", "アーキテクチャ設計、CI/CD（Fastlane等）、テスト、ネイティブ連携。設計レビューも担う中心層。"],
              ["シニア・リード", "Flutter導入推進、チームのアーキテクチャ統一、技術選定。モバイルテックリード求人の中心。"],
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {careerPaths.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{item.role}</h3>
                <p className="text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方・強いエージェント</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Flutter求人はネイティブ求人ほど母数が多くないため、スタートアップ・自社開発に強いチャネルを押さえるのが効率的です。フリーランス志向なら案件サイトとの併用も検討しましょう。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web/ゲーム業界特化。スタートアップ・自社開発のモバイル求人が見つかりやすく、提案スピードが強み。</p>
              <Link href="/review/geekly/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web特化でモバイル案件全般に強み。技術に明るいアドバイザーが在籍し、高年収帯のマッチングに対応。</p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ</h3>
              <p className="text-sm text-slate-600 mb-2">ハイクラス・スカウト型。実績のあるモバイルエンジニアは、年収を上げる選択肢としてスカウトを受けやすい。</p>
              <Link href="/review/bizreach-it/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
          </div>
        </section>

        {/* 参入ルート */}
        <section id="entry" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ネイティブ未経験からの参入ルート</h2>
          <div className="space-y-4">
            {points.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 text-sm">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            関連: <Link href="/knowledge/portfolio/" className="text-petrol hover:underline">ポートフォリオの作り方</Link> / <Link href="/skill/swift/" className="text-petrol hover:underline">Swift/iOS転職ガイド</Link>
          </p>
        </section>

        {/* 30代・40代視点 */}
        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            ミドル層は「公開アプリの運用・改善経験」「チームでアーキテクチャを統一した実績」が武器になります。Flutterは比較的新しい技術のため、ネイティブ（Swift/Kotlin）やWeb（TypeScript）の前職経験と組み合わせて語ると、即戦力性とキャッチアップ力の両方を示せます。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            正社員求人の母数が限られる分、フリーランス案件（フルリモート比率が高い傾向）も選択肢に入れて間口を広げるのが現実的です。年代別の市場感は<Link href="/age/30s/" className="text-petrol hover:underline">30代の転職ガイド</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職ガイド</Link>、働き方は<Link href="/knowledge/freelance-vs-fulltime/" className="text-petrol hover:underline">フリーランスvs正社員ガイド</Link>も参照してください。
          </p>
        </section>

        {/* 学習戦略 */}
        <section id="study" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {[
              ["Dartを深める", "非同期（Future/Stream）、isolate、null safety、ジェネリクスを実プロジェクトで使いこなす。"],
              ["状態管理の引き出しを持つ", "Riverpod/BLoC/Providerの設計判断を語れるレベルにし、規模に応じて選べるようにする。"],
              ["品質・運用で差をつける", "テスト、CI/CD（Fastlane等）、クラッシュ解析、ストア審査対応の経験は具体的な強みになる。"],
              ["アウトプットを残す", "公開アプリの継続運用、pub.devパッケージ、技術記事など、運用力が見える成果物を蓄積する。"],
            ].map(([t, d], i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1">{t}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            学び続ける習慣づくりは<Link href="/knowledge/continuous-learning/" className="text-petrol hover:underline">継続的な学習の進め方</Link>も参考になります。
          </p>
        </section>

        {/* 向き不向き */}
        <section id="fit" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Flutter転職が向いている人・向いていない人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3 text-sm">向いている人</h3>
              <ul className="space-y-2 text-sm text-green-900">
                {[
                  "1人でiOS/Android両対応をこなし、開発効率で価値を出したい",
                  "スタートアップでMVPを高速に立ち上げる経験を積みたい",
                  "フルリモート中心の働き方を志向している",
                  "新しい技術を自分で学び、公開アプリで実績を作れる",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="font-bold shrink-0">✓</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-lg p-5">
              <h3 className="font-bold text-slate-700 mb-3 text-sm">向いていないかもしれない人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "大企業の安定した正社員求人を多数比較したい（母数がネイティブより少なめ）",
                  "ネイティブ専任として深い最適化に特化したい",
                  "確立された巨大コードベースの保守を中心にしたい",
                  "Dartの学習に時間を割く余裕が今ない",
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
            Qiita Job Change・みん評などの口コミプラットフォームでは、Flutterエンジニアの転職に関して「公開アプリと状態管理（Riverpod/BLoC）の実装経験を見せると話が早かった」「正社員求人はネイティブより数が限られるため、フリーランス案件も並行して見た」といった声が見られます。エージェント利用については、IT/Web特化型に対して「スタートアップの内情まで教えてくれた」という肯定的な傾向がある一方、「Flutter指定の正社員求人はまだ多くないと正直に言われた」という現実的な指摘も見られます。あくまで傾向であり、担当者やタイミングによって体験は異なります。
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
          <h2 className="text-xl font-bold mb-3">Flutterのスキルを活かした転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            モバイル求人に強いIT特化型エージェントに登録して、年収アップの可能性と非公開求人を確認しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Swift/iOS転職ガイド", href: "/skill/swift/" },
              { name: "Kotlin転職ガイド", href: "/skill/kotlin/" },
              { name: "フリーランスvs正社員ガイド", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "30代の転職ガイド", href: "/age/30s/" },
              { name: "Geeklyの評判", href: "/review/geekly/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
            ].map((item, i) => (
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
    
      <section className="mx-auto max-w-3xl px-4 pb-10">
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
          <h2 className="font-bold text-slate-900 mb-2">この技術と関連の深い掲載企業</h2>
          <p className="text-xs text-slate-500 mb-2">各社の公開技術情報でこの技術への言及が確認できた掲載企業です。年収・選考は各社ページをご覧ください。</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/10x/" className="text-petrol-deep hover:underline">10X</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-petrol-deep hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-petrol-deep hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
