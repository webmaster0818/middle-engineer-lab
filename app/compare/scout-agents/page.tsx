import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "スカウト型転職サービス比較｜エンジニア向け6社【2026年6月】",
  description:
    "エンジニア向けスカウト型サービスをタイプ別に整理。スキル評価型・発信AI解析型・コミュニティ型・ハイクラス型・共感型の違い、怪しいスカウトの見分け方、スカウトを増やすコツを30代40代視点で解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：タイプ別おすすめマップ" },
  { id: "what", label: "スカウト型とは（エージェント型との違い）" },
  { id: "types", label: "5タイプ別の特徴と代表サービス" },
  { id: "compare", label: "主要サービス一覧表" },
  { id: "fake", label: "怪しいスカウトの見分け方" },
  { id: "increase", label: "スカウトを増やすコツ・ばら撒き対策" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事・個別レビュー" },
];

const table = [
  { name: "Findy", type: "①スキル評価型", point: "GitHub連携のスキル偏差値で評価。掲載企業800社以上厳選（公式・2024年7月）。求人数は非明示", target: "モダン言語の即戦力・Web自社開発", review: "/review/findy/" },
  { name: "paiza", type: "①スキル評価型", point: "コーディングテスト（スキルチェック）のランクで評価。テストで実力を示せる", target: "コードで腕を見せたいエンジニア", review: "/review/paiza/" },
  { name: "LAPRAS", type: "②発信AI解析型", point: "GitHub/Qiita/note/X/connpassをAI解析しポートフォリオ自動生成。導入企業700社以上（二次）", target: "技術記事・OSS・登壇など発信が多い人", review: "/review/lapras/" },
  { name: "Forkwell", type: "③コミュニティ型", point: "ポートフォリオ＋勉強会200本超のコミュニティ。登録 約59,000〜60,000人（二次）。質重視", target: "発信・学習文化に共感する中〜上級", review: "/review/forkwell/" },
  { name: "リクルートダイレクトスカウト", type: "④ハイクラス型", point: "ヘッドハンター/企業スカウト。公開求人約59.3万件・年収800万以上約34.7万件（二次2026年2月）。完全無料・審査なし", target: "年収600〜2,000万のミドル〜ハイクラス全業種", review: "/review/recruit-direct-scout/" },
  { name: "dodaX", type: "④ハイクラス型", point: "ヘッドハンター約7,300人（2025年4月）。公開求人106,491件・800万以上95,069件（二次2026年5月）。完全無料", target: "年収800万超のハイクラス全業種", review: "/review/doda-x/" },
  { name: "ビズリーチ", type: "④ハイクラス型", point: "導入企業41,800社以上・登録ヘッドハンター9,700人以上（2025年4月・二次）。審査あり・有料プラン前提機能あり", target: "年収750万以上が目安のハイクラス", review: "/review/bizreach-it/" },
  { name: "Wantedly", type: "⑤共感型", point: "共感軸のビジネスSNS。カジュアル面談前提で給与待遇は原則非記載。ユーザー400万人＋（二次）", target: "スタートアップ/ベンチャー志向", review: "/review/wantedly/" },
];

const faqs = [
  { q: "スカウト型とエージェント型はどう違いますか？", a: "スカウト型はプロフィールやGitHub・発信を整えて『待つ』仕組みで、企業やヘッドハンターから直接スカウトが届きます。エージェント型は専任のキャリアアドバイザーに希望を伝え、求人提案・書類添削・面接対策・年収交渉まで『伴走してもらう』仕組みです。市場価値を測りたいならスカウト型、選考をプロに任せたいならエージェント型、というのが基本の使い分けです。" },
  { q: "スカウト型サービスは無料ですか？", a: "多くは求職者完全無料です。Findy・paiza・LAPRAS・Forkwell・リクルートダイレクトスカウト・dodaXは求職者無料です。ビズリーチは無料会員プランがある一方、すべてのスカウト閲覧など一部機能は有料プラン（Web決済5,478円/月・2022年11月改定の二次情報）が前提です。まずは無料で試し、必要に応じて有料化を検討するのが現実的です。" },
  { q: "リクルートダイレクトスカウトとリクルートエージェントは同じですか？", a: "別物です。リクルートダイレクトスカウト（RDS）はスカウトを『待つ』ハイクラススカウト型サービスで、ヘッドハンターや企業から声がかかります。リクルートエージェントは担当が求人を『提案する』エージェント型です。名前が似ていますが仕組みが異なるため、混同にご注意ください。" },
  { q: "dodaXは、dodaやdoda ITと同じサービスですか？", a: "いずれも別サービスです。dodaXはハイクラススカウト型（旧iX転職・2022年10月にdoda Xへ改称）で、ヘッドハンターや企業からスカウトが届きます。dodaのIT特化エージェント（doda IT）は担当が伴走するエージェント型です。dodaブランドで混同しやすいので、スカウトを待つのがdodaX、伴走されるのがdoda IT、と覚えておくと安全です。" },
  { q: "怪しいスカウトを見分けるにはどうすればよいですか？", a: "テンプレート丸出しで自分のスキルに触れていない、年収や条件の記載が曖昧、面談を異常に急かす、運営元や企業情報が不透明、といったスカウトは慎重に扱いましょう。逆に、プロフィールやGitHub・ポートフォリオを読んだ上で具体的に言及しているスカウトは本気度が高い傾向です。記事内の『怪しいスカウトの見分け方』で詳しく解説しています。" },
  { q: "スカウトが全然来ないのですが、どうすればよいですか？", a: "プロフィールの埋め方が薄い、公開リポジトリや発信が少ない、希望条件が厳しすぎる、エリアがミスマッチ、などが主な原因です。スキル評価型ならGitHubやテスト結果、発信AI解析型なら技術記事、ハイクラス型なら職務経歴の具体化が効きます。タイプの違う複数サービスに登録し、自分がどの軸で評価されやすいかを把握するのも有効です。" },
];

