import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "セキュリティエンジニア転職の攻め方｜年収・資格・未経験【2026年】",
  description:
    "セキュリティエンジニアの転職市場を2026年6月時点の公的データで整理。job tag・レバテック年代別年収、情報処理安全確保支援士など資格の使いどころ、未経験可否、将来性、求人の探し方を実務目線で解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：セキュリティ転職の攻め方" },
  { id: "market", label: "市場・年収データ" },
  { id: "future", label: "将来性と需要の背景" },
  { id: "qualification", label: "資格の使いどころ（支援士・CISSP等）" },
  { id: "level", label: "求められる経験レベル" },
  { id: "career", label: "キャリアパスの選択肢" },
  { id: "find", label: "求人の探し方（強いサービス）" },
  { id: "entry", label: "未経験・他職種からの参入ルート" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
];

const qualifications = [
  { name: "情報処理安全確保支援士（登録セキスペ）", note: "国家資格。セキュリティ分野で唯一の士業系国家資格で、官公庁・金融・大手SIerの求人や入札要件で重視されやすい。日本の現場で評価の通りが良い。" },
  { name: "CISSP", note: "国際的に通用するセキュリティ資格。一定の実務経験が受験要件で、ハイクラス・外資系・マネジメント寄りのポジションで強い。" },
  { name: "CEH（Certified Ethical Hacker）", note: "攻撃者視点の知識を体系化。ペネトレーションテスト・脆弱性診断系の職種でアピールしやすい。" },
  { name: "クラウドセキュリティ認定", note: "AWS Security Specialty、Google Cloud Security Engineer等。クラウドセキュリティ案件の増加で価値が上がっている。" },
];

const faqs = [
  {
    q: "セキュリティエンジニアの平均年収は？",
    a: "厚生労働省 job tagの「セキュリティエキスパート（オペレーション）」「セキュリティエキスパート（脆弱性診断）」区分では、いずれも平均年収約609.8万円・平均年齢42.2歳（令和7年賃金構造基本統計調査の結果を加工）と公表されています。ただしこれは情報処理・通信技術者を広くまとめた区分の参考値です。年代別の目安としては、レバテック公表の正社員SE年収（2025年）で20代約378万円・30代約499万円・40代約618万円が参考になります。CISO・セキュリティアーキテクト等のハイクラス帯はこれより高い水準も見られます。",
  },
  {
    q: "セキュリティエンジニアは未経験でもなれる？",
    a: "完全未経験からいきなりは難しいものの、IT実務経験者からの転向は十分現実的です。ネットワーク・サーバー・クラウドの知識はセキュリティの土台になるため、インフラ／運用エンジニアからの転向が王道です。まずはSOCや脆弱性診断など入り口になりやすいポジションを狙い、現職でセキュリティ関連業務を担当して実績を作るのが近道です。情報処理安全確保支援士やCTFへの参加が学習の道しるべになります。",
  },
  {
    q: "セキュリティエンジニアの将来性は？",
    a: "サイバー攻撃の高度化・増加を背景に、需要は底堅いと考えられます。経済産業省「IT人材需給に関する調査」（2019年3月公表）では2030年に最大約79万人のIT人材不足が試算されており、セキュリティはその中でも人材確保が課題とされる領域です。法規制対応やクラウド普及で守る対象が増え続けるため、当面は売り手寄りの市場が続く見通しです。ただし具体的な不足人数の断定は避けるのが無難です。",
  },
  {
    q: "セキュリティエンジニアの転職で有利な資格は？",
    a: "日本の現場では情報処理安全確保支援士（登録セキスペ）が評価の通りが良く、官公庁・金融・大手SIerの求人で重視されやすい国家資格です。国際的・ハイクラス寄りならCISSP、攻撃者視点を示すならCEHが定番です。クラウド案件にはAWS Security SpecialtyやGoogle Cloud Security Engineer認定が有利に働きます。ただし採用判断の主役は実務経験で、資格は学習の体系化と書類選考の目印と位置づけるのが現実的です。",
  },
  {
    q: "インフラエンジニアからセキュリティへの転向は可能ですか？",
    a: "相性が良い転向です。ネットワーク・サーバー・クラウドの知識はそのままセキュリティの基盤になります。情報処理安全確保支援士やCISSPの取得、CTF参加、セキュリティツールのハンズオンで知識を補い、現職でセキュリティ関連タスクを担当して実績を積むと、転向のハードルが下がります。",
  },
  {
    q: "セキュリティエンジニアにおすすめの転職エージェントは？",
    a: "IT特化でセキュリティ求人を幅広く扱うレバテックキャリア、金融・通信・官公庁系の求人が豊富なリクルートエージェントIT、CISOクラスのハイクラス求人が集まるビズリーチの併用が候補です。スキルを数値で示したい人にはスキルチェック型のpaiza転職も選択肢になります。",
  },
  {
    q: "40代のセキュリティエンジニアでも転職できますか？",
    a: "むしろ有利に働きやすい分野です。セキュリティは経験と知見が重視され、CSIRT構築・インシデント対応・セキュリティポリシー策定などの経験を持つ層は、金融・官公庁・大手企業で評価されやすい傾向です。レバテック公表（2025年）でも年収は年代とともに上がる傾向で、積み上げが効く職種といえます。",
  },
];

