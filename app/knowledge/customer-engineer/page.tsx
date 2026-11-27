import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "カスタマーエンジニアとは｜職業分類の定義・ITSSの3専門分野・賃金【2026年】";
const DESCRIPTION =
  "カスタマーエンジニアとは、顧客のコンピュータ機器などの導入・保守・修理を担う職種です。厚生労働省編職業分類の定義と例示28職業の内訳、ITスキル標準「カスタマサービス」の3専門分野とスキル項目（当サイト集計）、関連区分の賃金を整理します。";
const URL = "/knowledge/customer-engineer/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "カスタマーエンジニアの定義（職業分類での位置）" },
  { id: "boundary", label: "運用管理・ヘルプデスクとの境目" },
  { id: "examples", label: "同じ分類に入る28職業の内訳（当サイト集計）" },
  { id: "itss", label: "ITスキル標準の「カスタマサービス」" },
  { id: "skills", label: "専門分野ごとのスキル項目（当サイト集計）" },
  { id: "esco", label: "国際分類・欧州ESCOでの扱い" },
  { id: "wage", label: "賃金の参考値（当サイト算出）" },
  { id: "related", label: "転職・キャリアの詳しい情報" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "カスタマーエンジニアとは簡単に言うと何ですか？",
    a: "顧客が使うコンピュータなどの機器を導入・点検し、故障した部品の交換や修理を行う職種です。厚生労働省編職業分類（2022年改定）では、「カスタマーエンジニア（コンピュータ）」は小分類「075-02 電気機械器具整備・修理工」の例示に含まれ、コンピュータ機器の保守作業に従事するものはここに分類すると記載されています。",
  },
  {
    q: "カスタマーエンジニアとITヘルプデスクの違いは何ですか？",
    a: "厚生労働省編職業分類では別の項目です。機器の保守作業はカスタマーエンジニア（075-02）、社内に常駐して操作方法の問い合わせへの応対や設定、障害時の対応を行う仕事は「010-05 ITヘルプデスク」、システム・ネットワークの運用・監視・管理は「010-04 ITシステム運用管理者」に分類されます。実際の求人では仕事が重なることもあるため、職務内容をご確認ください。",
  },
  {
    q: "ITスキル標準（ITSS）ではカスタマーエンジニアはどの職種に当たりますか？",
    a: "ITSSの11職種のうち「カスタマサービス」が該当すると考えられます（当サイトの整理です）。カスタマサービスは、ハードウェア、ソフトウェア、ファシリティマネジメントの3専門分野に分かれ、ハードウェア・ソフトウェアの導入、カスタマイズ、保守（遠隔保守を含む）、修理と、IT施設インフラの設計・構築・運営を担う職種として説明されています。",
  },
  {
    q: "カスタマーエンジニアに役立つ資格はありますか？",
    a: "働くために必須の資格はありません。ITSSでは、カスタマサービスのレベル3は応用情報技術者試験、レベル4はITサービスマネージャ試験と対応づけられています。ITサービスマネージャ試験の「業務と役割」には、ハードウェア・ソフトウェアの導入、カスタマイズ、保守及び修理の実施と、データセンター施設のファシリティマネジメントが含まれています。",
  },
  {
    q: "カスタマーエンジニアの年収はどれくらいですか？",
    a: "公的統計にカスタマーエンジニアだけの区分はありません。カスタマーエンジニアを含む「はん用・生産用・業務用機械器具・電気機械器具整備・修理従事者」の令和7年賃金構造基本統計調査の値から、当サイトで年収目安を約571万円（企業規模10人以上・男女計）と算出しました。工場設備の保全やエレベーター保守なども含む区分のため、参考値としてご覧ください。",
  },
];

