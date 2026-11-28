import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "Webデザイナーとは｜仕事内容・なるには・公的な職業分類と国家検定の合格率【2026年】";
const DESCRIPTION =
  "Webデザイナーの仕事内容を厚生労働省編職業分類の定義と工程で整理し、なるための道筋（学校・公的職業訓練・ウェブデザイン技能検定）をご説明します。検定の等級別合格率と、賃金構造基本統計調査による年収は当サイト集計です。";
const URL = "/knowledge/web-designer/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "Webデザイナーの公的な定義" },
  { id: "work", label: "仕事内容：要件定義から公開・更新までの工程" },
  { id: "boundary", label: "Webデザイナーに含まれない仕事（分類上の線引き）" },
  { id: "skills", label: "求められる知識（ウェブデザイン技能検定の出題範囲）" },
  { id: "route", label: "Webデザイナーになるには（3つの道筋）" },
  { id: "exam", label: "ウェブデザイン技能検定の合格率（当サイト集計）" },
  { id: "salary", label: "デザイナーの年収（賃金構造基本統計調査・当サイト算出）" },
  { id: "a11y", label: "アクセシビリティと配色の確認（当サイトでの計算結果）" },
  { id: "related", label: "転職・スキルの詳しい情報" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "Webデザイナーとは簡単に言うと何をする仕事ですか？",
    a: "ウェブサイトを制作するために、要件定義、サイトやページの構成、文字・配置・配色・アイコンなどの視覚的要素のデザインを行い、ブラウザで表示できる形にしてサイトを制作する仕事です。厚生労働省編職業分類（2022年改定）では、小分類017-01「ウェブデザイナー」としてこのように説明されています。",
  },
  {
    q: "Webデザイナーになるには資格が必要ですか？",
    a: "当サイトの確認範囲では、Webデザイナーとして働くために必須とされる資格はありません。技能を示す公的な手段として、職業能力開発促進法にもとづく国家検定「ウェブデザイン技能検定」（1〜3級）があります。3級は、ウェブの作成や運営の業務に従事している方、または従事しようとしている方であれば受検できます。",
  },
  {
    q: "ウェブデザイン技能検定の合格率はどれくらいですか？",
    a: "実施団体が公表している技能士資格取得状況をもとに当サイトで算出すると、2021〜2025年度の5年間の合計では、3級が65.7％（受検者14,238人のうち技能士9,358人）、2級が47.7％（受検者3,570人のうち技能士1,703人）でした。回ごとの差が大きく、3級は44.5〜83.4％、2級は25.1〜65.7％の範囲にあります。",
  },
  {
    q: "未経験からWebデザイナーを目指す場合、公的な支援はありますか？",
    a: "ハローワークの求職者を対象とした公的職業訓練（ハロートレーニング）があり、受講料は無料です（テキスト代等を除く）。厚生労働省の実績では、令和6年度に開始した求職者支援訓練のうちデザイン分野は582コース、受講者9,357人でした。令和8年度の全国職業訓練実施計画では、WEBデザイン関連の資格取得を目指すコースの設定を推進するとしています。",
  },
  {
    q: "Webデザイナーの平均年収は公的な統計で分かりますか？",
    a: "Webデザイナーだけの区分はありません。令和7年賃金構造基本統計調査には「デザイナー」の区分があり、きまって支給する現金給与額と年間賞与から当サイトで算出した年収は約540万円（一般労働者・企業規模10人以上・男女計）でした。この区分にはグラフィックや工業製品などのデザイナーも含まれるため、目安としてご覧ください。",
  },
];

const definitionRows = [
  { src: "厚生労働省編職業分類（2022年改定・JILPT）", item: "017-01 ウェブデザイナー", note: "例示職業名：Webクリエイター、Webデザイナー、ホームページデザイナー。中分類017「デザイナー」に属する" },
  { src: "日本標準職業分類（総務省・2009年告示）", item: "224 デザイナー", note: "例示に「ウェブデザイナー」。グラフィック・デザイナー、工業デザイナー、服飾デザイナーなどと同じ小分類" },
  { src: "国際標準職業分類 ISCO-08（総務省仮訳）", item: "2166 グラフィック・マルチメディアデザイナー", note: "職業の例に「ウェブデザイナー」。ウェブ開発者・マルチメディア開発者は別の2513に分類" },
  { src: "職業能力開発促進法にもとづく技能検定", item: "ウェブデザイン職種（1〜3級）", note: "指定試験機関：特定非営利活動法人インターネットスキル認定普及協会。合格者は「ウェブデザイン技能士」" },
];

const processRows = [
  { step: "要件の確認", work: "サイトの目的・利用者・掲載する情報・制約（予算・期限）を依頼者と確認する", basis: "職業分類017-01：要件定義／ISCO 2166（a）：顧客や関係者との相談による設計要領書の目的及び制約の確認" },
  { step: "情報設計", work: "情報の構造化、サイトマップの設計、ページの構成とナビゲーションを決める", basis: "職業分類017-01：サイト・Webページの構成／技能検定3級 学科［6］ウェブインフォメーションデザイン" },
  { step: "ビジュアルデザイン", work: "文字・配置・配色・アイコン・画像などの視覚的要素をソフトウェアでデザインする", basis: "職業分類017-01：文字・配置・配色・アイコンなどの視覚的要素についてソフトウェアを使用してデザイン／ISCO 2166（c）（d）：デザインコンセプトの策定、略図・配置図の作成" },
  { step: "ブラウザで表示する形にする", work: "デザインをHTML・CSSで組み、各ブラウザ・端末で表示を確認する", basis: "職業分類017-01：ブラウザで表示し、Webサイトを制作する／技能検定3級 実技：HTML・CSSによるコーディング、ページデザイン・レイアウト、アクセシビリティ" },
  { step: "公開後の更新・管理", work: "掲載内容の更新、サイトの管理", basis: "技能検定3級 実技：ウェブサイト運用管理（更新、管理）／学科［9］ウェブサイト運用・管理技術" },
];

