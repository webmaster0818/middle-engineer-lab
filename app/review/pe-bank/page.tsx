import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "PE-BANKの評判・口コミ｜30代40代フリーランスエンジニア";
const DESCRIPTION =
  "PE-BANKの評判・口コミを30代40代エンジニア目線で検証します。フリーランススタートの口コミ32件（5点満点で3.8）の内訳、公式インタビュー6件、公開されている手数料（15%から最低10%）と全国13拠点を出典つきで解説します。";
const URL = "/review/pe-bank/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/pe-bank/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "要点（どんな人向けか）" },
  { id: "basic", label: "基本データ表（2026年11月21日確認）" },
  { id: "strength", label: "特徴・強み" },
  { id: "reviews", label: "口コミ・評判の掲載状況（フリーランススタート32件）" },
  { id: "voices", label: "公式サイト掲載のエンジニアインタビュー6件" },
  { id: "margin", label: "手数料の公開と福利厚生の考え方" },
  { id: "middle", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から参画までの5ステップ" },
  { id: "compare", label: "フリーランス各社の使い分け" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "株式会社PE-BANK（1989年5月設立。旧称：首都圏コンピュータ技術者）"],
  ["サービス種別", "フリーランス（業務委託）向け案件紹介エージェント（共同受注契約）"],
  ["対象", "ITフリーランスエンジニア（実務経験者）"],
  ["手数料（PE-BANK分配率）", "公開。報酬受取回数に応じて15%（1〜12回）→14%（13〜24回）→13%（25〜36回）→12%（37〜48回）→11%（49〜60回）→10%（61回〜）"],
  ["利用者の構成", "就業中のフリーエンジニア2,152名、平均年齢48才（最年少25歳・最年長73歳）〔2025年8月末時点〕"],
  ["案件傾向", "Java 21.0%、インフラ14.8%、データベース・SQL 12.3%、.NET 12.3%、PM・PMO・コンサル10.5%など〔2026年1月末時点〕"],
  ["福利厚生", "PE共済会（所得補償を中心に生命・がん・医療保障）、レジャー補助金、確定申告サポートなど"],
  ["対応エリア", "全国13拠点（東京・札幌・仙台・横浜・名古屋・京都・大阪・神戸・岡山・四国・広島・福岡・北九州）"],
  ["料金", "登録・相談は無料（報酬から上記の分配率で差し引かれます）"],
];

const fitYes = [
  "IT実務経験のある30代・40代フリーランスエンジニア",
  "手数料（マージン）の透明性を重視したい",
  "長期で腰を据えて活動し、手数料の逓減メリットを得たい",
  "Java・インフラ・データベース・.NETなどの経験を活かしたい",
  "地方在住で全国13拠点のサポートを受けたい",
];

const fitNo = [
  "IT実務未経験・経験が浅く即戦力アピールが難しい",
  "短期間だけ利用する予定で、手数料率の低さを最優先したい（分配率は1〜12回目が15%）",
  "特定の新しい技術領域の案件数を最優先したい（公式の案件傾向で割合を確認してください）",
  "正社員並みの報酬保障を最優先したい（→Midworks）",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録・面談予約",
    body: "公式サイトから経歴・希望単価・稼働条件を入力します。在職中・現案件参画中でも次の案件探しとして登録できます。",
  },
  {
    step: "STEP2",
    title: "面談・条件すり合わせ",
    body: "担当と面談します。技術スタック・希望単価・エリア・稼働条件をすり合わせます。分配率が公開されているため、手取りベースの試算をしやすくなります。",
  },
  {
    step: "STEP3",
    title: "案件紹介・エントリー",
    body: "条件に合う案件の紹介を受け、応募する案件を決定します。発注金額・手数料が見える共同受注の仕組みで比較できます。",
  },
  {
    step: "STEP4",
    title: "商談（クライアント面談）",
    body: "クライアントとの商談に臨みます。担当が事前準備・同席をサポートする場合があります。技術要件のすり合わせを行います。",
  },
  {
    step: "STEP5",
    title: "契約・参画・共済会の検討",
    body: "条件合意後に契約を締結し参画します。必要に応じてPE共済会などの福利厚生の利用を検討し、長期継続による分配率の上昇も意識して活動します。",
  },
];

