import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "AIエンジニアとは｜仕事内容・必要スキル・職業分類・G検定とE資格の受験者推移【2026年】";
const DESCRIPTION =
  "AIエンジニアとは、AIモデルの開発や、AIを組み込んだシステムの実装・運用を担う技術者です。厚生労働省編職業分類での位置づけ、AI事業者ガイドラインの3つの主体、デジタルスキル標準のスキル項目、G検定・E資格の年別の受験者数と合格率（当サイト集計）を整理します。";
const URL = "/knowledge/ai-engineer/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "AIエンジニアの定義と公的な位置づけ" },
  { id: "work", label: "仕事内容（AI事業者ガイドラインの3主体から）" },
  { id: "skills", label: "必要なスキル（デジタルスキル標準ver.2.0）" },
  { id: "exam", label: "G検定・E資格の受験者数と合格率の推移" },
  { id: "difference", label: "データサイエンティストとの違い" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "AIエンジニアとは簡単に言うと何ですか？",
    a: "AIモデルを開発したり、AIを業務システムやサービスに組み込んで動かしたりする技術者です。厚生労働省編職業分類（2022年）では、「AIエンジニア」が小分類「010-99 その他の情報処理・通信技術者（ソフトウェア開発を除く）」の例示に挙げられています。職務の範囲を細かく定めた公的な定義はないため、実際の仕事内容は企業や求人ごとに確認する必要があります。",
  },
  {
    q: "AIエンジニアの仕事内容は何ですか？",
    a: "総務省・経済産業省の「AI事業者ガイドライン（第1.2版）」では、AIを開発する立場（AI開発者）の役割として、データ収集・前処理、AIモデルの学習と検証、AIシステムの構築、運用後の事後学習による性能の維持・改善が挙げられています。AIを既存のシステムやサービスに組み込む立場（AI提供者）では、AIシステムの検証、他システムとの連携の実装、運用のサポートが挙げられています。",
  },
  {
    q: "機械学習エンジニアや生成AIエンジニアとの違いは何ですか？",
    a: "当サイトが確認した厚生労働省編職業分類とIPAのデジタルスキル標準ver.2.0には、「機械学習エンジニア」「生成AIエンジニア」という名称はありませんでした。いずれも公的に定められた区分ではなく、企業によって呼び方や担当範囲が異なります。生成AIを使った開発に絞った転職の進め方は「生成AIエンジニアの転職ガイド」でご説明しています。",
  },
  {
    q: "AIエンジニアに資格は必要ですか？",
    a: "必須の資格はありません。日本ディープラーニング協会（JDLA）のE資格は「ディープラーニングを実装するエンジニアの技能を認定する資格試験」で、受験にはJDLA認定プログラムを試験日の過去2年以内に修了している必要があります（受験料は一般33,000円・税込）。G検定は受験資格の制限がなく、AI・ディープラーニングの活用リテラシーを問う検定です（一般13,200円・税込）。",
  },
  {
    q: "AIエンジニアとデータサイエンティストの違いは何ですか？",
    a: "厚生労働省編職業分類では、AIエンジニアは中分類「情報処理・通信技術者（ソフトウェア開発を除く）」の010-99に、データサイエンティストは中分類「その他の技術の職業」の011-99に例示されており、分類が分かれています。データサイエンティストはデータの解析から知見を導くことに重心があり、AIエンジニアはAIを動くシステムとして作り、運用することに重心がある、と整理できます。ただし、実際の求人では両方の業務を含むことも多くあります。",
  },
];

const roleRows = [
  {
    role: "AI開発者（AI Developer）",
    def: "AIシステムを開発する事業者（AIを研究開発する事業者を含む）",
    tasks: "AIモデル・アルゴリズムの開発、データ収集（購入を含む）、前処理、AIモデルの学習・検証、AIシステムの構築。運用後も、ドメイン知識の拡充や環境変化への対応、アライメントのための事後学習（Post Training）で性能を維持・改善する。一般的にはAPI仕様策定、入出力設計、AIモデルを動かすインフラ整備も担う",
  },
  {
    role: "AI提供者（AI Provider）",
    def: "AIシステムをアプリケーション、製品、既存のシステム、ビジネスプロセス等に組み込んだサービスとして提供する事業者",
    tasks: "AIシステムの検証、他システムとの連携の実装、AIシステム・サービスの提供、利用者側の運用サポートやAIサービスの運用。一般的にはUI/UX設計や既存業務システムとの統合も担う",
  },
  {
    role: "AI利用者（AI Business User）",
    def: "事業活動において、AIシステム又はAIサービスを利用する事業者",
    tasks: "提供者が意図した適正な利用、環境変化等の情報を提供者と共有して正常稼働を続けること、必要に応じて提供されたAIシステムを運用すること",
  },
];

