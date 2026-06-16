import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "スキルシートの書き方【職務経歴書との違い・記入例】";
const DESCRIPTION =
  "エンジニアのスキルシート（技術経歴書）の書き方を、職務経歴書との違い・必須項目・プロジェクト記入例・スキルレベルの表記まで実践的に解説。30代40代が経験を正確に伝え、書類選考を通過するための作り方をまとめます。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：スキルシートの基本" },
  { id: "diff", label: "職務経歴書との違い" },
  { id: "items", label: "スキルシートの必須項目" },
  { id: "project", label: "プロジェクト経歴の記入例" },
  { id: "level", label: "スキルレベルの表記方法" },
  { id: "steps", label: "スキルシートを書き上げる手順" },
  { id: "midlife", label: "30代・40代の書き方のポイント" },
  { id: "ng", label: "ありがちなNG例" },
  { id: "faq", label: "よくある質問" },
];

const diffRows = [
  {
    aspect: "主な目的",
    skill: "保有技術・プロジェクト経験を一覧で示す",
    resume: "職歴と実績・強みをストーリーで伝える",
  },
  {
    aspect: "形式",
    skill: "表形式が中心（プロジェクト単位の一覧）",
    resume: "文章＋箇条書き（時系列または職務別）",
  },
  {
    aspect: "記載の粒度",
    skill: "案件ごとの工程・役割・技術を網羅的に",
    resume: "代表的な実績を厳選して深く",
  },
  {
    aspect: "よく使う場面",
    skill: "SES・フリーランス・客先常駐の案件選定",
    resume: "正社員転職の選考全般",
  },
  {
    aspect: "自己PR欄",
    skill: "簡潔または省略されることも多い",
    resume: "強みを示す重要パート",
  },
];

const requiredItems = [
  { title: "基本情報", desc: "氏名（イニシャル可の場合あり）、年齢、最寄り駅、稼働可能時期、希望条件など。フリーランス案件では稼働開始日も重要です。" },
  { title: "保有スキル一覧", desc: "言語・フレームワーク・OS・DB・ミドルウェア・クラウド・ツールを分類して列挙。経験年数やレベルを併記します。" },
  { title: "資格・学習歴", desc: "保有資格（IPA、クラウド認定など）や、業務外で取り組んでいる学習・OSS活動があれば記載します。" },
  { title: "プロジェクト経歴", desc: "案件ごとに、概要・期間・役割・担当工程・使用技術・チーム規模・成果を表形式でまとめます。スキルシートの中心です。" },
  { title: "得意分野・自己PR", desc: "強みや得意領域を簡潔に。職務経歴書ほど長文にせず、要点を絞って記載します。" },
];

const projectExample = [
  { field: "プロジェクト名", value: "ECサイトのリプレイス開発" },
  { field: "期間", value: "2023年4月〜2024年3月（12カ月）" },
  { field: "役割", value: "バックエンドリーダー（メンバー5名）" },
  { field: "担当工程", value: "要件定義・基本設計・詳細設計・実装・テスト・運用保守" },
  { field: "使用技術", value: "言語: Java / FW: Spring Boot / DB: PostgreSQL / インフラ: AWS（ECS, RDS）/ CI: GitHub Actions" },
  { field: "業務内容・成果", value: "旧システムのAPIを段階的に刷新。決済まわりの責務を整理し、障害発生率の低減とレスポンス改善を実現。後輩2名の設計レビューも担当。" },
];

const levelExamples = [
  { level: "レベル4 / ◎", desc: "設計・他者への指導が可能。技術選定や難易度の高い課題解決をリードできる。" },
  { level: "レベル3 / ○", desc: "一人称で実装・運用が可能。要件に応じて自走できる実務レベル。" },
  { level: "レベル2 / △", desc: "指示があれば実装可能。基本的な範囲を担当できる。" },
  { level: "レベル1 / ―", desc: "学習中・基礎知識のみ。実務経験は限定的。" },
];

const writeSteps = [
  { num: "1", title: "案件を時系列で棚卸しする", desc: "これまで参画した案件を新しい順に書き出します。期間・クライアント業種・規模・自分の役割をメモし、記憶が曖昧な古い案件は概要だけでも整理しておきます。" },
  { num: "2", title: "案件ごとに工程と技術を埋める", desc: "各案件で担当した工程（要件定義〜運用）と使用技術を、漏れなく具体的に記載します。「どの工程まで一人称で対応したか」を意識すると、レベル感が正確に伝わります。" },
  { num: "3", title: "保有スキル一覧に集約する", desc: "案件をまたいで使った技術を、言語・FW・DB・クラウド・ツールなどに分類して一覧化します。経験年数やレベル表記を併記し、凡例を添えます。" },
  { num: "4", title: "応募先に合わせて並び替える", desc: "応募する案件・求人が求める技術や工程の経験を、上部や目立つ位置に配置します。読み手が最初に流し読みする部分でマッチ度が伝わるよう調整します。" },
  { num: "5", title: "第三者にレビューしてもらう", desc: "完成後はエージェントや同僚に見てもらい、伝わりにくい点や誇張がないかを確認します。客観的な視点を入れることで、案件選定する側に届く精度が上がります。" },
];

