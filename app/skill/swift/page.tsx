import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "Swift/iOSエンジニアの転職完全ガイド【2026年】年収・求人の探し方";
const DESCRIPTION =
  "Swift/iOSエンジニアの転職市場を公表データで解説。求人ボックス・フリーランスボードの年収データ、求人の探し方、Android/未経験からの参入ルート、30代・40代の視点をまとめました。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：Swift/iOS転職の攻め方" },
  { id: "market", label: "市場・年収データ（公表値）" },
  { id: "level", label: "求められる経験レベル" },
  { id: "career", label: "キャリアパスの選択肢" },
  { id: "find", label: "求人の探し方・強いエージェント" },
  { id: "entry", label: "Android・未経験からの参入ルート" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "study", label: "スキルアップ・学習戦略" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "voice", label: "転職活動の口コミ傾向" },
  { id: "faq", label: "よくある質問" },
];

const salaryRows = [
  ["求人ボックス（正社員・給料ナビ）", "Swiftエンジニア 平均約572万円", "2023年9月時点・求人ボックス（やや古い点に注意）"],
  ["フリーランスボード（フリーランス案件）", "Swift案件 平均年収約945万円・月単価約78.7万円", "2025年10月時点・INSTANTROOM調査"],
  ["レバテック 年代別（正社員SE参考値）", "30代約499万円／40代約618万円", "2025年・レバテック公表値"],
  ["doda IT・通信（決定年収・参考）", "IT・通信の平均決定年収 469万→486万円", "2024年度・パーソルキャリア2025年5月公表"],
];

const careerPaths = [
  { role: "iOSエンジニア", note: "SwiftUI/UIKitでのiOSアプリ開発。自社サービス企業のiOS専任ポジションが中心。" },
  { role: "モバイルテックリード", note: "iOS/Androidチームのリード、アーキテクチャ設計、技術選定。30代後半〜40代の主戦場。" },
  { role: "フリーランスiOSエンジニア", note: "自社サービス企業のiOS開発案件。フリーランス案件の平均年収・単価は高めの傾向（2025年調査）。" },
];

const points = [
  { num: "1", title: "App Storeにアプリを公開する", desc: "個人開発アプリをApp Storeに公開していることが最大のアピールです。SwiftUI、Core Data、CloudKitなどの活用度やUIの質もチェックされます。" },
  { num: "2", title: "SwiftUIとUIKitの両方を理解する", desc: "新規開発はSwiftUIが主流ですが、既存アプリ保守ではUIKitの知識が必要です。両方を理解し段階的移行ができるスキルが求められます。" },
  { num: "3", title: "アーキテクチャ設計力をアピールする", desc: "MVVM、Clean Architecture、TCAなどのパターンを理解し、プロジェクトに適した設計を選べることが差別化のポイントです。" },
];

const faqs = [
  {
    q: "Swift/iOSエンジニアの平均年収はどのくらいですか？",
    a: "雇用形態で大きく異なります。求人ボックスの給料ナビではSwiftエンジニア正社員の平均年収は約572万円（2023年9月時点とやや古い）。一方、フリーランスボードの調査（2025年10月・INSTANTROOM）ではSwift案件の平均年収が約945万円・月単価約78.7万円と高めです。正社員の年代感はレバテックの公表値（2025年）で正社員SE平均が30代約499万円・40代約618万円である点も参考になります。",
  },
  {
    q: "Swift/iOSの需要は今後も続きますか？",
    a: "続くと見られます。日本はiPhoneユーザーが多く、BtoC向けモバイルアプリのiOS対応は重要度が高い領域です。SwiftUIの進化やvisionOS（Apple Vision Pro）など活躍領域も広がっています。ただし将来予測は断定できないため、フリーランス案件調査や求人サイトの公表データで継続的に傾向を確認するのが安全です。",
  },
  {
    q: "Objective-CからSwiftへの移行は難しいですか？",
    a: "Swift自体の習得は比較的容易ですが、SwiftUI・Combine・async/awaitなどモダンな開発パターンの習得に2〜3か月程度かかります。既存のObjective-CコードベースをSwiftへ移行できるスキルは、保守需要のある現場で市場価値が高いです。",
  },
  {
    q: "iOSの求人はどんな企業に多いですか？",
    a: "メガベンチャー、BtoCアプリ企業、フィンテック、ヘルスケアアプリ企業などに多く見られます。自社サービスを持つ企業でのiOS専任エンジニアの需要が特に高い傾向です。",
  },
  {
    q: "AndroidからiOSへの転向は可能ですか？",
    a: "可能です。UI設計・ライフサイクル・API連携などモバイル開発の基礎は共通します。SwiftUIとJetpack Composeは設計思想が似ているため、Android経験者はSwiftUIの習得がスムーズな傾向です。",
  },
  {
    q: "iOSエンジニアにおすすめの転職エージェントは？",
    a: "モバイル案件に強いレバテックキャリア、スタートアップのiOS求人が見つかりやすいGeekly、ハイクラス・スカウト型のビズリーチが候補です。公開済みのポートフォリオアプリを準備して臨むと選考が進みやすくなります。",
  },
];

