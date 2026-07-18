import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "ウズキャリITの評判・口コミ｜30代40代エンジニア向けに正直解説";
const DESCRIPTION =
  "ウズキャリIT（UZUZ IT）の評判・口コミを検証。20代・第二新卒/既卒に特化したIT就職支援で、手厚いサポートや定着率97%が強み。一方で主対象は19〜29歳のため、30代・40代には合致しにくい点を正直に解説し、代替サービスも案内します。";
const URL = "/review/uzuz-it/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/uzuz-it/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（30-40代には正直に）" },
  { id: "age", label: "【重要】主対象は20代。30-40代は対象外気味" },
  { id: "basic", label: "基本データ表（2026年時点）" },
  { id: "strength", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "middle", label: "30代・40代が検討する場合の現実的な判断" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から内定までの5ステップ" },
  { id: "compare", label: "30-40代向けの代替サービス" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "株式会社UZUZ（ウズウズ）"],
  ["サービス種別", "20代（第二新卒・既卒・フリーター）特化のIT就職／転職エージェント"],
  ["主対象年代", "20代中心（公式表記は19〜29歳）。利用者平均年齢24.5歳・22〜27歳が85.7%（二次情報）"],
  ["対応エリア", "首都圏／大阪／福岡／名古屋中心（地方案件はほぼなし）"],
  ["未経験対応", "あり（IT基礎学習コンテンツを提供。未経験からのIT就職に強い）"],
  ["内定率", "86%以上（二次情報）"],
  ["定着率", "入社後定着率97%（二次情報）"],
  ["サポート", "1人あたりの時間が一般の数倍と手厚い（カウンセラーの多くが既卒・第二新卒出身）"],
  ["料金", "求職者無料"],
];

const goodReviews = [
  {
    title: "1人あたりのサポートが非常に手厚い",
    body: "talentsquareやキャリア協会等の口コミ系では、1人あたりのサポート時間が一般的な転職エージェントより大幅に長く、面接対策も企業ごとに複数回受けられたという傾向の声が見られる。未経験・社会人経験が浅い20代でも安心して進められたという感想が確認できる。",
  },
  {
    title: "未経験からのIT就職に強く定着率が高い",
    body: "イーデス等の口コミ系では、IT基礎の学習コンテンツが用意され、未経験からエンジニア就職を目指せる点が評価されている。入社後定着率97%・内定率86%以上という二次情報もあり、ブラック企業を排除する姿勢も挙げられている。",
  },
  {
    title: "相談しやすい・近い距離感",
    body: "在籍カウンセラーの多くが既卒・第二新卒出身で年齢も近く、相談しやすいという傾向の声が見られる。社会人経験やキャリアに不安のある20代にとって、心理的なハードルが低い点が支持されている。",
  },
];

const badReviews = [
  {
    title: "30代以上は対象になりにくい",
    body: "公式が主対象を「19〜29歳」と明記しており、利用者の85.7%が22〜27歳（二次情報）という構成です。複数の口コミ系メディアでも、30代以上は登録申請を断られる可能性が高い・案件が合いにくいという指摘が見られます。これは欠点というより、サービスの対象設計の問題です。",
    cope: "30代・40代のエンジニアは、本サービスではなくミドル層を主対象とした転職エージェントを使うのが現実的。当サイトの30-40代向け比較やIT特化エージェントのレビューを参照してください。",
  },
  {
    title: "対応エリアが都市部中心",
    body: "首都圏・大阪・福岡・名古屋が中心で、地方の案件はほぼないという傾向の声が見られる。地方在住者には選択肢が限られる。",
    cope: "地方在住の場合は、全国対応かつリモート求人を扱うエージェントの併用を検討する。リモート前提なら都市部の求人にも応募できる場合がある。",
  },
  {
    title: "経験者のハイクラス転職には不向き",
    body: "第二新卒・既卒・未経験のIT就職に強い反面、実務経験を積んだエンジニアの年収アップ・ハイクラス転職には案件が合いにくいという傾向の声が見られる。",
    cope: "実務経験のある30代・40代は、年収アップや専門性を活かせる経験者向けエージェント（レバテックキャリア、ウィルオブテック、ビズリーチ等）を使うのが適切。",
  },
];

const fitYes = [
  "20代（第二新卒・既卒・フリーター）でIT就職を目指す人",
  "未経験からエンジニアになりたい20代",
  "手厚いサポートを受けながら進めたい",
  "首都圏・大阪・福岡・名古屋エリアで働きたい",
  "近い距離感で相談できる環境を求める若手",
];