const types = [
  { id: "t1", num: "①", title: "スキル評価型", color: "blue", desc: "コードやテスト結果という客観指標で実力を可視化するタイプ。", services: "Findy（GitHub偏差値）／paiza（コーディングテストのランク）", fit: "現役でコードを書き、客観的な実力で評価されたいエンジニア。" },
  { id: "t2", num: "②", title: "発信AI解析型", color: "indigo", desc: "GitHubだけでなくWeb全体の発信をAIが解析し、ポートフォリオを自動生成するタイプ。", services: "LAPRAS（GitHub/Qiita/note/X/connpassを自動クロール）", fit: "技術記事・OSS・登壇など、発信のアウトプットが多い人。" },
  { id: "t3", num: "③", title: "コミュニティ型", color: "green", desc: "ポートフォリオと勉強会・コミュニティでの活動を軸に、質の高いマッチングを重視するタイプ。", services: "Forkwell（勉強会200本超のコミュニティ＋Forkwell Jobs）", fit: "発信・学習文化に共感し、量より質を重視する中〜上級。" },
  { id: "t4", num: "④", title: "ハイクラス型", color: "amber", desc: "ヘッドハンターや企業から高年収スカウトが届くタイプ。IT特化ではないが、年収レンジを上げる用途で有効。", services: "リクルートダイレクトスカウト／dodaX／ビズリーチ", fit: "年収600万円以上、特に管理職・上方転職を狙うミドル〜ハイクラス。" },
  { id: "t5", num: "⑤", title: "共感型", color: "rose", desc: "給与・条件より、事業フェーズやカルチャーへの共感を軸にカジュアル面談から始めるタイプ。", services: "Wantedly（給与待遇は原則非記載）", fit: "スタートアップ/ベンチャーで事業に共感して参画したい層。" },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 border-blue-200 text-blue-900",
  indigo: "bg-indigo-50 border-indigo-200 text-indigo-900",
  green: "bg-green-50 border-green-200 text-green-900",
  amber: "bg-amber-50 border-amber-200 text-amber-900",
  rose: "bg-rose-50 border-rose-200 text-rose-900",
};

