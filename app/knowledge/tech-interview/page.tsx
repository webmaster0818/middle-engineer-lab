import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "エンジニア転職の技術面接対策【よく聞かれる質問と回答例】| ミドルエンジニア転職ラボ",
  description:
    "エンジニア転職の技術面接でよく聞かれる質問と回答例を徹底解説。コーディングテスト、システム設計、行動面接の対策方法を30代・40代エンジニア向けに紹介します。",
};

const faqs = [
  {
    q: "技術面接ではどんな質問がされますか？",
    a: "大きく分けて(1)技術的な知識を問う質問（言語・フレームワーク・設計パターン）、(2)過去のプロジェクト経験を深掘りする質問、(3)コーディングテスト・ライブコーディング、(4)システム設計の質問の4種類です。企業によってウェイトは異なりますが、30代以上は(2)と(4)の比重が大きい傾向にあります。",
  },
  {
    q: "コーディングテストの対策はどうすればいいですか？",
    a: "LeetCodeやAtCoderで基本的なアルゴリズム（ソート、探索、グラフ、動的計画法）を練習するのが王道です。30代以上のエンジニアが受けるコーディングテストは難易度が極端に高いものは少なく、基礎的な問題が中心です。1日1問のペースで1〜2ヶ月続ければ十分な対策になります。",
  },
  {
    q: "システム設計面接の対策方法は？",
    a: "「System Design Interview」の書籍やGitHub上の「system-design-primer」を活用しましょう。SNSのタイムライン設計、URLの短縮サービス設計、チャットシステム設計などの典型問題を練習し、要件定義→アーキテクチャ設計→スケーラビリティの考慮という流れで説明できるようにしておきましょう。",
  },
  {
    q: "面接で「前職の退職理由」をどう答えるべきですか？",
    a: "ネガティブな理由（人間関係、待遇不満）を直接言うのは避け、前向きな表現に変換しましょう。「技術的な成長の機会を求めて」「より大きな裁量でプロダクト開発に携わりたい」「自分のスキルを最大限に活かせる環境を探している」など、志望動機と一貫性のある回答が好印象です。",
  },
  {
    q: "面接でのポートフォリオの見せ方は？",
    a: "GitHubのリポジトリURLを職務経歴書に記載し、面接ではプロジェクトの技術選定理由、工夫したポイント、苦労した点と解決策を簡潔に説明しましょう。コードの品質（テスト、CI/CD、README）も評価対象です。数より質を重視し、1〜2個の完成度の高いプロジェクトがあれば十分です。",
  },
  {
    q: "オンライン面接で気をつけるポイントは？",
    a: "安定したネット回線、静かな環境、適切な照明を準備しましょう。カメラ目線を意識し、画面共有でのコーディングテストに備えてIDEの設定も事前に確認。音声トラブルに備えて有線イヤホンやヘッドセットの使用がおすすめです。",
  },
];