const ngExamples = [
  {
    title: "技術名を羅列するだけ",
    desc: "「Java, Python, AWS, Docker…」と並べるだけでは、どの程度使えるか伝わりません。経験年数・レベル・どの工程で使ったかを添えます。",
  },
  {
    title: "プロジェクトの役割が曖昧",
    desc: "「開発に参加」だけでは貢献度が不明です。「バックエンドリーダーとして設計から担当」のように、役割と工程を明確にします。",
  },
  {
    title: "盛った経験・実態と異なる記載",
    desc: "触っただけの技術を「実務経験あり」と書くと、参画後に実力不足が露呈します。レベル表記で正確に伝えるのが信頼につながります。",
  },
  {
    title: "成果・規模の記載がない",
    desc: "作業内容だけでなく、チーム規模・期間・改善結果などの事実を添えると、案件選定する側がイメージしやすくなります。",
  },
  {
    title: "情報が古いまま更新していない",
    desc: "直近の案件や新しく習得した技術が反映されていないと、現在の実力が伝わりません。案件ごとに更新する習慣をつけましょう。",
  },
];

const faqs = [
  {
    q: "スキルシートと職務経歴書は両方必要ですか？",
    a: "応募先や形態によります。SES・フリーランス・客先常駐の案件選定ではスキルシート（技術経歴書）が重視され、正社員転職では職務経歴書が基本です。エージェント経由の場合、両方の提出を求められることもあります。内容が重複しても役割が異なるため、それぞれの目的に合わせて整えておくと安心です。",
  },
  {
    q: "スキルシートに決まったフォーマットはありますか？",
    a: "法律で定められた様式はなく、エージェントやSES企業ごとに独自のテンプレートを使うことが多いです。共通して求められるのは、保有スキル一覧とプロジェクト経歴を表形式で整理することです。エージェントを利用する場合は、指定フォーマットがあるか確認し、それに沿って作成すると手戻りが減ります。",
  },
  {
    q: "スキルレベルはどう表記すればいいですか？",
    a: "「◎○△」の3〜4段階や「レベル1〜4」「経験年数（○年）」での表記が一般的です。設計・指導が可能なレベルか、一人称で実装できるレベルか、指示があれば対応できるレベルかを区別して伝えると、参画後のミスマッチを防げます。表記基準を冒頭に凡例として示すと親切です。",
  },
  {
    q: "プロジェクト経歴はいくつ書けばいいですか？",
    a: "直近のものを中心に、5〜10件程度が目安です。古い案件をすべて詳細に書く必要はなく、直近かつ応募先に関連の深い案件を厚めに、古いものは概要のみにまとめるとメリハリが出ます。経験が長い40代の場合は、技術領域や役割の変遷が分かるように取捨選択しましょう。",
  },
  {
    q: "守秘義務がある案件はどう書けばいいですか？",
    a: "クライアント名やプロジェクトの固有名詞は伏せ、「大手金融機関向け基幹システム」のように業種・規模で表現します。NDAに抵触する具体的な仕様や数値は書かず、自分が担当した工程・役割・使用技術を中心に記載すれば、守秘義務を守りつつ経験を伝えられます。",
  },
  {
    q: "スキルシートで書類選考に通りやすくするコツは？",
    a: "応募先・案件が求める技術や工程に合致する経験を、上部や目立つ位置に配置することです。読み手は最初に全体を流し読みするため、求人内容とのマッチ度が一目で分かる構成が有効です。あわせて、役割・成果・チーム規模といった事実を添えると、即戦力としての評価につながります。",
  },
  {
    q: "30代・40代でスキルシートが長くなりすぎる場合は？",
    a: "経験が豊富なほど取捨選択が重要です。直近5年程度の案件を詳しく、それ以前は概要にとどめてページ数を抑えます。すべてを網羅するより、応募先に響く経験を見極めて厚くする方が効果的です。マネジメント経験がある場合は、技術だけでなくチーム規模や育成実績も簡潔に示しましょう。",
  },
];

