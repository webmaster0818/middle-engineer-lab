import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "レバテックダイレクトの評判・口コミは？特徴・料金・対応【2026年】";
const DESCRIPTION =
  "レバテックダイレクト（レバレジーズ）の評判・特徴を30代40代ミドルエンジニア目線で検証します。スカウト型の仕組み、エージェント型のレバテックキャリアとの違い、料金、向く人・向かない人、利用の流れ、FAQを出典を明記して解説します。";
const URL = "/review/levtech-direct/";
const OFFICIAL_URL = "https://levtech-direct.jp/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/levtech-direct/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "要点（どんな人向けか）" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "diff", label: "レバテックキャリア（エージェント型）との違い" },
  { id: "strength", label: "特徴・強み" },
  { id: "reputation", label: "口コミ・評判の掲載状況" },
  { id: "caution", label: "注意点と対処法" },
  { id: "middle", label: "30代・40代エンジニアの活用視点" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "利用の流れ" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["サービス名", "レバテックダイレクト"],
  ["運営会社", "レバテック株式会社（レバレジーズグループ）"],
  ["サービス種別", "IT/Web特化のスカウト型転職サービス（登録して待つタイプ）"],
  ["得意領域", "IT/Webエンジニア・Webデザイナー等のIT専門職"],
  ["対象者", "公式アプリの説明では「未経験からハイクラスの方まで」。スカウトは企業がプロフィールを見て送るため、届く件数は経歴により異なります"],
  ["対応エリア", "要確認（レバテック系は首都圏中心の傾向。リモート求人あり）"],
  ["仕組み", "登録後、企業から直接スカウトが届きます。マイページで企業と直接やり取り（二次情報）"],
  ["サポート", "スカウト受信・直接応募。エージェント型の書類添削等は限定的（二次情報）"],
  ["料金", "求職者は無料（費用は採用企業側が負担）"],
];

const ratingRows: { source: string; detail: string; result: string; url: string }[] = [
  {
    source: "App Store（日本）",
    detail: "アプリ「IT転職なら レバテックダイレクト エンジニアの転職アプリ」／開発元 Leverages Co., Ltd.（2024年1月9日公開）",
    result: "4.0（77件）※件数が100件未満のため参考値",
    url: "https://apps.apple.com/jp/app/id6462660917",
  },
  {
    source: "Google Play（日本）",
    detail: "同名アプリ／提供元 レバテック株式会社",
    result: "2.7（25件）※件数が少ないため参考値。ダウンロード数は「5,000+」と表示",
    url: "https://play.google.com/store/apps/details?id=jp.levtech.direct.mobile&hl=ja&gl=JP",
  },
  {
    source: "Qiita Job Change",
    detail: "口コミ欄（Qiita会員アンケート・2025年12月回答）",
    result: "口コミ10件。属性と項目別評点が同じ投稿を同一回答者とみなすと6名分で、総合評点は4点が3名・3点が2名・2点が1名（平均3.3）",
    url: "https://jobs.qiita.com/levtech-direct/",
  },
  {
    source: "OUTSIDEMAGAZINE",
    detail: "利用者アンケート記事（調査期間2024年10月30日〜2025年10月31日）",
    result: "回答者数の記載がなく、記事内の点数（5.0）はおすすめランキングの点数で、利用者評点の平均との説明がないため評点として扱っていません",
    url: "https://outside.no-limit.careers/levtechdirect-reputation/",
  },
  {
    source: "みん評",
    detail: "レバテックダイレクトの掲載ページ",
    result: "確認できず（当サイトの取得環境からのアクセスが403で遮断）",
    url: "https://minhyo.jp/levtech-direct",
  },
];

const qiitaTopics: [string, string][] = [
  ["希望に合わないスカウト・SES企業からのスカウトが多いという指摘", "4件"],
  ["登録後は待つだけで効率よく活動が進むという評価", "2件"],
  ["企業と直接やり取りでき、選考が早く進むという評価", "2件"],
  ["幅広い業種の求人を閲覧できたという評価", "1件"],
  ["書類添削や経歴の取り込み機能が欲しいという要望", "1件"],
];

