import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "クラスメソッド エンジニア転職ガイド【2026年版】年収・技術・選考の実態",
  description:
    "クラスメソッドへのエンジニア転職を実データで解説。AWSプレミアティアサービスパートナーの実績、技術ブログDevelopersIO、AWS認定を軸とした技術スタック、選考フロー、30代40代の現実までまとめました。非上場のため平均年収は公式非開示です。",
};

const basicData: [string, string][] = [
  ["企業名", "クラスメソッド株式会社（非上場）"],
  ["事業領域", "AWS等クラウドのコンサルティング・導入・運用、データ分析、モバイル／Web開発、生成AI活用支援 等"],
  ["パートナー実績", "AWSプレミアティアサービスパートナー（公式パートナープログラムの最上位ティア）"],
  ["平均年間給与", "非上場のため公式非開示（有価証券報告書なし）"],
  ["技術メディア", "DevelopersIO（自社技術ブログ。AWS関連を中心に多数の記事を公開）"],
  ["本社所在地", "東京都港区（国内外に複数拠点）"],
  ["技術スタック（公式）", "AWS / Google Cloud / TypeScript / Python / Go / React / Flutter / Terraform / 各種データ分析基盤"],
];

const toc = [
  ["conclusion", "結論：難易度と向いているエンジニア"],
  ["basic", "基本データ（出典付き）"],
  ["features", "エンジニア採用の特徴"],
  ["stack", "技術スタック（公式情報ベース）"],
  ["salary", "年収について（非上場・公式非開示）"],
  ["flow", "選考フロー"],
  ["interview", "面接で重視される点"],
  ["middle", "30代・40代エンジニアの視点"],
  ["agents", "転職におすすめのエージェント"],
  ["faq", "よくある質問"],
  ["related", "関連記事"],
];

const faqs = [
  {
    q: "クラスメソッドのエンジニア選考フローは？",
    a: "公式採用情報によると、一般的には「書類選考」「カジュアル面談（任意）」「複数回の面接」「オファー面談」の流れで、ポジションにより技術面接やスキル確認が加わります。最新の内容は応募求人ごとに確認することが推奨されます。",
  },
  {
    q: "クラスメソッドの平均年収はいくらですか？",
    a: "クラスメソッドは非上場企業であり、有価証券報告書を提出していないため、平均年収は公式に開示されていません。本ページでは推測による年収額の創作は行いません。具体的な提示額は、応募ポジションごとの求人情報や面談で確認することが確実です。",
  },
  {
    q: "クラスメソッドのAWSパートナー実績は？",
    a: "クラスメソッドはAWSのパートナープログラムにおける最上位ティアであるプレミアティアサービスパートナーに認定されていることを公式に発信しています。AWS関連の各種コンピテンシー・認定資格の保有数が多く、クラウド導入・運用に特化した実績が強みです。",
  },
  {
    q: "DevelopersIO（デベロッパーズアイオー）とは何ですか？",
    a: "DevelopersIOはクラスメソッドが運営する自社技術ブログで、AWSをはじめとするクラウド・データ分析・モバイル開発などの技術記事が多数公開されています。エンジニアによる技術発信が事業・採用の中心に位置づけられている点が、同社の大きな特徴です。",
  },
  {
    q: "クラスメソッドではAWS認定資格は重要ですか？",
    a: "クラウドコンサルティングを主力とする性質上、AWS認定資格はスキルの客観的な裏付けとして重視されやすい傾向です。会社としても認定取得を後押しする文化が公式に発信されています。AWS未経験でも、クラウドへの強い学習意欲があれば挑戦しやすいポジションが存在します。",
  },
  {
    q: "クラスメソッドへの転職難易度は高いですか？",
    a: "クラウド（特にAWS）の設計・構築・運用の実務経験や、技術発信への前向きさが評価されます。コンサルティング要素もあるため、顧客折衝・課題解決力も問われる傾向です。AWS経験と資格の掛け合わせ、アウトプット実績があると有利です。",
  },
  {
    q: "30代・40代でもクラスメソッドに転職できますか？",
    a: "年齢よりもクラウド・データ・コンサルティングの専門性が問われる傾向です。AWSをはじめとするクラウド構築・運用の実務、資格、顧客対応の経験があると、30代40代のミドルエンジニアでも専門性を活かしやすい環境と言えます。",
  },
];