const boundaryRows = [
  { code: "075-02 電気機械器具整備・修理工", work: "コンピュータ機器の保守作業。電気機械器具の点検、破損・摩耗した部品の交換及び修理（個人家庭・事業所に出向くものを含む）", ex: "カスタマーエンジニア（コンピュータ）、サービスエンジニア（コンピュータ）、電子計算機保守員" },
  { code: "010-04 ITシステム運用管理者", work: "構築されたシステム及びネットワークの運用・監視・維持・管理・安全性確保・保守に関する技術的な仕事", ex: "システム運用管理者、サーバー管理者、システム保守員" },
  { code: "010-05 ITヘルプデスク", work: "社内に常駐する等して、操作方法等の問い合わせへの応対、コンピュータの設定、OS・ソフトウェアの保守、障害時の対応", ex: "社内ヘルプデスク、社内サポートデスク" },
  { code: "036-01 コールセンターオペレーター", work: "市販のハードウェア・ソフトウェアの操作方法・設定方法などに関する電話・メールなどによる問い合わせへの応対", ex: "テクニカルサポート受付係（電話によるもの）" },
  { code: "058-99 他に分類されないサービスの職業", work: "個人宅に出張し、コンピュータの設定、操作方法の説明などを行う仕事", ex: "パソコン訪問サポート員" },
];

const exampleGroups = [
  { group: "コンピュータ・事務機器", n: 6, items: "カスタマーエンジニア（コンピュータ）、サービスエンジニア（コンピュータ）、電子計算機保守員、電子計算機周辺機器保守員、パーソナルコンピュータ修理工、複写機保守員" },
  { group: "通信・放送受信機器", n: 5, items: "電気通信機械器具修理工、無線通信機器修理工、有線通信機器修理工、テレビ修理工、ラジオ修理工" },
  { group: "家庭用電気製品", n: 6, items: "家庭用エアコン修理工、家庭用電気製品修理工、電気洗濯機修理工、電気掃除機修理工、電気冷蔵庫修理工、民生用電子・電気機械器具修理工" },
  { group: "電力・電気設備", n: 7, items: "開閉制御機器修理工、制御盤修理工、配電盤修理工、発電機修理工、電動機修理工、太陽光発電装置修理作業員（電気工事）、蓄電池修理工" },
  { group: "電気機械器具全般", n: 4, items: "カスタマーエンジニア（電気機械器具修理）、サービスエンジニア（電気機械器具）、電気機械修理工、電子応用機械器具修理工" },
];

const fieldRows = [
  { field: "ハードウェア", desc: "コンピュータ、関連機器、ネットワーク製品について、安定稼働を目的に、導入、据付、構成管理、正常な機能維持、機能拡張、障害修復を行い、操作指導や顧客への改善提案等を行う" },
  { field: "ソフトウェア", desc: "コンピュータプログラム及びソフトウェア製品、ネットワークについて、導入・配信、セットアップ、正常な機能維持、機能拡張、構成変更、障害修復及び操作指導等を行い、顧客への改善提案等を行う" },
  { field: "ファシリティマネジメント", desc: "ITに関わる全ての施設インフラ（電源・空調等を含む）の総合的な施設管理。商談企画、工事設計・構築、検査・竣工、保守・運用までを管理、実施し、その品質に責任を持つ" },
];

const skillRows = [
  { field: "職種共通（全専門分野）", n: 6, items: "システム保守管理、テクノロジ、プロジェクトマネジメント、リーダーシップ、コミュニケーション、ネゴシエーション" },
  { field: "ハードウェア固有", n: 5, items: "ハードウェア技術、ハードウェア導入、障害修理、ハードウェア予防保守、カスタマサービスマネジメント" },
  { field: "ソフトウェア固有", n: 5, items: "ソフトウェア技術、ソフトウェア導入・配信、一次対応／二次対応、ソフトウェア予防保守、カスタマサービスマネジメント" },
  { field: "ファシリティマネジメント固有", n: 6, items: "ファシリティ・マーケティング、ファシリティ設計、施工管理、施工実務、ファシリティ保守運用、ファシリティ関連の法規・基準" },
];