const fitNo = [
  "30代・40代の実務経験のあるエンジニア（主対象外）",
  "年収アップ・ハイクラス転職を狙いたい経験者",
  "地方の対面サポートを最優先したい",
  "フリーランス・業務委託で働きたい",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録（約1〜3分）",
    body: "公式サイトから登録。20代・第二新卒・既卒・未経験など現在の状況を入力する。",
  },
  {
    step: "STEP2",
    title: "キャリアカウンセリング",
    body: "既卒・第二新卒出身のカウンセラーと面談。時間をかけて希望や不安をすり合わせる。未経験の場合はIT基礎学習の案内も受けられる。",
  },
  {
    step: "STEP3",
    title: "求人紹介",
    body: "IT企業を中心に求人を紹介。ブラック企業を排除する姿勢で、未経験歓迎の求人も含めて提案を受ける。",
  },
  {
    step: "STEP4",
    title: "選考対策・面接",
    body: "企業ごとに複数回の面接対策を受けて選考へ。1人あたりの時間が長く、手厚いフィードバックが特徴。",
  },
  {
    step: "STEP5",
    title: "内定・入社・定着フォロー",
    body: "内定後は条件確認や入社準備をサポート。入社後の定着率97%（二次情報）という数値に表れる定着フォローも受けられる。",
  },
];

const faqs = [
  {
    q: "ウズキャリITは30代・40代でも使えますか？",
    a: "正直にお伝えすると、ウズキャリITの主対象は20代（公式表記は19〜29歳）で、利用者の85.7%が22〜27歳（二次情報）です。30代以上は登録申請を断られる可能性が高く、当サイトの中心読者である30代・40代の実務経験者には合致しにくいサービスです。経験のある30代・40代は、ミドル層やIT経験者を主対象とした転職エージェントを使うことをおすすめします。",
  },
  {
    q: "未経験からエンジニアになれますか？",
    a: "20代であれば、未経験からのIT就職に強いのが特徴です。IT基礎の学習コンテンツが用意され、内定率86%以上・定着率97%（いずれも二次情報）という実績があります。ただしこれはあくまで20代・第二新卒・既卒向けの話です。",
  },
  {
    q: "どんな会社が運営していますか？",
    a: "株式会社UZUZ（ウズウズ）が運営しています。20代の第二新卒・既卒・フリーター・新卒に特化した人材紹介・研修支援を手がける企業で、ウズキャリITはそのIT領域に特化したサービスです。",
  },
  {
    q: "サポートが手厚いとは具体的にどういうことですか？",
    a: "1人あたりのサポート時間が一般的な転職エージェントの数倍とされ、面接対策を企業ごとに複数回実施するなど、丁寧な伴走が特徴です。カウンセラーの多くが既卒・第二新卒出身で、年齢の近い距離感で相談しやすい点も挙げられます。",
  },
  {
    q: "地方在住でも使えますか？",
    a: "対応エリアは首都圏・大阪・福岡・名古屋が中心で、地方の案件はほぼないとされています。地方在住の場合は、全国対応やリモート求人を扱うエージェントの併用を検討してください。",
  },
  {
    q: "経験者の年収アップ転職には向きますか？",
    a: "向きません。ウズキャリITは未経験・第二新卒・既卒のIT就職に強いサービスで、実務経験を積んだエンジニアの年収アップ・ハイクラス転職には案件が合いにくい傾向です。経験者の年収アップは、レバテックキャリアやウィルオブテック、ビズリーチなどが適しています。",
  },
  {
    q: "登録は無料ですか？",
    a: "求職者は無料です。カウンセリング・求人紹介・選考対策・定着フォローまで費用はかかりません。費用は採用企業側が負担します。",
  },
];

const related = [
  { name: "レバテックキャリアの評判（IT経験者向け）", href: "/review/levtech/" },
  { name: "ウィルオブテックの評判（経験者・年収UP）", href: "/review/willof-tech/" },
  { name: "ワークポートの評判（未経験も対応）", href: "/review/workport/" },
  { name: "30代向けエージェント比較", href: "/compare/30s-agents/" },
  { name: "40代向けエージェント比較", href: "/compare/40s-agents/" },
  { name: "未経験者向けエージェント比較", href: "/compare/inexperienced/" },
];

