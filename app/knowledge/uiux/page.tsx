import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "UI/UXエンジニアへの転身ガイド【フロントエンドから】",
  description:
    "フロントエンドエンジニアからUI/UXエンジニア（デザインエンジニア）へ転身する方法を解説。必要なスキル拡張、ポートフォリオの作り方、デザイナーとの違いを30代・40代向けに整理。",
};

const toc = [
  { id: "conclusion", label: "結論" },
  { id: "what", label: "UI/UXエンジニア（デザインエンジニア）とは" },
  { id: "diff", label: "デザイナー・フロントエンドとの違い" },
  { id: "skills", label: "フロントエンドからのスキル拡張ロードマップ" },
  { id: "portfolio", label: "ポートフォリオの作り方【構成例】" },
  { id: "resume", label: "職務経歴書での見せ方【Before/After】" },
  { id: "middle", label: "30代・40代の転身視点" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  { q: "UI/UXエンジニアとは何をする職種ですか？", a: "明確な統一定義はありませんが、一般に「デザインとフロントエンド実装の橋渡しをするエンジニア」を指します。デザインシステムやコンポーネントライブラリの設計・実装、デザイナーが作ったUIの忠実な実装、インタラクション・アニメーション設計、アクセシビリティ対応などを担います。『デザインエンジニア』『デザインシステムエンジニア』と呼ばれることもあります。" },
  { q: "フロントエンドエンジニアから転身しやすいですか？", a: "比較的スムーズです。HTML/CSS/JavaScript（TypeScript）やReact等の実装スキルという土台がすでにあるため、そこにデザインの基礎・UX設計・デザインシステムの知識を足していく形になります。ゼロからの職種転換ではなく『今の専門の隣に1歩広げる』拡張なので、ミドル層にも現実的です。" },
  { q: "デザイナーになる必要がありますか？絵が描けません", a: "ビジュアルデザインをゼロから生み出す『デザイナー』になる必要はありません。UI/UXエンジニアに求められるのは、デザインの意図を理解し、それを高品質に実装し、再利用可能な仕組み（デザインシステム）に落とす力です。デザインの『原則を理解する』ことと『一から描く』ことは別物で、前者を押さえれば十分価値を出せます。" },
  { q: "Figmaは使えるようになるべきですか？", a: "はい、最低限の読み書きはできた方がよいです。デザイナーとの協業では、Figma上の仕様（余白・色・タイポグラフィ・コンポーネント定義）を正確に読み取って実装する場面が多く、Design Tokenやコンポーネント設計の理解があると重宝されます。自分で精緻なデザインを起こせる必要はありませんが、『読める・触れる』ことは実務上ほぼ必須です。" },
  { q: "ポートフォリオには何を載せればいいですか？", a: "実装したUIコンポーネント、デザインシステムの設計例、インタラクション/アニメーションのデモ、アクセシビリティ対応の事例などが効果的です。『なぜその設計にしたか』という意思決定の説明を添えると、単なる作品集より評価されます。動くデモ（デプロイ済み）とコード（GitHub）の両方を見せられると説得力が高まります。本文に構成例を載せています。" },
  { q: "年収は上がりますか？", a: "個別の年収は企業・経験・スキルで大きく異なるため一概には言えません。一般論として、デザインと実装の両方ができる人材は市場で希少なため評価されやすい傾向があります。具体的な相場は気になる求人の提示レンジを確認したり、エージェントに自分のスキルセットでの相場を聞くのが確実です。" },
  { q: "デザインの基礎はどう学べばいいですか？", a: "色・余白・タイポグラフィ・レイアウト・アクセシビリティといったUIの原則から学ぶのが効率的です。実装者の強みを活かし、既存のデザインシステム（公開されているもの）を読み解いて『なぜこの設計か』を理解する学習が実務に直結します。学習の進め方は当サイトのスキルアップ戦略の記事も参考にしてください。" },
  { q: "どのエージェントに相談すればよいですか？", a: "UI/UXエンジニアやデザインエンジニアの求人は、IT/Web自社開発企業に多く、IT特化型エージェントが扱っています。レバテックキャリアやGeeklyなどWeb系に強いサービスで、デザイン領域に踏み込んだフロントエンド求人を相談するとよいでしょう。複数登録して求人の幅を比較するのがおすすめです。" },
];

export default function UIUXPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="UI/UXエンジニアへの転身ガイド【フロントエンドから】" description="フロントエンドエンジニアからUI/UXエンジニア（デザインエンジニア）へ転身する方法を解説。必要なスキル拡張、ポートフォリオの作り方、デザイナーとの違いを30代・40代向けに整理。" url="/knowledge/uiux/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "転職ガイド" }, { name: "UI/UXエンジニアへの転身" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">UI/UXエンジニアへの転身ガイド【フロントエンドから】</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | フロントエンドからのスキル拡張・ポートフォリオ・デザイナーとの違い</p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed">
            UI/UXエンジニア（デザインエンジニア）は、デザインとフロントエンド実装の橋渡しをする職種です。フロントエンドエンジニアにとっては、ゼロからの職種転換ではなく<strong>「今の専門の隣に1歩広げる」スキル拡張</strong>として現実的なキャリアの一つです。本記事では、デザイナー・フロントエンドとの違い、フロントエンドからのスキル拡張ロードマップ、そしてポートフォリオの作り方を、30代・40代の視点で整理します。
          </p>
        </section>

        <DataNote surveyedAt="2026年6月" sources={["公開されているデザインシステム・職種定義に基づく一般的な整理"]} />

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 text-sm text-blue-700">
            {toc.map((t) => (<li key={t.id}><a href={`#${t.id}`} className="hover:underline">{t.label}</a></li>))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：フロントエンドの「隣」へ広げる現実的な拡張</h2>
            <ul className="text-sm text-blue-900 space-y-2 leading-relaxed">
              <li>・必要なのは<strong>絵を描く力ではなく、デザインの意図を理解し高品質に実装し、仕組み化する力</strong>。デザイナーになる必要はない。</li>
              <li>・既存の実装スキルに<strong>デザイン基礎・UX設計・デザインシステム・Figmaの読み書き</strong>を足していく拡張型のキャリア。</li>
              <li>・評価の鍵は<strong>ポートフォリオ</strong>。動くデモ＋コード＋「なぜその設計か」の説明をセットで見せる。</li>
            </ul>
          </div>
        </section>

        {/* UI/UXエンジニアとは */}
        <section id="what" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">UI/UXエンジニア（デザインエンジニア）とは</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            統一された定義はありませんが、一般に次のような領域を担うエンジニアを指します。デザインと実装の境界に立ち、両方の言葉が分かることが価値の源泉です。
          </p>
          <div className="space-y-3">
            {[
              { t: "デザインシステムの設計・実装", d: "再利用可能なコンポーネントライブラリやDesign Tokenを設計・実装し、チーム全体のUI品質と開発効率を底上げする。" },
              { t: "デザインの忠実な実装", d: "Figma等の仕様（余白・色・タイポグラフィ・状態）を正確に読み取り、ピクセル単位でずれのないUIを実装する。" },
              { t: "インタラクション・アニメーション設計", d: "状態遷移やマイクロインタラクションを、パフォーマンスとUXの両面から設計・実装する。" },
              { t: "アクセシビリティ対応", d: "キーボード操作・スクリーンリーダー・コントラストなど、誰もが使えるUIを実装で担保する。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* デザイナー・フロントエンドとの違い */}
        <section id="diff" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">デザイナー・フロントエンドとの違い</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">3職種の重なりと違いを整理すると、UI/UXエンジニアの立ち位置が見えてきます。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[680px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">職種</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">主な責任</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">得意領域</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["UI/UXデザイナー", "何を・どう見せるかを設計", "リサーチ・情報設計・ビジュアルデザイン（一から描く）"],
                  ["UI/UXエンジニア", "デザインを高品質に実装し仕組み化", "デザインシステム・実装・インタラクション・アクセシビリティ"],
                  ["フロントエンドエンジニア", "Webアプリの機能を実装", "状態管理・API連携・パフォーマンス・全体実装"],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200 font-medium text-slate-800">{row[0]}</td>
                    <td className="px-3 py-3 border border-slate-200 text-slate-600">{row[1]}</td>
                    <td className="px-3 py-3 border border-slate-200 text-slate-600">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm mt-3">
            ポイントは、<strong>UI/UXエンジニアはデザイナーの代わりではない</strong>こと。「一からビジュアルを生み出す」のがデザイナー、「デザインの意図を理解して高品質に実装し、再利用できる形にする」のがUI/UXエンジニアです。絵を描けなくても、デザインの原則を理解していれば十分に価値を出せます。
          </p>
        </section>

        {/* スキル拡張ロードマップ */}
        <section id="skills" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フロントエンドからのスキル拡張ロードマップ</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            すでに実装スキルがある前提で、デザイン寄りの力を足していきます。順番に積むイメージです。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "デザインの基礎原則を学ぶ", desc: "色・余白・タイポグラフィ・レイアウト・コントラストなどUIの原則を理解する。公開されているデザインシステムを読み解くのが実務に直結する。" },
              { num: "2", title: "Figmaの読み書きに慣れる", desc: "デザイン仕様を正確に読み取り、コンポーネントやDesign Tokenの考え方を理解する。自分で精緻に描く必要はないが、触れることは前提。" },
              { num: "3", title: "デザインシステムを実装する", desc: "再利用可能なコンポーネントライブラリを設計・実装。バリアント・状態・トークンの設計経験が最大の差別化になる。" },
              { num: "4", title: "アクセシビリティ・インタラクションを磨く", desc: "キーボード操作・ARIA・スクリーンリーダー対応や、パフォーマンスを意識したアニメーション実装を経験する。" },
              { num: "5", title: "ポートフォリオにまとめて転職活動", desc: "成果物を動くデモ＋コード＋設計意図の説明としてまとめ、デザイン知見のあるフロントエンド／デザインエンジニア求人に応募する。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.num}</span>
                <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600">{item.desc}</p></div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm mt-4">
            学習を継続する仕組みづくりは<Link href="/knowledge/continuous-learning/" className="text-blue-600 hover:underline">学び続ける技術（学習戦略）</Link>を参照してください。
          </p>
        </section>

        {/* ポートフォリオの作り方 */}
        <section id="portfolio" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポートフォリオの作り方【構成例】</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            UI/UXエンジニアは、職務経歴書よりポートフォリオで評価されます。<strong>「何を作ったか」だけでなく「なぜその設計にしたか」</strong>を見せるのが鍵です。以下が掲載要素の例です。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li><strong>① コンポーネント集：</strong>ボタン・フォーム・モーダルなどの実装。状態・バリアントを網羅し、動くデモで見せる</li>
              <li><strong>② デザインシステムの設計例：</strong>トークン設計・命名規則・利用ガイドなど、仕組み化の思考を示す</li>
              <li><strong>③ インタラクション/アニメーションのデモ：</strong>マイクロインタラクションを、パフォーマンス配慮とともに見せる</li>
              <li><strong>④ アクセシビリティ事例：</strong>キーボード操作・スクリーンリーダー対応のbefore/after</li>
              <li><strong>⑤ 設計意図の説明：</strong>各作品に「課題→検討→決定理由」を1段落添える</li>
              <li><strong>⑥ コードへのリンク：</strong>GitHubで実装を公開し、可読性も見てもらえるようにする</li>
            </ul>
          </div>
          <p className="text-slate-600 text-sm">
            動くデモ（デプロイ済み）とコード（GitHub）の両方を見せられると説得力が増します。ポートフォリオ全般の作り方は<Link href="/knowledge/portfolio/" className="text-blue-600 hover:underline">ポートフォリオ作成ガイド</Link>もあわせてどうぞ。
          </p>
        </section>

        {/* 職務経歴書での見せ方 */}
        <section id="resume" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書での見せ方【Before/After】</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            フロントエンド経験を「デザイン領域にも踏み込める」と伝わるように書き換えると、UI/UX寄りの求人での評価が変わります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="text-xs font-bold text-red-700 mb-2">Before（一般的なフロント記述）</p>
              <ul className="text-sm text-red-800 space-y-1">
                <li>・Reactで画面を実装</li>
                <li>・CSSでスタイリング</li>
                <li>・デザイナーの指示通りに作成</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="text-xs font-bold text-green-700 mb-2">After（デザイン領域への貢献を明示）</p>
              <ul className="text-sm text-green-800 space-y-1.5">
                <li>・再利用可能なUIコンポーネントライブラリを設計・実装し、画面実装の重複を削減</li>
                <li>・Design Tokenを導入してデザイナーと表記を統一し、手戻りを低減</li>
                <li>・アクセシビリティ対応（キーボード操作・ARIA）を実装に組み込み</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 text-sm mt-4">
            職務経歴書の全体構成は<Link href="/knowledge/resume/" className="text-blue-600 hover:underline">エンジニアの職務経歴書の書き方</Link>を参照してください。
          </p>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の転身視点</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
            <p>
              UI/UXエンジニアへの転身は、ミドル層にとって<strong>「これまでのフロントエンド経験を捨てずに広げられる」</strong>のが大きな利点です。ゼロからの異業種転職ではなく、積み上げた実装力の上にデザイン視点を足す拡張なので、年齢のハンデが出にくいキャリアといえます。
            </p>
            <p>
              特にデザインシステムの設計・運用は、複数プロジェクトを横断した経験や「組織全体の効率を考える」視点が求められる領域で、<strong>経験豊富なミドルの強みが活きます</strong>。若手より「全体を設計できる人」として評価されやすい方向です。
            </p>
            <p>
              一方で、年収は企業・スキルで差が大きいため、転身前に気になる求人の提示レンジを確認したり、エージェントに自分のスキルセットでの相場を聞くのが確実です。市場での自分の位置づけは<Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">市場価値の調べ方</Link>、キャリアの方向づけは<Link href="/knowledge/career-plan/" className="text-blue-600 hover:underline">キャリアプラン設計</Link>もあわせてご覧ください。
            </p>
          </div>
        </section>

        {/* チェックリスト */}
        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 mb-4">多く当てはまるほど、UI/UXエンジニアへの転身が向いています。</p>
            <div className="space-y-3">
              {[
                "実装したUIの「見え方・使い心地」にこだわる方だ",
                "デザイナーとのやり取りや仕様の読み取りが苦にならない",
                "再利用できる仕組み（共通化・コンポーネント化）を作るのが好き",
                "アクセシビリティやUXに関心がある",
                "細部の作り込み（余白・状態・アニメーション）が好き",
                "一からビジュアルを描くより、設計を実装に落とす方が得意",
              ].map((item, i) => (
                <label key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 mt-0.5" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">キャリアチェンジの相談はプロに</h2>
          <p className="text-blue-100 text-sm mb-4">IT/Web自社開発に強いエージェントなら、デザイン領域に踏み込んだフロントエンド／デザインエンジニア求人を紹介してもらえます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ポートフォリオ作成ガイド", href: "/knowledge/portfolio/" },
              { name: "学び続ける技術（学習戦略）", href: "/knowledge/continuous-learning/" },
              { name: "エンジニアの職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "キャリアプラン設計", href: "/knowledge/career-plan/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
              { name: "セカンドキャリアとしてのエンジニア転職", href: "/knowledge/second-career/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
