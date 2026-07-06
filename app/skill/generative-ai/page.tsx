import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "生成AIエンジニアの転職完全ガイド｜年収・必須スキル・AI/MLとの違い【2026年】";
const PAGE_DESC =
  "生成AIエンジニアの転職を2026年最新データで解説。AI/MLエンジニアとの違い（モデルを作る職 vs LLMを活用・組込む職）、必須3領域（LLM開発・MLOps・AIエージェント設計）、RAG設計の需要、年収相場、未経験ロードマップを30代・40代向けにまとめました。";

export const metadata: Metadata = {
  alternates: { canonical: "/skill/generative-ai/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "diff", label: "結論：AI/MLエンジニアとの違い" },
  { id: "market", label: "市場・年収データ" },
  { id: "areas", label: "必須3領域（生成AIの中身）" },
  { id: "rag", label: "RAG設計が2026年最需要の理由" },
  { id: "skill", label: "求められるスキル（Python必須）" },
  { id: "level", label: "求められる経験レベル" },
  { id: "path", label: "キャリアパスの選択肢" },
  { id: "entry", label: "未経験・経験浅めからのロードマップ" },
  { id: "middle", label: "30代・40代の視点とデメリット" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "生成AIエンジニアとAI/MLエンジニアの違いは何ですか？",
    a: "ざっくり言うと、AI/MLエンジニアは「機械学習モデルそのものを作る・研究する職」、生成AIエンジニアは「既存のLLM（大規模言語モデル）を活用し、製品・業務に組み込む職」です。前者はデータ前処理・モデル学習・評価が中心ですが、後者はOpenAIやClaudeなどのAPIを使い、RAGやAIエージェントとしてアプリに統合することが中心です。ゼロからモデルを学習するスキルがなくても、LLM活用・組込みの設計力で勝負できるのが生成AIエンジニアの特徴です。モデル構築側を深めたい場合は",
    aLink: { href: "/skill/ai-ml/", label: "AI/MLエンジニア転職ガイド" },
    aTail: "をご覧ください。",
  },
  {
    q: "生成AIエンジニアの平均年収はどのくらいですか？",
    a: "生成AI専用の年収統計はまだ整っていないため、近接区分の参考値を示します。求人ボックス給料ナビの「AIエンジニア」平均は約569万円（おおむね352〜1,147万円のレンジ）です（2026年6月時点・動的に変動する集計値。AIエンジニア区分の参考値であり、生成AI専業の数値ではありません）。媒体推定では、生成AIスキルを持つ人材向けに800〜1,200万円の求人が増え、従来のML案件と比べて月10〜30万円ほどの単価差が出るという見方もあります（各社推定・幅あり）。単一の数値で断定せず、スキルと役割で変わる前提でご覧ください。",
  },
  {
    q: "生成AIエンジニアになるにはPythonは必須ですか？",
    a: "実質的に必須です。LLMのAPI連携、LangChainなどのフレームワーク、RAGのための埋め込み・ベクトル検索、データ処理の多くがPythonエコシステムで動いています。Webアプリへ組み込む文脈ではTypeScript/JavaScriptも併用されますが、まずPythonを軸にするのが王道です。Pythonの市場価値は",
    aLink: { href: "/skill/python/", label: "Pythonエンジニア転職ガイド" },
    aTail: "も参考になります。",
  },
  {
    q: "RAGとは何ですか？なぜ需要が高いのですか？",
    a: "RAG（Retrieval-Augmented Generation／検索拡張生成）は、社内文書やデータベースから関連情報を検索し、それをLLMに渡して回答精度を高める仕組みです。企業が自社データに基づくAI活用を進めるうえで中核になるため、2026年時点で特に需要が高い設計領域です。ベクトルDB・埋め込み・チャンク設計・評価といった実装ノウハウが問われます。",
  },
  {
    q: "生成AIエンジニアの市場は今後も伸びますか？",
    a: "需給は逼迫が続く見込みです。媒体が引用する経済産業省の推計では、2030年にAI人材が最大で約12.4万人不足するとされています（媒体引用の経産省推計として表記。原典・前提は媒体経由のため目安としてご覧ください）。企業のAI活用が一巡するまで、LLMを業務へ組み込める人材の需要は底堅いと考えられます。ただし技術の陳腐化も速いため、継続的な学習が前提です。",
  },
  {
    q: "40代・未経験でも生成AIエンジニアへ転職できますか？",
    a: "ハードルはありますが、強みの活かし方次第です。ゼロからモデルを作る研究職より、既存LLMを業務に組み込む生成AIエンジニアの方が、これまでの業務知識・システム開発経験を活かしやすい領域です。前職のドメイン知識（業務理解）×LLM活用は、若手にはない差別化になります。レバテック公表の正社員SE平均は40代約618万円で、ミドルでも高年収帯が一定数あります。",
  },
];

const areas = [
  { t: "① LLM開発・組込み", d: "OpenAI / Claude などのAPI連携、LangChainなどのフレームワーク、RAG（検索拡張生成）の設計・実装。プロンプト設計と評価も含む。" },
  { t: "② MLOps・AIインフラ", d: "LLMアプリを本番運用する基盤づくり。デプロイ、監視、コスト管理、推論の最適化、セキュリティ。クラウド（AWS/GCP/Azure）の知識が活きる。" },
  { t: "③ AIエージェント設計", d: "ツール呼び出し・自律実行を組み合わせ、複数ステップのタスクを処理するエージェントの設計。2026年に需要が伸びている領域。" },
];

export default function GenerativeAiSkillPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a + (faq.aLink ? `（${faq.aLink.label}）${faq.aTail ?? ""}` : ""),
      },
    })),
  };

  return (
    <>
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/generative-ai/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "生成AIエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          生成AIエンジニアの転職完全ガイド｜年収・必須スキル・AI/MLとの違い【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 生成AI（LLM活用）スキルを活かした転職を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          「生成AIエンジニア」と「AI/MLエンジニア」は、似ているようで職務が大きく違います。一言でいえば、<strong>AI/MLエンジニアは機械学習モデルそのものを作る職</strong>、<strong>生成AIエンジニアは既存のLLM（大規模言語モデル）を活用・組み込む職</strong>です。本記事は、すでに公開している
          <Link href="/skill/ai-ml/" className="text-petrol hover:underline">AI/MLエンジニア転職ガイド</Link>
          と検索意図を明確に分け、「<strong>LLMを業務・製品に組み込む生成AIエンジニア</strong>」に焦点を当てて整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス 給料ナビ AIエンジニア（2026年6月時点・動的・参考区分）",
            "厚生労働省 job tag AIエンジニア（令和7年）",
            "レバテック公表 年代別平均年収（2025年）",
            "経済産業省 AI人材推計（媒体引用）",
          ]}
        />

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

        <section id="diff" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：AI/MLエンジニアとの違い</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              先に結論です。生成AIエンジニアを目指すなら、<strong>「モデルを作る」競争ではなく「LLMを賢く組み込む」競争で勝つこと</strong>が軸になります。攻め方は次の3点です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>LLM開発（OpenAI/Claude API・LangChain・RAG）</strong>を中核スキルにする</li>
              <li>② <strong>MLOps・AIインフラ</strong>で「本番運用できる人」になり、PoCで終わらせない</li>
              <li>③ <strong>AIエージェント設計</strong>と<strong>RAG設計</strong>という2026年最需要領域を押さえる</li>
            </ul>
            <p className="text-xs text-slate-600 mt-3">
              ゼロからモデルを学習・研究したい方は
              <Link href="/skill/ai-ml/" className="text-petrol-deep underline">AI/MLエンジニア</Link>、
              土台のPythonは
              <Link href="/skill/python/" className="text-petrol-deep underline ml-0">Python</Link>
              が出発点です。
            </p>
          </div>
        </section>

        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            生成AI専用の年収統計はまだ整っていないため、近接区分の参考値を示します。求人ボックス給料ナビの「AIエンジニア」平均は<strong>約569万円（おおむね352〜1,147万円のレンジ）</strong>です（2026年6月時点・動的に変動する集計値。AIエンジニア区分の参考値であり、生成AI専業の数値ではありません）。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公的データでは、厚生労働省 job tagの「AIエンジニア」の平均年収は約609.8万円、平均年齢は42.2歳とされています（令和7年）。42歳前後という年齢層は、まさに本サイトが対象とする30代後半〜40代のミドル層が中心であることを示しています。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            媒体推定では、生成AIスキルを持つ人材向けに800〜1,200万円の求人が増え、従来のML案件と比べて月10〜30万円ほどの単価差が出るという見方もあります（各社推定・幅あり）。いずれも単一の数値で断定せず、スキルと役割で変わる前提でご覧ください。
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: 求人ボックス給料ナビ AIエンジニア（2026年6月時点・動的・参考区分）、厚生労働省 job tag「AIエンジニア」（令和7年・約609.8万円／42.2歳）、レバテック公表の年代別平均年収（2025年／40代約618万円、年収1,000万円以上の割合は40代で12.67%）。市場の伸びについては、媒体が引用する経済産業省の推計で2030年にAI人材が最大約12.4万人不足とされます（媒体引用の経産省推計として表記）。
          </p>
        </section>

        <section id="areas" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">必須3領域（生成AIの中身）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            生成AIエンジニアの仕事は、大きく3つの領域に分かれます。全てを極める必要はありませんが、どこを軸にするかを決めると転職戦略が立てやすくなります。
          </p>
          <div className="space-y-3">
            {areas.map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            セキュリティを意識したAI開発は
            <Link href="/career/devsecops/" className="text-petrol hover:underline">DevSecOpsキャリア</Link>
            とも接続します。
          </p>
        </section>

        <section id="rag" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">RAG設計が2026年最需要の理由</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            企業が生成AIを本格活用する際、最大の課題は「自社のデータに基づいて正確に答えさせること」です。これを解くのがRAG（検索拡張生成）で、2026年時点で特に求人ニーズが高い設計領域です。
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>✓ <strong>ドキュメント設計</strong>：チャンク分割・メタデータ付与で検索精度を左右する</li>
            <li>✓ <strong>埋め込み・ベクトル検索</strong>：embedding選定とベクトルDB（検索基盤）の構築</li>
            <li>✓ <strong>評価・改善</strong>：回答の正確性をどう測り、継続的に改善するか</li>
            <li>✓ <strong>ハルシネーション対策</strong>：誤った断定を抑える仕組みづくり</li>
          </ul>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            RAGは「LLMを業務に効かせる」中核なので、ここを語れると面接での評価が大きく変わります。
          </p>
        </section>

        <section id="skill" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル（Python必須）</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>✓ Python（LLM連携・データ処理の中核。実質必須）</li>
            <li>✓ LLM API（OpenAI / Claude など）とプロンプト設計</li>
            <li>✓ LangChain / LlamaIndex などのフレームワーク</li>
            <li>✓ ベクトルDB・埋め込み・RAG実装</li>
            <li>✓ クラウド（AWS/GCP/Azure）でのデプロイ・運用（MLOps）</li>
            <li>✓ Webアプリ統合のためのTypeScript/JavaScript（併用されることが多い）</li>
          </ul>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            Pythonの市場価値は
            <Link href="/skill/python/" className="text-petrol hover:underline">Pythonエンジニア転職ガイド</Link>、
            モデル構築側の深掘りは
            <Link href="/skill/ai-ml/" className="text-petrol hover:underline">AI/MLエンジニア転職ガイド</Link>
            が接続先です。
          </p>
        </section>

        <section id="level" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            生成AI求人はおおむね次の3層に分かれます（求人票の頻出要件をもとにした傾向）。
          </p>
          <div className="space-y-3">
            {[
              { t: "入口層（LLM活用・PoC）", d: "LLM APIを使った試作、簡単なチャットボットやRAGのPoC。Python基礎とプロンプト設計が問われる。" },
              { t: "中核層（本番組込み・MLOps）", d: "RAGの本番運用、評価・改善、コスト最適化、クラウドへのデプロイ。年収帯が一段上がるゾーン。" },
              { t: "上級層（AIエージェント設計・基盤）", d: "複数ステップの自律エージェント設計、社内AI基盤の構築、セキュリティ・ガバナンス。希少性が高い。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="path" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスの選択肢</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">LLMアプリ開発リード路線</h3>
              <p className="text-sm text-petrol-deep">
                プロダクトに生成AIを組み込むチームを率いる方向。RAG・エージェント設計と、プロダクト感覚の両方が武器になります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">AIプラットフォーム/MLOps路線</h3>
              <p className="text-sm text-petrol-deep">
                社内のAI活用基盤を整える方向。クラウド・インフラの知識が活き、安定運用を担保します。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ドメイン特化AI活用路線</h3>
              <p className="text-sm text-petrol-deep">
                金融・医療・法務など業界知識×LLMで価値を出す方向。ミドルのドメイン経験が最大の差別化になります。
              </p>
            </div>
          </div>
        </section>

        <section id="entry" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">未経験・経験浅めからのロードマップ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            開発経験はあるが生成AIは未経験、という方の現実的な道筋です。
          </p>
          <div className="space-y-3">
            {[
              { n: "STEP 1", t: "Python＋LLM APIに慣れる", d: "Pythonの基礎を固め、OpenAI/Claude APIを叩いて簡単なチャットアプリを作る。" },
              { n: "STEP 2", t: "RAGを自作する", d: "社内文書を模したデータでRAGを実装し、ベクトル検索・チャンク設計を体験する。" },
              { n: "STEP 3", t: "本番を意識した成果物に", d: "クラウドにデプロイし、評価・コスト・セキュリティを考慮した形にしてGitHubで公開。" },
              { n: "STEP 4", t: "ドメイン×LLMで応募", d: "前職の業務知識を活かした活用事例として職務経歴書・ポートフォリオに落とし込む。" },
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
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            関連: <Link href="/knowledge/portfolio/" className="text-petrol hover:underline">エンジニアのポートフォリオの作り方</Link>、<Link href="/knowledge/continuous-learning/" className="text-petrol hover:underline">エンジニアの継続的な学習</Link>。
          </p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点とデメリット</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              ミドル層が生成AIに参入する最大の武器は、<strong>「業務・ドメインを理解していること」</strong>です。LLMを「どの業務に、どう効かせるか」を設計できる人は、技術だけの若手より価値が出ます。厚労省 job tagの「AIエンジニア」平均年齢が42.2歳（令和7年）であることも、ミドルが主役になり得る領域であることを示しています。
            </p>
            <p>
              <strong>デメリット・注意点も正直に書きます。</strong>生成AIは技術の陳腐化が非常に速く、半年でベストプラクティスが変わることも珍しくありません。継続的な学習が前提で、これを負担に感じる人には厳しい領域です。また「生成AI」を冠した求人にはPoC止まり・実態の薄い案件も混じるため、本番運用の実績を求める企業かどうかを見極める必要があります。
            </p>
            <p>
              年代別の市場感は
              <Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・
              <Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>、
              年収交渉は
              <Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉のコツ</Link>
              も合わせてご覧ください。
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
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">
                  A. {faq.a}
                  {faq.aLink && (
                    <>
                      <Link href={faq.aLink.href} className="text-petrol hover:underline">{faq.aLink.label}</Link>
                      {faq.aTail}
                    </>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">生成AIスキルを活かした転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            生成AI・LLM案件に強いIT特化型エージェントで、あなたのスキルの市場価値を確認しましょう。
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
              { name: "AI/MLエンジニア転職ガイド", href: "/skill/ai-ml/" },
              { name: "Pythonエンジニア転職ガイド", href: "/skill/python/" },
              { name: "DevSecOpsキャリア", href: "/career/devsecops/" },
              { name: "データサイエンティスト転職ガイド", href: "/skill/data-scientist/" },
              { name: "エンジニアの継続的な学習", href: "/knowledge/continuous-learning/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
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