export default function TechInterviewPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ" },
          { name: "技術面接対策" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニア転職の技術面接対策【よく聞かれる質問と回答例】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | 技術面接の全パターンと具体的な対策法
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            エンジニアの転職面接は、一般的な転職面接とは異なり、技術力を直接評価するプロセスが含まれます。コーディングテスト、システム設計、技術的なディスカッションなど、事前の準備が内定獲得率を大きく左右します。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、30代・40代エンジニアの技術面接でよく聞かれる質問パターンと、具体的な回答例・対策方法を解説します。
          </p>
        </section>

        {/* 面接の種類 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術面接の4つのパターン</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. コーディングテスト / ライブコーディング</h3>
              <p className="text-sm text-blue-700 mb-3">
                アルゴリズム問題をその場でコーディングする形式。LeetCodeのEasy〜Medium程度が一般的。30代以上では、コードの可読性や設計力も重視されます。
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-xs font-medium text-slate-700 mb-1">よく出る題材:</p>
                <p className="text-xs text-slate-600">配列操作、文字列処理、ハッシュマップ、二分探索、スタック/キュー、木構造の探索</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. システム設計面接</h3>
              <p className="text-sm text-blue-700 mb-3">
                大規模システムの設計を議論する形式。要件定義→アーキテクチャ設計→トレードオフの検討という流れで進む。35歳以上のシニアポジションで重視される。
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-xs font-medium text-slate-700 mb-1">よく出る題材:</p>
                <p className="text-xs text-slate-600">URL短縮サービス、ニュースフィード、チャットシステム、ECサイト、検索エンジンの設計</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 技術ディスカッション</h3>
              <p className="text-sm text-blue-700 mb-3">
                過去のプロジェクト経験を深掘りし、技術的な判断力を評価する形式。「なぜその技術を選んだか」「どんな課題があり、どう解決したか」を具体的に聞かれる。
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-xs font-medium text-slate-700 mb-1">よく聞かれる質問:</p>
                <p className="text-xs text-slate-600">技術選定の理由、設計上のトレードオフ、パフォーマンス改善の経験、障害対応の経験</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 行動面接（Behavioral Interview）</h3>
              <p className="text-sm text-blue-700 mb-3">
                「過去にこんな状況ではどう対処しましたか？」という質問で、問題解決力やチームワークを評価する形式。STAR法（Situation, Task, Action, Result）で回答するのが定石。
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-xs font-medium text-slate-700 mb-1">よく聞かれる質問:</p>
                <p className="text-xs text-slate-600">チーム内の意見対立の解決、厳しい締め切りへの対応、技術的な失敗からの学び</p>
              </div>
            </div>
          </div>
        </section>

        {/* 頻出質問と回答例 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">頻出質問と回答のポイント</h2>
          <div className="space-y-4">
            {[
              {
                q: "あなたの強みとなる技術領域は何ですか？",
                point: "得意技術を1〜2つに絞り、具体的なプロジェクト経験と成果を交えて回答する。「何でもできます」は逆効果。専門性の深さをアピールすること。",
              },
              {
                q: "直近のプロジェクトで最も技術的に難しかった課題は？",
                point: "課題の背景→自分のアプローチ→結果の3段階で説明する。技術的な深さと問題解決プロセスの両方をアピールできる回答が理想。",
              },
              {
                q: "なぜ当社を志望しましたか？",
                point: "企業の技術スタック、プロダクト、技術ブログを事前にリサーチし、具体的な共感ポイントを述べる。「御社の技術力が高いから」だけでは不十分。",
              },
              {
                q: "5年後のキャリアビジョンを教えてください",
                point: "テックリード、アーキテクト、EMなど具体的な方向性を示す。その企業でどう実現するかを関連づけて話すのがポイント。",
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">Q. {item.q}</h3>
                <p className="text-sm text-slate-600">{item.point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 対策スケジュール */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術面接対策のスケジュール（2ヶ月プラン）</h2>
          <div className="space-y-4">
            {[
              { period: "1〜2週目", title: "基礎固め", desc: "データ構造・アルゴリズムの復習。LeetCode Easyを1日1問。職務経歴の棚卸し。" },
              { period: "3〜4週目", title: "応用問題", desc: "LeetCode Medium中心。システム設計の書籍・資料を読み始める。志望企業の技術ブログを調査。" },
              { period: "5〜6週目", title: "実践練習", desc: "模擬面接（友人やエージェント）。システム設計問題の練習。行動面接の回答をSTAR法で準備。" },
              { period: "7〜8週目", title: "仕上げ", desc: "苦手分野の重点復習。企業ごとの面接傾向を調査。体調・環境の最終確認。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full shrink-0">
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
          <h2 className="text-xl font-bold mb-3">面接対策もエージェントがサポート</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、企業ごとの面接傾向や技術質問のシミュレーションまでサポートしてくれます。
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
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "ポートフォリオ作成ガイド", href: "/knowledge/portfolio/" },
              { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
              { name: "30代エンジニアの転職ガイド", href: "/age/30s/" },
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
