import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "EDBエージェントの評判・口コミは？特徴・料金・対応【2026年】";
const DESCRIPTION =
  "EDBエージェント（エンジニアデータバンク運営）の評判・特徴を30代40代ミドルエンジニア目線で検証。IT特化の転職支援の強み、現役アドバイザー、料金、向く人・向かない人、利用の流れ、FAQを出典付きで解説します。";
const URL = "/review/edb-agent/";
const OFFICIAL_URL = "https://engineer-data-bank.com/edb-agent/";

export const metadata: Metadata = {
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
  ["サービス名", "EDBエージェント（Engineer Data Bank エージェント）"],
  ["運営会社", "KICK ZA ISSUE株式会社（公式・2022年設立）"],
  ["サービス種別", "ITエンジニア特化型の転職支援エージェント（伴走型）"],
  ["得意領域", "ITエンジニア（未経験〜現役、ITコンサル・起業相談まで・公式）"],
  ["対象者", "未経験〜現役ITエンジニア、ITコンサル志望者など（公式）"],
  ["対応エリア", "要確認（IT特性上、大都市圏中心の傾向・二次情報）"],
  ["特徴", "国内最大級のエンジニアプラットフォーム運営／OB・OGとの1on1マッチング（公式）"],
  ["サポート", "キャリア相談・企業紹介・選考対策・ES/ケース対策・入社後サポート（公式）"],
  ["料金", "相談・登録は無料（企業側が手数料を負担・公式）"],
];

const goodReviews = [
  {
    title: "IT実務経験のあるアドバイザーが在籍",
    body: "公式によれば、アドバイザーはIT業界での実務経験があるメンバーで構成され、Big4・大手コンサル出身者やシステム開発の参画経験を持つ人材が在籍するとされている。技術・キャリアの相談がしやすい点が紹介される傾向がある。",
  },
  {
    title: "現場のOB・OGの生の声を聞ける",
    body: "公式は、国内最大級のエンジニアプラットフォーム運営を背景に、応募先で実際に働いていた人から話を聞けるOB/OGとの1on1マッチングを強みとして挙げている。",
  },
  {
    title: "転職を強制しない求職者第一の方針",
    body: "公式は「意図しない転職を強制しない」と明言しており、応募や内定承諾の意思を求職者に委ねる方針が紹介されている。中長期のキャリア相談に使いやすいという評価の傾向がある。",
  },
];

const badReviews = [
  {
    title: "口コミの蓄積がまだ少ない",
    body: "2022年設立と新しいため、独立系の口コミプラットフォーム上の声の蓄積は大手と比べると限定的という指摘が各転職メディアで見られる。",
    cope: "判断材料が少ない場合は、面談時に得意領域・紹介求人の傾向・アドバイザーの経歴を直接確認するとよい。大手IT特化サービスと併用して比較する前提で使うと判断しやすい。",
  },
  {
    title: "IT以外の職種には対応しない",
    body: "ITエンジニアに特化しているため、他職種への転職には対応していないという指摘がある。",
    cope: "IT以外も視野に入れる場合は総合型エージェント（dodaなど）を併用する。IT領域に絞るならEDBエージェントの専門性が活きる。",
  },
  {
    title: "求人は大都市圏中心の傾向",
    body: "IT業界の特性上、求人が大都市圏中心になりやすいという傾向が二次情報で指摘されている。対応エリアは公式に明記が確認できなかった。",
    cope: "地方在住の場合は、面談前に居住地・希望勤務地（リモート希望含む）を伝え、紹介可能な求人があるか確認しておくとよい。",
  },
];

const fitYes = [
  "IT領域に絞ってキャリア相談・転職を進めたい",
  "現場のOB・OGの生の声を聞いてから判断したい",
  "実務経験のあるアドバイザーと会話したい",
  "中長期のキャリア（コンサル・起業含む）も相談したい",
];

const fitNo = [
  "豊富な口コミ実績の蓄積を重視したい",
  "IT以外の職種を探している",
  "対面の地方サポートを最優先したい（対応エリア要確認）",
  "とにかく求人数の多さを最優先したい",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録・相談",
    body: "公式サイトから登録。在職中でも登録でき、情報収集目的の相談も可能。",
  },
  {
    step: "STEP2",
    title: "キャリアカウンセリング",
    body: "IT実務経験のあるアドバイザーと面談し、経験・希望条件・キャリアの方向性をすり合わせる。",
  },
  {
    step: "STEP3",
    title: "企業紹介・OB/OGマッチング",
    body: "条件に合う企業の紹介を受ける。希望に応じて、応募先で働いていたOB・OGとの1on1で生の声を確認できる。",
  },
  {
    step: "STEP4",
    title: "選考対策・面接",
    body: "ES添削・面接対策・ケース対策などのサポートを受け、複数企業との面接調整を進める。",
  },
  {
    step: "STEP5",
    title: "内定・入社・入社後サポート",
    body: "内定後の意思決定は求職者に委ねられる。入社後も継続的なキャリアサポートを受けられる。",
  },
];