export default function SwiftSkillPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/skill/swift/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Swift/iOSエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Swift/iOSエンジニアの転職完全ガイド【2026年】年収・求人の探し方
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Swift/iOSエンジニアの転職市場を30代・40代向けに解説
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス 給料ナビ（2023年9月時点）",
            "フリーランスボード調査（INSTANTROOM・2025年10月）",
            "レバテック 年代別平均年収（2025年）",
          ]}
        />

        {/* 結論 */}
        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：Swift/iOS転職の攻め方</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              iOSは自社サービス企業を中心に需要が安定しており、フリーランス案件では高単価が出やすいスキルです（フリーランスボード調査でSwift案件平均年収約945万円・2025年10月）。<strong>App Store公開アプリ＋SwiftUI/アーキテクチャ設計の実績で“即戦力”を可視化</strong>し、モバイルに強いエージェントで求人を引き出すのが効率的です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・年収重視なら自社サービス企業・メガベンチャー、裁量重視ならスタートアップ。</li>
              <li>・Android/他言語からの転向も、公開アプリで実績を作れば現実的。</li>
              <li>・エージェントはレバテックキャリア／Geekly／ビズリーチが候補。</li>
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
            SwiftはAppleが開発したプログラミング言語で、iOS、macOS、watchOS、visionOSアプリの開発に使われています。SwiftUIの登場で開発効率が向上し、Apple Vision Proの発売でvisionOS開発という新領域も生まれています。日本ではiPhoneユーザーが多く、BtoC向けアプリのiOS対応の重要度が高いことが、iOSエンジニアの需要を支えています。
          </p>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Swift/iOSの市場・年収データ（公表値）</h2>
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
            ※ 求人ボックスの正社員平均（約572万円）は2023年9月時点でやや古いため、参考値として扱ってください。フリーランス案件の単価・年収は正社員より高めに出る前提で読む必要があります。
          </p>
        </section>

        {/* 経験レベル */}
        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル（求人要件の傾向）</h2>
          <div className="space-y-3">
            {[
              ["ジュニア〜ミドル（iOS実務1〜3年）", "SwiftUI/UIKitでの画面実装、API連携、公開アプリ実績。受託やスタートアップで募集が見られる層。"],
              ["ミドル〜シニア（実務3〜6年）", "アーキテクチャ設計（MVVM等）、テスト、CI/CD、Core Data/CloudKit活用。設計レビューも担う中心層。"],
              ["シニア・リード", "チームのアーキテクチャ統一、技術選定、UIKit→SwiftUI移行の主導。モバイルテックリード求人の中心。"],
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
            iOS求人は自社サービス企業・メガベンチャーに集中しやすい領域です。企業の技術スタックや開発体制を引き出せるエージェントを使い分けるのが効率的です。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web特化でモバイル案件に強み。技術に明るいアドバイザーが在籍し、高年収帯のマッチングに対応。</p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web/ゲーム業界特化。スタートアップ・自社開発のiOS求人が見つかりやすく、提案スピードが強み。</p>
              <Link href="/review/geekly/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ</h3>
              <p className="text-sm text-slate-600 mb-2">ハイクラス・スカウト型。実績のあるiOSエンジニアは、年収を上げる選択肢としてスカウトを受けやすい。</p>
              <Link href="/review/bizreach-it/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
          </div>
        </section>

        {/* 参入ルート */}
        <section id="entry" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Android・未経験からの参入ルート</h2>
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
            関連: <Link href="/knowledge/portfolio/" className="text-petrol hover:underline">ポートフォリオの作り方</Link> / <Link href="/skill/flutter/" className="text-petrol hover:underline">Flutter転職ガイド</Link>
          </p>
        </section>

        {/* 30代・40代視点 */}
        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            ミドル層は「公開アプリの運用・改善経験」「UIKit→SwiftUI移行など大きめの設計判断を主導した実績」が武器になります。レバテックの年代別公表値（2025年）でも正社員SE平均は30代約499万円・40代約618万円と、年代が上がるほど水準が上がる傾向があり、iOSの即戦力性を示せれば交渉余地は十分にあります。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            40代では「最新OS・SwiftUIへの追従力」を懸念されることがあるため、直近のキャッチアップ実績を具体的に語れると安心感につながります。年代別の市場感は<Link href="/age/30s/" className="text-petrol hover:underline">30代の転職ガイド</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職ガイド</Link>、働き方は<Link href="/knowledge/freelance-vs-fulltime/" className="text-petrol hover:underline">フリーランスvs正社員ガイド</Link>も参照してください。
          </p>
        </section>

        {/* 学習戦略 */}
        <section id="study" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {[
              ["モダンSwiftを押さえる", "SwiftUI、Combine、async/await、Swift Concurrencyを実プロジェクトで使いこなす。"],
              ["アーキテクチャを語れるように", "MVVM/Clean Architecture/TCAなどの設計判断を、規模や要件に応じて選べるようにする。"],
              ["品質・運用で差をつける", "テスト、CI/CD、クラッシュ解析、App Store審査対応の経験は具体的な強みになる。"],
              ["アウトプットを残す", "公開アプリの継続運用、技術記事、OSS貢献など、運用力が見える成果物を蓄積する。"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Swift/iOS転職が向いている人・向いていない人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3 text-sm">向いている人</h3>
              <ul className="space-y-2 text-sm text-green-900">
                {[
                  "1つのアプリをじっくり磨き込み、UI/UX品質にこだわりたい",
                  "自社サービス企業でプロダクトに長く関わりたい",
                  "公開アプリや個人開発で手を動かす習慣がある",
                  "Appleの新OS・新フレームワークを追いかけるのが苦でない",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="font-bold shrink-0">✓</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-lg p-5">
              <h3 className="font-bold text-slate-700 mb-3 text-sm">向いていないかもしれない人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "幅広い技術を浅く広く触りたい（iOSは専門特化が評価されやすい）",
                  "Apple特有の審査・ガイドライン対応にストレスを感じる",
                  "地方在住で出社必須の自社開発企業を志望している（求人が都市部に集中しがち）",
                  "短期間で多数の案件を回したい（腰を据えた開発が中心）",
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
            Qiita Job Change・みん評などの口コミプラットフォームでは、iOSエンジニアの転職に関して「公開アプリやGitHubの提示で書類が通りやすくなった」「自社サービス企業は技術面接でアーキテクチャの意図を深く問われた」といった声が見られます。エージェント利用については、IT特化型に対して「モバイル案件の解像度が高く話が早い」という肯定的な傾向がある一方、総合型では「モバイルの専門性がやや弱い担当に当たることがある」という指摘も見られます。あくまで傾向であり、担当者個人やタイミングによって体験は異なります。
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
          <h2 className="text-xl font-bold mb-3">Swift/iOSのスキルを活かした転職を相談する</h2>
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
              { name: "Kotlinエンジニア転職ガイド", href: "/skill/kotlin/" },
              { name: "Flutter転職ガイド", href: "/skill/flutter/" },
              { name: "フリーランスvs正社員ガイド", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "30代の転職ガイド", href: "/age/30s/" },
              { name: "レバテックキャリアの評判", href: "/review/levtech/" },
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
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/apple/" className="text-petrol-deep hover:underline">Apple Japan</a></li><li><a href="/company/zozo/" className="text-petrol-deep hover:underline">ZOZO</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-petrol-deep hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-petrol-deep hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