export default function SecuritySkillPage() {
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
      <ArticleJsonLd
        title="セキュリティエンジニア転職の攻め方｜年収・資格・未経験【2026年】"
        description="セキュリティエンジニアの転職市場を2026年6月時点の公的データで整理。job tag・レバテック年代別年収、情報処理安全確保支援士など資格の使いどころ、未経験可否、将来性、求人の探し方を実務目線で解説します。"
        url="/skill/security/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "セキュリティエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          セキュリティエンジニア転職の攻め方｜年収・資格・未経験【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | セキュリティエンジニアの転職市場を公的データと年代別データで整理
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag「セキュリティエキスパート（オペレーション／脆弱性診断）」（令和7年賃金構造基本統計調査の結果を加工）",
            "レバテック公表 年代別平均年収（2025年）",
            "経済産業省「IT人材需給に関する調査」（2019年3月公表）",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-blue-600 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：セキュリティ転職の攻め方</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5 mb-4">
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              セキュリティは<strong>完全未経験からは難しいが、IT実務経験者の転向先としては有望</strong>な領域です。攻め方の軸は「既存のIT経験を土台に、セキュリティの専門性を一枚乗せる」こと。要点は3つです。
            </p>
            <ul className="text-sm text-blue-900 space-y-2">
              <li>① <strong>インフラ／ネットワーク／クラウドの経験</strong>を土台に、SOC・脆弱性診断など入り口ポジションから入る。</li>
              <li>② <strong>情報処理安全確保支援士（登録セキスペ）</strong>を中心に、日本の現場で通りの良い資格で学習と書類選考を補強する。</li>
              <li>③ IT特化エージェント（レバテックキャリア等）と<strong>金融・官公庁に強いリクルートエージェントIT</strong>を併用し、専任ポジションを拾う。</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            厚生労働省 job tagの「セキュリティエキスパート（オペレーション）」「セキュリティエキスパート（脆弱性診断）」区分では、いずれも<strong>平均年収約609.8万円・平均年齢42.2歳</strong>（令和7年賃金構造基本統計調査の結果を加工）と公表されています。ただしこれは情報処理・通信技術者を広くまとめた区分の参考値で、職種固有の精密値として扱うには注意が必要です。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            年代別の実感に近い目安としては、レバテックが公表する正社員SEの年代別平均年収（2025年）が参考になります。CISOやセキュリティアーキテクト等のハイクラス帯では、これより高い水準も見られます。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年代</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">正社員SE平均年収（参考）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">この年代でのセキュリティ領域の役割イメージ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["20代", "約378万円", "SOC監視・ログ分析・基本的なインシデント一次対応"],
                  ["30代", "約499万円", "脆弱性診断・インシデント対応を一人称で回す担当"],
                  ["40代", "約618万円", "CSIRTのリード・セキュリティ設計/ポリシー策定"],
                  ["50代", "約685万円", "セキュリティ戦略・組織マネジメント（CISO等）"],
                ].map(([age, salary, role], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{age}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{salary}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            ※出典：厚生労働省 job tag「セキュリティエキスパート（オペレーション／脆弱性診断）」（令和7年賃金構造基本統計調査の結果を加工）、レバテック公表 年代別平均年収（2025年）。役割イメージは求人要件の一般的傾向に基づく目安で、個別企業の提示額を保証するものではありません。
          </p>
        </section>

        {/* 将来性 */}
        <section id="future" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">将来性と需要の背景</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            セキュリティ領域の将来性は、検索でも特に関心が高いテーマです。結論として、需要は当面底堅いと考えられます。背景は次の通りです。
          </p>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">IT人材不足の中でも確保が課題な領域</h3>
              <p className="text-sm text-blue-700">
                経済産業省「IT人材需給に関する調査」（2019年3月公表）では2030年に最大約79万人のIT人材不足が試算されており、専門性の高いセキュリティ人材は中でも確保が難しい領域とされています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">守る対象の拡大</h3>
              <p className="text-sm text-blue-700">
                クラウド・SaaS・リモートワークの普及で守るべき範囲が広がり、ゼロトラストやクラウドセキュリティの需要が高まっています。攻撃の高度化とともに、対応できる人材の価値が上がり続けています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">法規制・コンプライアンス対応</h3>
              <p className="text-sm text-blue-700">
                個人情報保護やセキュリティ基準への対応は企業の必須事項です。経営課題として扱われるため、セキュリティ人材は景気変動の影響を受けにくい側面があります。
              </p>
            </div>
          </div>
        </section>

        {/* 資格 */}
        <section id="qualification" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">資格の使いどころ（支援士・CISSP等）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            セキュリティは資格が評価につながりやすい数少ない領域です。とはいえ「資格があれば受かる」わけではなく、<strong>学習の体系化と書類選考での目印</strong>として活用するのが正しい使い方です。目的別に整理します。
          </p>
          <div className="space-y-3">
            {qualifications.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{item.name}</h3>
                <p className="text-sm text-slate-600">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            日本国内の求人で評価の通りが良いのは<strong>情報処理安全確保支援士（登録セキスペ）</strong>です。とくに官公庁・金融・大手SIerでは入札要件や採用条件で重視されるケースがあり、転向の足がかりとして取得を検討する価値があります。
          </p>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル（求人要件の傾向）</h2>
          <div className="space-y-3">
            {[
              { t: "土台として求められやすい", d: "ネットワーク（TCP/IP・ファイアウォール）、サーバー/OS、クラウド（AWS/GCP/Azureいずれか）の基礎。既存のインフラ・運用経験はそのまま評価対象になります。" },
              { t: "セキュリティの中核として見られる", d: "脆弱性診断、ログ・インシデント分析、SIEM/EDR等のツール運用、セキュリティ基準（NIST/ISO等）の理解。" },
              { t: "差別化になる", d: "CSIRT構築・運営、ペネトレーションテスト、ゼロトラスト/クラウドセキュリティ設計、セキュリティポリシー策定・経営層への報告経験。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{item.t}</h3>
                <p className="text-sm text-slate-600">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* キャリアパス */}
        <section id="career" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスの選択肢</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">セキュリティアーキテクト路線</h3>
              <p className="text-sm text-blue-700">
                企業全体のセキュリティアーキテクチャを設計するスペシャリスト。ゼロトラスト設計、クラウドセキュリティ戦略、フレームワーク策定を担います。技術の深さと全体最適の視点が求められます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ペネトレーションテスター / レッドチーム路線</h3>
              <p className="text-sm text-blue-700">
                攻撃者視点で脆弱性を発見する専門職。高度な技術力と倫理観が求められ、希少性が高いポジションです。CEH等の資格と実機での検証経験がアピールになります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">CISO / セキュリティマネジメント路線</h3>
              <p className="text-sm text-blue-700">
                CSIRT運営、ポリシー策定、経営層へのリスク報告を担うCISO（最高情報セキュリティ責任者）へ。技術とビジネスの両面からセキュリティ戦略を推進する経営幹部ポジションです。
              </p>
            </div>
          </div>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方（どのサービスが強いか）</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT特化エージェント）</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web特化でセキュリティ求人を幅広く扱い、SOC・CSIRT・脆弱性診断などをカバー。技術理解のあるアドバイザーに相談しやすいのが利点です。</p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リクルートエージェントIT（国内最大級）</h3>
              <p className="text-sm text-slate-600 mb-2">圧倒的な求人数と非公開求人が強み。金融・通信・官公庁系のセキュリティ求人やCSIRT構築案件を含め、幅広く探したい人に向きます。</p>
              <Link href="/review/recruit-it/" className="text-sm text-blue-600 hover:underline">リクルートエージェントITの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">年収750万円以上のハイクラス帯に強く、CISOクラスやセキュリティアーキテクトのスカウトが届きやすい。外資系の求人も見られます。</p>
              <Link href="/review/bizreach-it/" className="text-sm text-blue-600 hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            複数併用の進め方は<Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">転職エージェントの複数併用ガイド</Link>、各社比較は<Link href="/compare/agents/" className="text-blue-600 hover:underline">IT転職エージェント比較</Link>もどうぞ。
          </p>
        </section>

        {/* 未経験・他職種からの参入ルート */}
        <section id="entry" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">未経験・他職種からの参入ルート</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            「完全未経験から」は難しい一方、IT実務経験があれば現実的に狙えます。インフラ／運用エンジニアからの転向が最も入りやすいルートです。
          </p>
          <div className="space-y-3">
            {[
              { n: "1", t: "土台のIT経験を棚卸しする", d: "ネットワーク・サーバー・クラウドの経験はそのままセキュリティの基盤。職務経歴書で『どこでセキュリティに触れたか』を具体的に言語化します。" },
              { n: "2", t: "資格と手を動かす学習で補う", d: "情報処理安全確保支援士を軸に学習を体系化し、CTFやセキュリティツールのハンズオンで実践感覚を養う。学習の証跡が転向時の説得力になります。" },
              { n: "3", t: "入り口ポジションから入る", d: "SOC監視・脆弱性診断など、未経験寄りでも入りやすいポジションを足がかりに。現職でセキュリティ関連タスクを担当し、実績を作ってから専任職へ寄せます。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.n}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.t}</h3>
                  <p className="text-sm text-slate-600">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            インフラ側の整理は<Link href="/skill/infrastructure/" className="text-blue-600 hover:underline">インフラエンジニア転職ガイド</Link>もあわせてどうぞ。
          </p>
        </section>

        {/* 30代・40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              セキュリティは<strong>経験と知見が重視され、年齢が不利になりにくい</strong>数少ない領域です。job tagのセキュリティエキスパート区分の平均年齢が<strong>42.2歳</strong>であることからも、ベテラン層が一定の比率を占めることが分かります。CSIRT構築・インシデント対応・ポリシー策定などの経験は、30代・40代だからこそ厚みを持って語れます。
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              30代・40代の現職エンジニアにとって、セキュリティは<strong>これまでのIT経験を捨てずに専門性を一枚乗せられる</strong>転向先です。インフラ・ネットワーク・クラウドの経験を土台に、情報処理安全確保支援士で学習を体系化すれば、年齢を強みに変えられます。金融・官公庁・大手企業では特にベテランの需要が安定しています。
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              年代別の市場感は<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職事情</Link>、年収の考え方は<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代エンジニアの年収相場</Link>もどうぞ。
            </p>
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
          <h2 className="text-xl font-bold mb-3">セキュリティエンジニアの市場価値を確認する</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントと金融・官公庁に強いエージェントを併用して、セキュリティスキルの今の評価を確かめましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
              { name: "AWSエンジニア転職ガイド", href: "/skill/aws/" },
              { name: "ネットワークエンジニア転職ガイド", href: "/skill/network/" },
              { name: "AI・機械学習エンジニア転職ガイド", href: "/skill/ai-ml/" },
              { name: "40代エンジニアの転職事情", href: "/age/40s/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
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
