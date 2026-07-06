import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/linkedin/" },
  title: "エンジニアのLinkedIn活用術【プロフィール見本付き】",
  description:
    "LinkedInでスカウトを増やすプロフィールの書き方を見本付きで解説。Open to Work設定、日本のIT転職での実際の使われ方を30代・40代エンジニア向けに整理しました。",
};

const toc = [
  { id: "conclusion", label: "結論" },
  { id: "japan-reality", label: "日本のIT転職での実際の使われ方" },
  { id: "profile", label: "スカウトが届くプロフィールの書き方【見本構成】" },
  { id: "headline", label: "ヘッドライン・About見本（Before/After）" },
  { id: "experience", label: "職歴（Experience）の書き方見本" },
  { id: "scout-settings", label: "スカウトを増やす設定とアクション" },
  { id: "privacy", label: "現職にバレないためのプライバシー設定" },
  { id: "middle", label: "30代・40代がLinkedInを使うときの視点" },
  { id: "checklist", label: "プロフィール完成度チェックリスト" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "LinkedInは日本のエンジニア転職でも本当に使えますか？",
    a: "外資系IT企業・グローバル展開企業・一部のメガベンチャーでは採用チャネルとして機能しています。一方で日系の中堅・中小SIerやSESではLinkedIn経由採用がまだ少なく、こうした企業を狙う場合は転職エージェントや求人サイトの併用が前提になります。「LinkedInだけで完結する」とは考えず、選択肢の一つとして位置づけるのが現実的です。",
  },
  {
    q: "プロフィールは英語と日本語どちらで書くべきですか？",
    a: "LinkedInは1アカウントに複数言語のプロフィールを登録できます。外資系・グローバル企業を視野に入れるなら英語版は実質必須で、デフォルト言語を英語にしつつ日本語版も追加する形が無難です。日系企業中心なら日本語のみでも機能しますが、リクルーターの検索語に英語の技術名（Go, Kubernetes など）が混ざることは多いので、スキル欄は英語表記も併記すると拾われやすくなります。",
  },
  {
    q: "現職の同僚や会社にLinkedInの転職活動がバレませんか？",
    a: "「Open to Work」はリクルーターのみに公開する設定が選べ、これを使えば一般公開はされません。さらに設定からプロフィール編集の更新通知（アクティビティのブロードキャスト）をオフにすれば、こまめな編集が同僚のフィードに流れるのを防げます。ただし自社のリクルーターには表示される可能性があるため、完全な秘匿を求める場合は注意が必要です。",
  },
  {
    q: "コネクション（つながり）はどのくらい増やすべきですか？",
    a: "LinkedInは500以上のコネクションで表示が「500+」となり、検索での露出が安定すると一般に言われます。数を追うより、同職種のエンジニア・元同僚・IT専門のリクルーターなど、自分の専門領域と重なる相手を中心につなぐ方がスカウトの質が上がります。面識のない相手に送る場合は一言メッセージを添えると承認されやすくなります。",
  },
  {
    q: "LinkedIn Premium（有料）は転職に必要ですか？",
    a: "無料プランでもプロフィール公開・Open to Work・スカウト受信は可能で、まずは無料で十分です。Premium（Career等）ではInMail送信枠やプロフィール閲覧者の詳細確認、求人の応募者比較などが使えますが、月額課金が発生します。費用対効果を見極めたうえで、短期集中で転職する期間だけ契約するといった使い方が現実的です。",
  },
  {
    q: "ヘッドラインには何を書けば検索に引っかかりますか？",
    a: "リクルーターは役割名＋技術スタック＋経験年数で検索することが多いため、ヘッドラインに「Senior Backend Engineer / Go・Kubernetes・AWS / 12年」のように具体的な職種名と主要技術を入れると拾われやすくなります。「エンジニア」のような抽象語だけだと検索にヒットしにくいので避けましょう。",
  },
  {
    q: "古い職歴や使わなくなった技術も全部書くべきですか？",
    a: "30代・40代は職歴が長くなるため、直近10〜15年・直近3〜4社を厚めに書き、それ以前は要約にとどめるのが読みやすいです。使わなくなった技術を羅列するより、現在の専門性につながる経験を強調しましょう。古い技術名はノイズになり、意図しない求人のスカウトを増やす原因にもなります。",
  },
  {
    q: "LinkedInと転職エージェントはどう併用すればいいですか？",
    a: "LinkedInは「待ち（スカウト）」、エージェントは「攻め（非公開求人の紹介・選考サポート）」と役割が異なります。LinkedInでスカウトを受けて市場の反応を見つつ、IT特化型エージェントで非公開求人にアクセスし書類添削や年収交渉を任せると、選択肢と交渉力の両方を確保できます。",
  },
];

