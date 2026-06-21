import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "ANDPAD（アンドパッド）の転職難易度・年収とエンジニア転職【2026年】",
  description:
    "ANDPAD（建設DX・非上場・プレIPO）のエンジニア中途採用を公式技術ブログ等の一次情報で解説。Ruby on Rails中心＋Go採用の技術スタック、SRE文化、年収の考え方、30代40代の転職可否を中立にまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：転職難易度と向くエンジニア" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "feature", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術スタック（公式確認範囲）" },
  { id: "salary", label: "年収データ" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "社員口コミの傾向" },
  { id: "middle", label: "30代・40代から見たANDPAD" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "agent", label: "おすすめエージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "株式会社アンドパッド（ANDPAD・非上場・旧オクト）"],
  ["設立", "2012年"],
  ["事業内容", "建設・建築業界向けの施工管理・業務効率化クラウド「ANDPAD」の開発・提供（建設DX）"],
  ["導入実績・規模", "26.5万社が利用するシェアNo.1クラスのサービス／従業員 約780名規模。プレIPO（上場準備）フェーズとされる"],
  ["平均年収", "非上場のため有価証券報告書による全社員平均は存在しない（Indeed等の参考値は「年収データ」章を参照）"],
  ["技術スタック", "Ruby on Rails 中心＋Go の採用／SRE・クラウドネイティブ（KubeCon登壇実績）"],
];

const salaryRows: [string, string][] = [
  ["集計サイト（Indeed等）のエンジニア参考値", "約731万円（公式値ではない参考値・2026年6月時点）"],
  ["公式の全社員平均年収", "非上場のため存在しない"],
  ["等級別年収表", "公式に開示なし（当ガイドでは創作した数値表は掲載しない）"],
];

const faqs = [
  { q: "ANDPADはエンジニアの中途採用を行っている？", a: "はい。ANDPAD（株式会社アンドパッド）は公式採用ページ・技術ブログ（tech.andpad.co.jp）でソフトウェアエンジニア・SRE等を継続的に募集しています。建設・建築業界向けクラウド「ANDPAD」の開発を担うポジションが中心です。募集職種は時期により変動するため、最新は公式採用ページをご確認ください。" },
  { q: "ANDPADの平均年収はいくら？", a: "ANDPADは非上場企業のため、有価証券報告書による全社員平均年収は公開されていません。Indeed等の集計ではエンジニア約731万円といった参考値が見られますが、これは公式値ではない参考値です。正確な提示額は職種・等級・スキルにより幅があるため、応募・面談で確認するのが確実です。" },
  { q: "ANDPADの技術スタックは？", a: "公式の技術ブログ（tech.andpad.co.jp）によると、ANDPADはRuby on Railsを中心に、一部でGoを採用しています。SRE・クラウドネイティブの取り組みに積極的で、KubeConへの登壇実績もあります。建設現場という複雑なドメインを、スケールするWebサービスとして堅牢に支える技術力が求められます。" },
  { q: "ANDPADの選考フローは？", a: "ANDPADは選考フローの詳細を固定で公式公開しているわけではありません。一般的にスタートアップ・成長企業では書類選考・カジュアル面談・複数回の面接・課題などで構成されますが、職種・時期により異なります。当ガイドでは公開されていない具体的な選考ステップや面接質問の断定は避けています。最新は公式採用ページ・面談でご確認ください。" },
  { q: "ANDPADは建設業界の知識がないと転職できない？", a: "募集要項によりますが、エンジニア職ではまずRuby on Rails／Go等の実務スキルやWebサービスの設計・運用経験が重視される傾向があります。建設・建築のドメイン知識は入社後にキャッチアップする前提のポジションも多いと考えられます。具体的な必須要件は各募集要項で確認してください。" },
  { q: "ANDPADはプレIPO（上場準備）と聞いたが、それは転職にどう影響する？", a: "ANDPADは上場準備フェーズにあるとされ、ストックオプション等の制度が将来のIPOに連動して価値を持つ可能性があります。ただし非上場のため、IPOの時期・条件・SOの扱いに関する公式の確定情報はありません。当ガイドでは将来の上場や株式価値を断定せず、提示される報酬・条件を面談で確認することをおすすめします。" },
  { q: "30代・40代でもANDPADに転職できる？", a: "ANDPADはRuby on Rails中心の成長Webサービスで、Rails／Goでの開発経験、SRE・クラウドネイティブの運用経験を持つミドルには親和性が高い環境です。約780名規模・シェアNo.1クラスのプロダクトをスケールさせる局面で、設計・運用の経験が活きます。年代別の公式データはありませんが、即戦力性が評価される土俵です。" },
  { q: "ANDPADの働き方・リモートワークは？", a: "ANDPADはプロダクト開発を行う成長企業で、リモートを活用した柔軟な働き方を取り入れているとされますが、職種・チームにより方針が異なります。可否・頻度は募集要項・面談で確認するのが確実です。当ガイドでは公式に確認できない勤務条件の断定は避けています。" },
];

