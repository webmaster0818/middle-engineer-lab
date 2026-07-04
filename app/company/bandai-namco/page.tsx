import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "バンダイナムコの転職難易度と年収は？平均1216万円【2026年・有報】エンジニア転職ガイド",
  description:
    "バンダイナムコのエンジニア中途採用を有価証券報告書・公式採用ページの一次情報で解説。持株会社平均年収1,216万円(2025年3月期)の注意点、内製エンジンSOL-AVES等の技術、選考を中立にまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：転職難易度と向くエンジニア" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "feature", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術スタック（公開情報）" },
  { id: "salary", label: "年収データ（重要な注意点あり）" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "社員口コミの傾向" },
  { id: "middle", label: "30代・40代から見たバンダイナムコ" },
  { id: "agent", label: "おすすめエージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["持株会社", "株式会社バンダイナムコホールディングス（証券コード7832・東証プライム）"],
  ["主な開発会社", "バンダイナムコスタジオ（開発）、バンダイナムコエンターテインメント（企画・販売）等"],
  ["業種", "ゲーム・トイホビー・IPプロデュース等の総合エンタテインメント"],
  ["平均年収（持株会社単体）", "1,216万円（2025年3月期・提出会社単体／全従業員平均・賞与等含む）※下記注意点を参照"],
  ["平均年齢（持株会社単体）", "46.7歳（2025年3月期・提出会社単体）"],
  ["本社所在地", "東京都港区"],
  ["技術スタック", "C++ ／ 内製ゲームエンジン『SOL-AVES』／ Unity・Unreal Engine（職種により）／ サーバ・ML（R&D）"],
];

const faqs = [
  { q: "バンダイナムコはエンジニアの中途採用を行っている？", a: "はい。開発の中核であるバンダイナムコスタジオの公式キャリア採用ページで、家庭用ゲームエンジニア、ゲームAIエンジニア、グラフィックスエンジニア、サーバエンジニア、R&Dエンジニア（機械学習）など多数の職種を募集しています。グループは持株会社制で会社が分かれるため、職種により応募先が異なります。" },
  { q: "バンダイナムコの平均年収はいくら？注意点は？", a: "2025年3月期の有価証券報告書では、提出会社（バンダイナムコホールディングス＝持株会社）単体の平均年間給与は1,216万円、平均年齢46.7歳と記載されています。ただしこれは従業員数が数十名規模の持株会社（経営管理機能中心）の数値で、ゲーム開発を担うバンダイナムコスタジオ等の現場エンジニアの年収を表すものではありません。開発現場の給与水準は別物として捉える必要があります。" },
  { q: "バンダイナムコの開発会社のエンジニア年収は公開されている？", a: "バンダイナムコスタジオなど開発会社単体の職種別・等級別年収レンジは公式に開示されていません。口コミプラットフォームでは「賞与の比率が高い」「IT企業と比べると待遇面で見劣りするとの声もある」といった傾向が見られますが、確定した公開値はないため、当ガイドでは推測の数値表は掲載していません。" },
  { q: "バンダイナムコの技術スタックは？", a: "バンダイナムコスタジオの募集職種からは、C++を中心としたゲーム開発、内製ゲームエンジン『SOL-AVES』に関わるグラフィックス／エディタ／ツール／自動テストの各エンジニア職、サーバエンジニア、機械学習のR&Dエンジニアなどが確認できます。Unity・Unreal Engineを使う職種もありますが、具体的な使用言語・バージョンの詳細は募集要項により異なります。" },
  { q: "バンダイナムコの選考フローは？", a: "一般的に、公式採用ページまたはエージェント経由での応募 → 書類選考 →（ゲーム開発職では作品・ポートフォリオ審査）→ 面接（複数回）→ 内定、という流れです。具体的なステップ数・内容は応募先の会社・職種により異なるため、各社の募集要項で確認してください。" },
  { q: "バンダイナムコへの転職で有利な経験は？", a: "C++によるゲーム開発経験、Unreal Engine／Unityでの開発経験、3Dグラフィックスやゲームエンジン周辺（ツール・エディタ）の知識、サーバサイド開発経験、機械学習の研究開発経験などが、募集職種に応じて評価されやすい傾向です。IPへの理解・ゲームへの関心も語られることが多い領域です。" },
  { q: "どの会社に応募すればいい？", a: "ゲームの開発・実装エンジニアはバンダイナムコスタジオ、企画・運営寄りはバンダイナムコエンターテインメント、オンラインサービス運用はバンダイナムコオンライン、など担当領域で会社が分かれます。まず自分の専門に近い開発会社の採用ページを確認するのが近道です。" },
  { q: "バンダイナムコのエンジニア中途採用は未経験でも可能？", a: "中途採用は即戦力の経験者採用が基本で、各募集要項に必須スキル（C++でのゲーム開発経験等）が明示されています。完全未経験での中途入社は現実的ではなく、別のゲーム／IT企業で実務経験を積むことが前提になります。" },
];