const levelRows = [
  { level: "レベル6", role: "カスタマサービス責任者として顧客への安定したサービス提供の責任を持ち、チーム全体をリードする", years: "3年以上" },
  { level: "レベル5", role: "ハードウェアサービス責任者又はカスタマサービス責任者としてチーム全体をリードする", years: "3年以上" },
  { level: "レベル4", role: "ハードウェアサービスチームリーダ又はカスタマサービスチームリーダとしてチームメンバをリードする", years: "2年以上" },
  { level: "レベル3", role: "チームメンバとして、上司や管理者の指示・指導に従って活動を実施する", years: "1年以上" },
];

const wageRows = [
  { size: "企業規模計（10人以上）", age: "42.7歳", hours: "160＋18時間", monthly: "37.18万円", bonus: "125.02万円", annual: "約571万円" },
  { size: "1,000人以上", age: "41.0歳", hours: "159＋23時間", monthly: "41.17万円", bonus: "143.27万円", annual: "約637万円" },
  { size: "100〜999人", age: "42.6歳", hours: "159＋15時間", monthly: "35.58万円", bonus: "129.07万円", annual: "約556万円" },
  { size: "10〜99人", age: "45.3歳", hours: "165＋15時間", monthly: "34.20万円", bonus: "89.61万円", annual: "約500万円" },
];

const th = "border border-slate-200 px-3 py-2 text-left";
const td = "border border-slate-200 px-3 py-2";

