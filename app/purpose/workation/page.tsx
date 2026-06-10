import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "ワーケーションができる企業へ転職【制度の見極め方2026】",
  description:
    "ワーケーションの定義と種類を公的情報ベースで解説。求人での見極め方、労働時間・労災・費用負担の注意点、該当しやすい企業タイプ、30-40代の活用法まで。",
};

const faqs = [
  {
    q: "ワーケーションとは何ですか？",
    a: "ワーケーション（Workation）は、Work（仕事）とVacation（休暇）を組み合わせた造語で、観光地やリゾート地など普段とは異なる場所で、休暇を兼ねながらリモートで働く働き方を指します。観光庁などの整理では、休暇型（有給休暇中に一部仕事をする）と業務型（出張先や地方拠点で勤務する）に大別され、後者はさらに地域課題解決やサテライトオフィス勤務などに分かれます。フルリモート制度を前提に成立する働き方です（出典：観光庁 ワーケーションに関する取り組み）。",
  },
  {
    q: "ワーケーションとリモートワークは何が違いますか？",
    a: "リモートワークは『オフィス以外で働く』こと全般を指し、自宅勤務が中心です。ワーケーションはその一形態で、特に旅行先・リゾート・地方など『非日常の場所』で働く点に特徴があります。つまりフルリモートが認められていることが前提で、さらに勤務場所の自由度が高い（居住地以外でも働ける）会社でないと、ワーケーションは実質的に成立しません。求人ではまず勤務場所の規定を確認することが起点になります。",
  },
  {
    q: "ワーケーション中の労働時間や労災はどう扱われますか？",
    a: "業務として働いている時間は通常の労働時間として管理され、労働基準法が適用されます。仕事中に生じた負傷等は労災の対象となり得ますが、私的な観光・余暇の時間中の事故は業務との関連が問われ、労災と認められないことがあります。仕事と休暇の切り分け（勤務時間の明確化）が重要です。会社のワーケーション規程で、労働時間管理・通信環境・経費負担のルールがどう定められているかを確認しましょう。",
  },
  {
    q: "求人でワーケーション制度の何を確認すべきですか？",
    a: "（1）フルリモートが前提か：居住地以外・旅行先でも働けるか。（2）勤務可能な場所の範囲：国内のみか、海外（タイムゾーン・税務の論点あり）も可か。（3）日数・申請ルール：年に何日まで、事前申請が必要か。（4）費用負担：交通費・宿泊費・通信費は自己負担か補助があるか。（5）実際の利用実績。制度として明文化している企業はまだ限られるため、面接で運用実態を確認するのが確実です。",
  },
  {
    q: "海外でワーケーションはできますか？",
    a: "技術的には可能でも、会社の規程で国内に限定しているケースが多いです。海外勤務は、滞在国の就労ビザ・税務（一定期間を超えると現地での納税義務が生じ得る）、社会保険、情報セキュリティなど企業側のリスクが大きいためです。海外ワーケーションを認める企業でも、日数上限や対象国を限定するのが一般的です。希望する場合は、求人・面接で『海外からの就業が認められるか』を必ず確認してください。",
  },
  {
    q: "30-40代がワーケーションを活用するメリットと注意点は？",
    a: "家族との旅行を兼ねて働ける、帰省しながら仕事を続けられる、気分転換で生産性が上がる、といったメリットがあります。一方で、仕事と休暇の境界が曖昧になり結果的に休めない、通信環境やセキュリティの問題、家族の理解が必要、といった注意点もあります。制度として整っている会社を選び、勤務時間とオフを明確に分ける運用ができるかが、活用成功の鍵です。前提となるフルリモート環境はフルリモート求人の見極め方も参考にしてください。",
  },
];

