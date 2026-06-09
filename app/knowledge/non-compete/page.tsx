import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "競業避止義務とは｜エンジニアの転職で知るべき6判断基準";
const PAGE_DESC =
  "30代・40代エンジニア向けに競業避止義務を解説。在職中と退職後の違い、経済産業省が示す有効性の6判断基準、サインしても必ず有効とは限らない理由、違反のリスク、弁護士に相談すべきケースを出典付きで整理します。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：サイン＝必ず有効ではない" },
  { id: "what", label: "競業避止義務とは" },
  { id: "in-out", label: "在職中と退職後の違い" },
  { id: "criteria", label: "有効性を判断する6つの基準（経産省）" },
  { id: "engineer", label: "エンジニアが有効と判断されやすい理由" },
  { id: "risk", label: "違反した場合のリスク" },
  { id: "action", label: "誓約書を求められたときの対応" },
  { id: "middle", label: "30代・40代が気をつける点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const criteria = [
  {
    no: "①",
    title: "守るべき企業の利益があるか",
    desc: "営業秘密や、それに準じて保護に値する独自のノウハウ・顧客情報など、企業が現に守るべき正当な利益が存在することが前提です。守るべき利益がなければ、競業避止特約は有効とは認められにくくなります。",
  },
  {
    no: "②",
    title: "従業員の地位",
    desc: "退職者がその利益に関与する立場（重要な技術や秘密にアクセスできる地位）にあったかが問われます。秘密に触れない一般的な業務だった場合は、制限の必要性が低いと評価されやすくなります。",
  },
  {
    no: "③",
    title: "地域的な限定があるか",
    desc: "競業を禁止する地域が合理的な範囲に限定されているかです。事業の性質に照らして広すぎる地域制限は、有効性を弱める方向に働きます。",
  },
  {
    no: "④",
    title: "競業避止義務の存続期間",
    desc: "禁止する期間が合理的か（一般に長すぎる期間は不利に評価される）が問われます。期間の妥当性は、守るべき利益の内容との兼ね合いで判断されます。",
  },
  {
    no: "⑤",
    title: "禁止される競業行為の範囲",
    desc: "禁止される職種・業務・行為の範囲が、必要な限度にとどまっているかです。あらゆる同業他社への転職を一律に禁じるような広範な制限は、有効性が認められにくくなります。",
  },
  {
    no: "⑥",
    title: "代償措置の有無",
    desc: "競業を制限することへの見返り（代償措置）が講じられているかです。在職中の高い待遇や退職後の手当など、制限に見合う代償があるかが重視されます。代償措置が乏しい場合、有効性は弱まります。",
  },
];

const faqs = [
  {
    q: "誓約書にサインしたら、競業避止義務は必ず有効になりますか？",
    a: "いいえ。署名した誓約書や就業規則に競業避止条項があっても、その内容が必ず有効とは限りません。退職後の競業避止義務は、従業員の職業選択の自由を制限するため、合理的な範囲を超える部分は無効と判断されることがあります。裁判では、経済産業省が整理した6つの観点（守るべき企業利益・従業員の地位・地域・期間・禁止範囲・代償措置）などを総合して有効性が判断されます。署名の有無だけで結論は決まりません。",
  },
  {
    q: "在職中も競業避止義務はありますか？",
    a: "在職中は、特約の有無にかかわらず、労働契約上の誠実義務として競業避止義務を負うのが一般的です。問題になりやすいのは退職後で、退職後の競業避止は就業規則や個別の特約がある場合に限って生じます。在職中と退職後を区別して考える必要があります。",
  },
  {
    q: "競業避止義務に違反するとどうなりますか？",
    a: "特約が有効と判断される場合、競業行為の差止請求、損害賠償請求、退職金の不支給・返還条項の適用といったリスクがあります。ただし、これらが認められるかは特約の有効性しだいです。違反が疑われる、または請求を受けた場合は、自己判断せず弁護士に相談してください。",
  },
  {
    q: "同業他社への転職はすべて禁止されるのですか？",
    a: "いいえ。あらゆる同業他社への転職を一律に禁じるような広範な制限は、職業選択の自由を過度に制約するため、有効と認められにくい傾向があります。禁止される範囲が必要な限度にとどまっているか（基準⑤）が有効性の判断要素になります。",
  },
  {
    q: "転職先で前職の技術や情報を使うのは問題ですか？",
    a: "競業避止義務とは別に、不正競争防止法上の「営業秘密」の持ち出し・使用は法的な問題になり得ます。前職で得た秘密情報やソースコードを無断で持ち出したり利用したりするのは避けてください。何が営業秘密にあたるかの判断は難しいため、不安があれば弁護士に確認するのが安全です。",
  },
  {
    q: "誓約書へのサインは拒否できますか？",
    a: "退職時に競業避止の誓約書への署名を求められても、署名は法的に強制されるものではありません。内容に納得できない場合は、署名前に内容を確認し、必要なら弁護士に相談できます。ただし対応は個別の状況により異なるため、トラブルを避けるためにも専門家の助言を得ることをおすすめします。",
  },
];

