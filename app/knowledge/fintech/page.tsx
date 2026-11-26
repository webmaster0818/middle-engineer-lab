import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "フィンテックとは｜意味・主な分野・日本の法律と金融庁の登録業者数【2026年】";
const DESCRIPTION =
  "フィンテック（FinTech）とは、ITを活用した金融サービスの革新を指す言葉です。金融安定理事会（FSB）の定義、決済・送金や暗号資産などの主な分野と根拠となる法律、金融庁の登録業者一覧を当サイトで集計した業者数を整理します。";
const URL = "/knowledge/fintech/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "フィンテックの定義" },
  { id: "fields", label: "主な分野と日本の法律" },
  { id: "count", label: "金融庁の登録業者数（当サイト集計）" },
  { id: "cashless", label: "キャッシュレス決済比率（2025年）" },
  { id: "career", label: "エンジニアにとってのフィンテック" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "フィンテックとは簡単に言うと何ですか？",
    a: "金融（Finance）と技術（Technology）を組み合わせた言葉で、ITを活用して金融サービスを新しくする動きや、そのサービスを指します。金融庁は「金融・IT融合の動き」と説明しています。スマートフォンでの送金、電子マネー、銀行口座と連携する家計簿サービス、暗号資産の取引などが代表的な例です。",
  },
  {
    q: "フィンテックの事業を始めるには、金融庁への登録が必要ですか？",
    a: "事業の内容によって異なります。金融庁のFinTechサポートデスクのFAQでは、銀行法・金融商品取引法・資金決済法などのどの規制にかかるかは個別具体的な事業内容に応じて判断され、内容によっては登録・届出が不要な場合もあると説明されています。たとえば送金は資金移動業、口座連携の家計簿サービスは電子決済等代行業、暗号資産の売買は暗号資産交換業の登録が必要と説明されています。",
  },
  {
    q: "日本で登録されているフィンテック関連の業者は何社ありますか？",
    a: "当サイトで金融庁の登録業者一覧を集計したところ、2026年10月31日現在で、電子決済等代行業者127、資金移動業者86、前払式支払手段（第三者型）発行者780、暗号資産交換業者27、金融サービス仲介業者25でした。電子決済手段等取引業者は2026年8月27日現在で2です。本記事で取り上げた登録の種類ごとの数であり、フィンテック企業の数そのものではない点にご留意ください。",
  },
  {
    q: "電子マネーやポイントはフィンテックの規制の対象ですか？",
    a: "あらかじめ対価を得て発行される電子マネーやポイントは、資金決済法の「前払式支払手段」に当たります。金融庁のFAQによると、発行者以外の店舗でも使える第三者型は事前の登録、発行者の店舗だけで使える自家型は未使用残高が基準日に1,000万円を超えた場合に届出が必要です。使用期限が6か月未満のものは規制の対象外です。",
  },
  {
    q: "日本のキャッシュレス決済比率はどのくらいですか？",
    a: "経済産業省によると、2025年のキャッシュレス決済比率は58.0％（162.7兆円）です。内訳はクレジットカード82.7％、デビットカード3.4％、電子マネー3.7％、コード決済10.2％でした。政府は2030年までに65％、将来的に80％を目標にしています。",
  },
  {
    q: "フィンテック企業に転職するには、どのような知識が役立ちますか？",
    a: "業務システムの開発経験に加えて、担当するサービスがどの法律の規制を受けるかを理解していると、要件定義や設計の場面で役立ちます。たとえば電子決済等代行業者には利用者情報の安全管理や銀行との契約締結が求められており、セキュリティや外部API連携の知識が業務に直結します。具体的な進め方は「フィンテック業界へのエンジニア転職ガイド」でご説明しています。",
  },
];

