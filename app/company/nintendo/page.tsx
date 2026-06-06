import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "任天堂へのエンジニア転職｜年収・技術スタック・選考フロー【2026年版】",
  description:
    "任天堂のエンジニア中途採用を有価証券報告書・公式採用ページの一次情報で解説。平均年収966万円(2025年3月期)、選考フロー、技術スタック、30代40代の現実を中立にまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：転職難易度と向くエンジニア" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "feature", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術スタック（公開情報）" },
  { id: "salary", label: "年収データ" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "社員口コミの傾向" },
  { id: "middle", label: "30代・40代から見た任天堂" },
  { id: "agent", label: "おすすめエージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "任天堂株式会社（証券コード7974・東証プライム）"],
  ["業種", "ゲーム・エンタテインメント（ハード／ソフト一体開発）"],
  ["平均年収", "966万円（2025年3月期・提出会社単体／全従業員平均・賞与含む）"],
  ["平均年齢", "40.2歳（2025年3月期・提出会社単体）"],
  ["従業員数", "2,962名（2025年3月期・提出会社単体）／連結 約7,700名"],
  ["本社所在地", "京都府京都市南区"],
  ["技術スタック", "C++（本体・システムソフト）／Go・Kotlin・Java・Ruby・JavaScript（ネットワークサービス）"],
];

const salaryRows: [string, string][] = [
  ["平均年収（提出会社単体・全従業員）", "966万円"],
  ["平均年齢", "40.2歳"],
  ["平均勤続年数", "14.4年"],
  ["前年度比", "約+3.9万円（前期から微増）"],
];

const faqs = [
  { q: "任天堂はエンジニアの中途採用（キャリア採用）を行っている？", a: "はい。公式の「キャリア採用」ページでソフトウェアエンジニア職を継続的に募集しています。調査時点ではNintendo Switch 2のHOMEメニューUI/UXエンジニア、Webサービス開発のフロントエンドエンジニア、モバイルアプリエンジニアなどの募集が公開されていました。募集職種は時期により変動するため、最新は公式採用ページをご確認ください。" },
  { q: "任天堂の平均年収はいくら？", a: "2025年3月期の有価証券報告書によると、提出会社（任天堂株式会社単体）の平均年間給与は966万円、平均年齢40.2歳、平均勤続年数14.4年です。これは賞与を含む全従業員（エンジニア以外も含む）の平均で、職種別・等級別の内訳は公式には開示されていません。" },
  { q: "任天堂のエンジニア職の提示年収レンジは公開されている？", a: "任天堂は職種別・等級別の年収レンジを公式に開示していません。求人サイトでも具体的な提示レンジが常時公開されているわけではないため、当ガイドでは推測の数値表は掲載していません。目安としては有価証券報告書の平均年収966万円が参考値になります。" },
  { q: "任天堂の選考フローは？", a: "公式採用プロセスによると、(1)ホームページの「キャリア採用Web応募」から応募 →(2)作品選考（職種により実施）→(3)面接（複数回を予定）→(4)内定、という流れです。応募から内定まで2〜3か月程度、書類選考の結果連絡まで約1か月を要すると明記されています。" },
  { q: "任天堂で使われている開発言語は？", a: "公式の職種紹介によると、ゲーム機本体・システムソフト・ライブラリの開発にはC++が用いられ、ネットワークサービス開発ではGo・Kotlin・Java・Ruby・JavaScriptなどが使われています。ゲーム開発職ではC++の経験が必須、C#・Python・Rubyなどが歓迎スキルとされる募集が見られます。" },
  { q: "任天堂の勤務地は？リモートワークはできる？", a: "京都市南区の本社が開発の中心です。一部職種では東京勤務の募集もあります。リモートワークの可否は職種・募集要項により異なるため、応募時に各募集要項で確認する必要があります。" },
  { q: "任天堂への転職で有利な経験は？", a: "公開されている募集要項からは、C++によるゲームプログラミングの実務経験、3Dグラフィックス・物理演算・AI・サウンド・通信などのゲームシステム開発経験、ネットワークサービス開発（Go/Kotlin等）の経験が評価される傾向が読み取れます。コンソールゲーム開発の経験は特に親和性が高いと考えられます。" },
  { q: "任天堂のエンジニア転職は未経験でも可能？", a: "公式のキャリア採用は即戦力の経験者採用が基本で、各募集要項に必須スキル（C++でのゲーム開発経験等）が明示されています。完全未経験からの中途採用は現実的ではなく、まずは別のゲーム／IT企業で実務経験を積むのが一般的な道筋です。" },
];