export default function NonCompetePage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/knowledge/non-compete/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "競業避止義務とは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          競業避止義務とは｜エンジニアの転職で知るべき6判断基準
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 30代・40代エンジニアのための競業避止義務の基礎知識
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          転職時に「競業避止義務」の誓約書を求められ、不安になるエンジニアは少なくありません。本記事では、競業避止義務の在職中と退職後の違い、経済産業省が整理した有効性の6つの判断基準、署名しても必ず有効とは限らない理由、違反のリスク、弁護士に相談すべきケースを、出典とともに正確に整理します。正確性が問われるテーマのため、最終的な判断は必ず専門家にご相談ください。
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-5 mb-6">
          <p className="text-sm text-amber-900 leading-relaxed">
            <span className="font-bold">免責事項：</span>本記事は競業避止義務に関する一般的な情報の整理であり、特定の事案に対する法的助言ではありません。競業避止条項の有効性や違反の可否は個別の事情により異なり、最終的には裁判所が判断します。具体的なケースについては、必ず弁護士などの専門家にご相談ください。
          </p>
        </div>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "経済産業省「人材を通じた技術流出に関する調査研究」参考資料5（競業避止義務契約の有効性についての判断基準）",
            "民法・不正競争防止法等の一般的な解説",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：サイン＝必ず有効ではない</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              競業避止の誓約書に署名しても、<strong>その内容が必ず有効になるわけではありません</strong>。退職後の競業避止義務は職業選択の自由を制限するため、合理的な範囲を超える部分は無効と判断されることがあります。有効性は、経済産業省が整理した6つの観点などを総合して、最終的に裁判所が判断します。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>・在職中は当然に、退職後は特約がある場合に義務が生じる</li>
              <li>・署名の有無だけで有効・無効は決まらない</li>
              <li>・不安があれば自己判断せず、必ず弁護士に相談する</li>
            </ul>
          </div>
        </section>

        <section id="what" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">競業避止義務とは</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            競業避止義務とは、在職中または退職後に、勤務先と競合する事業を行ったり、競合他社へ転職したりしないことを求める義務です。企業が営業秘密や独自のノウハウを守るために、就業規則や誓約書で定めることがあります。
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            一方で、退職後の競業避止は、憲法が保障する職業選択の自由（働く場所や仕事を選ぶ自由）を制限する性質を持ちます。そのため、企業側の利益と退職者の不利益のバランスが取れているかが厳しく問われ、合理性を欠く制限は無効と判断されることがあります。
          </p>
        </section>

        <section id="in-out" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">在職中と退職後の違い</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">区分</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">義務の発生</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">ポイント</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { k: "在職中", b: "特約の有無を問わず生じるのが一般的", p: "労働契約上の誠実義務として、勤務先と競合する活動は原則控える必要がある" },
                  { k: "退職後", b: "就業規則・個別の特約がある場合に限る", p: "特約があっても、合理的範囲を超える部分は無効と判断されることがある" },
                ].map((row) => (
                  <tr key={row.k} className="hover:bg-slate-50">
                    <td className="px-4 py-3 border border-slate-200 font-medium">{row.k}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.b}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            転職で問題になりやすいのは退職後の競業避止です。特約がない場合、退職後に競合他社へ移ること自体は原則として自由です。
          </p>
        </section>

        <section id="criteria" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">有効性を判断する6つの基準（経産省）</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            経済産業省「人材を通じた技術流出に関する調査研究」の参考資料5では、これまでの裁判例を踏まえ、競業避止義務契約の有効性を判断する観点が整理されています。実際の裁判では、次の要素などを<strong>総合的に</strong>考慮して有効・無効が判断されます（一つを満たせば有効、という性質のものではありません）。
          </p>
          <div className="space-y-4">
            {criteria.map((c) => (
              <div key={c.no} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="text-blue-600 font-bold text-lg shrink-0">{c.no}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{c.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-xs leading-relaxed mt-4">
            出典：経済産業省「人材を通じた技術流出に関する調査研究」参考資料5（競業避止義務契約の有効性についての判断基準）。上記は同資料および裁判例の一般的な整理であり、表現は要約しています。
          </p>
        </section>

        <section id="engineer" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニアが有効と判断されやすい理由</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            エンジニアは、システムの設計情報や独自アルゴリズム、未公開のソースコード、顧客固有の技術情報など、企業が守るべき技術秘密にアクセスする立場にあることが多い職種です。基準①（守るべき企業利益）や基準②（従業員の地位）の観点から、こうした秘密に深く関与していた場合は、競業避止特約の必要性が認められやすい傾向があります。
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            もっとも、これは「エンジニアなら競業避止が常に有効」という意味ではありません。地域・期間・禁止範囲が広すぎたり、代償措置がなかったりすれば、有効性は弱まります。あくまで6つの基準を総合した判断であり、職種だけで結論は出ません。
          </p>
        </section>

        <section id="risk" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">違反した場合のリスク</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            競業避止特約が有効と判断される場合、違反には次のようなリスクが伴います。いずれも特約の有効性が前提であり、特約自体が無効なら請求は認められません。
          </p>
          <div className="space-y-3">
            {[
              { t: "競業行為の差止請求", d: "競合他社での就労や競業事業を止めるよう求められることがあります。" },
              { t: "損害賠償請求", d: "企業が損害を被ったとして、賠償を求められる可能性があります。" },
              { t: "退職金の不支給・返還", d: "退職金規程に競業避止違反時の不支給・返還条項がある場合、それが適用されることがあります。" },
            ].map((r) => (
              <div key={r.t} className="bg-red-50 rounded-lg p-5">
                <h3 className="font-bold text-red-800 mb-1">{r.t}</h3>
                <p className="text-sm text-red-700 leading-relaxed">{r.d}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            あわせて、競業避止とは別に、不正競争防止法上の「営業秘密」の持ち出し・使用は独立した法的問題になり得ます。前職のソースコードや秘密情報を持ち出さない・使わないことは大前提です。
          </p>
        </section>

        <section id="action" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">誓約書を求められたときの対応</h2>
          <ul className="space-y-2 mb-4">
            {[
              "署名前に、禁止される期間・地域・業務範囲・代償措置の有無を確認する",
              "内容に納得できない場合、署名は法的に強制されるものではないと理解しておく",
              "前職の営業秘密・ソースコードは持ち出さない、転職先で使わない",
              "競合への転職を予定している、または請求を受けたら、早めに弁護士へ相談する",
            ].map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="text-blue-600 font-bold shrink-0">✓</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-amber-800 leading-relaxed">
              競業避止義務の有効性や違反の可否は、契約内容と個別事情を踏まえた専門的な判断が必要です。本記事の一般論だけで自己判断せず、不安がある場合は<strong>必ず弁護士に相談</strong>してください。労働問題に詳しい弁護士や、各地の弁護士会の法律相談窓口が利用できます。
            </p>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代が気をつける点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              30代・40代は、技術リードやマネジメントとして重要な技術情報・顧客情報に深く関わっていることが多く、競業避止が問題になりやすい世代です。
            </p>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">同業・同領域への転職前に契約を確認する</h3>
              <p>
                キャリアを積むほど、転職先が前職と同じ業界・同じ技術領域になりやすくなります。在職中の就業規則や、過去に署名した誓約書に競業避止条項がないかを、転職活動の早い段階で確認しておきましょう。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">代償措置の有無を冷静に見る</h3>
              <p>
                代償措置（基準⑥）がない競業避止は有効性が弱まる傾向があります。ただし有効・無効の最終判断は裁判所が行うため、「代償がないから無効に違いない」と自己判断するのは危険です。退職交渉とあわせて、必要なら専門家に確認しましょう。退職の進め方は<Link href="/knowledge/resignation/" className="text-blue-600 hover:underline">退職の伝え方</Link>も参考になります。
              </p>
            </div>
            <p>
              年代別の転職事情は<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職</Link>もご覧ください。
            </p>
          </div>
        </section>

        <section id="faq" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800">
                  <span>Q. {faq.q}</span>
                  <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">判断に迷ったら専門家へ</h2>
          <p className="text-slate-200 text-sm mb-4">
            競業避止義務の有効性は個別事情で大きく変わります。同業への転職や誓約書の内容に不安があれば、労働問題に詳しい弁護士に相談してください。本記事は一般的な情報の整理であり、法的助言ではありません。
          </p>
          <Link
            href="/knowledge/resignation/"
            className="inline-block bg-white text-slate-800 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors"
          >
            退職の伝え方を見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "退職の伝え方", href: "/knowledge/resignation/" },
              { name: "転職活動のタイムライン", href: "/knowledge/timeline/" },
              { name: "40代の転職", href: "/age/40s/" },
              { name: "内定の比較・見極め方", href: "/knowledge/offer-compare/" },
              { name: "年収交渉の進め方", href: "/knowledge/salary-negotiation/" },
              { name: "IT転職エージェントの選び方", href: "/knowledge/how-to-choose/" },
            ].map((item) => (
              <Link
                key={item.href}
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
