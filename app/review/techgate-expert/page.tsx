import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "テックゲートエキスパートの評判・口コミは？特徴・料金・対応【2026年】";
const DESCRIPTION =
  "テックゲートエキスパート（株式会社セルバ）の評判・特徴を30代40代ミドルエンジニア目線で検証。ハイクラスSE・ITコンサル転職の強み、料金、向く人・向かない人、利用の流れ、FAQを出典付きで解説します。";
const URL = "/review/techgate-expert/";
const OFFICIAL_URL = "https://www.selva-i.co.jp/tecgate/highclass/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/techgate-expert/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "strength", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "気になる評判の傾向と対処法" },
  { id: "middle", label: "30代・40代エンジニアの活用視点" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "利用の流れ" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["サービス名", "テックゲートエキスパート"],
  ["運営会社", "株式会社セルバ"],
  ["許可番号", "厚生労働大臣許可 27-ユ-302296（公式）"],
  ["サービス種別", "ハイクラスSE・ITエンジニア向け転職エージェント（伴走型）"],
  ["得意領域", "ハイクラスSE／ITエンジニア→ITコンサルへのキャリアアップ（二次情報）"],
  ["対象者", "システム開発の実務経験者向け（公式・二次情報）"],
  ["対応エリア", "全国（47都道府県対応・公式）。フルリモート案件も多数（公式）"],
  ["サポート", "キャリアプランニング・書類添削・模擬面接・年収交渉・入社日調整（公式）"],
  ["料金", "相談・登録は無料（公式）。費用は採用企業側が負担"],
  ["その他", "勤続支援金2万円の記載あり（公式・条件は要確認）"],
];

const goodReviews = [
  {
    title: "技術が分かるコンサルタントに相談できる",
    body: "公式は「技術が分かるキャリアコンサルタント」の配置を掲げており、各転職メディアでも開発環境・使用言語・チーム体制といった現場レベルの相談ができるという紹介が見られる。",
  },
  {
    title: "ITコンサルへのキャリアアップに強い",
    body: "各転職メディアでは、ITエンジニアからITコンサルタントへのキャリアアップに特化したサービスとして紹介される傾向がある。中堅規模のITコンサルティングファームとの提携に言及する二次情報もある。",
  },
  {
    title: "希望条件の交渉・キャリア設計を支援",
    body: "良い評判の傾向として、キャリアプランの作成や、希望条件を企業と交渉してくれた、細かな希望に合う企業を紹介してくれたという声が各転職メディアで紹介されている。",
  },
];

const badReviews = [
  {
    title: "実務経験が浅い人には向きにくい",
    body: "ハイクラス向けの設計のため、実務経験の少ない方には適さない場合があるという指摘が各転職メディアで見られる。",
    cope: "IT実務経験が浅い場合は、未経験歓迎求人も扱うワークポートなどを併用するのが現実的。経験を積んでから改めて登録する選択肢もある。",
  },
  {
    title: "求人数・提携数の公表値が確認しにくい",
    body: "求人数や提携企業数について、二次情報では複数の数字が言及されるものの、公式での明確な公表値は確認しづらい。数値は時期により変動する。",
    cope: "面談時に自分の希望領域（言語・ポジション・年収レンジ）に合う求人が現時点でどの程度あるかを直接確認するとよい。",
  },
  {
    title: "コンサル志向でない人には合わないことがある",
    body: "ITコンサルへのキャリアアップ文脈で紹介されることが多く、純粋に開発職を続けたい人には提案がずれる可能性がある。",
    cope: "開発職を続けたい意向は初回に明確に伝える。開発職中心ならレバテックキャリアやGeeklyなどIT特化エージェントの併用が有効。",
  },
];

const fitYes = [
  "システム開発の実務経験がある30代エンジニア",
  "ITエンジニアからITコンサル・上流へキャリアアップしたい",
  "技術が分かる担当者と会話しながら進めたい",
  "全国・フルリモートを含めて求人を探したい",
];

const fitNo = [
  "IT実務未経験・経験が浅い",
  "開発職を続けたくコンサル志向はない",
  "求人数の公表値など定量情報を重視する",
  "IT以外の職種を探している",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録・相談",
    body: "公式サイトから登録。在職中でも登録でき、情報収集目的の相談も可能。",
  },
  {
    step: "STEP2",
    title: "キャリアプランニング・面談",
    body: "担当コンサルタントと面談し、経験・技術スタック・希望年収やNG条件をすり合わせる。キャリアプランの設計支援を受けられる。",
  },
  {
    step: "STEP3",
    title: "求人紹介・選考対策",
    body: "条件に合う公開・非公開求人の紹介を受け、応募書類添削・模擬面接のサポートを受ける。",
  },
  {
    step: "STEP4",
    title: "選考・面接",
    body: "企業ごとの選考に臨む。スケジュール調整は担当が代行。",
  },
  {
    step: "STEP5",
    title: "内定・年収交渉・入社",
    body: "内定後は年収・条件交渉を担当がサポート。入社日を調整して完了。",
  },
];

