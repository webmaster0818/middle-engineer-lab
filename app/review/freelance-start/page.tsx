import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "フリーランススタートの評判・口コミ｜30代40代エンジニアの本音";
const DESCRIPTION =
  "フリーランススタート（freelance-start）の評判・口コミを30代40代エンジニア目線で検証。エン・ジャパングループ運営の国内最大級・案件横断検索の仕組み、累計55万件・平均単価データ、案件サイトとの違いと併用術を出典付きで解説します。";
const URL = "/review/freelance-start/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/freelance-start/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "what", label: "「案件検索エンジン」という仕組み（重要）" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "strength", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "data", label: "単価データの読み方" },
  { id: "middle", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "使い方の5ステップ" },
  { id: "compare", label: "エージェントとの使い分け" },
  { id: "sources", label: "評判・口コミの参照元" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "エン・ジャパングループ（グループ会社の株式会社Brocanteが運営／二次情報）"],
  ["サービス種別", "フリーランスエンジニア向け案件「検索エンジン」（横断検索・集計）"],
  ["掲載案件", "国内最大級。累計掲載案件数55万件突破（公式プレスリリース）／時点で集計数は変動"],
  ["集計例", "2025年4月末時点の掲載案件 約463,542件（公式）"],
  ["単価データ", "フリーランスエンジニア案件の月額平均単価74.6万円（2025年4月／公式調査）"],
  ["利用者数", "月間利用者数30万人突破（公式プレスリリース・時点要確認）"],
  ["検索軸", "開発言語・単価・勤務地・リモート・案件特徴などで横断検索"],
  ["対応エリア", "全国（多くのエージェント案件を横断的に掲載）"],
  ["料金", "利用者は無料"],
];

const goodReviews = [
  {
    title: "複数エージェントの案件を横断検索できる",
    body: "ノマド家やEdmondo等の口コミ系メディアでは、複数のフリーランスエージェントの案件を一括で横断検索できる点が最大の利点として挙げられている。1社ずつ登録して比較する手間が省け、案件起点でエージェントを選べるという傾向の評価が見られる。",
  },
  {
    title: "掲載案件数が国内最大級で相場を掴みやすい",
    body: "公式プレスリリースでは累計掲載案件数55万件突破、月間利用者数30万人突破と発表されている。掲載数が多いほど、自分のスキル・言語での単価相場やリモート案件の有無を把握しやすいという傾向の声が見られる。",
  },
  {
    title: "言語・単価・リモートで細かく絞り込める",
    body: "開発言語・単価・勤務地・リモート可否・案件特徴などで横断検索でき、応募までワンストップで進められると公式が説明している。希望条件で絞って相場感を可視化したい経験者と相性が良いという傾向の評価が見られる。",
  },
];

const badReviews = [
  {
    title: "エージェントの手厚い面談・交渉は受けにくい",
    body: "フリーランススタート自体は案件検索エンジンであり、特定のエージェントのような専属担当による面談・単価交渉・参画後フォローを前提としたサービスではない。口コミでも、伴走支援を期待すると物足りないという傾向の声が見られる。",
    cope: "手厚い支援が欲しい場合は、検索で目星をつけた案件の掲載元エージェント（レバテックフリーランス、Midworks、ITプロパートナーズ等）に直接登録して面談・交渉を受ける。検索エンジンは「探す・比較する」用途と割り切るのが効率的。",
  },
  {
    title: "掲載情報と実際の条件にズレがある場合がある",
    body: "横断的に多数の案件を集約している性質上、掲載時点の情報と実際の募集状況・条件にズレが生じることがあるという指摘がある。すでに充足した案件が表示に残るケースもありうる。",
    cope: "気になる案件は掲載元エージェントで最新の募集状況・単価・契約条件を必ず確認する。複数の類似案件を比較し、表示単価を鵜呑みにせず手取りベースで再確認するとよい。",
  },
  {
    title: "未経験・経験が浅い場合は使いにくい",
    body: "掲載される多くが業務委託の即戦力案件のため、実務経験が浅いと応募できる案件が限られるという傾向の声が見られる。検索エンジンの性質上、未経験向けの手厚い案内も薄い。",
    cope: "経験が浅いうちは、まず正社員転職で実務経験を積むのが現実的。当サイトの未経験者向けエージェント比較やレビュー一覧から、経験者向け以外の選択肢も検討するとよい。",
  },
];