export default function WorkationPage() {
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
        title="ワーケーションができる企業へ転職【制度の見極め方2026】"
        description="ワーケーションの定義と種類を公的情報ベースで解説。求人での見極め方、労働時間・労災・費用負担の注意点、該当しやすい企業タイプまで。"
        url="/purpose/workation/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "目的別ガイド", href: "/purpose/" },
          { name: "ワーケーションができる企業へ転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ワーケーションができる企業へ転職
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | フルリモートを前提に「制度の実態」で選ぶ完全ガイド</p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "観光庁 ワーケーション・ブレジャーに関する取り組み",
            "厚生労働省 テレワークの適切な導入及び実施の推進のためのガイドライン",
          ]}
        />

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：ワーケーションは「フルリモート＋場所の自由度」で決まる</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            ワーケーションは、リゾート地や地方など非日常の場所で休暇を兼ねて働く働き方です。しかしこれは<strong>フルリモートが認められ、かつ居住地以外でも働ける</strong>会社でなければ実質的に成立しません。求人で「ワーケーション可」とあっても、勤務場所の範囲・日数・費用負担・労働時間管理のルールは企業によって大きく異なります。本記事では、ワーケーションの定義と種類を公的情報で整理し、求人での見極め方を労務・税務のリスクと30-40代の活用法の観点で解説します。
          </p>
          <div className="bg-blue-50 border border-slate-200 rounded-lg p-6">
            <p className="text-sm font-medium text-slate-700 mb-2">こんな人におすすめ</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 旅行・帰省を兼ねて働ける柔軟な環境へ転職したい30-40代</li>
              <li>- 「ワーケーション可」求人の実態（場所・日数・費用）を見抜きたい</li>
              <li>- 労働時間・労災・税務などの注意点を正しく理解したい</li>
              <li>- フルリモートを前提に勤務場所の自由度が高い会社を探したい</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">目次</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-blue-700">
            <li>ワーケーションの種類</li>
            <li>求人での見極めポイント</li>
            <li>該当しやすい企業タイプ</li>
            <li>注意点（労働時間・税務・費用）</li>
            <li>よくある質問</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. ワーケーションの種類</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">種類</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">内容</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ポイント</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "休暇型", desc: "有給休暇等を利用し、滞在先で一部仕事も行う", note: "休暇が主。労働時間の切り分けが重要" },
                  { type: "業務型（サテライト）", desc: "地方拠点・サテライトオフィスで勤務", note: "業務が主。会社の拠点・規程に依存" },
                  { type: "業務型（地域課題・出張）", desc: "地域での活動や出張先での勤務を兼ねる", note: "目的が明確。経費・労務管理のルールあり" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.type}</td>
                    <td className="px-4 py-3 text-slate-600">{row.desc}</td>
                    <td className="px-4 py-3 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ 分類は観光庁の整理に基づく一般的なものです。各社のワーケーション規程により呼称・運用は異なります。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. 求人での見極めポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "フルリモート＋居住地以外の勤務が可能か確認する", desc: "ワーケーションの前提条件です。『リモート可』でも居住地でのみ就業を求める会社では成立しません。勤務場所の規定を最初に確認します。" },
              { num: "2", title: "勤務可能な場所の範囲を確認する", desc: "国内全域か、特定エリアか、海外も可か。海外はビザ・税務の論点があり、認める会社でも対象国・日数が限定されることが多いです。" },
              { num: "3", title: "日数・申請ルールを確認する", desc: "年に何日まで利用できるか、事前申請・上長承認が必要かを確認します。無制限の会社は少なく、上限付きが一般的です。" },
              { num: "4", title: "費用負担を確認する", desc: "交通費・宿泊費・通信費が自己負担か、会社補助があるか。自己負担前提の制度なら、実質的なコストも踏まえて活用判断を。" },
              { num: "5", title: "労働時間管理とセキュリティ規程を確認する", desc: "勤務時間の管理方法、外部ネットワーク利用時のセキュリティルールが整備されているかで、運用の本気度がわかります。" },
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
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3. 該当しやすい企業タイプ</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            ワーケーションを実際に運用できる会社は、フルリモートが定着している企業に偏ります（制度の有無は企業差が大きいため傾向のみ示します）。
          </p>
          <div className="space-y-3">
            {[
              { type: "フルリモート前提のWeb系・SaaS企業", point: "勤務場所を問わない設計が多く、ワーケーションも実態として可能なことが多い。" },
              { type: "地方創生・地域連携に取り組む企業", point: "サテライトオフィスや地方拠点を活用した業務型ワーケーションを制度化している例がある。" },
              { type: "柔軟な働き方を打ち出すスタートアップ", point: "採用力強化のため場所自由を掲げる企業も。実態は規程と利用実績で確認を。" },
              { type: "常駐・出社前提のSIer・受託", point: "クライアント先常駐が多いとワーケーションは実質困難。配属形態を要確認。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{item.type}</h3>
                <p className="text-sm text-slate-600">{item.point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. 注意点（労働時間・税務・費用）</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>仕事と休暇の切り分け：</strong>業務時間は通常どおり労働時間として管理されます。境界が曖昧だと結果的に休めず、長時間労働になりがちです。勤務時間とオフを明確に分ける運用が前提です。
            </p>
            <p>
              <strong>労災の範囲：</strong>業務中の事故は労災対象となり得ますが、私的な観光・余暇中の事故は業務関連性が問われ、対象外になることがあります。
            </p>
            <p>
              <strong>海外は税務・ビザのリスク：</strong>海外で一定期間を超えて働くと、就労ビザや現地での納税義務など企業・個人双方にリスクが生じます。海外ワーケーションは対象国・日数を限定する会社が多いです。
            </p>
            <p>
              <strong>費用と家族の理解：</strong>交通費・宿泊費が自己負担のことも多く、家族帯同なら家族の予定との調整も必要です。前提となる環境は
              <Link href="/purpose/remote-full/" className="text-blue-600 hover:underline">フルリモート求人の見極め方</Link>
              も合わせて確認しましょう。
            </p>
          </div>
        </section>

        <section className="mb-10">
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
          <h2 className="text-xl font-bold mb-3">場所に縛られない企業を無料で紹介</h2>
          <p className="text-blue-100 text-sm mb-4">リモート・ワーケーションの実態まで把握したIT特化型エージェントが、あなたの条件に合う企業を提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "フルリモートで働けるIT求人", href: "/purpose/remote-full/" },
              { name: "フレックスタイム求人の見極め方", href: "/purpose/flextime/" },
              { name: "リモートワークのリアル", href: "/knowledge/remote-work/" },
              { name: "ワークライフバランス重視の転職", href: "/purpose/wlb/" },
              { name: "福利厚生が充実した企業へ転職", href: "/purpose/benefits/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
