import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "EM・PMへのマネジメント転身ガイド【職務経歴書例付き】",
  description:
    "エンジニアからEM・PMへ転身する方法を解説。EM/PMの違い、必要スキル、ICからの移行ステップ、職務経歴書での見せ方をBefore/After例付きで30代・40代向けに整理。",
};

const toc = [
  { id: "conclusion", label: "結論" },
  { id: "diff", label: "EMとPMの違い（と関連職種）" },
  { id: "skills", label: "マネジメントに必要なスキル" },
  { id: "steps", label: "ICからマネジメントへの移行ステップ" },
  { id: "resume", label: "職務経歴書での見せ方【Before/After例】" },
  { id: "aptitude", label: "適性チェックリスト" },
  { id: "middle", label: "30代・40代の転身視点" },
  { id: "faq", label: "よくある質問" },
];

const roleCompare = [
  {
    role: "EM（エンジニアリングマネージャー）",
    center: "ピープルマネジメント",
    work: "1on1・評価・採用・チームビルディング・育成。チームが成果を出せる状態をつくる",
    from: "テックリード／シニアエンジニアから",
  },
  {
    role: "PM／PdM（プロダクトマネージャー）",
    center: "プロダクトの成功",
    work: "プロダクト戦略・ロードマップ・優先順位付け・KPI管理・ステークホルダー調整",
    from: "エンジニア＋ビジネス／ユーザー理解から",
  },
  {
    role: "テックリード",
    center: "技術的意思決定",
    work: "設計・アーキテクチャ・技術選定・難所の実装。手を動かし続ける技術リード",
    from: "シニアエンジニアから（IC継続の道）",
  },
  {
    role: "PjM（プロジェクトマネージャー）",
    center: "プロジェクト遂行",
    work: "スコープ・スケジュール・リスク・進捗管理。QCDの達成に責任を持つ",
    from: "リーダー経験のあるエンジニアから",
  },
];

const faqs = [
  {
    q: "EMとPMは何が違いますか？",
    a: "EM（エンジニアリングマネージャー）はピープルマネジメントが中心で、1on1・評価・採用・育成を通じて「チームが成果を出せる状態」をつくる役割です。PM／PdM（プロダクトマネージャー）はプロダクトの成功が中心で、何を作るかの優先順位付け・ロードマップ・KPI管理を担います。EMは人と組織、PMはプロダクトと価値、と責任の軸が異なります。企業によって呼称や役割範囲が違うため、求人票で実際の業務内容を確認することが重要です。",
  },
  {
    q: "マネジメント職に転身すると技術力は落ちますか？",
    a: "コードを書く時間は確実に減ります。維持できるかは本人の関わり方次第で、コードレビューや設計議論への参加、週の一部をコーディングに充てるなどで技術に触れ続けるEMもいます。技術を主軸に続けたいならテックリードやプリンシパルエンジニアといったIC（個人貢献者）の道もあり、必ずしもマネジメントが唯一の昇進ルートではありません。",
  },
  {
    q: "マネジメント未経験でもEM職に応募できますか？",
    a: "チームリードやメンターの経験があれば応募できる求人は多くあります。3〜5人規模のリード経験、1on1や育成の経験、採用面接への参加経験などは部分的なマネジメント経験としてアピールできます。いきなりEMが難しい場合は、まず現職でリード業務を引き受けて実績を作る、または「EM候補」「リードエンジニア」ポジションから入るのが現実的です。",
  },
  {
    q: "ICのまま技術を極める道とマネジメント、どちらが年収は高いですか？",
    a: "一概には言えません。多くの企業でマネジメント職は等級が上がりますが、シニアIC・プリンシパルエンジニアとして技術を極める道に同等以上の処遇を用意する企業も増えています。年収だけで決めるより、自分が「人と組織の成果」と「技術的卓越」のどちらにやりがいを感じるかで選ぶのが後悔の少ない判断です。年代別の年収水準は本文の公的データを参考にしてください。",
  },
  {
    q: "職務経歴書でマネジメント経験はどう書けばいいですか？",
    a: "「マネジメント経験あり」と書くだけでは伝わりません。チーム規模（何人）、担当範囲（評価・採用・1on1など）、そして「チームにどんな変化・成果をもたらしたか」をセットで書きます。たとえば「5名のチームをリードし、オンボーディングを整備して立ち上がり期間を短縮」のように、人数・施策・結果の3点を入れると説得力が出ます。本文にBefore/After例を載せています。",
  },
  {
    q: "マネジメントが向いていなかった場合、ICに戻れますか？",
    a: "戻れます。EMを経験したうえでICに戻る「マネジメントとICの往復」はIT業界では珍しくなく、マネジメント経験はテックリードや設計の場面でも活きます。一度マネジメントに進んだら戻れない、と考える必要はありません。適性は実際にやってみないと分からない部分もあるため、機会があれば一度試してみる価値はあります。",
  },
  {
    q: "マネジメント職への転職にはどのエージェントが向いていますか？",
    a: "EM・VPoEなどのポジションは非公開求人が多いため、IT特化型エージェントの活用が有効です。レバテックキャリアはIT/Web特化で高年収帯の求人が多く、ビズリーチはハイクラス・管理職向けのスカウト型として知られます。複数登録して求人の幅を比較するのがおすすめです。",
  },
];