const fieldRows = [
  {
    field: "送金・決済",
    example: "スマートフォンでの個人間送金、オンライン決済",
    law: "資金決済法：資金移動業（第2条第2項）",
    procedure: "登録（第37条）。100万円を超える送金を扱う第一種は認可",
  },
  {
    field: "電子マネー・ポイント",
    example: "プリペイド型の電子マネー、ギフトカード",
    law: "資金決済法：前払式支払手段（第3条第1項）",
    procedure: "第三者型は登録（第7条）、自家型は一定額を超えると届出（第5条）",
  },
  {
    field: "口座連携・オープンAPI",
    example: "口座の残高・明細を集計する家計簿サービス、複数の振込をまとめて依頼するサービス",
    law: "銀行法：電子決済等代行業（第2条第21項）",
    procedure: "登録（第52条の61の2）",
  },
  {
    field: "暗号資産",
    example: "暗号資産の売買・交換、保管",
    law: "資金決済法：暗号資産（第2条第14項）・暗号資産交換業者（同第16項）",
    procedure: "登録（第63条の2）",
  },
  {
    field: "ステーブルコイン",
    example: "法定通貨建ての電子決済手段の売買・交換",
    law: "資金決済法：電子決済手段（第2条第5項）・電子決済手段等取引業者（同第12項）",
    procedure: "登録（第62条の3）",
  },
  {
    field: "金融サービスの仲介",
    example: "預金・保険・証券・ローンをまとめて案内するアプリ",
    law: "金融サービスの提供及び利用環境の整備等に関する法律：金融サービス仲介業（第11条第1項）",
    procedure: "登録（第12条）",
  },
  {
    field: "投資・資産運用",
    example: "投資型クラウドファンディング、ロボアドバイザー、有価証券のトークン化",
    law: "金融商品取引法",
    procedure: "サービスの内容に応じて金融商品取引業の登録など",
  },
  {
    field: "保険（インシュアテック）",
    example: "保険の引受け・募集を伴うサービス",
    law: "保険業法",
    procedure: "保険業の免許、少額短期保険業の登録、保険募集の登録など",
  },
];

const countRows = [
  { category: "電子決済等代行業者", law: "銀行法", count: "127", asOf: "2026年10月31日", note: "関東財務局110・近畿財務局6など" },
  { category: "資金移動業者", law: "資金決済法", count: "86", asOf: "2026年10月31日", note: "第一種の印がある業者9、第二種の印がある業者84（重複あり）" },
  { category: "前払式支払手段（第三者型）発行者", law: "資金決済法", count: "780", asOf: "2026年10月31日", note: "関東財務局304・東北財務局98など" },
  { category: "暗号資産交換業者", law: "資金決済法", count: "27", asOf: "2026年10月31日", note: "関東財務局25・近畿財務局2" },
  { category: "電子決済手段等取引業者", law: "資金決済法", count: "2", asOf: "2026年8月27日", note: "いずれも関東財務局" },
  { category: "金融サービス仲介業者", law: "金融サービス提供法", count: "25", asOf: "2026年10月31日", note: "預金等媒介18・有価証券等仲介12・保険媒介2・貸金業貸付媒介2（重複あり）" },
];