export default function CustomerEngineerKnowledgePage() {
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
          { name: "カスタマーエンジニアとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          カスタマーエンジニアとは｜職業分類の定義・ITSSの3専門分野・賃金
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月28日 | 公式資料の確認日: 2026年11月28日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】カスタマーエンジニアとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>カスタマーエンジニアとは、顧客が使うコンピュータなどの機器を導入・点検し、故障した部品の交換や修理、保守を行う職種です。厚生労働省編職業分類では「075-02 電気機械器具整備・修理工」に分類され、コンピュータ機器の保守作業に従事するものはここに含めると記載されています。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・同じ分類の例示は28職業で、コンピュータ・事務機器に関するものは6職業でした（当サイト集計）</li>
              <li>・IPAのITスキル標準（ITSS）では「カスタマサービス」職種に当たり、ハードウェア、ソフトウェア、ファシリティマネジメントの3専門分野に分かれています</li>
              <li>・カスタマーエンジニアを含む賃金統計の区分の年収目安は約571万円です（令和7年賃金構造基本統計調査から当サイト算出・参考値）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          「カスタマーエンジニア」（CE）は、コンピュータや周辺機器の保守・修理を担う職種名として使われています。本記事では、厚生労働省編職業分類（2022年改定、JILPT発行）、総務省の日本標準職業分類と国際標準職業分類（ISCO-08）仮訳、IPAのITスキル標準V3 2011、欧州委員会のESCOを当サイトで確認し、カスタマーエンジニアの定義と仕事の範囲を整理しました。あわせて、職業分類の例示とITSSのスキル項目を当サイトで数えた結果と、令和7年賃金構造基本統計調査から算出した賃金の参考値を掲載しています。
        </p>

        <DataNote
          surveyedAt="2026年11月28日"
          sources={["JILPT「第5回改定 厚生労働省編職業分類」", "総務省「日本標準職業分類」「国際標準職業分類2008年改定版（仮訳）」", "IPA「ITスキル標準V3 2011」", "IPA「ITサービスマネージャ試験」", "欧州委員会 ESCO API", "厚生労働省「令和7年賃金構造基本統計調査」（職種）第1表"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">カスタマーエンジニアの定義（職業分類での位置）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            厚生労働省編職業分類（2022年改定）の職業名索引には、「カスタマーエンジニア（コンピュータ）」と「カスタマーエンジニア（電気機械器具修理）」の2つが収録されており、いずれも小分類「075-02 電気機械器具整備・修理工」に分類されています。この小分類は、大分類「12 製造・修理・塗装・製図等の職業」、中分類「075 機械整備・修理工」に属します。
          </p>
          <blockquote className="border-l-4 border-slate-300 pl-4 text-slate-600 leading-relaxed text-sm mb-4">
            回転電気機械（発電機・電動機など）、電気通信機械器具（無線・有線の通信機器、テレビ・ラジオ受信機、携帯電話機など）、電子応用機械器具（電子計算機・パーソナルコンピュータ、医療用電子応用装置、X線装置など）、民生用電子・電気機械器具（家庭用のエアコン・洗濯機・冷蔵庫など）、その他配電盤、変圧器、電力開閉装置などの電気機械器具の点検、破損・摩耗した部品の交換及び修理の仕事に従事するものをいう。他人の求めに応じて、個人家庭又は事業所に出向き、電気機械器具の点検・保守・修理の仕事に従事するものを含む。
          </blockquote>
          <p className="text-xs text-slate-500 mb-4">出典：JILPT「第5回改定 厚生労働省編職業分類」075-02 電気機械器具整備・修理工の説明（原文のまま）。</p>
          <p className="text-slate-600 leading-relaxed mb-4">
            また、情報処理・通信技術者の「010-04 ITシステム運用管理者」の説明には、「コンピュータ機器の保守作業に従事するもの」は「075-02 カスタマーエンジニア（コンピュータ）、075-02 サービスエンジニア（コンピュータ）」に分類すると明記されています。「043-99 その他のコンピュータ等事務用機器操作の職業」の説明でも、コンピュータ・コピー機などの保守・修理の作業に従事するものは075-02に分類するとしています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            つまり、厚生労働省編職業分類では、カスタマーエンジニアはシステム開発や運用を担う「情報処理・通信技術者」（中分類010）ではなく、機器の整備・修理の職業として扱われています。総務省の日本標準職業分類（2009年告示、現行版）には「カスタマーエンジニア」という職業名の例示はありませんが、同じ考え方に当たる項目として、大分類H「生産工程従事者」の小分類「552 電気機械器具整備・修理従事者」（電気機械器具の修理の仕事に従事するもの）があります。
          </p>
        </section>

        <section id="boundary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">運用管理・ヘルプデスクとの境目</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            カスタマーエンジニアの仕事は、システムの運用管理やヘルプデスクと重なって見えることがあります。厚生労働省編職業分類が、それぞれの仕事をどの項目に分類しているかを当サイトで抜き出しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>分類項目</th>
                  <th className={th}>分類される仕事（記載の要約）</th>
                  <th className={th}>職業名の例示</th>
                </tr>
              </thead>
              <tbody>
                {boundaryRows.map((r) => (
                  <tr key={r.code}>
                    <td className={td}>{r.code}</td>
                    <td className={td}>{r.work}</td>
                    <td className={td}>{r.ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：JILPT「第5回改定 厚生労働省編職業分類」010-04・010-05・043-99・058-99・075-02の説明と分類上の注記。036-01は010-05の注記に記載された分類先です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            分類の考え方を当サイトで整理すると、機器そのものの点検・部品交換・修理を行うのがカスタマーエンジニア、構築済みのシステムやネットワークを運用・監視するのがITシステム運用管理者、利用者からの問い合わせに応じるのがヘルプデスクやサポート受付係、という区分です。実際の求人では、カスタマーエンジニアがOSやソフトウェアの設定、障害の一次対応まで担う場合もあるため、職種名だけでなく職務内容をご確認ください。運用監視やサーバー管理などインフラ寄りの仕事の範囲は、<Link href="/knowledge/infra-engineer/" className="text-blue-600 hover:underline">インフラエンジニアの仕事内容</Link>でご説明しています。
          </p>
        </section>

        <section id="examples" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">同じ分類に入る28職業の内訳（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            075-02の説明に例示（○印）として挙げられている職業名を数えたところ、28職業でした。当サイトで、対象となる機器の種類ごとに分けた結果は次のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>機器の種類（当サイトの分け方）</th>
                  <th className={`${th} text-right`}>職業数</th>
                  <th className={th}>例示されている職業名</th>
                </tr>
              </thead>
              <tbody>
                {exampleGroups.map((r) => (
                  <tr key={r.group}>
                    <td className={td}>{r.group}</td>
                    <td className={`${td} text-right`}>{r.n}</td>
                    <td className={td}>{r.items}</td>
                  </tr>
                ))}
                <tr className="bg-slate-50 font-medium">
                  <td className={td}>合計</td>
                  <td className={`${td} text-right`}>28</td>
                  <td className={td}>－</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">数え方：JILPT「第5回改定 厚生労働省編職業分類」のPDFをテキストに変換し、075-02の○印の段落を読点で区切って数えました（2026年11月28日）。機器の種類の分け方は当サイトによるもので、分類表にこの区分はありません。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            28職業のうち、コンピュータ・事務機器に関するものは6職業（約21％）で、残りは通信機器、家庭用電気製品、配電盤や発電機などの電気設備でした。また、「カスタマーエンジニア」と「サービスエンジニア」は、それぞれコンピュータ用と電気機械器具用の2つの職業名が収録されています。職業分類上は、カスタマーエンジニアはコンピュータに限らず、電気機械器具の保守・修理を担う人にも使われる名称であることがわかります。
          </p>
        </section>

        <section id="itss" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ITスキル標準の「カスタマサービス」</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            経済産業省とIPAのITスキル標準（ITSS）は、IT人材を11職種35専門分野と7段階のレベルに分類しています。このうち、カスタマーエンジニアの仕事に最も近いのは「カスタマサービス」職種です（当サイトの整理です）。ITSS V3 2011は、カスタマサービス職種を次のように説明しています。
          </p>
          <blockquote className="border-l-4 border-slate-300 pl-4 text-slate-600 leading-relaxed text-sm mb-4">
            ハードウェア、ソフトウェアに関連する専門技術を活用し、顧客の環境に最適なシステム基盤に合致したハードウェア、ソフトウェアの導入、カスタマイズ、保守（遠隔保守含む）、修理を実施するとともに、顧客のシステム基盤管理およびサポートを実施する。またＩＴ施設インフラの設計、構築、導入および管理、運営を実施する。導入したハードウェア、ソフトウェアの品質（使用性、保守容易性等）に責任を持つ。
          </blockquote>
          <p className="text-xs text-slate-500 mb-4">出典：IPA「ITスキル標準V3 2011」2部キャリア編「職種の概要と達成度指標（9）カスタマサービス」CS-3（原文のまま）。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>専門分野</th>
                  <th className={th}>ITSSの説明（要約）</th>
                </tr>
              </thead>
              <tbody>
                {fieldRows.map((r) => (
                  <tr key={r.field}>
                    <td className={td}>{r.field}</td>
                    <td className={td}>{r.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「ITスキル標準V3 2011」カスタマサービス CS-3。ハードウェアとソフトウェアでは、上位レベルとして品質管理や問題解決の統制などのマネジメントを行うと記載されています。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            達成度指標は、3つの専門分野それぞれについてレベル3〜6の4段階が示されています。ハードウェアの専門分野では、各レベルの役割と求められる経験年数は次のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>レベル</th>
                  <th className={th}>役割（責任性の記載の要約）</th>
                  <th className={th}>活動の経験と実績</th>
                </tr>
              </thead>
              <tbody>
                {levelRows.map((r) => (
                  <tr key={r.level}>
                    <td className={td}>{r.level}</td>
                    <td className={td}>{r.role}</td>
                    <td className={td}>{r.years}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「ITスキル標準V3 2011」カスタマサービスの達成度指標（専門分野：ハードウェア）CS-5〜CS-8。経験年数は、各レベルに相当する複雑性・サイズのシステムでの活動についての記載です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            ITSSは、カスタマサービスのレベル3を「応用情報技術者試験」、レベル4を「ITサービスマネージャ試験」と対応づけています。IPAが示すITサービスマネージャ試験の「業務と役割」にも、「顧客の設備要件に合致したハードウェアの導入、ソフトウェアの導入、カスタマイズ、保守及び修理を実施する。また、データセンター施設のファシリティマネジメントを行う。」と記載されています。試験の内容は<Link href="/cert/it-service-manager/" className="text-blue-600 hover:underline">ITサービスマネージャ試験の解説</Link>、<Link href="/cert/applied-info/" className="text-blue-600 hover:underline">応用情報技術者試験の解説</Link>でご説明しています。なお、ITSS V3 2011は、2012年3月にカスタマサービス職種の定義を改訂した版です。IPAが現在公開しているデジタルスキル標準ver.2.0を当サイトで「カスタマ」で検索したところ、該当はマーケティング関連の学習項目例に含まれる「カスタマーサポート」の1件のみで、カスタマサービスに当たる名称のロールはありませんでした。
          </p>
        </section>

        <section id="skills" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">専門分野ごとのスキル項目（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ITSS V3 2011の「スキル領域とスキル熟達度・知識項目（カスタマサービス）」に掲載されているスキル項目（●印）を、当サイトで専門分野ごとに数えました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>区分</th>
                  <th className={`${th} text-right`}>スキル項目数</th>
                  <th className={th}>スキル項目</th>
                </tr>
              </thead>
              <tbody>
                {skillRows.map((r) => (
                  <tr key={r.field}>
                    <td className={td}>{r.field}</td>
                    <td className={`${td} text-right`}>{r.n}</td>
                    <td className={td}>{r.items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">数え方：IPA「ITスキル標準V3 2011」カスタマサービスのスキル領域（CS-3）のPDFをテキストに変換し、●印の項目を数えました（2026年11月28日）。各専門分野で必要になる項目は、職種共通の6項目と固有の項目を合わせた数です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            職種共通の6項目を加えると、ハードウェアとソフトウェアは各11項目、ファシリティマネジメントは12項目です。ハードウェアとソフトウェアには、いずれも「カスタマサービスマネジメント」（保守サービス設計、障害対応と保守支援、クレーム管理、お客様サポート、サービスレベル管理、改善提案など）が含まれており、機器の修理だけでなく顧客との関係を管理することも職種の範囲とされています。ハードウェアの「障害修理」の知識項目は、障害コール受付、障害状況把握、障害原因特定、処置・修復作業の実践、ネットワーク障害修復、修復後の動作検証の6つで、受付から修復後の確認までの流れがそのまま項目になっています。
          </p>
        </section>

        <section id="esco" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">国際分類・欧州ESCOでの扱い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            総務省が掲載している国際標準職業分類ISCO-08の仮訳では、「7422 情報通信機器設置工・サービス工」に、電気通信設備やデータ転送設備などの据え付け・修理・保全と、コンピュータの修理・組立・保全をするものが分類されています。職務には「コンピュータデータ転送装置、コンピュータ周辺機器の保全、問題解決、テスト及び修理」や「技術的助言及び情報の提供」が含まれます。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            欧州委員会のESCOには「customer engineer」という職業名はなく、近い職業として、ISCO-08の7422の下位に「computer hardware repair technician」（コード7422.2）があります。ESCOはこの職業を「コンピュータのハードウェアと周辺部品を据え付け、点検、テスト、修理する。コンピュータの機能をテストし、問題を特定し、損傷した部品を交換する」と説明しています（当サイト訳）。ESCOのAPIから取得したスキル数を、問い合わせ対応を担う「ICT help desk agent」（3512.1）と比べた結果は次のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>項目</th>
                  <th className={th}>computer hardware repair technician</th>
                  <th className={th}>ICT help desk agent</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>ESCOコード</td><td className={td}>7422.2</td><td className={td}>3512.1</td></tr>
                <tr><td className={td}>必須スキル（essential）</td><td className={td}>18項目</td><td className={td}>19項目</td></tr>
                <tr><td className={td}>任意スキル（optional）</td><td className={td}>20項目</td><td className={td}>8項目</td></tr>
                <tr><td className={td}>必須スキルのうち両者に共通</td><td className={td}>2項目</td><td className={td}>2項目</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：欧州委員会 ESCO API（2026年11月28日取得）。共通の件数は、必須スキル（hasEssentialSkill）の名称を当サイトが照合して数えたものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            両者に共通する必須スキルは、「問題の解決策を作る（create solutions to problems）」と「顧客へのフォローアップ（provide customer follow-up services）」の2項目だけでした。computer hardware repair technicianの必須スキルには、ハードウェアの据え付け、部品の交換、現場での修理、修理マニュアルの使用、保守作業の記録などが並び、このうち「顧客サービスの維持」「顧客へのフォローアップ」「修理に関する顧客への情報提供」「ハードウェアの使い方の実演」の4項目は顧客対応に関するものです（当サイトの分け方）。ESCOでも、機器の修理と顧客対応の両方が仕事に含まれていることがわかります。
          </p>
        </section>

        <section id="wage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">賃金の参考値（当サイト算出）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            賃金構造基本統計調査にはカスタマーエンジニアだけの職種区分はありません。令和7年調査の職種（小分類）の表で、名称からカスタマーエンジニアが含まれると考えられる「はん用・生産用・業務用機械器具・電気機械器具整備・修理従事者」の値を抜き出し、年収目安を算出しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>企業規模</th>
                  <th className={`${th} text-right`}>平均年齢</th>
                  <th className={`${th} text-right`}>月の労働時間（所定内＋超過）</th>
                  <th className={`${th} text-right`}>きまって支給する現金給与額</th>
                  <th className={`${th} text-right`}>年間賞与その他特別給与額</th>
                  <th className={`${th} text-right`}>年収目安</th>
                </tr>
              </thead>
              <tbody>
                {wageRows.map((r) => (
                  <tr key={r.size}>
                    <td className={td}>{r.size}</td>
                    <td className={`${td} text-right`}>{r.age}</td>
                    <td className={`${td} text-right`}>{r.hours}</td>
                    <td className={`${td} text-right`}>{r.monthly}</td>
                    <td className={`${td} text-right`}>{r.bonus}</td>
                    <td className={`${td} text-right`}>{r.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：厚生労働省「令和7年賃金構造基本統計調査」（職種）第1表（産業計・男女計）。年収目安は「きまって支給する現金給与額×12＋年間賞与その他特別給与額」で当サイトが算出し、万円未満を四捨五入しました。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            この区分は、カスタマーエンジニアを含む電気機械器具の整備・修理に加えて、名称のとおり、はん用・生産用・業務用機械器具（エレベーター、工場の生産設備、建設機械など）の整備・修理の仕事もまとめた区分と考えられます（当サイトの整理です）。そのため、コンピュータ機器の保守を担うカスタマーエンジニアの賃金を直接示す値ではありません。同じ表で、プログラマーやSEを含む「ソフトウェア作成者」の年収目安は約578万円（企業規模計）でした。企業規模による差が大きく、1,000人以上と10〜99人では約137万円の開きがあります。
          </p>
        </section>

        <section id="related" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職・キャリアの詳しい情報</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            本記事はカスタマーエンジニアという職種の定義と公的資料での扱いに絞ってご説明しました。ほかのIT職種との比較や、保守・サポートからのキャリアの広げ方は、次の記事で扱っています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7">
            <li>IT職種の全体像：<Link href="/knowledge/it-engineer-types/" className="text-blue-600 hover:underline">ITエンジニアの種類一覧</Link></li>
            <li>運用・構築の仕事の範囲：<Link href="/knowledge/infra-engineer/" className="text-blue-600 hover:underline">インフラエンジニアの仕事内容</Link></li>
            <li>サポート職からの移行：<Link href="/career/support-to-infra/" className="text-blue-600 hover:underline">サポート→インフラエンジニアへの転職ガイド</Link></li>
            <li>インフラ職の転職の進め方：<Link href="/skill/infrastructure/" className="text-blue-600 hover:underline">インフラエンジニアの転職ガイド</Link></li>
            <li>開発系の職種との違い：<Link href="/knowledge/se/" className="text-blue-600 hover:underline">SE（システムエンジニア）の仕事内容</Link></li>
          </ul>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月28日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>JILPT「第5回改定 厚生労働省編職業分類」（010-04・010-05・043-99・058-99・075-02、職業名索引）：https://www.jil.go.jp/institute/seika/shokugyo/bunrui/documents/shokugyo05.pdf</li>
            <li>総務省「日本標準職業分類」（平成21年12月告示、552 電気機械器具整備・修理従事者）：https://www.soumu.go.jp/main_content/000661290.pdf</li>
            <li>総務省 日本標準職業分類（現行版・国際標準職業分類の案内）：https://www.soumu.go.jp/toukei_toukatsu/index/seido/shokgyou/index.htm</li>
            <li>総務省「国際標準職業分類2008年改定版（仮訳）グループ定義」（7422 情報通信機器設置工・サービス工）：https://www.soumu.go.jp/main_content/000397967.pdf</li>
            <li>IPA「ITスキル標準V3 2011」ダウンロード：https://www.ipa.go.jp/jinzai/skill-standard/plus-it-ui/itss/download_v3_2011.html</li>
            <li>IPA「ITスキル標準V3 2011」1部概要編：https://www.ipa.go.jp/jinzai/skill-standard/plus-it-ui/itss/ps6vr70000004x60-att/000024840.pdf</li>
            <li>IPA「ITスキル標準V3 2011」職種の概要と達成度指標（カスタマサービス）：https://www.ipa.go.jp/jinzai/skill-standard/plus-it-ui/itss/ps6vr70000004x60-att/000024996.pdf</li>
            <li>IPA「ITスキル標準V3 2011」スキル領域とスキル熟達度・知識項目（カスタマサービス）：https://www.ipa.go.jp/jinzai/skill-standard/plus-it-ui/itss/ps6vr70000004x60-att/000024998.pdf</li>
            <li>IPA「デジタルスキル標準ver.2.0」：https://www.ipa.go.jp/jinzai/skill-standard/dss/rcu1hd000000j76k-att/dss_ver2.0.pdf</li>
            <li>IPA「ITサービスマネージャ試験（SM）」：https://www.ipa.go.jp/shiken/kubun/sm.html</li>
            <li>ESCO computer hardware repair technician：http://data.europa.eu/esco/occupation/b7aa4b4e-dbb6-4f58-b36c-35b9a7267972</li>
            <li>ESCO ICT help desk agent：http://data.europa.eu/esco/occupation/aaeec9a7-dc57-4485-890c-86b3eef735f9</li>
            <li>ESCO API（取得に使用）：https://ec.europa.eu/esco/api/resource/occupation</li>
            <li>厚生労働省「令和7年賃金構造基本統計調査」（職種）第1表：https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421116</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ITエンジニアの種類一覧", href: "/knowledge/it-engineer-types/" },
              { name: "インフラエンジニアの仕事内容", href: "/knowledge/infra-engineer/" },
              { name: "サポート→インフラエンジニアへの転職ガイド", href: "/career/support-to-infra/" },
              { name: "ITサービスマネージャ試験の解説", href: "/cert/it-service-manager/" },
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
