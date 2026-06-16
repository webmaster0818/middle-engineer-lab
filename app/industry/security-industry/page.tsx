import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "セキュリティ業界へのエンジニア転職ガイド｜30代40代の戦略";
const DESC =
  "情報セキュリティ業界（SOC・脆弱性診断・セキュリティ製品）へエンジニア転職する方法を解説。活かせるスキルと埋めるギャップ、年収の考え方、30代40代の進め方を公的データで整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
};

const toc = [
  { id: "conclusion", label: "結論：セキュリティ業界への転職は現実的か" },
  { id: "trend", label: "セキュリティ業界の概要・採用動向" },
  { id: "skill-gap", label: "活かせるスキルと埋めるべきギャップ" },
  { id: "patterns", label: "転職パターン（職種×企業タイプ）" },
  { id: "salary", label: "年収の考え方" },
  { id: "company-types", label: "主な企業タイプと例" },
  { id: "steps", label: "転職の進め方" },
  { id: "midlife", label: "30代・40代の視点" },
  { id: "agents", label: "相談先エージェント" },
  { id: "faq", label: "よくある質問" },
];

const skillGap = [
  ["ネットワーク・インフラ運用の経験", "そのまま強みになる", "通信やログ、機器構成を理解した運用経験はSOCや診断業務の土台として評価される"],
  ["サーバー・OS・クラウドの構築運用", "そのまま強みになる", "攻撃面を理解するうえで、実際に作って守った経験は説得力を持つ"],
  ["開発（Web/アプリ）の実務経験", "部分的に活かせる", "脆弱性診断やセキュアコーディングで活きるが、攻撃者視点の知識は別途必要"],
  ["セキュリティ専門知識（脅威・攻撃手法・対策）", "埋めるべきギャップ", "OWASP・脆弱性・インシデント対応など、体系的な学習と実践が問われやすい"],
  ["関連資格・実践経験（CTF・診断実績）", "埋めるべきギャップ", "情報処理安全確保支援士やベンダー資格、手を動かした実績が裏付けになる"],
];

const patterns = [
  ["SOCアナリスト・セキュリティ監視", "SOC運用・MSSP", "ログ監視・インシデント検知。ネットワーク/インフラ運用経験者に向く入口"],
  ["脆弱性診断・ペネトレーションテスト", "診断ベンダー・セキュリティ企業", "Web/アプリ/ネットワーク診断。開発経験＋攻撃者視点を磨くルート"],
  ["セキュリティエンジニア（製品・基盤）", "セキュリティ製品ベンダー・SIer", "認証・暗号・WAF・SIEMなどの設計実装。インフラ/開発経験が活きる"],
  ["コーポレートセキュリティ・社内SOC", "事業会社の情シス・CSIRT", "自社の対策・規程・教育を担う。業務理解とIT運用経験が活きる"],
];

const companyTypes = [
  ["セキュリティ専門ベンダー", "脆弱性診断、SOC/MSSP、製品開発などを専門に行う。専門性を深めやすい", "セキュリティを軸にキャリアを築きたい人"],
  ["SIer・ITベンダーのセキュリティ部門", "顧客向けにセキュリティ設計・構築・運用を提供。上流から関われる", "顧客折衝や上流志向の人"],
  ["クラウド・プラットフォーム事業者", "自社サービスのセキュリティを担う。クラウドセキュリティの知見が活きる", "クラウド領域に強みを持ちたい人"],
  ["事業会社のCSIRT・社内SOC", "自社のインシデント対応・ガバナンス・教育を担う。業務に近い立場で守る", "自社を守る立場で幅広く関わりたい人"],
];

