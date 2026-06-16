import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "LinuC（Linux技術者認定）は転職に効くか｜国内Linux実務の証明【2026年】";
const PAGE_DESC =
  "LPI-JapanのLinux技術者認定LinuCを、30代・40代向けに解説。受験料16,500円・試験形式・有効期限5年、国内インフラ／サーバ職での評価、年収の考え方を公式情報をもとに限界も含めて整理します。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：LinuCはどんな人に効く資格か" },
  { id: "overview", label: "試験概要（受験料・形式・有効期限）" },
  { id: "salary", label: "保有者の年収の考え方と注意点" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "活きるポジション" },
  { id: "position", label: "入口資格としての活用戦略" },
  { id: "middle", label: "30代・40代の価値＝Linux実務の客観証明" },
  { id: "steps", label: "取得3ステップ／次に狙う資格" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "LinuCは40代の転職で意味がありますか？",
    a: "意味があります。LinuC（リナック）はLPI-Japanが運営する国内向けのLinux技術者認定で、コマンド操作・システム管理・ネットワークなどLinux実務スキルを体系的に証明します。インフラ・サーバ運用の経験がある30〜40代にとっては、独学・我流で身につけたLinuxスキルの抜けを埋め、体系的に扱えることを客観的に示せます。ただしレベル1は入口寄りの位置づけのため、上流・上位を示したい場合はレベル2以上が適しています。資格単体ではなく実務とセットで効く点が前提です。",
  },
  {
    q: "LinuCの受験料と試験形式を教えてください。",
    a: "LPI-Japan公式によると、LinuCレベル1の受験料は1試験あたり16,500円（税込）です。レベル1は101試験と102試験の2つの合格が必要で、合計33,000円（税込）になります。各試験の時間は90分です。レベル2も各16,500円（税込）、レベル3・システムアーキテクトは各27,500円（税込）です（LPI-Japan、2026年6月時点）。",
  },
  {
    q: "LinuCに有効期限はありますか？",
    a: "あります。LinuCは各試験ごとに5年間の有効期限があります。レベル1のように2試験の合格で認定される場合は、両方の試験を5年以内に合格する必要があります。有効期限を保つには再認定（最新試験の再受験など）が必要です（LPI-Japan、2026年6月時点）。",
  },
  {
    q: "LinuCの合格率や合格ラインはどのくらいですか？",
    a: "LPI-JapanはLinuCの合格率・合格ライン（合格点）を公表していません。当サイトでは創作した数値を載せず、非公表である事実をそのままお伝えします。レベル1は101・102の各90分の試験で、コマンドや設定を問う設問が中心です（LPI-Japan、2026年6月時点）。",
  },
  {
    q: "LinuCとLPICはどちらを取るべきですか？",
    a: "目的・環境で選びます。LinuCはLPI-Japanが運営する国内向けの認定で、日本語環境・国内企業での認知に強みがあります。LPICは国際的なLinux認定です。国内のインフラ職を主眼に置くならLinuC、海外案件やグローバル企業も視野に入れるならLPICという整理が一般的です。出題範囲は近く、どちらもLinux実務スキルの体系的な証明になります。LPIC側は当サイトのLPICガイドも参照してください。",
  },
  {
    q: "クラウド時代にLinuxの資格は意味がありますか？",
    a: "あります。AWS・Azure・GCPなどクラウドのサーバOSの多くはLinuxであり、コンテナ（Docker・Kubernetes）の基盤もLinuxです。クラウド・コンテナを扱ううえでもLinuxの基礎は土台として欠かせません。LinuCはその土台を体系的に押さえている証明になり、クラウド資格と組み合わせると説得力が増します。",
  },
];

const overviewTable = [
  ["主催", "LPI-Japan（特定非営利活動法人）"],
  ["認定名", "LinuC（Linux技術者認定）"],
  ["レベル", "レベル1（入口）／レベル2／レベル3・システムアーキテクト"],
  ["前提資格", "上位レベルは下位レベルの認定が前提"],
  ["受験料", "レベル1・2：各16,500円（税込）／レベル3等：各27,500円（税込）"],
  ["レベル1の構成", "101試験＋102試験の2試験合格で認定（合計33,000円）"],
  ["試験時間", "90分（全試験共通）"],
  ["合格ライン", "非公表（LPI-Japanは公表していない）"],
  ["合格率", "非公表（LPI-Japanは公表していない）"],
  ["有効期限", "各試験5年（再認定で維持）"],
];

