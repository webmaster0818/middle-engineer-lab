import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "JCB（ジェーシービー）エンジニア転職ガイド【2026年版】技術・選考の実態",
  description:
    "JCB（株式会社ジェーシービー）へのエンジニア転職を実データで解説。非上場のため平均年収は公式非開示。Go/Java/Python・GCP・Kubernetes等の決済システム技術スタック、アプリ/SysPO/QA等の募集職種、選考、30代40代の現実までまとめました。",
};

const basicData: [string, string][] = [
  ["企業名", "株式会社ジェーシービー（JCB）"],
  ["上場区分", "非上場（有価証券報告書なし＝平均年収等は公式非開示）"],
  ["事業領域", "クレジットカード事業（カード発行・加盟店業務）、決済関連サービス、ファイナンス、ギフトカード等。日本発の国際カードブランド「JCB」を運営"],
  ["平均年間給与", "公式非開示（非上場のため有価証券報告書での開示なし。本ページでは創作せず記載しません）"],
  ["設立", "1961年1月25日（公式 会社概要）"],
  ["資本金", "106億円（2025年6月時点・公式 会社概要）"],
  ["従業員数", "4,472名（2026年3月時点・公式 会社概要）"],
  ["本社所在地", "東京都港区南青山（Aoyama Rise Square）"],
  ["技術スタック（公式採用情報）", "Go / Java / Python、GCP、Docker、Kubernetes、GitLab、Datadog 等"],
];

const toc = [
  ["conclusion", "結論：難易度と向いているエンジニア"],
  ["basic", "基本データ（出典付き）"],
  ["salary-note", "年収について（非上場・公式非開示）"],
  ["features", "エンジニア採用の特徴"],
  ["stack", "技術スタック・募集職種（公式採用情報ベース）"],
  ["flow", "選考フロー"],
  ["interview", "面接で重視される点"],
  ["middle", "30代・40代エンジニアの視点"],
  ["agents", "転職におすすめのエージェント"],
  ["faq", "よくある質問"],
  ["related", "関連記事"],
];

const faqs = [
  {
    q: "JCBの平均年収はいくらですか？",
    a: "株式会社ジェーシービーは非上場企業であり、上場企業のように有価証券報告書で平均年間給与を開示していません。そのため公式な平均年収は非開示です。当サイトでは出典のない年収額を創作せず記載しない方針です。提示額は募集ポジション・等級により異なるため、個別求人・面談で確認してください。",
  },
  {
    q: "JCBのエンジニア選考フローは？",
    a: "公式キャリア採用ページによると、原則「応募（エントリー）」「書類選考」「面接（複数回）」「内定」という流れです。職種・時期により選考回数や内容は変動します。最新の内容は公式採用ページでご確認ください。",
  },
  {
    q: "JCBはどんな技術スタックですか？",
    a: "公式キャリア採用（システム本部）情報によると、言語はGo・Java・Python、基盤はGCP・Docker・Kubernetes、開発・運用にGitLab・Datadog等が挙げられています。決済システムという安定運用が求められる領域で、内製開発・モダン化を進めています。",
  },
  {
    q: "JCBはどんなエンジニア職種を募集していますか？",
    a: "公式情報によると、アプリケーションエンジニア（ブランド・イシュア・アクワイアラ業務の開発）、システムプロダクトオーナー（SysPO）、社内SE（インフラ／アプリ）、QAエンジニアなどの職種があります。スクラム開発やTDD・ペアプログラミング等のモダンな開発手法も取り入れられています。",
  },
  {
    q: "JCBは決済システムですが安定性が重視されますか？",
    a: "はい。JCBは24時間365日稼働する国際カードブランドの決済システムを運営しており、安心・安全なサービスと安定したシステム運用が強く重視されます。可用性・品質・セキュリティへの意識が高いエンジニアが求められます。",
  },
  {
    q: "JCBへの転職難易度は高いですか？",
    a: "金融・決済という社会インフラを支えるシステムを扱うため、可用性・セキュリティ・品質への理解と、該当領域の開発経験が重視されます。モダンな技術スタックへの移行も進めており、クラウド・コンテナ・自動化の経験があると評価されやすい傾向です。",
  },
  {
    q: "30代・40代でもJCBに転職できますか？",
    a: "金融・決済システムの開発・運用経験や、クラウド・品質保証・プロジェクト推進の実績があるミドル層の中途採用は現実的です。安定運用が重視される領域のため、大規模システムでの経験が活きやすい傾向です。",
  },
];