const devPhaseRows = [
  { phase: "データ前処理時", items: "D-2）i. 適切なデータの学習／D-3）i. データに含まれるバイアスへの配慮" },
  { phase: "AI開発時", items: "D-2）ii. 人間の生命・身体・財産、精神及び環境に配慮した開発／D-2）iii. 適正利用に資する開発／D-3）ii. AIモデルのアルゴリズム等に含まれるバイアスへの配慮／D-5）i. セキュリティ対策のための仕組みの導入／D-6）i. 検証可能性の確保" },
  { phase: "AI開発後", items: "D-5）ii. 最新動向への留意／D-6）ii. 関連するステークホルダーへの情報提供／D-7）i. AI提供者への「共通の指針」の対応状況の説明／D-7）ii. 開発関連情報の文書化／D-10）i. イノベーションの機会創造への貢献" },
];

const skillRows = [
  { item: "機械学習・深層学習", desc: "機械学習や深層学習、自然言語処理・画像認識・音声認識などの手法を用いて、適切なモデルを構築し評価するスキル", ex: "機械学習、深層学習、強化学習／非構造化データ処理／大規模言語モデル、画像生成モデル、オーディオ生成モデル、動画生成モデル" },
  { item: "AI実装・運用", desc: "生成AI、AIエージェント、マルチモーダル、IoTなどのAIシステム開発を実装し、運用管理を現場定着させるスキル", ex: "AIシステム運用（AutoML、MLOps、AIOps）、生成AI（生成AI開発・活用、コーディング支援、ファインチューニング）、AIエージェント、マルチモーダルAI" },
  { item: "数理統計・多変量解析・データ可視化", desc: "統計学的知見に基づく手法を用いて、データを解析し、その結果を洞察するスキル", ex: "線形代数基礎、微分・積分基礎、統計数理基礎、特徴量エンジニアリング、回帰・分類、時系列分析、異常検知、レコメンド" },
  { item: "データ関連法令などの理解やルール整備と遵守の推進", desc: "法令・規制・倫理や組織の規程を理解し、AI活用を含むデータ利活用のルール・基準を設計するスキルなど", ex: "AI法、知的財産法、個人情報保護法等の国内法令、データガバナンス、AIガバナンス" },
];

const examRows = [
  { year: "2024年", eTaker: "2,100", ePass: "1,467", eRate: "69.9", gTaker: "27,769", gPass: "20,190", gRate: "72.7" },
  { year: "2025年", eTaker: "2,082", ePass: "1,442", eRate: "69.3", gTaker: "41,585", gPass: "31,940", gRate: "76.8" },
  { year: "2026年", eTaker: "2,379", ePass: "1,623", eRate: "68.2", gTaker: "70,727", gPass: "55,783", gRate: "78.9" },
];

const th = "border border-slate-200 px-3 py-2 text-left";
const td = "border border-slate-200 px-3 py-2";