export default function ClassmethodCompanyPage() {
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
      <ArticleJsonLd title="クラスメソッド エンジニア転職ガイド" description="クラスメソッドへのエンジニア転職を実データで解説。AWSプレミアティアサービスパートナーの実績、技術ブログDevelopersIO、AWS認定を軸とした技術スタック、選考フロー、30代40代の現実までまとめました。非上場のため平均年収は公式非開示です。" url="/company/classmethod/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "クラスメソッド" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">クラスメソッド エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | AWSプレミアティアパートナー・技術発信に強いクラウド企業のエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          クラスメソッドは、AWSをはじめとするクラウドのコンサルティング・導入・運用や、データ分析、モバイル／Web開発、生成AI活用支援などを手がける非上場のIT企業です。AWSパートナープログラムの最上位ティアであるプレミアティアサービスパートナーに認定され、自社技術ブログ「DevelopersIO」での活発な技術発信で知られます。本ページでは、公式採用情報・公式発表・技術ブログの公開情報をもとに、エンジニア転職の実態を整理します。なお、<strong>クラスメソッドは非上場のため有価証券報告書がなく、平均年収は公式に開示されていません</strong>。本ページでは年収額の創作は行いません。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "クラスメソッド公式 採用ページ／会社概要",
            "クラスメソッド公式 AWSパートナー認定に関する発表",
            "DevelopersIO（クラスメソッド自社技術ブログ）",
            "OpenWork（口コミ傾向）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              クラスメソッドは<strong>AWSプレミアティアパートナーとして、クラウド導入・運用と技術発信を事業の核に据えるクラウド専業企業</strong>です。AWSをはじめとするクラウドの設計・構築・運用の実務経験や、資格・技術発信が直接活きます。コンサルティング要素もあり、顧客課題の解決に向き合えるエンジニアに向いています。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：AWS等クラウドの構築・運用経験があり、資格取得や技術発信に前向きなエンジニア</li>
              <li>● <strong>向いていない人</strong>：自社単一プロダクトの開発に専念したい人、顧客折衝を避けたい人</li>
              <li>● <strong>30代・40代</strong>：クラウドの実務×AWS認定の掛け合わせがあれば専門性を活かしやすい</li>
            </ul>
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
          <p className="text-xs text-slate-400 mt-2">※クラスメソッドは非上場のため有価証券報告書がなく、平均年間給与・平均年齢は公式に開示されていません。技術スタック・パートナー実績は公式採用情報・公式発表・DevelopersIO（2026年6月時点）に基づきます。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">AWSプレミアティアパートナーとしてのクラウド専門性</h3>
              <p className="text-sm text-blue-700">AWSパートナープログラムの最上位ティアに認定されており、各種コンピテンシーやAWS認定資格の保有数が多いのが強みです。クラウド導入・運用の最前線で、幅広い業種・規模の案件に携われます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">DevelopersIOによる技術発信文化</h3>
              <p className="text-sm text-blue-700">自社技術ブログ「DevelopersIO」での発信が事業・採用の中心に据えられています。学んだ知見をアウトプットすることが評価・推奨される文化で、技術発信を通じて成長したいエンジニアに向いています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">資格取得を後押しする環境</h3>
              <p className="text-sm text-blue-700">クラウドコンサルティングを主力とするため、AWS認定をはじめとする資格取得を会社として後押しする文化が公式に発信されています。学習意欲の高いエンジニアがスキルを伸ばしやすい環境です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            クラスメソッドは公式採用情報・DevelopersIO（2026年6月時点）で扱う技術領域を公開しています。主な要素は以下の通りです。案件・部門により使用技術は異なります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>クラウド</strong>：AWS（中核）、Google Cloud 等</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>バックエンド</strong>：TypeScript（Node.js）、Python、Go</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>フロントエンド／モバイル</strong>：React、Flutter 等</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>IaC・運用</strong>：Terraform、AWS CDK、CI/CD、監視基盤</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>データ・AI</strong>：各種データ分析基盤、生成AI活用支援</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: クラスメソッド公式 採用情報・DevelopersIO（2026年6月時点）。案件・部門により技術構成は異なります。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収について（非上場・公式非開示）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            クラスメソッドは<strong>非上場企業であり、有価証券報告書を提出していないため、平均年間給与・平均年齢は公式に開示されていません</strong>。本ページでは、出典のない年収額を創作して掲載することはしません。
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
            <p className="leading-relaxed">クラウド専業・コンサルティングという事業特性上、AWS認定などの資格やクラウド構築・運用の実務経験は評価につながりやすい要素です。具体的な提示額はポジション・グレードにより幅があるため、求人情報や面談で確認するのが確実です。年収レンジを事前に把握したい場合は、転職エージェント経由で各求人の想定年収を確認するのが有効です。</p>
          </div>
          <p className="text-sm text-slate-600 mt-4 leading-relaxed">
            年代別の市場水準を把握する参考として、レバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。クラウド／AWS領域は需要が高く、専門性次第で市場水準を上回る提示が得られる可能性があります。<Link href="/knowledge/salary-30s/" className="text-blue-600 hover:underline">30代の年収戦略</Link>・<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収戦略</Link>も参考にしてください。
          </p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            クラスメソッド公式採用ページで案内されている一般的な流れです。最新の内容は<a href="https://careers.classmethod.jp/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">公式採用ページ</a>でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>書類選考</li>
            <li>カジュアル面談（任意・ポジションにより）</li>
            <li>面接（複数回。技術力・クラウド理解・カルチャーフィットを確認）</li>
            <li>技術面接・スキル確認（ポジションにより）</li>
            <li>オファー面談</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: クラスメソッド公式 採用ページの要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>AWS等クラウドの設計・構築・運用の実務理解</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>AWS認定資格や、継続的な学習・キャッチアップ姿勢</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>技術発信・アウトプットへの前向きさ</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>顧客課題の理解と、コンサルティング的な提案・協働姿勢</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接の対策</Link>、技術ブログでの発信は<Link href="/knowledge/tech-blog/" className="text-blue-600 hover:underline">技術ブログの活用</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              クラスメソッドは年齢よりも、クラウド・データ・コンサルティングの専門性が問われる傾向です。30代・40代のミドルエンジニアにとっては、<strong>AWSをはじめとするクラウド構築・運用の実務と、AWS認定資格の掛け合わせが強力な武器</strong>になります。資格取得を後押しする文化があるため、入社後にさらに認定を積み上げてキャリアを伸ばす道も描けます。
            </p>
            <p>
              30代40代では、<Link href="/skill/aws/" className="text-blue-600 hover:underline">AWS</Link>や<Link href="/skill/infrastructure/" className="text-blue-600 hover:underline">インフラ</Link>の実務に、<Link href="/cert/aws-saa/" className="text-blue-600 hover:underline">AWS認定ソリューションアーキテクト（SAA）</Link>や<Link href="/cert/aws-sap/" className="text-blue-600 hover:underline">プロフェッショナル（SAP）</Link>といった上位資格を掛け合わせると、クラウド専業企業での評価につながりやすくなります。
            </p>
            <p>
              年収は非開示のため、提示水準は求人・面談での確認が前提です。<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職事情</Link>や<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収戦略</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">クラスメソッド転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。クラウド・インフラ・SES／受託の求人に強く、非公開求人も豊富。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。クラウド実務経験者への提案数が多い。" },
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "スカウト型。クラウド・コンサル領域のハイクラス求人が集まりやすい。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">複数エージェントの併用については<Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">エージェント併用のコツ</Link>も参考にしてください。</p>
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
          <h2 className="text-xl font-bold mb-3">クラスメソッドへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">クラウド・AWSの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "さくらインターネット エンジニア転職ガイド", href: "/company/sakura-internet/" },
              { name: "フューチャー エンジニア転職ガイド", href: "/company/future/" },
              { name: "AWSエンジニアのスキル", href: "/skill/aws/" },
              { name: "AWS認定ソリューションアーキテクト（SAA）", href: "/cert/aws-saa/" },
              { name: "AWS認定ソリューションアーキテクト プロフェッショナル（SAP）", href: "/cert/aws-sap/" },
              { name: "30代エンジニアの転職事情", href: "/age/30s/" },
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
