import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "PMの転職市場ガイド｜年収・求人の探し方【30代40代】",
  description:
    "プロジェクトマネージャー(PM)ポジションへの転職市場を30代・40代視点で解説。doda・レバテックの年収データ、求められる経験レベル、求人の探し方、PdM/PMOへの選択肢、FAQを網羅します。",
};

const toc = [
  { id: "conclusion", label: "結論：PM転職市場の攻め方" },
  { id: "market", label: "市場・年収データ" },
  { id: "level", label: "求められる経験レベル" },
  { id: "career", label: "PMポジションの種類と選択肢" },
  { id: "find", label: "求人の探し方" },
  { id: "entry", label: "PM経験が浅めからの参入ルート" },
  { id: "middle", label: "30代・40代視点" },
  { id: "learning", label: "市場価値を上げる準備" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "voice", label: "求人・転職支援の口コミ傾向" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const positions = [
  {
    role: "プロジェクトマネージャー（PM）",
    note: "QCD（品質・コスト・納期）管理が中心。求人母数が最も多い王道ポジション。",
    demand: "高",
  },
  {
    role: "プロダクトマネージャー（PdM）",
    note: "プロダクト戦略・ロードマップ・KPI設計。SaaS/メガベンチャーで需要。年収帯が高め。",
    demand: "中〜高",
  },
  {
    role: "PMO",
    note: "複数プロジェクトの横断管理・標準化・ガバナンス。大手SIer/事業会社に多い。",
    demand: "中",
  },
  {
    role: "DX推進PM/コンサル型PM",
    note: "事業会社のDX推進やコンサルでの変革リード。業界知識×PM力が問われる。",
    demand: "中〜高",
  },
];

const faqs = [
  {
    q: "PMの平均年収はどのくらい？",
    a: "出典により幅があります。doda「平均年収ランキング（2025年）」ではプロジェクトマネージャー707万円、レバテックキャリアの集計では平均568万円・中央値550万円、doda Xの調査では全体平均891.5万円（フリーランス含む）と報告されています。母集団や対象が異なるためですが、IT職種の中で高めの水準にあることは共通しています。",
  },
  {
    q: "40代のPMでも転職できますか？",
    a: "PMは経験とマネジメント力が評価軸のため、年齢の不利が相対的に小さい職種です。大規模プロジェクトの統括、ステークホルダー調整、リスク管理、炎上案件のリカバリといった経験は40代の強みになります。求人側も即戦力のマネジメント人材を求めているため、ミドル層に向いたポジションです。",
  },
  {
    q: "PMとPdMの違いは？転職市場ではどちらが有利？",
    a: "PMはプロジェクトのQCD管理が中心、PdMはプロダクトの戦略・ロードマップ・ユーザー価値最大化が中心です。求人母数はPMが多く、年収帯はPdMが高めになりやすい傾向があります。どちらが有利かは経歴次第で、開発出身ならPdM、大規模管理経験が厚いならPMという棲み分けが現実的です。",
  },
  {
    q: "技術的バックグラウンドはPM転職で有利？",
    a: "有利に働きやすいです。開発出身のPMは技術的な意思決定や開発チームとの意思疎通で評価されやすく、エンジニア組織を持つ企業では特に重宝されます。ただし求人によっては業務系/事業系のPM力を重視する場合もあるため、応募先の求める像を見極めることが大切です。",
  },
  {
    q: "PMに資格は必要？",
    a: "実務経験が最優先ですが、PMP（Project Management Professional）やIPAのプロジェクトマネージャ試験、スクラムマスター認定は経歴の裏付けとして有効です。資格だけで評価が決まることは少なく、職務経歴書での実績の見せ方のほうが選考に効きます。",
  },
  {
    q: "PM求人はリモート可が多い？",
    a: "ポジションや企業によって差が大きく、一概に「◯割がリモート可」とは言い切れません。ステークホルダー調整や現場常駐を求める案件もあれば、フルリモート可の事業会社PM求人もあります。働き方は応募前にエージェント経由で確認するのが確実です。",
  },
  {
    q: "PMポジションにおすすめの転職エージェントは？",
    a: "求人量が国内最大級のリクルートエージェントIT、年収750万円以上のハイクラス・スカウトに強いビズリーチ、IT/Web/SaaSのPM・PdM求人に強いレバテックキャリアの併用が現実的です。PMは年収帯が高いため、スカウト型のビズリーチとの相性が特に良好です。",
  },
];

export default function PmSkillPage() {
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
      <ArticleJsonLd
        title="PMの転職市場ガイド｜年収・求人の探し方【30代40代】"
        description="プロジェクトマネージャー(PM)ポジションへの転職市場を30代・40代視点で解説。doda・レバテックの年収データ、求人の探し方、PdM/PMOへの選択肢、FAQを網羅します。"
        url="/skill/pm/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "PM(プロジェクトマネージャー)" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          PM(プロジェクトマネージャー)の転職市場ガイド｜年収・求人の探し方
        </h1>
        <p className="text-slate-500 text-sm mb-4">
          最終更新: 2026年6月 | PMポジションへの転職市場を30代・40代視点で分析
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          本記事は「すでにPMの経験・素地がある人が、PMポジションへ転職する市場」に特化して解説します。エンジニアからマネジメントへ転身する方法そのものは
          <Link href="/knowledge/management/" className="text-blue-600 hover:underline">EM・PMへのマネジメント転身ガイド</Link>
          で扱っているため、ここでは「どの窓口で・どんな求人を・どう狙うか」という転職市場の攻め方に絞ります。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "doda 平均年収ランキング（2025年）",
            "レバテックキャリア（PMの年収統計）",
            "doda X（PMの年収調査）",
            "レバテック公表の年代別平均年収（2025年）",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ul className="space-y-1.5">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-sm text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：PM転職市場の攻め方</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3 font-medium">
              PMは年齢の不利が小さく、ミドルの実績がそのまま武器になる数少ないポジションです。攻め方は<strong>「実績の定量化」×「ハイクラス・スカウト型の活用」</strong>。求人母数の多さに任せて数を撃つより、合うポジションへ確実に届けるのが要です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① PMの年収は出典で幅があり、doda 707万円／レバテック568万円／doda X 891.5万円（いずれも近年）。IT職の中で高めの水準。</li>
              <li>② 評価軸は「規模・成果の定量実績」。職務経歴書で予算・人数・改善率を数字で示せるかで通過率が変わる。</li>
              <li>③ 年収帯が高いためスカウト型（ビズリーチ）と相性が良い。求人量の総合型・IT特化と併用するのが定石。</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            PMの年収は調査の母集団によって数値が大きく異なります。「いくらが正しいか」より「自分の経歴ならどのレンジを狙えるか」を判断する材料として、複数の出典を並べて見るのが実用的です。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["平均年収（doda）", "707万円（doda「平均年収ランキング（2025年）」のプロジェクトマネージャー）"],
                  ["平均年収（レバテックキャリア）", "平均568万円・中央値550万円（レバテックキャリアのPM年収統計）"],
                  ["平均年収（doda X）", "891.5万円（doda XのPM年収調査・フリーランス含む全体平均）"],
                  ["年収が上振れしやすい要素", "大規模PJ統括、PdM/PMOへの拡張、コンサル/金融/DX領域、英語×グローバルPJ"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            参考として、レバテックが公表する正社員SEの年代別平均年収は、20代約378万円／30代約499万円／40代約618万円／50代約685万円（2025年）です。PMの各出典値はいずれもこの40代SE平均（約618万円）前後〜上を指しており、プレイヤー（SE）からPMへ役割を広げることが、ミドルの年収を一段引き上げる現実的な手段であることがわかります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            背景として、経済産業省「IT人材需給に関する調査」（2019年公表）では2030年に最大約79万人のIT人材不足が試算されています。プロジェクトを完遂に導けるマネジメント人材は特に希少で、需給面でPM経験者に有利な状況が続くと考えられます。なお「求人の◯割がリモート可」「DX求人前年比＋◯%」といった数値は確かな一次出典を確認できなかったため、本記事では断定しません。
          </p>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル（求人要件の傾向）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            PM求人は「肩書きがPMかどうか」より「どの規模を・どう完遂させたか」を見ます。求人票で頻出する要件は次の通りです。
          </p>
          <div className="space-y-3">
            {[
              { lv: "PL〜若手PMで歓迎されやすい人", body: "数名規模のチーム/小〜中規模PJのリード経験、スケジュール・課題・品質管理の実務、開発現場との橋渡し経験。" },
              { lv: "ミドル〜シニアPM要件", body: "中〜大規模PJの統括、予算・人員管理、ステークホルダー/経営層との折衝、リスク管理、炎上案件のリカバリ実績。" },
              { lv: "ハイクラス/PMO要件", body: "複数PJ横断のガバナンス、標準化推進、部門マネジメント、事業/経営視点でのPJポートフォリオ管理。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{item.lv}</h3>
                <p className="text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ポジションの種類 */}
        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">PMポジションの種類と選択肢</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            一口にPM転職と言っても、狙うポジションで求人母数と年収帯が変わります。自分の経歴がどこに当てはまるかを見極めましょう。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">ポジション</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">内容</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 w-28">求人の出やすさ</th>
                </tr>
              </thead>
              <tbody>
                {positions.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium align-top">{item.role}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{item.note}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 align-top">{item.demand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            VPoE/EMなどマネジメント職への発展は<Link href="/knowledge/management/" className="text-blue-600 hover:underline">EM・PMへのマネジメント転身ガイド</Link>で詳しく扱っています。
          </p>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方（どの窓口が強いか）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            PMは年収帯が高く、非公開・スカウト経由の好条件求人が多いポジションです。性質の違う窓口を併用しましょう。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">
                年収750万円以上をハイクラスと定義するスカウト型サービス。PM/PdMの高年収ポジションに出会いやすく、職務経歴を登録しておくと企業・ヘッドハンターから声がかかります。PMの年収帯と特に相性が良い窓口です。
              </p>
              <Link href="/review/bizreach-it/" className="text-sm text-blue-600 hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リクルートエージェントIT（求人量・実績）</h3>
              <p className="text-sm text-slate-600 mb-2">
                国内最大級の求人数で全国対応。大手企業・コンサル・事業会社のPM求人が幅広く、母数の多さから自分の経歴に合うポジションを探しやすい窓口です。
              </p>
              <Link href="/review/recruit-it/" className="text-sm text-blue-600 hover:underline">リクルートエージェントITの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT/Web/SaaSのPM・PdM）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT/Webに特化し高年収求人比率が高い窓口。SaaS/Web系のPM・PdMポジションに強く、開発出身でプロダクト寄りのPMを目指す人に向きます。
              </p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            ハイクラス向けの比較は<Link href="/compare/highclass/" className="text-blue-600 hover:underline">ハイクラス向けエージェント比較</Link>、併用の進め方は<Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">転職エージェントの併用ガイド</Link>を参考にしてください。
          </p>
        </section>

        {/* 参入ルート */}
        <section id="entry" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">PM経験が浅めからの参入ルート</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「肩書きはPMではないが、実質的にPM業務をしてきた」というミドルがPM求人に挑むルートです。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "PL/サブリーダー経験をPMの言葉に翻訳する", desc: "公式な肩書きがなくても、進行管理・課題管理・調整を担ってきたなら、それをPM要件の用語（QCD管理・ステークホルダー調整・リスク管理）に置き換えて職務経歴書に書きます。" },
              { num: "2", title: "小〜中規模PJのPM求人から狙う", desc: "いきなり大規模PMを狙わず、数名〜十数名規模のPJを任せる求人から入り、実績を積んで規模を上げていくのが堅実です。" },
              { num: "3", title: "技術力×調整力の掛け算で差別化する", desc: "開発出身であれば、技術判断ができるPMという希少性を前面に。エンジニア組織を持つ事業会社では特に評価されます。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            マネジメントへの転身手順そのものは<Link href="/knowledge/management/" className="text-blue-600 hover:underline">EM・PMへのマネジメント転身ガイド</Link>（職務経歴書例付き）が詳しいです。
          </p>
        </section>

        {/* 30代・40代視点 */}
        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点：PMはミドルの主戦場</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            純粋な開発職は年齢で見られる場面がありますが、PMは「経験の厚み」がそのまま評価される稀なポジションです。40代でも、というより40代だからこそ任される領域があります。
          </p>
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">年齢より「規模と再現性」で見られる</h3>
              <p className="text-sm text-blue-700">
                何人・何億円のPJを、どう完遂させたか。リカバリ経験を含めて再現性を語れるミドルは、年齢を不利にしません。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">PdM/PMO/DXへの横展開で選択肢が増える</h3>
              <p className="text-sm text-blue-700">
                PMの素地は、PdM・PMO・DX推進・コンサル型PMへ広げられます。1つの軸足を複数の出口に転用できるのがミドルの強みです。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">年収交渉が成立しやすい職種</h3>
              <p className="text-sm text-blue-700">
                成果が数字で語りやすいため年収交渉の根拠を作りやすく、ハイクラス・スカウト経由なら提示も高くなりがちです。
              </p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            40代の現実は<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職</Link>、年収交渉は<Link href="/knowledge/salary-negotiation/" className="text-blue-600 hover:underline">年収交渉の進め方</Link>で詳しく解説しています。
          </p>
        </section>

        {/* 準備 */}
        <section id="learning" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場価値を上げる準備</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            PM転職の合否は職務経歴書の「実績の定量化」でほぼ決まります。応募前に次を整理しておきましょう。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 mb-4">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>担当PJの規模を数字で（予算・チーム人数・期間・関係部署数）</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>成果を定量で（納期遵守率・コスト削減率・品質改善・離脱率低下など）</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>困難PJのリカバリ経験（炎上案件の立て直し・スコープ調整の判断）</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>ステークホルダー調整の実績（経営層報告・顧客折衝・部門間調整）</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>アジャイル/スクラムの実践経験、PMP/IPAなど資格の有無</li>
          </ul>
          <p className="text-slate-600 leading-relaxed text-sm">
            職務経歴書の書き方は<Link href="/knowledge/resume/" className="text-blue-600 hover:underline">エンジニアの職務経歴書ガイド</Link>、面接対策は<Link href="/knowledge/behavioral/" className="text-blue-600 hover:underline">行動面接（STAR）対策</Link>を参考にしてください。
          </p>
        </section>

        {/* 向いている人 */}
        <section id="fit" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            PMポジションへの転職で成果を出しやすい人と、別の見せ方を考えた方がよい人の傾向を整理します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3 text-sm">PM転職が向いている人</h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>PJの規模・成果を数字で語れる実績がある</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>ステークホルダー調整・リスク管理の経験がある</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>炎上案件のリカバリなど再現性のある経験を持つ</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>技術判断ができる（開発出身の強みを活かせる）</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>年収交渉を実績ベースで進めたい</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-3 text-sm">向いていない可能性が高い人</h3>
              <ul className="space-y-2 text-sm text-amber-800">
                <li className="flex items-start gap-2"><span className="shrink-0">!</span>マネジメントより手を動かす開発を続けたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">!</span>調整・折衝・対人ストレスを強く避けたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">!</span>実績を定量化できる材料が乏しい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">!</span>進行管理やリーダー経験がまったくない</li>
                <li className="flex items-start gap-2"><span className="shrink-0">!</span>responsibility（責任範囲）が広がるのを望まない</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            開発を続けたい場合は<Link href="/knowledge/management/" className="text-blue-600 hover:underline">マネジメント転身ガイド</Link>でEMとの違いを確認し、自分に合う方向を見極めると良いでしょう。
          </p>
        </section>

        {/* 口コミ傾向 */}
        <section id="voice" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人・転職支援の口コミ傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            PM求人を扱うエージェントについて、Qiita Job Change・みん評・ミライトーチ等の口コミプラットフォームで見られる傾向を、出典名を挙げて要約します（原文転載は行いません）。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">ビズリーチに見られる傾向</h3>
              <p className="text-sm text-slate-600">
                ミライトーチ・morejob等の口コミでは「高年収求人が豊富」「スカウトでキャリアアップできた」「市場価値を客観的に把握できる」という声がある一方、「経歴次第でスカウトが来ない」「有料プラン前提との不満」も。PMの実績を具体的に書き込むほどスカウトの質が上がる傾向です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">リクルートエージェントITに見られる傾向</h3>
              <p className="text-sm text-slate-600">
                Qiita Job Change等の口コミでは「圧倒的な求人数」「非公開求人が充実」「書類添削・面接対策が丁寧」という声がある一方、「対応が事務的」「サポート期間が短め」という指摘も。PM求人の母数を確保したい人に向くと語られます。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">レバテックキャリアに見られる傾向</h3>
              <p className="text-sm text-slate-600">
                OUTSIDEMAGAZINE・Qiita Job Change等の口コミでは「書類添削・面接対策が丁寧」「高年収求人が多い」という声がある一方、「未経験者は紹介されにくい」という指摘も。SaaS/Web系のPM・PdMを狙う開発出身者と相性が良いと語られます。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12 scroll-mt-20">
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
          <h2 className="text-xl font-bold mb-3">PMの市場価値を確認する</h2>
          <p className="text-blue-100 text-sm mb-4">
            あなたのマネジメント実績が今の市場でどう評価されるか、ハイクラス求人に強いエージェントに相談してみましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "EM・PMへのマネジメント転身ガイド", href: "/knowledge/management/" },
              { name: "ハイクラス向けエージェント比較", href: "/compare/highclass/" },
              { name: "エンジニアの職務経歴書ガイド", href: "/knowledge/resume/" },
              { name: "40代エンジニアの転職", href: "/age/40s/" },
              { name: "年収交渉の進め方", href: "/knowledge/salary-negotiation/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
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
