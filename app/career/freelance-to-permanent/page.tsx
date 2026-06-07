import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "フリーランス→正社員に戻る転職ガイド｜実務と年収換算",
  description:
    "フリーランスエンジニアが正社員へ戻る際の実務に特化。スキルギャップ、在職案件中の準備ステップ、職務経歴書の書き方、単価から年収への実質換算の考え方を解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：実質報酬で比較すれば戻る価値は十分ある" },
  { id: "gap", label: "フリーランスと正社員のスキルギャップ比較表" },
  { id: "build", label: "埋めるべきギャップの補い方" },
  { id: "fit", label: "正社員復帰が向いている人／向いていない人" },
  { id: "steps", label: "移行ステップ（案件を進めながらの準備）" },
  { id: "resume", label: "職務経歴書での見せ方（Before/After）" },
  { id: "salary", label: "単価から年収への実質換算の考え方" },
  { id: "agent", label: "活用したい転職サービス" },
  { id: "middle", label: "30代・40代が正社員に戻るなら" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows = [
  { area: "技術の自走力", fl: "一人で完結する実装力が高い", pm: "そのまま強みとして評価される", gap: "強み" },
  { area: "幅広い技術経験", fl: "複数案件で多様な技術に触れている", pm: "技術選定・キャッチアップ力として評価", gap: "強み" },
  { area: "チーム開発の協調性", fl: "単独稼働だと希薄になりがち", pm: "コードレビュー・合意形成・育成への適応", gap: "中" },
  { area: "中長期のオーナーシップ", fl: "案件単位で関与が切れることが多い", pm: "プロダクトを継続的に育てる視点", gap: "中" },
  { area: "組織プロセスへの順応", fl: "自分のやり方で進めてきた", pm: "評価制度・社内ルール・調整への適応", gap: "中〜小" },
  { area: "安定したアウトプット", fl: "案件で証明済み", pm: "在籍前提での継続的な貢献として再提示", gap: "小" },
];

const builds = [
  { num: "1", title: "チーム開発の文脈を言語化する", desc: "フリーランス時代もチームで動いた経験は多いはずです。コードレビューでの指摘、ドキュメント整備、他メンバーへの引き継ぎなど、『一人で完結』ではなく『組織に貢献した』エピソードを棚卸しして言語化します。これが面接で最も問われる『組織適応の懸念』への回答材料になります。" },
  { num: "2", title: "オーナーシップの実績を整理する", desc: "案件単位で関わると、プロダクトを継続的に育てる視点が抜けがちです。一つの案件でも、設計の意図・運用改善・長期目線の提案など、継続的に価値を出した側面を切り出して語れるようにします。" },
  { num: "3", title: "組織プロセスへの順応姿勢を示す", desc: "評価制度や社内ルールに合わせて働ける柔軟性を、面接で具体的に伝えます。『自由度の高いやり方に固執しない』ことを、過去のチーム協業の事例で裏づけると説得力が増します。" },
  { num: "4", title: "技術の幅と深さを案件で証明する", desc: "複数案件で得た技術の幅は、正社員転職では大きな武器です。各案件で『何を、なぜその技術で、どう解決したか』を整理し、技術選定力・キャッチアップ力としてアピールします。" },
];

const steps = [
  { num: "1", title: "案件の区切りに合わせて活動開始", desc: "フリーランスは現案件の終了時期が読めるのが強みです。区切りの2〜3ヶ月前から転職活動を始めると、空白期間を作らず移行できます。次の案件を受ける前のタイミングが動きやすい瞬間です。" },
  { num: "2", title: "案件実績を職務経歴書に再構成", desc: "案件の羅列ではなく、担当範囲・使用技術・成果・関わったチーム規模を整理します。守秘義務に配慮しつつ、再現性のあるスキルとして示せる形にまとめます。" },
  { num: "3", title: "『戻る理由』を前向きに準備", desc: "面接では必ず正社員に戻る理由を問われます。『フリーランスが嫌になった』ではなく、『腰を据えてプロダクトを育てたい』『チームで成果を出したい』といった前向きな動機に整理しておきます。" },
  { num: "4", title: "副業OK・リモート可の企業を優先候補に", desc: "自由度の高い働き方からのギャップを和らげるため、副業可・フレックス・リモート可の企業を候補に入れます。完全に正社員へ戻る前段として、副業から関係を作るルートも有効です。" },
  { num: "5", title: "実質年収ベースで条件を設計", desc: "単価×12ヶ月の額面ではなく、社会保険の会社折半・有給・賞与・各種手当を含めた実質報酬で条件を比較・交渉します（後述）。" },
];

const faqs = [
  {
    q: "フリーランスから正社員に戻る理由で多いのは？",
    a: "一般的には「腰を据えてプロダクトを育てたい」「チーム開発に再び関わりたい」「収入や社会保障の安定が欲しい」「営業・経理などの間接業務から解放されたい」といった動機がよく挙がります。面接では、こうした前向きな動機として整理して伝えるのが有効です。",
  },
  {
    q: "フリーランス経験は正社員の面接で不利になる？",
    a: "技術の自走力や幅広い経験はむしろ強みとして評価されやすい一方、『組織に長く定着し協調できるか』という懸念は持たれがちです。そのため、チーム開発・コードレビュー・合意形成の経験を具体的に示し、組織適応への不安を払拭することが重要になります。",
  },
  {
    q: "フリーランス期間は職歴のブランクとみなされる？",
    a: "事業者としての稼働期間であり、ブランクではなく職歴として扱えます。ただし案件内容を具体的に説明できる状態にしておくことが前提です。担当範囲・使用技術・成果・チーム規模を整理し、守秘義務に配慮しつつ再現性のあるスキルとして提示しましょう。",
  },
  {
    q: "年収はフリーランス時代より下がる？",
    a: "額面（単価×12ヶ月）だけで比べると下がって見えることが多いです。ただし正社員では社会保険料の会社折半、有給、賞与、各種手当が加わるため、これらを含めた実質報酬で比較すると差は縮まります。フリーランス時代の経費・税・国民健康保険の自己負担を考慮した実質手取りで比較するのが妥当です。",
  },
  {
    q: "正社員に戻るベストなタイミングは？",
    a: "現案件が区切りの良い時期、または次の案件を受ける前が動きやすいタイミングです。フリーランスは案件終了時期を把握しやすいため、その2〜3ヶ月前から活動を始めると、空白期間を作らずに移行しやすくなります。",
  },
  {
    q: "正社員に戻る際の年収交渉のコツは？",
    a: "単価をそのまま12倍した額面で交渉するのではなく、社会保険の会社折半分・有給・賞与・手当を加味した実質報酬で比較するのがコツです。あわせて、フリーランスで培った技術の幅と自走力を、企業にとっての即戦力価値として具体的に示すと交渉材料になります。",
  },
  {
    q: "フリーランスと正社員、結局どちらが得かも知りたい",
    a: "本記事は『正社員へ戻る実務』に特化しています。働き方・収入・社会保障を含めた両者の総合比較は、別記事のフリーランスvs正社員比較で詳しく扱っています。戻るかどうかをまだ検討中の方はそちらもあわせてご覧ください。",
  },
];

export default function FreelanceToPermanentPage() {
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
        title="フリーランス→正社員に戻る転職ガイド｜実務と年収換算"
        description="フリーランスエンジニアが正社員へ戻る際の実務に特化。スキルギャップ、在職案件中の準備ステップ、職務経歴書の書き方、単価から年収への実質換算の考え方を解説します。"
        url="/career/freelance-to-permanent/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "フリーランス→正社員転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          フリーランス→正社員に戻る転職ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 正社員へ戻る「実務」に特化
        </p>

        <p className="text-slate-600 leading-relaxed mb-6">
          フリーランスから正社員に戻る選択は珍しくありません。本記事は「戻ると決めた人が、実際にどう動けば失敗しないか」という実務に特化しています。働き方の総合比較ではなく、スキルギャップの埋め方・準備ステップ・職務経歴書の書き方・単価から年収への換算といった、移行の具体的な進め方を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表の年代別平均年収（2025年）",
            "doda 2024年度 決定年収レポート（2025年5月公表）",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：実質報酬で比較すれば戻る価値は十分ある</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5 mb-4">
            <p className="text-slate-700 leading-relaxed mb-2">
              フリーランスの技術力・自走力は正社員転職で<strong>そのまま強み</strong>になります。埋めるべきは「組織への定着・協調をどう示すか」という一点で、ここを職務経歴書と面接で言語化できれば移行は十分に現実的です。
            </p>
            <ul className="text-slate-700 text-sm space-y-1 list-disc list-inside">
              <li>年収は額面では下がって見えても、社会保険の会社折半・賞与・手当を含む実質報酬で比較する</li>
              <li>面接の最大の論点は「組織に定着し協調できるか」。チーム開発の実績で払拭する</li>
              <li>案件の区切りに合わせて動けば空白期間を作らず移行できる</li>
            </ul>
          </div>
        </section>

        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フリーランスと正社員のスキルギャップ比較表</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            フリーランスで磨いた力の多くは正社員でも強みになります。一方で、組織での継続的な協働に関わる部分は、意識して見せ方を補う必要があります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">領域</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">フリーランスでの状態</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">正社員で求められること</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">評価/ギャップ</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.area}</td>
                    <td className="px-4 py-3 text-slate-600">{row.fl}</td>
                    <td className="px-4 py-3 text-slate-600">{row.pm}</td>
                    <td className="px-4 py-3 text-slate-600">{row.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="build" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">埋めるべきギャップの補い方</h2>
          <div className="space-y-4">
            {builds.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">正社員復帰が向いている人／向いていない人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-700 text-sm mb-3">向いている人</p>
              <ul className="space-y-2 text-sm text-slate-700">
                {[
                  "腰を据えて一つのプロダクトを長く育てたい",
                  "営業・経理・確定申告などの間接業務から解放されたい",
                  "収入や社会保障の安定を優先したい（住宅ローン・家族など）",
                  "チームでの開発や育成・組織づくりに再び関わりたい",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="text-green-600 font-bold shrink-0">✓</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-lg p-5">
              <p className="font-bold text-slate-700 text-sm mb-3">慎重に検討したい人</p>
              <ul className="space-y-2 text-sm text-slate-700">
                {[
                  "働く時間・場所を完全に自分で決めたい志向が強い",
                  "額面手取りの最大化を最優先にしている",
                  "特定技術の単発案件を渡り歩く働き方に満足している",
                  "組織のルールや評価制度に合わせることに強い抵抗がある",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="text-slate-400 font-bold shrink-0">−</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-slate-600 text-sm mt-4 leading-relaxed">
            戻るか迷っている段階の方は、両者の総合的な損得を扱った
            <Link href="/knowledge/freelance-vs-fulltime/" className="text-blue-600 hover:underline">フリーランスvs正社員 比較</Link>もあわせて確認してください。
          </p>
        </section>

        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">移行ステップ（案件を進めながらの準備）</h2>
          <div className="space-y-4">
            {steps.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書での見せ方（Before/After）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            案件を時系列で並べるだけでは、組織への適応力が伝わりません。「一人で請けた」記述を、「チームに貢献し継続的に価値を出した」文脈へ翻訳するのがポイントです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-red-200 bg-red-50 rounded-lg p-5">
              <p className="font-bold text-red-700 text-sm mb-2">Before（案件の羅列・単独稼働の印象）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                「2022年〜現在：フリーランスとして複数のWeb開発案件に従事。React・Goを用いてフロント／バックエンドの実装を担当。」
              </p>
            </div>
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-700 text-sm mb-2">After（チーム貢献・継続価値で示す）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                「SaaS開発チーム（社員5名＋業務委託）にReact/Goエンジニアとして参画。新機能の設計から実装・コードレビューまで担当し、レビュー基準の整備を提案。約1年半継続して関与し、リリース後の運用改善も主導。」
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-sm mt-4 leading-relaxed">
            ※守秘義務に配慮し、数値・固有名詞は記載可能な範囲で正確に。書類全体の構成は
            <Link href="/knowledge/resume/" className="text-blue-600 hover:underline">エンジニア職務経歴書の書き方</Link>を参照してください。
          </p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">単価から年収への実質換算の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            フリーランスの月単価をそのまま12倍して「正社員だと下がる」と判断するのは早計です。フリーランスの額面からは、国民健康保険・国民年金・各種経費・所得税などが自己負担として差し引かれます。一方、正社員では社会保険料が会社と折半になり、賞与・有給・各種手当が加わります。比較すべきは、両者の「実質手取り・実質報酬」です。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <p className="font-bold text-slate-700 text-sm mb-3">実質比較で見るべき項目</p>
            <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside">
              <li>フリーランス側：単価×稼働月数 −（経費・国保・国民年金・所得税・空白期間リスク）</li>
              <li>正社員側：基本給＋賞与＋各種手当 ＋（社会保険会社折半・有給・退職金制度等の価値）</li>
              <li>非金銭的要素：収入の安定性、案件途切れリスクの解消、福利厚生</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            市場の水準としては、レバテック公表の正社員SEの年代別平均年収が30代約499万円・40代約618万円、年収1,000万円以上の割合が30代8.01%・40代12.67%です（2025年・career.levtech.jp/freelance.levtech.jpガイド記事）。また、dodaの2024年度決定年収レポート（2025年5月公表）では、IT・通信の平均決定年収は2023年度469万円から2024年度486万円へと上昇しており、転職者の約6割が年収アップしたとされています。フリーランスの技術力・自走力は即戦力として評価されやすく、正社員側の提示でも上位レンジを狙える余地があります。
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            年収帯の詳細は
            <Link href="/knowledge/salary-30s/" className="text-blue-600 hover:underline">30代エンジニアの年収</Link>・
            <Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代エンジニアの年収</Link>、
            交渉の進め方は
            <Link href="/knowledge/salary-negotiation/" className="text-blue-600 hover:underline">年収交渉のコツ</Link>を参照してください。
          </p>
        </section>

        <section id="agent" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活用したい転職サービス</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            フリーランス経験を正しく評価し、副業可・リモート可の求人を扱うサービスを選ぶとミスマッチが減ります。
          </p>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", point: "IT/Web特化。フリーランス向けサービスも展開するグループで、フリーランス経験への理解が深い。高年収求人比率が高い（600万円以上が公開求人の約8割との二次情報・2026年6月時点）。" },
              { name: "Green", point: "成功報酬型の転職サイトで、カジュアル面談を通じてカルチャーフィットを事前に確認しやすい。IT/Webベンチャー・スタートアップの求人に強い（2026年6月時点）。" },
              { name: "リクルートエージェントIT", point: "国内最大級の求人数。母数を広げて副業可・リモート可の条件で比較したい場合の併用先として有効（2026年6月時点）。" },
            ].map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{agent.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{agent.point}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代が正社員に戻るなら</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ミドル層の正社員復帰は、ライフプランの変化（住宅・家族・将来の安定）が動機になることが多くなります。複数案件で培った技術の幅と自走力は、即戦力としてむしろ評価されやすい資産です。
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            {[
              "面接で問われやすい「なぜ今、正社員に戻るのか」を前向きな動機として準備しておく",
              "額面でなく実質報酬で比較すれば、安定と引き換えに大きく損をするとは限らない",
              "副業可・リモート可の企業を選べば、自由度の高い働き方からのギャップを抑えられる",
              "完全復帰に不安があれば、副業から関係を作り段階的に正社員化するルートも検討する",
            ].map((t, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-blue-600 font-bold shrink-0">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

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

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">正社員復帰を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            フリーランス経験を正しく評価してくれる企業を、プロが提案します。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "フリーランスvs正社員 総合比較", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "エンジニア職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "年収交渉のコツ", href: "/knowledge/salary-negotiation/" },
              { name: "ワークライフバランス重視の転職", href: "/purpose/wlb/" },
              { name: "30代エンジニアの年収", href: "/knowledge/salary-30s/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
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