const fitYes = [
  "複数エージェントの案件を一括で比較したい30代・40代経験者",
  "自分のスキル・言語での単価相場を把握したい",
  "リモート可案件を効率よく探したい",
  "案件起点でエージェントを選びたい",
  "登録前に市場のボリューム感を掴みたい",
];

const fitNo = [
  "専属担当の手厚い面談・単価交渉を最優先したい（→各エージェント）",
  "IT実務未経験・経験が浅く即戦力アピールが難しい",
  "1社にじっくり伴走してほしい",
  "副業・複業ベースで小さく始めたい（→カソークやITプロパートナーズ）",
];

const flow = [
  {
    step: "STEP1",
    title: "サイトにアクセス・条件を入力",
    body: "開発言語・希望単価・勤務地・リモート可否などの条件を入力して案件を横断検索する。登録なしでも相場感を掴める範囲がある。",
  },
  {
    step: "STEP2",
    title: "案件を比較・気になる案件を絞り込む",
    body: "複数エージェントの案件を並べて比較。単価・契約形態・リモート可否・必要スキルを見比べ、自分に合う案件を絞り込む。",
  },
  {
    step: "STEP3",
    title: "掲載元エージェントへ応募・登録",
    body: "気になる案件の掲載元エージェントへ応募・登録する。ここから先は各エージェントの面談・選考プロセスに進む。",
  },
  {
    step: "STEP4",
    title: "面談・条件確認",
    body: "掲載元エージェントの担当と面談し、最新の募集状況・手取りベースの単価・契約形態（準委任／請負）を確認する。",
  },
  {
    step: "STEP5",
    title: "商談・契約・参画",
    body: "クライアントとの商談を経て契約・参画。参画後のフォローは掲載元エージェントが担当する。",
  },
];

const faqs = [
  {
    q: "フリーランススタートはエージェントですか？",
    a: "厳密にはエージェントではなく、フリーランスエンジニア向け案件の「検索エンジン（横断検索サイト）」です。複数のエージェントの案件を一括で検索・比較でき、応募は掲載元のエージェントへ進みます。専属担当による面談・単価交渉・参画後フォローは、掲載元の各エージェントが行います。",
  },
  {
    q: "どこが運営していますか？",
    a: "国内最大級の求人サービスを展開するエン・ジャパングループが提供しており、グループ会社の株式会社Brocanteが運営しているとされています（二次情報）。2018年からサービスを展開しています。",
  },
  {
    q: "案件数や単価のデータはどのくらいですか？",
    a: "公式プレスリリースでは累計掲載案件数55万件突破、月間利用者数30万人突破と発表されています。2025年4月末時点の掲載案件は約463,542件、フリーランスエンジニア案件の月額平均単価は74.6万円（2025年4月の公式調査）です。集計数は時点により変動します。",
  },
  {
    q: "未経験でも案件を見つけられますか？",
    a: "掲載される多くが即戦力前提の業務委託案件のため、実務経験が浅いと応募できる案件は限られます。経験が浅い方は、まず正社員転職で実務経験を積むのが現実的です。",
  },
  {
    q: "単価交渉や手厚いサポートは受けられますか？",
    a: "フリーランススタート自体は検索エンジンのため、単価交渉や参画後フォローは掲載元の各エージェントが担当します。手厚い支援を受けたい場合は、検索で目星をつけた案件の掲載元エージェントに直接登録してください。",
  },
  {
    q: "料金はかかりますか？",
    a: "利用者は無料です。案件を横断検索し、掲載元エージェントへ応募する流れまで費用はかかりません。",
  },
  {
    q: "掲載単価は鵜呑みにして大丈夫ですか？",
    a: "横断集約の性質上、掲載時点の情報と実際の条件にズレが生じることがあります。気になる案件は掲載元エージェントで最新の募集状況・手取りベースの単価・契約形態を必ず確認してください。",
  },
];