const faqs = [
  {
    q: "インフラやネットワークの経験はセキュリティ転職で評価されますか？",
    a: "評価されやすい領域です。SOCの監視や脆弱性診断は、通信・ログ・機器構成・OSの理解が土台になるため、インフラやネットワークの運用経験は強みになります。そこへ攻撃手法や脅威の知識を加えると、未経験からでもセキュリティ職に踏み込みやすくなります。",
  },
  {
    q: "開発経験しかなくてもセキュリティ業界に転職できますか？",
    a: "可能性はあります。Web/アプリの開発経験は脆弱性診断やセキュアコーディング、プロダクトセキュリティで活きます。OWASPなどの体系的な知識を学び、CTFや自分の環境での検証など手を動かした実績を示せると、診断職やプロダクトセキュリティのポジションで強みを出しやすくなります。",
  },
  {
    q: "資格は転職に有利になりますか？",
    a: "セキュリティ領域は資格が客観的な裏付けになりやすい分野です。情報処理安全確保支援士（登録セキスペ）やクラウド/ベンダー系の認定は技術力の証明として役立つことがあります。ただし資格そのものより、攻撃や対策を実際に手を動かして語れるかが重視されます。",
  },
  {
    q: "セキュリティ転職で年収はどう変わりますか？",
    a: "断定はできませんが、レバテックが公表する正社員SEの年代別平均年収は30代約499万円・40代約618万円（2025年）で、これが一つの目安になります。セキュリティでも年収レンジは幅広く、診断・SOC・製品開発などポジションや専門性によって異なります。実際の提示額は企業・スキルで大きく異なるため、複数社で比較してください。",
  },
  {
    q: "セキュリティではどんな技術が求められますか？",
    a: "求人傾向としてはネットワーク・OS・クラウドの基礎、ログ分析、脆弱性（OWASP Top10など）、インシデント対応が基本になりやすいです。SOCならSIEM、診断ならWeb/ネットワーク診断、製品開発なら認証・暗号の知識が問われます。具体的な要件は企業ごとに異なるため、求人票で確認してください。",
  },
  {
    q: "30代・40代でもセキュリティに転職できますか？",
    a: "インフラ・開発の経験が土台として活きやすい領域のため、年齢だけが理由で不利になるとは限りません。30代は専門知識の習得、40代はマネジメントやガバナンス、規程・教育など「組み合わせの価値」を打ち出すと、ミドル層ならではの強みを示しやすくなります。",
  },
  {
    q: "未出典の市場規模や成長率は記載していますか？",
    a: "本記事では確認できない市場規模・成長率の数値は記載していません。年収などは出典と時点を明記した公開データのみを用い、業界動向は公開情報に基づく傾向として記述しています。",
  },
];

