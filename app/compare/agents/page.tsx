import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "エンジニア転職エージェントおすすめ10社比較【30代40代向け】",
  description:
    "30代・40代エンジニア向けに転職エージェントおすすめ10社を統一フォーマットで比較。運営会社・求人数・得意領域・評判（出典付き）を整理し、年代別・目的別の選び方と併用パターンを解説します。",
};

const faqs = [
  {
    q: "転職エージェントの利用に費用はかかりますか？",
    a: "本記事で紹介する10社はいずれも求職者は無料で利用できます。エージェントは採用企業から成功報酬を受け取るビジネスモデルのため、面談・求人紹介・書類添削・面接対策・年収交渉まで求職者の費用負担はありません。",
  },
  {
    q: "30代・40代でも転職エージェントから断られることはありますか？",
    a: "経験やスキルが求人要件と合わない場合、紹介求人が少ない・面談を見送られるケースはあります。特にレバテックキャリアなどIT特化型は実務経験者向けの紹介が中心です。複数社に登録しておくと、1社で紹介が少なくても他社でカバーしやすくなります。",
  },
  {
    q: "エージェントの連絡がしつこいと聞きますが本当ですか？",
    a: "GeeklyやワークポートはQiita Job Change等の口コミプラットフォームで『連絡が多い』という声が見られます。連絡頻度や希望の連絡手段（メール・LINE等）は初回面談で伝えておくと調整してもらえます。",
  },
  {
    q: "IT特化型と総合型はどちらがおすすめですか？",
    a: "技術トレンドや年収相場に詳しいアドバイザーが多いIT特化型（レバテックキャリア・Geekly等）を軸にしつつ、求人数の多い総合型（リクルートエージェントIT・doda等）を併用するのが定番です。特化型2社＋総合型1社の組み合わせが効率的です。",
  },
  {
    q: "何社くらい登録するのが適切ですか？",
    a: "2〜3社が目安です。1社だけでは求人の幅が狭く、4社以上は日程・連絡の管理が煩雑になります。IT特化型を軸に、求人数を補う総合型やハイクラス向けを1社足す構成が管理しやすいです。",
  },
  {
    q: "担当者と合わない場合はどうすればいいですか？",
    a: "各社の問い合わせ窓口から担当変更を依頼できます。相性は転職活動の進めやすさに直結するため、我慢せず変更を申し出て問題ありません。複数社に登録しておけば、合わない場合に他社へ比重を移すこともできます。",
  },
  {
    q: "在職中でも転職エージェントは利用できますか？",
    a: "利用できます。多くの利用者が在職中に登録しています。面談はオンラインや夜間・休日に対応する社が多く、応募・面接の日程もエージェントが調整してくれるため、働きながらでも進めやすいです。",
  },
  {
    q: "退会・登録解除はできますか？",
    a: "各社とも問い合わせ窓口やマイページから退会できます。転職活動を中断・終了した場合や、サービスが合わなかった場合も、連絡すれば退会手続きを案内してもらえます。",
  },
];

type Agent = {
  slug: string;
  name: string;
  type: "IT特化型" | "ハイクラス" | "総合型" | "転職サイト";
  company: string;
  jobs: string;
  area: string;
  field: string;
  result: string;
  goodReviews: string;
  goodSource: string;
  badReviews: string;
  badSource: string;
  fit: string;
  review: string;
};

