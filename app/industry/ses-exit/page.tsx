import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "SESから脱出！転職成功ガイド【おすすめエージェント】| ミドルエンジニア転職ラボ",
  description:
    "SESから自社開発・社内SEへの転職方法を徹底解説。SES脱出の具体的なステップ、必要な準備、おすすめの転職エージェントを紹介。30代・40代エンジニアのキャリアアップを支援します。",
};

const faqs = [
  {
    q: "SESから転職するベストなタイミングは？",
    a: "プロジェクトの切れ目（契約更新のタイミング）が最もスムーズです。ただし、在職中に転職活動を始めるのが鉄則で、内定をもらってから退職の意思を伝えましょう。エージェントに登録して情報収集を始めるのは今すぐでも問題ありません。",
  },
  {
    q: "SES経験しかなくても自社開発企業に転職できますか？",
    a: "可能です。SESでの開発経験は立派な実務経験として評価されます。重要なのは「何の技術を使って、どんなシステムを、どんな役割で開発したか」を具体的に説明できることです。ポートフォリオやGitHubの活動実績があるとさらに有利です。",
  },
  {
    q: "SESを辞めたい理由として面接でどう伝えるべきですか？",
    a: "「SESが嫌だから」ではなく、「プロダクトに一貫して関わりたい」「技術選定から携わりたい」「チームで継続的に改善する開発がしたい」など、前向きな理由に変換して伝えましょう。ネガティブな転職理由は面接でマイナス評価につながります。",
  },
  {
    q: "SESからの転職で年収は上がりますか？",
    a: "SESでの年収が市場価格より低く抑えられているケースが多いため、転職で年収UPする確率は高いです。IT特化型エージェント経由の場合、SESからの転職で平均50〜100万円の年収UPが実現しています。",
  },
  {
    q: "SES脱出におすすめの転職エージェントは？",
    a: "レバテックキャリアはWeb系自社開発企業の求人が豊富で、SESからの転職支援実績が多いです。マイナビIT AGENTは社内SE求人に強く、安定した環境を求める方におすすめです。まずは2〜3社に登録して相談しましょう。",
  },
  {
    q: "SESの経験年数が短くても転職できますか？",
    a: "開発経験が1年以上あれば転職は十分可能です。ただし経験が浅い場合は、ポートフォリオの準備やプログラミングスキルのブラッシュアップを並行して行いましょう。ワークポートは比較的若手やスキルアップ途上のエンジニアにも対応してくれます。",
  },
];

export default function SesExitPage() {
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
          { name: "業界別ガイド" },
          { name: "SESからの転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          SESから脱出！転職成功ガイド【おすすめエージェント】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | SESからの脱出方法と成功戦略を徹底解説
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            「客先常駐でスキルが伸びない」「案件ガチャで将来が不安」「正当な評価を受けていない」。SESで働くエンジニアの多くが抱える悩みです。
          </p>
          <p className="text-slate-600 leading-relaxed">
            しかし、SESでの経験は自社開発企業やWeb系企業への転職で十分に武器になります。本記事では、SESから脱出するための具体的なステップと、おすすめの転職エージェントを詳しく解説します。
          </p>
        </section>

        {/* SESの課題 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SESで抱えがちな課題</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "スキルの停滞", desc: "案件に依存するため、技術選択の自由がなく、レガシー技術に固定されやすい。" },
              { title: "評価の不透明さ", desc: "現場評価が自社に正しく伝わらず、スキルに見合わない年収になりがち。" },
              { title: "キャリアの不確実性", desc: "次の案件が分からない「案件ガチャ」で、中長期のキャリア設計が難しい。" },
              { title: "帰属意識の薄さ", desc: "客先で働くため自社への帰属意識が持ちにくく、チームの一体感を感じにくい。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 脱出先の選択肢 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SESからの主な転職先</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Web系自社開発企業</h3>
              <p className="text-sm text-blue-700">
                自社プロダクトの開発に一貫して携われる。技術選定の自由度が高く、モダンな技術を使える環境が多い。リモートワーク対応の企業も多数。レバテックキャリア、Geeklyが強い領域。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">社内SE（事業会社の情報システム部門）</h3>
              <p className="text-sm text-blue-700">
                社内システムの企画・運用を担当。残業が少なく、ワークライフバランスを重視する方におすすめ。大手企業の安定した環境で働ける。マイナビIT AGENTが強い領域。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">SaaS企業</h3>
              <p className="text-sm text-blue-700">
                BtoB SaaSの開発チームは、安定した収益基盤の上でプロダクト改善に注力できる。SIerでの業務システム知識がSaaS開発で活きるケースも多い。レバテックキャリアが強い領域。
              </p>
            </div>
          </div>
        </section>

        {/* 脱出ステップ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SES脱出の具体的ステップ</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "現在のスキルを棚卸しする", desc: "使用技術、開発規模、担当工程、成果物を整理。SESでの経験を具体的に言語化する。" },
              { step: "2", title: "不足スキルを補強する", desc: "モダンなフレームワークやクラウドの学習。GitHubにコードを公開して技術力をアピールできる状態にする。" },
              { step: "3", title: "転職エージェントに登録する", desc: "IT特化型エージェント2〜3社に登録。SESからの転職実績が豊富なアドバイザーに相談する。" },
              { step: "4", title: "書類・面接対策を行う", desc: "職務経歴書をWeb系企業向けに最適化。「なぜSESを辞めたいか」ではなく「何を実現したいか」を語れるようにする。" },
              { step: "5", title: "内定獲得後に退職手続き", desc: "内定をもらってから退職の意思を伝える。SES契約の更新タイミングに合わせるとスムーズ。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.step}
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
          <h2 className="text-xl font-bold mb-3">SESからの脱出、今日から始めよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに無料登録して、自社開発企業の求人をチェックしてみませんか？
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
              { name: "SIerからWeb系に転職するには", href: "/industry/sier-to-web/" },
              { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "ポートフォリオ作成ガイド", href: "/knowledge/portfolio/" },
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