const related = [
  { name: "セキュリティエンジニア転職ガイド（スキル）", href: "/skill/security/" },
  { name: "インフラエンジニア転職ガイド（スキル）", href: "/skill/infrastructure/" },
  { name: "ネットワークエンジニア転職ガイド（スキル）", href: "/skill/network/" },
  { name: "クラウド（AWS）エンジニア転職", href: "/skill/aws/" },
  { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
  { name: "レバテックキャリアの評判", href: "/review/levtech/" },
];

export default function SecurityIndustryPage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url="/industry/security-industry/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "セキュリティ業界へのエンジニア転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          セキュリティ業界へのエンジニア転職ガイド｜30代・40代の現実的な戦略
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | インフラ・開発の経験をセキュリティ領域で活かす方法
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          サイバー攻撃の高度化やクラウド・リモートワークの普及を背景に、情報セキュリティの重要性は高まり続けています。SOC（監視）、脆弱性診断、インシデント対応、セキュリティ製品開発など、エンジニアが関わる領域は幅広く、インフラやネットワーク、開発の経験を土台にキャリアチェンジしやすい分野でもあります。本記事では、エンジニアがセキュリティ業界へ転職する現実的な道筋を、公開データと公的統計をもとに整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表 年代別平均年収（2025年）",
            "doda 決定年収レポート（2025年5月公表）",
            "経済産業省 IT人材需給に関する調査（2019年公表）",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ul className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：セキュリティ業界への転職は現実的か</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-5 mb-4">
            <p className="text-slate-700 leading-relaxed mb-3">
              <span className="font-bold text-blue-800">結論：インフラ・ネットワーク・開発の経験を持つエンジニアにとって、セキュリティ転職は十分現実的です。</span>
              守る対象を理解している人は、攻撃者視点の知識を加えることでセキュリティ職に踏み込みやすくなります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・ネットワーク・OS・クラウドの運用経験はSOCや診断の土台として活きる</li>
              <li>・一方で脅威・攻撃手法・インシデント対応など専門知識は多くの求人で問われる</li>
              <li>・30代は専門知識の習得、40代はガバナンス＋マネジメントで勝負しやすい</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            まずは「自分の経験がどの領域（SOC・診断・製品・社内CSIRT）で活きるか」を見極め、不足する専門知識を補う計画を立てるのが近道です。
          </p>
        </section>

        {/* 業界動向 */}
        <section id="trend" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">セキュリティ業界の概要・採用動向</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            セキュリティ業界では、SOC運用やMSSP（マネージドセキュリティサービス）、脆弱性診断、セキュリティ製品開発、事業会社のCSIRT構築など、幅広い領域で人材ニーズが見られます。攻撃の高度化やクラウド移行に伴い、守るべき範囲が広がっており、技術と専門知識を兼ね備えた人材が求められています（公開情報に基づく傾向）。市場規模や成長率の具体値は出典が確認できないため本記事では記載しません。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">専門人材の希少性</h3>
              <p className="text-sm text-slate-600">
                攻撃手法と防御の両方を理解し、インシデント発生時に手を動かせるエンジニアは多くありません。インフラや開発の素地に専門知識を重ねた人材は、セキュリティ企業や事業会社で重宝されやすい傾向があります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">IT人材不足という追い風</h3>
              <p className="text-sm text-slate-600">
                経済産業省「IT人材需給に関する調査」（2019年公表）では、2030年に最大約79万人のIT人材不足が試算されています（2019年公表の試算）。セキュリティのように専門性が問われる人材は、こうした需給環境のなかで相対的に動きやすい立場にあります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">クラウドセキュリティの広がり</h3>
              <p className="text-sm text-slate-600">
                クラウド移行が進むなかで、クラウド環境の設定・権限・監視を守るスキルの需要が見られます。AWS/GCP/Azureの運用経験を持つエンジニアは、クラウドセキュリティ領域で経験を活かせる場面があります。
              </p>
            </div>
          </div>
        </section>

        {/* スキルギャップ */}
        <section id="skill-gap" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活かせるスキルと埋めるべきギャップ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700">スキル・経験</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 whitespace-nowrap">転職での扱い</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">補足</th>
                </tr>
              </thead>
              <tbody>
                {skillGap.map(([s, j, d], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-t border-slate-200 align-top">{s}</th>
                    <td className="px-4 py-3 text-petrol font-medium border-t border-slate-200 align-top whitespace-nowrap">{j}</td>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            ポイントは「強み（インフラ・開発の素地）を主役に、ギャップ（攻撃者視点・専門知識）を補う」という見せ方です。職務経歴書では守ってきたシステムの規模や運用実績を具体化し、学習中の領域や実践（CTF・検証環境）と合わせて伝えると説得力が増します。
          </p>
        </section>

        {/* 転職パターン */}
        <section id="patterns" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職パターン（職種×企業タイプ）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700">職種</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">主な企業タイプ</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">向いている人・特徴</th>
                </tr>
              </thead>
              <tbody>
                {patterns.map(([r, c, d], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-t border-slate-200 align-top whitespace-nowrap">{r}</th>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200 align-top">{c}</td>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            専門知識がこれからの場合は、いきなり高度な診断を狙うより、SOCアナリストや社内SOC経由で実務に触れ、知識を深めてからステップアップする道もあります。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            セキュリティ企業の年収はレンジが広く、確認可能な一律の平均値はありません。判断材料として、公的・公表データを目安に使うのが現実的です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700">データ</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">数値</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">出典・時点</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["正社員SE 30代 平均年収", "約499万円", "レバテック公表（2025年）"],
                  ["正社員SE 40代 平均年収", "約618万円", "レバテック公表（2025年）"],
                  ["年収1,000万円以上の割合（30代）", "8.01%", "レバテック公表（2025年）"],
                  ["年収1,000万円以上の割合（40代）", "12.67%", "レバテック公表（2025年）"],
                  ["IT・通信の平均決定年収", "486万円（2024年度）", "doda 決定年収レポート（2025年5月公表）"],
                ].map(([k, v, src], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-t border-slate-200 align-top">{k}</th>
                    <td className="px-4 py-3 text-petrol font-medium border-t border-slate-200 align-top whitespace-nowrap">{v}</td>
                    <td className="px-4 py-3 text-slate-500 border-t border-slate-200 text-xs align-top">{src}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            年収を上げる現実的な手段は、(1) インフラ/開発の素地を活かせる求人を選ぶ、(2) 専門知識や資格で応募できる幅を広げる、(3) 複数エージェントで提示額を比較し交渉材料にする、の3点です。詳しくは
            <Link href="/knowledge/salary-change/" className="text-petrol hover:underline">エンジニア転職で年収は上がるか</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 企業タイプ */}
        <section id="company-types" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主な企業タイプと例</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            セキュリティ領域には、専門ベンダー、SIerのセキュリティ部門、クラウド事業者、事業会社のCSIRTなど、立場の異なる選択肢があります。職種・技術領域の詳細は
            <Link href="/skill/security/" className="text-petrol hover:underline">セキュリティエンジニアのスキルガイド</Link>
            もあわせて確認してください。
          </p>
          <div className="space-y-4">
            {companyTypes.map(([name, desc, fit], i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{name}</h3>
                <p className="text-sm text-slate-600 mb-2">{desc}</p>
                <p className="text-xs text-petrol-deep">向いている人：{fit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 進め方 */}
        <section id="steps" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職の進め方</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "経験を棚卸しする", desc: "守ってきたシステムの領域（ネットワーク・サーバー・クラウド・アプリ）、運用・障害対応の実績を具体的に整理する。数値化できる成果は必ず洗い出す。" },
              { step: "2", title: "不足する専門知識を補う計画を立てる", desc: "OWASP・脆弱性・インシデント対応・SIEMなど、求人で問われやすい領域を3〜6ヶ月で学習。CTFや検証環境で手を動かすと説得力が増す。" },
              { step: "3", title: "活きる領域を見極める", desc: "SOC・診断・製品開発・社内CSIRTのうち、自分の経験が最も活きる領域に絞ってターゲット企業を選定する。" },
              { step: "4", title: "エージェント2社以上に登録する", desc: "IT特化のレバテックキャリアと、ハイクラス志向ならビズリーチなどに登録。求人と担当者を比較し、市場価値を客観的に把握する。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="midlife" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：素地＋専門知識の二刀流を作る</h3>
              <p className="text-sm text-petrol-deep">
                インフラや開発を理解したうえでセキュリティの専門知識を積めると、純粋な運用者にも純粋なセキュリティ志望者にも代えがたい価値になります。専門知識の習得に投資する価値が最も高い年代です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：ガバナンスとマネジメントを軸に</h3>
              <p className="text-sm text-petrol-deep">
                セキュリティ規程・教育・インシデント対応体制の構築や、チームのマネジメント経験は、CSIRTやセキュリティ部門で評価されやすい強みです。手を動かすだけでなく、組み合わせの価値を打ち出すのが現実的です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ミドル層こそ「希少性」で戦う</h3>
              <p className="text-sm text-petrol-deep">
                若手と同じ土俵で最新技術だけを競うのではなく、運用経験×セキュリティ専門性という希少性で差別化するのがミドル層の定石です。
                <Link href="/knowledge/market-value/" className="text-petrol-deep underline">自分の市場価値の測り方</Link>
                も参考にしてください。
              </p>
            </div>
          </div>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">相談先エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            セキュリティ業界の転職では、IT専門性の高いエージェントと、ハイクラス求人に強いサービスを併用するのが定石です。
          </p>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", desc: "IT/Web特化で技術的なマッチングに強み。利用者の多くが20〜30代という公表もあり、ミドルは経歴を丁寧に伝えたい。", href: "/review/levtech/" },
              { name: "ビズリーチ", desc: "ハイクラス・スカウト型。年収750万円以上の求人や管理職ポジションを狙う際の選択肢。", href: "/review/bizreach-it/" },
              { name: "リクルートエージェントIT", desc: "国内最大級の求人数。セキュリティ専門ベンダーから事業会社まで幅広く比較したい場合に有効。", href: "/review/recruit-it/" },
            ].map((a, i) => (
              <Link key={i} href={a.href} className="block border border-slate-200 rounded-lg p-5 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 mb-1">{a.name} →</h3>
                <p className="text-sm text-slate-600">{a.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10">
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
          <h2 className="text-xl font-bold mb-3">インフラ・開発の経験をセキュリティで活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずはIT特化型エージェントに相談して、あなたの市場価値を客観的に確認しましょう。
          </p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

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
