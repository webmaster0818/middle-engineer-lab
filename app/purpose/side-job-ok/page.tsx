import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/purpose/side-job-ok/" },
  title: "副業OKのエンジニア求人の見極め方【2026年版】",
  description:
    "副業OKのエンジニア求人を「許可制・届出制・完全自由」の3段階で解説。就業規則の落とし穴、知財・労働時間通算の注意点、30-40代の現実的な副業設計まで。",
};

const faqs = [
  {
    q: "「副業OK」と「フリーランス（業務委託）」は何が違う？",
    a: "副業OKは、正社員として本業を持ちながら就業時間外に別の収入源を持つことを会社が認める制度です。雇用は本業の会社に残ります。一方フリーランス（業務委託）は雇用関係そのものを持たず、複数のクライアントと請負・準委任契約を結ぶ働き方です。社会保険・労働法の保護・収入の安定性が大きく異なります。「まず副業から始めて、軌道に乗ったら独立」という段階設計をする30-40代も多く、当サイトの個人開発の経験を資産化する戦略やフリーランスと正社員の比較も合わせてご確認ください。",
  },
  {
    q: "副業の収入は住民税で会社にバレる？",
    a: "副業分の所得が増えると住民税額が上がり、本業の給与から天引き（特別徴収）される場合に経理が気づくことはあり得ます。確定申告の際に住民税を「自分で納付（普通徴収）」に切り替える方法が一般に知られていますが、自治体や所得区分により普通徴収にできないケースもあります。そもそも副業禁止規定がある会社で隠れて行うとトラブルの原因になるため、就業規則の確認と必要な手続き（届出）を優先すべきです。",
  },
  {
    q: "副業禁止は違法ではないの？",
    a: "労働時間外の私生活は本来自由であり、厚生労働省は2018年1月にモデル就業規則を改定し、副業・兼業を原則認める方向に転換しました（厚生労働省「副業・兼業の促進に関するガイドライン」）。ただし、これは民間企業に副業を強制するものではなく、企業が合理的な理由（本業への支障、競業、情報漏えい、信用毀損など）で制限・禁止すること自体は許容されます。公務員は法律で原則禁止です。",
  },
  {
    q: "エンジニアの副業で特に注意すべき点は？",
    a: "（1）競業避止：本業と競合する受託開発は契約違反になり得ます。（2）知的財産の帰属：本業の業務時間・設備・ノウハウを使って作ったものの権利が会社に帰属する可能性。個人開発のコードの権利関係は事前に確認を。（3）労働時間の通算：本業と副業の労働時間は通算され、長時間労働による健康リスク・割増賃金の論点が生じます。（4）秘密保持義務：本業で得た非公開情報を副業先で使うことは厳禁です。",
  },
  {
    q: "副業で現実的にどのくらい稼げる？",
    a: "案件単価は時給・稼働により大きく変動するため、当サイトでは具体的な月収を断定しません。週末や平日夜の限られた稼働で本業並みの収入を得るのは容易ではなく、家庭を持つ30-40代は「稼ぐ」より「スキルの幅を広げる」「将来の独立に向けた実績づくり」を目的に始めるケースが現実的です。労働時間の通算と健康管理を最優先に、無理のない範囲で設計しましょう。",
  },
  {
    q: "副業OK求人はどのくらいある？",
    a: "マイナビ転職で「ITエンジニア×副業OK」の求人を確認したところ922件でした（2026年6月閲覧時点・件数は変動します）。求人検索サービスにより集計条件や母数が異なるため、複数媒体で横断的に確認するのが確実です。",
  },
];