export default function JcbCompanyPage() {
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
      <ArticleJsonLd title="JCB（ジェーシービー）エンジニア転職ガイド" description="JCB（株式会社ジェーシービー）へのエンジニア転職を実データで解説。非上場のため平均年収は公式非開示。Go/Java/Python・GCP・Kubernetes等の決済システム技術スタック、募集職種、選考、30代40代の現実までまとめました。" url="/company/jcb/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "JCB（ジェーシービー）" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">JCB（ジェーシービー）エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | 日本発の国際カードブランド・決済システムを支えるエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          株式会社ジェーシービー（JCB）は、日本発唯一の国際カードブランド「JCB」を運営する総合決済サービス企業です。<strong>非上場企業のため有価証券報告書による平均年収等の開示はなく</strong>、本ページでは公式の会社概要・採用情報・公開情報をもとに、出典の明確な範囲でエンジニア転職の実態を整理します（年収額は創作せず、非開示は非開示と明記します）。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "JCB公式 会社概要（global.jcb / jcb.co.jp）",
            "JCB公式 キャリア採用ページ（システム本部・IT/デジタル領域）",
            "OpenWork（採用情報・口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              JCBは<strong>24時間365日稼働する金融決済システムを、Go/GCP/Kubernetes等のモダンな技術で内製・刷新している決済インフラ企業</strong>です。可用性・セキュリティ・品質を最優先しながら、開発手法のモダン化に関わりたいエンジニアに向きます。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：金融・決済など高可用性が求められるシステムの開発・運用経験があり、品質と安定運用を重視できるエンジニア</li>
              <li>● <strong>向いていない人</strong>：仕様や品質より開発スピードを最優先したい人</li>
              <li>● <strong>30代・40代</strong>：大規模・基幹システムの経験が活きやすく、ミドル中途の枠は現実的</li>
            </ul>
            <p className="text-xs text-blue-800 mt-3">※平均年収は非上場のため公式非開示です（後述）。</p>
          </div>
        </section>

        <nav aria-label="目次" className="mb-10 border border-slate-200 rounded-xl p-5 bg-slate-50">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 text-sm">
            {toc.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="text-blue-600 hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="basic" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（出典付き）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-2/5 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">※会社概要は公式サイト（global.jcb / jcb.co.jp）に基づきます（資本金は2025年6月時点、従業員数は2026年3月時点）。技術スタックは公式キャリア採用情報（2026年6月時点）。</p>
        </section>

        <section id="salary-note" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収について（非上場・公式非開示）</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-sm text-amber-900 leading-relaxed space-y-3">
            <p>
              株式会社ジェーシービーは<strong>非上場企業</strong>であり、上場企業に義務づけられる有価証券報告書を提出していません。そのため、<strong>平均年間給与・平均年齢といった全社員平均の年収データは公式に開示されていません（非開示）</strong>。
            </p>
            <p>
              当サイトは出典の明確な一次情報を重視する方針のため、出典のない年収額や「推定◯◯万円」といった数値は本ページに記載しません。年収・処遇は募集ポジション・等級・経験により異なるため、<strong>具体的な提示額は個別求人の募集要項や面談で確認する</strong>のが確実です。エージェント経由であれば、想定年収レンジの目安を事前に確認できる場合があります。
            </p>
          </div>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">国際カードブランドの決済システムを内製</h3>
              <p className="text-sm text-blue-700">JCBは日本発唯一の国際カードブランドとして、24時間365日稼働する決済システムを運営しています。ブランド・イシュア（カード発行）・アクワイアラ（加盟店）の各業務を支えるシステムを内製で開発・運用しており、社会インフラ級の安定性が求められます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">モダンな技術スタックと開発手法</h3>
              <p className="text-sm text-blue-700">公式情報によると、Go・Java・Python、GCP、Docker・Kubernetes、GitLab、Datadogといったモダンな技術を採用し、スクラム開発やTDD・ペアプログラミングなどの手法も取り入れています。金融でありながら開発のモダン化を進めている点が特徴です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">安心・安全・安定運用への高い意識</h3>
              <p className="text-sm text-blue-700">決済というミスの許されない領域のため、可用性・セキュリティ・品質保証が重視されます。QAやSRE的な品質・運用の役割も明確に位置づけられており、堅牢なシステム作りに関わりたいエンジニアに向いています。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック・募集職種（公式採用情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            JCBは公式キャリア採用ページ（システム本部・IT/デジタル領域、2026年6月時点）で技術職を募集しています。主な技術・職種は以下の通りです。具体的な使用技術・必須スキルは募集ポジションにより異なります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>言語</strong>：Go、Java、Python</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>基盤・インフラ</strong>：GCP、Docker、Kubernetes</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>開発・運用ツール</strong>：GitLab、Datadog 等の監視・CI/CDツール</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>主な職種</strong>：アプリケーションエンジニア、システムプロダクトオーナー（SysPO）、社内SE（インフラ／アプリ）、QAエンジニア</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>開発スタイル</strong>：スクラム開発、TDD、リファクタリング、ペアプログラミング</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: JCB公式 キャリア採用ページ（システム本部・IT/デジタル領域、2026年6月時点）。具体的な必須スキルは各求人の募集要項をご確認ください。</p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            JCBのキャリア採用ページで公開されている一般的な流れです。最新の内容は<a href="https://www.saiyo.jcb.co.jp/careerrecruit/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">公式キャリア採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>募集ポジションの確認・応募（エントリー）</li>
            <li>書類選考</li>
            <li>面接（複数回。職種により技術面接を含む）</li>
            <li>内定・条件提示</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: JCB公式 キャリア採用ページ（募集要項・選考フロー）の要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>金融・決済など高可用性システムの開発・運用経験と専門性</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>可用性・セキュリティ・品質保証への意識と具体的な取り組み</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>クラウド・コンテナ・自動化など、開発モダン化への適応力</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>スクラム等チーム開発での協働姿勢</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接の対策</Link>、システム設計の準備は<Link href="/knowledge/system-design/" className="text-blue-600 hover:underline">システム設計面接の対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              JCBは金融・決済という社会インフラを支える企業であり、安定運用と品質が重視されます。そのため30代・40代のミドルエンジニアにとって、<strong>大規模・基幹システムの開発／運用経験や、品質保証・可用性設計の知見が即戦力として活きやすい</strong>環境です。年功よりも担う役割と専門性が問われます。
            </p>
            <p>
              年収面は、非上場のため公式な平均年収が非開示である点に注意が必要です（本ページでは数値を創作しません）。参考値として、レバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円ですが、これはあくまで市場全体の目安です。JCBの提示額は募集ポジション・等級・経験により異なるため、個別求人・面談で確認してください。
            </p>
            <p>
              金融・決済という領域に関心があるなら、<Link href="/industry/finance/" className="text-blue-600 hover:underline">金融業界のエンジニア転職</Link>もあわせて確認すると、業界全体の動向や求められるスキルが把握しやすくなります。<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収戦略</Link>も参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">JCB転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。金融・決済系のシステム求人にも対応し、非公開求人も豊富。" },
              { name: "JACリクルートメント", href: "/review/jac-recruitment/", desc: "大手・金融・ハイクラスに強く、専門職・管理職求人や想定年収の確認に対応。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。実務経験者への提案数が多く提案スピードが速い。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">非上場企業は年収情報が表に出にくいため、想定年収レンジの確認にはエージェントの活用が有効です。<Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">エージェント併用のコツ</Link>も参考にしてください。</p>
        </section>

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

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">JCBへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">金融・決済系の転職や、非開示の想定年収確認に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "PayPay エンジニア転職ガイド", href: "/company/paypay/" },
              { name: "マネーフォワード エンジニア転職ガイド", href: "/company/moneyforward/" },
              { name: "KDDI エンジニア転職ガイド", href: "/company/kddi/" },
              { name: "金融業界のエンジニア転職", href: "/industry/finance/" },
              { name: "企業別エンジニア転職ガイド一覧", href: "/company/" },
              { name: "40代エンジニアの転職事情", href: "/age/40s/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