const related = [
  { name: "レバテックフリーランスの評判（案件量最大手級）", href: "/review/levtech-freelance/" },
  { name: "Relance（リランス）の評判（高単価プライム）", href: "/review/relance/" },
  { name: "Midworksの評判（正社員並み保障）", href: "/review/midworks/" },
  { name: "ITプロパートナーズの評判（週2-3日）", href: "/review/itpropartners/" },
  { name: "フリーランスエージェント比較", href: "/compare/freelance-agents/" },
  { name: "フリーランス（業務委託）という働き方", href: "/employment/freelance/" },
];

export default function FreelanceStartReview() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url={URL} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "評判・口コミ一覧", href: "/review/" },
          { name: "フリーランススタート" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          フリーランススタートの評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ 国内最大級の案件横断検索エンジンを口コミの傾向と公開データで検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          フリーランススタート（freelance-start）は、フリーランスエンジニア向けの<span className="font-bold">案件「検索エンジン」</span>です。複数のエージェントの案件を一括で横断検索・比較できる点が特徴で、個別のエージェントとは役割が異なります。本記事では評判・口コミを口コミプラットフォームの傾向と公式の公表データに基づいて30代・40代エンジニアの視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "フリーランススタート公式サイト・プレスリリース",
            "エン・ジャパン公式リリース",
            "ノマド家",
            "Edmondo NEXT",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：案件を横断検索して相場を把握し、エージェントを選びたい経験者の「入口」に最適</span>。一言でいえば「複数エージェントの案件を一括比較し、自分のスキルでの単価相場を掴みたい30代・40代経験者」向けの検索エンジンです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・エン・ジャパングループ提供の国内最大級。累計掲載55万件突破・月間30万人利用（公式）。</li>
              <li>・言語・単価・リモートで横断検索でき、案件起点でエージェントを選べる。</li>
              <li>・一方で面談・単価交渉・参画後フォローは掲載元エージェントが担当。役割を理解して併用を。</li>
            </ul>
          </div>
        </section>

        {/* 仕組みの説明 */}
        <section id="what" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            「案件検索エンジン」という仕組み（ここが重要）
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              フリーランススタートは、レバテックフリーランスやMidworksのような<span className="font-bold">「エージェント」ではありません</span>。複数のエージェントの案件を集約して横断検索できる<span className="font-bold">「検索エンジン」</span>です。応募は掲載元のエージェントへ進み、面談・単価交渉・参画後フォローはそのエージェントが担当します。
            </p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            この違いを理解しておくと使い方を間違えません。フリーランススタートは「探す・比較する・相場を掴む」ための入口として使い、実際の面談や交渉は掲載元エージェントで受ける——この役割分担で併用するのが最も効率的です。1社ずつエージェントに登録して案件を見比べる手間を、まとめて省けるのが価値です。
          </p>
        </section>

        {/* 基本データ */}
        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ表（2026年6月時点）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            ※掲載案件数・利用者数・平均単価は公式プレスリリース／公式調査の公表値（時点併記）です。運営会社の構成は二次情報を含みます。集計数は時期により変動します。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フリーランススタートの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 複数エージェントの案件を横断検索</h3>
              <p className="text-sm text-petrol-deep">
                最大の強みは、複数のフリーランスエージェントの案件を一括で横断検索・比較できることです。1社ずつ登録して見比べる手間を省き、案件起点で「どのエージェント経由が良いか」を判断できます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 国内最大級の掲載数で相場が掴める</h3>
              <p className="text-sm text-petrol-deep">
                公式では累計掲載案件数55万件突破、月間利用者数30万人突破と発表されています。掲載数が多いほど、自分のスキル・言語での単価相場やリモート案件の有無を把握しやすくなります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 言語・単価・リモートで細かく絞れる</h3>
              <p className="text-sm text-petrol-deep">
                開発言語・単価・勤務地・リモート可否・案件特徴などで横断検索でき、応募までワンストップで進められます。希望条件で絞って相場を可視化したい経験者に向いています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. エン・ジャパングループ提供の安心感</h3>
              <p className="text-sm text-petrol-deep">
                国内最大級の求人サービスを展開するエン・ジャパングループが提供しており、月額平均単価74.6万円（2025年4月）といった市場データも公式調査として発表しています。相場の一次情報を確認できる点も実用的です。
              </p>
            </div>
          </div>
        </section>

        {/* 良い評判 */}
        <section id="good" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良い評判の傾向（出典付き）</h2>
          <p className="text-sm text-slate-600 mb-4">
            以下は口コミプラットフォーム上の声を傾向としてまとめたものです（原文転載ではありません）。
          </p>
          <div className="space-y-4">
            {goodReviews.map((r, i) => (
              <div key={i} className="border border-green-200 rounded-lg p-5">
                <h3 className="font-bold text-green-700 mb-2 text-sm">◎ {r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 悪い評判 */}
        <section id="bad" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">悪い評判の傾向と対処法</h2>
          <p className="text-sm text-slate-600 mb-4">
            公平性のため、ネガティブな傾向の声と、それぞれへの現実的な対処法もまとめます。
          </p>
          <div className="space-y-4">
            {badReviews.map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-red-600 mb-2 text-sm">△ {r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{r.body}</p>
                <div className="bg-amber-50 border border-amber-200 rounded p-3">
                  <p className="text-xs text-amber-800 leading-relaxed">
                    <span className="font-bold">対処法：</span>
                    {r.cope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 単価データの読み方 */}
        <section id="data" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">単価データの読み方</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              フリーランススタートの価値の一つは、案件横断検索を通じて<span className="font-bold">単価相場を可視化できる</span>ことです。公式調査では、フリーランスエンジニア案件の月額平均単価は74.6万円（2025年4月）と発表されています。ただし平均値は言語・経験・常駐/リモート・スキル要件で大きく変わるため、平均だけで自分の単価を判断するのは危険です。
            </p>
            <p>
              実務上のおすすめは、①自分の主要言語で絞り込み、②希望リモート条件を加え、③表示された複数案件の単価レンジを見る、という手順です。これで「自分のスキルでの現実的なレンジ」が掴めます。そのうえで掲載元エージェントの面談に進み、提示単価が手取りベースか・契約形態（準委任／請負）かを確認すれば、相場と実態の両方を踏まえて判断できます。
            </p>
            <p>
              なお検索エンジンに表示される単価は掲載時点のものでズレが生じることがあります。最終的な金額は必ず掲載元エージェントで最新確認してください。相場を掴む入口として使い、交渉と確定は各エージェントで——という役割分担が、フリーランススタートを最も活かす使い方です。
            </p>
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアが使う場合の戦略
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアのキャリアを扱う立場から、年代別の使い方を整理します。フリーランススタートは「探す・比較する」入口のため、独立や案件切り替えを検討するすべての年代の最初のステップとして有用です。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              独立を検討し始める段階で、まず横断検索で「自分のスキルでどんな案件・単価があるか」を把握するのに最適です。市場のボリューム感を掴んだうえで、案件量重視ならレバテックフリーランス、高単価プライム狙いならRelance、と掲載元エージェントを選ぶと効率的です。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              リモート可・専門性の高い案件を横断検索で絞り込み、年齢で不利になりにくい案件を見極めるのに役立ちます。家族・ローンの状況次第では、単価だけでなく保障型（Midworks）や副業並走（ITプロパートナーズ）も比較対象に入れ、検索で得た相場感を交渉材料にするとよいでしょう。
            </p>
            <p>
              いずれの年代でも、フリーランススタートは「入口」と割り切り、実際の伴走支援は掲載元エージェントで受けるのが鉄則です。エージェントの選び方は当サイトの
              <Link href="/compare/freelance-agents/" className="text-petrol hover:underline">フリーランスエージェント比較</Link>
              で整理しています。
            </p>
          </div>
        </section>

        {/* 向き不向き */}
        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            向いている人／向いていない人チェックリスト
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3 text-sm">向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {fitYes.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 shrink-0">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3 text-sm">向いていない人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {fitNo.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 shrink-0">×</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 流れ */}
        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">使い方の流れ（5ステップ）</h2>
          <div className="space-y-3">
            {flow.map((f, i) => (
              <div key={i} className="flex gap-4 border border-slate-200 rounded-lg p-4">
                <div className="shrink-0 text-petrol-deep font-bold text-sm w-16">{f.step}</div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* エージェント比較 */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エージェントとの使い分け</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            フリーランススタートは「検索エンジン」、以下は「エージェント」です。検索で目星をつけ、実際の面談・交渉はエージェントで受ける、という併用が王道です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["", "役割・向く使い方"],
                  ["フリーランススタート（本記事）", "横断検索で相場把握・案件比較する入口。"],
                  ["レバテックフリーランス", "案件量を最大化したい経験者の本命エージェント。"],
                  ["Relance（リランス）", "自社開発・プライムの高単価×フルリモート狙い。"],
                  ["Midworks", "正社員並みの保障で安定して独立したい慎重派。"],
                ] as string[][]).map((row, i) => (
                  <tr key={i} className={i === 0 ? "bg-slate-100" : i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-3 py-3 border-b border-slate-200 font-medium text-slate-700">
                      {row[0]}
                    </td>
                    <td className="px-3 py-3 border-b border-slate-200 text-slate-600">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/review/levtech-freelance/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              レバテックフリーランス（案件量）の評判 →
            </Link>
            <Link href="/review/relance/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              Relance（高単価プライム）の評判 →
            </Link>
            <Link href="/review/midworks/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              Midworks（保障で安定）の評判 →
            </Link>
            <Link href="/compare/freelance-agents/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              フリーランスエージェント比較 →
            </Link>
          </div>
        </section>

        {/* 参照元 */}
        <section id="sources" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">評判・口コミの参照元</h2>
          <p className="text-sm text-slate-600 mb-4">
            本記事が傾向としてまとめた口コミ・評判は、以下のメディアを参照しています（原文の転載は行っていません）。詳細は各リンク先をご確認ください。
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              ・
              <a href="https://nomadoya.ne.jp/freelance-start/" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline">
                ノマド家｜フリーランススタートの口コミ・評判
              </a>
            </li>
            <li>
              ・
              <a href="https://www.edmondo.jp/media/" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline">
                Edmondo NEXT（メディアトップ）
              </a>
              <span className="text-xs text-slate-400">（該当記事のURLが確認できなかったため、メディアトップにリンクしています）</span>
            </li>
          </ul>
          <p className="text-xs text-slate-400 mt-3">
            ※掲載案件数・利用者数・平均単価などの数値は、記事中に併記した公式プレスリリース／公式調査に基づきます。リンク先の掲載内容・URLは変更される場合があります。最終リンク確認：2026年7月。
          </p>
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
          <h2 className="text-xl font-bold mb-3">フリーランススタートで案件を探す</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずは横断検索で、あなたのスキル・言語での単価相場とリモート案件を確認してみませんか？
          </p>
          <a href="https://freelance-start.com/" target="_blank" rel="nofollow noopener" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            案件を検索する
          </a>
        </section>

        {/* 関連記事 */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
