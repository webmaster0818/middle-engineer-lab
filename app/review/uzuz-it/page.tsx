import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "ウズキャリITの評判・口コミ｜30代40代エンジニア向けに解説";
const DESCRIPTION =
  "ウズキャリIT（UZUZ IT）の評判・口コミを、口コミサイト等の掲載状況と公式サイト掲載の卒業生インタビュー51件の内訳で整理します。20代中心のIT就職支援で、30代・40代には合致しにくい点と代替サービスも案内します。";
const URL = "/review/uzuz-it/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/uzuz-it/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "要点（30-40代向け）" },
  { id: "age", label: "【重要】主対象は20代で、30-40代は主な対象外です" },
  { id: "basic", label: "基本データ表（2026年時点）" },
  { id: "strength", label: "特徴・強み" },
  { id: "reviews", label: "口コミ・評判の掲載状況（2026年11月21日確認）" },
  { id: "voices", label: "公式サイト掲載の利用者の声51件の内訳" },
  { id: "middle", label: "30代・40代が検討する場合の現実的な判断" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から内定までの5ステップ" },
  { id: "compare", label: "30-40代向けの代替サービス" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "株式会社UZUZ（ウズウズ）"],
  ["サービスの構成", "UZUZ COLLEGEの学習支援＋株式会社UZUZの就職支援（UZUZ COLLEGE公式FAQの説明）"],
  ["主対象年代", "UZUZの就業サポートは「20代の新卒、第二新卒、既卒、フリーター向け」。UZUZ COLLEGEの無料コース「ウズカレIT」は30歳以下が対象"],
  ["拠点", "東京（新宿）・大阪・旭川のオフィス（UZUZ会社概要）。ウズウズカレッジは完全オンライン（UZUZ COLLEGE公式FAQ）"],
  ["未経験対応", "あり（IT学習の教材を提供し、未経験からのIT就職を支援）"],
  ["定着率", "入社3ヶ月後の定着率96%（UZUZ公式・2024年5月までの実績）"],
  ["内定率", "公式サイトに数値の記載なし（「高い就職内定率」との表現のみ）"],
  ["料金", "求職者無料"],
];

const fitYes = [
  "20代（第二新卒・既卒・フリーター）でIT就職を目指す人",
  "未経験からエンジニアになりたい20代",
  "手厚いサポートを受けながら進めたい",
  "オンラインで学習と就職活動を進めたい",
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
    body: "公式サイトから登録します。20代・第二新卒・既卒・未経験など現在の状況を入力します。",
  },
  {
    step: "STEP2",
    title: "キャリアカウンセリング",
    body: "既卒・第二新卒出身のカウンセラーと面談します。時間をかけて希望や不安をすり合わせます。未経験の場合はIT基礎学習の案内も受けられます。",
  },
  {
    step: "STEP3",
    title: "求人紹介",
    body: "IT企業を中心に求人を紹介します。UZUZ COLLEGEは、過去の紹介実績で定着率が低かった企業を紹介リストから除外していると公式に記載しています。",
  },
  {
    step: "STEP4",
    title: "選考対策・面接",
    body: "応募企業ごとに面接対策を受けて選考に進みます。ウズカレITの公式ページには「納得いくまで何度も面接対策（平均5回）」と記載されています。",
  },
  {
    step: "STEP5",
    title: "内定・入社・定着フォロー",
    body: "内定後は条件確認や入社準備をサポートします。UZUZは入社3ヶ月後の定着率96%（2024年5月までの実績）を公表しており、入社後のキャリア相談も継続できるとしています。",
  },
];

