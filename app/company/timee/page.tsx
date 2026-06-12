import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "タイミー（Timee）の年収は平均594万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "タイミー（215A・東証グロース）へのエンジニア転職を実データで解説。新規上場時の有価証券報告書の平均年収594万円（2024年10月期・全社員平均）、Ruby on Rails/Go/Next.jsの技術スタック、選考フロー、30代40代の現実までまとめました。",
};

const basicData: [string, string][] = [
  ["企業名", "株式会社タイミー（東証グロース・215A／2024年7月上場）"],
  ["事業領域", "スキマバイトマッチングプラットフォーム「タイミー」の運営"],
  ["平均年間給与", "約594万円（新規上場時の有価証券報告書／2024年10月期・全社員平均）"],
  ["平均年齢", "31.5歳（新規上場時の有価証券報告書）"],
  ["従業員数", "正社員 約1,186名（2025年8月時点・公表値／うち全体約1,585名）"],
  ["本社所在地", "東京都"],
  ["技術スタック（公開情報）", "Ruby / Ruby on Rails / Go / TypeScript / React / Next.js / Swift / Kotlin / AWS / Google Cloud"],
];

const toc = [
  ["conclusion", "結論：難易度と向いているエンジニア"],
  ["basic", "基本データ（出典付き）"],
  ["features", "エンジニア採用の特徴"],
  ["stack", "技術スタック（公開情報ベース）"],
  ["salary", "年収データ（有価証券報告書ベース）"],
  ["flow", "選考フロー"],
  ["interview", "面接で重視される点"],
  ["middle", "30代・40代エンジニアの視点"],
  ["agents", "転職におすすめのエージェント"],
  ["faq", "よくある質問"],
  ["related", "関連記事"],
];

const faqs = [
  {
    q: "タイミーのエンジニア選考フローは？",
    a: "公式採用情報・採用媒体の公開情報によると、一般的に「カジュアル面談（任意）」「書類選考」「（職種により）Webテスト・技術課題」「複数回の面接」「オファー面談」という流れです。選考では人物・カルチャーフィットが重視される傾向があります。最新の内容は各求人で確認するのが確実です。",
  },
  {
    q: "タイミーの平均年収はいくらですか？",
    a: "新規上場（2024年7月）にあたって提出された有価証券報告書（2024年10月期）によると、全社員平均の平均年間給与は約594万円、平均年齢は31.5歳です。これは技術職に限らない全社員平均値であり、エンジニア個人の年収は等級・スキル評価により異なります。上場間もないため開示年数は限られます。",
  },
  {
    q: "タイミーの技術スタックは？",
    a: "公式技術ブログ（Timee Product Team Blog）・採用ページの公開情報によると、バックエンドはRuby・Ruby on Rails・Go、フロントエンドはTypeScript・React・Next.js、モバイルはSwift・Kotlinを採用しています。インフラはAWS・Google Cloudを利用しています。プロダクト・チームにより構成は異なります。",
  },
  {
    q: "タイミーは上場していますか？",
    a: "株式会社タイミーは2024年7月に東京証券取引所グロース市場へ上場した（証券コード215A）企業です。スキマバイト（スポットワーク）マッチングプラットフォーム「タイミー」を運営し、登録ワーカー・導入事業所数で国内有数の規模を持ちます。",
  },
  {
    q: "タイミーはどんな事業をしていますか？",
    a: "タイミーは、働きたい時間と人手が欲しい事業者をマッチングする「スキマバイト（スポットワーク）」プラットフォームを運営しています。面接なしで単発・短時間の仕事に応募できる仕組みで、人手不足という社会課題に対してプロダクトで応える事業です。",
  },
  {
    q: "タイミーで活きる経験は？",
    a: "Ruby on RailsやGoを用いたWebアプリケーション開発の実務経験が基本です。マッチング・マーケットプレイス型サービスの開発・運用経験、急成長プロダクトのスケーラビリティ対応、React/Next.jsでのフロントエンドやモバイル開発の経験などが活きやすい傾向です。",
  },
  {
    q: "30代・40代でもタイミーに転職できますか？",
    a: "平均年齢31.5歳（新規上場時 有報）と若めの組織のため、40代は相対的にシニア寄りの立ち位置になります。急成長フェーズのスケーラビリティ対応や設計、テックリード・マネジメントの経験など、年齢に見合う価値を示せれば、ミドル層でも挑戦できる環境です。",
  },
];

