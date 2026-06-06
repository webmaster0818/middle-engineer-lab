import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "エンジニアの燃え尽き症候群と転職判断 | ミドルエンジニア転職ラボ",
  description:
    "エンジニアの燃え尽き症候群（バーンアウト）の原因と対処法を解説。転職すべきタイミングの判断基準と、燃え尽きからの回復方法を30代・40代向けに紹介します。",
};

const faqs = [
  {
    q: "燃え尽き症候群とうつ病の違いは何ですか？",
    a: "燃え尽き症候群は主に仕事に起因するもので、休暇を取ると回復する傾向があります。うつ病は仕事以外の生活全般に影響し、休んでも回復しにくい場合があります。症状が重い場合は心療内科を受診しましょう。自己判断は危険です。",
  },
  {
    q: "燃え尽きの状態で転職活動をしても良いですか？",
    a: "可能であれば少し休息を取ってから活動を始めることをおすすめします。疲弊した状態では面接でのパフォーマンスが下がり、判断力も鈍ります。ただし、環境が原因の場合は転職エージェントに登録だけしておき、良い求人が出たら検討する形がベストです。",
  },
  {
    q: "残業が多すぎるのは燃え尽きの原因になりますか？",
    a: "はい、最大の原因の一つです。IT業界では月の残業時間が45時間を超えると燃え尽きリスクが急上昇するという調査結果があります。恒常的な長時間労働は環境を変えるべきサインです。",
  },
  {
    q: "燃え尽きを繰り返さない転職先の選び方は？",
    a: "「残業時間の実態」「有給取得率」「開発チームの裁量」「上司のマネジメントスタイル」を面接や口コミサイトで確認しましょう。転職エージェントなら企業の内部情報を教えてもらえるため、入社後のミスマッチを防げます。",
  },
  {
    q: "40代でも燃え尽きからのキャリアチェンジは可能ですか？",
    a: "十分可能です。40代のエンジニアは豊富な経験があるため、SREやテクニカルPMなど経験を活かせる新しい役割にシフトできます。大切なのは「何から逃げるか」ではなく「何に向かうか」を明確にすることです。",
  },
  {
    q: "まずどこに相談すればいいですか？",
    a: "メンタル面が辛い場合は産業医やカウンセラーに、キャリア面の相談ならIT特化型の転職エージェントに相談しましょう。レバテックキャリアやGeeklyでは「今すぐ転職する予定はない」という相談も受け付けています。",
  },
];

export default function BurnoutPage() {
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
        title="エンジニアの燃え尽き症候群と転職判断 | ミドルエンジニア転職ラボ"
        description="エンジニアの燃え尽き症候群（バーンアウト）の原因と対処法を解説。転職すべきタイミングの判断基準と、燃え尽きからの回復方法を30代・40代向けに紹介します。"
        url="/knowledge/burnout/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "燃え尽き症候群と転職判断" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニアの燃え尽き症候群と転職判断
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | バーンアウトのサインと回復法
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            「コードを書くのが辛い」「月曜が来るのが憂鬱」「以前は楽しかった技術に興味が持てない」。こうした症状が続いているなら、それは燃え尽き症候群（バーンアウト）のサインかもしれません。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、エンジニアの燃え尽き症候群の原因と対処法、そして「転職すべきかどうか」の判断基準を解説します。
          </p>
        </section>

        {/* 燃え尽きのサイン */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">燃え尽き症候群の6つのサイン</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "慢性的な疲労感", desc: "十分に睡眠を取っても疲れが取れない。週末も回復できず、月曜日がつらい。" },
              { num: "2", title: "仕事への無関心", desc: "以前は興味があった技術やプロジェクトに関心が持てなくなる。新しいことを学ぶ意欲が消えた。" },
              { num: "3", title: "パフォーマンスの低下", desc: "コードの品質が下がる、集中力が続かない、ミスが増える。以前なら半日で終わるタスクに丸一日かかる。" },
              { num: "4", title: "シニカルな態度", desc: "同僚やプロジェクトに対して皮肉っぽくなる。「どうせ変わらない」という無力感。" },
              { num: "5", title: "身体症状", desc: "頭痛、胃腸の不調、不眠、肩こりなど身体に症状が出始める。" },
              { num: "6", title: "プライベートへの影響", desc: "趣味を楽しめなくなる、家族との時間に集中できない。仕事のことが常に頭から離れない。" },
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

        {/* 原因分析 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニアが燃え尽きる主な原因</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">原因</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">具体例</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">対処法</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">長時間労働</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">月残業60時間超、デスマーチ</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">上司への相談、環境の見直し</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">技術的な停滞</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">レガシーコードの保守のみ</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">社内異動、技術チャレンジの提案</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">評価のミスマッチ</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">頑張りが年収に反映されない</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">市場価値の確認、転職活動</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">人間関係</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">上司やチームとの不和</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">人事への相談、部署異動</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">オンコール負荷</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">深夜の障害対応が頻発</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">ローテーションの見直し</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 転職すべき判断基準 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職すべきか判断する5つの基準</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 原因が「環境」にある場合は転職を検討</h3>
              <p className="text-sm text-blue-700">長時間労働、評価制度、技術的な環境など、個人の努力では変えられない問題が原因なら転職が有効です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 半年以上改善されない場合</h3>
              <p className="text-sm text-blue-700">上司への相談や部署異動を試みても半年以上改善が見られない場合は、環境を変えることを検討しましょう。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 身体症状が出ている場合は早急に行動</h3>
              <p className="text-sm text-blue-700">不眠、頭痛、胃腸の不調が続く場合は心身の健康を最優先に。まず医療機関を受診し、休職や転職を検討しましょう。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. キャリアの成長が止まっている場合</h3>
              <p className="text-sm text-blue-700">1年以上新しいスキルや経験を得られていないなら、市場価値が下がり続けます。環境を変えて成長を取り戻しましょう。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. 「逃げの転職」と「攻めの転職」を区別する</h3>
              <p className="text-sm text-blue-700">「この環境が嫌だから辞める」だけでは同じ失敗を繰り返す可能性があります。「次に何をしたいか」を明確にしてから動きましょう。</p>
            </div>
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
          <h2 className="text-xl font-bold mb-3">キャリアの悩みをプロに相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、今すぐ転職しなくてもキャリア相談が可能。あなたの状況に合った最適なアドバイスをもらえます。
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
              { name: "ワークライフバランス重視の転職", href: "/knowledge/work-life-balance/" },
              { name: "転職を後悔しないためのチェックリスト", href: "/knowledge/regret/" },
              { name: "転職のタイムライン", href: "/knowledge/timeline/" },
              { name: "キャリアプラン設計", href: "/knowledge/career-plan/" },
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
