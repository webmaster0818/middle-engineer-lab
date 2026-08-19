import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/type-it-vs-levtech/" },
  title: "type転職エージェントITとレバテックの比較｜どっちがおすすめ？【2026年8月】",
  description:
    "type転職エージェントIT（首都圏・成長企業に強い）とレバテックキャリア（IT/Web特化）を、得意領域・対象年代・求人傾向・サポート・連絡手段・実績数値で比較。25〜35歳を中心とした30代エンジニアの選び方と併用術を、出典と時点を明記して解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：どっちがおすすめか" },
  { id: "naming", label: "用語整理：この記事の「レバテック」とは" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "field", label: "項目別比較①：得意領域と求人の傾向" },
  { id: "target", label: "項目別比較②：対象年代・年齢適性" },
  { id: "support", label: "項目別比較③：サポート形態と連絡手段" },
  { id: "result", label: "項目別比較④：実績数値の読み方" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "heiyo", label: "併用ガイド" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "サービス名", a: "type転職エージェントIT", b: "レバテックキャリア（正社員転職エージェント）" },
  { item: "運営会社", a: "株式会社キャリアデザインセンター", b: "レバテック株式会社（レバレジーズグループ）" },
  { item: "得意領域", a: "首都圏の成長企業・IT/Web分野に強み（地方求人は少なめとされる＝二次情報）", b: "IT・Web領域に特化。首都圏中心（二次情報）" },
  { item: "対象年代", a: "個別相談会の対象は主に25〜35歳（公式・時点非明示）", b: "利用者の約80%が20〜30代とされる（二次情報）" },
  { item: "求人の傾向", a: "首都圏×成長企業を軸に、IT/Web職種を提案", b: "IT・Web特化の求人が中心（二次情報）" },
  { item: "サポート形態", a: "専任アドバイザーによる面談・書類添削・面接対策。オンライン面談に対応", b: "IT業界に精通した専任アドバイザーが伴走（二次情報）" },
  { item: "連絡手段", a: "面談・メール・電話等（オンライン面談対応）", b: "LINEで連絡が完結するとされる（二次情報）" },
  { item: "料金", a: "求職者は完全無料", b: "求職者は完全無料" },
];

const faqs = [
  { q: "この記事の「レバテック」とは具体的に何を指しますか？", a: "本記事の「レバテック」は、正社員転職を支援する『レバテックキャリア』を指します。業務委託案件を扱う『レバテックフリーランス』とは別サービスなので混同にご注意ください。なお、レバテックにはスカウト型の『レバテックダイレクト』もありますが、この記事で比較しているのは専任アドバイザーが伴走する『レバテックキャリア』です。" },
  { q: "type転職エージェントITとレバテックキャリアの最大の違いは何ですか？", a: "得意とする軸が違います。type転職エージェントITは首都圏の成長企業とIT/Web分野に強みを持ち、個別相談会の対象は主に25〜35歳とされています（公式）。レバテックキャリアはIT・Webにより特化し、利用者の約80%が20〜30代とされます（二次情報）。どちらもIT/Webエンジニアが対象ですが、首都圏の成長企業を広く見たいならtype、IT/Web特化で専門アドバイザーの伴走を重視するならレバテックキャリア、という違いがあります。" },
  { q: "年収アップを狙うならどちらがおすすめですか？", a: "type転職エージェントITは年収アップ率78%（2021年10月〜2022年9月・公式）と公表しています。レバテックキャリアは、内定承諾者のうち応募時年収との差が70万円以上だった人が『3人に2人』（2023年1月〜2024年3月実績とされる二次情報）と紹介されています。いずれも算出期間や母集団が異なる公表・二次情報のため単純比較はできませんが、首都圏の成長企業を含めて広く見たいならtype、IT/Web特化で年収交渉を任せたいならレバテックキャリアが選択肢になります。" },
  { q: "オンラインで相談できますか？", a: "type転職エージェントITはオンライン面談に対応しています（公式）。首都圏在住でなくても、オンラインで相談を始めやすいのが特徴です。レバテックキャリアはLINEで連絡が完結するとされます（二次情報）。どちらも初回相談は無料なので、面談のしやすさで選ぶのも一つの方法です。" },
  { q: "30代のエンジニアにはどちらが向いていますか？", a: "どちらも有効です。type転職エージェントITは個別相談会の対象が主に25〜35歳とされ（公式）、30代前後のミドル層と相性が良い設計です。レバテックキャリアも利用者の約80%が20〜30代とされ（二次情報）、30代と親和性があります。首都圏の成長企業を軸に幅広く見たいならtype、IT/Web特化で専門アドバイザーの伴走を受けたいならレバテックキャリア、と役割を分けて併用するのが現実的です。" },
  { q: "地方在住でも使えますか？", a: "type転職エージェントITは首都圏・成長企業に強い一方、地方求人は少なめとされます（二次情報）。レバテックキャリアも首都圏中心とされます（二次情報）。地方勤務を希望する場合は、これらに加えて全国の求人を扱うエージェントも併用し、比較検討することをおすすめします。" },
  { q: "レバテックキャリアとレバテックフリーランスはどう違いますか？", a: "レバテックキャリアは正社員としての転職を支援するエージェントです。レバテックフリーランスは業務委託（フリーランス）案件を紹介するサービスで、対象も契約形態も異なります。本記事はtype転職エージェントITと『レバテックキャリア（正社員エージェント）』の比較です。フリーランス志向の方は、フリーランス向けサービスの比較記事をご覧ください。" },
];