export default function UzuzItReview() {
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
          { name: "ウズキャリIT" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ウズキャリITの評判・口コミ【30代・40代には正直に解説】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ 20代特化のIT就職支援を、当サイト読者（30-40代）向けに誠実に検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          ウズキャリIT（UZUZ IT）は、株式会社UZUZが運営する<span className="font-bold">20代（第二新卒・既卒・フリーター）特化のIT就職／転職エージェント</span>です。手厚いサポートと未経験からのIT就職に強みがあります。ただし、当サイトの中心読者である30代・40代の実務経験者にとっては<span className="font-bold">主対象から外れる</span>サービスです。本記事ではその点を最初に正直にお伝えしたうえで、評判・口コミを出典付きで整理し、30-40代向けの代替も案内します。架空の体験談は掲載しません。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "ウズキャリIT／UZUZ公式サイト",
            "talentsquare",
            "イーデス転職",
            "キャリア協会",
            "二次集計値",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：当サイト読者（30-40代）には正直に</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：20代・未経験のIT就職には優秀。ただし30-40代の経験者は対象外気味</span>。一言でいえば「20代の第二新卒・既卒・未経験から、手厚いサポートでITエンジニアを目指す人」向けのサービスです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・主対象は20代（公式表記19〜29歳）。利用者の85.7%が22〜27歳（二次情報）。</li>
              <li>・サポートが手厚く、未経験IT就職に強い。内定率86%以上・定着率97%（二次情報）。</li>
              <li>・実務経験のある30代・40代には案件が合いにくい。代替サービスを後半で案内。</li>
            </ul>
          </div>
        </section>

        {/* 年代の注意（最重要） */}
        <section id="age" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            【重要】主対象は20代。30-40代は対象外気味です
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              ウズキャリITの主対象は<span className="font-bold">20代（公式表記は19〜29歳）</span>です。利用者の平均年齢は24.5歳、22〜27歳が85.7%を占めるという二次情報があり、30代以上は<span className="font-bold">登録申請を断られる可能性が高い</span>とされています。当サイトが扱う30代・40代の実務経験のあるエンジニアにとっては、年代の面でミスマッチが起きやすいサービスです。
            </p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            これは「サービスが悪い」という話ではなく、<span className="font-bold">対象設計の問題</span>です。ウズキャリITは20代・未経験のIT就職支援として完成度が高く、その層には自信を持っておすすめできます。一方で、すでに実務経験を積み年収アップやハイクラス転職を狙う30代・40代は、本記事後半で紹介するミドル層向け・IT経験者向けのエージェントを使うほうが、案件・サポートの両面で合致します。誠実に申し上げて、当サイト読者の多くは「対象外」に該当する点をご理解ください。
          </p>
        </section>

        {/* 基本データ */}
        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ表（2026年時点）</h2>
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
            ※運営会社・主対象年代・未経験対応は公式情報、平均年齢・内定率・定着率・年齢構成は二次集計値です。求人数・実績は時期により変動します。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ウズキャリITの特徴・強み（主に20代向け）</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 1人あたりのサポートが非常に手厚い</h3>
              <p className="text-sm text-petrol-deep">
                1人あたりのサポート時間が一般的な転職エージェントの数倍とされ、面接対策を企業ごとに複数回実施するなど、丁寧な伴走が最大の特徴です。社会人経験が浅い20代でも安心して進めやすい設計です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 未経験からのIT就職に強い</h3>
              <p className="text-sm text-petrol-deep">
                IT基礎の学習コンテンツが用意され、未経験からエンジニア就職を目指せます。内定率86%以上・入社後定着率97%（いずれも二次情報）という実績があり、ブラック企業を排除する姿勢も掲げています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 近い距離感で相談しやすい</h3>
              <p className="text-sm text-petrol-deep">
                在籍カウンセラーの多くが既卒・第二新卒出身で年齢も近く、キャリアに不安のある20代でも相談しやすい点が支持されています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 20代・第二新卒・既卒に特化</h3>
              <p className="text-sm text-petrol-deep">
                運営の株式会社UZUZが20代特化の人材紹介・研修を専門としており、そのIT版がウズキャリITです。特化ゆえに20代のIT就職ノウハウが蓄積されている点が強みです（裏返すと30-40代には合致しにくい）。
              </p>
            </div>
          </div>
        </section>

        {/* 良い評判 */}
        <section id="good" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良い評判の傾向（出典付き）</h2>
          <p className="text-sm text-slate-600 mb-4">
            以下は口コミプラットフォーム上の声を傾向としてまとめたものです（原文転載ではありません）。主に20代利用者の評価である点に留意してください。
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

        {/* 悪い評判と対処法 */}
        <section id="bad" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">悪い評判の傾向と対処法</h2>
          <p className="text-sm text-slate-600 mb-4">
            公平性のため、ネガティブな傾向の声と、それぞれへの現実的な対処法もまとめます。特に年代に関する点は当サイト読者に直結します。
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

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代が検討する場合の現実的な判断
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアのキャリアを扱う立場から、誠実にお伝えします。ウズキャリITは20代・未経験のIT就職に最適化されたサービスであり、<span className="font-bold">実務経験のある30代・40代が登録しても、年代・案件の両面で合致しにくい</span>のが実情です。公式が主対象を19〜29歳と明記している以上、ミドル層が無理に使うメリットは小さいと考えます。
            </p>
            <p>
              <span className="font-bold text-slate-700">数少ない例外として検討の余地があるケース：</span>
              30代前半で、IT実務経験がほぼなく、未経験からエンジニアへ転身したい——という場合は、年齢条件が合えば相談する価値があるかもしれません。ただしこの場合も、30代以上は申請を断られる可能性があるため、まずは年齢制限のない未経験対応エージェントを優先するのが現実的です。
            </p>
            <p>
              <span className="font-bold text-slate-700">実務経験のある30代・40代の場合：</span>
              年収アップや専門性を活かす転職を狙うなら、本サービスではなく経験者・ミドル層向けのエージェントを使ってください。IT特化で年収アップに強い
              <Link href="/review/willof-tech/" className="text-petrol hover:underline">ウィルオブテック</Link>
              や
              <Link href="/review/levtech/" className="text-petrol hover:underline">レバテックキャリア</Link>
              、年代別の選び方は
              <Link href="/compare/30s-agents/" className="text-petrol hover:underline">30代向け比較</Link>
              ・
              <Link href="/compare/40s-agents/" className="text-petrol hover:underline">40代向け比較</Link>
              が参考になります。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">登録から内定までの流れ（5ステップ）</h2>
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

        {/* 代替サービス */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30-40代向けの代替サービス</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            実務経験のある30代・40代エンジニアには、ウズキャリITよりミドル層・経験者向けのエージェントが合います。目的別に使い分けてください。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["", "向く人・強み"],
                  ["ウズキャリIT（本記事）", "20代・未経験のIT就職。30-40代は対象外気味。"],
                  ["ウィルオブテック", "IT経験者の年収アップ。専属2名体制で手厚い。"],
                  ["レバテックキャリア", "IT特化で経験者の専門性を活かす転職。"],
                  ["ワークポート", "未経験も含め幅広く対応する総合型。"],
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
            <Link href="/review/willof-tech/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              ウィルオブテック（経験者・年収UP）の評判 →
            </Link>
            <Link href="/review/levtech/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              レバテックキャリア（IT特化）の評判 →
            </Link>
            <Link href="/compare/30s-agents/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              30代向けエージェント比較 →
            </Link>
            <Link href="/compare/40s-agents/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              40代向けエージェント比較 →
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

        {/* 評判・口コミの参照元 */}
        <section id="sources" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">評判・口コミの参照元</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            本記事の「良い評判／悪い評判」の傾向は、以下の口コミ・評判メディアで公開されている情報を参照し、傾向として要約したものです（原文・スコアの転載ではありません）。各ページは2026年7月に確認しています。
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://talentsquare.co.jp/career/uzuz-reputation/" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline font-medium">talentsquare（タレントスクエア）</a>
              <span className="text-slate-500"> ：UZUZ（ウズキャリ）の評判・口コミ解説</span>
            </li>
            <li>
              <a href="https://job.or.jp/uzuz-hyoban/" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline font-medium">一般社団法人キャリア協会</a>
              <span className="text-slate-500"> ：ウズキャリ（UZUZ）利用者の口コミ・レビュー</span>
            </li>
            <li>
              <a href="https://www.a-tm.co.jp/top/other/best-programming-school/uzuz-college/" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline font-medium">イーデス</a>
              <span className="text-slate-500"> ：ウズウズカレッジ（IT学習コンテンツ）の評判解説</span>
            </li>
          </ul>
          <p className="text-xs text-slate-400 mt-3">※外部サイトの内容・URLは変更される場合があります（最終確認：2026年7月）。数値は各サイトの記載時点のものです。</p>
        </section>

        {/* CTA（誠実に：20代向けと明記） */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">あなたの年代・経験に合うサービスを選ぶ</h2>
          <p className="text-blue-100 text-sm mb-4">
            ウズキャリITは20代・未経験のIT就職向けです。30-40代の経験者は、ミドル層向けエージェントの比較から始めましょう。
          </p>
          <Link href="/compare/30s-agents/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            30-40代向けの比較を見る
          </Link>
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