const faqs = [
  {
    q: "PE-BANKの運営会社はどこですか？",
    a: "株式会社PE-BANK（1989年5月設立、旧称：首都圏コンピュータ技術者）が運営しています。公式サイトでは、30年以上にわたり共同受注契約の形でITフリーランスを支援してきたと説明しています。",
  },
  {
    q: "マージン（手数料）は何%ですか？",
    a: "PE-BANKは分配率を公開しています。公式の「契約と手数料について」では、報酬受取回数に応じてPE-BANKの分配率が15%（1〜12回）、14%（13〜24回）、13%（25〜36回）、12%（37〜48回）、11%（49〜60回）、10%（61回〜）と下がり、エンジニアへの分配率は85%から最大90%になります（2026年11月21日確認）。",
  },
  {
    q: "PE共済会とは何ですか？費用はかかりますか？",
    a: "PE-BANKの福利厚生ページでは、PE共済会を「所得補償」を中心に生命・がん・医療保障などを提供する制度と説明しています。掛金は共済会の専用サイト（pe-kyousai.jp）で案内されていますが、2026年11月21日時点では同サイトがメンテナンス中で確認できなかったため、本記事では金額を掲載していません。加入前に最新の掛金と保障内容を確認してください。",
  },
  {
    q: "地方在住でも使えますか？",
    a: "公式の「数字で見るPE-BANK」では全国13拠点（東京・札幌・仙台・横浜・名古屋・京都・大阪・神戸・岡山・四国・広島・福岡・北九州）とされています。利用者の居住エリアは関東45%、関西14%、中部13%、中国・四国11%、北海道・東北10%、九州7%と公表されています（2025年11月末時点）。",
  },
  {
    q: "未経験でも案件を紹介してもらえますか？",
    a: "PE-BANKはITフリーランスエンジニア向けの案件紹介で、業務委託案件は一般に実務経験が前提です。公式インタビュー6件もフリーランス歴6〜11年の方の事例です。経験が浅い方は、まず正社員で実務経験を積んでから独立する方が現実的です。安定雇用での経験積みは正社員転職のレバテックキャリア（/review/levtech/）が向いています。",
  },
  {
    q: "登録は無料ですか？",
    a: "登録・相談は無料です。費用にあたるのは報酬から差し引かれるPE-BANKの分配率（15%から最低10%）で、公式に公開されています。PE共済会など任意の制度を利用する場合は別途費用がかかります。",
  },
  {
    q: "30代・40代でも使えますか？",
    a: "使えます。公式によると就業中のフリーエンジニアの平均年齢は48才（2025年8月末時点）で、フリーランススタートの口コミ32件も投稿者の年代は50代以上が20件、40代が2件、30代が3件です。分配率が長期利用で上がる仕組みは、腰を据えて長く活動したいミドル層に向いています。案件数を比べたい場合はレバテックフリーランスなどの併用も検討してください。",
  },
];

const related = [
  { name: "ギークスジョブの評判（リモート・福利厚生）", href: "/review/geechs/" },
  { name: "レバテックフリーランスの評判（高単価）", href: "/review/levtech-freelance/" },
  { name: "Midworksの評判（正社員並み保障）", href: "/review/midworks/" },
  { name: "フリーランスエージェント比較", href: "/compare/freelance-agents/" },
  { name: "業務委託という働き方の基礎", href: "/employment/contractor/" },
  { name: "フリーランスという働き方の基礎", href: "/employment/freelance/" },
];