export default function ManagementPage() {
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
        title="EM・PMへのマネジメント転身ガイド【職務経歴書例付き】"
        description="エンジニアからEM・PMへ転身する方法を解説。EM/PMの違い、必要スキル、ICからの移行ステップ、職務経歴書での見せ方をBefore/After例付きで30代・40代向けに整理。"
        url="/knowledge/management/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "マネジメント転身ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          EM・PMへのマネジメント転身ガイド【職務経歴書例付き】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | EM/PMの違い・必要スキル・ICからの移行ステップ
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed">
            30代・40代のエンジニアにとって、「このまま技術を続けるか、マネジメントに進むか」は大きな分岐点です。マネジメントといってもEM・PM・テックリードなど役割は分かれており、それぞれ責任の軸が異なります。本記事では、EM/PMの違い、必要スキル、IC（個人貢献者）からの移行ステップ、そして<strong>職務経歴書での見せ方</strong>をBefore/After例付きで整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表の年代別平均年収（2025年）",
            "厚生労働省 job tag（システムエンジニア・受託開発）",
          ]}
        />

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 text-sm text-blue-700">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：マネジメントは「昇進」ではなく「職種転換」</h2>
            <ul className="text-sm text-blue-900 space-y-2 leading-relaxed">
              <li>・<strong>EMは人と組織</strong>、<strong>PMはプロダクト</strong>が責任の軸。やりがいの源泉が違うので、年収より「どちらに面白さを感じるか」で選ぶ。</li>
              <li>・移行は<strong>現職でのリード経験づくり→部分的マネジメント→EM候補ポジション</strong>が王道。いきなりの未経験EMより通りやすい。</li>
              <li>・職務経歴書は「マネジメント経験あり」では弱い。<strong>チーム規模・担当範囲・もたらした変化</strong>の3点で書く。</li>
            </ul>
          </div>
        </section>

        {/* EMとPMの違い */}
        <section id="diff" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">EMとPMの違い（と関連職種）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「マネジメント」とひとくくりにされがちですが、実際は責任の軸が異なる複数の職種に分かれます。企業によって呼称や役割範囲が違うため、最終的には求人票で実態を確認することが重要です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[720px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">職種</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">責任の軸</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">主な業務</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">主な移行元</th>
                </tr>
              </thead>
              <tbody>
                {roleCompare.map((r, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200 font-medium text-slate-800">{r.role}</td>
                    <td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">{r.center}</td>
                    <td className="px-3 py-3 border border-slate-200 text-slate-600">{r.work}</td>
                    <td className="px-3 py-3 border border-slate-200 text-slate-600">{r.from}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm mt-3">
            ざっくり言えば、<strong>EM＝「人」、PM＝「プロダクト」、テックリード＝「技術」、PjM＝「プロジェクトの進行」</strong>。同じ「マネジメント志望」でも、どの軸に惹かれるかで進むべき方向が変わります。
          </p>
        </section>

        {/* 必要スキル */}
        <section id="skills" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">マネジメントに必要なスキル</h2>
          <div className="space-y-4">
            {[
              { t: "ピープルマネジメント（EMの核）", d: "1on1、目標設定（OKR/MBO）、評価・フィードバック、キャリア面談、コンフリクト解決。メンバーのモチベーションと成長を支える。" },
              { t: "プロダクト／優先順位の判断（PMの核）", d: "ユーザー課題の把握、ロードマップ策定、何を作らないかの決定、KPI設計。限られたリソースで価値を最大化する。" },
              { t: "プロジェクトマネジメント", d: "見積もり、スケジュール・リスク管理、進捗報告。アジャイル/スクラムの実践経験は多くの現場で前提。" },
              { t: "採用・組織設計", d: "求人票作成、面接設計、オンボーディング整備、チーム構成の最適化。特にEMは採用への関与が大きい。" },
              { t: "技術的意思決定の素地", d: "アーキテクチャや技術的負債の優先順位を判断できる土台。マネジメント職でも技術理解は信頼の前提になる。" },
              { t: "ステークホルダー調整・伝える力", d: "経営・他部署・チームの間に立ち、合意を形成する。技術を非エンジニアに翻訳して伝える力も重要。" },
            ].map((x, i) => (
              <div key={i} className="bg-blue-50 rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-1">{x.t}</h3>
                <p className="text-sm text-blue-700">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 移行ステップ */}
        <section id="steps" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ICからマネジメントへの移行ステップ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            いきなり未経験でEMに転職するのは難易度が高めです。現職で<strong>部分的なマネジメント実績</strong>を積んでから動くと、転職市場での説得力が大きく変わります。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "現職でリード業務を引き受ける", desc: "小さなチームのリード、新人のメンター、スクラムマスターなど。マネジメントの入口になる役割に手を挙げる。" },
              { num: "2", title: "1on1・採用・育成を経験する", desc: "メンバーとの1on1、採用面接への参加、オンボーディング設計など、ピープル領域の経験を意図的に積む。" },
              { num: "3", title: "成果を言語化・記録する", desc: "チームにもたらした変化（立ち上がり短縮、離脱低減、リリース安定化など）を数値や具体例で記録しておく。職務経歴書の材料になる。" },
              { num: "4", title: "EM候補・リードポジションを狙う", desc: "未経験EM求人より、リードエンジニア／EM候補から入る方が現実的。エージェントに非公開のマネジメント求人を相談する。" },
              { num: "5", title: "EM・PMとして転職／登用される", desc: "実績と移行意思が揃えば、EM・PMとしての転職や社内登用が見えてくる。面接ではピープル/プロダクトへの考え方が問われる。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 職務経歴書での見せ方 */}
        <section id="resume" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書での見せ方【Before/After例】</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            マネジメント志望で最も差がつくのが職務経歴書です。「マネジメント経験あり」と書くだけでは伝わりません。<strong>チーム規模・担当範囲・もたらした変化</strong>の3点をセットで書きましょう。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="text-xs font-bold text-red-700 mb-2">Before（抽象的で伝わらない）</p>
              <ul className="text-sm text-red-800 space-y-1">
                <li>・チームのマネジメントを担当</li>
                <li>・メンバーの育成を行った</li>
                <li>・プロジェクトを推進した</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="text-xs font-bold text-green-700 mb-2">After（規模・施策・成果が明確）</p>
              <ul className="text-sm text-green-800 space-y-1.5">
                <li>・5名のバックエンドチームをリードし、評価・1on1・採用面接を担当</li>
                <li>・オンボーディング資料とメンター制度を整備し、新メンバーの立ち上がり期間を短縮</li>
                <li>・スクラムを再設計し、スプリント内の手戻りを削減してリリースを安定化</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <p className="font-bold text-slate-800 mb-2 text-sm">職務経歴書に入れるべき3要素</p>
            <ul className="text-sm text-slate-700 space-y-1.5">
              <li><strong>① 規模：</strong>「◯名のチーム」「◯チーム横断」など、責任範囲が一目で分かる数字</li>
              <li><strong>② 担当範囲：</strong>評価／採用／1on1／予算／ロードマップなど、何に責任を持ったか</li>
              <li><strong>③ もたらした変化：</strong>立ち上がり短縮・離脱低減・リリース安定化など、チームやプロダクトに起きた結果</li>
            </ul>
          </div>
          <p className="text-slate-600 text-sm mt-4">
            職務経歴書全体の構成や書き方は
            <Link href="/knowledge/resume/" className="text-blue-600 hover:underline">エンジニアの職務経歴書の書き方</Link>
            、面接での伝え方は<Link href="/knowledge/behavioral/" className="text-blue-600 hover:underline">行動面接（STARメソッド）対策</Link>もあわせてご覧ください。
          </p>
        </section>

        {/* 適性チェック */}
        <section id="aptitude" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">適性チェックリスト</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 mb-4">3つ以上当てはまる場合、マネジメント職への適性が高い可能性があります。</p>
            <div className="space-y-3">
              {[
                "メンバーの成長を見ることにやりがいを感じる",
                "自分が書くコードより、チーム全体の成果に興味がある",
                "1on1やコードレビューで的確なフィードバックができる",
                "プロジェクト全体を俯瞰して計画を立てるのが得意",
                "採用面接で人を見極めるのが苦にならない",
                "社内外のステークホルダーとの調整が苦にならない",
                "技術的な意思決定を説明し、合意を取るのが好き",
              ].map((item, i) => (
                <label key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 mt-0.5" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の転身視点</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
            <p>
              30代・40代は、これまでの実装経験とチームでの立ち回りが<strong>マネジメントの説得材料</strong>になります。若手より「現場を分かっているマネージャー」として期待されやすく、ミドル層の強みが活きる転身でもあります。
            </p>
            <p>
              年収の目安として、レバテックが公表する2025年の年代別平均年収（正社員SE）は、30代が約499万円、40代が約618万円です。マネジメント職はこれより上のレンジを狙えることが多い一方、シニアIC・プリンシパルとして技術を極める道でも高い処遇を用意する企業が増えています。年収だけでなく「人・組織」と「技術」のどちらにやりがいを感じるかで選ぶのが、後悔の少ない判断です（年代別の年収は<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代エンジニアの年収</Link>も参照）。
            </p>
            <p>
              なお、マネジメントは一度進んだら戻れない道ではありません。EMを経験してICに戻る往復はIT業界では珍しくなく、マネジメント経験はテックリードや設計でも活きます。適性は実際にやってみないと分からない面があるため、機会があれば一度試す価値があります。マネジメントを選ばず技術を深める道は
              <Link href="/knowledge/continuous-learning/" className="text-blue-600 hover:underline">エンジニアのスキルアップ戦略</Link>もどうぞ。
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
          <h2 className="text-xl font-bold mb-3">マネジメント職のキャリアを相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            EM・PMなどのポジションは非公開求人が多め。IT特化型エージェントなら、マネジメント職のキャリア相談と求人紹介が無料で受けられます。
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
              { name: "エンジニアの職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "行動面接（STARメソッド）対策", href: "/knowledge/behavioral/" },
              { name: "40代エンジニアの転職リアル", href: "/knowledge/40s-reality/" },
              { name: "年収交渉の完全ガイド", href: "/knowledge/salary-negotiation/" },
              { name: "エンジニアのスキルアップ戦略", href: "/knowledge/continuous-learning/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
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
