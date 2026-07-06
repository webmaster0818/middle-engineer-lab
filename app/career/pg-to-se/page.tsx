import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/career/pg-to-se/" },
  title: "プログラマー（PG）→システムエンジニア（SE）転職ガイド【2026年版】",
  description:
    "プログラマー（PG）からシステムエンジニア（SE）へ上流工程に進むための現実性、スキルギャップ比較、在職中の準備ステップ、職務経歴書のBefore/After例文を公的データに基づき解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：実装経験を上流の土台にする王道ルート" },
  { id: "gap", label: "PGとSEのスキルギャップ比較表" },
  { id: "build", label: "必要スキルの身につけ方" },
  { id: "steps", label: "移行ステップ（在職中の準備）" },
  { id: "resume", label: "職務経歴書での見せ方（Before/After）" },
  { id: "salary", label: "年収の考え方" },
  { id: "agents", label: "おすすめの転職エージェント" },
  { id: "middle", label: "30代・40代がSEを目指すなら" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows = [
  {
    skill: "実装・コーディング",
    pg: "◎ 仕様に基づく実装・テストが主業務",
    se: "○ 上流に移っても、実装が分かることは強みとして残る",
  },
  {
    skill: "要件定義・要求の整理",
    pg: "△ 与えられた仕様に沿って作る側",
    se: "◎ 顧客の課題を整理し、要件として定義するのが中核",
  },
  {
    skill: "基本設計・詳細設計",
    pg: "○ 詳細設計の一部に関与する場合あり",
    se: "◎ 基本設計から設計全体に責任を持つ",
  },
  {
    skill: "顧客・ステークホルダー折衝",
    pg: "△ 直接の折衝は少ないことが多い",
    se: "◎ 顧客ヒアリング・提案・調整が日常業務",
  },
  {
    skill: "ドキュメンテーション",
    pg: "○ 仕様書を読む側。作成は限定的",
    se: "◎ 要件定義書・設計書を作成し合意を取る",
  },
  {
    skill: "全体最適・俯瞰の視点",
    pg: "○ 担当モジュール中心の視点",
    se: "◎ システム全体・業務全体を俯瞰して設計する",
  },
];

const buildSteps = [
  {
    title: "設計工程に積極的に関与する",
    desc: "SEの中核は要件定義と設計です。現職で詳細設計、できれば基本設計の一部を任せてもらえるよう手を挙げます。実装者として『どう作るか』を分かっているからこそ、実現性のある設計ができるのはPG出身者の強みです。",
  },
  {
    title: "要件定義と要求整理の型を学ぶ",
    desc: "顧客の曖昧な要望を、実装可能な要件に翻訳するのがSEの腕の見せどころです。要求のヒアリング、課題の構造化、要件への落とし込みの流れを、書籍や現場のSEの動きから学び、実務で試します。",
  },
  {
    title: "ドキュメント作成力を高める",
    desc: "要件定義書・基本設計書など、関係者の合意を取るための文書を書く力はSEの必須スキルです。読み手（顧客・実装者）に合わせて過不足なく伝える文書作成を、現職のドキュメント作成を通じて鍛えます。",
  },
  {
    title: "顧客折衝・提案の経験を積む",
    desc: "顧客ヒアリングや提案の場に同席し、できる範囲で発言・提案に関わります。技術が分かったうえで顧客と話せる力は、SEとして信頼される大きな要素になります。",
  },
  {
    title: "業務知識と全体俯瞰の視点を養う",
    desc: "担当モジュールだけでなく、システム全体・業務全体を俯瞰する習慣をつけます。なぜこの機能が必要かを業務の文脈で理解することで、上流での設計判断の質が上がります。",
  },
];

const transitionSteps = [
  {
    phase: "現職での準備（〜3ヶ月）",
    items: [
      "詳細設計・基本設計の一部を任せてもらえるよう手を挙げる",
      "要件定義書・設計書の作成に関わり、ドキュメント作成力を鍛える",
      "実装経験のうち、設計判断や改善に関わった部分を棚卸しする",
    ],
  },
  {
    phase: "上流経験づくり（3〜6ヶ月）",
    items: [
      "顧客ヒアリングや提案の場に同席し、要求整理の流れを実体験する",
      "システム全体・業務全体を俯瞰する視点で、設計の妥当性を考える習慣をつける",
      "基本情報・応用情報技術者試験など、知識を体系化する資格を検討する",
    ],
  },
  {
    phase: "応募・面接フェーズ（6ヶ月〜）",
    items: [
      "IT特化型エージェントに登録し、SE求人の要件レベルをすり合わせる",
      "職務経歴書を『実装した』から『要件・設計にどう関わったか』に書き換える",
      "面接では実装力を土台にした設計適性・上流志向を説明する",
    ],
  },
];

const faqs = [
  {
    q: "プログラマー（PG）からシステムエンジニア（SE）への移行は可能？",
    a: "可能です。実装経験は上流工程の土台になり、『どう作るか』が分かるPG出身者は実現性のある設計ができる強みがあります。ギャップになりやすいのは要件定義、基本設計、顧客折衝、ドキュメント作成です。在職中に設計工程へ関与し、上流の実績を作ることが鍵になります。",
  },
  {
    q: "PGとSEの違いは何？",
    a: "PGは仕様に基づく実装・テストが主業務ですが、SEは顧客の課題を整理して要件を定義し、システム全体を設計するのが中核です。SEは上流工程（要件定義・基本設計）と顧客折衝に責任を持ち、より俯瞰した視点が求められます。",
  },
  {
    q: "PGからSEへの移行はミドル層に向いている？",
    a: "向いています。実装経験の蓄積は設計の実現性を判断する土台になり、現場の機微を理解したSEは重宝されます。30代・40代でも、設計工程への関与実績と上流志向を示せれば、自然なキャリアステップとして移行できます。",
  },
  {
    q: "SEに移ると年収は上がる？",
    a: "上がる傾向はありますが、保証はされません。SEは上流工程と顧客折衝に責任を持つ分、一般にPGより上のレンジが期待できます。一方で提示は企業・業界・スキルで幅が大きいため、複数社のオファーで市場感を確認するのが安全です。",
  },
  {
    q: "SEに必要な資格はある？",
    a: "必須ではありませんが、基本情報技術者試験・応用情報技術者試験は知識を体系化する材料になります。要件定義や設計の体系的理解を示せると、PGからの移行で書類選考の説得力が増すことがあります。",
  },
  {
    q: "SEになるとコーディングはしなくなる？",
    a: "現場によりますが、上流に移るほどコーディングの比率は下がる傾向があります。ただし実装が分かることはSEの強みで、設計の実現性を判断する土台として活き続けます。手を動かし続けたい場合は、Web系開発者やテックリードといったトラックも選択肢になります。",
  },
  {
    q: "SE求人はどのエージェントで探せばいい？",
    a: "IT/Web特化型のレバテックキャリアは技術理解のあるアドバイザーが在籍し、SE求人を扱っています。総合型で若手サポートが手厚いエージェントを併用すると、求人の幅と書類添削の質の両方を得やすくなります。",
  },
];

const related = [
  { name: "SIer SE→Web系開発者転職", href: "/career/se-to-web/" },
  { name: "SE→PMへのキャリアパス", href: "/career/se-to-pm/" },
  { name: "PMスキルガイド", href: "/skill/pm/" },
  { name: "Reactスキルガイド", href: "/skill/react/" },
  { name: "エンジニア職務経歴書の書き方", href: "/knowledge/resume/" },
  { name: "30代の転職事情", href: "/age/30s/" },
];

export default function PgToSePage() {
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
        title="プログラマー（PG）→システムエンジニア（SE）転職ガイド【2026年版】"
        description="プログラマー（PG）からシステムエンジニア（SE）へ上流工程に進むための現実性、スキルギャップ比較、在職中の準備ステップ、職務経歴書のBefore/After例文を公的データに基づき解説します。"
        url="/career/pg-to-se/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "PG→SE転職ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          プログラマー（PG）→システムエンジニア（SE）転職ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 実装経験を「実現性のある設計力」の土台に変える
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          プログラマー（PG）からシステムエンジニア（SE）へ上流工程に進むキャリアは、IT業界で長く続く王道ルートの一つです。実装経験は設計の土台になり、『どう作るか』を分かっているPG出身者は、実現性のある設計ができるという強みを持ちます。一方で、要件定義・基本設計・顧客折衝・ドキュメント作成は新たに担う領域です。このページでは、この職種転換の現実性、スキルギャップ、在職中の準備、職務経歴書の書き方までを具体的に解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag",
            "レバテック公表 年代別平均年収（2025年）",
            "doda 決定年収レポート（2025年5月公表）",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-petrol hover:underline text-sm">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：実装経験を上流の土台にする王道ルート</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>PGからSEへの移行は、IT業界で長く続く王道のキャリアステップです。</strong>
              実装経験がそのまま設計の土台になるため、現場感覚のあるPG出身者は実現性のある設計ができる強みを持ちます。
            </p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>① 実装が分かることは<strong>SEになっても強み</strong>として残り、設計の実現性を判断する土台になる</li>
              <li>② ギャップになりやすいのは<strong>要件定義・基本設計・顧客折衝・ドキュメント作成</strong></li>
              <li>③ 在職中に設計工程へ関与し、上流の実績と俯瞰の視点を作ることが成否を分ける</li>
            </ul>
          </div>
        </section>

        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">PGとSEのスキルギャップ比較表</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            SEに求められるスキルを、PGの典型的な経験と比較しました。◎＝十分／○＝経験あり／△＝補強が必要、の目安です。PGで強い行と、上流で新たに担う行の両方が見えてきます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">必要スキル</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">PG（現職）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">SEで求められる水準</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.skill}</td>
                    <td className="px-4 py-3 text-slate-600">{row.pg}</td>
                    <td className="px-4 py-3 text-slate-600">{row.se}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="build" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">必要スキルの身につけ方</h2>
          <div className="space-y-4">
            {buildSteps.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            上流から先のキャリアを描くなら
            <Link href="/career/se-to-pm/" className="text-petrol hover:underline">SE→PMへのキャリアパス</Link>
            、設計知識の補強には
            <Link href="/skill/pm/" className="text-petrol hover:underline">PMスキルガイド</Link>
            も参考になります。
          </p>
        </section>

        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">移行ステップ（在職中にできる準備）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            SEへの移行は、今の現場で設計工程に関与しながら進めるのが効率的です。退職してから学ぶより、現職で上流の経験を積み上げるほうが、職務経歴書に書ける材料が増え、移行後の立ち上がりも早くなります。
          </p>
          <div className="space-y-5">
            {transitionSteps.map((step, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <span className="text-petrol">STEP {i + 1}</span>
                  {step.phase}
                </h3>
                <ul className="space-y-2">
                  {step.items.map((it, j) => (
                    <li key={j} className="flex gap-2 text-sm text-slate-600">
                      <span className="text-petrol shrink-0">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書での見せ方（Before/After例文）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            PGの職務経歴書は、実装作業の記述に閉じると「言われたものを作る人」に見えがちです。ポイントは、実装力を土台にしつつ、設計や要件にどう関わり、どう改善提案をしたかを示すことです。
          </p>

          <div className="space-y-5">
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-700 text-sm mb-2">Before（実装作業の記述に閉じている例）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Webアプリケーションの開発にて、詳細設計書をもとにJavaで機能の実装と単体テストを担当した。
              </p>
            </div>
            <div className="border border-emerald-200 bg-emerald-50 rounded-lg p-5">
              <p className="font-bold text-emerald-700 text-sm mb-2">After（設計・要件への関与を示す例）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Webアプリケーション開発で、機能の実装に加え詳細設計の一部を担当。実装目線で設計上の課題を指摘し、データ構造を見直して保守性を改善。後半フェーズでは基本設計のレビューに参加し、要件の実現性の観点から代替案を提案。仕様の曖昧な箇所を整理し、設計書として明文化することで手戻りを削減した。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed">
              <p className="font-bold text-slate-700 mb-2">改善のポイント</p>
              <ul className="space-y-1">
                <li>・「実装した」→「設計・要件にどう関わり、何を改善・提案したか」を書く</li>
                <li>・実装目線で実現性のある設計ができる、というPG出身ならではの強みを示す</li>
                <li>・保守性の改善・手戻り削減など、出せる範囲で成果を添える（数値は実績に合わせて記載）</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            より詳しい書き方は
            <Link href="/knowledge/resume/" className="text-petrol hover:underline">エンジニア職務経歴書の書き方</Link>
            を参照してください。
          </p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            SEは上流工程と顧客折衝に責任を持つ分、一般にPGより上のレンジが期待できます。基準として、レバテックが公表した正社員SEの年代別平均年収（2025年）は、30代で約499万円、40代で約618万円です。PGからSEへ上流に進むことで、このレンジに近づく・上回る余地が生まれますが、企業や業界で幅が大きいため目安として捉えてください。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            また、doda（パーソルキャリア）の「決定年収レポート」（2025年5月公表）では、IT・通信エンジニアの平均決定年収は2023年度の469万円から2024年度の486万円へと上昇しており、転職者の約6割が年収アップを実現しています。具体的な提示レンジは経験・スキルで差が大きいため、複数社のオファーを比較して市場感をつかむことをおすすめします。
          </p>
          <p className="text-slate-500 text-xs leading-relaxed">
            出典: 厚生労働省 job tag／レバテック公表 年代別平均年収（2025年）／doda「決定年収レポート」（2025年5月公表）。年収はスキルや企業により幅が大きいため、複数社での確認を推奨します。
          </p>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            上流志向の転職では、技術理解のあるアドバイザーがいるIT特化型サービスが向いています。求人を紹介してもらうエージェント型と、書類添削が手厚いサービスを併用すると進めやすくなります。
          </p>
          <div className="space-y-3">
            {[
              {
                name: "レバテックキャリア",
                point:
                  "IT/Web特化で技術に詳しいアドバイザーが在籍。SE・上流工程の求人を扱い、技術要件のすり合わせがしやすいサービスです。",
              },
              {
                name: "マイナビIT AGENT",
                point:
                  "20〜30代若手層に強く、書類添削・面接対策が手厚いと評されます。上流志向への転換を後押しするサポート役として併用しやすいエージェントです。",
              },
              {
                name: "doda ITエンジニア",
                point:
                  "国内最大級の求人数で、検索・エージェント・スカウトのハイブリッド型。幅広い企業のSE求人を比較検討したい場合に有効です。",
              },
            ].map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{agent.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{agent.point}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代がSEを目指すなら</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              ミドル層がPGからSEへ進む際の強みは、長年の実装経験に裏打ちされた「実現性のある設計力」です。机上の設計ではなく、作り手の都合や落とし穴を分かったうえで要件と設計を固められるSEは、現場から信頼されます。実装経験が活きるため、年齢を理由に諦める必要はありません。
            </p>
            <p>
              一方で、要件定義・顧客折衝・ドキュメント作成は、PG時代には担当外だったことが多い領域です。だからこそ、在職中に設計工程へ関与し、顧客ヒアリングの場に同席し、システム全体を俯瞰する視点を養っておくことが重要です。基本情報・応用情報などの資格で知識を体系化するのも有効です。
            </p>
            <p>
              年代別の市場感は
              <Link href="/age/30s/" className="text-petrol hover:underline">30代の転職事情</Link>
              、年収の見通しは
              <Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収相場</Link>
              も合わせて確認してください。
            </p>
          </div>
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
          <h2 className="text-xl font-bold mb-3">SE転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントが、あなたの実装経験を活かせる上流工程の求人を提案します。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors"
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
