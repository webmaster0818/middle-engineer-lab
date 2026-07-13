import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/preferred-networks/" },
  title: "Preferred Networks（PFN）エンジニア転職ガイド【2026年版】研究・技術・年収の実態",
  description:
    "Preferred Networks（PFN）へのエンジニア転職を公式一次情報で解説。非上場のため平均年収は公式非開示である点を明記し、深層学習・AI半導体MN-Core・基盤モデルPLaMoの研究領域、Python/C++中心の技術、職種、30代40代の視点までまとめました。",
};

const basicData: [string, string][] = [
  ["企業名", "株式会社Preferred Networks（PFN／非上場）"],
  ["設立", "2014年"],
  ["事業領域", "深層学習・AIの研究開発、AI半導体（MN-Coreシリーズ）、基盤モデル（PLaMo）、各産業向けAIソリューション"],
  ["平均年間給与", "公式非開示（非上場のため有価証券報告書の提出義務がなく、平均年間給与は公開されていません）"],
  ["平均年齢・従業員数", "公式の有価証券報告書ベースの数値は非開示（非上場のため）"],
  ["本社所在地", "東京都千代田区"],
  ["技術領域", "深層学習・基盤モデル／LLM・コンピュータビジョン・AI半導体（MN-Core）・PyTorch・数値計算（具体的内容は募集職種により異なる）"],
];

const toc = [
  ["conclusion", "結論：難易度と向いているエンジニア"],
  ["basic", "基本データ（出典付き）"],
  ["features", "エンジニア・リサーチャー採用の特徴"],
  ["stack", "研究領域・技術（公開情報の範囲）"],
  ["salary", "年収について（非上場・非開示）"],
  ["flow", "選考フローについて"],
  ["interview", "評価で重視される点"],
  ["middle", "30代・40代エンジニアの視点"],
  ["agents", "転職におすすめのエージェント"],
  ["faq", "よくある質問"],
  ["related", "関連記事"],
];

const faqs = [
  {
    q: "Preferred Networks（PFN）の平均年収はいくらですか？",
    a: "PFNは非上場企業のため有価証券報告書の提出義務がなく、平均年間給与は公式に開示されていません。当ガイドでは出典のない年収額を創作・断定することは行いません。提示年収は職種・役割・専門性により大きく異なるため、応募時の面談で個別に確認することが確実です。",
  },
  {
    q: "PFNはどんな会社ですか？",
    a: "PFNは2014年に設立された、深層学習・AIの研究開発を中核とする企業です。AI半導体「MN-Core」シリーズの開発、独自の大規模言語モデル「PLaMo」をはじめとする基盤モデルの開発、製造・素材・創薬・ヘルスケアなど各産業向けのAIソリューション提供を手がけています。本社は東京都千代田区です。",
  },
  {
    q: "PFNのMN-Coreとは何ですか？",
    a: "MN-Coreは、PFNが開発する深層学習向けのAI半導体（プロセッサ）シリーズです。第1世代は2020年に発表され、電力効率を競うスーパーコンピュータランキング「Green500」で1位を複数回獲得した実績があります。PFNはこのMN-CoreのPyTorch対応も進めており、AI半導体からソフトウェアまで一貫して開発している点が特徴です。",
  },
  {
    q: "PFNの研究領域・技術スタックは？",
    a: "公式情報によると、生成AI向けの基盤モデル・大規模言語モデル、3次元環境の解析・再構成を行うコンピュータビジョン、材料物性予測のための深層学習と数値計算の融合、オミックス解析・医用画像解析・創薬などへのAI応用が研究領域です。研究開発基盤はPyTorchに移行しており、Python・C++が中核と考えられます。具体的な使用技術は募集職種により異なります。",
  },
  {
    q: "PFNはエンジニア・リサーチャーの採用をしていますか？",
    a: "はい。PFNはキャリア採用（第二新卒含む）・新卒採用・インターンを実施しており、エンジニア・リサーチャーなど多様な職種を募集しています。AI半導体・基盤モデル・各産業向けAIソリューションなど高度な専門領域が中心です。募集職種は時期により変動するため、最新は公式採用サイトでご確認ください。",
  },
  {
    q: "30代・40代でもPFNに転職できますか？",
    a: "PFNは年齢ではなく、深層学習・基盤モデル・AI半導体・コンピュータビジョンなどの高度な専門性と実績が問われる組織と考えられます。研究実績（論文・OSS）や、特定領域での深い実装力を持つ30代・40代エンジニア・リサーチャーにとっては挑戦しうるフィールドです。一方で求められる専門性の水準は高く、関連分野の実務・研究経験が前提になりやすいといえます。",
  },
  {
    q: "PFNは非上場ですが企業情報はどこで確認できますか？",
    a: "PFNは非上場のため有価証券報告書はありませんが、公式サイトで研究開発・採用情報・会社概要（コーポレートファクトブック等）を公開しています。年収・財務の細かな数値は上場企業ほど開示されていないため、待遇面は応募時の面談で確認するのが確実です。",
  },
];

