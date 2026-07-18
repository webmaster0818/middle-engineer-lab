import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "IT転職エージェントの選び方｜4つの基準とタイプ別の使い分け";
const PAGE_DESC =
  "30代・40代エンジニア向けにIT転職エージェントの選び方を解説。4つの選定基準、IT特化型と総合型の違い、タイプ別マトリクスと10社の使い分けを具体例とチェックリストで紹介します。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/how-to-choose/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：まず4基準で2〜3社に絞る" },
  { id: "criteria", label: "選び方の4つの基準" },
  { id: "type", label: "IT特化型と総合型の違い" },
  { id: "matrix", label: "タイプ別おすすめマトリクス" },
  { id: "services", label: "主要サービスの使い分け（10社）" },
  { id: "checklist", label: "面談で見極めるチェックリスト" },
  { id: "ng", label: "選び方でやりがちな失敗" },
  { id: "middle", label: "30代・40代の選び方の注意点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

// datasheet 2026年6月時点の出典付きデータのみ使用
const services = [
  {
    name: "レバテックキャリア",
    href: "/review/levtech/",
    type: "IT特化型",
    fact: "IT/Web特化。公開求人 約5万件超（2026年6月時点・複数転職メディア集計）。利用者の約80%が20〜30代（公式ガイド）。内定承諾者のうち応募時年収との差が70万円以上＝3人に2人（2023年1月〜2024年3月実績）。",
    fit: "実務経験のある30代エンジニアの軸。高年収求人比率が高い。",
  },
  {
    name: "Geekly（ギークリー）",
    href: "/review/geekly/",
    type: "IT特化型",
    fact: "IT/Web/ゲーム業界専門。公開求人37,000件以上（2026年1月時点）、非公開含め46,000件以上（2026年5月時点・二次集計）。年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報）。提案スピードが強み。",
    fit: "Web系・ゲーム業界志望。スピード感を重視する人。",
  },
  {
    name: "doda ITエンジニア",
    href: "/review/doda-it/",
    type: "総合型（ハイブリッド）",
    fact: "運営はパーソルキャリア。IT・通信エンジニア求人5万件超（2026年2月時点・二次経由）、全国対応。検索＋エージェント＋スカウトのハイブリッド型。転職者の約6割が年収アップ（2024年度・決定年収レポート2025年5月公表）。",
    fit: "求人の幅を確保したい人。地方・全国を視野に入れる人。",
  },
  {
    name: "マイナビIT AGENT",
    href: "/review/mynavi-it/",
    type: "総合型（IT部門）",
    fact: "運営はマイナビ。20〜30代若手層に強く、書類添削・面接対策が手厚い。転職後定着率97.5%、年収アップ率73.7%（転職メディア集計・二次情報）。",
    fit: "初めての転職で手厚いサポートが欲しい30代前半。",
  },
  {
    name: "リクルートエージェントIT",
    href: "/review/recruit-it/",
    type: "総合型（最大級）",
    fact: "IT公開求人110,840件／非公開101,680件（2026年5月22日時点・二次集計）、全国対応。非公開求人が豊富で大手〜スタートアップまで網羅。サポート期間は3か月との声（二次）。",
    fit: "求人数を最優先したい人。短期集中で活動したい人。",
  },
  {
    name: "ビズリーチ",
    href: "/review/bizreach-it/",
    type: "ハイクラス・スカウト型",
    fact: "東証プライム上場のビジョナル傘下。登録ヘッドハンター9,700人以上・登録者282万人（2025年4月時点・二次）。年収1,000万円以上求人が全体の約4割（二次）。無料会員ありだが有料プランWeb決済5,478円/月（2022年11月改定・二次）。",
    fit: "年収アップ・管理職志向の40代。市場価値を測りたい人。",
  },
  {
    name: "ワークポート",
    href: "/review/workport/",
    type: "総合型（IT・ゲーム強い）",
    fact: "全国47都道府県57拠点。公開求人11万件以上（うちIT関連3万件以上・公式LP/二次）。未経験歓迎求人も豊富でスピード重視。求職者完全無料（公式）。",
    fit: "地方在住者。未経験寄りで間口を広げたい人。",
  },
  {
    name: "Green",
    href: "/review/green/",
    type: "ダイレクトリクルーティング",
    fact: "東証プライム上場のアトラエ運営。掲載企業9,000社以上・求人15,000件以上（媒体により30,000件以上とも・二次、幅あり）。エージェントではなく成功報酬型転職サイトで、直接応募・スカウト・カジュアル面談中心。仲介サポートはない。",
    fit: "ベンチャー・スタートアップ志望。自分で動ける人。",
  },
  {
    name: "paiza転職",
    href: "/review/paiza/",
    type: "スキル評価・スカウト型",
    fact: "公開求人5,100件（2026年4月更新・二次）、掲載1,600社以上、全体会員85万人以上（2025年3月時点・二次）。スキルチェック（プログラミングテスト）ランクで実力評価→スカウト。書類選考免除あり。個別仲介サポートはない。",
    fit: "学歴・経歴より実力で勝負したい人。コードに自信がある人。",
  },
  {
    name: "type転職エージェントIT",
    href: "/review/type-agent/",
    type: "総合型（首都圏IT特化）",
    fact: "運営はキャリアデザインセンター。IT公開求人約4,200件（2025年8月時点・二次）、首都圏（一都三県）中心。年収アップ希望者の約71%が増収・ITエンジニアは平均増額124万円（2021年10月〜2022年9月の自社調査・計測期間が古い点に注意）。",
    fit: "首都圏で年収交渉に力を入れたい人。",
  },
];

const matrix = [
  { type: "実務経験3年以上・年収アップ狙いの30代", main: "レバテックキャリア", sub: "Geekly", comp: "doda ITエンジニア" },
  { type: "Web系・ゲーム業界志望", main: "Geekly", sub: "レバテックキャリア", comp: "Green" },
  { type: "40代・管理職/ハイクラス志向", main: "ビズリーチ", sub: "レバテックキャリア", comp: "リクルートエージェントIT" },
  { type: "地方在住・全国の求人を見たい", main: "ワークポート", sub: "リクルートエージェントIT", comp: "doda ITエンジニア" },
  { type: "ベンチャー・直接応募で動きたい", main: "Green", sub: "レバテックキャリア", comp: "paiza転職" },
  { type: "実力（コード）で評価されたい", main: "paiza転職", sub: "Geekly", comp: "Green" },
  { type: "初めての転職・手厚いサポート希望", main: "マイナビIT AGENT", sub: "レバテックキャリア", comp: "doda ITエンジニア" },
];

const checklist = [
  "自分の経験技術（言語・フレームワーク）について具体的に質問してくるか",
  "希望と異なる求人を一方的に押し付けてこないか",
  "求人を「なぜあなたに合うか」理由付きで説明できるか",
  "年収レンジや選考難易度を曖昧にせず答えてくれるか",
  "返信スピードと連絡手段（メール/LINE等）が自分に合うか",
  "断りやすい雰囲気か、ペースを尊重してくれるか",
];

const faqs = [
  {
    q: "IT特化型と総合型、どちらを選ぶべき？",
    a: "エンジニアの軸にはIT特化型がおすすめです。技術トレンドや年収相場に精通したアドバイザーが多く、求人提案の精度が高い傾向があります。一方で求人の幅を確保するため、総合型を1社併用すると死角が減ります。IT特化型2社＋総合型1社の3社体制が現実的なバランスです。",
  },
  {
    q: "転職エージェントは無料で使える？",
    a: "求職者は無料で使えます。レバテックキャリア・Geekly・ワークポート・paiza転職などは求職者無料と明記されています。エージェントは採用企業から成功報酬を受け取るビジネスモデルのためです。なおビズリーチは無料会員に加え有料プランがあり、有料プランはWeb決済で月5,478円（2022年11月改定・二次情報）です。",
  },
  {
    q: "何社くらい登録するのが適切？",
    a: "2〜3社が目安です。1社では求人の幅と担当者の比較ができず、5社以上は連絡管理が煩雑になり重複応募のリスクも上がります。IT特化型を軸に、総合型やスカウト型を組み合わせると効率的です。詳しくは複数登録の解説記事をご覧ください。",
  },
  {
    q: "担当者の技術理解度はどう見極める？",
    a: "初回面談で自分の経験技術について具体的に質問してくるか、求人を「なぜ合うか」理由付きで説明できるかを見ます。求人を一方的に大量送付するだけ、希望と無関係な提案が続く場合は、担当変更を依頼するか別エージェントへ切り替えましょう。",
  },
  {
    q: "担当者と相性が合わない場合は？",
    a: "各社の問い合わせ窓口から担当変更を依頼できます。同じエージェント内でも担当者により提案の質は大きく異なります。「ITに詳しい方へ変更してほしい」と具体的に伝えると適切な担当に変わることがあります。改善しなければ退会して別社に切り替える選択も自由です。",
  },
  {
    q: "すぐに転職する気がなくても登録していい？",
    a: "情報収集目的の登録も問題ありません。「市場価値を確認したい」「良い求人があれば検討したい」というスタンスは一般的です。初回面談で転職意欲の度合いを正直に伝えれば、ペースに合わせた提案を受けやすくなります。",
  },
  {
    q: "地方在住でも使えるエージェントは？",
    a: "全国対応の総合型が向きます。doda ITエンジニア・リクルートエージェントITは全国対応、ワークポートは全国47都道府県57拠点を持ちます（いずれも2026年時点・公式/二次）。レバテックキャリアは首都圏中心の傾向があるため、地方ではフルリモート求人の有無を面談で確認しましょう。",
  },
  {
    q: "未経験寄りでも紹介してもらえる？",
    a: "サービスにより差があります。レバテックキャリアは未経験者が紹介されにくいとの口コミ傾向があり（Qiita Job Change等）、一方ワークポートは未経験歓迎求人も豊富とされています（公式/二次）。実務経験が浅い場合は間口の広い総合型から始めるのが無難です。",
  },
];

export default function HowToChoosePage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/knowledge/how-to-choose/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "IT転職エージェントの選び方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          IT転職エージェントの選び方｜4つの基準とタイプ別の使い分け
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 30代・40代エンジニアのためのエージェント選び完全ガイド
        </p>

        {/* 直答box (P6-C2) */}
        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】IT転職エージェントはどう選べばいい？</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>結論: 「①IT特化か ②担当者の技術理解 ③求人の質と量 ④自分の状況との相性」の4基準で判断し、IT特化型1〜2社＋総合型/スカウト型1社の2〜3社体制から始めるのが失敗しない型です。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・IT特化型は技術マッチングの精度と年収交渉力、総合型は求人の幅と全国カバーが強み。役割を分担させる</li>
              <li>・登録は2〜3社が目安。1社では比較ができず、5社以上は連絡管理が煩雑で重複応募のリスクも上がる</li>
              <li>・タイプ別の起点例：実務経験ある30代はレバテックキャリア＋Geekly、40代・ハイクラス志向はビズリーチを軸に特化型を併用</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          IT転職エージェントは数十社あり、どれを選ぶか迷う方が多いはずです。選び方を間違えると、的外れな求人ばかり届いたり、年収交渉で損をしたりします。本記事では、エンジニアがエージェントを選ぶときの4つの基準、IT特化型と総合型の違い、タイプ別マトリクス、主要10社の使い分けを、面談チェックリストとともに解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "各社公式サイト・公式ガイド",
            "Qiita Job Change等の口コミプラットフォーム傾向",
            "転職メディア集計値（時点付き）",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：まず4基準で2〜3社に絞る</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              迷ったら「①IT特化か ②担当者の技術理解 ③求人の質と量 ④自分の状況との相性」の4基準で判断し、
              <strong>IT特化型1〜2社＋総合型/スカウト型1社</strong>の2〜3社体制から始めるのが失敗しない型です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>・実務経験のある30代の軸：<Link href="/review/levtech/" className="font-semibold underline">レバテックキャリア</Link>＋<Link href="/review/geekly/" className="font-semibold underline">Geekly</Link></li>
              <li>・40代・ハイクラス志向：<Link href="/review/bizreach-it/" className="font-semibold underline">ビズリーチ</Link>を軸に特化型を併用</li>
              <li>・地方/全国・幅重視：<Link href="/review/doda-it/" className="font-semibold underline">doda ITエンジニア</Link>や<Link href="/review/workport/" className="font-semibold underline">ワークポート</Link>を併用</li>
            </ul>
          </div>
        </section>

        {/* 4基準 */}
        <section id="criteria" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選び方の4つの基準</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "IT/Web業界に特化しているか", desc: "IT特化型は技術トレンドや開発文化に精通しています。「Goでのマイクロサービス開発」「Kubernetes運用2年」など具体的な技術要件を理解できる担当がいるかが、求人精度を左右します。" },
              { num: "2", title: "担当者の技術理解度", desc: "初回面談で「あなたのGoでのAPI開発について詳しく教えてください」と具体的に踏み込んでくる担当は信頼できます。逆に求人を一方的に大量送付するだけの担当は要注意です。" },
              { num: "3", title: "求人の質と量（公開＋非公開）", desc: "公開求人だけでなく非公開求人をどれだけ保有するかも重要です。リクルートエージェントITはIT公開110,840件/非公開101,680件（2026年5月22日時点・二次集計）と量が突出します。量だけでなく、登録後に届く求人の質で判断しましょう。" },
              { num: "4", title: "自分の状況との相性", desc: "年代・経験年数・勤務地・志望業界によって最適なエージェントは変わります。レバテックは首都圏中心、ワークポートは全国57拠点（公式/二次）など、対応エリアや得意層を自分の条件に照らして選びます。" },
            ].map((item) => (
              <div key={item.num} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IT特化型vs総合型 */}
        <section id="type" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">IT特化型と総合型の違い</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            両者は優劣ではなく役割が異なります。技術マッチングの精度なら特化型、求人の幅と全国カバーなら総合型が強みです。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">比較項目</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">IT特化型</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">総合型</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "技術理解度", special: "高い", general: "低い〜普通" },
                  { item: "求人の幅", special: "IT/Webに深い", general: "業界横断で広い" },
                  { item: "対応エリア", special: "首都圏中心が多い", general: "全国対応が多い" },
                  { item: "年収交渉力", special: "相場を熟知し高い", general: "普通" },
                  { item: "面接対策", special: "技術面接に対応", general: "一般的な対策" },
                  { item: "代表例", special: "レバテック・Geekly", general: "doda・リクルート・ワークポート" },
                ].map((row) => (
                  <tr key={row.item} className="hover:bg-slate-50">
                    <td className="px-4 py-3 border border-slate-200 font-medium">{row.item}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.special}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.general}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            なお<Link href="/review/doda-it/" className="text-petrol hover:underline">doda ITエンジニア</Link>は検索＋エージェント＋スカウトのハイブリッド型、<Link href="/review/green/" className="text-petrol hover:underline">Green</Link>や<Link href="/review/paiza/" className="text-petrol hover:underline">paiza転職</Link>はエージェントを介さないダイレクト/スカウト型と、形態自体が違うサービスもあります。仲介サポートの有無を必ず確認しましょう。
          </p>
        </section>

        {/* マトリクス */}
        <section id="matrix" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">タイプ別おすすめマトリクス</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            自分のタイプに近い行を見て、メイン1社・サブ1社・補完1社の組み合わせの叩き台にしてください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">あなたのタイプ</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">メイン</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">サブ</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">補完</th>
                </tr>
              </thead>
              <tbody>
                {matrix.map((row) => (
                  <tr key={row.type} className="hover:bg-slate-50">
                    <td className="px-4 py-3 border border-slate-200 font-medium">{row.type}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.main}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.sub}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.comp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 10社の使い分け */}
        <section id="services" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主要サービスの使い分け（10社）</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            各社の事実情報と「どんな人に向くか」を整理しました。数値はいずれも調査時点の公式・二次情報に基づきます。
          </p>
          <div className="space-y-4">
            {services.map((s) => (
              <div key={s.name} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                  <Link href={s.href} className="font-bold text-slate-800 hover:text-petrol-deep hover:underline">
                    {s.name}
                  </Link>
                  <span className="text-xs bg-slate-100 text-slate-600 rounded px-2 py-1">{s.type}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-2">{s.fact}</p>
                <p className="text-sm text-blue-800"><span className="font-semibold">向く人：</span>{s.fit}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            10社を横並びで比べたい方は<Link href="/compare/agents/" className="text-petrol hover:underline">IT転職エージェント比較</Link>、年代別なら<Link href="/compare/30s-agents/" className="text-petrol hover:underline">30代向け比較</Link>・<Link href="/compare/40s-agents/" className="text-petrol hover:underline">40代向け比較</Link>もご覧ください。
          </p>
        </section>

        {/* チェックリスト */}
        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面談で見極めるチェックリスト</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            初回面談はエージェント側があなたを見る場であると同時に、あなたが担当を見極める場です。次の項目を確認しましょう。
          </p>
          <ul className="space-y-2">
            {checklist.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="text-petrol font-bold shrink-0">✓</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            面談の全体像は<Link href="/knowledge/agent-first-meeting/" className="text-petrol hover:underline">エージェント初回面談の流れ</Link>で確認できます。
          </p>
        </section>

        {/* やりがちな失敗 */}
        <section id="ng" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選び方でやりがちな失敗</h2>
          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">求人数だけで選んでしまう</h3>
              <p className="text-sm text-red-700 leading-relaxed">
                求人数は重要ですが、量が多くても自分の技術領域に合う求人が少なければ意味がありません。量（総合型）と精度（特化型）を役割分担させましょう。
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">急かす担当に流される</h3>
              <p className="text-sm text-red-700 leading-relaxed">
                「今週中に応募しないと締め切られます」と頻繁に急かす担当は、自社の都合を優先している可能性があります。納得できるペースを守りましょう。
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">形態の違いを理解せず登録する</h3>
              <p className="text-sm text-red-700 leading-relaxed">
                Greenやpaizaはエージェントではなくダイレクトリクルーティングやスカウトのサービスで、個別の仲介サポートはありません。「相談に乗ってほしい」のか「自分で動きたい」のかで選ぶ形態が変わります。
              </p>
            </div>
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の選び方の注意点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              30代・40代は「ポテンシャル採用」から「即戦力・マネジメント採用」へ評価軸が移ります。若手向けに強いサービスをそのまま使うと提案がかみ合わないことがあります。
            </p>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">30代の選び方</h3>
              <p>
                実務経験を活かせるIT特化型を軸にします。レバテックキャリアは利用者の約80%が20〜30代（公式ガイド）で30代と相性が良く、Web系ならGeeklyが選択肢です。年収レンジの参考として、レバテック公表の年代別平均年収では正社員SE 30代 約499万円（2025年・ガイド記事）です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">40代の選び方</h3>
              <p>
                マネジメント経験や専門領域を評価できるハイクラス・スカウト型が有効です。ビズリーチは年収1,000万円以上求人が全体の約4割（二次）で、40代の市場価値把握に向きます。レバテック公表値では正社員SE 40代 約618万円、年収1,000万円以上の割合は40代で12.67%（2025年・ガイド記事）です。年齢だけで断られるケースは減っていますが、スキルの言語化が一段重要になります。
              </p>
            </div>
            <p>
              年代別の実態は<Link href="/age/30s/" className="text-petrol hover:underline">30代の転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職</Link>、年収の詳細は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の調べ方</Link>も参考にしてください。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-slate-200 rounded-lg overflow-hidden">
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
          <h2 className="text-xl font-bold mb-3">まずはIT特化型エージェントに無料相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            エンジニア転職に精通したアドバイザーが、あなたのキャリアに合う求人を無料で紹介します。10社の比較から始めましょう。
          </p>
          <Link
            href="/compare/agents/"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            IT転職エージェント10社比較を見る
          </Link>
        </section>

        {/* 関連記事 */}
        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
              { name: "転職エージェントは複数登録すべき？", href: "/knowledge/multiple-agents/" },
              { name: "30代向けエージェント比較", href: "/compare/30s-agents/" },
              { name: "40代向けエージェント比較", href: "/compare/40s-agents/" },
              { name: "スカウトの活用法", href: "/knowledge/scout/" },
              { name: "直接応募とエージェントの使い分け", href: "/knowledge/direct-apply/" },
              { name: "テックゴー（TechGo）の評判・特徴", href: "/review/techgo/" },
              { name: "テックゴーの無料キャリア面談の流れ", href: "/review/techgo-consultation/" },
            ].map((item) => (
              <Link
                key={item.href}
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