export default function SkillSheetPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/skill-sheet/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "スキルシートの書き方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          スキルシートの書き方【職務経歴書との違い・記入例】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 経験を正確に伝える技術経歴書の作り方
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          スキルシート（技術経歴書）は、保有技術とプロジェクト経験を一覧で示す書類です。SESやフリーランスの案件選定では特に重視され、書き方ひとつで参画できる案件が変わります。本記事では、職務経歴書との違い、必須項目、プロジェクト経歴の記入例、スキルレベルの表記方法、ミドル層が長くなりがちな経歴をどう整理するかまで、実践的に解説します。
        </p>

        <DataNote surveyedAt="2026年6月" />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：スキルシートの基本</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              スキルシートは、<strong>「保有スキル一覧」と「プロジェクト経歴」を表形式で正確に整理する</strong>書類です。職務経歴書が実績や強みを文章で語るのに対し、スキルシートは技術と案件経験を網羅的・客観的に示すのが役割です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              ポイントは、技術名を羅列するだけでなく、各案件での役割・担当工程・スキルレベルを明確にすること。盛らずに正確に書くことが、参画後のミスマッチを防ぎ、結果的に信頼につながります。応募先・案件が求める経験を目立つ位置に配置すると、選考通過率が上がります。
            </p>
          </div>
        </section>

        {/* 違い */}
        <section id="diff" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書との違い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            スキルシートと職務経歴書は似ていますが、目的と形式が異なります。両者の違いを押さえておきましょう。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="px-4 py-3 text-left font-bold">観点</th>
                  <th className="px-4 py-3 text-left font-bold">スキルシート</th>
                  <th className="px-4 py-3 text-left font-bold">職務経歴書</th>
                </tr>
              </thead>
              <tbody>
                {diffRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-700">{row.aspect}</td>
                    <td className="px-4 py-3 text-slate-600">{row.skill}</td>
                    <td className="px-4 py-3 text-slate-600">{row.resume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            正社員転職向けの
            <Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方</Link>
            も合わせて確認すると、両書類を使い分けやすくなります。
          </p>
        </section>

        {/* 必須項目 */}
        <section id="items" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルシートの必須項目</h2>
          <div className="space-y-3">
            {requiredItems.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* プロジェクト記入例 */}
        <section id="project" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">プロジェクト経歴の記入例</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            プロジェクト経歴はスキルシートの中心です。1案件あたり次の項目を表形式でまとめます（以下は記入例）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <tbody>
                {projectExample.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 first:border-t-0">
                    <td className="px-4 py-3 font-medium text-slate-700 bg-slate-50 w-40 align-top">{row.field}</td>
                    <td className="px-4 py-3 text-slate-600 leading-relaxed">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            担当工程（要件定義・設計・実装・テスト・運用）を明記すると、案件選定側がフィット度を判断しやすくなります。
          </p>
        </section>

        {/* レベル表記 */}
        <section id="level" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルレベルの表記方法</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            保有スキルは、レベルや経験年数を併記すると伝わり方が大きく変わります。凡例を冒頭に示しておくと親切です。
          </p>
          <div className="space-y-3">
            {levelExamples.map((l, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{l.level}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            個別の技術領域は
            <Link href="/skill/aws/" className="text-petrol hover:underline">AWSエンジニアの転職</Link>
            など、職種・スキル別ページも参考になります。
          </p>
        </section>

        {/* 手順 */}
        <section id="steps" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルシートを書き上げる手順</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ゼロから書き始めると手が止まりがちです。次の手順で進めると、抜け漏れなく効率的に仕上げられます。
          </p>
          <div className="space-y-4">
            {writeSteps.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ミドル */}
        <section id="midlife" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の書き方のポイント</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">経歴が長い場合は取捨選択する</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                経験年数が長いほど、すべての案件を詳細に書くとシートが冗長になります。直近5年程度を厚く、それ以前は概要にとどめ、応募先・案件に関連の深い経験を目立たせましょう。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">役割・マネジメント実績も明記する</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                ミドル層は、リーダー・PL・PMといった役割や、チーム規模・後進育成の実績も評価対象です。技術だけでなく、どの立場で何を推進したかを簡潔に添えると、即戦力としての価値が伝わります。
              </p>
            </div>
          </div>
        </section>

        {/* NG */}
        <section id="ng" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ありがちなNG例</h2>
          <div className="space-y-4">
            {ngExamples.map((n, i) => (
              <div key={i} className="bg-red-50 rounded-lg p-5">
                <h3 className="font-bold text-red-800 mb-2">{n.title}</h3>
                <p className="text-sm text-red-700 leading-relaxed">{n.desc}</p>
              </div>
            ))}
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
          <h2 className="text-xl font-bold mb-3">スキルシートの添削はプロに任せよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT・フリーランス特化型エージェントなら、案件に通りやすいスキルシートの作り方を支援してくれます。
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
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "自己PRの書き方・例文", href: "/knowledge/self-pr/" },
              { name: "ポートフォリオ作成ガイド", href: "/knowledge/portfolio/" },
              { name: "フリーランスか正社員か", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "40代エンジニアの転職", href: "/age/40s/" },
              { name: "転職ナレッジ一覧", href: "/knowledge/" },
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