const faqs = [
  {
    q: "テックゲートエキスパートの料金はかかりますか？",
    a: "求職者は無料です。キャリアプランニング・書類添削・模擬面接・年収交渉まで費用はかかりません。費用は採用企業側が負担する仕組みです。",
  },
  {
    q: "未経験でも利用できますか？",
    a: "システム開発の実務経験者向けのサービスです。実務経験が浅い場合は紹介できる求人が限られることがあるため、未経験歓迎求人も扱うワークポートなどの併用が現実的です。",
  },
  {
    q: "ITコンサルへの転職に特化しているのですか？",
    a: "各転職メディアでは、ITエンジニアからITコンサルタントへのキャリアアップに強いサービスとして紹介される傾向があります。開発職を続けたい場合はその意向を初回に伝え、IT特化エージェントの併用も検討してください。",
  },
  {
    q: "対応エリアはどこですか？地方でも使えますか？",
    a: "公式によれば全国（47都道府県）対応で、フルリモート案件も多数とされています。地方在住でもリモート前提なら利用できる可能性があります。",
  },
  {
    q: "他社と併用してもいいですか？",
    a: "併用は可能です。一般に2〜3社の併用が推奨されており、IT特化のレバテックキャリアや、ハイクラス向けのビズリーチ・JACリクルートメントなどと組み合わせると比較材料が増えます。",
  },
];

const related = [
  { name: "レバテックキャリアの評判（IT特化）", href: "/review/levtech/" },
  { name: "アクシスコンサルティングの評判（コンサル特化）", href: "/review/axis-consulting/" },
  { name: "JACリクルートメントの評判（ハイクラス）", href: "/review/jac-recruitment/" },
  { name: "EDBエージェントの評判（IT特化）", href: "/review/edb-agent/" },
  { name: "転職サービス評判一覧（ハブ）", href: "/review/" },
  { name: "30代・40代の年収相場データ", href: "/salary/age-salary/" },
];

export default function TechgateExpertReview() {
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
          { name: "テックゲートエキスパート" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          テックゲートエキスパートの評判・口コミは？特徴・料金・対応【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ ハイクラスSE・ITコンサル転職の実力を公式情報と二次情報で検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          テックゲートエキスパートは、株式会社セルバが運営するハイクラスSE・ITエンジニア向けの転職エージェントです。本記事では公式情報と各転職メディアの紹介をもとに、30代・40代ミドルエンジニアの視点で特徴・料金・向き不向きを整理します。架空の体験談や星評価は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "テックゲートエキスパート公式サイト（株式会社セルバ）",
            "複数転職メディアの紹介・口コミ集計",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：実務経験のあるエンジニアの上流・コンサル志向のキャリアアップに強い</span>。一言でいえば「技術が分かる担当者と、ハイクラス・ITコンサル方面のキャリアアップを狙いたい経験者」向けのエージェントです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・技術が分かるコンサルタント配置（公式）。現場レベルの相談がしやすい。</li>
              <li>・ITエンジニア→ITコンサルのキャリアアップ文脈で紹介される傾向（二次情報）。</li>
              <li>・一方で実務経験が浅い人・純粋な開発職志向には不向き。その場合は併用が前提。</li>
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
            ※許可番号・対応エリア・サポート内容は公式に基づきます。求人数・提携数や勤続支援金の条件などは時期・条件により変動・要確認です。最新情報は公式サイトをご確認ください。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">テックゲートエキスパートの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 技術が分かるコンサルタント</h3>
              <p className="text-sm text-petrol-deep">
                公式は「技術が分かるキャリアコンサルタント」の配置を掲げています。開発環境・使用言語・チーム体制といった現場レベルの相談がしやすい点が、経験者にとっての強みです。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. ハイクラス・ITコンサル方面に強い</h3>
              <p className="text-sm text-petrol-deep">
                各転職メディアでは、ITエンジニアからITコンサルタントへのキャリアアップに特化したサービスとして紹介される傾向があります。上流・コンサル志向のミドル層と相性が良いといえます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. キャリア設計から年収交渉まで伴走</h3>
              <p className="text-sm text-petrol-deep">
                公式によればキャリアプランニング・書類添削・模擬面接・年収交渉・入社日調整までサポート。求職者は無料で利用でき、全国・フルリモート案件にも対応するとされています。
              </p>
            </div>
          </div>
        </section>

        {/* 良い評判 */}
        <section id="good" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良い評判の傾向（出典付き）</h2>
          <p className="text-sm text-slate-600 mb-4">
            以下は公式情報および各転職メディアの紹介・口コミ集計を傾向としてまとめたものです（原文転載ではありません）。
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

        {/* 気になる評判 */}
        <section id="bad" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">気になる評判の傾向と対処法</h2>
          <p className="text-sm text-slate-600 mb-4">
            公平性のため、留意点と現実的な対処法もまとめます。
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

        {/* ミドル視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアが使う場合の視点
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアの転職を扱う立場から、使い方を整理します。テックゲートエキスパートは実務経験者向けで、上流・ITコンサル方面のキャリアアップ文脈で語られることが多いサービスです。経験を武器にキャリアの幅を広げたいミドル層に向きます。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              開発経験を上流・コンサルへ展開する選択肢を検討するのに使えます。開発職継続も視野に入れるなら、IT特化のレバテックキャリアなどと併用して提案の方向性を比較するとよいでしょう。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              マネジメント・アーキテクト・PMO経験などミドルならではの強みは上流・コンサル方面で評価されやすい領域です。ハイクラス特化のJACリクルートメントやビズリーチと併用し、求人の幅と年収交渉の土台を確保するのが堅実です。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">利用の流れ</h2>
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
          <h2 className="text-xl font-bold mb-3">テックゲートエキスパートに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずは無料相談で、上流・ハイクラス方面の選択肢を確認してみませんか？
          </p>
          <a
            href={OFFICIAL_URL}
            rel="nofollow noopener"
            target="_blank"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            公式サイトで無料相談する
          </a>
        </section>

        {/* 関連記事 */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
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