export default function ScoutAgentsPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="スカウト型転職サービス比較｜エンジニア向け6社" description="エンジニア向けスカウト型サービスをタイプ別に整理。スキル評価型・発信AI解析型・コミュニティ型・ハイクラス型・共感型の違いと、怪しいスカウトの見分け方を解説します。" url="/compare/scout-agents/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "スカウト型サービス比較" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">エンジニア向けスカウト型転職サービス徹底比較｜タイプ別おすすめ</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ スキル評価型・発信AI解析型・コミュニティ型・ハイクラス型・共感型を整理</p>

        <p className="text-slate-600 leading-relaxed mb-4">「エンジニア スカウト おすすめ」で検索する方の多くは、種類が多すぎてどれに登録すべきか迷っています。スカウト型サービスは一括りにできず、評価される軸がサービスごとに異なります。本記事は30代・40代のITエンジニア向けに、主要なスカウト型サービスを5タイプに分類し、それぞれの特徴・対象・選び方を整理。怪しいスカウトの見分け方やスカウトを増やすコツ、各社の個別レビューへの導線までまとめました。</p>

        <DataNote surveyedAt="2026年6月" sources={["各社公式（Findy掲載企業数2024年7月・dodaX HH数2025年4月等）", "各転職メディアの集計値（RDS/dodaX/ビズリーチ求人数等）", "Qiita・みん評等の口コミメディア集計"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-blue-600 hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：タイプ別おすすめマップ</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4">
            <p className="font-bold text-blue-900 mb-3">あなたの強みで選ぶのが近道です。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li><strong>・コードで実力を示せる</strong> → スキル評価型（<Link href="/review/findy/" className="underline">Findy</Link>／<Link href="/review/paiza/" className="underline">paiza</Link>）</li>
              <li><strong>・技術記事・OSS・登壇など発信が多い</strong> → 発信AI解析型（<Link href="/review/lapras/" className="underline">LAPRAS</Link>）</li>
              <li><strong>・コミュニティ・学習文化が好き</strong> → コミュニティ型（<Link href="/review/forkwell/" className="underline">Forkwell</Link>）</li>
              <li><strong>・年収を一段上げたい（管理職・上方転職）</strong> → ハイクラス型（<Link href="/review/recruit-direct-scout/" className="underline">リクルートダイレクトスカウト</Link>／<Link href="/review/doda-x/" className="underline">dodaX</Link>／<Link href="/review/bizreach-it/" className="underline">ビズリーチ</Link>）</li>
              <li><strong>・カルチャー重視でベンチャー参画</strong> → 共感型（<Link href="/review/wantedly/" className="underline">Wantedly</Link>）</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">スカウト型は評価軸が分かれるため、タイプの違うサービスを2〜3社併用して「自分がどの軸で評価されやすいか」を把握するのが効率的です。多くが完全無料です。</p>
        </section>

        <section id="what" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スカウト型とは（エージェント型との違い）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">スカウト型は、プロフィールやGitHub・技術発信を整えて「待つ」仕組みです。企業やヘッドハンターがあなたのプロフィールを見てスカウトを送ってくるため、市場からどう評価されるかを客観的に把握できます。受け身で進められる一方、プロフィールが薄いとスカウトが届かないという特性があります。</p>
          <p className="text-slate-600 leading-relaxed mb-4">対してエージェント型は、専任アドバイザーが求人提案から書類添削・面接対策・年収交渉まで伴走します。選考をプロに任せたい人に向きます。両者は対立するものではなく、市場価値の把握はスカウト型、選考の伴走はエージェント型、と役割分担して併用するのが王道です。エージェント型の比較は<Link href="/compare/agents/" className="text-blue-600 hover:underline">IT転職エージェント10社比較</Link>をご覧ください。</p>
        </section>

        <section id="types" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">5タイプ別の特徴と代表サービス</h2>
          <div className="space-y-4">
            {types.map((t) => (
              <div key={t.id} className={`border rounded-xl p-5 ${colorMap[t.color]}`}>
                <h3 className="font-bold mb-1">{t.num} {t.title}</h3>
                <p className="text-sm mb-2 leading-relaxed">{t.desc}</p>
                <p className="text-sm mb-1"><strong>代表サービス：</strong>{t.services}</p>
                <p className="text-sm"><strong>向いている人：</strong>{t.fit}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed text-sm mt-4">④ハイクラス型のリクルートダイレクトスカウト・dodaX・ビズリーチは、IT特化サービスではありません。ただし、ITエンジニアが年収レンジを一段上げる（特に管理職・上方転職）用途では有効です。IT専門の現場情報が欲しい場合は、IT特化のスキル評価型やエージェント型と併用するのが安全です。</p>
        </section>

        <section id="compare" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主要サービス一覧表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[760px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium">サービス</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">タイプ</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">特徴・主なデータ</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">主な対象</th></tr></thead>
              <tbody>{table.map((row, i) => (<tr key={i} className="hover:bg-slate-50 align-top"><td className="px-3 py-3 border border-slate-200 font-medium"><Link href={row.review} className="text-blue-600 hover:underline">{row.name}</Link></td><td className="px-3 py-3 border border-slate-200">{row.type}</td><td className="px-3 py-3 border border-slate-200">{row.point}</td><td className="px-3 py-3 border border-slate-200">{row.target}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 求人数・登録者数・ヘッドハンター数は2026年6月時点の公式または転職メディア集計値で、変動が大きく多くが二次情報です。各時点は表内に併記しています。サービス名はdodaX＝旧iX転職（2022年10月改称）など改称があり、本文で混同回避を明記しています。</p>
        </section>

        <section id="fake" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">怪しいスカウトの見分け方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">スカウトの中には本気度の低いものや、条件が不透明なものも混ざります。以下のサインがあるスカウトは慎重に扱いましょう。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <h3 className="font-bold text-rose-800 mb-2">注意したいスカウト</h3>
              <ul className="text-sm text-rose-700 space-y-1 list-disc pl-5"><li>テンプレ丸出しで自分のスキルに触れていない</li><li>年収・条件の記載が曖昧、または異常に高い</li><li>面談を異常に急かす</li><li>運営元や企業情報が不透明</li><li>大量配信（ばら撒き）と分かる文面</li></ul>
            </div>
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-2">本気度が高いスカウト</h3>
              <ul className="text-sm text-green-700 space-y-1 list-disc pl-5"><li>プロフィールやGitHub・ポートフォリオに具体的に言及</li><li>ポジションと求める経験が明確</li><li>年収レンジが提示されている</li><li>ビズリーチのプラチナスカウト等、上位種別</li><li>ヘッドハンター/担当者の実名・実績が分かる</li></ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm mt-4">スカウトの仕組みと付き合い方は<Link href="/knowledge/scout/" className="text-blue-600 hover:underline">スカウトの仕組み解説</Link>もあわせてご確認ください。</p>
        </section>

        <section id="increase" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スカウトを増やすコツ・ばら撒き対策</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <ul className="space-y-3 text-sm text-slate-700">
              <li><strong>① プロフィールを埋め切る：</strong>職務経歴・スキル・実績を具体的に。数値や担当範囲を明記すると、マッチ精度が上がります。</li>
              <li><strong>② タイプに合った武器を磨く：</strong>スキル評価型なら公開リポジトリやテスト結果、発信AI解析型なら技術記事やOSS、ハイクラス型なら職務経歴の具体化が効きます。</li>
              <li><strong>③ ばら撒きスカウトは選別する：</strong>大量に届く場合は、本気度の高いものだけに返信。希望条件を明確に設定して、ノイズを減らします。</li>
              <li><strong>④ タイプの違う複数サービスを使う：</strong>評価軸が分かれるため、2〜3社併用すると自分がどの軸で評価されやすいか分かります。</li>
              <li><strong>⑤ 現職バレが不安なら公開範囲を調整：</strong>多くのサービスで企業ブロック機能や公開設定があります。登録時に確認しておきましょう。</li>
            </ul>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。経験を積んだ30代・40代の市場価値は高く、スカウト型は「自分の市場価値を測る」用途で特に有効です。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>30代エンジニアの場合：</strong>現役でコードを書いているなら、スキル評価型（Findy/paiza）や発信AI解析型（LAPRAS）で年齢より技術が評価されます。レバテック公表の年代別平均年収（2025年）では30代のSEは約499万円が一つの目安。市場価値の確認用にスキル評価型、年収レンジ確認にハイクラス型を併用すると視野が広がります。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>40代エンジニアの場合：</strong>40代でもGitHubや発信が活発なら、スキル評価型・発信AI解析型は年齢より技術を見てくれます。マネジメント経験を活かして年収を上げたいなら、ハイクラス型（リクルートダイレクトスカウト・dodaX・ビズリーチ）が有効です。年収1,000万円以上の割合は40代で12.67%（レバテック公表・2025年）とされ、上限を狙える層です。<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職事情</Link>もご覧ください。</p>
        </section>

        <section id="faq" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">強みに合ったスカウト型を2〜3社</h2>
          <p className="text-blue-100 text-sm mb-4">評価軸の違うサービスを併用して、自分がどの軸で評価されやすいかを把握。多くが完全無料です。30代・40代の市場価値の棚卸しに最適です。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめサービスランキングを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事・個別レビュー</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Findy vs Forkwell 比較", href: "/compare/findy-vs-forkwell/" },
              { name: "Findy vs レバテック 比較", href: "/compare/findy-vs-levtech/" },
              { name: "ビズリーチ vs リクルートダイレクトスカウト 比較", href: "/compare/bizreach-vs-recruit-direct-scout/" },
              { name: "dodaX vs リクルートダイレクトスカウト 比較", href: "/compare/doda-x-vs-recruit-direct-scout/" },
              { name: "Findyの評判・口コミ", href: "/review/findy/" },
              { name: "LAPRASの評判・口コミ", href: "/review/lapras/" },
              { name: "Forkwellの評判・口コミ", href: "/review/forkwell/" },
              { name: "paizaの評判・口コミ", href: "/review/paiza/" },
              { name: "リクルートダイレクトスカウトの評判", href: "/review/recruit-direct-scout/" },
              { name: "dodaXの評判・口コミ", href: "/review/doda-x/" },
              { name: "ビズリーチの評判・口コミ", href: "/review/bizreach-it/" },
              { name: "Wantedlyの評判・口コミ", href: "/review/wantedly/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