const boundaryRows = [
  { name: "Webプログラマー", code: "009-03 プログラマー", reason: "プログラム設計書にもとづいてプログラムを作成する仕事" },
  { name: "HTMLコーダー", code: "009-03 プログラマー", reason: "HTMLのコーディングの仕事" },
  { name: "Webディレクター", code: "020-99", reason: "予算・要員・進捗・品質の管理、業務の監督などの仕事" },
  { name: "Webプロデューサー", code: "020-99", reason: "ウェブサイトの企画、予算・制作要員の確保、制作の進捗管理などの仕事" },
  { name: "キャラクターデザイナー", code: "017-99 その他のデザイナー", reason: "ゲームのキャラクター・アイテム・背景などをデザインする仕事" },
  { name: "CGデザイナー", code: "017-99 その他のデザイナー", reason: "コンピュータグラフィックス（CG）を制作する仕事" },
];

const skillRows = [
  { no: "1", name: "インターネット概論", body: "インターネットの仕組み、HTTP、ネットワーク技術、標準化団体（JIS・ISO・W3C・IETF・Ecma・WHATWG）、セキュリティ、関係法令" },
  { no: "2", name: "ワールドワイドウェブ（WWW）法務", body: "産業財産権、著作権などの知的財産権" },
  { no: "3", name: "ウェブデザイン技術", body: "HTML・XHTML・XML、CSS、ECMAScriptのコーディング" },
  { no: "4", name: "ウェブ標準", body: "ウェブ標準にもとづいたサイトの制作手法" },
  { no: "5", name: "ウェブビジュアルデザイン", body: "テキスト・画像の利用、ウェブカラーデザイン、レイアウト、動画・音声などのマルチメディア" },
  { no: "6", name: "ウェブインフォメーションデザイン", body: "情報の構造化、サイトマップ、ナビゲーション、ユーザビリティ（ISO 9241-11）" },
  { no: "7", name: "アクセシビリティ・ユニバーサルデザイン", body: "JIS X 8341-3（ウェブコンテンツ）、ユニバーサルデザイン" },
  { no: "8", name: "ウェブサイト設計・構築技術", body: "サービスサイト、バナー広告、企画・プランニング、サイト設計・構築" },
  { no: "9", name: "ウェブサイト運用・管理技術", body: "サイト管理、システム保守" },
  { no: "10", name: "安全衛生・作業環境構築", body: "作業に伴う疾病の予防、人間工学に配慮したコンテンツの設計" },
];

const eligibilityRows = [
  { grade: "3級", cond: "ウェブの作成や運営に関する業務に従事している方、または従事しようとしている方", fee: "学科6,000円／実技9,000円（23歳未満は減免あり）", time: "学科45分・実技60分" },
  { grade: "2級", cond: "2年以上の実務経験、3級合格、所定の科目を含む専修学校・短大・大学等の卒業、普通職業訓練・高度職業訓練の修了のいずれか", fee: "学科7,000円／実技17,500円", time: "学科60分・実技120分" },
  { grade: "1級", cond: "学科：7年以上の実務経験、2級合格後2年以上の実務経験、大学卒業後3年以上の実務経験など。実技：1級学科の合格者（合格日から2年以内）", fee: "学科8,000円／実技27,000円（ペーパー実技を含む）", time: "学科90分・実技180分・ペーパー実技60分" },
];

const yearRows = [
  { fy: "2021年度", g2: "745", p2: "268", r2: "36.0％", g3: "2,980", p3: "1,824", r3: "61.2％", g1: "17", p1: "9", r1: "52.9％" },
  { fy: "2022年度", g2: "712", p2: "377", r2: "52.9％", g3: "2,855", p3: "1,740", r3: "60.9％", g1: "7", p1: "3", r1: "42.9％" },
  { fy: "2023年度", g2: "742", p2: "426", r2: "57.4％", g3: "3,120", p3: "2,219", r3: "71.1％", g1: "14", p1: "9", r1: "64.3％" },
  { fy: "2024年度", g2: "774", p2: "406", r2: "52.5％", g3: "3,053", p3: "2,036", r3: "66.7％", g1: "19", p1: "14", r1: "73.7％" },
  { fy: "2025年度", g2: "597", p2: "226", r2: "37.9％", g3: "2,230", p3: "1,539", r3: "69.0％", g1: "26", p1: "14", r1: "53.8％" },
  { fy: "2026年度（第1・2回）", g2: "241", p2: "113", r2: "46.9％", g3: "840", p3: "516", r3: "61.4％", g1: "－", p1: "－", r1: "－" },
];

