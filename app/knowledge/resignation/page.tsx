import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "エンジニアの退職の進め方【引き止め対策・引き継ぎガイド】",
  description:
    "エンジニアの退職の進め方を徹底解説。退職意思の伝え方、引き止め対策、引き継ぎのコツ、退職までのスケジュールを30代・40代エンジニア向けに紹介します。",
};

const faqs = [
  {
    q: "退職は何ヶ月前に伝えるべき？",
    a: "最低1ヶ月前、理想は2ヶ月前です。就業規則を確認し、規定の期間を守りましょう。エンジニアの場合、プロジェクトの節目やリリース後のタイミングで伝えると、引き継ぎがスムーズです。",
  },
  {
    q: "引き止められたらどうすべき？",
    a: "退職意思が固いなら、丁重にお断りしましょう。「年収を上げる」「ポジションを変える」など条件提示があっても、残留する場合は人間関係が悪化するリスクがあります。転職先が決まっている場合は「次の会社と入社日を合意済み」と伝えれば効果的です。",
  },
  {
    q: "退職理由は正直に伝えるべき？",
    a: "不満をストレートに伝える必要はありません。「新しいチャレンジをしたい」「キャリアの方向性を変えたい」など、前向きな理由を伝えましょう。会社の批判は円満退職を妨げます。",
  },
  {
    q: "引き継ぎはどこまですべき？",
    a: "担当システムのドキュメント整備、コードの説明、運用手順書の作成を最低限行いましょう。後任者がいる場合は直接レクチャーの時間を設けます。ただし過剰な引き継ぎ要求は断っても問題ありません。",
  },
  {
    q: "有給休暇の消化は可能？",
    a: "労働者の権利として消化可能です。退職日から逆算して有給消化のスケジュールを立てましょう。「引き継ぎが終わってから有給に入る」が一般的な流れです。",
  },
  {
    q: "退職代行サービスは使うべき？",
    a: "パワハラなどで直接退職を伝えることが困難な場合は有効な選択肢です。ただし円満退職を目指す場合は自分で伝える方が望ましいです。IT業界は狭いため、将来の人脈維持の観点からも直接伝えることをおすすめします。",
  },
];

export default function ResignationPage() {
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
        title="エンジニアの退職の進め方【引き止め対策・引き継ぎガイド】"
        description="エンジニアの退職の進め方を徹底解説。退職意思の伝え方、引き止め対策、引き継ぎのコツ、退職までのスケジュールを30代・40代エンジニア向けに紹介します。"
        url="/knowledge/resignation/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "退職の進め方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニアの退職の進め方【引き止め対策・引き継ぎガイド】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | エンジニアの円満退職完全マニュアル
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            転職先が決まったら、次に待っているのが現職の退職手続きです。エンジニアの退職には、コードの引き継ぎ、ドキュメント整備、プロジェクトのタイミング調整など、独自の課題があります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、エンジニアが円満に退職するためのステップ、引き止め対策、引き継ぎのコツを解説します。
          </p>
        </section>

        {/* 退職スケジュール */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">退職までのスケジュール（2ヶ月計画）</h2>
          <div className="space-y-4">
            {[
              { period: "8週間前", title: "退職意思を上司に伝える", desc: "直属の上司に1対1で退職意思を伝えます。メールではなく対面（またはビデオ通話）で伝えましょう。転職先の社名は伝えなくても問題ありません。" },
              { period: "6週間前", title: "引き継ぎ計画を作成", desc: "担当しているプロジェクト、システム、タスクの一覧を作成し、引き継ぎスケジュールを上司と合意します。" },
              { period: "4〜5週間前", title: "引き継ぎ作業を実施", desc: "コードのドキュメント整備、運用手順書の作成、後任者へのレクチャーを行います。" },
              { period: "2〜3週間前", title: "退職届の提出", desc: "人事部に正式な退職届を提出します。退職届は就業規則に従った書式で提出しましょう。" },
              { period: "最終週", title: "有給消化・最終出社", desc: "引き継ぎが完了したら有給消化に入ります。最終出社日にはPCやセキュリティカードの返却、アカウントの整理を行います。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center min-w-[80px] h-8 rounded-full bg-blue-600 text-white font-bold text-xs shrink-0">
                  {item.period}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 引き止め対策 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある引き止めパターンと対処法</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">「年収を上げるから残ってほしい」</h3>
              <p className="text-sm text-slate-600">
                カウンターオファーで残留した場合、その後の人事評価や人間関係に影響するリスクがあります。転職理由が年収だけでなければ、丁重にお断りしましょう。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">「プロジェクトが終わるまで待ってほしい」</h3>
              <p className="text-sm text-slate-600">
                転職先の入社日が決まっている場合は「入社日を変更できない」と明確に伝えましょう。プロジェクトの終了を待っていたら、いつまでも退職できません。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">「異動で解決できないか」</h3>
              <p className="text-sm text-slate-600">
                異動の提案は一見魅力的に見えますが、実現するまでに時間がかかり、希望通りのポジションになる保証もありません。転職先で実現したいことが明確なら、お断りしましょう。
              </p>
            </div>
          </div>
        </section>

        {/* エンジニア特有の引き継ぎ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア特有の引き継ぎチェックリスト</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">-</span>
                <span>担当システムのアーキテクチャ図・設計ドキュメントを最新化</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">-</span>
                <span>運用手順書（デプロイ手順、障害対応フロー、監視設定）の整備</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">-</span>
                <span>未解決のバグ・技術負債の一覧と優先度の共有</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">-</span>
                <span>外部サービスのアカウント・APIキーの引き継ぎ（個人アカウントの切り替え）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">-</span>
                <span>CI/CDパイプラインの設定と担当者の変更</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-0.5">-</span>
                <span>GitHubリポジトリのオーナー権限の移譲</span>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">転職先が決まっていなくても相談OK</h2>
          <p className="text-blue-100 text-sm mb-4">
            退職のタイミングや転職の進め方に迷ったら、まずはIT特化型エージェントに無料で相談しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "転職スケジュール計画表", href: "/knowledge/timeline/" },
              { name: "年収交渉テクニック", href: "/knowledge/salary-negotiation/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
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
