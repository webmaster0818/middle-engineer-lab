import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "エンジニアの職務経歴書の書き方【見本・テンプレ付き】",
  description:
    "30代・40代エンジニア向けに職務経歴書の書き方を徹底解説。職務要約・職務経歴・スキル一覧・自己PRのBefore/After例文、STARフレームワーク、成果の数値化例、NG例まで実用テンプレで紹介します。",
};

const toc = [
  { id: "summary", label: "1. 職務経歴書の全体像と適切な分量" },
  { id: "star", label: "2. 成果を語るSTARフレームワーク" },
  { id: "yokatsu", label: "3. 職務要約の記入見本（Before/After）" },
  { id: "keireki", label: "4. 職務経歴の記入見本（Before/After）" },
  { id: "skill", label: "5. スキル一覧の記入見本（Before/After）" },
  { id: "pr", label: "6. 自己PRの記入見本（Before/After）" },
  { id: "number", label: "7. 成果の数値化フレーズ集" },
  { id: "ng", label: "8. やってはいけないNG例3つ" },
  { id: "checklist", label: "9. 提出前チェックリスト" },
  { id: "age", label: "10. 30代・40代の職務経歴書の勘所" },
  { id: "faq", label: "11. よくある質問" },
];

const faqs = [
  {
    q: "職務経歴書の適切な長さは？",
    a: "A4で2〜3枚が適切です。10年以上の経歴がある30代後半〜40代でも最大4枚を目安にしましょう。直近3〜5年の経験を厚く、それ以前は概要のみにする構成が読みやすいです。採用担当は1人あたり数分しか目を通さないため、情報の密度より「読みやすさ」を優先します。",
  },
  {
    q: "使用技術の書き方にコツはありますか？",
    a: "「経験年数・習熟度・使用したプロジェクトの規模」をセットで書くのがポイントです。例：「TypeScript（3年／業務メイン言語／月間100万PVのWebアプリ開発）」。スキル名を羅列するだけでは、どの程度使えるのかが採用担当に伝わりません。",
  },
  {
    q: "プロジェクト経験はどのように書くべきですか？",
    a: "各プロジェクトについて「期間・チーム規模・自分の役割・使用技術・課題・成果（数値）」を記載します。成果は『レスポンスタイムを200ms→50msに改善』『テストカバレッジを40%→80%に向上』のように、改善前後の数値か改善率で表現すると説得力が出ます。",
  },
  {
    q: "転職回数が多い場合はどう書くべきですか？",
    a: "在籍期間が短い会社が並ぶ場合は、冒頭の職務要約で『キャリアの一貫したテーマ』を示すのが有効です。例：『一貫してバックエンド開発に従事し、Java→Kotlin→Goと技術領域を広げてきました』のように、転職を通じた成長のストーリーが伝わる書き方にしましょう。",
  },
  {
    q: "GitHubやポートフォリオは記載すべきですか？",
    a: "可能であれば記載しましょう。特にWeb系企業はGitHubのコードや活動を参考にすることがあります。OSS活動・個人開発・技術ブログのURLを添えると、書類だけでは伝わらない技術力の裏づけになります。詳しくはポートフォリオ作成ガイドを参照してください。",
  },
  {
    q: "ブランク期間がある場合はどう説明しますか？",
    a: "学習や家庭の事情などブランクの理由を簡潔に書き、その間に取り組んだこと（資格取得・個人開発・キャッチアップした技術）を併記します。空白を隠すより、前向きに過ごした内容を示す方が好印象につながります。",
  },
  {
    q: "職務経歴書の添削はどこで受けられますか？",
    a: "IT特化型の転職エージェントに登録すれば、無料で職務経歴書の添削を受けられます。レバテックキャリアやGeeklyのアドバイザーはエンジニアの書類に精通しており、応募先に合わせた改善点を具体的に指摘してくれます。",
  },
];

