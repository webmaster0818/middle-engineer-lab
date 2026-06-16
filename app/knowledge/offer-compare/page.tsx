import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "複数内定オファーの比較方法【比較表・辞退例文付き】";
const DESCRIPTION =
  "複数内定を後悔なく比較する方法を解説。年収以外の比較軸（ストックオプション・リモート・評価制度）、そのまま使える比較表テンプレート、内定辞退の伝え方例文まで、30代・40代向けに実践的にまとめます。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：オファー比較の基本方針" },
  { id: "axes", label: "年収以外の比較軸" },
  { id: "table", label: "オファー比較表テンプレート" },
  { id: "scoring", label: "スコアリングで定量比較する手順" },
  { id: "decline", label: "内定辞退の伝え方例文" },
  { id: "deadline", label: "回答期限・入社日の調整" },
  { id: "midlife", label: "30代・40代の意思決定のポイント" },
  { id: "faq", label: "よくある質問" },
];

const axes = [
  {
    title: "ストックオプション・RSU",
    desc: "基本給が低めでも、株式報酬で長期的なリターンを狙える設計の企業があります。行使価格・付与数・ベスティング期間・上場見込みを確認し、現金部分とのバランスで評価します。",
  },
  {
    title: "リモートワーク・働く場所",
    desc: "フルリモート・ハイブリッド・出社中心で、生活への影響が大きく変わります。制度として保証されているか、運用上の慣習にすぎないかを面接で確認しましょう。",
  },
  {
    title: "評価制度・昇給の仕組み",
    desc: "等級制度や評価サイクル、昇給の実態は入社後の年収カーブを左右します。『どんな成果がどう評価され、昇給にどう反映されるか』を確認すると、提示年収だけでは見えない将来性が見えてきます。",
  },
  {
    title: "技術スタック・成長機会",
    desc: "使う技術、開発プロセス、レビュー文化、学習支援などは、エンジニアとしての市場価値の伸びに直結します。技術ブログや面接での質問で見極めます。",
  },
  {
    title: "労働時間・ワークライフバランス",
    desc: "残業の実態、オンコール有無、繁忙期の働き方など。年収が高くても持続できなければ意味がありません。口コミやエージェント経由で実態を確認しましょう。",
  },
  {
    title: "事業の安定性・将来性",
    desc: "企業の成長フェーズや収益性は、雇用の安定や昇給原資に影響します。IR情報やニュース、面接での事業説明から判断します。",
  },
];

const declineExamples = [
  {
    scene: "エージェント経由で辞退する場合",
    text: "「先日は内定をいただき誠にありがとうございました。慎重に検討した結果、今回は他社のオファーをお受けすることにいたしました。貴重なお時間をいただいたにもかかわらず、このようなご連絡となり申し訳ございません。」（エージェントが企業へ連絡を代行）",
  },
  {
    scene: "直接応募で辞退する場合（メール）",
    text: "「件名：内定辞退のご連絡（氏名）\n\n○○株式会社 採用ご担当者様\n\nこの度は内定のご連絡をいただき、誠にありがとうございました。慎重に検討を重ねた結果、誠に勝手ながら今回はご縁を見送らせていただきたく、ご連絡いたしました。お時間を割いていただいたにもかかわらず、申し訳ございません。末筆ながら、貴社のますますのご発展をお祈り申し上げます。」",
  },
  {
    scene: "理由を簡潔に添える場合",
    text: "「複数社を比較した結果、自身のキャリアの方向性により合致する企業からのオファーをお受けすることにいたしました。」（理由は詳述不要。簡潔・丁寧に）",
  },
];