const faqs = [
  {
    q: "EDBエージェントの料金はかかりますか？",
    a: "求職者は無料です。キャリア相談・企業紹介・選考対策まで費用はかかりません。費用は採用企業側が手数料として負担する仕組みです。",
  },
  {
    q: "未経験でも利用できますか？",
    a: "公式は未経験から現役エンジニア、ITコンサル志望や起業相談まで幅広く対応するとしています。未経験のIT転職から経験者のキャリアアップまで相談できます。",
  },
  {
    q: "30代・40代のミドルエンジニアでも使えますか？",
    a: "IT特化で実務経験のあるアドバイザーが在籍するため、経験者のキャリア相談に向いています。ただし新しいサービスで口コミの蓄積が限定的なため、大手IT特化サービスと併用して比較するのが現実的です。",
  },
  {
    q: "OB・OGの話を聞ける仕組みとは何ですか？",
    a: "公式によれば、国内最大級のエンジニアプラットフォーム運営を背景に、応募を検討する企業で実際に働いていた人から話を聞けるOB/OGとの1on1マッチングを提供しています。入社前のミスマッチを減らす狙いがあります。",
  },
  {
    q: "対応エリアはどこですか？地方でも使えますか？",
    a: "公式での明確な対応エリアの記載は確認できませんでした。IT業界の特性上、求人は大都市圏中心になる傾向があるため、地方在住の方は対応可否（リモート求人を含む）を面談前に確認することをおすすめします。",
  },
  {
    q: "他社と併用してもいいですか？",
    a: "併用は可能です。一般に2〜3社の併用が推奨されており、IT特化のレバテックキャリアや総合型のdodaなどと組み合わせると求人の幅と比較材料が増えます。",
  },
];

const related = [
  { name: "レバテックキャリアの評判（IT特化）", href: "/review/levtech/" },
  { name: "ユニゾンキャリアの評判（IT/Web特化）", href: "/review/unison-career/" },
  { name: "テックゲートエキスパートの評判（ハイクラス・コンサル）", href: "/review/techgate-expert/" },
  { name: "マイナビIT AGENTの評判", href: "/review/mynavi-it/" },
  { name: "転職サービス評判一覧（ハブ）", href: "/review/" },
  { name: "30代・40代の年収相場データ", href: "/salary/age-salary/" },
];

export default function EdbAgentReview() {
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
          { name: "EDBエージェント" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          EDBエージェントの評判・口コミは？特徴・料金・対応【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ IT特化転職支援の実力を公式情報と二次情報で検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          EDBエージェントは、国内最大級のエンジニアプラットフォーム「エンジニアデータバンク（EDB）」を運営する企業によるITエンジニア特化型の転職支援サービスです。本記事では公式情報と各転職メディアの紹介をもとに、30代・40代ミドルエンジニアの視点で特徴・料金・向き不向きを整理します。架空の体験談や星評価は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "EDBエージェント公式サイト（エンジニアデータバンク）",
            "複数転職メディアの紹介記事",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：IT領域に絞り、現場の声を聞いて納得して進めたい人向け</span>。一言でいえば「実務経験のあるアドバイザーやOB・OGと話しながら、押し売りなくIT転職を検討したい人」向けのエージェントです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・IT特化で、実務経験のあるアドバイザーが在籍（公式）。</li>
              <li>・OB/OGとの1on1で現場の生の声を聞ける（公式）。相談・登録は無料。</li>
              <li>・一方で新しいサービスで口コミの蓄積は限定的。大手との併用比較が前提。</li>
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
            ※運営会社・サービス内容は公式に基づきます。対応エリアなど一部は公式に明記がなく「要確認」としています。最新情報は公式サイトをご確認ください。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">EDBエージェントの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 実務経験のあるアドバイザー</h3>
              <p className="text-sm text-petrol-deep">
                公式によれば、アドバイザーはIT業界での実務経験があるメンバーで構成され、Big4・大手コンサル出身者やシステム開発の参画経験者が在籍するとされています。技術・キャリアの相談がしやすいのが強みです。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. OB・OGとの1on1マッチング</h3>
              <p className="text-sm text-petrol-deep">
                国内最大級のエンジニアプラットフォーム運営を背景に、応募を検討する企業で実際に働いていた人から話を聞ける仕組みを掲げています。入社前のミスマッチを減らしやすい点が特徴です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 転職を強制しない方針</h3>
              <p className="text-sm text-petrol-deep">
                公式は「意図しない転職を強制しない」と明言し、応募・内定承諾の意思を求職者に委ねるとしています。中長期のキャリア相談にも使いやすいスタンスです。
              </p>
            </div>
          </div>
        </section>

        {/* 良い評判 */}
        <section id="good" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良い評判の傾向（出典付き）</h2>
          <p className="text-sm text-slate-600 mb-4">
            以下は公式情報および各転職メディアの紹介を傾向としてまとめたものです（原文転載ではありません）。
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
              当サイトはミドルエンジニアの転職を扱う立場から、使い方を整理します。EDBエージェントはIT特化で、実務経験のあるアドバイザーやOB・OGの声を活かせる点が、入社後のミスマッチを避けたいミドル層に向きます。一方で新しいサービスで口コミの蓄積が限定的なため、大手と併用して比較するのが前提です。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              本命をIT特化のレバテックキャリアなどに置きつつ、EDBエージェントはOB/OGの声で社風・現場を確認する補完先として使うと、納得感を持って意思決定しやすくなります。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              管理職・アーキテクト経験など強みを前面に出しつつ、ハイクラス特化のJACリクルートメントやビズリーチを軸に据えるのが堅実です。EDBエージェントは現場理解を深める併用先として活用するとよいでしょう。
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
          <h2 className="text-xl font-bold mb-3">EDBエージェントに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずは無料相談で、現場の声を聞きながら選択肢を確認してみませんか？
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