export default function BandaiNamcoCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="バンダイナムコ エンジニア転職ガイド" description="バンダイナムコへのエンジニア転職を有価証券報告書・公式採用ページの一次情報で解説。持株会社平均年収1,216万円(2025年3月期)の注意点、内製エンジンSOL-AVES等の技術をまとめました。" url="/company/bandai-namco/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "バンダイナムコ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">バンダイナムコへのエンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          バンダイナムコグループへのエンジニア中途採用について、有価証券報告書と公式採用ページの一次情報をもとに、転職難易度・年収・技術スタック・選考を中立にまとめました。ガンダム・ドラゴンボール・鉄拳・テイルズなど世界的IPを軸に、家庭用からモバイル・オンラインまで幅広いゲーム開発を行うグループです。<strong>持株会社と開発会社で年収データの意味が大きく異なる</strong>点を、本ガイドでは明確に区別して解説します。
        </p>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 出典は各データの直後に明記しています。</p>

        <DataNote surveyedAt="2026年6月" sources={["バンダイナムコHD 有価証券報告書（2025年3月期）", "バンダイナムコスタジオ 公式採用サイト", "リサコ by キャリコネ（有報読解）", "OpenWork（口コミ傾向）"]} />

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度と向くエンジニア</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-sm text-blue-900 font-bold mb-3">転職難易度：高い（経験者・職種特化／応募先の会社選びが鍵）</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・開発の中核は<strong>バンダイナムコスタジオ</strong>。C++・内製エンジン『SOL-AVES』を軸に、グラフィックス／サーバ／ゲームAI／機械学習R&Dなど職種が細分化。専門特化型に向く。</li>
              <li>・世界的IPの大規模タイトル開発に携われる一方、<strong>持株会社の有報年収（1,216万円）はゲーム開発現場の実態ではない</strong>点に強く注意が必要。</li>
              <li>・応募先は<strong>会社ごと（スタジオ／エンターテインメント／オンライン）</strong>に分かれる。自分の専門に合う会社を起点に選ぶ。</li>
            </ul>
          </div>
        </section>

        <nav aria-label="目次" className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {toc.map((t) => (<li key={t.id}><a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a></li>))}
          </ol>
        </nav>

        <section id="basic" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（出典付き）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm"><tbody>
              {basicData.map(([label, value], i) => (<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}><th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td></tr>))}
            </tbody></table>
          </div>
          <p className="text-xs text-slate-500">出典：バンダイナムコホールディングス「有価証券報告書」2025年3月期（提出会社＝持株会社単体）、リサコ by キャリコネによる有報読解、バンダイナムコスタジオ公式採用サイト。<strong>提出会社は経営管理を担う持株会社のため、平均年収・平均年齢は開発会社の実態とは異なります。</strong></p>
        </section>

        <section id="feature" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">世界的IPの大規模ゲーム開発</h3><p className="text-sm text-petrol-deep">ガンダム、ドラゴンボール、鉄拳、テイルズなどの人気IPを軸に、家庭用・モバイル・オンラインの各プラットフォームでゲームを開発します。大規模タイトルではチーム開発・長期開発のノウハウが求められます。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">内製エンジン『SOL-AVES』と職種の細分化</h3><p className="text-sm text-petrol-deep">バンダイナムコスタジオでは内製ゲームエンジン『SOL-AVES』を中心に、グラフィックス／エディタ／ツール／自動テストの各エンジニア職が分かれています。ゲームAIエンジニアや機械学習のR&Dエンジニアなど、専門領域ごとの募集がある点が特徴です。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">会社ごとに分かれる採用窓口</h3><p className="text-sm text-petrol-deep">開発はバンダイナムコスタジオ、企画・販売はバンダイナムコエンターテインメント、オンライン運用はバンダイナムコオンラインなど、機能ごとに会社が分かれています。応募先の選定が最初のステップになります。</p></div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式採用ページの公開情報）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">以下はバンダイナムコスタジオの公式キャリア採用ページで確認できる募集職種から読み取れる範囲です。</p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>C++</strong>：家庭用ゲーム開発（クライアント／グラフィックス）の中核言語</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>内製ゲームエンジン『SOL-AVES』</strong>：グラフィックス／エディタ／ツール／自動テストの各エンジニア職</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>サーバ／ネットワーク</strong>：サーバエンジニア・ネットワークプログラマの職種あり</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>機械学習</strong>：シニア／一般のR&Dエンジニア（機械学習）職、ゲームAIエンジニア職</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span>Unity・Unreal Engine：プロジェクト・職種により使用（募集要項で要確認）</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：バンダイナムコスタジオ「キャリア採用」募集職種一覧。具体的な使用言語・バージョン・選考詳細は各募集要項により異なります。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（重要な注意点あり）</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>注意：</strong>有価証券報告書に載る「平均年収1,216万円（2025年3月期・平均年齢46.7歳）」は、<strong>提出会社であるバンダイナムコホールディングス（持株会社）単体</strong>の数値です。この持株会社は経営管理機能が中心で従業員数も数十名規模であり、<strong>ゲーム開発を担うバンダイナムコスタジオ等の現場エンジニアの年収とは一致しません</strong>。「バンダイナムコの平均年収＝開発職の年収」と誤解しないよう注意してください。
            </p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-2">
            開発会社（バンダイナムコスタジオ等）の職種別・等級別の年収レンジは公式に開示されていません。口コミプラットフォームでは「賞与の比率が高い」「IT系企業と比べ待遇面で見劣りするとの声がある」といった傾向が見られますが、確定した公開値はないため、当ガイドでは推測の等級別年収表は掲載していません。内定時の処遇は応募先の会社単位で個別に確認してください。
          </p>
          <p className="text-xs text-slate-500">出典：バンダイナムコホールディングス「有価証券報告書」2025年3月期、リサコ by キャリコネによる有報読解、OpenWork掲載の口コミ傾向。</p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公開情報ベース）</h2>
          <ol className="space-y-3">
            {[
              ["STEP 1", "応募（会社別）", "バンダイナムコスタジオ等、応募先の会社の公式採用ページまたはエージェント経由で応募。"],
              ["STEP 2", "書類選考", "職務経歴書・スキルで募集職種とのマッチを確認。"],
              ["STEP 3", "作品・面接", "ゲーム開発職では作品・ポートフォリオ審査の場合あり。面接は複数回を想定。"],
              ["STEP 4", "内定", "応募先の会社の処遇に基づき条件提示。"],
            ].map(([step, title, desc], i) => (
              <li key={i} className="flex gap-4 border border-slate-200 rounded-lg p-4">
                <span className="shrink-0 text-xs font-bold text-petrol-deep bg-petrol-soft rounded px-2 py-1 h-fit">{step}</span>
                <div><p className="font-bold text-slate-800 text-sm mb-1">{title}</p><p className="text-sm text-slate-600">{desc}</p></div>
              </li>
            ))}
          </ol>
          <p className="text-xs text-slate-500 mt-2">出典：バンダイナムコスタジオ等の公式採用サイト。具体的なステップ数・内容は応募先の会社・職種により異なります。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">具体的な質問リストは公式に公開されておらず、断定はできません。募集要項と口コミ傾向から、評価されやすいと考えられる観点を一般化して挙げます。</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>応募職種（グラフィックス／サーバ／ゲームAI／ML等）に対応した実装力と専門性</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>C++・ゲームエンジン周辺の理解と、大規模チーム開発での協働経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>IP・ゲームへの理解と、エンタテインメント体験を技術で支える姿勢</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>長期・大規模タイトルの品質を支えるための設計・テストへの意識</li>
          </ul>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">社員口コミの傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、バンダイナムコグループについて<strong>「有名IPの大規模タイトルに関われる働きがい」「ブランドの安定感」</strong>を評価する声が見られます。一方、開発（スタジオ）のエンジニアからは<strong>「給与が相対的に低い、純粋なIT企業の方が待遇が良いと感じる」「賞与比率が高い給与構造」</strong>といった指摘も見られ、働きがいと処遇のバランスは人により評価が分かれる傾向です。
          </p>
          <p className="text-xs text-slate-500">出典：OpenWork掲載の社員クチコミの傾向を要約（個別スコア・原文の転載はしていません）。評価はグループ各社・部署・職種により大きく異なります。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たバンダイナムコ</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>世界的IPの大規模開発という、他社では得がたい経験が積める点は30代・40代のゲームエンジニアにとって大きな魅力です。テクニカルディレクターやリードエンジニアといった役割の募集もあり、<strong>マネジメント・技術リードの経験を活かせるポジション</strong>が存在します。専門特化が進んだ組織のため、自分の領域（グラフィックス／サーバ／ML等）の深さが評価されます。</p>
            <p>一方で、年収面では「持株会社の有報年収（1,216万円）＝開発職の年収ではない」ことを必ず理解しておく必要があります。前職がメガベンチャーやWeb系の場合、開発会社の提示年収が想定より低く感じられる可能性もあるため、内定時の処遇を個別に精査し、年収交渉を行うことが重要です。IPへの愛着とキャリアの専門性、そして処遇のバランスをどう取るかが判断軸になります。</p>
            <p>転職判断では年収相場の把握が欠かせません。<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>や<Link href="/knowledge/offer-compare/" className="text-petrol hover:underline">オファー比較の進め方</Link>もあわせて確認してください。</p>
          </div>
        </section>

        <section id="agent" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">バンダイナムコ転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム業界に特化。ゲーム企業の求人提案に強み。" }, { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化で高年収求人比率が高く、技術面接対策のサポートあり。" }, { name: "マイナビIT AGENT", href: "/review/mynavi-it/", desc: "書類添削・面接対策が手厚い。大手エンタメ系の求人もカバー。" }].map((agent, i) => (<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
          <p className="text-xs text-slate-500 mt-3">求人保有状況は時期により変動します。<Link href="/compare/agents/" className="text-petrol hover:underline">エージェント比較</Link>もあわせて参照してください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">バンダイナムコへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">ゲーム企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/geekly/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="faq" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ name: "C++の転職ガイド", href: "/skill/cpp/" }, { name: "Unityの転職ガイド", href: "/skill/unity/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "任天堂の転職ガイド", href: "/company/nintendo/" }, { name: "ソニーグループの転職ガイド", href: "/company/sony/" }, { name: "DeNAの転職ガイド", href: "/company/dena/" }, { name: "サイバーエージェントの転職ガイド", href: "/company/cyberagent/" }, { name: "オファー比較の進め方", href: "/knowledge/offer-compare/" }, { name: "40代エンジニアの転職の現実", href: "/knowledge/40s-reality/" }].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
