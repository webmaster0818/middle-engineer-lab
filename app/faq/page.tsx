import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "30代・40代エンジニア転職のよくある質問15選｜年代・年収・進め方",
  description:
    "30代・40代ITエンジニアの転職に関するよくある質問を、年代別・エージェント選び・年収・進め方の4カテゴリで解説。出典付きデータと各テーマの詳細ガイドへのリンク付き。最終更新2026年6月。",
};

type Faq = {
  q: string;
  /** JSON-LD用のプレーンテキスト回答 */
  text: string;
  /** 画面表示用のJSX回答（内部リンクを含む） */
  body: React.ReactNode;
};

const categories: { id: string; title: string; faqs: Faq[] }[] = [
  {
    id: "age",
    title: "年代・年齢に関する質問",
    faqs: [
      {
        q: "30代エンジニアの転職市場は実際どうですか？",
        text: "30代エンジニアは即戦力として評価されやすい年代です。経済産業省が2019年に公表した試算では2030年に最大約79万人のIT人材が不足するとされ、経験者の需要は底堅い状況が続いています。3年以上の実務経験があれば、Web系自社開発・SaaS・DX推進部門など選択肢は広く取れます。",
        body: (
          <>
            30代エンジニアは即戦力として評価されやすい年代です。経済産業省が2019年に公表した試算では2030年に最大約79万人のIT人材が不足するとされ（出典: 経産省「IT人材需給に関する調査」2019年公表）、経験者の需要は底堅い状況が続いています。3年以上の実務経験があれば選択肢は広く取れます。詳しくは
            <Link href="/age/30s/" className="text-blue-600 hover:underline">30代エンジニアの転職ガイド</Link>
            をご覧ください。
          </>
        ),
      },
      {
        q: "40代でITエンジニアの転職は現実的ですか？",
        text: "30代より求人数は減る傾向がありますが、十分に現実的です。マネジメント経験があればPM・テックリードとして、技術特化ならアーキテクト・スペシャリストとして評価されます。レバテック公表の年代別平均年収（2025年）では正社員SEの40代は約618万円とされ、経験の価値が年収に反映されています。",
        body: (
          <>
            30代より求人数は減る傾向がありますが、十分に現実的です。マネジメント経験があればPM・テックリードとして、技術特化ならアーキテクト・スペシャリストとして評価されます。レバテック公表の年代別平均年収（2025年）では正社員SEの40代は約618万円とされています（出典: career.levtech.jp）。
            <Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職ガイド</Link>
            と
            <Link href="/knowledge/40s-reality/" className="text-blue-600 hover:underline">40代転職のリアル</Link>
            も参考にしてください。
          </>
        ),
      },
      {
        q: "35歳転職限界説は本当ですか？",
        text: "「35歳が限界」という明確な根拠はありません。実際、レバテックなどの年代別データでは40代・50代でも一定の年収水準が示されています。重要なのは年齢そのものより、求められる役割（マネジメントか技術スペシャリストか）を明確にし、それに合った見せ方で応募することです。",
        body: (
          <>
            「35歳が限界」という明確な根拠はありません。重要なのは年齢そのものより、求められる役割（マネジメントか技術スペシャリストか）を明確にし、それに合った見せ方で応募することです。
            <Link href="/age/35/" className="text-blue-600 hover:underline">35歳前後の転職事情</Link>
            と
            <Link href="/knowledge/age-discrimination/" className="text-blue-600 hover:underline">年齢を理由にしないための準備</Link>
            で詳しく解説しています。
          </>
        ),
      },
      {
        q: "未経験から30代でITエンジニアになれますか？",
        text: "30代前半までであれば可能性はあります。ただし即戦力採用が中心の年代のため、現職の業務知識（製造・金融など）とITスキルを組み合わせる戦略が有効です。ワークポートのように未経験歓迎求人を扱うサービスもありますが、ポートフォリオなどスキルの証明が重要になります。",
        body: (
          <>
            30代前半までであれば可能性はあります。即戦力採用が中心の年代のため、現職の業務知識とITスキルを組み合わせる戦略が有効です。
            <Link href="/knowledge/inexperienced-30s/" className="text-blue-600 hover:underline">30代未経験からのIT転職</Link>
            や
            <Link href="/knowledge/portfolio/" className="text-blue-600 hover:underline">ポートフォリオの作り方</Link>
            を参考にしてください。
          </>
        ),
      },
    ],
  },
  {
    id: "agent",
    title: "エージェント選び・利用に関する質問",
    faqs: [
      {
        q: "転職エージェントは何社に登録すべきですか？",
        text: "2〜3社の併用が一般的に効率的とされます。おすすめの組み合わせはIT特化型1社＋総合型1社です。例えばレバテックキャリア（IT特化）とdoda（全国対応の総合型）を併用すると、専門的な提案と幅広い求人の両方を得られます。4社以上は連絡管理が煩雑になりやすいため注意しましょう。",
        body: (
          <>
            2〜3社の併用が一般的に効率的とされます。IT特化型1社＋総合型1社の組み合わせがおすすめです。
            <Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">複数エージェントの使い分け</Link>
            や
            <Link href="/knowledge/how-to-choose/" className="text-blue-600 hover:underline">エージェントの選び方</Link>
            、
            <Link href="/compare/agents/" className="text-blue-600 hover:underline">エージェント比較一覧</Link>
            を参考にしてください。
          </>
        ),
      },
      {
        q: "IT特化型と総合型のエージェントはどう違いますか？",
        text: "IT特化型（レバテックキャリア・Geekly等）は技術に詳しいアドバイザーが多く、開発環境や技術スタックの情報が得やすいのが特徴です。総合型（doda・リクルートエージェント等）は求人数が多く全国対応に強みがあります。30代・40代エンジニアは、深い提案と求人量の両方を得るため両タイプの併用が有効です。",
        body: (
          <>
            IT特化型は技術に詳しいアドバイザーが多く、総合型は求人数と全国対応に強みがあります。両タイプの違いは
            <Link href="/compare/agents/" className="text-blue-600 hover:underline">エージェント比較一覧</Link>
            で整理しています。代表例の詳細は
            <Link href="/review/levtech/" className="text-blue-600 hover:underline">レバテックキャリアの評判</Link>
            や
            <Link href="/review/doda-it/" className="text-blue-600 hover:underline">doda(IT特化)の評判</Link>
            をご覧ください。
          </>
        ),
      },
      {
        q: "エージェントから連絡がしつこい・断られることはありますか？",
        text: "口コミプラットフォーム（Qiita Job Change・みん評等）では、連絡頻度が高い、希望と異なる求人を提案された、経験が浅いと紹介されにくい、といった声が見られます。連絡方法と頻度は初回面談で希望を伝えれば調整可能なことが多く、合わないと感じたら退会も自由です。",
        body: (
          <>
            口コミプラットフォーム（Qiita Job Change・みん評等）では、連絡頻度が高い、希望と異なる求人を提案された、といった声が見られます。連絡頻度は初回面談で調整できることが多いです。
            <Link href="/knowledge/agent-rejection/" className="text-blue-600 hover:underline">紹介を断られたときの対処</Link>
            や
            <Link href="/knowledge/agent-first-meeting/" className="text-blue-600 hover:underline">初回面談で聞かれること</Link>
            も参考にしてください。
          </>
        ),
      },
      {
        q: "ハイクラス転職にはどのサービスが向いていますか？",
        text: "年収750万円以上を狙う場合、スカウト型のビズリーチが選択肢になります。導入企業数41,800社以上・登録ヘッドハンター9,700人以上（2025年4月時点・二次情報）で、年収1,000万円以上の求人が全体の約4割との二次情報があります。エージェント型と併用して市場価値を測るのも有効です。",
        body: (
          <>
            年収750万円以上を狙う場合、スカウト型のビズリーチが選択肢になります（年収1,000万円以上求人が全体の約4割との二次情報）。詳細は
            <Link href="/review/bizreach-it/" className="text-blue-600 hover:underline">ビズリーチの評判</Link>
            や
            <Link href="/compare/highclass/" className="text-blue-600 hover:underline">ハイクラス向け比較</Link>
            をご覧ください。
          </>
        ),
      },
      {
        q: "エージェントを退会・利用停止したい場合は？",
        text: "ほとんどのエージェントは、担当者へのメール・電話連絡や問い合わせフォームから退会・利用停止の手続きができます。複数登録している場合は、使わないサービスを整理することで連絡管理が楽になります。手続き自体は無料で、求職者に費用が発生することはありません。",
        body: (
          <>
            担当者への連絡や問い合わせフォームから退会・利用停止ができます。求職者に費用は発生しません。複数登録の整理の考え方は
            <Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">複数エージェントの使い分け</Link>
            で解説しています。
          </>
        ),
      },
    ],
  },
  {
    id: "salary",
    title: "年収・市場価値に関する質問",
    faqs: [
      {
        q: "エンジニアの平均年収はどのくらいですか？",
        text: "厚生労働省 job tagでは「システムエンジニア（受託開発）」の平均年収は578.5万円・平均年齢37.1歳とされています（令和7年賃金構造基本統計調査ベース）。またレバテック公表の年代別平均年収（2025年）では正社員SEで30代約499万円・40代約618万円とされています。職種や企業規模で幅が大きい点に注意が必要です。",
        body: (
          <>
            厚生労働省 job tagでは「システムエンジニア（受託開発）」の平均年収は578.5万円・平均年齢37.1歳とされています（令和7年賃金構造基本統計調査ベース）。レバテック公表の年代別平均（2025年）では30代約499万円・40代約618万円です。年代別の詳細は
            <Link href="/knowledge/salary-30s/" className="text-blue-600 hover:underline">30代の年収相場</Link>
            と
            <Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収相場</Link>
            をご覧ください。
          </>
        ),
      },
      {
        q: "転職で年収はどのくらい上がりますか？",
        text: "公表値ではdodaが転職者の約6割で年収アップ（2024年度・パーソルキャリア決定年収レポート2025年5月公表）、Geeklyが年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報）としています。アップ幅はスキル・経験・転職先の業界によって大きく異なります。",
        body: (
          <>
            公表値ではdodaが転職者の約6割で年収アップ（2024年度・パーソルキャリア公表）、Geeklyが年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報）としています。年収アップの進め方は
            <Link href="/purpose/salary-up/" className="text-blue-600 hover:underline">年収UPを狙う転職ガイド</Link>
            と
            <Link href="/knowledge/salary-negotiation/" className="text-blue-600 hover:underline">年収交渉の進め方</Link>
            で解説しています。
          </>
        ),
      },
      {
        q: "年収交渉はエージェントに任せて大丈夫ですか？",
        text: "年収交渉はエージェント利用の大きなメリットの一つです。希望年収や現年収を正確に伝えておくことで、提示額の調整を代行してもらえます。ただし根拠となる実績の整理は本人が行う必要があります。市場価値を把握したうえで現実的な希望額を設定することが交渉成功の鍵です。",
        body: (
          <>
            年収交渉はエージェント利用の大きなメリットの一つです。根拠となる実績の整理は本人が行う必要があります。具体的な進め方は
            <Link href="/knowledge/salary-negotiation/" className="text-blue-600 hover:underline">年収交渉の進め方</Link>
            、市場価値の測り方は
            <Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">自分の市場価値の調べ方</Link>
            を参考にしてください。
          </>
        ),
      },
      {
        q: "自分の市場価値はどう調べればよいですか？",
        text: "複数のエージェントで提示される想定年収やスカウト内容を比較すると、相場感がつかめます。ビズリーチやpaiza転職のようなスカウト型サービスでは、登録情報やスキルチェックの結果に応じて企業からのオファーが届くため、客観的な市場価値の把握に役立ちます。",
        body: (
          <>
            複数エージェントの想定年収やスカウト内容を比較すると相場感がつかめます。スカウト型サービスの活用も有効です。詳しくは
            <Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">自分の市場価値の調べ方</Link>
            や
            <Link href="/knowledge/scout/" className="text-blue-600 hover:underline">スカウトの活用法</Link>
            をご覧ください。
          </>
        ),
      },
    ],
  },
  {
    id: "process",
    title: "転職の進め方に関する質問",
    faqs: [
      {
        q: "転職活動はどのくらいの期間がかかりますか？",
        text: "一般的には2〜4ヶ月程度が目安です。準備（自己分析・書類作成）に2〜3週間、応募・選考に1〜2ヶ月、内定後の退職手続きに1ヶ月程度かかります。在職中に進めるのが一般的で、無理のないペースで計画を立てることが大切です。",
        body: (
          <>
            一般的には2〜4ヶ月程度が目安です。在職中に進めるのが一般的です。スケジュールの立て方は
            <Link href="/knowledge/timeline/" className="text-blue-600 hover:underline">転職活動の進め方とスケジュール</Link>
            、退職の手順は
            <Link href="/knowledge/resignation/" className="text-blue-600 hover:underline">円満退職の進め方</Link>
            で解説しています。
          </>
        ),
      },
      {
        q: "職務経歴書はどう書けば評価されますか？",
        text: "エンジニアの職務経歴書では、担当工程・使用技術・チーム規模・役割・成果を具体的に記載することが重要です。「何を」「どの規模で」「どんな技術で」「どう貢献したか」を定量的に書くと、技術に詳しいアドバイザーや採用担当に伝わりやすくなります。",
        body: (
          <>
            担当工程・使用技術・チーム規模・役割・成果を具体的・定量的に書くことが重要です。記入見本付きの解説は
            <Link href="/knowledge/resume/" className="text-blue-600 hover:underline">エンジニアの職務経歴書の書き方</Link>
            をご覧ください。
          </>
        ),
      },
      {
        q: "SIerから自社開発企業へ転職する際の注意点は？",
        text: "SIerと自社開発では開発スタイルが異なります。自社開発企業はアジャイル開発やモダンな技術スタックを採用していることが多いため、ウォーターフォール中心の経験に加えて、個人開発やOSS活動でモダン技術に触れておくと評価が高まります。",
        body: (
          <>
            自社開発企業はアジャイル開発・モダンな技術スタックが多く、個人開発やOSS活動でモダン技術に触れておくと評価が高まります。詳しくは
            <Link href="/industry/sier-to-web/" className="text-blue-600 hover:underline">SIerからWeb系への転職</Link>
            や
            <Link href="/career/se-to-web/" className="text-blue-600 hover:underline">SEからWeb系エンジニアへ</Link>
            をご覧ください。
          </>
        ),
      },
      {
        q: "技術面接やコーディングテストはどう対策しますか？",
        text: "自社開発・Web系企業ではコーディングテストやシステム設計の口頭試問が課されることがあります。アルゴリズムの基礎、過去の設計判断を言語化する練習、これまでの開発でのトレードオフの説明を準備しておくと安心です。",
        body: (
          <>
            アルゴリズムの基礎、設計判断の言語化、トレードオフの説明を準備しておくと安心です。対策は
            <Link href="/knowledge/coding-test/" className="text-blue-600 hover:underline">コーディングテスト対策</Link>
            、
            <Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接の準備</Link>
            、
            <Link href="/knowledge/system-design/" className="text-blue-600 hover:underline">システム設計面接</Link>
            で解説しています。
          </>
        ),
      },
      {
        q: "リモートワーク可能な求人は増えていますか？",
        text: "IT業界ではフルリモート・ハイブリッド勤務を採用する企業が増えており、勤務地に縛られない働き方が選びやすくなっています。地方在住でも首都圏企業に応募できるケースが増えています。ただし企業ごとに方針が異なるため、求人ごとに勤務条件の確認が必要です。",
        body: (
          <>
            フルリモート・ハイブリッドを採用する企業が増えています。求人ごとに条件の確認が必要です。リモート求人の探し方は
            <Link href="/purpose/remote-full/" className="text-blue-600 hover:underline">フルリモート求人の探し方</Link>
            や
            <Link href="/compare/remote-agents/" className="text-blue-600 hover:underline">リモート求人に強いエージェント比較</Link>
            をご覧ください。
          </>
        ),
      },
      {
        q: "製造業や金融業からITエンジニアへ転職できますか？",
        text: "可能で、近年はむしろ「業界知識×ITスキル」の掛け算人材として評価される傾向にあります。製造業出身者はIoTや製造DX、金融業出身者はフィンテック領域で重宝されます。プログラミングの基礎習得は必要ですが、業界知識は大きな差別化要素になります。",
        body: (
          <>
            「業界知識×ITスキル」の掛け算人材として評価される傾向にあります。業界別の進め方は
            <Link href="/industry/manufacturing/" className="text-blue-600 hover:underline">製造業からのIT転職</Link>
            や
            <Link href="/industry/finance/" className="text-blue-600 hover:underline">金融業からのIT転職</Link>
            をご覧ください。
          </>
        ),
      },
    ],
  },
];