const agents: Agent[] = [
  {
    slug: "levtech",
    name: "レバテックキャリア",
    type: "IT特化型",
    company: "レバテック株式会社（レバレジーズグループ）",
    jobs: "約5万件超（2026年6月時点・複数転職メディア集計）",
    area: "首都圏中心（二次情報）",
    field: "IT/Web特化。高年収求人比率が高い（600万円以上が公開求人の約8割との二次情報）",
    result:
      "内定承諾者のうち応募時年収との差が70万円以上＝3人に2人（2023年1月〜2024年3月実績・公式系）",
    goodReviews: "書類添削・面接対策が丁寧／LINEで連絡が完結／高年収求人が多い",
    goodSource: "OUTSIDEMAGAZINE・Qiita Job Change・イーデス",
    badReviews: "未経験者は紹介されにくい／初回面談後の連絡が遅い場合がある／希望と異なる求人提案の例",
    badSource: "同上",
    fit: "実務経験のある30代・40代で、年収アップや高年収求人を軸に進めたい人",
    review: "/review/levtech/",
  },
  {
    slug: "geekly",
    name: "Geekly（ギークリー）",
    type: "IT特化型",
    company: "株式会社Geekly（設立2011年8月・渋谷区・代表 奥山貴広）",
    jobs: "公開37,000件以上（2026年1月時点）／非公開含め46,000件以上（2026年5月時点）",
    area: "首都圏中心（二次情報）",
    field: "IT/Web/ゲーム業界に専門特化。提案スピードが強み。希望職種への定着率97%（二次）",
    result: "年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報）",
    goodReviews: "レスポンスが早い／選考までスムーズ／実務経験者への提案数が多い",
    goodSource: "2b-connect・転職アンテナ",
    badReviews: "連絡がしつこいとの声／担当者の質にばらつき／勝手に応募されたとの報告例",
    badSource: "Qiita Job Change 等",
    fit: "Web・ゲーム領域の経験者で、スピーディーに首都圏の選考を進めたい人",
    review: "/review/geekly/",
  },
  {
    slug: "doda-it",
    name: "doda ITエンジニア",
    type: "総合型",
    company: "パーソルキャリア株式会社（1989年設立・従業員7,048名）",
    jobs: "IT・通信エンジニア求人5万件超（2026年2月時点・二次経由）",
    area: "全国",
    field: "国内最大級の求人数。検索＋エージェント＋スカウトのハイブリッド型",
    result:
      "転職者の約6割が年収アップ。IT・通信の平均決定年収469万円→486万円（2024年度・パーソルキャリア『決定年収レポート』2025年5月公表）",
    goodReviews: "求人量が多い／好条件求人が多い／2名体制サポートの場合がある",
    goodSource: "studio-tale・best-w",
    badReviews: "求人・連絡が多すぎる／アドバイザーの質にばらつき／IT専門性がやや低いとの声",
    badSource: "freeconsul・HonNe",
    fit: "全国の求人を幅広く見たい人、特化型の補完として求人量を確保したい人",
    review: "/review/doda-it/",
  },
  {
    slug: "mynavi-it",
    name: "マイナビIT AGENT",
    type: "IT特化型",
    company: "株式会社マイナビ",
    jobs: "公開求人総数の公式値は確認不可（断定なし）",
    area: "全国（拠点による）",
    field: "20〜30代の若手層に強い。書類添削・面接対策が手厚い",
    result: "転職後定着率97.5%・年収アップ率73.7%（いずれも転職メディア集計の二次情報）",
    goodReviews: "サポートが手厚い／担当がIT業界に詳しい／初めての転職でも安心",
    goodSource: "Qiita Job Change・OUTSIDEMAGAZINE",
    badReviews: "連絡が多い／紹介求人数が少ない場合がある／ハイクラス・地方求人が手薄",
    badSource: "axxis 等",
    fit: "30代前半まで、または初めての転職で手厚いサポートを受けたい人",
    review: "/review/mynavi-it/",
  },
  {
    slug: "recruit-it",
    name: "リクルートエージェントIT",
    type: "総合型",
    company: "株式会社リクルート（1977年創業・二次）",
    jobs: "IT公開求人110,840件／非公開101,680件（2026年5月22日時点・二次集計）",
    area: "全国",
    field: "国内最大級の求人数。非公開求人が豊富。大手〜スタートアップまで網羅",
    result: "統一された公式の年収アップ率は未確認（断定なし）",
    goodReviews: "圧倒的な求人数／非公開求人が充実／書類添削・面接対策が丁寧",
    goodSource: "Qiita Job Change 等",
    badReviews: "対応が事務的との声／連絡頻度が高い／サポート期間が3か月で短い",
    badSource: "同上",
    fit: "求人の母数を最大化したい人、地方転職も視野に入れる人",
    review: "/review/recruit-it/",
  },
  {
    slug: "bizreach-it",
    name: "ビズリーチ",
    type: "ハイクラス",
    company: "株式会社ビズリーチ（ビジョナルグループ・東証プライム上場・渋谷区・代表 酒井哲也）",
    jobs: "導入企業41,800社以上（累計）・登録ヘッドハンター9,700人以上・登録者282万人（2025年4月時点・二次）",
    area: "全国（スカウト型）",
    field: "ハイクラス・スカウト型。年収1,000万円以上求人が全体の約4割（二次）。外資・管理職に強い",
    result: "年収アップ実績の統一公表値は確認不可（ハイクラス定義は年収750万円以上・二次）",
    goodReviews: "高年収求人が豊富／スカウトでキャリアアップ／市場価値を客観把握できる",
    goodSource: "ミライトーチ・morejob",
    badReviews: "スカウトの質にばらつき／経歴次第でスカウトが来ない／有料プラン前提との不満",
    badSource: "talentsquare 等",
    fit: "管理職・年収750万円以上を狙う40代、自分の市場価値を測りたい人",
    review: "/review/bizreach-it/",
  },
  {
    slug: "workport",
    name: "ワークポート",
    type: "総合型",
    company: "株式会社ワークポート（2003年3月設立・従業員1,335名・2025年4月現在）",
    jobs: "11万件以上（うちIT関連3万件以上）（公式LP・二次）",
    area: "全国47都道府県57拠点",
    field: "総合型だがIT・ゲームが最も強い。未経験歓迎求人も豊富。スピード重視",
    result: "年収アップ実績の公表値は確認不可（断定なし）",
    goodReviews: "紹介求人の量が多い／レスポンスが早い／未経験歓迎求人が豊富",
    goodSource: "Qiita Job Change・morejob",
    badReviews: "連絡が多すぎる／希望と異なる求人紹介／担当の専門性にばらつき",
    badSource: "axxis・イーデス",
    fit: "地方在住者、未経験領域に挑戦したい人、スピード重視の人",
    review: "/review/workport/",
  },
  {
    slug: "green",
    name: "Green",
    type: "転職サイト",
    company: "株式会社アトラエ（東証プライム上場・2003年10月設立・二次）",
    jobs: "掲載企業9,000社以上・求人15,000件以上（媒体により30,000件以上とも）・登録者120万人超（二次・幅あり）",
    area: "全国（首都圏求人が中心）",
    field:
      "エージェントではなく成功報酬型の転職サイト（ダイレクトリクルーティング）。直接応募・スカウト・カジュアル面談中心で仲介サポートはなし",
    result: "エージェント型の年収交渉サポートはなし（直接応募が中心のため該当データなし）",
    goodReviews: "企業と直接やり取りでき速い／ベンチャー求人が豊富／カジュアル面談が好評",
    goodSource: "みん評 等",
    badReviews: "地方求人が少ない／内定に繋がりにくいとの声／エージェント支援がない",
    badSource: "axxis・HonNe",
    fit: "自分で動ける人、IT/Webベンチャー・スタートアップの社風を見極めたい人",
    review: "/review/green/",
  },
  {
    slug: "paiza",
    name: "paiza転職",
    type: "転職サイト",
    company: "paiza株式会社（2013年設立・二次）",
    jobs: "公開求人5,100件（2026年4月更新・二次）・掲載1,600社以上",
    area: "全国（スカウト型）",
    field:
      "スキルチェック（プログラミングテスト）のランクで実力を評価しスカウトを受ける形式。書類選考免除あり。個別の仲介サポートはなし",
    result: "会員規模は全体85万人以上（2025年3月時点・二次）。年収アップの統一公表値はなし",
    goodReviews: "スキルが数値化される／学歴・経歴の壁が低い／高ランクなら年齢問わずスカウト",
    goodSource: "jobs.qiita・asiro",
    badReviews: "希望条件を無視したスカウト／ランクB以上でないと届きにくい／総求人数は大手より少ない",
    badSource: "freeconsul 等",
    fit: "コーディング力に自信があり、実力で評価されたい人",
    review: "/review/paiza/",
  },
  {
    slug: "type-agent",
    name: "type転職エージェントIT",
    type: "IT特化型",
    company: "株式会社キャリアデザインセンター（1993年設立・二次）",
    jobs: "IT公開求人約4,200件（2025年8月時点・二次）",
    area: "首都圏（一都三県）中心",
    field: "首都圏のIT/Webに強い。年収交渉に注力。面接対策が手厚い。定着率97.4%",
    result:
      "年収アップ希望者の約71%が増収・平均増額92万円（ITエンジニアは124万円）。ただし2021年10月〜2022年9月の自社調査と古い点に注意",
    goodReviews: "担当が親身／ミスマッチが少なく定着率が高い／首都圏の非公開求人が豊富",
    goodSource: "job.or.jp・R&G",
    badReviews: "地方求人が少ない／未経験向けが少ない／担当との相性に左右される",
    badSource: "OUTSIDEMAGAZINE 等",
    fit: "首都圏在住で、丁寧な年収交渉とミスマッチの少ない転職を重視する人",
    review: "/review/type-agent/",
  },
];