export default function NintendoCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="任天堂 エンジニア転職ガイド" description="任天堂へのエンジニア転職を有価証券報告書・公式採用ページの一次情報で解説。平均年収966万円(2025年3月期)、選考フロー、技術スタックをまとめました。" url="/company/nintendo/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "任天堂" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">任天堂へのエンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          任天堂株式会社へのエンジニア中途採用（キャリア採用）について、有価証券報告書と公式採用ページの一次情報をもとに、転職難易度・年収・技術スタック・選考フローを中立にまとめました。マリオ・ゼルダ・ポケモンといった世界的IPを、自社のゲーム機ハードウェアと一体で開発できる数少ない企業です。
        </p>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 出典は各データの直後に明記しています。</p>

        <DataNote surveyedAt="2026年6月" sources={["任天堂 有価証券報告書（2025年3月期）", "任天堂 公式採用サイト（キャリア採用）", "IRBANK", "OpenWork（口コミ傾向）"]} />

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度と向くエンジニア</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-sm text-blue-900 font-bold mb-3">転職難易度：かなり高い（経験者・専門特化型）</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・自社ハード（Nintendo Switch等）の制約下で最高の体験を作る、C++中心の低レイヤー最適化が中核。<strong>コンソールゲーム開発・組み込み近傍の経験者</strong>に向く。</li>
              <li>・選考は<strong>作品選考＋複数回面接</strong>で、応募から内定まで2〜3か月。即戦力性とモノづくりへの姿勢を強く見られる。</li>
              <li>・年収は提出会社単体の平均で<strong>966万円（2025年3月期・有報）</strong>。財務基盤が盤石で、業績連動賞与の比重が大きい。</li>
            </ul>
            <p className="text-xs text-blue-800 mt-3">逆に、最新のWebモダン技術を最優先したい人や、フルリモート前提の人は京都本社中心の働き方とミスマッチが起きやすい点に注意が必要です。</p>
          </div>
        </section>

        <nav aria-label="目次" className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-blue-600 hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="basic" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（出典付き）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm"><tbody>
              {basicData.map(([label, value], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}><th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td></tr>
              ))}
            </tbody></table>
          </div>
          <p className="text-xs text-slate-500">出典：任天堂「有価証券報告書」2025年3月期（提出会社＝任天堂株式会社単体の従業員データ）、IRBANK集計、任天堂公式採用サイトの職種紹介。連結従業員数は概数。</p>
        </section>

        <section id="feature" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">ハード×ソフトの一体開発</h3><p className="text-sm text-blue-700">ゲーム機本体からシステムソフト、ライブラリ、ゲームソフトまでを自社で一体開発する数少ない企業です。ハードの性能を引き出すための最適化や、限られたリソースの中で体験品質を高めるエンジニアリングが中核に置かれています。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">世界的IPのゲーム／サービス開発</h3><p className="text-sm text-blue-700">公式の職種紹介では、ゲーム開発はグラフィックス・物理演算・AI・サウンド・UI・ゲームシステム・通信など多岐にわたるプログラム実装を担当すると説明されています。ネットワークサービス開発はWebアプリケーション領域として独立した職種があります。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">安定した財務基盤</h3><p className="text-sm text-blue-700">有価証券報告書ベースで平均勤続年数は14.4年と長く、定着率の高さがうかがえます。業績好調時には賞与の比重が大きくなる給与構造で、これが平均年収966万円（2025年3月期）を支える一因とされています。</p></div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式採用ページの公開情報）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">以下は任天堂の公式採用サイト（職種紹介・募集要項）で公開されている情報に基づきます。社外向け技術ブログを大々的に運営する企業ではないため、求人記載が主な一次情報になります。</p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>C++</strong>：ゲーム機本体・システムソフト・ライブラリ、およびゲームソフト開発の主力言語</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>Go / Kotlin / Java / Ruby / JavaScript</strong>：ネットワークサービス（Webアプリケーション）開発で使用</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>C# / Python / Ruby</strong>：ゲーム開発職の歓迎スキル（スクリプト言語）として記載される例</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span>3Dグラフィックス・物理演算・サウンド・通信など、ゲームシステム全般のプログラミング領域</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：任天堂 公式採用サイト「職種紹介（ゲーム開発／ネットワークサービス開発）」「キャリア採用 募集要項」。具体的な内製エンジン名やバージョンは公開されていません。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100"><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">項目</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">数値（2025年3月期・提出会社単体）</th></tr></thead>
              <tbody>{salaryRows.map(([k, v], i) => (<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{k}</td><td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium">{v}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-2">
            上表は任天堂の<strong>有価証券報告書（2025年3月期）</strong>に記載された提出会社（任天堂株式会社単体）の数値です。これは<strong>エンジニア以外も含む全従業員の平均</strong>であり、職種別・等級別の年収は公式に開示されていません。そのため、当ガイドでは出典のない等級別年収表は掲載していません。
          </p>
          <p className="text-xs text-slate-500">出典：任天堂「有価証券報告書」2025年3月期、IRBANK集計。エンジニア職の提示年収レンジは公式・求人サイトで継続的に確認できる公開値がないため記載を控えています。</p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式採用ページベース）</h2>
          <ol className="space-y-3">
            {[
              ["STEP 1", "Web応募", "公式サイトの「キャリア採用Web応募」から応募。登録メールアドレスに完了通知が届く。"],
              ["STEP 2", "作品選考", "職種により必要に応じて実施（ポートフォリオ・作品提出）。"],
              ["STEP 3", "面接", "複数回を予定。専門性に加え、モノづくりへの姿勢・志望度が見られる。"],
              ["STEP 4", "内定", "採用条件の提示。応募から内定まで2〜3か月程度、書類結果まで約1か月。"],
            ].map(([step, title, desc], i) => (
              <li key={i} className="flex gap-4 border border-slate-200 rounded-lg p-4">
                <span className="shrink-0 text-xs font-bold text-blue-700 bg-blue-50 rounded px-2 py-1 h-fit">{step}</span>
                <div><p className="font-bold text-slate-800 text-sm mb-1">{title}</p><p className="text-sm text-slate-600">{desc}</p></div>
              </li>
            ))}
          </ol>
          <p className="text-xs text-slate-500 mt-2">出典：任天堂 公式採用サイト「キャリア採用：採用プロセス」。フローは職種・時期により変動する場合があります。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">具体的な面接質問リストは公式に公開されておらず、断定はできません。公開されている募集要項と口コミプラットフォームの傾向から、評価されやすいと考えられるポイントを一般化して挙げます。</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>C++を中心とした実装力と、ハード制約下での最適化・パフォーマンスへの理解</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>「遊び」の体験価値を技術でどう高めるかという、プロダクト志向の思考</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>長期での品質追求・モノづくりへの姿勢（定着率の高い文化との整合）</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>担当領域（グラフィックス／ネットワーク／組み込み等）の専門的な深さ</li>
          </ul>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">社員口コミの傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、任天堂について<strong>「ブランド力・京都勤務という条件への満足度が高い」「給与・福利厚生への評価が高い」</strong>という声が見られる一方、<strong>「業務量に対して人員が限られ、部署によっては残業が多い」「社内での成長機会・配置に課題を感じる場合がある」</strong>といった指摘も見られます。「会社（任天堂というプロダクト）が好きであることが前提になる」という趣旨の声もあり、IPやモノづくりへの愛着が定着の鍵になる傾向がうかがえます。
          </p>
          <p className="text-xs text-slate-500">出典：OpenWork掲載の社員クチコミの傾向を要約（個別スコア・原文の転載はしていません）。評価は部署・時期・職種により大きく異なります。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見た任天堂</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>提出会社単体の<strong>平均年齢は40.2歳、平均勤続年数14.4年</strong>（2025年3月期・有報）。新卒からの長期勤続者が中核を占める組織で、年齢構成としては30代・40代のミドル層が多数派の落ち着いた環境といえます。中途で入る場合は、即戦力としての専門性に加え、長期での品質追求文化に馴染めるかが定着のポイントになります。</p>
            <p>30代・40代のコンソールゲーム開発経験者・組み込み近傍のC++エンジニアにとっては、キャリアの専門性が直接活きる希少なポジションです。一方で、Webモダン技術やフルリモートを最優先するキャリア観の場合は、京都本社中心・自社技術中心の環境との相性を事前に見極めることをおすすめします。年収面では平均966万円が一つの基準となり、前職年収との比較や賞与比率の確認が重要です。</p>
            <p>転職活動では、ミドル層の年収交渉・キャリア整理の観点も押さえておきたいところです。<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収相場</Link>や<Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">市場価値の把握</Link>もあわせて確認してください。</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-800 text-sm mb-3">向いている人</p>
              <ul className="space-y-2 text-sm text-green-900">
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>C++での低レイヤー実装・最適化が得意なコンソールゲーム開発経験者</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>ハード制約の中で体験品質を追求するモノづくりに情熱がある</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>京都本社を中心とした腰を据えた長期就業に魅力を感じる</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>ネットワークサービス（Go/Kotlin等）でWeb基盤を支えたい</li>
              </ul>
            </div>
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-800 text-sm mb-3">向いていない人</p>
              <ul className="space-y-2 text-sm text-rose-900">
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>フルリモート・場所を選ばない働き方を最優先したい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>最新のWeb/クラウドのトレンド技術を常に追いたい志向が強い</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>短期間での昇給・等級ジャンプを第一に考えている</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>ゲーム開発の実務経験がなく、未経験からの参入を狙っている</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ゲーム・IT業界の転職市場と任天堂の位置づけ</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>経済産業省「IT人材需給に関する調査」（2019年公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。需要が構造的に拡大するなかで、コンソールゲーム特有の低レイヤー最適化スキルは希少性が高く、任天堂のような自社ハードを持つ企業は限られた選択肢になります。</p>
            <p>年代別の年収水準の目安として、レバテックが公表する正社員SEの平均年収（2025年）は30代約499万円・40代約618万円とされています。これはIT職全般の平均で、任天堂の提出会社平均966万円（2025年3月期・有報）はこれを大きく上回ります。ただし有報の値は全従業員平均であり、職種・等級・賞与により個人差が大きい点に留意が必要です。</p>
            <p>つまり任天堂は「希少な専門性を、業界平均より高い水準で評価する」企業といえます。一方で募集職種が専門特化しているため、自分の経験がどの募集とマッチするかの見極めが転職成功の鍵になります。</p>
          </div>
        </section>

        <section id="agent" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">任天堂転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム業界に特化。ゲーム企業の求人提案に強み。提案スピードが速い。" }, { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化で高年収求人比率が高く、技術面接対策のサポートが受けられる。" }, { name: "doda（IT）", href: "/review/doda-it/", desc: "国内最大級の求人数。メーカー・大手の求人を幅広くカバー。" }].map((agent, i) => (<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
          <p className="text-xs text-slate-500 mt-3">特定企業の求人保有状況は時期により変動します。複数社の併用で求人の取りこぼしを防ぐのが定石です。詳しくは<Link href="/compare/agents/" className="text-blue-600 hover:underline">エージェント比較</Link>を参照してください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">任天堂への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">ゲーム企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/geekly/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="faq" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ name: "ソニーグループの転職ガイド", href: "/company/sony/" }, { name: "バンダイナムコの転職ガイド", href: "/company/bandai-namco/" }, { name: "DeNAの転職ガイド", href: "/company/dena/" }, { name: "サイバーエージェントの転職ガイド", href: "/company/cyberagent/" }, { name: "コーディングテスト対策", href: "/knowledge/coding-test/" }, { name: "40代エンジニアの転職の現実", href: "/knowledge/40s-reality/" }].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