const roundRows = [
  { round: "第1回", g2: "130 → 54（41.5％）", g3: "472 → 342（72.5％）", g1: "実施なし" },
  { round: "第2回", g2: "165 → 59（35.8％）", g3: "547 → 427（78.1％）", g1: "実施なし" },
  { round: "第3回", g2: "151 → 74（49.0％）", g3: "617 → 384（62.2％）", g1: "学科のみ・受検者44人" },
  { round: "第4回", g2: "151 → 39（25.8％）", g3: "594 → 386（65.0％）", g1: "26 → 14（53.8％）" },
];

const trainingRows = [
  { field: "デザイン", course: "582", ratio: "1.39倍", people: "9,357人", share: "28.5％", job: "57.8％" },
  { field: "IT", course: "298", ratio: "1.03倍", people: "3,775人", share: "11.5％", job: "62.6％" },
  { field: "営業・販売・事務", course: "888", ratio: "1.03倍", people: "10,854人", share: "33.1％", job: "61.8％" },
  { field: "実践コース計", course: "2,590", ratio: "1.10倍", people: "32,816人", share: "100％", job: "62.4％" },
];

const wageRows = [
  { item: "企業規模計（10人以上）・男女計", monthly: "375.6千円", bonus: "888.6千円", annual: "約539.6万円" },
  { item: "1,000人以上", monthly: "473.0千円", bonus: "1,631.7千円", annual: "約730.8万円" },
  { item: "100〜999人", monthly: "381.2千円", bonus: "945.4千円", annual: "約552.0万円" },
  { item: "10〜99人", monthly: "342.1千円", bonus: "617.8千円", annual: "約472.3万円" },
  { item: "男性（企業規模計）", monthly: "415.9千円", bonus: "1,023.8千円", annual: "約601.5万円" },
  { item: "女性（企業規模計）", monthly: "346.4千円", bonus: "790.6千円", annual: "約494.7万円" },
  { item: "参考：ソフトウェア作成者（企業規模計・男女計）", monthly: "390.8千円", bonus: "1,095.1千円", annual: "約578.5万円" },
];

const contrastRows = [
  { name: "本文の濃い文字（slate-800）", hex: "#1d293d", ratio: "14.62:1", aa: "達成" },
  { name: "本文（slate-600）", hex: "#45556c", ratio: "7.58:1", aa: "達成" },
  { name: "更新日などの補足文字（slate-500）", hex: "#62748e", ratio: "4.76:1", aa: "達成" },
  { name: "リンク（blue-600）", hex: "#155dfc", ratio: "5.25:1", aa: "達成" },
  { name: "差し色（petrol）", hex: "#0e6e68", ratio: "6.09:1", aa: "達成" },
];

const contrastOutput = `$ python3 -I contrast.py
python 3.9.6 macOS-26.5.2-arm64-arm-64bit
slate-800 oklch(27.9% 0.041 260.031)  -> #1d293d  vs #ffffff  14.62:1
slate-600 oklch(44.6% 0.043 257.281)  -> #45556c  vs #ffffff  7.58:1
slate-500 oklch(55.4% 0.046 257.417)  -> #62748e  vs #ffffff  4.76:1
blue-600 oklch(54.6% 0.245 262.881)   -> #155dfc  vs #ffffff  5.25:1
petrol #0e6e68                        -> #0e6e68  vs #ffffff  6.09:1
check black/white 21.00  gray #767676 4.54`;

const th = "border border-slate-200 px-3 py-2 text-left";
const td = "border border-slate-200 px-3 py-2";