export default function FintechKnowledgePage() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "フィンテックとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          フィンテックとは｜意味・主な分野・日本の法律と金融庁の登録業者数
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月27日 | 公式資料の確認日: 2026年11月27日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】フィンテックとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>フィンテック（FinTech）とは、金融（Finance）と技術（Technology）を組み合わせた言葉で、ITを活用して金融サービスを新しくする動きや、そのサービスを指します。金融庁は「金融・IT融合の動き」と説明しています。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・金融安定理事会（FSB）は「新たなビジネスモデル・アプリケーション・プロセス・商品を生み出し、金融市場・金融機関・金融サービスの提供に重要な影響を及ぼし得る、技術によって可能になった金融サービスのイノベーション」と定義しています</li>
              <li>・主な分野は送金・決済、電子マネー、口座連携（オープンAPI）、暗号資産、金融サービスの仲介などで、日本では分野ごとに資金決済法・銀行法などが登録制度を定めています</li>
              <li>・金融庁の一覧を当サイトで集計すると、2026年10月31日現在で電子決済等代行業者127、資金移動業者86、暗号資産交換業者27などが登録されています</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、金融安定理事会（FSB）と金融庁の公表資料、e-Gov法令検索で確認した条文をもとに、フィンテックの定義と主な分野、それぞれを規制する日本の法律を整理します。あわせて、金融庁が公表している登録業者一覧（Excel）を当サイトで集計した、分野別の登録業者数を掲載します。
        </p>

        <DataNote
          surveyedAt="2026年11月27日"
          sources={["金融安定理事会（FSB）「Financial Innovation」", "金融庁「FinTechサポートデスクについて」", "金融庁「免許・許可・登録等を受けている業者一覧」", "e-Gov法令検索（銀行法・資金決済法・金融サービス提供法）", "経済産業省「2025年のキャッシュレス決済比率を算出しました」"]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="definition" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フィンテックの定義</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            金融安定理事会（FSB）は、FinTechを「technologically enabled innovation in financial services that could result in new business models, applications, processes or products with an associated material effect on financial markets and institutions and the provision of financial services」と定義しています。当サイトで訳すと「新たなビジネスモデル・アプリケーション・プロセス・商品を生み出し、金融市場・金融機関・金融サービスの提供に重要な影響を及ぼし得る、技術によって可能になった金融サービスのイノベーション」です。FSBはこの定義のもとで、フィンテックが金融システムの安定に与える影響を監視しています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            日本では、金融庁が平成27年12月に、FinTech（金融・IT融合の動き）に関する一元的な相談・情報交換窓口として「FinTechサポートデスク」を設置しました。同デスクのFAQでは、FinTechには多種多様なビジネスがあり、どの法令の規制にかかるかは個別具体的な事業内容に応じて判断されると説明されています。実際の規制は、次の章のように業務の種類ごとに法律で定められています。
          </p>
        </section>

        <section id="fields" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主な分野と日本の法律</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            金融庁のFinTechサポートデスクのFAQで取り上げられている分野を中心に、サービスの例と根拠となる法律を整理しました。条文番号は2026年11月27日にe-Gov法令検索で確認したものです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">分野</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">サービスの例</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">根拠となる法律と業の名称</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">必要な手続</th>
                </tr>
              </thead>
              <tbody>
                {fieldRows.map((r) => (
                  <tr key={r.field}>
                    <td className="border border-slate-200 px-3 py-2">{r.field}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.example}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.law}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.procedure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：e-Gov法令検索（銀行法、資金決済に関する法律、金融サービスの提供及び利用環境の整備等に関する法律）、金融庁「FinTechサポートデスクについて」のFAQ。サービスの例と要約は当サイトによるものです。個別の事業が登録の対象になるかは、金融庁・財務局にご確認ください。</p>

          <h3 className="text-lg font-bold text-slate-800 mt-8 mb-3">各分野の定義の要点</h3>
          <ul className="text-slate-600 leading-relaxed space-y-3 mb-4">
            <li>
              <strong>資金移動業</strong>：資金決済法第2条第2項は「銀行等以外の者が為替取引を業として営むこと」と定義しています。金融庁のFAQによると、令和3年5月施行の改正で取扱金額に応じた3つの種別が設けられ、第一種（認可制）は100万円を超える送金、第二種（登録制）は100万円以下、第三種（登録制）は5万円以下の送金を扱えます。
            </li>
            <li>
              <strong>電子決済等代行業</strong>：銀行法第2条第21項は、預金者の委託を受けて銀行に振込の指図を伝達する行為と、銀行から口座の情報を取得して預金者に提供する行為を定めています。金融庁のFAQでは、平成29年の銀行法等改正で登録制が導入され、利用者情報の安全管理や接続先の金融機関との契約締結が求められるようになったと説明されています。
            </li>
            <li>
              <strong>前払式支払手段</strong>：金融庁のFAQによると、あらかじめ対価を得て発行される電子マネー・ポイントなどが該当します。第三者型は事前の登録、自家型は未使用残高が基準日（毎年3月31日・9月30日）に1,000万円を超えた場合に届出が必要で、使用期限が6か月未満のものは規制の対象外です。
            </li>
            <li>
              <strong>暗号資産・電子決済手段</strong>：暗号資産の売買・交換や管理を業として行うには暗号資産交換業の登録が必要です。金融庁のFAQでは、いわゆる法定通貨担保型ステーブルコインが電子決済手段に当たり、その売買・交換を業として行うには電子決済手段等取引業の登録が必要と説明されています。暗号資産の仕組みは<Link href="/knowledge/blockchain/" className="text-blue-600 hover:underline">ブロックチェーンの仕組み</Link>でご説明しています。
            </li>
            <li>
              <strong>金融サービス仲介業</strong>：金融サービスの提供及び利用環境の整備等に関する法律第11条第1項は、預金等媒介業務・保険媒介業務・有価証券等仲介業務・貸金業貸付媒介業務のいずれかを業として行うことと定義しています。金融庁の登録一覧では、複数の業務の登録を受けている業者も確認できます。
            </li>
          </ul>
          <p className="text-xs text-slate-500">※ 金融庁のFAQには電子決済等代行業の定義について「銀行法2条17項」と記載されていますが、2026年11月27日にe-Gov法令検索で確認した現行の条文では第2条第21項に定められています。</p>
        </section>

        <section id="count" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">金融庁の登録業者数（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            金融庁は「免許・許可・登録等を受けている業者一覧」で、業種ごとの登録業者一覧をExcelとPDFで公表しています。当サイトでは2026年11月27日にExcel版をダウンロードし、登録番号が記載された行を数えました。いずれも一覧に記載された業者数（全業者数）と一致しています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">登録の種類</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">根拠法</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">登録業者数</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">一覧の時点</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">内訳（当サイト集計）</th>
                </tr>
              </thead>
              <tbody>
                {countRows.map((r) => (
                  <tr key={r.category}>
                    <td className="border border-slate-200 px-3 py-2">{r.category}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.law}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.count}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.asOf}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 当サイト集計。出典：金融庁「免許・許可・登録等を受けている業者一覧」の各Excelファイル（2026年11月27日取得）。資金移動業者の種別は一覧の「業務の種別」欄の印を数えたもので、両方に印がある業者がいます。金融サービス仲介業者の内訳は一覧の「業種の別」欄によるもので、複数の業務の登録を受けている業者がいます。参考として、届出制の前払式支払手段（自家型）発行者は、一覧の記載で1,228者（2026年10月31日現在）です。</p>

          <h3 className="text-lg font-bold text-slate-800 mt-8 mb-3">複数の登録を持つ事業者</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            上の6つの一覧の登録数を合計すると1,047件です。各一覧の法人番号で突き合わせたところ、事業者としては987法人で、そのうち53法人が2つ以上の一覧に載っていました（2つが46法人、3つが7法人）。組み合わせで多かったのは、前払式支払手段（第三者型）と資金移動業（22法人）、電子決済等代行業と前払式支払手段（第三者型）（21法人）、電子決済等代行業と資金移動業（16法人）です。電子決済手段等取引業者の2社は、いずれも暗号資産交換業者としても登録されています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            電子マネーの発行と送金、口座連携を1つのアプリで提供する場合など、サービスが複数の業務にまたがると、事業者はそれぞれの登録を受ける必要があります。フィンテック企業で開発を担当する場合、自社がどの登録を持ち、どの業務がどの法律の規制を受けるのかを把握しておくと、仕様の背景を理解しやすくなります。なお、一覧の時点が異なるもの（電子決済手段等取引業者は2026年8月27日現在）を含むため、この突き合わせは目安です。
          </p>
        </section>

        <section id="cashless" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャッシュレス決済比率（2025年）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            フィンテックの普及を示す指標の1つとして、経済産業省はキャッシュレス決済比率を毎年算出しています。2026年3月31日の発表によると、2025年のキャッシュレス決済比率は58.0％（162.7兆円）でした。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">決済手段</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">決済額（2025年）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">キャッシュレス決済額に占める割合</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">クレジットカード</td><td className="border border-slate-200 px-3 py-2 text-right">134.6兆円</td><td className="border border-slate-200 px-3 py-2 text-right">82.7％</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">コード決済</td><td className="border border-slate-200 px-3 py-2 text-right">16.6兆円</td><td className="border border-slate-200 px-3 py-2 text-right">10.2％</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">電子マネー</td><td className="border border-slate-200 px-3 py-2 text-right">6.0兆円</td><td className="border border-slate-200 px-3 py-2 text-right">3.7％</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">デビットカード</td><td className="border border-slate-200 px-3 py-2 text-right">5.5兆円</td><td className="border border-slate-200 px-3 py-2 text-right">3.4％</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">合計</td><td className="border border-slate-200 px-3 py-2 text-right">162.7兆円</td><td className="border border-slate-200 px-3 py-2 text-right">キャッシュレス決済比率58.0％</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：経済産業省「2025年のキャッシュレス決済比率を算出しました」（2026年3月31日）。比率は国内指標によるもので、国民経済計算の2020年改定基準の適用により、2024年以前の数値も遡って見直されています。過去の発表値と比べる際は、基準の違いにご注意ください。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            経済産業省は、2025年12月のキャッシュレス推進検討会のとりまとめを踏まえ、国内指標で2030年までに65％とする中間目標と、80％とする将来的な目標を掲げています。
          </p>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニアにとってのフィンテック</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            フィンテックのサービスは、銀行などの既存の金融機関のシステムと接続し、法律が定める利用者保護の義務を満たしながら提供されます。たとえば金融庁のFAQでは、暗号資産交換業者にシステムに係る安全管理体制の構築義務や、利用者の財産の分別管理と外部監査の義務が課されていると説明されています。開発の現場でも、セキュリティ、外部APIとの連携、本人確認の仕組みなど、規制を前提とした設計が求められます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            フィンテック企業への転職の進め方は<Link href="/industry/fintech/" className="text-blue-600 hover:underline">フィンテック業界へのエンジニア転職ガイド</Link>、金融機関のシステム開発経験を生かす方法は<Link href="/industry/finance/" className="text-blue-600 hover:underline">金融業界からフィンテック転職ガイド</Link>でご説明しています。
          </p>
        </section>

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

        <section id="sources" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月27日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>金融安定理事会（FSB）「Financial Innovation」：https://www.fsb.org/work-of-the-fsb/financial-innovation-and-structural-change/financial-innovation/</li>
            <li>金融庁「FinTechサポートデスクについて」（令和8年3月27日更新）：https://www.fsa.go.jp/news/27/sonota/20151214-2.html</li>
            <li>金融庁「免許・許可・登録等を受けている業者一覧」：https://www.fsa.go.jp/menkyo/menkyo.html</li>
            <li>金融庁「電子決済等代行業者登録一覧」：https://www.fsa.go.jp/menkyo/menkyoj/dendai.xlsx</li>
            <li>金融庁「資金移動業者登録一覧」：https://www.fsa.go.jp/menkyo/menkyoj/shikin_idou.xlsx</li>
            <li>金融庁「前払式支払手段（第三者型）発行者登録一覧」：https://www.fsa.go.jp/menkyo/menkyoj/daisan.xlsx</li>
            <li>金融庁「前払式支払手段（自家型）発行者届出一覧」：https://www.fsa.go.jp/menkyo/menkyoj/jika.xlsx</li>
            <li>金融庁「暗号資産交換業者登録一覧」：https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.xlsx</li>
            <li>金融庁「電子決済手段等取引業者登録一覧」：https://www.fsa.go.jp/menkyo/menkyoj/denshikessaisyudan.xlsx</li>
            <li>金融庁「金融サービス仲介業者登録一覧」：https://www.fsa.go.jp/menkyo/menkyoj/02_1kinsa.xlsx</li>
            <li>銀行法（e-Gov法令検索）：https://laws.e-gov.go.jp/law/356AC0000000059</li>
            <li>資金決済に関する法律（e-Gov法令検索）：https://laws.e-gov.go.jp/law/421AC0000000059</li>
            <li>金融サービスの提供及び利用環境の整備等に関する法律（e-Gov法令検索）：https://laws.e-gov.go.jp/law/412AC0000000101</li>
            <li>経済産業省「2025年のキャッシュレス決済比率を算出しました」：https://www.meti.go.jp/press/2025/03/20260331006/20260331006.html</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "フィンテック業界へのエンジニア転職ガイド", href: "/industry/fintech/" },
              { name: "金融業界からフィンテック転職ガイド", href: "/industry/finance/" },
              { name: "ブロックチェーンの仕組み", href: "/knowledge/blockchain/" },
              { name: "Web3・ブロックチェーン業界へのエンジニア転職ガイド", href: "/industry/web3/" },
              { name: "保険業界からインシュアテック転職ガイド", href: "/industry/insurance/" },
              { name: "DXとは", href: "/knowledge/dx/" },
            ].map((item, i) => (
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