const officialCases: [string, string][] = [
  ["掲載件数（公式トップ「転職成功事例」）", "6件（CASE 01〜06）"],
  ["職種", "テストエンジニア／プロジェクトリーダー／ネットワークエンジニア／プロジェクトマネージャー／インフラエンジニア／フロントエンドエンジニア"],
  ["経験年数", "2年が2件・3年が3件・10年が1件"],
  ["転職前後の年収差（公式記載の値から当サイトが計算）", "＋80万円〜＋270万円（6件すべて年収増）"],
  ["年収が下がった事例・不満を扱う事例", "0件（すべて年収アップの事例）"],
];

const cautions = [
  {
    title: "希望に合わないスカウトも届く",
    body: "Qiita Job Change の口コミ10件のうち4件が、希望に合わないスカウトやSES企業からのスカウトが多いことを指摘しています。公式アプリの説明も、スカウトは「企業やエージェント」から届くと案内しています。",
    cope: "プロフィールに希望条件・NG条件を具体的に書き込むとミスマッチを減らせます。気になるスカウトのみ返信し、合わないものには返信しなくても問題ありません。",
  },
  {
    title: "エージェント型ほどの伴走サポートはない",
    body: "スカウト型のため、企業とはマイページで直接やり取りします。Qiita Job Change の口コミにも、履歴書・職務経歴書の添削機能を望む声が1件あります。",
    cope: "手厚いサポートが欲しい場合は、エージェント型のレバテックキャリアを併用します。スカウトで市場の反応を見つつ、選考対策はエージェントで補うと効率的です。",
  },
  {
    title: "公式の実績値は運営会社の集計",
    body: "公式トップは「全スカウトメールの95%が面接/面談確約の情熱スカウト」（2026年1月〜3月実績）と記載し、App Store のアプリ説明では「約93%」と記載しています。いずれも運営会社による集計で、時期により数値が異なります。転職成功事例6件も運営会社が選んだ事例です。",
    cope: "数値は対象期間を確認したうえで参考にし、実際に届くスカウトの内容（企業の業態・面接確約の有無・提示年収）で判断するのが確実です。",
  },
];

const fitYes = [
  "IT/Webの実務経験があり、市場の反応を見たい",
  "自分から大量に応募せず、待ちながら進めたい",
  "在職中で効率よく活動したい",
  "企業と直接やり取りして自分のペースで選考を進めたい",
];

const fitNo = [
  "書類添削・面接対策など手厚い伴走を最優先したい",
  "IT実務未経験で、スカウトを待つより伴走支援を受けたい",
  "対面の地方サポートを最優先したい（対応エリア要確認）",
  "ヘッドハンター経由の高年収スカウトだけを狙いたい（その場合はビズリーチ等）",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録・プロフィール作成",
    body: "公式サイトから登録し、経歴・スキル・希望条件を入力します。プロフィールを充実させるほど質の高いスカウトが届きやすくなります。",
  },
  {
    step: "STEP2",
    title: "スカウト受信",
    body: "登録後、関心を持った企業から直接スカウトが届きます。気になるスカウトを選んでやり取りを開始します。",
  },
  {
    step: "STEP3",
    title: "企業と直接やり取り・面接",
    body: "マイページ上で企業と直接やり取りし、面接・面談に進みます。公式は全スカウトメールの95%が面接/面談確約（2026年1月〜3月実績）と案内しています。自分から直接応募することも可能です。",
  },
  {
    step: "STEP4",
    title: "内定・入社",
    body: "選考を経て内定します。条件確認・入社日調整を行って完了します。手厚い交渉サポートが欲しい場合はエージェント型の併用が有効です。",
  },
];