export default function PreferredNetworksCompanyPage() {
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
      <ArticleJsonLd title="Preferred Networks（PFN）エンジニア転職ガイド" description="PFNへのエンジニア転職を公式一次情報で解説。非上場のため平均年収は公式非開示である点を明記し、深層学習・AI半導体MN-Core・基盤モデルPLaMoの研究領域、Python/C++中心の技術、職種、30代40代の視点までまとめました。" url="/company/preferred-networks/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "Preferred Networks" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Preferred Networks（PFN）エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | 深層学習・AI半導体を手がける非上場AI企業のエンジニア採用</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】Preferred Networks（PFN）の年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: PFNは非上場で有価証券報告書の提出義務がなく、公式の平均年間給与は非開示です。当ガイドでは出典のない年収額を創作・断定しません。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・非上場のため平均年間給与・平均年齢・従業員数といった有報ベースの数値は公式に開示されていません（PFN公式 会社概要・採用情報の範囲）。</li><li>・参考値としてレバテック公表の正社員SE平均年収（2025年）は30代約499万円・40代約618万円ですが、これはPFNの提示額を示すものではありません。</li><li>・深層学習・AI半導体など高度専門領域は市場価値が高い傾向。実額は職種・専門性・実績で大きく異なり、面談での個別確認が確実です。</li></ul>
        </div>

        <p className="text-slate-600 leading-relaxed mb-4">
          株式会社Preferred Networks（PFN）は、2014年に設立された深層学習・AIの研究開発を中核とする<strong>非上場</strong>の企業です。AI半導体「MN-Core」シリーズの開発から、独自の大規模言語モデル「PLaMo」をはじめとする基盤モデル、製造・素材・創薬・ヘルスケアなど各産業向けのAIソリューションまで、ハードウェアとソフトウェアの両面で高度な技術開発を行っています。本ページでは、公式の研究開発・採用情報をもとに、30代・40代ミドルエンジニアの視点で転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "Preferred Networks公式 研究開発ページ",
            "Preferred Networks公式 採用情報ページ",
            "Preferred Networks公式 コーポレートファクトブック等の会社概要",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              PFNは<strong>深層学習・AI半導体（MN-Core）・基盤モデル（PLaMo）を一貫して手がける、高度専門特化のAI企業</strong>です。求められる専門性の水準は高く、難易度も高めです。<strong>非上場のため平均年収は公式に非開示</strong>であり、当ガイドでは年収額を創作・断定しません。研究実績や深い実装力を持つミドルエンジニア・リサーチャーにとって挑戦しうるフィールドです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：深層学習・基盤モデル・コンピュータビジョン・AI半導体などで研究実績や深い実装力を持つ人</li>
              <li>● <strong>向いていない人</strong>：高度な研究・専門領域への適性や関心がなく、定型的な開発のみを志向する人</li>
              <li>● <strong>30代・40代</strong>：年齢より専門性・実績が問われる。関連分野の実務・研究経験が前提になりやすい</li>
            </ul>
          </div>
        </section>

        <nav aria-label="目次" className="mb-10 border border-slate-200 rounded-xl p-5 bg-slate-50">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 text-sm">
            {toc.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="text-petrol hover:underline">{label}</a>
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
          <p className="text-xs text-slate-400 mt-2">※PFNは非上場のため有価証券報告書の提出義務がなく、平均年間給与・平均年齢・従業員数といった有報ベースの数値は公開されていません。本表は公式サイト（研究開発・採用・会社概要）の公開情報に基づきます。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア・リサーチャー採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">AI半導体からソフトウェアまで一貫開発</h3>
              <p className="text-sm text-petrol-deep">PFNはAI半導体「MN-Core」シリーズの開発から、その上で動くソフトウェア（PyTorch対応含む）、基盤モデルまでを一貫して手がけています。ハードウェアとソフトウェアの境界を越えて、深層学習の計算基盤そのものを作る点が大きな特徴です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">基盤モデル・各産業へのAI応用</h3>
              <p className="text-sm text-petrol-deep">独自の大規模言語モデル「PLaMo」をはじめとする基盤モデルの開発に加え、製造・素材・創薬・ヘルスケア・小売・エンタメ・教育など多様な産業へAIを応用しています。研究と実応用の両面に関わる機会がある点が特徴です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">高い専門性が問われる採用</h3>
              <p className="text-sm text-petrol-deep">PFNはキャリア採用（第二新卒含む）・新卒採用・インターンを実施し、エンジニア・リサーチャーを募集しています。深層学習・基盤モデル・AI半導体・コンピュータビジョンなど高度な領域が中心で、研究実績や深い実装力が評価されやすいと考えられます。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">研究領域・技術（公開情報の範囲）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公式情報から確認できる主な研究領域・技術は以下の通りです。研究開発基盤はPyTorchに移行しており、Python・C++が中核と考えられます。具体的な使用技術・要件は募集職種により異なるため、各募集要項で確認してください。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>基盤モデル・大規模言語モデル（LLM）</strong>：独自LLM「PLaMo」をはじめとする生成AI向け基盤モデルの研究開発</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>AI半導体「MN-Core」</strong>：深層学習向けプロセッサの開発、PyTorch対応の推進</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>コンピュータビジョン</strong>：3次元環境の解析・再構成などの研究</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>科学・産業応用</strong>：材料物性予測のための深層学習と数値計算の融合、オミックス解析・医用画像解析・創薬などへのAI応用</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>技術スタック</strong>：研究開発基盤はPyTorchに移行。Python・C++が中核と考えられる（具体的な内製ツール等の統一一覧は公開範囲が限られるため、各募集要項で確認）</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: PFN公式 研究開発ページ、PyTorch移行に関する公式発表。具体的な開発言語・内製ツールの網羅的な統一一覧は公開範囲が限られるため、推測の言語表は掲載していません。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収について（非上場・非開示）</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-sm text-amber-900 leading-relaxed space-y-3">
            <p>
              PFNは<strong>非上場企業のため有価証券報告書の提出義務がなく、平均年間給与・平均年齢・従業員数といった有報ベースの数値は公式に開示されていません</strong>。本ガイドでは、上場企業のように一次情報に基づく確かな年収額が存在しないため、<strong>出典のない年収額を創作・断定することは行いません</strong>。
            </p>
            <p>
              一般に、深層学習・基盤モデル・AI半導体といった高度専門領域の人材は市場価値が高い傾向にありますが、PFNの実際の提示額は職種・役割・専門性・実績により大きく異なります。待遇面は、<strong>応募時の面談で個別に確認する</strong>のが最も確実です。
            </p>
          </div>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フローについて</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>PFNは中途採用の詳細な選考フローを体系的に公式公開しているわけではありません。一般に書類選考と複数回の面接（職種により技術課題・研究内容の議論等を含む場合がある）が想定されますが、回数・内容・所要期間は募集職種により変動します。最新の内容は<a href="https://www.preferred.jp/ja/careers/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">公式採用サイト</a>でご確認ください。</p>
            <p>具体的な面接質問リストも公式には公開されておらず、当ガイドでは<strong>出典のない面接質問は掲載していません</strong>。応募時には、各募集要項で求められる専門性・選考プロセスを直接確認することをおすすめします。技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策</Link>も参考にしてください。</p>
          </div>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">評価で重視される点（公開情報の範囲）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開されている研究領域・採用情報から、評価されうる観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>深層学習・基盤モデル・コンピュータビジョン・AI半導体など、配属領域に合致する深い専門性</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>研究実績（論文・学会・OSSコントリビューション等）や高度な実装力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>研究と実応用をつなぐ姿勢・課題解決力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>新しい技術・領域へ継続的に学び挑戦する意欲</li>
          </ul>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              PFNは年齢ではなく、深層学習・基盤モデル・AI半導体・コンピュータビジョンなどの<strong>高度な専門性と実績</strong>が問われる組織と考えられます。研究実績（論文・OSS）や特定領域での深い実装力を持つ30代・40代のエンジニア・リサーチャーにとっては、年齢自体が大きなハンデになりにくい一方、求められる専門性の水準は高く、関連分野の実務・研究経験が前提になりやすいといえます。
            </p>
            <p>
              年収面は前述の通り非上場・非開示のため、参考値の提示にとどめます。レバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円ですが、これはPFNの提示額を示すものではありません。深層学習・AI半導体といった希少領域は市場価値が高い傾向にあるものの、実際の提示は職種・専門性・実績次第のため、面談で個別に確認することが重要です。
            </p>
            <p>
              関連領域として<Link href="/skill/ai-ml/" className="text-petrol hover:underline">AI・機械学習エンジニアの転職</Link>や<Link href="/skill/python/" className="text-petrol hover:underline">Pythonエンジニアの転職</Link>、<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>、<Link href="/age/30s/" className="text-petrol hover:underline">30代の転職事情</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">PFN転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・AI領域に強く、専門職の技術面接対策のサポートも受けられる。" },
              { name: "ビズリーチ（IT）", href: "/review/bizreach-it/", desc: "ハイクラス特化。AI・研究開発の高度専門ポジションのスカウトが届きやすい。" },
              { name: "Findy", href: "/review/findy/", desc: "スキル偏差値で実力を可視化。先進的なテック企業・AI領域に強い。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">特定企業の求人保有状況は時期により変動します。複数エージェントの併用については<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">エージェント併用のコツ</Link>も参考にしてください。</p>
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
          <h2 className="text-xl font-bold mb-3">PFNへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">AI・深層学習領域の求人に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "オムロン エンジニア転職ガイド", href: "/company/omron/" },
              { name: "ルネサスエレクトロニクス 転職ガイド", href: "/company/renesas/" },
              { name: "AI・機械学習エンジニアの転職", href: "/skill/ai-ml/" },
              { name: "Pythonエンジニアの転職", href: "/skill/python/" },
              { name: "生成AI時代のエンジニアキャリア", href: "/knowledge/generative-ai-era/" },
              { name: "30代エンジニアの転職事情", href: "/age/30s/" },
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