export default function AndpadCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="ANDPAD エンジニア転職ガイド" description="ANDPAD（建設DX・非上場・プレIPO）へのエンジニア転職を公式技術ブログ等の一次情報で解説。Ruby on Rails中心＋Go採用の技術、SRE文化、年収の考え方をまとめました。" url="/company/andpad/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "ANDPAD" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ANDPAD（アンドパッド）へのエンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          株式会社アンドパッド（ANDPAD）へのエンジニア中途採用について、公式採用ページと技術ブログ（tech.andpad.co.jp）の一次情報をもとに、転職難易度・年収・技術スタック・選考の考え方を中立にまとめました。IT化が遅れていた建設・建築業界の施工管理をクラウドで変える、26.5万社が利用するシェアNo.1クラスの建設DXスタートアップです。
        </p>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 出典は各データの直後に明記しています。</p>

        <DataNote surveyedAt="2026年6月" sources={["ANDPAD 公式採用サイト", "ANDPAD 技術ブログ（tech.andpad.co.jp）", "Indeed等の年収参考値（公式値ではない）", "OpenWork（口コミ傾向）"]} />

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度と向くエンジニア</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-sm text-blue-900 font-bold mb-3">転職難易度：中〜高（Rails中心・スケール局面の即戦力志向）</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・<strong>Ruby on Rails 中心＋Go</strong>の構成。Rails／GoでのWebサービス開発・運用経験を持つエンジニアに向く。</li>
              <li>・<strong>26.5万社・シェアNo.1クラス</strong>のプロダクトをスケールさせる局面。SRE・クラウドネイティブの設計・運用経験が活きる（KubeCon登壇実績あり）。</li>
              <li>・<strong>建設DX</strong>というIT化の余地が大きい社会課題ドメイン。プレIPO（上場準備）フェーズとされ、成長企業ならではの裁量がある。</li>
            </ul>
            <p className="text-xs text-blue-800 mt-3">非上場のため全社平均年収の公式値はありません。Indeed等のエンジニア約731万円は公式値ではない参考値です。プレIPOゆえSO等の将来価値に期待が持てる一方、IPOの時期・条件は不確定で、安定した上場大企業の確実性を最優先する人にはミスマッチが起こり得ます。</p>
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
              {basicData.map(([label, value], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}><th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td></tr>
              ))}
            </tbody></table>
          </div>
          <p className="text-xs text-slate-500">出典：ANDPAD公式採用サイト、ANDPAD技術ブログ（tech.andpad.co.jp）。ANDPADは非上場のため、上場企業のような有価証券報告書ベースの全社員平均年収は存在しません。導入社数・従業員規模は公式発信の概数、年収値は集計サイトの参考値（公式値ではない）です。</p>
        </section>

        <section id="feature" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">IT化が遅れた建設業界をDXする</h3><p className="text-sm text-petrol-deep">ANDPADは2012年設立（旧オクト）で、紙やFAX中心だった建設・建築の施工管理をクラウド化するサービス「ANDPAD」を提供しています。26.5万社が利用するシェアNo.1クラスのプロダクトで、巨大な業界の未IT化領域に切り込む社会的インパクトの大きいドメインが特徴です。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">Rails中心＋GoとSRE文化</h3><p className="text-sm text-petrol-deep">技術ブログ（tech.andpad.co.jp）では、Ruby on Railsを中心に一部Goを採用し、SRE・クラウドネイティブに積極的に取り組んでいることが発信されています。KubeConへの登壇実績もあり、スケールするサービスを堅牢に支える技術組織を志向しています。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">プレIPO・約780名規模の成長フェーズ</h3><p className="text-sm text-petrol-deep">ANDPADは従業員約780名規模で、上場準備（プレIPO）フェーズにあるとされます。組織が拡大しプロダクトをスケールさせる局面のため、設計・運用・組織づくりに関わる裁量が大きく、ミドルの経験が活きやすい時期といえます。</p></div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式確認範囲）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">以下はANDPADの公式技術ブログ・採用情報で公開されている範囲の情報です。プロダクトの拡大に伴い構成は変化するため、最新は公式発信・募集要項でご確認ください。</p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Ruby on Rails</strong>：サービス開発の中心となるフレームワーク</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Go</strong>：一部のサービス・領域で採用</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>SRE・クラウドネイティブ</strong>：Kubernetes等を活用した運用（KubeCon登壇実績）</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：ANDPAD 技術ブログ（tech.andpad.co.jp）・公式採用情報。フロントエンド等の詳細構成は時期・チームにより異なります。<Link href="/skill/ruby/" className="text-petrol hover:underline">Ruby</Link>・<Link href="/skill/go/" className="text-petrol hover:underline">Go</Link>・<Link href="/skill/kubernetes/" className="text-petrol hover:underline">Kubernetes</Link>の各ガイドも市場動向の参考になります。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-4 text-sm text-amber-900">
            ANDPADは<strong>非上場のため、有価証券報告書による全社員平均年収は存在しません</strong>。以下は<strong>集計サイト（Indeed等）の参考値（公式値ではない）</strong>です。実際の提示額は職種・等級・スキルにより幅があり、応募・面談で確認するのが確実です。
          </div>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100"><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">区分</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">内容</th></tr></thead>
              <tbody>{salaryRows.map(([k, v], i) => (<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{k}</td><td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium">{v}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-2">
            上表のエンジニア約731万円は<strong>Indeed等の集計サイトの参考値（2026年6月時点）</strong>であり、ANDPAD公式が開示した値ではありません。等級別の細かい年収表は公式に開示されていないため、当ガイドでは創作した数値表は掲載していません。なおプレIPOフェーズのため、報酬にストックオプション等が含まれる場合がありますが、その価値は将来のIPOに依存し不確定です。
          </p>
          <p className="text-xs text-slate-500">出典：Indeed等の年収参考値（公式値ではない参考値・2026年6月時点）。正確な提示額・SOの条件は公式募集要項・面談でご確認ください。</p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式に詳細は非公開）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            ANDPADは選考フローの詳細を固定で公式公開しているわけではありません。一般的な成長企業では「書類選考 → カジュアル面談 → 複数回の面接 →（職種により課題）→ オファー」という流れが多いですが、職種・時期によって異なります。当ガイドでは<strong>公開されていない具体的な選考ステップや面接質問の断定は避けています</strong>。
          </p>
          <p className="text-xs text-slate-500">出典：上記は一般的な成長企業採用の傾向であり、ANDPAD固有の確定フローではありません。正確な選考プロセスは公式採用ページ・カジュアル面談でご確認ください。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・技術ドメインベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">具体的な面接質問リストは公式に公開されておらず、断定はできません。公開されている技術スタック・事業ドメインから、評価されやすいと考えられるポイントを一般化して挙げます。</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>Ruby on Rails／GoでのWebサービスの設計・実装・運用力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>大規模・成長サービスをスケールさせるSRE・クラウドネイティブの経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>建設DXという未IT化ドメインを技術で解くことへの関心・共感</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>組織拡大フェーズで自律的に動ける主体性・カルチャーフィット</li>
          </ul>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">社員口コミの傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、ANDPADについて<strong>「巨大な未IT化市場を変える事業の手応えが大きい」「技術発信・SREへの投資が活発」</strong>といった声が見られる一方、<strong>「急成長・組織拡大に伴う変化の速さや、プロセスが整備途上の部分がある」</strong>といった指摘も見られます。事業の社会的インパクトと成長フェーズへの適応が定着の鍵になる傾向がうかがえます。
          </p>
          <p className="text-xs text-slate-500">出典：OpenWork掲載の社員クチコミの傾向を要約（個別スコア・原文の転載はしていません）。評価は部署・時期・職種により大きく異なります。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たANDPAD</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>ANDPADは<strong>Ruby on Rails中心＋Go</strong>という、ミドル層に経験者が多い技術構成です。これまでRailsでWebサービスを設計・運用してきた30代・40代にとって、これまでの蓄積を即戦力として活かしやすい環境です。26.5万社・シェアNo.1クラスのプロダクトをスケールさせる局面のため、SRE・大規模運用・組織づくりの経験は特に重宝されます。</p>
            <p>プレIPO（上場準備）フェーズという点は、ミドルにとってメリットとリスクの両面があります。ストックオプション等が将来のIPOに連動して価値を持つ可能性がある一方、IPOの時期・条件は不確定です。安定した上場大企業の確実性を求める人には不向きな面もあるため、報酬の内訳（現金とSOのバランス）やリスク許容度を面談で確認しておくことが重要です。非上場のため将来の株式価値は公式の確定情報がなく、提示条件ベースで判断するのが現実的です。</p>
            <p>建設・不動産ドメインに関心がある方や、SIer・SESから自社プロダクト開発へ移りたいミドルには<Link href="/industry/sier-to-web/" className="text-petrol hover:underline">SIerからWEB系への転職</Link>が、年収交渉・キャリア整理には<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>や<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の把握</Link>が参考になります。</p>
          </div>
        </section>

        <section id="fit" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-800 text-sm mb-3">向いている人</p>
              <ul className="space-y-2 text-sm text-green-900">
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>Ruby on Rails／GoでのWebサービス開発・運用経験を持つミドル</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>SRE・クラウドネイティブで大規模サービスを支えたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>未IT化の巨大市場（建設DX）を変えることに意義を感じる</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>プレIPOの成長フェーズで裁量を持って動きたい</li>
              </ul>
            </div>
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-800 text-sm mb-3">向いていない人</p>
              <ul className="space-y-2 text-sm text-rose-900">
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>上場大企業の安定・確実性を最優先したい（IPOは不確定）</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>報酬の大半をSOではなく確定した現金で求めたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>整備された制度・手厚い既存ドキュメントを前提に働きたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>変化の少ない安定したフェーズでじっくり働きたい</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">建設DX・スタートアップ転職市場とANDPADの位置づけ</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>経済産業省「IT人材需給に関する調査」（2019年公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。建設・建築は就業者数が多くIT化の余地が大きい産業で、ANDPADはその施工管理DXで先行するスタートアップです。</p>
            <p>年代別の年収水準の目安として、レバテックが公表する正社員SEの平均年収（2025年）は30代約499万円・40代約618万円とされています。これはIT職全般の平均で、ANDPADの集計参考値（エンジニア約731万円）はこれを上回りますが、後者は公式値ではない参考値である点に留意が必要です。</p>
            <p>Rails経験を活かして自社プロダクト開発へ移りたいミドルにとって、ANDPADは選択肢になり得ます。背景知識として<Link href="/industry/sier-to-web/" className="text-petrol hover:underline">SIerからWEB系への転職</Link>や<Link href="/skill/ruby/" className="text-petrol hover:underline">Rubyエンジニアの転職市場</Link>も参考になります。</p>
          </div>
        </section>

        <section id="agent" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ANDPAD転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化で自社開発・SaaS求人に強い。技術面接対策のサポートも受けられる。" }, { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラス・スタートアップのスカウトが届きやすい。ミドル層の選択肢を広げやすい。" }, { name: "Green", href: "/review/green/", desc: "IT/Web・スタートアップ求人に強い。カジュアル面談につながりやすい。" }].map((agent, i) => (<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
          <p className="text-xs text-slate-500 mt-3">特定企業の求人保有状況は時期により変動します。複数社の併用で求人の取りこぼしを防ぐのが定石です。詳しくは<Link href="/compare/agents/" className="text-petrol hover:underline">エージェント比較</Link>を参照してください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">ANDPADへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">スタートアップ・自社開発企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="faq" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ name: "Ubieの転職ガイド", href: "/company/ubie/" }, { name: "カケハシの転職ガイド", href: "/company/kakehashi/" }, { name: "10Xの転職ガイド", href: "/company/10x/" }, { name: "Rubyエンジニアの転職", href: "/skill/ruby/" }, { name: "Goエンジニアの転職", href: "/skill/go/" }, { name: "40代エンジニアの転職の現実", href: "/knowledge/40s-reality/" }].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