const faqs = [
  {
    q: "レバテックダイレクトの料金はかかりますか？",
    a: "求職者は無料です。スカウトの受信・企業とのやり取り・選考まで費用はかかりません。費用は採用企業側が負担する仕組みです。",
  },
  {
    q: "レバテックキャリアとレバテックダイレクトの違いは何ですか？",
    a: "レバテックキャリアはアドバイザーが求人提案・書類添削・面接対策・年収交渉まで伴走する「エージェント型」、レバテックダイレクトは登録後に企業から直接スカウトが届きエージェントを介さずに進める「スカウト型」です。手厚いサポートを求めるならキャリア、自分のペースで待ちながら進めたいならダイレクトが向きます。",
  },
  {
    q: "未経験でも利用できますか？",
    a: "公式アプリの説明は「未経験からハイクラスの方まで」理想条件に近い求人に出会えるとしています。ただし、スカウトは企業がプロフィールを見て送るため、届く件数は経歴によって異なり、保証されるものではありません。経験が浅い場合は、書類添削や面接対策を受けられる伴走型のサービスを併用するのが現実的です。",
  },
  {
    q: "希望に合わないスカウトが多いと聞きますが？",
    a: "Qiita Job Change の口コミ10件（2025年12月のQiita会員アンケート回答）のうち4件が、希望に合わないスカウトやSES企業からのスカウトが多いことを指摘しています（2026年11月25日確認）。件数が少ないため全体の傾向とは言い切れませんが、プロフィールに希望条件・NG条件を具体的に書くとミスマッチを減らせます。合わないスカウトには返信しなくても問題ありません。",
  },
  {
    q: "対応エリアはどこですか？地方でも使えますか？",
    a: "レバテック系は首都圏中心の傾向があります（リモート求人あり）。具体的な対応エリアは時期により変わるため、地方在住の方は公式サイトでリモート求人を含めて確認することをおすすめします。",
  },
  {
    q: "他社と併用してもいいですか？",
    a: "併用は可能です。スカウト型のレバテックダイレクトで市場の反応を見つつ、エージェント型のレバテックキャリアで選考対策・年収交渉を補う使い分けが効率的です。高年収のヘッドハンター型を狙うならビズリーチの併用も有効です。",
  },
];

const related = [
  { name: "レバテックキャリアの評判（エージェント型・相互補完）", href: "/review/levtech/" },
  { name: "レバテックフリーランスの評判（独立向け）", href: "/review/levtech-freelance/" },
  { name: "ビズリーチの評判（ハイクラススカウト）", href: "/review/bizreach-it/" },
  { name: "Findyの評判（スキル可視化スカウト）", href: "/review/findy/" },
  { name: "転職サービス評判一覧（ハブ）", href: "/review/" },
  { name: "30代・40代の年収相場データ", href: "/salary/age-salary/" },
];