export default function SideJobOkPage() {
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
        title="副業OKのエンジニア求人の見極め方【2026年版】"
        description="副業OKのエンジニア求人を3段階で解説。就業規則の落とし穴、知財・労働時間通算の注意点、30-40代の現実的な副業設計まで。"
        url="/purpose/side-job-ok/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "目的別ガイド", href: "/purpose/" },
          { name: "副業OK求人の見極め方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          副業OKのエンジニア求人の見極め方
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 「副業OK」の3段階を理解して選ぶ完全ガイド</p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "マイナビ転職（求人件数・閲覧時点）",
            "厚生労働省 副業・兼業の促進に関するガイドライン",
            "一般社団法人日本経済団体連合会 副業・兼業に関するアンケート調査結果（2022年10月）",
          ]}
        />

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：「副業OK」は3段階に分けて読む</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            転職サイトで「副業OK」と書かれていても、その中身は企業によって大きく異なります。多くの比較サイトは「副業OK求人◯件」と件数を並べるだけですが、実際に副業を始められるかどうかは<strong>許可のレベル</strong>で決まります。本記事は「許可制・届出制・完全自由」の3段階で求人を読み解き、入社後に「実は実質できなかった」を防ぐための見極め方を、30-40代エンジニアの現実に即して解説します。
          </p>
          <div className="bg-petrol-soft border border-slate-200 rounded-lg p-6">
            <p className="text-sm font-medium text-slate-700 mb-2">こんな人におすすめ</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 本業を持ちながら個人開発や受託で収入の柱を増やしたい</li>
              <li>- 将来の独立を見据えて副業から実績を積みたい30-40代</li>
              <li>- 「副業OK」と書かれた求人の実態を見抜きたい</li>
              <li>- 知財・労働時間・住民税など制度面のリスクを正しく知りたい</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">目次</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-petrol-deep">
            <li>「副業OK」3段階の定義</li>
            <li>制度の背景（公的データ）</li>
            <li>求人の見極めポイント</li>
            <li>エンジニア特有の落とし穴</li>
            <li>30-40代ミドルの副業設計</li>
            <li>よくある質問</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. 「副業OK」3段階の定義</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">段階</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">内容</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">実態・注意</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "許可制", desc: "事前に申請し、会社の承認を得て初めて副業可能", note: "競業・利益相反でないか審査される。承認されないこともあり「OK」表記でも実質ハードルあり" },
                  { type: "届出制", desc: "始める際に届け出れば原則可。会社は内容を把握", note: "労働時間通算・健康管理のための把握が目的。許可制より柔軟" },
                  { type: "完全自由", desc: "申請・届出不要で自由に副業できる", note: "ベンチャー・自社開発に多い。ただし秘密保持・競業避止の一般義務は残る" },
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
            ※ 求人票の「副業OK」がどの段階を指すかは明記されないことが多く、面接での確認が不可欠です。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. 制度の背景（公的データ）</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            副業を取り巻く環境は、この数年で大きく変わりました。厚生労働省は<strong>2018年1月にモデル就業規則を改定</strong>し、それまで「許可なく他の会社等の業務に従事しないこと」としていた規定を、副業・兼業を原則認める方向へ転換しました（厚生労働省「副業・兼業の促進に関するガイドライン」）。
          </p>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            企業側の実態として、日本経済団体連合会（経団連）の調査では<strong>副業・兼業を認める企業が70.5%（「認めている」53.1%＋「認める予定」17.5%）</strong>に達しています（経団連「副業・兼業に関するアンケート調査結果」2022年10月公表）。同調査では従業員5,000人以上の大企業で容認割合が8割を超えるとされ、規模が大きい企業ほど制度整備が進んでいる傾向が示されています。
          </p>
          <p className="text-xs text-slate-500">
            ※ これらは権威データ（公的機関・経済団体の公表値）です。一方、特定の求人検索サービスが公表する副業案件件数の一部は当サイトで取得確認ができなかったため、本記事では断定していません。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3. 求人の見極めポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "求人票の「副業OK」がどの段階か面接で確認", desc: "「許可制ですか、届出制ですか」とストレートに聞きます。回答が曖昧、または『個別判断』という場合は実質許可制と考えておくのが安全です。" },
              { num: "2", title: "就業規則の制限条項を確認", desc: "内定時や入社時に就業規則を確認し、競業避止・秘密保持・利益相反の条項がどこまで及ぶかを把握します。「副業OK」でも、エンジニアの受託開発が競業と判断され実質不可、というケースがあります。" },
              { num: "3", title: "労働時間管理の運用を確認", desc: "本業と副業の労働時間は法律上通算されます。会社が副業の時間をどう把握・管理するか（自己申告制など）を確認すると、その会社の本気度が見えます。" },
              { num: "4", title: "成果物・知財の帰属ルールを確認", desc: "業務時間外・私物PCで作ったものの権利が個人に帰属するか。個人開発・OSS活動を続けたい人は特に重要です。" },
              { num: "5", title: "「副業OK」表記と実態の乖離を口コミで補完", desc: "求人票だけでなく、社員口コミや面接での雰囲気から、実際に副業している社員がいるかを探ります。制度はあっても利用者ゼロの会社もあります。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. エンジニア特有の落とし穴</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>競業避止：</strong>本業と同種のサービスを副業で受託・開発すると、競業避止義務違反となるリスクがあります。たとえば本業がSaaS企業で、副業で競合領域のシステムを請け負うのは典型的なNGパターンです。
            </p>
            <p>
              <strong>知的財産の帰属：</strong>本業の業務時間・設備・機密情報を一切使わずに作ったものでなければ、成果物の権利が会社に帰属する可能性があります。個人開発のコードやSaaSを資産にしたい人は、就業規則の職務発明・著作権規定を必ず確認してください。
            </p>
            <p>
              <strong>労働時間の通算：</strong>本業（例：週40時間）に副業を加えると、法定労働時間を超えた部分が時間外労働として扱われ得ます。家庭を持つ30-40代にとっては、収入よりも<strong>長時間労働による健康・家庭への影響</strong>が現実的な落とし穴です。
            </p>
            <p>
              <strong>秘密保持：</strong>本業で触れた非公開技術・顧客情報を副業先に持ち込むのは厳禁です。意図せずとも、設計判断にノウハウが反映されてしまうこともあるため、領域を明確に分けることが安全です。
            </p>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            個人開発を将来の独立や転職の武器にする具体的な進め方は、当サイトの
            <Link href="/knowledge/side-project/" className="text-petrol hover:underline">個人開発・サイドプロジェクトの活かし方</Link>
            で詳しく解説しています。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">5. 30-40代ミドルの副業設計</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            20代と違い、30-40代は家庭・育児・住宅ローンなど守るべきものが増える一方で、可処分時間は限られます。だからこそ副業は「稼ぐこと」だけを目的にすると消耗しがちです。現実的なのは、次の3つの目的のいずれかに絞ることです。
          </p>
          <ul className="space-y-2 text-sm text-slate-700 mb-3">
            <li>① <strong>スキルの幅出し：</strong>本業で使わない技術・領域に副業で触れ、市場価値を上げる</li>
            <li>② <strong>独立の助走：</strong>業務委託の実績・人脈を作り、将来のフリーランス転身に備える</li>
            <li>③ <strong>収入の分散：</strong>本業一本のリスクを下げ、リストラ・転職時の心理的余裕を作る</li>
          </ul>
          <p className="text-sm text-slate-700 leading-relaxed">
            いずれの場合も、労働時間の通算と健康管理を最優先にし、家庭の合意を取った上で「平日夜2時間・週末半日まで」など上限を決めるのが長続きのコツです。副業から雇用形態を変えていく選択肢を検討するなら、
            <Link href="/employment/contractor/" className="text-petrol hover:underline">業務委託（個人事業主）という働き方</Link>
            も合わせてご確認ください。
          </p>
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
          <h2 className="text-xl font-bold mb-3">副業OKの優良企業を無料で紹介</h2>
          <p className="text-blue-100 text-sm mb-4">副業制度の実態まで把握したIT特化型エージェントが、あなたの条件に合う企業を提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "個人開発・サイドプロジェクトの活かし方", href: "/knowledge/side-project/" },
              { name: "業務委託（個人事業主）という働き方", href: "/employment/contractor/" },
              { name: "フリーランスと正社員の比較", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "ワークライフバランス重視の転職", href: "/purpose/wlb/" },
              { name: "フレックスタイム求人の見極め方", href: "/purpose/flextime/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