export default function PeBankReview() {
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
          { name: "PE-BANK" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          PE-BANKの評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年11月21日（口コミの掲載状況・公式の手数料・拠点数を再確認） ｜ 手数料を公開しているフリーランスエージェントを、口コミの件数と公開情報で検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          PE-BANKは、株式会社PE-BANK（1989年5月設立）が運営する、ITフリーランスエンジニア向けの<span className="font-bold">業務委託（フリーランス）案件</span>紹介エージェントです。<span className="font-bold">手数料（PE-BANKの分配率）を公開</span>している点と、PE共済会などの福利厚生、全国13拠点が特徴です。本記事では、口コミサイト「フリーランススタート」に掲載された32件の評価の内訳と、公式サイトの公開情報をもとに、30代・40代エンジニアの視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年11月21日"
          sources={[
            "株式会社PE-BANK公式（契約と手数料について・数字で見るPE-BANK・充実の福利厚生・エンジニアインタビュー）",
            "フリーランススタート（PE-BANKの評判・口コミ）",
            "App Store検索API",
          ]}
        />

        {/* 要点 */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">このような方におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：手数料の公開と全国対応で、腰を据えて長く独立したい経験者向けです</span>。要約すると「手取りの見える化と安定を重視するIT実務経験者」向けのフリーランスエージェントです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・PE-BANKの分配率を公開しており（15%から報酬受取61回目以降は10%）、長く働くほど取り分が増える設計です。</li>
              <li>・フリーランススタートの口コミは32件・5点満点で3.8（2026年11月21日確認）。投稿者は50代以上が20件です。</li>
              <li>・公式の利用者平均年齢は48才で、案件はJava・インフラ・データベース・.NETが上位です。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav aria-label="目次" className="mb-10 border border-slate-200 rounded-xl p-5 bg-white">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-petrol-deep">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

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
            ※いずれも2026年11月21日に株式会社PE-BANK公式サイト（pe-bank.jp）で確認した内容です。以前の版の手数料（12%→10%→8%）・拠点数（12拠点）・共済会の掛金は公式の現行表記と一致しない、または確認できなかったため改めました。最新の条件は公式サイトで確認してください。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">PE-BANKの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 手数料（分配率）を公開</h3>
              <p className="text-sm text-petrol-deep">
                PE-BANKは共同受注契約の形をとり、契約金額を含めて取引内容を開示したうえで、公開している分配率で報酬を分けると説明しています。計算例として、報酬額70万円・1回目の場合は70万円×85%×1.10＝654,500円が支払額とされています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 長く働くほど手数料が下がる</h3>
              <p className="text-sm text-petrol-deep">
                PE-BANKの分配率は報酬受取回数に応じて15%（1〜12回）から12回ごとに1ポイントずつ下がり、61回目以降は10%になります。長期で活動するほど取り分が増える設計で、腰を据えて続けたい人に有利です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 福利厚生（PE共済会など）</h3>
              <p className="text-sm text-petrol-deep">
                公式の福利厚生ページでは、所得補償を中心に生命・がん・医療保障を提供するPE共済会のほか、レジャー補助金や確定申告サポートなどが案内されています。PE共済会の掛金は専用サイトで確認する必要があります（2026年11月21日はメンテナンス中で確認できませんでした）。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 全国13拠点・1989年設立</h3>
              <p className="text-sm text-petrol-deep">
                東京・札幌・仙台・横浜・名古屋・京都・大阪・神戸・岡山・四国・広島・福岡・北九州の全国13拠点があり、利用者の居住エリアも関東以外が55%を占めます（2025年11月末時点）。1989年5月設立と運営歴の長いサービスです。
              </p>
            </div>
          </div>
        </section>

        {/* 口コミ・評判の掲載状況 */}
        <section id="reviews" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の掲載状況（2026年11月21日確認）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            PE-BANKの利用者による評価を、評点と件数を確認できる形で探しました。確認できたのは、フリーランス向け案件・エージェント検索サイト「フリーランススタート」の口コミページです。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["項目", "フリーランススタートの表示（2026年11月21日 当サイト集計）"],
                  ["総合評価・件数", "5点満点で3.8、評判・口コミ32件"],
                  ["評価の内訳", "Excellent 12件、Good 9件、Average 11件（これより低い評価の口コミは表示されていません）"],
                  ["口コミの項目", "登録面談13件、案件12件、営業4件、参画後サポート3件"],
                  ["投稿者の年代", "50代以上20件、40代2件、30代3件、20代6件、表示なし1件"],
                  ["投稿者の利用状況", "稼働経験あり14件、登録のみ11件、営業経験あり3件、表示なし4件"],
                  ["投稿日", "2019年4月2日〜2026年7月29日"],
                ] as string[][]).map((row, i) => (
                  <tr key={i} className={i === 0 ? "bg-slate-100" : i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-3 py-3 border-b border-slate-200 font-medium text-slate-700 align-top w-1/3">{row[0]}</td>
                    <td className="px-3 py-3 border-b border-slate-200 text-slate-600">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            読み方の注意点として、この口コミは1人が「登録面談」「案件」などの項目ごとに投稿する形式のため、32件は32人分ではありません。また、約7年間で32件と件数が少なく、投稿者の年代も50代以上に偏っているため、評価の傾向として一般化できる量ではありません。本文はログインしないと全文を読めないため、本記事では個々の口コミの内容は紹介していません。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["その他の確認先", "結果（2026年11月21日）"],
                  ["App Store・Google Play", "「PE-BANK」等で検索しましたが、株式会社PE-BANKが提供するアプリは見つかりませんでした（App Storeは検索APIで確認）。"],
                  ["OpenWork・転職会議など", "企業の社員による口コミのサイトで、サービス利用者の口コミではないため使用していません。"],
                  ["Googleマップ", "当サイトでは評点と件数を確認できなかったため掲載していません。"],
                ] as string[][]).map((row, i) => (
                  <tr key={i} className={i === 0 ? "bg-slate-100" : i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-3 py-3 border-b border-slate-200 font-medium text-slate-700 align-top w-1/3">{row[0]}</td>
                    <td className="px-3 py-3 border-b border-slate-200 text-slate-600">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            以前の版では、口コミを紹介する解説記事の論調を「良い評判の傾向」「悪い評判の傾向」として要約していましたが、件数や評点の裏付けがないため削除し、上の集計に置き換えました。
          </p>
        </section>

        {/* 公式サイト掲載のエンジニアインタビュー */}
        <section id="voices" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">公式サイト掲載のエンジニアインタビュー6件</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            PE-BANK公式サイトの「エンジニアインタビュー」（pe-bank.jp/service/interview/engineer/）には6件が掲載されています。<span className="font-bold">運営会社が選んで掲載している声であり、利用者全体の評価を示すものではありません。</span>一覧に表示されている範囲で内訳をまとめます（年齢は掲載時の表記）。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["項目", "内訳（2026年11月21日 当サイト集計）"],
                  ["年齢", "30代3件（32歳・38歳・38歳）、40代3件（42歳・44歳・48歳）"],
                  ["職種", "Webアプリ・Webエンジニア3件、システムエンジニア1件、サーバーサイドエンジニア1件、SAPエンジニア1件"],
                  ["フリーランス歴", "6年目2件、9年目2件、11年目2件"],
                  ["主な見出しの内容", "家族と過ごす時間、収入の増加、札幌在住で全国の案件に携わる、など"],
                ] as string[][]).map((row, i) => (
                  <tr key={i} className={i === 0 ? "bg-slate-100" : i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-3 py-3 border-b border-slate-200 font-medium text-slate-700 align-top w-1/3">{row[0]}</td>
                    <td className="px-3 py-3 border-b border-slate-200 text-slate-600">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            掲載されているのは30代・40代でフリーランス歴6年以上の方に限られ、独立直後の方の事例はありません。独立したばかりの方は、面談時に同じ経歴の方の参画実績を確認することをおすすめします。
          </p>
        </section>

        {/* マージン・共済会 */}
        <section id="margin" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">手数料の公開と福利厚生の考え方</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              フリーランス案件選びで気になる「マージン（手数料）」を、PE-BANKは<span className="font-bold">分配率として公開</span>しています。15%から報酬受取61回目以降の10%まで段階的に下がる仕組みのため、提示単価から自分の取り分を試算しやすいのが利点です。
            </p>
            <p>
              一方で、手数料率だけで損得は決まりません。実務上は①公開されている分配率を踏まえた手取り②案件の単価水準③福利厚生の価値、を総合的に見るのが妥当です。たとえば報酬受取1〜12回目は分配率15%のため、手数料率がより低いサービスと比べる場合は、同じ案件単価での手取り額で比べてください。
              <Link href="/review/geechs/" className="text-petrol hover:underline">ギークスジョブ</Link>
              や
              <Link href="/review/levtech-freelance/" className="text-petrol hover:underline">レバテックフリーランス</Link>
              の提示単価と並べて比較すると、判断しやすくなります。
            </p>
            <p>
              30代・40代で家族やローンがある場合、PE共済会の所得補償は<span className="font-bold">働けなくなったときの備え</span>として検討価値があります。ただし費用がかかるため、掛金と保障内容を専用サイトで確認したうえで判断することをおすすめします。報酬保障型の
              <Link href="/review/midworks/" className="text-petrol hover:underline">Midworks</Link>
              と比較し、自分のリスク許容度に合う形を選ぶとよいでしょう。
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
              当サイトはミドルエンジニアのキャリアを扱う立場から、年代別の使い方を整理します。PE-BANKは分配率の公開・全国対応・長期利用での分配率上昇が特徴で、公式の利用者平均年齢も48才です。腰を据えて長く独立を続けたい30代・40代と相性が良いサービスです。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              独立による単価アップの効果が大きい年代です。分配率が見えるため手取りの計画を立てやすく、長期継続で手数料が下がるメリットも得られます。案件数を比べたい場合はレバテックフリーランスなども併用し、条件を並べて選ぶのが堅実です。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              公式の案件傾向はJava・インフラ・データベース・.NET・PM/PMOが上位で、こうした領域で実績を積んだミドルと相性が良いといえます。PE共済会や全国13拠点は、家族構成や地方在住の事情がある層に向きます。単価最大化より<span className="font-bold">収入の安定と保障</span>を優先する判断も合理的です。
            </p>
            <p>
              経産省「IT人材需給に関する調査」（2019年公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、経験あるミドル層への需要は底堅いと考えられます。「いつでも正社員に戻れる状態」を保っておくと安心です。安定雇用を希望する場合は、正社員転職の
              <Link href="/review/levtech/" className="text-petrol hover:underline">レバテックキャリア</Link>
              も検討してください。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">登録から参画までの流れ（5ステップ）</h2>
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

        {/* フリーランス比較 */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フリーランス各社の使い分け</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            フリーランスエージェントは「何を重視するか」で選ぶと失敗しにくくなります。PE-BANKは「手数料の公開・福利厚生・全国対応」が特徴で、案件数や単価を比べたい場合は他社との併用が有効です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["", "強み・向く人"],
                  ["PE-BANK（本記事）", "手数料公開・福利厚生・全国13拠点。透明性と安定を重視する人。"],
                  ["レバテックフリーランス", "単価・案件量を最大化したい経験者。"],
                  ["ギークスジョブ", "リモート中心＋福利厚生で柔軟に働きたい人。"],
                  ["Midworks", "正社員並みの報酬保障で安定したい慎重派。"],
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
              レバテックフリーランス（高単価）の評判 →
            </Link>
            <Link href="/review/geechs/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              ギークスジョブ（リモート）の評判 →
            </Link>
            <Link href="/review/midworks/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              Midworks（保障で安定）の評判 →
            </Link>
            <Link href="/compare/freelance-agents/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              フリーランスエージェント比較 →
            </Link>
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
          <h2 className="text-xl font-bold mb-3">PE-BANKに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            手数料の透明性と福利厚生を重視する方は、PE-BANKの無料相談で条件を確認してください。
          </p>
          <a href="https://pe-bank.jp/" target="_blank" rel="nofollow noopener" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            無料で相談する
          </a>
        </section>

        {/* 出典 */}
        <section id="sources" className="mb-10 scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-3">出典</h2>
          <p className="text-sm text-slate-600 mb-3 leading-relaxed">
            本記事の数値・件数は、以下のページで2026年11月21日に確認したものです。各リンクは外部サイトへ移動します。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              {([
                ["https://freelance-start.com/agents/40/review", "フリーランススタート：PE-BANKの評判・口コミ（3.8・32件）"],
                ["https://pe-bank.jp/service/keiyaku/", "PE-BANK公式：契約と手数料について（分配率）"],
                ["https://pe-bank.jp/service/numbers/", "PE-BANK公式：数字で見るPE-BANK（拠点数・平均年齢・案件傾向・居住エリア）"],
                ["https://pe-bank.jp/service/support/welfare/", "PE-BANK公式：充実の福利厚生（PE共済会など）"],
                ["https://pe-bank.jp/service/interview/engineer/", "PE-BANK公式：エンジニアインタビュー（6件）"],
              ] as string[][]).map(([href, label], i) => (
                <li key={i}>
                  <a href={href} rel="nofollow noopener" target="_blank" className="text-petrol hover:underline">{label}</a>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-400 mt-3">
              ※リンク先の内容・URLは変更される場合があります。参照確認日：2026年11月21日。
            </p>
          </div>
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