const faqs = [
  {
    q: "ウズキャリITは30代・40代でも使えますか？",
    a: "株式会社UZUZの就業サポートは公式に「20代の新卒、第二新卒、既卒、フリーター向け」とされ、UZUZ COLLEGEの無料コース「ウズカレIT」は対象年齢を30歳以下としています。当サイトの中心読者である30代・40代の実務経験者には合致しにくいサービスです。経験のある30代・40代は、ミドル層やIT経験者を主対象とした転職エージェントを使うことをおすすめします。",
  },
  {
    q: "未経験からエンジニアになれますか？",
    a: "20代であれば、未経験からのIT就職を目指せる設計です。IT学習の教材が用意され、UZUZは入社3ヶ月後の定着率96%（2024年5月までの実績）を公表しています。内定率の数値は公式サイトに記載がありません。公式サイトに掲載された卒業生インタビュー51件も、未経験からIT職に就いた事例が中心です。ただしこれはあくまで20代・第二新卒・既卒向けの話です。",
  },
  {
    q: "どんな会社が運営していますか？",
    a: "株式会社UZUZ（ウズウズ）が運営しています。20代の第二新卒・既卒・フリーター・新卒に特化した人材紹介・研修支援を手がける企業で、ウズキャリITはそのIT領域に特化したサービスです。",
  },
  {
    q: "サポートが手厚いとは具体的にどういうことですか？",
    a: "UZUZは、一人ひとりの適性や希望に合わせた「オーダーメイド型」の就業サポートを掲げ、応募企業に合わせて面接対策を行うとしています（ウズカレITの公式ページでは面接対策は平均5回）。キャリアアドバイザーは就活での挫折や短期離職を経験した人であると公式に説明されています。",
  },
  {
    q: "地方在住でも使えますか？",
    a: "UZUZのオフィスは東京（新宿）・大阪・旭川にあり、ウズウズカレッジは完全オンラインで受講できると公式FAQに記載されています。紹介される求人の勤務地は、面談時に希望エリアの求人があるかを確認してください。地方での就職を希望する場合は、全国対応やリモート求人を扱うエージェントの併用も検討してください。",
  },
  {
    q: "経験者の年収アップ転職には向きますか？",
    a: "向きません。ウズキャリITは20代の未経験・第二新卒・既卒のIT就職を支援するサービスで、公式サイトの卒業生インタビュー51件も未経験からの就職・転職事例が中心です。実務経験を積んだエンジニアの年収アップには、レバテックキャリアやウィルオブテック、ビズリーチなど経験者向けのサービスが適しています。",
  },
  {
    q: "登録は無料ですか？",
    a: "求職者は無料です。カウンセリング・求人紹介・選考対策・定着フォローまで費用はかかりません。費用は採用企業側が負担します。",
  },
];