const faqs = [
  {
    q: "複数内定が出た場合、いつまでに回答すべきですか？",
    a: "一般的に内定の回答期限は1〜2週間程度です。他社の選考状況を正直に伝えれば、期限の延長を相談できる場合もあります。エージェント経由なら、期限の調整を代行してもらえます。焦って即答せず、比較に必要な時間を確保しましょう。",
  },
  {
    q: "年収だけで判断して良いですか？",
    a: "年収は重要ですが、それだけで決めるのは危険です。ストックオプション・評価制度・リモート可否・技術スタック・労働時間・事業の安定性などを総合的に比較しましょう。年収が高くても働く環境が合わなければ長続きしません。",
  },
  {
    q: "オファー比較表はどう作ればいいですか？",
    a: "本文の比較表テンプレートのように、比較軸を縦に、企業を横に並べた表を作るのが基本です。各軸に自分なりの重要度（★）を付け、企業ごとに評価を埋めていくと、感覚ではなく構造的に比較できます。スコアリングで点数化するとさらに判断しやすくなります。",
  },
  {
    q: "内定を辞退する場合のマナーは？",
    a: "できるだけ早く、丁寧に辞退の意思を伝えましょう。理由を詳しく説明する必要はなく、『他社とのご縁をいただきました』程度で十分です。エージェント経由なら辞退の連絡も代行してもらえます。本文に辞退の例文を掲載しています。",
  },
  {
    q: "入社日は交渉できますか？",
    a: "多くの企業で入社日の調整は可能です。現職の退職手続きに約1.5〜2ヶ月、有給消化に2〜4週間程度を見込み、無理のないスケジュールを提案しましょう。複数内定がある場合は、各社の入社時期も比較材料になります。",
  },
  {
    q: "オファー交渉はエージェントに任せるべきですか？",
    a: "エージェント経由の場合は任せるのがおすすめです。年収・入社日・条件のすり合わせを代行してくれ、候補者が直接言いにくいことも適切に伝えてくれます。直接応募の場合は自分で交渉する必要があります。",
  },
  {
    q: "30代・40代で内定を比較する際の注意点は？",
    a: "30代は成長機会と評価制度を、40代は専門性が活きるかと労働環境の持続性を重視すると後悔しにくくなります。いずれも年収の額面だけでなく、ライフイベントや働き方を含めた総合的なパッケージで判断することが大切です。",
  },
];