export default function WebDesignerKnowledgePage() {
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
          { name: "Webデザイナーとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Webデザイナーとは｜仕事内容・なるには・公的な職業分類と国家検定の合格率
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月28日 | 公式資料の確認日: 2026年11月28日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】Webデザイナーとは・なるには</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>Webデザイナーとは、ウェブサイトを制作するために、要件定義、サイトやページの構成、文字・配置・配色・アイコンなどの視覚的要素のデザインを行い、ブラウザで表示できる形にしてサイトを制作する職業です（厚生労働省編職業分類 2022年改定の説明による）。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・仕事内容：要件の確認→情報設計→ビジュアルデザイン→HTML・CSSで表示する形にする→公開後の更新、という工程に分けて整理できます（当サイトの整理）</li>
              <li>・なるには：必須の資格はありません。主な道筋は「専門学校・大学などで学ぶ」「公的職業訓練（ハロートレーニング）を受ける」「独学・実務で経験を積む」の3つで、国家検定のウェブデザイン技能検定で技能を示すこともできます</li>
              <li>・検定の合格率：2021〜2025年度の合計で3級65.7％・2級47.7％でした（実施団体の公表値から当サイト算出）</li>
              <li>・年収の目安：賃金構造基本統計調査の「デザイナー」で約540万円（当サイト算出。Web以外のデザイナーを含みます）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、独立行政法人労働政策研究・研修機構（JILPT）が公表している厚生労働省編職業分類、総務省の日本標準職業分類と国際標準職業分類（ISCO-08）の仮訳をもとに、Webデザイナーの仕事内容をご説明します。あわせて、国家検定であるウェブデザイン技能検定の公表データから等級別・年度別の合格率を当サイトで算出し、厚生労働省の公的職業訓練の実績と、賃金構造基本統計調査による年収を掲載しています。
        </p>

        <DataNote
          surveyedAt="2026年11月28日"
          sources={["JILPT「第5回改定 厚生労働省編職業分類 職業分類表」", "総務省「日本標準職業分類」「国際標準職業分類（仮訳）」", "インターネットスキル認定普及協会「ウェブデザイン技能検定」", "厚生労働省「令和6年度求職者支援訓練実績」「令和8年度全国職業訓練実施計画」", "厚生労働省「令和7年賃金構造基本統計調査」", "W3C「WCAG 2.2」・障害者差別解消法（e-Gov）"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Webデザイナーの公的な定義</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Webデザイナーは、日本と国際の公的な職業分類のいずれにも、職業名または例示として掲載されています。当サイトで各資料を確認した結果は次のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>資料</th>
                  <th className={th}>該当する項目</th>
                  <th className={th}>補足</th>
                </tr>
              </thead>
              <tbody>
                {definitionRows.map((r) => (
                  <tr key={r.src}>
                    <td className={td}>{r.src}</td>
                    <td className={td}>{r.item}</td>
                    <td className={td}>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">確認方法：各資料のPDFをテキストに変換して「ウェブデザイナー」「Webデザイナー」を検索し、該当する項目の説明を読みました（2026年11月28日）。技能検定はウェブデザイン技能検定の試験要項（令和8年度第3回・3級）の記載によります。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            厚生労働省編職業分類では、017-01「ウェブデザイナー」を次のように説明しています。
          </p>
          <blockquote className="border-l-4 border-slate-300 pl-4 text-slate-600 leading-relaxed text-sm">
            インターネット上のウェブサイトを制作するため、要件定義、サイト・Web ページの構成、文字・配置・配色・アイコンなどの視覚的要素についてソフトウェアを使用してデザインし、ブラウザで表示し、Web サイトを制作する仕事に従事するものをいう。
          </blockquote>
          <p className="text-xs text-slate-500 mt-2">出典：JILPT「第5回改定 厚生労働省編職業分類 職業分類表」017-01 ウェブデザイナー（p.108）。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            この説明では、見た目のデザインだけでなく、要件定義とページの構成、ブラウザで表示できる形にする作業までがWebデザイナーの仕事に含まれています。日本標準職業分類と国際標準職業分類では、Webデザイナーはグラフィックデザイナーなどと同じ「デザイナー」の区分に置かれており、プログラムを作る技術職とは別の職業として扱われています。国際標準職業分類の仮訳では、2166の職務として、顧客や関係者との相談による目的と制約の確認、デザインコンセプトの策定、配置図の作成、制作の監督または遂行などが挙げられています。
          </p>
        </section>

        <section id="work" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">仕事内容：要件定義から公開・更新までの工程</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            職業分類の説明、国際標準職業分類の職務、ウェブデザイン技能検定の出題範囲を、制作の流れに沿って当サイトで整理しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>工程</th>
                  <th className={th}>主な作業（当サイトの整理）</th>
                  <th className={th}>根拠となる記載</th>
                </tr>
              </thead>
              <tbody>
                {processRows.map((r) => (
                  <tr key={r.step}>
                    <td className={td}>{r.step}</td>
                    <td className={td}>{r.work}</td>
                    <td className={td}>{r.basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：JILPT 厚生労働省編職業分類 017-01、総務省 ISCO-08仮訳 2166、インターネットスキル認定普及協会「令和8年度 第3回 ウェブデザイン技能検定 3級 試験要項」。工程の分け方と「主な作業」の列は当サイトによる整理です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            実際の職場では、企業の規模や体制によって担当範囲が異なります。少人数の制作会社では1人が要件の確認から公開後の更新までを担う場合があり、規模の大きな体制ではビジュアルデザインを中心に担い、コーディングは別の担当者が行う場合もあります。求人を比較する際は、職種名だけでなく、どの工程を担当するか、コーディングを含むかをご確認ください。画面の操作性や体験設計に重点を置く職種については<Link href="/knowledge/uiux/" className="text-blue-600 hover:underline">UI/UXエンジニアへの転身ガイド</Link>で、デザインツールについては<Link href="/skill/figma/" className="text-blue-600 hover:underline">Figmaスキルの転職ガイド</Link>でご説明しています。
          </p>
        </section>

        <section id="boundary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Webデザイナーに含まれない仕事（分類上の線引き）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            厚生労働省編職業分類の017-01の説明には、Webデザイナーと紛らわしいものの、別の分類に入る職業が6件挙げられています。当サイトで一覧にしました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>職業名</th>
                  <th className={th}>分類される小分類</th>
                  <th className={th}>分類の理由（分類表の記載の要約）</th>
                </tr>
              </thead>
              <tbody>
                {boundaryRows.map((r) => (
                  <tr key={r.name}>
                    <td className={td}>{r.name}</td>
                    <td className={td}>{r.code}</td>
                    <td className={td}>{r.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：JILPT「第5回改定 厚生労働省編職業分類 職業分類表」017-01 ウェブデザイナーの分類注記(1)〜(6)（p.108）。要約は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            分類表では、HTMLのコーディングだけを行う仕事はHTMLコーダーとしてプログラマー（009-03）に分類されます。一方、Webデザイナーの説明には「ブラウザで表示し、Web サイトを制作する」ことが含まれているため、デザインと表示の確認を一体で行う仕事はWebデザイナーに当たると考えられます（当サイトの解釈です）。また、予算・要員・進捗・品質の管理はWebディレクター、プログラムの作成はWebプログラマーの仕事として区別されています。これらの職種については<Link href="/knowledge/web-director/" className="text-blue-600 hover:underline">Webディレクターとは</Link>と<Link href="/knowledge/web-engineer/" className="text-blue-600 hover:underline">Webエンジニアとは</Link>で詳しくご説明しています。
          </p>
        </section>

        <section id="skills" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる知識（ウェブデザイン技能検定の出題範囲）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            国家検定であるウェブデザイン技能検定の3級学科試験は、次の10科目を出題範囲としています。Webデザイナーに求められる知識の範囲を示す公的な資料の1つとして参考になります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>番号</th>
                  <th className={th}>科目</th>
                  <th className={th}>主な範囲（試験要項の記載の要約）</th>
                </tr>
              </thead>
              <tbody>
                {skillRows.map((r) => (
                  <tr key={r.no}>
                    <td className={td}>{r.no}</td>
                    <td className={td}>{r.name}</td>
                    <td className={td}>{r.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：インターネットスキル認定普及協会「令和8年度 第3回 ウェブデザイン技能検定 3級 試験要項」［13］学科試験科目及びその範囲（2026年11月28日確認）。要約は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            3級の実技試験は、HTML・CSSによるコーディング、画像・マルチメディアデータの利用、ページデザイン・レイアウト、アクセシビリティ、更新・管理を範囲としています。試験要項に記載された受検用PCの環境は、Windows 11以降、主要なブラウザ（Chrome・Firefox・Edge）とテキストエディタで、ブラウザの開発者ツールも利用できるとされています。見た目を作る力だけでなく、HTML・CSSでページを組む力と、法務・アクセシビリティ・セキュリティの知識が出題範囲に含まれている点が特徴です。
          </p>
        </section>

        <section id="route" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Webデザイナーになるには（3つの道筋）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            当サイトの確認範囲では、Webデザイナーとして働くために必須とされる資格や学歴はありません。公的な制度から確認できる主な道筋は次の3つです。
          </p>
          <ol className="list-decimal pl-6 text-slate-600 leading-7 mb-4">
            <li><strong>学校で学ぶ</strong>：専修学校・短大・大学などで、ウェブの作成や運営に関する科目を学ぶ方法です。ウェブデザイン技能検定では、協会が認めた科目を含む学科を卒業した方は、実務経験がなくても2級を受検できます。</li>
            <li><strong>公的職業訓練（ハロートレーニング）を受ける</strong>：ハローワークの求職者を対象とした訓練で、受講料は無料です（テキスト代等を除く）。求職者支援訓練の訓練期間は2〜6か月で、一定の要件を満たす場合は職業訓練受講給付金（受講手当 月10万円など）が支給されます。</li>
            <li><strong>独学・実務で経験を積む</strong>：制作の補助業務などから実務に就く方法です。ウェブデザイン技能検定の3級は、ウェブの作成や運営の業務に従事しようとしている方も受検できるため、実務経験がない段階で知識を確認する手段として利用できます。</li>
          </ol>
          <p className="text-xs text-slate-500 mb-4">出典：厚生労働省「ハロートレーニング（公共職業訓練・求職者支援訓練）の全体像」、インターネットスキル認定普及協会「受検資格」（いずれも2026年11月28日確認）。</p>

          <h3 className="font-bold text-slate-800 mb-2">公的職業訓練のデザイン分野の実績</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            厚生労働省が公表している令和6年度の求職者支援訓練（実践コース）の実績から、デザイン分野と近い分野を抜き出しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>分野</th>
                  <th className={`${th} text-right`}>コース数</th>
                  <th className={`${th} text-right`}>応募倍率</th>
                  <th className={`${th} text-right`}>受講者数</th>
                  <th className={`${th} text-right`}>実践コースに占める割合</th>
                  <th className={`${th} text-right`}>就職率</th>
                </tr>
              </thead>
              <tbody>
                {trainingRows.map((r) => (
                  <tr key={r.field}>
                    <td className={td}>{r.field}</td>
                    <td className={`${td} text-right`}>{r.course}</td>
                    <td className={`${td} text-right`}>{r.ratio}</td>
                    <td className={`${td} text-right`}>{r.people}</td>
                    <td className={`${td} text-right`}>{r.share}</td>
                    <td className={`${td} text-right`}>{r.job}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：厚生労働省「令和６年度 求職者支援訓練実績」。コース数・応募倍率・受講者数は令和6年度中に開始したコース、就職率は令和6年度中に終了したコースの訓練修了3か月後の就職状況（雇用保険適用）です。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            デザイン分野の応募倍率（1.39倍）は、実践コースの分野の中で最も高く、就職率（57.8％）は最も低い値でした。厚生労働省の「令和8年度 全国職業訓練実施計画」も、デザイン分野を「応募倍率が高く、就職率が低い分野」と位置づけ、就職率は50％〜60％台で比較的低調としています。そのうえで、IT・WEBデザイン関連の資格取得を目指すコースの委託費などの上乗せや、訓練で習得できるスキルの見える化を進めるとしています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            同じ実績で、デザイン分野の受講者は25〜29歳が22.4％で最も多く、30〜44歳の合計は42.8％でした（当サイトで年齢階層の割合を合計）。女性の割合は77.2％です。訓練を検討する際は、ハローワークで訓練内容と修了後の就職状況をご確認ください。デザインの経験を活かしてコードを書く職種へ移る場合は、<Link href="/career/designer-to-frontend/" className="text-blue-600 hover:underline">Webデザイナーからフロントエンドエンジニアへの転職</Link>で手順をご説明しています。
          </p>
        </section>

        <section id="exam" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ウェブデザイン技能検定の合格率（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ウェブデザイン技能検定は、厚生労働省から職業能力開発促進法第47条第1項にもとづく指定試験機関の指定を受けた、特定非営利活動法人インターネットスキル認定普及協会が実施する国家検定です。1級の合格者には厚生労働大臣から、2級・3級の合格者には協会理事長から「ウェブデザイン技能士」の合格証書が発行されます。学科・実技とも100点満点中70点以上が合格基準で、実技は各作業分類で配点の60％以上の得点も必要です。
          </p>

          <h3 className="font-bold text-slate-800 mb-2">等級ごとの受検資格・受検手数料・試験時間</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>等級</th>
                  <th className={th}>受検資格（いずれか1つ）</th>
                  <th className={th}>受検手数料</th>
                  <th className={th}>試験時間</th>
                </tr>
              </thead>
              <tbody>
                {eligibilityRows.map((r) => (
                  <tr key={r.grade}>
                    <td className={td}>{r.grade}</td>
                    <td className={td}>{r.cond}</td>
                    <td className={td}>{r.fee}</td>
                    <td className={td}>{r.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：インターネットスキル認定普及協会「受検資格」「受検手数料」「試験日程等」（2026年11月28日確認）。3級実技の手数料は、試験実施年度の4月1日時点で23歳未満の在職者は4,500円、在職者以外は6,800円です。学校卒業・訓練修了による受検資格は、協会が定めた科目が含まれると認めたものに限られます。</p>

          <h3 className="font-bold text-slate-800 mt-8 mb-2">年度別の合格率（2021〜2026年度）</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            協会が公表している「技能士資格取得状況」（令和8年9月28日現在）の受検者数と合格者数から、年度・等級ごとに合格率（合格者数÷受検者数）を当サイトで算出しました。2級・3級は年4回、1級は学科を第3回・実技を第4回に実施しています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th} rowSpan={2}>年度</th>
                  <th className={th} colSpan={3}>3級</th>
                  <th className={th} colSpan={3}>2級</th>
                  <th className={th} colSpan={3}>1級（実技の回）</th>
                </tr>
                <tr>
                  <th className={`${th} text-right`}>受検者</th>
                  <th className={`${th} text-right`}>合格者</th>
                  <th className={`${th} text-right`}>合格率</th>
                  <th className={`${th} text-right`}>受検者</th>
                  <th className={`${th} text-right`}>合格者</th>
                  <th className={`${th} text-right`}>合格率</th>
                  <th className={`${th} text-right`}>受検者</th>
                  <th className={`${th} text-right`}>合格者</th>
                  <th className={`${th} text-right`}>合格率</th>
                </tr>
              </thead>
              <tbody>
                {yearRows.map((r) => (
                  <tr key={r.fy}>
                    <td className={td}>{r.fy}</td>
                    <td className={`${td} text-right`}>{r.g3}</td>
                    <td className={`${td} text-right`}>{r.p3}</td>
                    <td className={`${td} text-right`}>{r.r3}</td>
                    <td className={`${td} text-right`}>{r.g2}</td>
                    <td className={`${td} text-right`}>{r.p2}</td>
                    <td className={`${td} text-right`}>{r.r2}</td>
                    <td className={`${td} text-right`}>{r.g1}</td>
                    <td className={`${td} text-right`}>{r.p1}</td>
                    <td className={`${td} text-right`}>{r.r1}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">算出方法：インターネットスキル認定普及協会「ウェブデザイン技能検定 技能士資格取得状況」（statistics20260928.pdf）の各回の受検者数・合格者数を年度ごとに合計し、合格者数÷受検者数で算出しました（2026年11月28日、当サイト実施）。各回の等級別の値の合計が、資料の「合計」列と一致することを9回分で確認しています。1級は、学科のみの第3回には合格者数の記載がないため、実技を行う第4回の値で算出しています。2026年度は第2回までの値です。</p>

          <h3 className="font-bold text-slate-800 mt-8 mb-2">2025年度の回別の内訳</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>回</th>
                  <th className={th}>3級（受検者→合格者）</th>
                  <th className={th}>2級（受検者→合格者）</th>
                  <th className={th}>1級</th>
                </tr>
              </thead>
              <tbody>
                {roundRows.map((r) => (
                  <tr key={r.round}>
                    <td className={td}>{r.round}</td>
                    <td className={td}>{r.g3}</td>
                    <td className={td}>{r.g2}</td>
                    <td className={td}>{r.g1}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：同上。合格率は当サイトの算出です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            2021〜2025年度の5年間を合計すると、3級は受検者14,238人のうち技能士9,358人で65.7％、2級は受検者3,570人のうち技能士1,703人で47.7％、1級は実技の回の受検者83人のうち技能士49人で59.0％でした。回ごとの差は大きく、3級は44.5〜83.4％、2級は25.1〜65.7％の範囲にあります。1回の結果だけで難易度を判断せず、目安としてご覧ください。2007年度の開始から2026年度第2回までの累計の技能士は、3級26,305人、2級4,849人、1級150人の合計31,304人です。なお、1級の実技は学科合格者などが受ける試験のため、1級の合格率は学科を含めた全体の難易度を示すものではありません。令和8年度は、第3回（1級学科・2級・3級）が2026年11月29日、第4回（1級実技・2級・3級）が2027年2月21日に予定されています。
          </p>
        </section>

        <section id="salary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">デザイナーの年収（賃金構造基本統計調査・当サイト算出）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            令和7年賃金構造基本統計調査の職種別の表に、Webデザイナーだけの区分はありません（当サイトで職種名を確認）。そのため、Webデザイナーを含む「デザイナー」の区分の値から、年収（きまって支給する現金給与額×12＋年間賞与その他特別給与額）を当サイトで算出しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>区分</th>
                  <th className={`${th} text-right`}>きまって支給する現金給与額（月）</th>
                  <th className={`${th} text-right`}>年間賞与その他特別給与額</th>
                  <th className={`${th} text-right`}>年収（当サイト算出）</th>
                </tr>
              </thead>
              <tbody>
                {wageRows.map((r) => (
                  <tr key={r.item}>
                    <td className={td}>{r.item}</td>
                    <td className={`${td} text-right`}>{r.monthly}</td>
                    <td className={`${td} text-right`}>{r.bonus}</td>
                    <td className={`${td} text-right`}>{r.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：厚生労働省「令和7年賃金構造基本統計調査」一般労働者 職種（小分類）第1表（産業計、e-Stat、2026年3月24日公開）。年収の算出は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            「デザイナー」の区分（企業規模10人以上・男女計）は、平均年齢39.1歳、平均勤続年数9.8年、推計の労働者数は約9.1万人でした。年収は企業規模による差が大きく、1,000人以上と10〜99人では約258万円の差があります。この区分には、日本標準職業分類の例示にあるとおり、グラフィックデザイナー、工業デザイナー、服飾デザイナーなども含まれるため、Webデザイナーの年収そのものではありません。また、平均値であり、地域・経験年数・雇用形態によって実際の金額は異なります。
          </p>
        </section>

        <section id="a11y" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">アクセシビリティと配色の確認（当サイトでの計算結果）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ウェブデザイン技能検定の出題範囲にJIS X 8341-3が含まれているとおり、障害のある方や高齢の方を含めて利用できるサイトを作ることは、Webデザイナーの仕事の一部です。障害者差別解消法は第8条第2項で事業者に合理的配慮の提供を求めており、内閣府によると、この義務化を含む改正法は2024年4月1日に施行されました。第5条では、合理的配慮を的確に行うための環境の整備に努めることも定めています。デジタル庁は、事業者向けの「ウェブアクセシビリティ導入ガイドブック」を公開しています。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            国際的な基準であるW3CのWCAG 2.2（2024年12月12日版）には、86の達成基準があります（レベルA 31件・AA 24件・AAA 31件、当サイトで集計）。デザインの工程に直接関わる基準の例は次のとおりです。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7 mb-4">
            <li>1.4.1 色の使用（レベルA）：色だけを情報の伝達や要素の区別の手段にしない</li>
            <li>1.4.3 コントラスト（最低限）（レベルAA）：文字と背景のコントラスト比を4.5:1以上（大きな文字は3:1以上）にする</li>
            <li>1.4.11 非テキストのコントラスト（レベルAA）：ボタンなどの部品を識別するための表示は、隣接する色と3:1以上にする</li>
            <li>2.5.8 ターゲットのサイズ（最低限）（レベルAA・2.2で追加）：ポインターで操作する対象を24×24 CSSピクセル以上にする（間隔などの例外あり）</li>
          </ul>
          <p className="text-xs text-slate-500 mb-6">出典：W3C「Web Content Accessibility Guidelines (WCAG) 2.2」（W3C Recommendation 12 December 2024）。日本語の要約は当サイトによるものです。達成基準の件数は、仕様のHTMLから適合レベルの記載を数えました（廃止された4.1.1を除く）。</p>

          <h3 className="font-bold text-slate-800 mb-2">当サイトの配色のコントラスト比</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            例として、本記事で使っている文字色と白背景（#ffffff）のコントラスト比を、WCAG 2.2の相対輝度の定義にもとづいて計算しました。文字色は、当サイトが使用しているTailwind CSS v4の色の定義（OKLCH）をsRGBに変換して求めています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>用途</th>
                  <th className={th}>色（sRGB）</th>
                  <th className={`${th} text-right`}>白背景とのコントラスト比</th>
                  <th className={th}>1.4.3（4.5:1）</th>
                </tr>
              </thead>
              <tbody>
                {contrastRows.map((r) => (
                  <tr key={r.hex}>
                    <td className={td}>{r.name}</td>
                    <td className={td}>{r.hex}</td>
                    <td className={`${td} text-right`}>{r.ratio}</td>
                    <td className={td}>{r.aa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto leading-6 mt-3">{contrastOutput}</pre>
          <p className="text-xs text-slate-500 mt-2">2026年11月28日に当サイトのPC（Python 3.9.6 標準ライブラリのみ）で実行した結果です。計算式の確認のため、黒と白（21:1）、#767676と白（4.54:1）も出力しています。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            本文・補足・リンクの文字色は、いずれも4.5:1を上回りました。補足の文字に使っているslate-500は4.76:1で、基準に近い値です。Webデザイナーは配色を決める段階で、このようにコントラスト比を数値で確かめることが求められます。公開前の確認項目の全体は<Link href="/knowledge/website-howto/" className="text-blue-600 hover:underline">Webサイトの作り方</Link>でご説明しています。
          </p>
        </section>

        <section id="related" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職・スキルの詳しい情報</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            本記事はWebデザイナーという職業の定義と仕事内容、なるための道筋に絞ってご説明しました。近いテーマは次の記事で扱っており、それぞれ目的が異なります。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7">
            <li>制作の指揮・監督を担う職種：<Link href="/knowledge/web-director/" className="text-blue-600 hover:underline">Webディレクターとは</Link></li>
            <li>プログラムを作る側の職種：<Link href="/knowledge/web-engineer/" className="text-blue-600 hover:underline">Webエンジニアとは</Link>・<Link href="/skill/frontend/" className="text-blue-600 hover:underline">フロントエンドエンジニア転職ガイド</Link></li>
            <li>デザインからコードを書く職種への転職：<Link href="/career/designer-to-frontend/" className="text-blue-600 hover:underline">Webデザイナーからフロントエンドエンジニアへの転職</Link></li>
            <li>画面設計・体験設計への転身：<Link href="/knowledge/uiux/" className="text-blue-600 hover:underline">UI/UXエンジニアへの転身ガイド</Link></li>
            <li>デザインツールのスキル：<Link href="/skill/figma/" className="text-blue-600 hover:underline">Figmaスキルの転職ガイド</Link></li>
            <li>サイトを公開する手順：<Link href="/knowledge/website-howto/" className="text-blue-600 hover:underline">Webサイトの作り方</Link></li>
            <li>IT職種の全体像：<Link href="/knowledge/it-engineer-types/" className="text-blue-600 hover:underline">ITエンジニアの種類一覧</Link></li>
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
            <li>JILPT「第5回改定 厚生労働省編職業分類 職業分類表」（017 デザイナー、017-01 ウェブデザイナー）：https://www.jil.go.jp/institute/seika/shokugyo/bunrui/documents/shokugyo05.pdf</li>
            <li>総務省「日本標準職業分類」（平成21年12月告示、小分類224 デザイナー）：https://www.soumu.go.jp/main_content/000661290.pdf</li>
            <li>総務省「国際標準職業分類2008年改定版（仮訳）グループ定義」（2166 グラフィック・マルチメディアデザイナー、2513）：https://www.soumu.go.jp/main_content/000397967.pdf</li>
            <li>インターネットスキル認定普及協会「ウェブデザイン技能検定」：https://www.webdesign.gr.jp/</li>
            <li>同「受検資格」：https://www.webdesign.gr.jp/summery/conditions/</li>
            <li>同「受検手数料」：https://www.webdesign.gr.jp/summery/commission/</li>
            <li>同「試験日程等」：https://www.webdesign.gr.jp/summery/schedule/</li>
            <li>同「合格発表」：https://www.webdesign.gr.jp/pass/</li>
            <li>同「技能士資格取得状況」（令和8年9月28日現在）：https://d3lssk6n5frq8k.cloudfront.net/img/2026/09/statistics20260928.pdf</li>
            <li>同「令和8年度 第3回 ウェブデザイン技能検定 3級 試験要項」：https://www.webdesign.gr.jp/img/2026/09/R08-3-3.pdf</li>
            <li>厚生労働省「ハロートレーニング」：https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/hellotraining_top.html</li>
            <li>厚生労働省「ハロートレーニング（公共職業訓練・求職者支援訓練）の全体像」：https://www.mhlw.go.jp/content/11800000/001494328.pdf</li>
            <li>厚生労働省「令和６年度 求職者支援訓練実績」：https://www.mhlw.go.jp/content/11800000/001629836.pdf</li>
            <li>厚生労働省「令和８年度 全国職業訓練実施計画」：https://www.mhlw.go.jp/content/11800000/001688222.pdf</li>
            <li>厚生労働省「令和7年賃金構造基本統計調査」一般労働者 職種（小分類）第1表（e-Stat）：https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421116</li>
            <li>厚生労働省「賃金構造基本統計調査 用語の解説」：https://www.mhlw.go.jp/toukei/list/chinginkouzou_b.html</li>
            <li>W3C「Web Content Accessibility Guidelines (WCAG) 2.2」：https://www.w3.org/TR/WCAG22/</li>
            <li>障害を理由とする差別の解消の推進に関する法律（e-Gov法令検索、第5条・第8条）：https://laws.e-gov.go.jp/law/425AC0000000065</li>
            <li>内閣府「障害を理由とする差別の解消の推進」：https://www8.cao.go.jp/shougai/suishin/sabekai.html</li>
            <li>デジタル庁「ウェブアクセシビリティ導入ガイドブック」：https://www.digital.go.jp/resources/introduction-to-web-accessibility-guidebook</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Webディレクターとは", href: "/knowledge/web-director/" },
              { name: "Webエンジニアとは", href: "/knowledge/web-engineer/" },
              { name: "Webデザイナーからフロントエンドエンジニアへの転職", href: "/career/designer-to-frontend/" },
              { name: "UI/UXエンジニアへの転身ガイド", href: "/knowledge/uiux/" },
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