const profileSections = [
  { part: "プロフィール写真", role: "第一印象。清潔感のあるビジネスカジュアルの顔写真。背景はシンプルに。アイコンや風景は避ける" },
  { part: "ヘッドライン（最重要）", role: "役割＋技術スタック＋経験年数。リクルーターの検索キーワードとほぼ一致させる" },
  { part: "About（自己紹介）", role: "専門領域・得意技術・代表的な実績・今後やりたいことを300〜500字で。冒頭2行が一覧で表示される" },
  { part: "Experience（職歴）", role: "各社で「役割→課題→施策→成果」を箇条書き。可能な範囲で数値を入れる" },
  { part: "Skills（スキル）", role: "主要技術を登録し、上位3つを専門スキルにピン留め。検索ヒット率に直結" },
  { part: "Recommendations（推薦）", role: "元上司・同僚からの推薦文。第三者評価で信頼性が上がる" },
  { part: "Open to Work", role: "リクルーター限定公開でオン。希望職種・勤務地を登録するとスカウト精度が上がる" },
];

export default function LinkedInPage() {
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
        title="エンジニアのLinkedIn活用術【プロフィール見本付き】"
        description="LinkedInでスカウトを増やすプロフィールの書き方を見本付きで解説。Open to Work設定、日本のIT転職での実際の使われ方を30代・40代エンジニア向けに整理しました。"
        url="/knowledge/linkedin/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "LinkedIn活用術" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニアのLinkedIn活用術【プロフィール見本付き】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | プロフィール最適化とスカウト獲得の実践ガイド
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed">
            LinkedInは、エンジニアが「自分から応募しなくても声がかかる」状態を作るためのツールです。特に外資系IT企業・グローバル展開企業・一部のメガベンチャーでは採用チャネルとして機能しており、プロフィールを整えておくだけでスカウトが届く可能性があります。本記事では、スカウトが届くプロフィールの書き方を見本付きで示し、設定の最適化と日本のIT転職での実際の使われ方を、30代・40代の視点で整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={["LinkedIn公式ヘルプ（プロフィール・Open to Work設定）"]}
        />

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 text-sm text-petrol-deep">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：LinkedInは「攻め」ではなく「置いておく武器」</h2>
            <ul className="text-sm text-blue-900 space-y-2 leading-relaxed">
              <li>・<strong>外資・グローバル・一部メガベンチャー志望なら作る価値が高い</strong>。日系SIer・SES中心ならエージェント併用が前提。</li>
              <li>・成果を出すのは<strong>ヘッドライン・About・職歴の3点</strong>。ここを検索キーワードに合わせるだけでスカウトが変わる。</li>
              <li>・<strong>Open to Work（リクルーター限定公開）</strong>をオンにし、編集の更新通知をオフにすれば、現職にバレずに転職意思を示せる。</li>
            </ul>
          </div>
        </section>

        {/* 日本のIT転職での実際の使われ方 */}
        <section id="japan-reality" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">日本のIT転職での実際の使われ方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            日本のLinkedInは、英語圏のように「全職種の標準インフラ」というほどは浸透していません。使われ方には企業タイプによってはっきり差があります。自分の志望先がどのタイプかで、LinkedInに割く力の配分を決めましょう。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">外資系IT・グローバル企業</h3>
              <p className="text-sm text-slate-600">採用チャネルとして日常的に機能。社内リクルーターやヘッドハンターがLinkedIn検索で候補者を探す。英語プロフィールがほぼ前提。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">メガベンチャー・自社開発企業</h3>
              <p className="text-sm text-slate-600">人事・現場エンジニアによるスカウトやカジュアル面談の入口に使われることがある。技術スタックが明確だとマッチしやすい。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">日系大手・SIer・SES</h3>
              <p className="text-sm text-slate-600">LinkedIn経由の中途採用はまだ限定的。これらを狙う場合は転職エージェントや求人サイトが主戦場になり、LinkedInは補助的な位置づけ。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            つまりLinkedInは「すべての人に必須」ではなく、<strong>志望先に外資・グローバル・自社開発が含まれるなら整える価値が高い</strong>、というのが実態です。スカウト型サービス全般の使い分けは
            <Link href="/knowledge/scout/" className="text-petrol hover:underline">スカウト型転職サービスの活用法</Link>
            、海外志向なら<Link href="/knowledge/overseas/" className="text-petrol hover:underline">海外IT企業への転職ガイド</Link>もあわせてご覧ください。
          </p>
        </section>

        {/* プロフィール見本構成 */}
        <section id="profile" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スカウトが届くプロフィールの書き方【見本構成】</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            リクルーターは「役割名＋技術＋経験年数」で検索し、検索結果の一覧では<strong>写真・名前・ヘッドラインしか見えません</strong>。つまり、まずヘッドラインで引っかかり、クリックしてもらってからAboutと職歴で判断される、という二段構えです。以下が各セクションの役割です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium w-1/4">セクション</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">役割・書くべきこと</th>
                </tr>
              </thead>
              <tbody>
                {profileSections.map((s, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200 font-medium text-slate-800">{s.part}</td>
                    <td className="px-3 py-3 border border-slate-200 text-slate-600">{s.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ヘッドライン・About見本 */}
        <section id="headline" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ヘッドライン・About見本（Before/After）</h2>

          <h3 className="font-bold text-slate-800 mb-2">ヘッドライン</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="text-xs font-bold text-red-700 mb-2">Before（検索に弱い）</p>
              <p className="text-sm text-red-800">Software Engineer</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="text-xs font-bold text-green-700 mb-2">After（検索に強い）</p>
              <p className="text-sm text-green-800">Senior Backend Engineer / Go・Kubernetes・AWS / 大規模決済システム / 12年</p>
            </div>
          </div>

          <h3 className="font-bold text-slate-800 mb-2">About（自己紹介）</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="text-xs font-bold text-red-700 mb-2">Before</p>
              <p className="text-sm text-red-800 leading-relaxed">Webエンジニアとして長く働いています。色々な技術を使ってきました。よろしくお願いします。</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="text-xs font-bold text-green-700 mb-2">After</p>
              <p className="text-sm text-green-800 leading-relaxed">
                決済・課金領域のバックエンドを12年。直近はGo/Kubernetesで秒間数千リクエストのAPIを設計・運用し、可用性とコスト最適化を担当。チームの技術選定とコードレビューもリード。今後はSRE/プラットフォーム領域での技術リードに挑戦したいと考えています。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">※ 見本は構成を示すサンプルです。自分の実績・数値に置き換えてください。</p>
        </section>

        {/* 職歴の見本 */}
        <section id="experience" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職歴（Experience）の書き方見本</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            職歴は「やったこと」ではなく「課題→施策→成果」で書くと、リクルーターに価値が伝わります。1社あたり3〜5項目の箇条書きが目安です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="text-xs font-bold text-red-700 mb-2">Before（作業の羅列）</p>
              <ul className="text-sm text-red-800 space-y-1">
                <li>・APIの開発</li>
                <li>・サーバーの運用</li>
                <li>・コードレビュー</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="text-xs font-bold text-green-700 mb-2">After（課題→施策→成果）</p>
              <ul className="text-sm text-green-800 space-y-1.5">
                <li>・レスポンス遅延が課題のAPI群をGoへ移行し、p95レイテンシを大幅改善</li>
                <li>・KubernetesのHPA/リソース設定を見直し、インフラコストを削減</li>
                <li>・レビュー基準とCIを整備し、リリース起因の障害を低減</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            この「課題→施策→成果」の型は職務経歴書にもそのまま使えます。書類側の整え方は
            <Link href="/knowledge/resume/" className="text-petrol hover:underline">エンジニアの職務経歴書の書き方</Link>
            を参照してください。
          </p>
        </section>

        {/* スカウトを増やす設定 */}
        <section id="scout-settings" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スカウトを増やす設定とアクション</h2>
          <div className="space-y-4">
            {[
              { t: "Open to Work をオンにする", d: "希望職種・勤務地・雇用形態を登録。リクルーター限定公開を選べば一般には表示されない。スカウト対象として検索に乗りやすくなる。" },
              { t: "Skills を主要技術で固める", d: "リクルーターはスキル名で絞り込む。主力技術を登録し、上位3つを専門スキルにピン留めしておく。" },
              { t: "勤務地・希望を最新に保つ", d: "リモート可・出社可など条件を正しく設定。古い情報のままだと希望と違うスカウトが増える。" },
              { t: "IT専門リクルーターとつながる", d: "技術領域の合うリクルーターからのコネクション申請は承認する。直接スカウトの入口になる。" },
              { t: "技術トピックに反応する", d: "週1回程度、技術記事のシェアやコメントなど軽いアクティビティがあると、プロフィールの露出が安定しやすい。" },
            ].map((x, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-1">{i + 1}. {x.t}</h3>
                <p className="text-sm text-petrol-deep">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* プライバシー設定 */}
        <section id="privacy" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">現職にバレないためのプライバシー設定</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「転職活動が現職に知られないか」は最大の不安点です。LinkedInには秘匿のための設定が用意されています。プロフィールを整える前に、まず以下を確認しておきましょう。
          </p>
          <ul className="space-y-3">
            {[
              "Open to Work は「リクルーターのみ」に公開する（一般公開バッジは付けない）",
              "プロフィール編集の更新通知（アクティビティのブロードキャスト）をオフにし、こまめな編集が同僚のフィードに流れないようにする",
              "プロフィール閲覧時の表示を匿名にできる（ただし自分も相手の閲覧者情報が見えなくなる）",
              "自社のリクルーターには表示される可能性があるため、完全な秘匿が必要な場合は注意する",
            ].map((x, i) => (
              <li key={i} className="flex gap-3 items-start text-sm text-slate-700 border border-slate-200 rounded-lg p-4">
                <span className="text-petrol font-bold shrink-0">✓</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代がLinkedInを使うときの視点</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
            <p>
              30代・40代は職歴が長く、書こうと思えばいくらでも書けてしまいます。だからこそ<strong>「直近10〜15年・直近3〜4社」に絞り、それ以前は要約</strong>にとどめるのが読みやすさのコツです。古い技術名を網羅すると、意図しない領域のスカウトが増え、本当に欲しい求人が埋もれます。
            </p>
            <p>
              また、ミドル層が評価されるのは「使った技術の数」ではなく<strong>「課題をどう解決し、どう成果につなげたか」「チームをどうリードしたか」</strong>です。Aboutと職歴では、技術の羅列より意思決定とリードの経験を前面に出しましょう。マネジメント志向があるなら
              <Link href="/knowledge/management/" className="text-petrol hover:underline">マネジメント転身ガイド</Link>
              で見せ方を補強できます。
            </p>
            <p>
              年齢への不安については、LinkedInに生年や年齢を書く義務はありません。経験年数や実績で価値を示せば十分です。年齢と転職の関係は
              <Link href="/knowledge/age-discrimination/" className="text-petrol hover:underline">エンジニア転職の年齢差別</Link>
              や<Link href="/knowledge/40s-reality/" className="text-petrol hover:underline">40代エンジニアの転職リアル</Link>もあわせてどうぞ。
            </p>
          </div>
        </section>

        {/* チェックリスト */}
        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">プロフィール完成度チェックリスト</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-3">
              {[
                "ヘッドラインに役割名・主要技術・経験年数が入っている",
                "Aboutの冒頭2行だけで専門性が伝わる",
                "職歴が「課題→施策→成果」で書かれ、可能な範囲で数値が入っている",
                "Skillsに主力技術が登録され、上位3つがピン留めされている",
                "外資・グローバル志望なら英語プロフィールがある",
                "Open to Work がリクルーター限定でオンになっている",
                "プロフィール写真が設定されている",
                "推薦（Recommendations）が1件以上ある",
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
          <h2 className="text-xl font-bold mb-3">LinkedInと併用してエージェントも活用しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            LinkedInのスカウト（待ち）に加え、IT特化型エージェントの非公開求人（攻め）も使えば、選択肢と交渉力を最大化できます。
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
              { name: "スカウト型転職サービスの活用法", href: "/knowledge/scout/" },
              { name: "海外IT企業への転職ガイド", href: "/knowledge/overseas/" },
              { name: "直接応募vsエージェント", href: "/knowledge/direct-apply/" },
              { name: "リファラル転職のメリット・デメリット", href: "/knowledge/referral/" },
              { name: "エンジニアの職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
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