export default function LinuCCertPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/linuc/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "LinuC（Linux技術者認定）" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          LinuC（Linux技術者認定）は転職に効くか｜国内Linux実務の証明【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | LPI-JapanのLinux技術者認定LinuCの転職価値を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          LinuC（リナック）は、LPI-Japanが運営する<strong>国内向けのLinux技術者認定で、コマンド操作・システム管理・ネットワークといったLinux実務スキルを体系的に証明</strong>する資格です。本記事は「LinuCを取れば転職で有利になるか」という疑問に対し、<strong>国内インフラ・サーバ職でのLinux実務の証明</strong>という観点から、評価される場面や有効期限の仕組みを公式情報とともに整理します。資格単体では年収は跳ねないという限界も正直にお伝えします。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "LPI-Japan 公式（linuc.org）",
            "本サイト データシート（2026年6月）",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：LinuCはどんな人に効く資格か</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              LinuCは<strong>「国内Linux実務の体系証明」</strong>です。レベル1は入口寄りで、インフラ・サーバ運用の経験者が<strong>我流のLinuxスキルを体系的に扱える証明</strong>として、また未経験〜若手がインフラ職の入口として使えます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>インフラ・サーバ実務のある30〜40代</strong>：Linuxスキルの抜けを補い、体系的理解の証明として加点される</li>
              <li>② <strong>インフラ未経験〜若手</strong>：Linux基礎を押さえた入口資格として書類段階で効く</li>
              <li>③ <strong>クラウド・コンテナへ進む人</strong>：Linuxは土台。基礎の証明として相性がよい</li>
            </ul>
          </div>
        </section>

        {/* 試験概要 */}
        <section id="overview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">試験概要（受験料・形式・有効期限）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {overviewTable.map(([k, v], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 w-1/3 align-top">{k}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: LPI-Japan 公式（linuc.org、2026年6月時点）。レベル1の受験料は1試験あたり16,500円（税込）で、101・102の2試験合格（合計33,000円）で認定されます。試験時間は全試験90分共通。合格率・合格ラインはLPI-Japanが公表しておらず、当サイトでは創作しません。有効期限は各試験5年で、再認定により維持できます。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保有者の年収の考え方と注意点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            LinuC保有者そのものの公的な平均年収統計はなく、当サイトでは<strong>断定的な年収額を提示しません</strong>。Linuxはサーバ・クラウド基盤で広く使われる土台技術ですが、年収を決めるのは資格ではなく<strong>インフラ・サーバ運用の実務経験と担う役割</strong>です。LinuCはあくまでLinux実務の体系証明と捉えるのが現実的です。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・Linuxはサーバ・クラウドの土台技術（<strong>実務・役割が年収の主因</strong>）</li>
              <li>・LinuCは<strong>Linux実務の体系的な証明</strong>として書類通過に効く加点材</li>
              <li>・実態：<strong>年収はインフラ実務経験 × 資格の掛け算</strong>で決まる</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            注記: 資格保有を理由とする年収アップを当サイトは保証しません。公的な水準感の目安として、国税庁「民間給与実態統計調査」の給与所得者平均461万円（令和6年分）も併せてご覧ください。年収はスキル・経験・役割で大きく変動します。
          </p>
        </section>

        {/* 評価される場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される具体場面</h2>
          <div className="space-y-3">
            {[
              { t: "Linux実務スキルの体系的な証明", d: "現場で覚えた我流のコマンド・運用知識に抜けがないこと、体系的に扱えることを客観的に示せる。" },
              { t: "インフラ・サーバ運用案件への応募", d: "Linuxサーバを扱う運用・構築の現場で、基礎スキルの裏づけとして書類段階で効く。" },
              { t: "インフラ未経験〜若手の入口", d: "異業種や開発からインフラへ移る際に、Linux基礎を押さえた入口資格として機能する。" },
              { t: "クラウド・コンテナへの布石", d: "クラウドのサーバOSやコンテナ基盤の多くはLinux。その土台を押さえている証明になる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 活きるポジション */}
        <section id="jobs" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活きるポジション</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            LinuCが土台として活きる代表的な進路です（一般的な整理。具体的な求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "インフラエンジニア（サーバ・運用）", d: "Linuxサーバの構築・運用を担う役割。LinuCが基礎スキルの裏づけになる。" },
              { t: "サーバ・ネットワーク運用", d: "Linuxを扱う運用現場で、コマンド・管理スキルを体系的に押さえている証明として効く。" },
              { t: "クラウド・SREへのステップ", d: "Linuxの土台を起点に、クラウド・コンテナ・自動化へ守備範囲を広げる進路に使える。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            Linuxそのものの市場感は<Link href="/skill/linux/" className="text-petrol hover:underline">Linuxエンジニア転職ガイド</Link>、インフラ全般は<Link href="/skill/infrastructure/" className="text-petrol hover:underline">インフラエンジニア転職ガイド</Link>を参考にしてください。
          </p>
        </section>

        {/* 活用戦略 */}
        <section id="position" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">入口資格としての活用戦略</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            LinuC（特にレベル1）は「Linux実務の入口・体系証明資格」です。国際認定のLPICとは運営・主眼が異なり、目的に応じて使い分けるのがコツです。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">観点</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">LinuC（LPI-Japan）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">LPIC（国際認定）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["運営", "LPI-Japan（国内）", "LPI（国際）"],
                  ["主眼", "国内企業・日本語環境での認知", "国際・グローバル案件"],
                  ["レベル1の構成", "101＋102の2試験", "101＋102の2試験"],
                  ["受験料（L1・1試験）", "16,500円（税込）", "ドル建てが基本"],
                  ["有効期限", "各試験5年", "5年（再認定要）"],
                ].map(([k, a, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{k}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{a}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            活用戦略は3つに整理できます。第一に<strong>Linux実務の体系化</strong>。現場で覚えた我流のスキルの抜けを試験対策で埋め、体系的に整理できます。第二に<strong>インフラ職の入口・書類段階の裏づけ</strong>。Linuxを扱える基礎スキルの客観証明として、選考の通過に寄与します。第三に<strong>クラウド・コンテナへの土台</strong>。LinuCで固めたLinux基礎は、クラウドやKubernetesへ進む際の前提になります。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            正直なデメリットも押さえておきましょう。LinuCレベル1は<strong>入口寄りの位置づけのため、これ単体で上流・高度なインフラ力まで保証する資格ではありません</strong>。効果が出るのは「インフラ実務 × 資格」が成立したときです。また有効期限が5年あり、再認定を怠ると失効します。逆に言えば、Linuxスキルを体系化したい経験者や、インフラへ進みたいミドルにとっては、費用対効果の高い土台資格です。上位を示すならレベル2以上、国際案件を視野に入れるなら<Link href="/cert/lpic/" className="text-petrol hover:underline">LPIC</Link>も検討しましょう。
          </p>
        </section>

        {/* 30-40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の価値＝Linux実務の客観証明</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              LinuCは、30〜40代の経験者にとって<strong>「現場で覚えた我流のLinuxを、体系的なスキルとして整え、客観的に証明する装置」</strong>として効きます。運用現場では使う範囲しか触れないため知識に偏りが生まれがちですが、LinuCの学習でコマンド・システム管理・ネットワークを一通り押さえ直すことで、基礎の抜けを補えます。国内企業での認知が高い点も、転職での実利につながります。
            </p>
            <p>
              一方で過度な期待は禁物です。LinuC（レベル1）を取っても、それ単体で年収が跳ねるわけではありません。価値が出るのは<strong>「実務経験 × 資格」の掛け算</strong>のとき。インフラ・サーバ運用の実績と組み合わせて初めて、基礎の信頼性という形で評価されます。上流や高度なインフラ力まで示したい場合は、レベル2以上やクラウド資格との組み合わせが有効です。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>、職務経歴書の作り方は<Link href="/knowledge/resume/" className="text-petrol hover:underline">エンジニアの職務経歴書</Link>も合わせてご覧ください。
            </p>
          </div>
        </section>

        {/* 取得3ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">取得3ステップ／次に狙う資格</h2>
          <div className="space-y-3 mb-6">
            {[
              { n: "STEP 1", t: "101試験でコマンド・管理を固める", d: "コマンドライン操作・パッケージ管理・ファイルシステムなど、Linux基礎を網羅的に学ぶ。" },
              { n: "STEP 2", t: "102試験でシステム・ネットワークへ", d: "シェルスクリプト・ネットワーク設定・セキュリティなど、運用に必要な範囲を固める。5年以内に2試験合格で認定。" },
              { n: "STEP 3", t: "レベル2・クラウドへ広げる", d: "認定後は実務に活かしつつ、上位のレベル2や、クラウド・コンテナ（Kubernetes）へ守備範囲を広げる。" },
            ].map((x, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="text-xs font-bold text-petrol shrink-0 w-14 pt-1">{x.n}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                  <p className="text-sm text-slate-600">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            国際案件も視野に入れるなら<Link href="/cert/lpic/" className="text-petrol hover:underline">LPIC</Link>、クラウドへ広げるなら<Link href="/cert/aws/" className="text-petrol hover:underline">AWS認定</Link>・<Link href="/cert/gcp-ace/" className="text-petrol hover:underline">GCP Associate Cloud Engineer</Link>、ネットワーク方向は<Link href="/cert/ccna/" className="text-petrol hover:underline">CCNA</Link>との組み合わせも有効です。資格全体の位置づけは<Link href="/cert/" className="text-petrol hover:underline">資格で選ぶ転職ハブ</Link>で確認できます。
          </p>
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
          <h2 className="text-xl font-bold mb-3">インフラ・サーバ案件への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            LinuCを活かせるインフラ・サーバ運用求人を、IT特化型エージェントであなたの市場価値とともに確認しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Linuxエンジニア転職ガイド", href: "/skill/linux/" },
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
              { name: "LPIC／LinuCの転職価値", href: "/cert/lpic/" },
              { name: "CCNAの転職価値", href: "/cert/ccna/" },
              { name: "AWS認定資格の活かし方", href: "/cert/aws/" },
              { name: "資格で選ぶ転職ハブ", href: "/cert/" },
            ].map((item, i) => (
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