export default function OfferComparePage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/offer-compare/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "複数内定の比較方法" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          複数内定オファーの比較方法【比較表・辞退例文付き】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 後悔しない転職先の選び方
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          複数の企業から内定をもらえるのは嬉しい反面、どこを選ぶべきか悩むものです。「年収が高い方」「知名度のある方」と安易に決めると、入社後に後悔するリスクがあります。本記事では、年収以外の比較軸、そのまま使える比較表テンプレート、辞退の伝え方例文まで、後悔しない意思決定の手順を解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "パーソルキャリア（doda）2024年度 決定年収レポート（2025年5月公表）",
            "レバテック公表の年代別平均年収（2025年）",
          ]}
        />

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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：オファー比較の基本方針</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              オファー比較は、<strong>年収だけで決めず、比較軸を表に整理してスコアリングで定量比較する</strong>のが基本です。年収以外では、ストックオプション・リモートワーク・評価制度・技術スタック・労働時間・事業の安定性が重要な軸になります。
            </p>
            <p className="text-slate-700 leading-relaxed">
              年収は重要な指標ですが、入社後の満足度を決めるのはそれだけではありません。参考として、dodaの2024年度「決定年収レポート」（2025年5月公表）ではIT・通信の平均決定年収は486万円。額面の数十万円の差より、評価制度や働き方が中長期の年収カーブと満足度を左右することも多くあります。辞退する企業には、早めに丁寧に連絡しましょう。
            </p>
          </div>
        </section>

        {/* 比較軸 */}
        <section id="axes" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収以外の比較軸</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            年収以外で必ず比較したい軸を整理します。自分にとっての優先順位を意識しながら確認しましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {axes.map((a, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{a.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 比較表 */}
        <section id="table" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">オファー比較表テンプレート</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            比較軸を縦に、企業を横に並べた表に書き込んでいきます。重要度（★）は自分の価値観に合わせて調整してください。確認方法も併記しておくと、何を聞けばよいかが明確になります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">比較項目</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">重要度（例）</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">確認方法</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">A社</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">B社</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["年収（基本給＋賞与）", "★★★★★", "オファーレター"],
                  ["ストックオプション・RSU", "★★★☆☆", "オファーレター・面接"],
                  ["評価制度・昇給の仕組み", "★★★★☆", "面接で質問"],
                  ["技術スタック・成長機会", "★★★★★", "面接・技術ブログ"],
                  ["リモートワーク制度", "★★★★☆", "求人票・面接"],
                  ["労働時間・残業の実態", "★★★★☆", "口コミ・エージェント"],
                  ["事業の安定性・将来性", "★★★☆☆", "IR情報・ニュース"],
                  ["通勤・勤務地", "★★★☆☆", "求人票"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700 font-medium">{row[0]}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{row[1]}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{row[2]}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-400">記入</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-400">記入</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 重要度（★）は個人の価値観に応じてカスタマイズしてください。A社・B社の列に各社の評価を記入します。</p>
        </section>

        {/* スコアリング */}
        <section id="scoring" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スコアリングで定量比較する手順</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            感覚ではなく数値で比較すると、迷いが減ります。次の手順で点数化しましょう。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "各比較軸に「重み」を付ける", desc: "自分にとっての重要度を重み（例：★5＝5点、★3＝3点）として設定します。全軸を均等に見るのではなく、優先順位を反映させます。" },
              { num: "2", title: "企業ごとに各軸を採点する", desc: "各軸について、企業ごとに1〜5点で評価します。確認できていない項目は、面接やエージェントに質問して埋めます。" },
              { num: "3", title: "重み × 点数を合計する", desc: "「重み×点数」を全軸で合計し、企業ごとの総合スコアを出します。数値化することで、年収以外の要素も含めた比較ができます。" },
              { num: "4", title: "スコアと直感のズレを確認する", desc: "スコア上位と『自分が直感的に惹かれている企業』がズレる場合、その理由を言語化します。重みの付け方を見直す気づきになります。" },
            ].map((item, i) => (
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

        {/* 辞退例文 */}
        <section id="decline" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">内定辞退の伝え方例文</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            辞退は早く・丁寧に伝えるのが鉄則です。理由を詳述する必要はありません。場面別の例文を用意しました。
          </p>
          <div className="space-y-4">
            {declineExamples.map((e, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-5 py-2 text-sm font-bold text-slate-700">{e.scene}</div>
                <p className="px-5 py-4 text-sm text-slate-700 leading-relaxed whitespace-pre-line">{e.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 期限・入社日 */}
        <section id="deadline" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">回答期限・入社日の調整</h2>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">回答期限は調整を相談できる</h3>
              <p className="text-sm text-slate-600">回答期限は一般的に1〜2週間。他社の選考状況を正直に伝えれば、延長を相談できる場合があります。エージェント経由なら調整を代行してもらえます。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">入社日は退職手続きを見込んで提案する</h3>
              <p className="text-sm text-slate-600">現職の退職手続きに約1.5〜2ヶ月、有給消化に2〜4週間を見込み、無理のないスケジュールを提案します。複数内定がある場合、各社の入社時期も比較材料になります。</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            退職の進め方は
            <Link href="/knowledge/resignation/" className="text-petrol hover:underline">退職の進め方ガイド</Link>
            、入社後の立ち上がりは
            <Link href="/knowledge/first-90days/" className="text-petrol hover:underline">転職後90日間の過ごし方</Link>
            で解説しています。
          </p>
        </section>

        {/* 30代40代 */}
        <section id="midlife" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の意思決定のポイント</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：成長機会と評価制度を重視する</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                30代は『次の10年の土台』を作る年代です。レバテック公表（2025年）では30代平均約499万円→40代約618万円と年代で平均が伸びるため、目先の年収差よりも、評価制度・成長機会・技術スタックといった『将来の年収カーブを押し上げる要素』を重視すると後悔しにくくなります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：専門性の活用と持続可能性を見る</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                40代は自分の専門性が活きるか、そして長く働ける環境かが重要です。年収（40代平均約618万円が一つの目安）に加え、労働時間や役割の明確さ、家族のライフイベントとの両立を含めて総合的に判断しましょう。
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
          <h2 className="text-xl font-bold mb-3">オファー交渉をプロに任せよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、年収交渉や入社日調整、辞退の連絡まで代行。最適な条件で入社できるようサポートします。
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
              { name: "年収交渉ガイド", href: "/knowledge/salary-negotiation/" },
              { name: "カウンターオファーへの対応", href: "/knowledge/counter-offer/" },
              { name: "転職を後悔しないために", href: "/knowledge/regret/" },
              { name: "転職後90日間の過ごし方", href: "/knowledge/first-90days/" },
              { name: "退職の進め方ガイド", href: "/knowledge/resignation/" },
              { name: "転職で年収は上がる？下がる？", href: "/knowledge/salary-change/" },
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