const related = [
  { name: "レバテックキャリアの評判（IT経験者向け）", href: "/review/levtech/" },
  { name: "ウィルオブテックの評判（経験者・年収アップ）", href: "/review/willof-tech/" },
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
          ウズキャリITの評判・口コミ【30代・40代向けに解説】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年11月21日（口コミ・評判の掲載状況と公式の実績値を再確認） ｜ 20代特化のIT就職支援を、当サイト読者（30-40代）向けに検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          ウズキャリIT（UZUZ IT）は、株式会社UZUZが運営する<span className="font-bold">20代（第二新卒・既卒・フリーター）特化のIT就職／転職エージェント</span>です。手厚いサポートと未経験からのIT就職に強みがあります。ただし、当サイトの中心読者である30代・40代の実務経験者にとっては<span className="font-bold">主対象から外れる</span>サービスです。本記事ではその点を最初に説明したうえで、口コミサイト等で評点・件数を確認できたかどうかと、公式サイトに掲載された利用者の声の内訳を出典つきで整理し、30-40代向けの代替も案内します。架空の体験談は掲載しません。
        </p>
        <DataNote
          surveyedAt="2026年11月21日"
          sources={[
            "株式会社UZUZ公式サイト（就業サポート・会社概要）",
            "UZUZ COLLEGE公式サイト（ウズカレIT・よくあるご質問・卒業生インタビュー）",
            "App Store検索API",
          ]}
        />

        {/* 要点 */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">当サイト読者（30-40代）への注意点</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：20代・未経験のIT就職に向いたサービスです。30-40代の経験者は主な対象から外れます</span>。要約すると「20代の第二新卒・既卒・未経験から、手厚いサポートでITエンジニアを目指す人」向けのサービスです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・UZUZの就業サポートは公式に「20代向け」、UZUZ COLLEGEの無料コース「ウズカレIT」は30歳以下が対象です。</li>
              <li>・口コミサイト・アプリストアで、評点と件数を確認できる掲載は見つかりませんでした（2026年11月21日確認）。</li>
              <li>・公式サイト掲載の卒業生インタビュー51件は、未経験からIT職に就いた事例が中心です。運営会社が選んで掲載している声です。</li>
              <li>・入社3ヶ月後の定着率96%（2024年5月までの実績）は公式の数値です。内定率の数値は公式に記載がありません。</li>
            </ul>
          </div>
        </section>

        {/* 年代の注意（最重要） */}
        <section id="age" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            【重要】主対象は20代で、30-40代は主な対象外です
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              就職支援を担う株式会社UZUZは、就業サポートを<span className="font-bold">「20代の新卒、第二新卒、既卒、フリーター向け」</span>と公式に記載しています。学習支援を担うUZUZ COLLEGEも、無料コース「ウズカレIT」の対象年齢を<span className="font-bold">30歳以下</span>としています。当サイトが扱う30代・40代の実務経験のあるエンジニアにとっては、年代の面でミスマッチが起きやすいサービスです。
            </p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            これは「サービスが悪い」という話ではなく、<span className="font-bold">対象設計の問題</span>です。ウズキャリITは20代・未経験のIT就職支援に特化しており、その層には適したサービスです。一方で、すでに実務経験を積み年収アップやハイクラス転職を狙う30代・40代は、本記事後半で紹介するミドル層向け・IT経験者向けのエージェントを使うほうが、案件・サポートの両面で合致します。当サイト読者の多くは「対象外」に該当する点をご理解ください。
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
            ※いずれも2026年11月21日に株式会社UZUZ公式サイト（uzuz.jp）とUZUZ COLLEGE公式サイト（uzuz-college.jp）で確認した内容です。以前掲載していた利用者の平均年齢・年齢構成・内定率は公式サイトで確認できなかったため削除し、定着率は公式の数値（96%）に改めました。実績は時期により変動します。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ウズキャリITの特徴・強み（主に20代向け）</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 個別に合わせた就業サポート</h3>
              <p className="text-sm text-petrol-deep">
                UZUZは一人ひとりの適性や希望に合わせた「オーダーメイド型」の就業サポートを掲げ、応募企業ごとに面接対策を行うとしています。ウズカレITの公式ページでは、面接対策は平均5回と記載されています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 未経験からのIT就職に強い</h3>
              <p className="text-sm text-petrol-deep">
                IT学習の教材が用意され、未経験からエンジニア就職を目指せます。UZUZは入社3ヶ月後の定着率96%（2024年5月までの実績）を公表しており、UZUZ COLLEGEは定着率が低かった企業を紹介リストから除外していると説明しています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 挫折や短期離職を経験したアドバイザー</h3>
              <p className="text-sm text-petrol-deep">
                UZUZは、キャリアアドバイザーが就活での挫折や短期離職を経験した人であると公式に説明しています。社会人経験やキャリアに不安のある20代が相談しやすいよう設計されたサービスです。
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

        {/* 口コミ・評判の掲載状況 */}
        <section id="reviews" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の掲載状況（2026年11月21日確認）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            ウズキャリITの利用者による評価を、評点と件数を確認できる形で探しました。結果は次のとおりです。評点・件数を確認できた第三者の掲載はなく、利用者の評価を数値で示すことは現時点ではできません。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["確認先", "結果（2026年11月21日）"],
                  ["みん評（minhyo.jp）", "アクセス時の自動確認画面により、当サイトの取得方法では内容を表示できませんでした。評点・件数は未確認です。"],
                  ["App Store・Google Play", "「UZUZ」「ウズキャリ」「ウズカレ」等で検索しましたが、株式会社UZUZ・UZUZ COLLEGEが提供するアプリは見つかりませんでした（App Storeは検索APIで確認）。"],
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
            以前の版では、口コミを紹介する解説記事の論調を「良い評判の傾向」「悪い評判の傾向」として要約していましたが、件数や評点の裏付けがないため削除しました。代わりに、次の節で公式サイトに掲載されている利用者の声を数えて内訳を示します。
          </p>
        </section>

        {/* 公式サイト掲載の利用者の声 */}
        <section id="voices" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">公式サイト掲載の利用者の声51件の内訳（2026年11月21日 当サイト集計）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            UZUZ COLLEGE公式サイトの「卒業生インタビュー」一覧（uzuz-college.jp/interview/）に掲載されている51件を数えました。<span className="font-bold">運営会社が選んで掲載している声であり、利用者全体の評価を示すものではありません。</span>また、UZUZ COLLEGEの説明では、ウズキャリITは就職支援を株式会社UZUZが担い、ウズカレITは学習から就職までUZUZ COLLEGEが担う点が異なります。下記はウズカレIT・資格取得コースの卒業生の声で、ウズキャリITの就職支援を受けた人に限ったものではありません。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["項目", "内訳"],
                  ["コース別", "ウズカレIT 24件、資格取得コース26件（CCNA 22件・LinuC 3件・Java 1件）、コース表示なし1件"],
                  ["掲載年", "2024年 39件、2025年 7件、2026年 5件"],
                  ["題名に年齢・年代の記載があるもの", "21歳・23歳・26歳・28歳（2件）・30代（2件）の計7件。その他の44件は題名に年齢の記載なし"],
                  ["内容（題名から判断できる範囲）", "ウズカレITの24件は、看護師・臨床検査技師・柔道整復師・美容師・書店員・アルバイトなどIT以外の仕事や、就業経験の浅い状態から、開発・インフラ系エンジニアに就職・転職した事例が中心です"],
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
            このほか、株式会社UZUZの就業サポートのページ（uzuz.jp/service/career-support/）には求職者の声が3件掲載されています（22歳・新卒、25歳・第二新卒、23歳・既卒）。いずれもIT職ではなく、メーカー・営業・経営企画アシスタントへの就職事例です。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            30代・40代の読者にとっての読み方としては、題名に年齢の記載がある事例は21〜28歳と30代で、内容は未経験からの就職・転職に集中しています。題名を見る限り、IT実務経験者が年収アップを目指した転職事例は見当たらない点が判断材料になります。
          </p>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代が検討する場合の現実的な判断
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアのキャリアを扱う立場から、判断の目安を整理します。ウズキャリITは20代・未経験のIT就職に最適化されたサービスであり、<span className="font-bold">実務経験のある30代・40代が登録しても、年代・案件の両面で合致しにくい</span>のが実情です。公式が就業サポートを20代向け、ウズカレITを30歳以下対象としている以上、ミドル層が無理に使うメリットは小さいと考えます。
            </p>
            <p>
              <span className="font-bold text-slate-700">数少ない例外として検討の余地があるケース：</span>
              30代前半で、IT実務経験がほぼなく、未経験からエンジニアへ転身したい——という場合は、年齢条件が合えば相談する価値があるかもしれません。ただしこの場合も、対象年齢（ウズカレITは30歳以下）に当てはまるかを事前に確認し、あわせて年齢制限のない未経験対応エージェントも検討するのが現実的です。
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
                  ["ウズキャリIT（本記事）", "20代・未経験のIT就職向け。30-40代は主な対象外。"],
                  ["ウィルオブテック", "IT経験者の年収アップ向け。専属2名体制。"],
                  ["レバテックキャリア", "IT特化で、経験者の専門性を活かす転職向け。"],
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
              ウィルオブテック（経験者・年収アップ）の評判 →
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

        {/* 出典 */}
        <section id="sources" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            本記事の数値・件数は、以下の公式ページで2026年11月21日に確認したものです。
          </p>
          <ul className="space-y-2 text-sm">
            {([
              ["https://uzuz.jp/service/career-support/", "株式会社UZUZ 就業サポート（対象・定着率96%・求職者の声3件）"],
              ["https://uzuz.jp/company/", "株式会社UZUZ 会社概要（所在地）"],
              ["https://uzuz-college.jp/faq/", "UZUZ COLLEGE よくあるご質問（ウズキャリITとウズカレITの違い・年齢・オンライン受講）"],
              ["https://uzuz-college.jp/it-shushoku/", "UZUZ COLLEGE ウズカレIT（30歳以下対象・面接対策平均5回・紹介先企業の選定）"],
              ["https://uzuz-college.jp/interview/", "UZUZ COLLEGE 卒業生インタビュー一覧（51件）"],
            ] as string[][]).map(([href, label], i) => (
              <li key={i}>
                <a href={href} rel="nofollow noopener" target="_blank" className="text-petrol hover:underline font-medium">{label}</a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-400 mt-3">※外部サイトの内容・URLは変更される場合があります（最終確認：2026年11月21日）。</p>
        </section>

        {/* CTA（20代向けと明記） */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">ご自身の年代・経験に合うサービスを選ぶ</h2>
          <p className="text-blue-100 text-sm mb-4">
            ウズキャリITは20代・未経験のIT就職向けです。30-40代の経験者は、ミドル層向けエージェントの比較から始めてください。
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