export default function LevtechDirectReview() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url={URL} dateModified="2026-11-25" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "評判・口コミ一覧", href: "/review/" },
          { name: "レバテックダイレクト" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          レバテックダイレクトの評判・口コミは？特徴・料金・対応【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年11月25日 ｜ IT/Web特化スカウト型サービスを公式情報と第三者の評点で検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          レバテックダイレクトは、レバレジーズグループが運営するIT/Web特化のスカウト型転職サービスです。同じレバテックブランドでもエージェント型の
          <Link href="/review/levtech/" className="text-blue-600 hover:underline">レバテックキャリア</Link>
          とは別商品で、登録後に企業から直接スカウトが届く「受動型」のタイプです。本記事では公式情報と、当サイトが評点と件数を確認できた第三者の情報（App Store・Google Play・Qiita Job Change）をもとに、30代・40代ミドルエンジニアの視点で違い・特徴・向き不向きを整理します。架空の体験談や星評価は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテックダイレクト公式サイト（2026年11月25日確認）",
            "App Store・Google Play（2026年11月25日確認）",
            "Qiita Job Change 口コミ欄（2026年11月25日確認）",
            "複数転職メディアの紹介記事（サービスの仕組み）",
          ]}
        />

        {/* 要点 */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">このような方におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：実務経験のあるエンジニアが、待ちながら効率的に活動したい場合に向くスカウト型です</span>。要約すると「IT/Webの経験者が、自分から大量応募せずに企業からのスカウトで選考を進めたい」場合のサービスです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・IT/Web特化のスカウト型です。登録後、企業から直接スカウトが届きます。</li>
              <li>・求職者は無料です。在職中でも効率的に活動しやすくなります。</li>
              <li>・伴走サポートは限定的です。手厚いサポートを求める場合は、エージェント型のレバテックキャリアとの併用をおすすめします。</li>
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
            ※サービス種別・運営会社・対象者は公式（公式サイト・公式アプリの説明）に基づきます。対応エリアやスカウトの仕組みの詳細は二次情報・時期により変動するため「要確認」としています。最新情報は公式サイトをご確認ください。
          </p>
        </section>

        {/* 違い */}
        <section id="diff" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            レバテックキャリア（エージェント型）との違い
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            同じレバテックブランドでも、レバテックダイレクトとレバテックキャリアはサービスの「型」が異なります。自分に合う型を選ぶことが第一歩です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["型", "スカウト型（登録して待つ）", "エージェント型（担当が伴走）"],
                  ["進め方", "企業から直接スカウト→直接やり取り", "アドバイザーが求人提案・調整"],
                  ["サポート", "限定的（自分主導）", "書類添削・面接対策・年収交渉まで"],
                  ["向く人", "経験者・自分のペースで進めたい", "手厚いサポートが欲しい"],
                ] as [string, string, string][]).map(([label, a, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-3 py-3 text-left font-medium text-slate-700 w-1/5 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-3 py-3 text-slate-600 border-b border-slate-200 align-top">
                      <span className="font-medium text-slate-700">ダイレクト：</span>
                      {a}
                    </td>
                    <td className="px-3 py-3 text-slate-600 border-b border-slate-200 align-top">
                      <span className="font-medium text-slate-700">キャリア：</span>
                      {b}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            両者は併用も可能です。詳しくは
            <Link href="/review/levtech/" className="text-blue-600 hover:underline">レバテックキャリアの評判</Link>
            もあわせてご確認ください。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">レバテックダイレクトの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 登録して待つスカウト型</h3>
              <p className="text-sm text-petrol-deep">
                登録後、関心を持った企業から直接スカウトが届きます。自分から大量に応募しなくても活動が進むため、在職中の経験者でも効率的に動けるのが特徴です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 企業と直接やり取りでスピーディー</h3>
              <p className="text-sm text-petrol-deep">
                企業側の関心が前提でやり取りが始まり、マイページ上で企業と直接コミュニケーションを取れます。公式は全スカウトメールの95%が面接/面談確約の「情熱スカウト」（2026年1月〜3月実績）と案内しています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. レバテックのIT/Web特化ネットワーク</h3>
              <p className="text-sm text-petrol-deep">
                レバテックブランドのIT/Web特化の企業ネットワークを背景にしたサービスです。公式は約60の職種・90のスキルで求人を検索できると案内しています。エージェント型のレバテックキャリアやフリーランス向けのレバテックフリーランスと使い分けられます。
              </p>
            </div>
          </div>
        </section>

        {/* 口コミ・評判の掲載状況 */}
        <section id="reputation" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">レバテックダイレクトの口コミ・評判の掲載状況（2026年11月25日確認）</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed mb-4">
            <p>
              <span className="font-bold text-slate-700">第三者の評点：</span>
              当サイトで評点と件数を確認できたのは、公式アプリの App Store 評価4.0（77件）と Google Play 評価2.7（25件）、Qiita Job Change の口コミ欄（6名分・平均3.3）です。いずれも件数が100件未満のため参考値として扱ってください。アプリの評価は使い勝手を含む点数であり、スカウトサービスとしての評価とは一致しない場合があります。同じアプリでもストアによって評点に1.3点の差があります。
            </p>
          </div>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-3 py-2 text-left font-medium text-slate-700 border-b border-slate-200">確認先</th>
                  <th className="px-3 py-2 text-left font-medium text-slate-700 border-b border-slate-200">対象</th>
                  <th className="px-3 py-2 text-left font-medium text-slate-700 border-b border-slate-200">結果（2026年11月25日）</th>
                </tr>
              </thead>
              <tbody>
                {ratingRows.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-3 py-2 text-slate-700 border-b border-slate-200 align-top">
                      <a href={r.url} rel="nofollow noopener" target="_blank" className="text-petrol underline hover:no-underline">
                        {r.source}
                      </a>
                    </td>
                    <td className="px-3 py-2 text-slate-600 border-b border-slate-200 align-top">{r.detail}</td>
                    <td className="px-3 py-2 text-slate-600 border-b border-slate-200 align-top">{r.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mb-6">
            App Store の値は2026年11月25日に Apple の検索API（日本のストア）で取得し、開発元がレバレジーズグループ（Leverages Co., Ltd.）で、アプリの公式サイトURLが levtech-direct.jp であることを確認しています。Google Play は同日に公式アプリのページ（提供元 レバテック株式会社）を確認しました。口コミの本文は転載していません。
          </p>

          <h3 className="font-bold text-slate-800 mb-2 text-base">Qiita Job Change の口コミ10件の内容（当サイトで分類）</h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            Qiita Job Change の口コミ欄は、Qiita会員へのアンケート（2025年12月回答）です。投稿者の年代は25〜29歳が2名、30〜34歳が2名、35〜39歳が1名、45〜49歳が1名です（6名分）。10件のコメントを主な内容で分類すると次のとおりです。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {qiitaTopics.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-2/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mb-6">
            出典：
            <a href="https://jobs.qiita.com/levtech-direct/" rel="nofollow noopener" target="_blank" className="underline">Qiita Job Change「レバテックダイレクトの評判・口コミ」</a>
            （ページの更新日 2026年11月19日・2026年11月25日確認・分類は当サイト）。回答者は6名分と少数のため、利用者全体の傾向を示すものではありません。
          </p>

          <div className="space-y-3 text-sm text-slate-600 leading-relaxed mb-4">
            <p>
              <span className="font-bold text-slate-700">運営会社が掲載した声：</span>
              公式サイトのトップには「転職成功事例」として6件が掲載されています。運営会社が選んで掲載している事例であり、利用者全体の結果を表すものではありません。当サイトで数えた内訳は次のとおりです。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {officialCases.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400">
            出典：
            <a href="https://levtech-direct.jp/" rel="nofollow noopener" target="_blank" className="underline">レバテックダイレクト公式サイト トップ「転職成功事例」</a>
            （2026年11月25日確認・集計は当サイト）。
          </p>
        </section>

        {/* 注意点 */}
        <section id="caution" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">注意点と対処法</h2>
          <p className="text-sm text-slate-600 mb-4">
            上記の口コミと公式の説明をもとに、利用前に確認しておきたい点と対処法をまとめます。
          </p>
          <div className="space-y-4">
            {cautions.map((r, i) => (
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
              当サイトはミドルエンジニアの転職を扱う立場から、使い方を整理します。レバテックダイレクトはスカウト型のため、まずは登録して市場の反応（どんな企業から、どんな条件のスカウトが届くか）を確認する「市場価値チェック」の入口として使いやすいサービスです。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              使用技術・担当工程・成果などの実務経験をプロフィールに具体的に書くことで、企業がスカウトを判断する材料を増やせます。ダイレクトで反応を見つつ、選考対策や年収交渉はエージェント型のレバテックキャリアで補う併用が効率的です。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              スカウト型は届く量が経歴に左右されやすいため、ダイレクト単独に頼りすぎず、ハイクラス特化のビズリーチや両面型のJACリクルートメントを併用して求人の幅と交渉力を確保するのが堅実です。マネジメント・アーキテクト経験はプロフィールで明確に打ち出してください。
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
          <h2 className="text-xl font-bold mb-3">レバテックダイレクトに無料登録する</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずは登録して、どんな企業からスカウトが届くか市場の反応を確認してみませんか？
          </p>
          <a
            href={OFFICIAL_URL}
            rel="nofollow noopener"
            target="_blank"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            公式サイトで無料登録する
          </a>
        </section>

        {/* 評判・口コミの参照元 */}
        <section id="sources" className="mb-10 scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-3">評判・口コミの参照元</h2>
          <p className="text-xs text-slate-500 leading-relaxed mb-3">
            第三者の評点は、2026年11月25日時点で当サイトが評点と件数を確認できたもののみを掲載しています。口コミは件数と内容の分類のみを掲載し、本文は転載していません。最終確認日：2026年11月25日。
          </p>
          <ul className="text-sm space-y-2 text-slate-600 list-disc pl-5">
            <li>
              <a href={OFFICIAL_URL} rel="nofollow noopener" target="_blank" className="text-petrol underline hover:no-underline">
                レバテックダイレクト公式サイト（サービスの特徴・面接/面談確約の実績・転職成功事例）
              </a>
            </li>
            <li>
              <a href="https://apps.apple.com/jp/app/id6462660917" rel="nofollow noopener" target="_blank" className="text-petrol underline hover:no-underline">
                App Store「IT転職なら レバテックダイレクト」（開発元 Leverages Co., Ltd.・4.0／77件）
              </a>
            </li>
            <li>
              <a href="https://play.google.com/store/apps/details?id=jp.levtech.direct.mobile&hl=ja&gl=JP" rel="nofollow noopener" target="_blank" className="text-petrol underline hover:no-underline">
                Google Play「IT転職なら レバテックダイレクト」（提供元 レバテック株式会社・2.7／25件）
              </a>
            </li>
            <li>
              <a href="https://jobs.qiita.com/levtech-direct/" rel="nofollow noopener" target="_blank" className="text-petrol underline hover:no-underline">
                Qiita Job Change｜レバテックダイレクトの評判・口コミ（口コミ10件・2025年12月アンケート回答）
              </a>
            </li>
          </ul>
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