export default function TimeeCompanyPage() {
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
      <ArticleJsonLd title="タイミー エンジニア転職ガイド" description="タイミー（215A・東証グロース）へのエンジニア転職を実データで解説。新規上場時の有価証券報告書の平均年収594万円（2024年10月期・全社員平均）、Ruby on Rails/Go/Next.jsの技術スタック、選考フロー、30代40代の現実までまとめました。" url="/company/timee/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "タイミー" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">タイミー エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | スキマバイトプラットフォームのエンジニア採用</p>

        <p className="text-slate-600 leading-relaxed mb-4">
          株式会社タイミーは、スキマバイト（スポットワーク）マッチングプラットフォーム「タイミー」を運営する東証グロース上場（証券コード215A）の企業です。2024年7月に上場し、人手不足という社会課題にプロダクトで応えています。本ページでは、有価証券報告書・公式採用情報・公式技術ブログ・口コミプラットフォームの公開情報をもとに、エンジニア転職の実態を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "株式会社タイミー 新規上場のための有価証券報告書（Ⅰの部）／有価証券報告書（2024年10月期）",
            "タイミー公式 採用ページ（product-recruit.timee.co.jp）",
            "Timee Product Team Blog（公式技術ブログ）",
            "タイミー IR・上場関連情報（2024年）",
          ]}
        />

        <section id="conclusion" className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：難易度と向いているエンジニア</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              タイミーは<strong>Ruby on RailsとGoで急成長中のマッチングプラットフォームを開発する、2024年上場のスタートアップ発テック企業</strong>です。Webアプリ開発の実務経験が前提で、難易度は中〜やや高。全社員平均年収は約594万円（新規上場時 有報・2024年10月期）です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>● <strong>向いている人</strong>：Ruby/Goでの実務経験があり、マッチング・マーケットプレイスや急成長フェーズのスケーラビリティに関心があるエンジニア</li>
              <li>● <strong>向いていない人</strong>：変化の速い環境より安定した枯れた環境を強く好む人、明確な役割分担を重視する人</li>
              <li>● <strong>30代・40代</strong>：平均年齢31.5歳と若め。スケーラビリティ対応・設計やマネジメントの実績で価値を示せるかが鍵</li>
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
          <p className="text-xs text-slate-400 mt-2">※平均年間給与・平均年齢は新規上場時の有価証券報告書（2024年10月期・全社員平均）に基づく値。従業員数は2025年8月時点の公表値。上場間もないため開示年数は限られます。技術スタックは公式技術ブログ・採用ページの公開情報（2026年6月時点で確認できる範囲）。</p>
        </section>

        <section id="features" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">マッチングプラットフォームというドメイン</h3>
              <p className="text-sm text-blue-700">「タイミー」は働きたい人と人手が欲しい事業者を即時にマッチングするプラットフォームです。需給マッチング・大量トランザクション・信頼性といったマーケットプレイス特有の技術課題に向き合えるエンジニアが活きる環境です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">急成長フェーズのスケーラビリティ</h3>
              <p className="text-sm text-blue-700">登録ワーカー・導入事業所が短期間で大きく拡大しており、トラフィックやデータ量の増加に耐える設計・運用が求められます。急成長プロダクトのスケーラビリティに技術で応えたいエンジニアにとって挑戦的な環境です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">人物・カルチャーフィット重視の採用</h3>
              <p className="text-sm text-blue-700">公開情報によると、選考では物事をフラットに捉え、自分の意見を率直に表現できる人物像が重視される傾向があります。技術力に加え、変化を楽しみチームで課題に向き合う姿勢が評価されやすい文化です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            以下はTimee Product Team Blog（公式技術ブログ）・採用ページの公開情報に基づく技術スタックです。プロダクト・チームにより採用技術は異なります。記載のない言語・基盤の断定は避けています。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>バックエンド</strong>：Ruby / Ruby on Rails、Go</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>フロントエンド</strong>：TypeScript、React、Next.js（事業者向け管理画面等）</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>モバイル</strong>：Swift（iOS）、Kotlin（Android）</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>インフラ</strong>：AWS、Google Cloud</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: Timee Product Team Blog（tech.timee.co.jp）・採用ページ等の公開記事。2026年6月時点で確認できる範囲。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有価証券報告書ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            タイミーは2024年7月に上場したばかりのため、有価証券報告書の開示年数は限られます。<strong>新規上場時の有価証券報告書（2024年10月期）では全社員平均の平均年間給与は約594万円、平均年齢31.5歳</strong>です。年度ごとの長期推移は十分な開示が蓄積されていないため、本ページでは創作せず単年の数値のみを掲載します。
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900 mb-4">
            <p className="leading-relaxed">平均年間給与は技術職に限らない<strong>全社員平均</strong>であり、エンジニア個人の年収は等級・スキル評価により異なります。エンジニア職に限定した公式な提示年収レンジは一次情報が乏しいため断定しません。最新値は最新の有価証券報告書でご確認ください。</p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            参考として、レバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。タイミーの全社員平均（約594万円）は急成長スタートアップとして相応の水準ですが、提示額は募集ポジション・スキル評価により幅があるため、個別求人ごとに確認するのが確実です。
          </p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公開情報ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公式採用情報・採用媒体の公開情報をもとにした一般的な流れです。最新の内容は各求人でご確認ください。
          </p>
          <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside border border-slate-200 rounded-lg p-5">
            <li>カジュアル面談（任意。事業やチームの理解を深める）</li>
            <li>書類選考（職務経歴書・ポートフォリオ等）</li>
            <li>Webテスト・技術課題（職種により実施される場合がある）</li>
            <li>面接（2〜3回程度。技術ディスカッション・カルチャーフィットを確認）</li>
            <li>オファー面談</li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">出典: タイミー公式 採用ページ（product-recruit.timee.co.jp）／採用媒体掲載情報の要約。選考は職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公開情報と口コミ傾向から、確認される観点をまとめます（断定的な「質問リスト」は出典が不確かなため掲載していません）。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>Ruby on Rails／Go等での実装力と設計の妥当性</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>マッチング・マーケットプレイス型サービスの開発・運用経験</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>急成長プロダクトのスケーラビリティへの理解・経験</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>物事をフラットに捉え、率直に意見を表現できるカルチャーフィット</li>
          </ul>
          <p className="text-sm text-slate-600 mt-3">技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接の対策</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-blue-600 hover:underline">コーディングテスト対策</Link>も参考にしてください。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              タイミーは平均年齢31.5歳（新規上場時 有報）と若めの組織のため、40代は相対的にシニア寄りの立ち位置になります。30代・40代のミドルエンジニアは、<strong>急成長フェーズのスケーラビリティ対応・アーキテクチャ設計、テックリードやマネジメントの経験</strong>など、年齢に見合う価値を示せるかが評価の分かれ目です。
            </p>
            <p>
              年収面では、参考値としてレバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。タイミーの全社員平均（約594万円）は急成長スタートアップとして相応の水準ですが、これは全社平均であり、入社時の提示はスキル評価次第です。30代・40代は自分の市場価値を踏まえ、個別求人・面談で水準を確認することが重要です。
            </p>
            <p>
              上場直後の成長フェーズで、組織・技術ともにスケールさせる経験を積みたいミドル層にとっては挑戦の機会がある局面です。一方で変化の速さは前提となるため、安定志向との相性は事前に見極めましょう。<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職事情</Link>や<Link href="/knowledge/startup-vs-enterprise/" className="text-blue-600 hover:underline">スタートアップと大企業の比較</Link>も合わせて参考にしてください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">タイミー転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・Web特化。SaaS・スタートアップの求人に強く、非公開求人も豊富。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。実務経験者への提案数が多く提案スピードが速い。" },
              { name: "Green", href: "/review/green/", desc: "IT/Webベンチャーに強い成功報酬型転職サイト。カジュアル面談中心。" },
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
          <h2 className="text-xl font-bold mb-3">タイミーへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">SaaS・スタートアップへの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "note エンジニア転職ガイド", href: "/company/note/" },
              { name: "ラクスル エンジニア転職ガイド", href: "/company/raksul/" },
              { name: "SmartNews エンジニア転職ガイド", href: "/company/smartnews/" },
              { name: "Ubie エンジニア転職ガイド", href: "/company/ubie/" },
              { name: "スタートアップと大企業の比較", href: "/knowledge/startup-vs-enterprise/" },
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