const typeBadge = (type: Agent["type"]) =>
  type === "IT特化型"
    ? "bg-petrol-soft text-petrol-deep"
    : type === "ハイクラス"
    ? "bg-purple-100 text-purple-700"
    : type === "転職サイト"
    ? "bg-amber-100 text-amber-700"
    : "bg-green-100 text-green-700";

const toc = [
  { id: "conclusion", label: "結論：30代・40代の選び方ファースト" },
  { id: "table", label: "おすすめ10社 比較一覧表" },
  { id: "details", label: "10社の詳細（運営会社・求人数・評判）" },
  { id: "segment", label: "年代別・目的別の選び方セグメント" },
  { id: "criteria", label: "失敗しない選び方4基準" },
  { id: "steps", label: "エージェント活用5ステップ" },
  { id: "mid-view", label: "30代・40代エンジニアにとっての現実" },
  { id: "faq", label: "よくある質問" },
];

export default function CompareAgentsPage() {
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
        title="エンジニア転職エージェントおすすめ10社比較【30代40代向け】"
        description="30代・40代エンジニア向けに転職エージェントおすすめ10社を統一フォーマットで比較。運営会社・求人数・得意領域・評判（出典付き）を整理し、年代別・目的別の選び方と併用パターンを解説します。"
        url="/compare/agents/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エージェント比較", href: "/compare/agents/" },
          { name: "エンジニア転職エージェントおすすめ10社比較" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニア転職エージェントおすすめ10社比較【30代・40代向け】
        </h1>
        <p className="text-slate-500 text-sm mb-4">
          最終更新: 2026年6月 | 30代・40代ITエンジニア向けに主要10社を統一フォーマットで比較
        </p>
        <p className="text-slate-600 leading-relaxed mb-2">
          「エンジニアの転職エージェントはどこがおすすめか」を、30代・40代の実務経験者という前提で整理しました。本記事では主要10社を、運営会社・求人数（取得時点付き）・対応エリア・得意領域・実績・良い／悪い評判（出典付き）・向いている人という統一フォーマットで掲載しています。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "各社公式サイト・公式会社概要",
            "Qiita Job Change・みん評・イーデス等の口コミプラットフォーム",
            "パーソルキャリア『決定年収レポート』(2025年5月公表)",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10" aria-label="目次">
          <p className="font-bold text-slate-700 mb-3">目次</p>
          <ol className="space-y-2 text-sm text-petrol">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論ファースト */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：30代・40代の選び方ファースト</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6 mb-4">
            <p className="font-bold text-blue-900 mb-3">
              迷ったら「IT特化型1〜2社＋総合型またはハイクラス1社」の併用が結論です。
            </p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>
                <strong>30代（年収アップ・専門性重視）</strong>：レバテックキャリア＋Geekly に、求人量を補う doda ITエンジニア を併用。
              </li>
              <li>
                <strong>40代（ハイクラス・管理職）</strong>：ビズリーチ＋レバテックキャリア に、求人数の多いリクルートエージェントIT を併用。
              </li>
              <li>
                <strong>地方・全国で探す</strong>：リクルートエージェントIT・doda ITエンジニア・ワークポートなど全国対応の社を軸に。
              </li>
            </ul>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            1社では求人の幅が狭く、4社以上は管理が煩雑です。特化型を軸に2〜3社へ登録し、紹介の量と質を比較しながら主軸を決めるのが、ミドル世代にとって失敗の少ない進め方です。各社の順位付けの考え方は
            <Link href="/editorial/" className="text-petrol hover:underline">
              記事制作ポリシー（評価基準）
            </Link>
            に基づいています。
          </p>
        </section>

        {/* 比較表 */}
        <section id="table" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめ10社 比較一覧表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">サービス名</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">タイプ</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">求人数（時点）</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">対応エリア</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">得意領域</th>
                </tr>
              </thead>
              <tbody>
                {agents.map((agent) => (
                  <tr key={agent.slug} className="hover:bg-slate-50 align-top">
                    <td className="px-3 py-3 border border-slate-200 font-medium">
                      <Link href={agent.review} className="text-petrol hover:underline">
                        {agent.name}
                      </Link>
                    </td>
                    <td className="px-3 py-3 border border-slate-200">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${typeBadge(agent.type)}`}>
                        {agent.type}
                      </span>
                    </td>
                    <td className="px-3 py-3 border border-slate-200 text-xs">{agent.jobs}</td>
                    <td className="px-3 py-3 border border-slate-200 text-xs">{agent.area}</td>
                    <td className="px-3 py-3 border border-slate-200 text-xs">{agent.field}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ 求人数は各取得時点の公開・二次集計値で、時期により変動します。料金はいずれも求職者無料です（Green・paizaは転職サイト形態）。詳細な数値の根拠は各社レビューおよび本ページ下部の出典をご確認ください。
          </p>
        </section>

        {/* 各社詳細 */}
        <section id="details" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-6">10社の詳細（運営会社・求人数・評判）</h2>
          <div className="space-y-6">
            {agents.map((agent, i) => (
              <div key={agent.slug} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-slate-800 text-lg">
                    {i + 1}. {agent.name}
                  </h3>
                  <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${typeBadge(agent.type)}`}>
                    {agent.type}
                  </span>
                </div>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm mb-3">
                  <div>
                    <dt className="text-xs font-medium text-slate-400">運営会社</dt>
                    <dd className="text-slate-700">{agent.company}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-slate-400">求人数（時点）</dt>
                    <dd className="text-slate-700">{agent.jobs}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-slate-400">対応エリア</dt>
                    <dd className="text-slate-700">{agent.area}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-slate-400">得意領域</dt>
                    <dd className="text-slate-700">{agent.field}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-xs font-medium text-slate-400">実績（時点）</dt>
                    <dd className="text-slate-700">{agent.result}</dd>
                  </div>
                </dl>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div className="bg-green-50 border border-green-100 rounded-lg p-3">
                    <p className="text-xs font-bold text-green-800 mb-1">良い評判</p>
                    <p className="text-sm text-slate-700">{agent.goodReviews}</p>
                    <p className="text-[11px] text-slate-400 mt-1">出典: {agent.goodSource}</p>
                  </div>
                  <div className="bg-rose-50 border border-rose-100 rounded-lg p-3">
                    <p className="text-xs font-bold text-rose-800 mb-1">気になる評判</p>
                    <p className="text-sm text-slate-700">{agent.badReviews}</p>
                    <p className="text-[11px] text-slate-400 mt-1">出典: {agent.badSource}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-700">
                  <span className="font-bold text-slate-800">向いている人：</span>
                  {agent.fit}
                </p>
                <Link href={agent.review} className="inline-block mt-3 text-xs text-petrol hover:underline">
                  {agent.name}の詳細レビューを見る →
                </Link>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-4 leading-relaxed">
            ※ 口コミはQiita Job Change・みん評・イーデス等の口コミプラットフォームに見られる傾向を要約したもので、原文の転載や当サイト独自アンケートではありません。確認できない設立年・実績は記載していません。
          </p>
        </section>

        {/* 年代別・目的別セグメント */}
        <section id="segment" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年代別・目的別の選び方セグメント</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代・専門性を高めて年収を上げたい</h3>
              <p className="text-sm text-petrol-deep">
                レバテックキャリア＋Geekly を軸に、求人量を補う doda ITエンジニア を併用。レバテックの公式系データでは内定承諾者の3人に2人が応募時より年収70万円以上アップ（2023年1月〜2024年3月実績）と公表されており、年収レンジの引き上げを狙いやすい構成です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代・ハイクラス／管理職に進みたい</h3>
              <p className="text-sm text-petrol-deep">
                ビズリーチ＋レバテックキャリア に、母数を確保するリクルートエージェントIT を併用。ビズリーチは年収1,000万円以上求人が全体の約4割（二次）とされ、スカウトで市場価値を測りながら管理職・外資の選択肢を広げられます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">首都圏で丁寧に進めたい</h3>
              <p className="text-sm text-petrol-deep">
                type転職エージェントIT＋レバテックキャリア。typeは一都三県のIT/Webに強く年収交渉に注力。ミスマッチを避けたい人に向きますが、type公表の年収アップ実績は2021〜2022年の自社調査である点は割り引いて見てください。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">地方・全国で探したい</h3>
              <p className="text-sm text-petrol-deep">
                全国対応のリクルートエージェントIT・doda ITエンジニア・ワークポート（全国47都道府県57拠点）を軸に。IT特化型は首都圏中心の社が多いため、地方では総合型で母数を確保するのが現実的です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">実力・スキルで勝負したい／自分で動きたい</h3>
              <p className="text-sm text-petrol-deep">
                paiza転職（スキルチェックのランクでスカウト）や Green（カジュアル面談・直接応募）。いずれもエージェントの仲介サポートはない形態のため、自走できる人や社風を自分の目で確かめたい人に向きます。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 mt-4">
            年代別の詳しい解説は
            <Link href="/compare/30s-agents/" className="text-petrol hover:underline">
              30代向けエージェント比較
            </Link>
            ・
            <Link href="/compare/40s-agents/" className="text-petrol hover:underline">
              40代向けエージェント比較
            </Link>
            、ハイクラスは
            <Link href="/compare/highclass/" className="text-petrol hover:underline">
              ハイクラス向け比較
            </Link>
            もあわせてご覧ください。
          </p>
        </section>

        {/* 選び方4基準 */}
        <section id="criteria" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">失敗しない選び方4基準</h2>
          <div className="space-y-4">
            {[
              {
                t: "1. 自分の領域・年代に強いか",
                d: "Web/ゲームならGeekly、首都圏IT年収交渉ならtype、ハイクラスならビズリーチというように、得意領域と年代が自分に合うかを最優先で確認します。30代・40代の実務経験者は、未経験向け中心の社よりも経験者の紹介実績が厚い社を選ぶのが効率的です。",
              },
              {
                t: "2. 求人数とエリアが希望に合うか",
                d: "首都圏中心の特化型か、全国対応の総合型かでカバー範囲が変わります。地方在住なら全国対応のリクルートエージェントIT・doda・ワークポートを軸に、求人の母数を確保することが重要です。",
              },
              {
                t: "3. サポート形態が自分の動き方に合うか",
                d: "手厚い仲介（エージェント型）か、自分で動く転職サイト型（Green・paiza）かを区別します。年収交渉や日程調整を任せたいならエージェント型、社風を自分で確かめたいならサイト型が向きます。",
              },
              {
                t: "4. 実績データの『時点』を確認できるか",
                d: "年収アップ率などの実績は計測時期・定義がバラバラです。例えばtypeの実績は2021〜2022年の自社調査と古く、横並び比較はできません。数値は必ず『いつ・どの定義か』を見て、参考値として扱う姿勢が大切です。",
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{item.t}</h3>
                <p className="text-sm text-slate-600">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 活用5ステップ */}
        <section id="steps" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エージェント活用5ステップ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { n: "1", t: "2〜3社に登録する", d: "特化型を軸に2〜3社へ登録。複数社の紹介を比較することで、求人の偏りや担当者の質を見極められます。" },
                { n: "2", t: "初回面談で希望を具体的に伝える", d: "希望年収はレンジで、勤務地・働き方・連絡手段（メール/LINE等）まで伝えると、ミスマッチや過度な連絡を防げます。" },
                { n: "3", t: "求人を比較し主軸エージェントを決める", d: "紹介の質・量・レスポンスを見て、主に動く1社を決定。残りは補完として併用します。" },
                { n: "4", t: "書類添削・面接対策を活用する", d: "添削や模擬面接は無料で受けられます。ミドル世代はこれまでの実績の言語化が鍵になるため、第三者視点で職務経歴書を磨きましょう。" },
                { n: "5", t: "内定後に年収交渉を任せる", d: "交渉は内定後が最も効果的。複数オファーがあれば交渉材料になります。気まずい交渉はエージェントに代行してもらえます。" },
              ].map((item) => (
                <div key={item.n} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                    {item.n}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">{item.t}</h3>
                    <p className="text-sm text-slate-600">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 30代・40代視点 */}
        <section id="mid-view" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアにとっての現実</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              30代・40代の転職では、20代のようなポテンシャル採用は減り、これまでの実績と即戦力性が評価軸になります。レバテックの公表値では正社員SEの平均年収は30代約499万円・40代約618万円（2025年）とされ、年代が上がるほどレンジは上がる一方、求められる役割も高度化します。
            </p>
            <p>
              市場全体では、経済産業省が2019年に公表した試算で2030年に最大約79万人のIT人材不足が見込まれており、経験者の需要は底堅い状況です。ただしこれは2019年公表の試算であり、現時点の保証ではない点には注意が必要です。
            </p>
            <p>
              この年代でエージェントを使う価値は、第一に「自分の市場価値を客観的に知れること」です。ビズリーチのようなスカウト型で届くオファーの年収帯を見れば、現職に残るべきか動くべきかの判断材料になります。第二に「実績の言語化」を手伝ってもらえることです。長く同じ環境にいるほど自分の強みは見えにくくなるため、添削や面談での壁打ちが効きます。
            </p>
            <p>
              一方で、IT特化型の多くは首都圏中心・実務経験者向けで、未経験領域への転向や地方転職では紹介が細る傾向があります。datasheetの口コミでも「未経験者は紹介されにくい」「地方求人が少ない」という声が複数社で見られます。だからこそ、特化型1社に依存せず総合型を併用し、自分の前提（年代・エリア・経験）に正直な期待値で進めることが、ミドル世代の現実的な戦略になります。
            </p>
            <p>
              年代・年収の詳細は
              <Link href="/age/30s/" className="text-petrol hover:underline">
                30代エンジニアの転職
              </Link>
              ・
              <Link href="/age/40s/" className="text-petrol hover:underline">
                40代エンジニアの転職
              </Link>
              、
              <Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">
                30代の年収相場
              </Link>
              ・
              <Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">
                40代の年収相場
              </Link>
              でも解説しています。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12 scroll-mt-20">
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
          <h2 className="text-xl font-bold mb-3">まずはIT特化型に登録し、市場価値を確かめよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            迷ったら、IT特化型のレバテックキャリアと、求人数を補う総合型を1社。併用で求人の量と質を比較するのが、30代・40代に失敗の少ない進め方です。登録・利用は無料です。
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
              { name: "30代エンジニア向けエージェント比較", href: "/compare/30s-agents/" },
              { name: "40代エンジニア向けエージェント比較", href: "/compare/40s-agents/" },
              { name: "ハイクラス向けエージェント比較", href: "/compare/highclass/" },
              { name: "転職エージェント別 年収UPランキング", href: "/compare/salary-ranking/" },
              { name: "IT転職エージェントの選び方", href: "/knowledge/how-to-choose/" },
              { name: "転職エージェントは複数登録すべき？", href: "/knowledge/multiple-agents/" },
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