const allFaqs = categories.flatMap((c) => c.faqs);

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.text },
    })),
  };

  return (
    <>
      <ArticleJsonLd
        title="30代・40代エンジニア転職のよくある質問15選｜年代・年収・進め方"
        description="30代・40代ITエンジニアの転職に関するよくある質問を、年代別・エージェント選び・年収・進め方の4カテゴリで解説。出典付きデータと各テーマの詳細ガイドへのリンク付き。"
        url="/faq/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "よくある質問" }]} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
          30代・40代エンジニア転職のよくある質問
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          ミドル世代のITエンジニアが転職活動で抱きやすい疑問を、年代・エージェント選び・年収・進め方の4カテゴリに分けてまとめました。
          各回答からテーマごとの詳細ガイドに進めます。数値は出典と時点を明記し、確認できない情報の断定は避けています。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag",
            "経済産業省「IT人材需給に関する調査」（2019年公表）",
            "パーソルキャリア 決定年収レポート",
            "レバテック公表値（career.levtech.jp）",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10">
          <p className="font-bold text-slate-700 text-sm mb-3">カテゴリ目次</p>
          <ul className="space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className="text-blue-600 hover:underline">
                  {c.title}（{c.faqs.length}問）
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {categories.map((cat) => (
          <section key={cat.id} id={cat.id} className="mb-12 scroll-mt-20">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-5 pb-2 border-b border-slate-200">
              {cat.title}
            </h2>
            <div className="space-y-4">
              {cat.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-slate-200 rounded-lg overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-4 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800">
                    <span>Q. {faq.q}</span>
                    <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform shrink-0">
                      &#9662;
                    </span>
                  </summary>
                  <div className="px-6 py-4 text-sm text-slate-600 leading-relaxed">
                    A. {faq.body}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}

        {/* 関連ハブ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">テーマ別にさらに詳しく</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { name: "エージェント比較", href: "/compare/agents/" },
              { name: "年代別ガイド（30代）", href: "/age/30s/" },
              { name: "年代別ガイド（40代）", href: "/age/40s/" },
              { name: "転職ノウハウ一覧", href: "/knowledge/" },
              { name: "目的別ガイド", href: "/purpose/" },
              { name: "キャリアパス別", href: "/career/" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="border border-slate-200 rounded-lg p-4 text-center bg-white hover:shadow-md transition text-sm font-medium text-slate-700"
              >
                {l.name}
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">まずはエージェントに相談してみよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            転職の悩みは、IT業界に詳しいキャリアアドバイザーに相談するのが効率的です。
            求職者は無料で利用できます。
          </p>
          <a
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            エージェントランキングを見る
          </a>
        </div>
      </div>
    </>
  );
}