const goodType = [
  "首都圏（東京・神奈川・埼玉・千葉）で働きたい",
  "成長企業・ベンチャーへの転職に関心がある",
  "25〜35歳前後で、IT/Web分野でキャリアを伸ばしたい",
  "転職後の定着率を重視して腰を据えて働きたい",
  "オンライン面談で相談を始めたい",
];
const goodLev = [
  "IT・Web領域に特化したエージェントに任せたい",
  "技術スタックを理解した専任アドバイザーに伴走してほしい",
  "書類添削・面接対策・年収交渉をプロに任せたい",
  "LINEで気軽に連絡を取りたい",
  "20〜30代でIT実務経験がある",
];

export default function TypeItVsLevtechPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="type転職エージェントITとレバテックの比較｜どっちがおすすめか" description="type転職エージェントIT（首都圏・成長企業に強い）とレバテックキャリア（IT/Web特化）を、得意領域・対象年代・求人傾向・サポート・連絡手段・実績で比較。30代エンジニアの選び方を出典付きで解説します。" url="/compare/type-it-vs-levtech/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "type転職エージェントIT vs レバテックキャリア" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">type転職エージェントITとレバテックを比較｜どっちがおすすめ？</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 首都圏・成長企業に強い type と IT/Web特化の レバテックキャリア を比較</p>

        <p className="text-slate-600 leading-relaxed mb-4">「type転職 レバテック 比較」「type転職 レバテック どっち」で検索する方の多くは、首都圏の成長企業を広く見るべきか、IT/Web特化のエージェントに伴走してもらうべきかで迷っています。本記事は主に25〜35歳のITエンジニア向けに、両サービスを「得意領域」「対象年代」「求人の傾向」「サポート形態」「連絡手段」「実績数値」で比較しました。数値は公表値・二次情報の範囲のみを、出典と時点を明記して扱います。どちらも求職者は完全無料です。</p>

        <DataNote surveyedAt="2026年6月" sources={["type転職エージェントIT公式（type.career-agent.jp/service/it.html・数値の時点は本文に明記）", "レバテックキャリアに関する各転職メディアの集計値（公式サイトは取得不可のため二次情報）"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：どっちがおすすめか</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6 mb-4">
            <p className="font-bold text-blue-900 mb-3">先に結論をお伝えします。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li><strong>・首都圏の成長企業を軸に幅広く見たいなら「type転職エージェントIT」</strong>。25〜35歳を中心に、IT/Web分野の成長企業を提案してくれます（対象年代は公式）。</li>
              <li><strong>・IT/Web特化で専門アドバイザーに伴走してほしいなら「レバテックキャリア」</strong>。技術に精通したアドバイザーが選考対策まで支援するとされます（二次情報）。</li>
              <li><strong>・迷うなら両方登録</strong>。typeで首都圏の成長企業を広く見つつ、レバテックキャリアでIT/Web特化の求人と伴走を確保する「幅×専門」の二段構えが、30代エンジニアには合理的です。どちらも完全無料です。</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">なお本記事の「レバテック」は正社員転職の『レバテックキャリア』を指します。詳しくは次の用語整理をご覧ください。また、レバテックキャリアに関する数値は公式サイトを一次確認できなかったため、二次情報として扱っています。</p>
        </section>

        <section id="naming" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">用語整理：この記事の「レバテック」とは</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-sm text-slate-700">
            <p className="mb-2"><strong>レバテックには複数のサービスがあり、混同に注意が必要です。</strong></p>
            <ul className="space-y-2 list-disc pl-5">
              <li><strong>レバテックキャリア</strong>＝正社員としての転職を支援するエージェント。<u>本記事で比較しているのはこれ</u>です。</li>
              <li><strong>レバテックフリーランス</strong>＝業務委託（フリーランス）案件を紹介するサービス。契約形態が異なります。</li>
              <li><strong>レバテックダイレクト</strong>＝企業から直接スカウトが届くスカウト型サービス。本記事の比較対象はあくまで伴走型の『レバテックキャリア』です。</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">※ レバテックキャリアの各数値は、公式サイト（career.levtech.jp）を直接確認できなかったため、転職メディア等の二次情報に基づき「〜とされる」と表記しています。最新・正確な条件は必ず公式でご確認ください。</p>
          </div>
        </section>

        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ比較表（2026年6月時点）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium w-32">比較項目</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">type転職エージェントIT</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">レバテックキャリア</th></tr></thead>
              <tbody>{comparison.map((row, i) => (<tr key={i} className="hover:bg-slate-50 align-top"><td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td><td className="px-3 py-3 border border-slate-200">{row.a}</td><td className="px-3 py-3 border border-slate-200">{row.b}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ typeの「25〜35歳」は個別相談会の主な対象として公式で示された層です。レバテックキャリアの求人・利用者属性・連絡手段は公式サイトを一次確認できなかったため二次情報であり、変動する可能性があります。最新の条件は各公式でご確認ください。</p>
        </section>

        <section id="field" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較①：得意領域と求人の傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">type転職エージェントITは、首都圏の成長企業とIT/Web分野に強みを持つとされます。運営は求人メディア「type」等を手がける株式会社キャリアデザインセンターで、首都圏の企業とのつながりを活かした提案が特徴です。一方で地方求人は少なめとされる点（二次情報）は、勤務地の希望次第で確認しておきたいところです。</p>
          <p className="text-slate-600 leading-relaxed mb-4">レバテックキャリアはIT・Web領域により特化しているとされ、首都圏中心とされます（いずれも二次情報）。技術スタックを軸に求人を提案してもらいやすく、IT/Webの専門性を重視する人に向くと紹介されています。公開求人は約57,300件（2026年6月時点・二次集計）とされますが、この数値は公式で一次確認できていないため参考値として扱ってください。</p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-700">
            <p className="mb-2"><strong>まとめ：</strong>首都圏の成長企業を広く見るならtype、IT/Web特化の専門性で選ぶならレバテックキャリア。総合的な比較の位置づけは<Link href="/compare/agents/" className="text-petrol hover:underline">IT転職エージェント総合比較</Link>、レバテックと他社の比較は<Link href="/compare/levtech-vs-doda/" className="text-petrol hover:underline">レバテック vs doda</Link>も参考にしてください。</p>
          </div>
        </section>

        <section id="target" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較②：対象年代・年齢適性</h2>
          <p className="text-slate-600 leading-relaxed mb-4">type転職エージェントITは、個別相談会の主な対象を25〜35歳としています（公式・時点は明示なし）。20代後半から30代半ばのミドル層に照準を合わせた設計で、これから伸ばすキャリアの相談に向いています。</p>
          <p className="text-slate-600 leading-relaxed mb-4">レバテックキャリアは利用者の約80%が20〜30代とされ（二次情報）、20代から30代のIT実務経験者と親和性があると紹介されています。どちらも30代前後が中心層という点で共通しており、この年代のエンジニアは両方を比較検討する価値があります。40代以降の方は、対象層が異なる可能性があるため<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>もあわせてご覧ください。</p>
        </section>

        <section id="support" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較③：サポート形態と連絡手段</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">type転職エージェントIT</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">専任アドバイザーによる面談・書類添削・面接対策を受けられ、オンライン面談に対応しています（公式）。首都圏在住でなくてもオンラインで相談を始めやすく、25〜35歳のキャリア相談に対応しやすい体制です。</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 leading-relaxed">IT業界に精通した専任アドバイザーが書類添削・面接対策・年収交渉まで伴走するとされ、LINEで連絡が完結する手軽さが紹介されています（いずれも二次情報）。技術理解のあるアドバイザーに任せたい人に向くとされます。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">オンライン面談で始めたいならtype、IT/Web特化の伴走とLINE連絡を重視するならレバテックキャリア。<Link href="/knowledge/agent-first-meeting/" className="text-petrol hover:underline">エージェントとの初回面談の進め方</Link>も参考にしてください。</p>
        </section>

        <section id="result" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較④：実績数値の読み方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">type転職エージェントITは公式で複数の実績数値を公表しています。累計キャリアカウンセリング71,200人（2024年5月時点）、年収アップ率78%（2021年10月〜2022年9月）、転職後定着率98.1%（2023年4〜12月入社）、満足度89%といった数値です。いずれも算出期間が異なるため、時点とあわせて理解するのが大切です。特に定着率の高さは、腰を据えて働きたい人にとって参考になります。</p>
          <p className="text-slate-600 leading-relaxed mb-4">レバテックキャリアについては、内定承諾者のうち応募時年収との差が70万円以上だった人が「3人に2人」（2023年1月〜2024年3月実績とされる）と紹介されています。ただしこの数値は公式サイトを直接確認できていないため二次情報であり、断定はできません。年収アップの実績を重視する場合は、必ず公式の最新情報でご確認ください。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-sm text-slate-700">
            <p><strong>数値の扱いについて：</strong>typeの数値は公式（type.career-agent.jp）で一次確認したもので、それぞれの集計時点を併記しています。レバテックキャリアの数値は公式サイトを取得できず二次情報のため「〜とされる」と表記しています。両者は算出期間・母集団が異なり、単純な優劣比較には使えません。年収帯の相場感は<Link href="/compare/salary-ranking/" className="text-petrol hover:underline">年収アップに強いエージェント</Link>もあわせてご覧ください。</p>
          </div>
        </section>

        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">type転職エージェントITが向いている人</h3>
              <ul className="space-y-2 text-sm text-petrol-deep">{goodType.map((t, i) => (<li key={i}>✓ {t}</li>))}</ul>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">レバテックキャリアが向いている人</h3>
              <ul className="space-y-2 text-sm text-green-700">{goodLev.map((t, i) => (<li key={i}>✓ {t}</li>))}</ul>
            </div>
          </div>
        </section>

        <section id="heiyo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用ガイド</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "type転職エージェントITが向くケース", desc: "首都圏（成長企業・ベンチャー含む）で25〜35歳のキャリアを伸ばしたい場合。オンライン面談で相談を始め、定着率などの実績も踏まえて腰を据えられる企業を探します。" },
                { num: "2", title: "レバテックキャリアが向くケース", desc: "IT・Web領域に特化して求人を見たい、技術理解のある専任アドバイザーに書類添削や面接対策まで任せたい場合。LINEで気軽に連絡を取りながら選考を進めます（二次情報に基づく特徴）。" },
                { num: "3", title: "併用パターン（推奨）", desc: "typeで首都圏の成長企業を広く見つつ、レバテックキャリアでIT/Web特化の求人と専門的な伴走を確保する。幅と専門性を組み合わせ、複数の視点で意思決定します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                  <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p></div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">複数登録の進め方は<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">エージェント複数利用のコツ</Link>も参考にしてください。</p>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。経験を積んだ30代・40代エンジニアの市場価値は高く、type転職エージェントITとレバテックキャリアは、その価値を活かす手段として得意領域が異なります。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>30代エンジニアの場合：</strong>type転職エージェントITは個別相談会の対象が主に25〜35歳とされ（公式）、30代前後のミドル層と相性が良い設計です。首都圏の成長企業を広く見たいならtypeが軸になります。同時に、レバテックキャリアは利用者の約80%が20〜30代とされ（二次情報）、IT/Web特化の求人と技術理解のあるアドバイザーの伴走を確保できます。首都圏の幅をtype、IT/Webの専門性をレバテックキャリア、と二段構えにすると視野が広がります。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>40代エンジニアの場合：</strong>両サービスとも中心層は30代前後とされるため、40代は対象層の外に近づく可能性があります。typeの高い定着率（98.1%・2023年4〜12月入社の公式値）は長く働ける企業選びの参考になりますが、40代は年齢を理由に書類段階で苦戦することもあるため、対象年代の広いエージェントも併用して選択肢を確保しておくと安心です。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>もあわせてご覧ください。</p>
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
          <h2 className="text-xl font-bold mb-3">「首都圏の幅×IT/Webの専門性」でエンジニア転職を有利に</h2>
          <p className="text-blue-100 text-sm mb-4">typeで首都圏の成長企業を広く見て、レバテックキャリアでIT/Web特化の伴走を確保する。25〜35歳のエンジニアに合理的なルートです。どちらも無料です。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめサービスランキングを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "type転職 vs マイナビIT 比較", href: "/compare/type-vs-mynavi/" },
              { name: "レバテック vs doda 比較", href: "/compare/levtech-vs-doda/" },
              { name: "ビズリーチ vs レバテック 比較", href: "/compare/bizreach-vs-levtech/" },
              { name: "Findy vs レバテック 比較", href: "/compare/findy-vs-levtech/" },
              { name: "30代向けエージェント比較", href: "/compare/30s-agents/" },
              { name: "IT転職エージェント総合比較", href: "/compare/agents/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