export default function AiEngineerKnowledgePage() {
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
          { name: "AIエンジニアとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          AIエンジニアとは｜仕事内容・必要スキル・職業分類・G検定とE資格の受験者推移
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月27日 | 公式資料の確認日: 2026年11月27日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】AIエンジニアとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>AIエンジニアとは、AIモデルを開発したり、AIを業務システムやサービスに組み込んで実装・運用したりする技術者です。職務の範囲を細かく定めた公的な定義はなく、担当範囲は企業によって異なります。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・厚生労働省編職業分類（2022年）では、「010-99 その他の情報処理・通信技術者（ソフトウェア開発を除く）」の例示に「AIエンジニア」が挙げられています</li>
              <li>・AI事業者ガイドライン（第1.2版）では、AI開発者の役割を「データ収集、前処理、AIモデル学習及び検証を通してAIシステムを構築する」ことなどと説明しています</li>
              <li>・関連資格のE資格（実装者向け）の受験者は年2,000人台で横ばい、G検定（リテラシー）は2024年の約2.8万人から2026年の約7.1万人に増えています（当サイト集計）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、厚生労働省編職業分類、総務省・経済産業省の「AI事業者ガイドライン（第1.2版）」、IPAの「デジタルスキル標準ver.2.0」、日本ディープラーニング協会（JDLA）の試験結果の発表をもとに、AIエンジニアの位置づけ・仕事内容・必要なスキルを整理します。転職の進め方や年収は扱わず、職種の理解に役立つ情報に絞っています。
        </p>

        <DataNote
          surveyedAt="2026年11月27日"
          sources={["JILPT「第5回改定 厚生労働省編職業分類」", "総務省・経済産業省「AI事業者ガイドライン（第1.2版）」", "IPA「デジタルスキル標準ver.2.0」", "日本ディープラーニング協会 G検定・E資格 結果発表", "e-Gov法令検索「人工知能関連技術の研究開発及び活用の推進に関する法律」"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">AIエンジニアの定義と公的な位置づけ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「AIエンジニア」という職種名について、公的な資料での扱いを並べました。このうち職種名として明記されているのは職業分類の例示のみで、業務の範囲を定めた定義はありません。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>資料</th>
                  <th className={th}>扱い</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>厚生労働省編職業分類（2022年）</td><td className={td}>小分類「010-99 その他の情報処理・通信技術者（ソフトウェア開発を除く）」の例示。同じ小分類にデータエンジニア、ビッグデータエンジニア、セキュリティエンジニア（脆弱性診断）、情報システム監査技術者が並んでいます</td></tr>
                <tr><td className={td}>人工知能関連技術の研究開発及び活用の推進に関する法律（令和7年法律第53号）</td><td className={td}>職種の定義はありません。第2条で「人工知能関連技術」を「人工的な方法により人間の認知、推論及び判断に係る知的な能力を代替する機能を実現するために必要な技術」と、それを利用して入力された情報を処理し結果を出力する情報処理システムに関する技術と定めています</td></tr>
                <tr><td className={td}>IPA デジタルスキル標準ver.2.0（2026年4月）</td><td className={td}>「AIエンジニア」という名称のロールはありません。AIに関する能力は、スキル項目「機械学習・深層学習」「AI実装・運用」などとして示されています</td></tr>
                <tr><td className={td}>AI事業者ガイドライン（第1.2版、2026年3月31日）</td><td className={td}>職種ではなく、AIに関わる事業者（又は部門）を「AI開発者」「AI提供者」「AI利用者」の3つに分けて役割を定義しています</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：JILPT「第5回改定 厚生労働省編職業分類」、e-Gov法令検索、IPA「デジタルスキル標準ver.2.0」、総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編p.5。デジタルスキル標準の記載は当サイトがPDF全文を検索して確認したものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            職業分類で、AIエンジニアはソフトウェア開発技術者とは別の「その他の情報処理・通信技術者（ソフトウェア開発を除く）」に置かれています。一方、データサイエンティストは小分類「011-99 他に分類されない技術の職業」に例示されており、AIエンジニアとは別の分類です。AI法（2025年9月全面施行）は、国が人工知能関連技術の各段階で必要となる人材の確保・養成に必要な施策を講ずることを第14条で定めています。
          </p>
        </section>

        <section id="work" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">仕事内容（AI事業者ガイドラインの3主体から）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            AI事業者ガイドラインの3つの主体の定義から、エンジニアが手を動かす作業にあたる記述を当サイトで抜き出しました。ガイドラインは事業者の区分ですが、同じ「AIエンジニア」でも、どの立場の業務を担うかで仕事内容が大きく変わることがわかります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>主体</th>
                  <th className={th}>ガイドラインの定義</th>
                  <th className={th}>担う作業（ガイドラインの記述から抜き出し）</th>
                </tr>
              </thead>
              <tbody>
                {roleRows.map((r) => (
                  <tr key={r.role}>
                    <td className={td}>{r.role}</td>
                    <td className={td}>{r.def}</td>
                    <td className={td}>{r.tasks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編p.5（脚注8を含む）。ガイドラインは、AIの活用方法によっては同一の事業者が複数の主体を兼ねる場合もあるとしています。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            AIモデルそのものを作る仕事はAI開発者、既存の業務システムにAIを組み込む仕事はAI提供者の役割に近いと考えられます。ガイドラインは、AI開発者について「AIモデルを直接的に設計し変更を加えることができるため、AIシステム・サービス全体においてもAIの出力に与える影響力が高い」と説明し、開発の段階ごとに重要な事項を挙げています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>段階</th>
                  <th className={th}>AI開発者にとって重要な事項</th>
                </tr>
              </thead>
              <tbody>
                {devPhaseRows.map((r) => (
                  <tr key={r.phase}>
                    <td className={td}>{r.phase}</td>
                    <td className={td}>{r.items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：総務省・経済産業省「AI事業者ガイドライン（第1.2版）」本編 第3部「AI開発者に関する事項」。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            モデルの精度を上げることに加えて、学習データの適正な扱い、バイアスへの配慮、検証可能性の確保、開発情報の文書化までが開発者の役割として整理されています。AIエンジニアの業務は、モデルを作って終わりではなく、説明や記録を含む運用まで続くと考えておくのがよいでしょう。
          </p>
        </section>

        <section id="skills" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">必要なスキル（デジタルスキル標準ver.2.0）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAのデジタルスキル標準ver.2.0（2026年4月）の共通スキルリストから、AIエンジニアの業務に関係の深いスキル項目を当サイトで選びました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>スキル項目</th>
                  <th className={th}>IPAの説明</th>
                  <th className={th}>学習項目例（抜粋）</th>
                </tr>
              </thead>
              <tbody>
                {skillRows.map((r) => (
                  <tr key={r.item}>
                    <td className={td}>{r.item}</td>
                    <td className={td}>{r.desc}</td>
                    <td className={td}>{r.ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「デジタルスキル標準ver.2.0」第Ⅲ部 第2章 DX推進スキル標準の構成（p.69ほか）。項目の選定は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            実装の面では、JDLAのE資格のシラバスが参考になります。確率・統計、情報理論、機械学習の基礎、順伝播型ネットワーク・畳み込みニューラルネットワーク・Transformerなどの深層学習、画像認識・自然言語処理・生成モデルなどの応用、分散処理・アクセラレータ・環境構築などの開発・運用環境が範囲に含まれています。ソースコードを含む問題はPythonで出題され、PyTorchまたはTensorFlowを選んで受験します。
          </p>
        </section>

        <section id="exam" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">G検定・E資格の受験者数と合格率の推移</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            JDLAが試験回ごとに発表している受験者数・合格者数を、当サイトで年別に合計しました。E資格は実装するエンジニア向け、G検定はAIを活用する立場の人も含めたリテラシー向けの試験です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>年</th>
                  <th className={`${th} text-right`}>E資格 受験者数</th>
                  <th className={`${th} text-right`}>E資格 合格者数</th>
                  <th className={`${th} text-right`}>E資格 合格率</th>
                  <th className={`${th} text-right`}>G検定 受験者数</th>
                  <th className={`${th} text-right`}>G検定 合格者数</th>
                  <th className={`${th} text-right`}>G検定 合格率</th>
                </tr>
              </thead>
              <tbody>
                {examRows.map((r) => (
                  <tr key={r.year}>
                    <td className={td}>{r.year}</td>
                    <td className={`${td} text-right`}>{r.eTaker}</td>
                    <td className={`${td} text-right`}>{r.ePass}</td>
                    <td className={`${td} text-right`}>{r.eRate}％</td>
                    <td className={`${td} text-right`}>{r.gTaker}</td>
                    <td className={`${td} text-right`}>{r.gPass}</td>
                    <td className={`${td} text-right`}>{r.gRate}％</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 当サイト集計。E資格は各年2回（#1・#2）、G検定は2024年が6回、2025年が6回と会場試験1回、2026年が6回（第2・3・5回はオンライン試験と会場試験の合計）です。合格率は年間の合格者数÷受験者数で、小数第2位を四捨五入しています。出典：JDLA「2026年 第2回 E資格」結果発表（2026年9月18日）、「2026年 第5回 G検定」開催結果（2026年9月24日）、「2026年 第6回 G検定」開催結果（2026年11月24日）。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            G検定の受験者は2024年から2026年にかけて約2.5倍に増えた一方、E資格は年2,100〜2,400人程度でほぼ横ばいです（当サイト算出）。AIの基礎知識を身につけたい人は大きく増えていますが、実装の技能を認定する資格の受験者は限られており、累計合格者数もG検定181,842名に対してE資格11,550名です（各試験の直近の発表時点）。
          </p>
          <p className="text-slate-600 leading-relaxed">
            合格者の職種にも違いがあります。2026年第2回E資格の合格者712名のうち「研究・開発」は28.37％、「情報システム・システム企画」は32.02％で、合わせて約6割です。2026年第6回G検定の合格者13,805名では、この2つの合計は35.78％で、「営業・販売」が15.25％を占めています（合計は当サイト算出）。
          </p>
        </section>

        <section id="difference" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">データサイエンティストとの違い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            職業分類では、AIエンジニアは情報処理・通信技術者（010-99）、データサイエンティストは他に分類されない技術の職業（011-99）に例示されています。デジタルスキル標準ver.2.0では、データサイエンティストの類型に「データサイエンスプロフェッショナル」などのロールがあり、データの処理・解析を行い、その結果を評価して知見を生み出す役割とされています。データサイエンティストの定義とロールの詳細は<Link href="/knowledge/data-scientist/" className="text-blue-600 hover:underline">データサイエンティストとは</Link>でご説明しています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            Stack Overflow Developer Survey 2025では、自分の職種を「AI/MLエンジニア」と答えた人は1.4％、「データサイエンティスト」は1.2％でした。一方、開発にAIツールを使っている、または使う予定と答えた人は84％にのぼります。AIツールを使う開発者は多数派になっていますが、AIそのものを作る職種はまだ少数であることがうかがえます。転職の進め方は<Link href="/skill/ai-ml/" className="text-blue-600 hover:underline">AI・機械学習エンジニア転職の進め方</Link>と<Link href="/skill/generative-ai/" className="text-blue-600 hover:underline">生成AIエンジニアの転職ガイド</Link>、エージェントの選び方は<Link href="/compare/ai-agents/" className="text-blue-600 hover:underline">AI・機械学習エンジニアの転職エージェント比較</Link>をご覧ください。
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
            <li>JILPT「第5回改定 厚生労働省編職業分類」：https://www.jil.go.jp/institute/seika/shokugyo/bunrui/documents/shokugyo05.pdf</li>
            <li>e-Gov法令検索「人工知能関連技術の研究開発及び活用の推進に関する法律」：https://laws.e-gov.go.jp/law/507AC0000000053</li>
            <li>経済産業省「AI事業者ガイドライン（第1.2版）」：https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/20260331_report.html</li>
            <li>総務省・経済産業省「AI事業者ガイドライン（第1.2版）本編」：https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/pdf/20260331_1.pdf</li>
            <li>IPA「デジタルスキル標準」ダウンロード：https://www.ipa.go.jp/jinzai/skill-standard/dss/download.html</li>
            <li>IPA「デジタルスキル標準ver.2.0」：https://www.ipa.go.jp/jinzai/skill-standard/dss/rcu1hd000000j76k-att/dss_ver2.0.pdf</li>
            <li>日本ディープラーニング協会「E資格とは」：https://www.jdla.org/certificate/engineer/</li>
            <li>日本ディープラーニング協会「G検定とは」：https://www.jdla.org/certificate/general/</li>
            <li>日本ディープラーニング協会「2026年 第1回 E資格」結果発表：https://www.jdla.org/news/20260313002/</li>
            <li>日本ディープラーニング協会「2026年 第2回 E資格」結果発表：https://www.jdla.org/news/20260918001/</li>
            <li>日本ディープラーニング協会「2026年 第5回 G検定」開催結果：https://www.jdla.org/news/20260924001/</li>
            <li>日本ディープラーニング協会「2026年 第6回 G検定」開催結果：https://www.jdla.org/news/20261124001/</li>
            <li>Stack Overflow「2025 Developer Survey」Developers：https://survey.stackoverflow.co/2025/developers</li>
            <li>Stack Overflow「2025 Developer Survey」AI：https://survey.stackoverflow.co/2025/ai</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "AI・機械学習エンジニア転職の進め方", href: "/skill/ai-ml/" },
              { name: "生成AIエンジニアの転職ガイド", href: "/skill/generative-ai/" },
              { name: "AI・機械学習エンジニアの転職エージェント比較", href: "/compare/ai-agents/" },
              { name: "データサイエンティストとは", href: "/knowledge/data-scientist/" },
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