const numberPhrases = [
  { area: "パフォーマンス", before: "APIのレスポンスを改善した", after: "主要APIの平均レスポンスタイムを200ms→50msに改善（75%削減）。N+1クエリの解消とキャッシュ層の導入が主因。" },
  { area: "品質・安定性", before: "テストを書いて品質を上げた", after: "テストカバレッジを40%→80%に引き上げ、本番障害の月次発生件数を6件→1件に削減。" },
  { area: "開発スピード", before: "リリースを速くした", after: "CI/CDを整備しデプロイを手動週1回→自動で週3回に高速化。リードタイムを平均5日→1.5日に短縮。" },
  { area: "コスト", before: "インフラのコストを下げた", after: "AWSのリソース最適化とリザーブドインスタンス導入で月額インフラ費用を約30%削減（年間換算で数百万円規模）。" },
  { area: "事業貢献", before: "売上に貢献した", after: "決済導線のUX改善でCVRを2.1%→2.6%に向上させ、月間売上の約12%増に寄与。" },
  { area: "チーム", before: "後輩を育成した", after: "新メンバー3名のオンボーディングを設計し、立ち上がり期間を平均3ヶ月→1.5ヶ月に短縮。" },
];

export default function ResumePage() {
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
      <ArticleJsonLd
        title="エンジニアの職務経歴書の書き方【見本・テンプレ付き】"
        description="30代・40代エンジニア向けに職務経歴書の書き方を徹底解説。職務要約・職務経歴・スキル一覧・自己PRのBefore/After例文、STARフレームワーク、成果の数値化例、NG例まで実用テンプレで紹介します。"
        url="/knowledge/resume/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ" },
          { name: "職務経歴書の書き方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニアの職務経歴書の書き方【見本・テンプレ付き】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 書類選考突破率を上げる職務経歴書のコツ
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            エンジニア転職では、職務経歴書が最初の関門です。技術力を持っていても、その伝え方を誤ると書類選考で落ちてしまいます。逆に、同じ経歴でも「成果を数値で示す」「使用技術を規模感とともに書く」だけで通過率は変わります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、30代・40代エンジニアが書類選考を突破するための職務経歴書の書き方を、<strong>職務要約・職務経歴・スキル一覧・自己PRそれぞれのBefore/After例文、STARフレームワーク、成果の数値化フレーズ、避けるべきNG例</strong>まで、そのまま使えるテンプレートとして解説します。
          </p>
        </section>

        <DataNote surveyedAt="2026年6月" sources={["各IT転職エージェント公開情報", "厚生労働省 job tag"]} />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-sm text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 1. 全体像 */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. 職務経歴書の全体像と適切な分量</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            エンジニアの職務経歴書は、次の5ブロックで構成するのが基本です。採用担当は上から順に読むため、最初の「職務要約」で興味を引けるかどうかが通過率を大きく左右します。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "職務要約（サマリー）", desc: "3〜5行でキャリア全体を要約。得意分野・経験年数・実績のハイライトを凝縮する。採用担当が最初に読む最重要ブロック。" },
              { num: "2", title: "技術スキル一覧", desc: "言語・フレームワーク・インフラ・ツールをカテゴリ別に整理。経験年数と習熟度を併記する。" },
              { num: "3", title: "職務経歴（直近から逆時系列）", desc: "各社の事業概要、在籍期間、担当プロジェクト、役割、使用技術、課題、成果（数値）を記載。" },
              { num: "4", title: "自己PR", desc: "技術的な強み・マネジメント経験・ビジネス貢献を3点程度に絞ってアピール。" },
              { num: "5", title: "保有資格・OSS・GitHub・登壇", desc: "関連資格、OSS貢献、個人開発、技術ブログ、登壇のURLを記載。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mt-5">
            <p className="text-sm text-amber-800">
              <strong>分量の目安：</strong>A4で2〜3枚（経験10年以上でも最大4枚）。直近3〜5年を厚く、それ以前は概要のみに。厚生労働省 job tag によれば「システムエンジニア（受託開発）」の平均年齢は37.1歳（令和7年賃金構造基本統計調査ベース）と、ミドル層が中核を担う職種です。経験が長い分、取捨選択して「読ませる」構成が重要になります。
            </p>
          </div>
        </section>

        {/* 2. STAR */}
        <section id="star" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. 成果を語るSTARフレームワーク</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            職務経歴や自己PRで成果を書くときは、<strong>STARフレームワーク</strong>に沿って整理すると説得力が一気に高まります。「何をしたか」だけでなく「どんな状況で・なぜ・どうやって・結果どうなったか」を順に示すことで、再現性のある実力として伝わります。
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { l: "S", t: "Situation（状況）", d: "プロジェクトの背景・課題が生まれた状況。「月間100万PVのECで、ピーク時にAPIが頻繁にタイムアウトしていた」" },
              { l: "T", t: "Task（課題）", d: "自分が担うべき具体的な目標。「レスポンス遅延を解消し、ピーク時の離脱を防ぐこと」" },
              { l: "A", t: "Action（行動）", d: "実際に取った技術的アクション。「N+1解消、Redisキャッシュ導入、スロークエリのインデックス再設計を主導」" },
              { l: "R", t: "Result（結果）", d: "数値で示す成果。「平均レスポンスを200ms→50msに改善し、ピーク時のエラー率を1.2%→0.1%に低減」" },
            ].map((s, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-white font-bold text-sm shrink-0">{s.l}</span>
                  <h3 className="font-bold text-slate-800 text-sm">{s.t}</h3>
                </div>
                <p className="text-sm text-slate-600">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="bg-petrol-soft rounded-lg p-5 mt-5">
            <p className="text-sm text-blue-800">
              <strong>STARで書いた一文の例：</strong>「ピーク時にAPIタイムアウトが多発していた課題に対し（S/T）、N+1解消・Redisキャッシュ導入・インデックス再設計を主導し（A）、平均レスポンスを200ms→50msに改善、エラー率を1.2%→0.1%に低減した（R）。」
            </p>
          </div>
        </section>

        {/* 3. 職務要約 Before/After */}
        <section id="yokatsu" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3. 職務要約の記入見本（Before/After）</h2>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-4">
            <h3 className="font-bold text-red-700 mb-3 text-sm">Before（避けたい例）</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Web開発の経験があります。JavaScriptやPythonが使えます。チームでの開発経験もあります。コミュニケーション能力が高く、チームワークを大切にしています。新しい技術の習得にも意欲的です。
            </p>
            <p className="text-xs text-red-600 mt-2">
              → 経験年数・プロジェクト規模・成果が不明。どの企業にも送れる汎用文で、印象に残らない。
            </p>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
            <h3 className="font-bold text-emerald-700 mb-3 text-sm">After（30代バックエンドエンジニアの例）</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Webアプリケーション開発に8年従事。直近5年はTypeScript／Node.jsとGoによるバックエンド開発をリードし、月間100万PVのECサイトのAPI設計・実装を担当。5名チームのテックリードとして技術選定・コードレビュー・育成を担い、リリースサイクルを月次→週次に短縮。AWS上のインフラ設計・運用にも携わり、月額インフラ費用を約30%削減しました。
            </p>
            <p className="text-xs text-emerald-700 mt-2">
              → 経験年数・主要技術・規模・役割・具体的な成果が1段落に凝縮されている。
            </p>
          </div>
        </section>

        {/* 4. 職務経歴 Before/After */}
        <section id="keireki" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. 職務経歴の記入見本（Before/After）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            各プロジェクトは「期間・プロジェクト・チーム規模・役割・使用技術・課題・成果」の項目で揃えると読みやすくなります。
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-4">
            <h3 className="font-bold text-red-700 mb-3 text-sm">Before（避けたい例）</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              ECサイトの開発を担当しました。バックエンドのAPIを作ったり、パフォーマンスの改善をしたりしました。チームで協力して開発を進めました。
            </p>
            <p className="text-xs text-red-600 mt-2">→ 規模・役割・成果が曖昧で、本人が何をしたのか判断できない。</p>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
            <h3 className="font-bold text-emerald-700 mb-3 text-sm">After（プロジェクト記載のテンプレート）</h3>
            <div className="space-y-3 text-sm">
              {[
                ["期間", "2024年4月〜2025年12月（1年9ヶ月）"],
                ["プロジェクト", "BtoB SaaSプラットフォームのバックエンドリニューアル"],
                ["チーム規模", "8名（エンジニア5名、デザイナー1名、PM2名）"],
                ["役割", "テックリード／バックエンド設計・実装"],
                ["使用技術", "Go, gRPC, PostgreSQL, Redis, AWS (ECS, RDS, ElastiCache), Terraform, GitHub Actions"],
                ["課題", "モノリスの肥大化でデプロイが月1回に低下し、機能追加が滞っていた"],
                ["成果", "段階的にマイクロサービスへ移行する設計を主導。デプロイ頻度を月1回→週3回に向上し、主要APIのレスポンスを200ms→50msに改善（75%削減）。"],
              ].map(([k, v], i) => (
                <div key={i} className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="font-medium text-slate-700">{k}</span>
                  <span className="text-slate-600">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. スキル一覧 Before/After */}
        <section id="skill" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">5. スキル一覧の記入見本（Before/After）</h2>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-4">
            <h3 className="font-bold text-red-700 mb-3 text-sm">Before（避けたい例）</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Java, Python, JavaScript, TypeScript, Go, Ruby, PHP, SQL, HTML, CSS, AWS, Docker, Kubernetes, Git ……
            </p>
            <p className="text-xs text-red-600 mt-2">→ ただの羅列で、どれを実務でどこまで使えるのかが伝わらない。</p>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
            <h3 className="font-bold text-emerald-700 mb-3 text-sm">After（カテゴリ＋習熟度を併記）</h3>
            <div className="space-y-3 text-sm">
              {[
                ["言語", "Go（4年／業務メイン）、TypeScript（3年／業務メイン）、Java（2年／実務）"],
                ["FW", "Gin, Echo, Express, Next.js（いずれも本番運用経験あり）"],
                ["DB", "PostgreSQL, MySQL, Redis（設計・チューニング経験あり）"],
                ["インフラ", "AWS（ECS/RDS/Lambda 設計運用）、Terraform、GitHub Actions"],
                ["習熟度の凡例", "業務メイン＞実務＞学習レベル の3段階で表記"],
              ].map(([k, v], i) => (
                <div key={i} className="grid grid-cols-[110px_1fr] gap-2">
                  <span className="font-medium text-slate-700">{k}</span>
                  <span className="text-slate-600">{v}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-emerald-700 mt-3">
              → 「TypeScript（3年／業務メイン／月間100万PVのWebアプリ）」のように規模感まで添えると、さらに実力が伝わります。
            </p>
          </div>
        </section>

        {/* 6. 自己PR Before/After */}
        <section id="pr" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">6. 自己PRの記入見本（Before/After）</h2>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-4">
            <h3 className="font-bold text-red-700 mb-3 text-sm">Before（避けたい例）</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              私は責任感が強く、最後までやり遂げる力があります。チームワークを大切にし、コミュニケーションを重視しています。新しい技術にも積極的に挑戦します。
            </p>
            <p className="text-xs text-red-600 mt-2">→ 抽象的な性格描写のみで、エンジニアとしての裏づけが一切ない。</p>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
            <h3 className="font-bold text-emerald-700 mb-3 text-sm">After（STAR＋数値で裏づけ）</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>強み：技術課題を事業成果に接続する力。</strong>前職ではピーク時のAPIタイムアウトが離脱の主因となっていた状況に対し、N+1解消とキャッシュ導入を主導し、レスポンスを200ms→50msに改善。結果としてピーク時のエラー率を1.2%→0.1%に下げ、決済完了率の改善に貢献しました。技術選定では「なぜその技術か」をチームに言語化して共有することを重視しており、5名チームのレビュー文化づくりにも取り組みました。
            </p>
            <p className="text-xs text-emerald-700 mt-2">→ 強みを一言で示し、STARで裏づけ、数値で締める。再現性のある実力として伝わる。</p>
          </div>
        </section>

        {/* 7. 数値化フレーズ集 */}
        <section id="number" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">7. 成果の数値化フレーズ集</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「改善した」を数値に置き換えるだけで説得力が変わります。下表の左（曖昧表現）を、右（数値化した書き方）に変換しましょう。改善前後の値か改善率を入れるのがコツです。
          </p>
          <div className="space-y-3">
            {numberPhrases.map((p, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700">{p.area}</div>
                <div className="px-4 py-3 text-sm">
                  <p className="text-red-600 mb-2"><span className="font-medium">Before：</span>{p.before}</p>
                  <p className="text-emerald-700"><span className="font-medium">After：</span>{p.after}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">※ 数値は記載例です。ご自身の実績に置き換えてください。守秘義務に触れる具体的な金額・社名は、概算や比率にぼかして記載しましょう。</p>
        </section>

        {/* 8. NG例 */}
        <section id="ng" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">8. やってはいけないNG例3つ</h2>
          <div className="space-y-4">
            {[
              { t: "NG1：スキルの羅列だけで終わる", d: "言語やツール名を並べるだけでは、習熟度も実務経験も伝わりません。必ず『経験年数・習熟度・使用規模』をセットにします。" },
              { t: "NG2：成果がすべて定性表現", d: "『改善した』『貢献した』だけでは比較も評価もできません。改善前後の数値か改善率を入れ、STARで状況と行動も添えます。" },
              { t: "NG3：1通を全社に使い回す", d: "応募先の技術スタックや求めるスキルに合わせて、強調するプロジェクトや表現を調整しないと『刺さらない』書類になります。最低でも職務要約と自己PRは応募先ごとに微調整しましょう。" },
            ].map((n, i) => (
              <div key={i} className="bg-red-50 border border-red-200 rounded-lg p-5">
                <h3 className="font-bold text-red-700 mb-1">{n.t}</h3>
                <p className="text-sm text-slate-600">{n.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 9. チェックリスト */}
        <section id="checklist" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">9. 提出前チェックリスト</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            提出前に次の項目を確認しましょう。1つでも欠けていると、書類選考の通過率が下がる原因になります。書き上げた直後ではなく、一晩おいて読み返すと粗が見つかりやすくなります。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <ul className="space-y-2">
              {[
                "職務要約の3〜5行だけで、得意分野・経験年数・代表的な成果が伝わる",
                "すべての主要成果に改善前後の数値か改善率が入っている",
                "使用技術に経験年数・習熟度・規模感が添えられている",
                "直近3〜5年が厚く、それ以前は概要に圧縮されている",
                "自己PRが性格描写ではなく実績の裏づけで構成されている",
                "応募先の技術スタックに合わせて職務要約・自己PRを微調整した",
                "誤字脱字・表記ゆれ（半角全角、英大文字小文字）がない",
                "社名や内部数値など守秘義務に触れる情報を出していない",
              ].map((c, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-700">
                  <span className="text-petrol font-bold shrink-0">✓</span>{c}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            自分でのチェックに加えて、第三者の目を通すと精度が上がります。IT特化型エージェントの添削は、応募先の評価ポイントを踏まえた指摘が受けられるため、独力で書くより通過率を高めやすいのが利点です。
          </p>
        </section>

        {/* 10. 30代40代 */}
        <section id="age" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">10. 30代・40代の職務経歴書の勘所</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：技術の幅とリード経験を両輪で示す</h3>
              <p className="text-sm text-petrol-deep">
                30代は実装力に加えて、技術選定・レビュー・小規模チームのリードを担えることを示すと評価が上がります。直近のプロジェクトでの『意思決定の中身』を具体的に書きましょう。関連: <Link href="/age/30s/" className="text-petrol-deep underline">30代エンジニアの転職</Link>。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：マネジメントと再現性のある実績を前面に</h3>
              <p className="text-sm text-petrol-deep">
                40代は『チーム・プロダクト・事業にどう貢献したか』が重視されます。プレイヤー実績だけでなく、組織課題をどう解決したかをSTARで整理しましょう。関連: <Link href="/age/40s/" className="text-petrol-deep underline">40代エンジニアの転職</Link>、<Link href="/knowledge/40s-reality/" className="text-petrol-deep underline">40代転職のリアル</Link>。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">経歴が長い分、取捨選択が命</h3>
              <p className="text-sm text-petrol-deep">
                10年以上のキャリアを全部詳細に書くと読まれません。直近3〜5年を厚く、それ以前は1〜2行の概要に圧縮。応募先に関係の薄い経験は思い切って削りましょう。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">11. よくある質問</h2>
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
          <h2 className="text-xl font-bold mb-3">職務経歴書のプロ添削を無料で受けよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに登録すれば、エンジニアの職務経歴書に精通したアドバイザーが無料で添削してくれます。
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
              { name: "ポートフォリオ作成ガイド", href: "/knowledge/portfolio/" },
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "自己分析ガイド", href: "/knowledge/self-analysis/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
              { name: "エージェントとの初回面談", href: "/knowledge/agent-first-meeting/" },
              { name: "35歳エンジニアの転職は限界？", href: "/age/35/" },
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
    </>
  );
}
