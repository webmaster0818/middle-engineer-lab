import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "退職代行の選び方【3類型と非弁行為・SES客先常駐の注意点】",
  description:
    "退職代行サービスの運営主体3類型（民間業者・労働組合・弁護士）の違いと、非弁行為のリスクを正確に解説。SES・客先常駐特有の注意点や使う前のチェックリストを30代・40代エンジニア向けに整理します。",
};

const toc = [
  { id: "conclusion", label: "結論：運営主体で「できること」が決まる" },
  { id: "types", label: "退職代行の3類型と対応範囲" },
  { id: "hiben", label: "非弁行為のリスク（弁護士法72条）" },
  { id: "ses", label: "SES・客先常駐特有の注意点" },
  { id: "fee", label: "料金の考え方" },
  { id: "judge", label: "そもそも代行を使うべきかの判断基準" },
  { id: "check", label: "使う前のチェックリスト" },
  { id: "middle", label: "30代・40代視点：次の転職に響くか" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const faqs = [
  {
    q: "退職代行は民間業者・労働組合・弁護士のどれを選ぶべきですか？",
    a: "「会社に何を求めるか」で選ぶのが基本です。退職の意思を伝えてもらうだけでよいなら民間業者でも足りることがありますが、有給消化や退職日、未払い賃金などの『交渉』が必要なら、民間業者では対応できないのが原則です。交渉を伴う場合は、団体交渉ができる労働組合運営のサービスか、交渉・損害賠償対応まで担える弁護士運営のサービスが選択肢になります。SES・客先常駐で契約や損害賠償が絡みそうな場合は、弁護士型が安全です。なお、運営主体の表示と実態が異なるケースもあるため、契約前に運営主体と対応範囲を必ず確認してください。個別の事案は専門家にご相談ください。",
  },
  {
    q: "非弁行為とは何ですか？退職代行は違法ではないのですか？",
    a: "弁護士法72条は、弁護士でない者が報酬を得る目的で法律事務（交渉や紛争解決など）を業として行うことを原則禁止しています。これに反する行為は一般に『非弁行為』と呼ばれます。退職の意思を会社へ『伝える』だけであれば、ただちに法律事務にあたるとは限りませんが、有給や退職日、賃金などの『条件交渉』を弁護士でない民間業者が行うと、非弁行為にあたるおそれがあります。『労働組合と提携している』と称する民間業者でも、実際にどの主体が交渉するのかが重要です。利用前に、交渉が必要かどうかと、その交渉を誰が行うのかを確認してください。判断に迷う場合は弁護士に相談しましょう。",
  },
  {
    q: "SES・客先常駐でも退職代行は使えますか？",
    a: "使えますが、注意点が増えます。SES・客先常駐の場合、雇用主（自社）と就業先（客先）が分かれており、プロジェクト途中の離脱が客先との契約に影響したり、損害賠償をちらつかせて引き止められたりするケースが指摘されます。こうした契約・賠償が絡む論点は『交渉』にあたるため、交渉権限のない民間業者では対応しきれません。トラブルの可能性がある場合は、交渉や損害賠償対応まで担える弁護士運営のサービスを選ぶほうが安全です。なお、退職そのものを理由とした損害賠償が容易に認められるとは限りませんが、個別の事案は必ず専門家に確認してください。",
  },
  {
    q: "退職代行の料金はどのくらいかかりますか？",
    a: "料金は運営主体やサービス内容によって幅があり、本記事では特定の金額を断定しません。一般的な傾向として、対応範囲が広く法的な対応まで含むほど費用も高くなりやすいとされています。安さだけで選ぶと、いざ交渉が必要になったときに対応できず、結局やり直しになることもあります。『何を依頼できて、追加費用はどう発生するのか』を契約前に明確にし、自分のケースで本当に必要な対応範囲と費用のバランスで判断してください。",
  },
  {
    q: "退職代行を使うと次の転職に不利になりますか？",
    a: "退職代行を使った事実が次の転職先に自動的に伝わるわけではなく、選考で直接不利になるとは限りません。一方で、円満退職に比べると前職の人脈や良好な関係は残りにくく、IT業界のように再会が多い世界では、その点がトレードオフになります。ハラスメントや心身の負担で直接伝えることが難しいなど、利用に合理性がある状況なら有力な選択肢です。可能であれば自分で伝えることが望ましいとされますが、状況に応じて使い分けてください。退職を自分で進める場合の交渉術は関連記事を参考にしてください。",
  },
  {
    q: "退職代行を使う前にやっておくことはありますか？",
    a: "貸与PCや社員証、書類など会社からの貸与物の返却準備、私物の引き取り、有給休暇の残日数の確認、離職票など退職後に必要な書類の受け取り方法の整理をしておくとスムーズです。代行を使うと会社と直接やり取りしづらくなるため、これらを事前に把握しておくことが大切です。特にエンジニアは貸与端末やアカウント周りの整理が漏れやすいので注意してください。退職後の保険・年金の手続きは、退職後の手続きの記事を参照してください。",
  },
];

export default function RetirementAgencyPage() {
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
        title="退職代行の選び方【3類型と非弁行為・SES客先常駐の注意点】"
        description="退職代行サービスの運営主体3類型（民間業者・労働組合・弁護士）の違いと、非弁行為のリスクを正確に解説。SES・客先常駐特有の注意点や使う前のチェックリストを30代・40代エンジニア向けに整理します。"
        url="/knowledge/retirement-agency/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "退職代行の選び方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          退職代行の選び方【3類型と非弁行為・SES客先常駐の注意点】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 運営主体3類型・非弁行為・SES特有の注意点
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-4">
            ハラスメントや強い引き止めで、退職を自分で言い出すのが難しい——そんなときの選択肢が退職代行です。ただし退職代行は<strong>運営主体によって「できること」が大きく違い</strong>、選び方を誤ると必要な交渉ができなかったり、法的に問題のあるサービスを利用してしまったりするおそれがあります。本記事では、民間業者・労働組合・弁護士の3類型の違いと、非弁行為のリスク、SES・客先常駐特有の注意点を整理します。自分で退職を進める場合は
            <Link href="/knowledge/smooth-resignation/" className="text-petrol hover:underline">円満退職の交渉術</Link>
            を参照してください。
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            <strong>本記事は一般的な情報の解説であり、法的助言ではありません。</strong>退職代行の利用やトラブルの取り扱いは個別の事情によって異なります。具体的な判断は、弁護士・労働相談窓口などの専門家に必ずご相談ください。
          </p>
        </section>

        <DataNote surveyedAt="2026年6月" sources={["弁護士法72条（非弁行為に関する一般的な規定）"]} />

        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-sm text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：運営主体で「できること」が決まる</h2>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・<strong>民間業者</strong>＝退職の意思を「伝える」のみ。条件交渉はできないのが原則。</li>
              <li>・<strong>労働組合</strong>＝団体交渉として、有給や退職日などの「交渉」が可能。</li>
              <li>・<strong>弁護士</strong>＝交渉に加え、損害賠償・未払い賃金などの法的対応まで可能。</li>
              <li>・<strong>SES・客先常駐</strong>で契約・賠償が絡みそうなら、弁護士型が安全。</li>
            </ul>
          </div>
        </section>

        <section id="types" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">退職代行の3類型と対応範囲</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            退職代行は「誰が運営しているか」で対応できる範囲が変わります。自分のケースで交渉が必要かどうかを基準に選びましょう。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg">
              <thead>
                <tr className="bg-slate-50 text-slate-700">
                  <th className="text-left px-4 py-3 border-b border-slate-200">運営主体</th>
                  <th className="text-left px-4 py-3 border-b border-slate-200">できること</th>
                  <th className="text-left px-4 py-3 border-b border-slate-200">できないこと</th>
                  <th className="text-left px-4 py-3 border-b border-slate-200">向いているケース</th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-top">
                  <td className="px-4 py-3 border-b border-slate-100 font-medium text-slate-800">① 民間業者</td>
                  <td className="px-4 py-3 border-b border-slate-100 text-slate-600">退職の意思を会社へ伝達する</td>
                  <td className="px-4 py-3 border-b border-slate-100 text-slate-600">有給・退職日・賃金などの条件交渉（行うと非弁行為のおそれ）</td>
                  <td className="px-4 py-3 border-b border-slate-100 text-slate-600">争点がなく、退職の意思を伝えるだけでよいケース</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 border-b border-slate-100 font-medium text-slate-800">② 労働組合</td>
                  <td className="px-4 py-3 border-b border-slate-100 text-slate-600">団体交渉として有給・退職日などを交渉する</td>
                  <td className="px-4 py-3 border-b border-slate-100 text-slate-600">訴訟など弁護士に限られる法的対応</td>
                  <td className="px-4 py-3 border-b border-slate-100 text-slate-600">有給消化や退職日などの交渉が必要なケース</td>
                </tr>
                <tr className="align-top">
                  <td className="px-4 py-3 font-medium text-slate-800">③ 弁護士</td>
                  <td className="px-4 py-3 text-slate-600">交渉に加え、損害賠償・未払い賃金請求などの法的対応</td>
                  <td className="px-4 py-3 text-slate-600">（対応範囲は広いが、費用は高くなりやすい）</td>
                  <td className="px-4 py-3 text-slate-600">損害賠償の脅し・トラブル・SES客先常駐など争点が大きいケース</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3">※ 同じサービスでも実際の運営主体や提携形態はさまざまです。契約前に運営主体と対応範囲を必ず確認してください。</p>
        </section>

        <section id="hiben" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">非弁行為のリスク（弁護士法72条）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            退職代行を選ぶうえで最も重要なのが、非弁行為のリスクです。弁護士法72条は、弁護士でない者が報酬を得る目的で法律事務（交渉や紛争解決など）を業として行うことを原則として禁止しています。これに反する行為は一般に「非弁行為」と呼ばれます。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">「伝える」と「交渉する」は別物</h3>
              <p className="text-sm text-slate-600">退職の意思を会社へ伝えるだけなら、ただちに法律事務にあたるとは限りません。しかし、有給・退職日・未払い賃金などの条件を弁護士でない民間業者が「交渉」すると、非弁行為にあたるおそれがあります。自分のケースで交渉が必要かを見極めることが第一歩です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">「労組提携」をうたう民間業者への注意</h3>
              <p className="text-sm text-slate-600">「労働組合と提携しているから交渉できる」と説明する民間業者もありますが、重要なのは<strong>実際にどの主体が交渉を行うのか</strong>です。形式上だけの提携で、実態として民間業者が交渉していれば問題になり得ます。誰が交渉の当事者になるのかを契約前に確認しましょう。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">迷ったら交渉権限のある主体を選ぶ</h3>
              <p className="text-sm text-slate-600">交渉が発生しそうな場合は、はじめから団体交渉ができる労働組合運営、または弁護士運営を選んでおくほうが安全です。後から交渉が必要になって民間業者では対応できず、やり直しになるリスクを避けられます。</p>
            </div>
          </div>
        </section>

        <section id="ses" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SES・客先常駐特有の注意点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            SES・客先常駐で働くエンジニアの退職には、自社開発の正社員にはない論点があります。雇用主（自社）と就業先（客先）が分かれているため、退職が客先との契約に影響しやすく、引き止めの圧力も強くなりがちです。
          </p>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">・</span><span><strong>プロジェクト途中の離脱</strong>：客先との契約期間の途中で抜けると、自社が客先対応を迫られ、引き止めが強くなることがあります。</span></li>
            <li className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">・</span><span><strong>損害賠償の脅し</strong>：「途中で抜けると損害賠償だ」と言われるケースが報告されます。退職を理由とした賠償が容易に認められるとは限りませんが、争点になりやすい論点です。</span></li>
            <li className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">・</span><span><strong>常駐先の私物・貸与物</strong>：常駐先に置いた私物や、客先・自社双方の貸与端末・入館証の返却が複雑になりがちです。</span></li>
          </ul>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mt-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              これらは「交渉」や「法的対応」が絡む論点のため、争点が大きい場合は<strong>弁護士運営のサービスが安全</strong>です。SESからの脱出そのものを検討している場合は、<Link href="/industry/ses-exit/" className="text-petrol hover:underline">SESからの脱出ガイド</Link>もあわせて参照してください。
            </p>
          </div>
        </section>

        <section id="fee" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">料金の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            料金は運営主体やサービス内容によって幅があります。本記事では特定の金額を断定しませんが、考え方の軸を整理します。
          </p>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">・</span><span>対応範囲が広く、交渉や法的対応まで含むほど費用は高くなりやすい傾向があります。</span></li>
            <li className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">・</span><span>安さだけで選ぶと、交渉が必要になったときに対応できず、結局やり直しになることがあります。</span></li>
            <li className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">・</span><span>「基本料金に何が含まれ、追加費用はどう発生するか」を契約前に明確にしましょう。</span></li>
          </ul>
        </section>

        <section id="judge" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">そもそも代行を使うべきかの判断基準</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            退職代行は便利な選択肢ですが、すべての退職に必要なわけではありません。費用もかかり、前職との関係が残りにくくなるトレードオフもあります。まずは「自分のケースで本当に代行が必要か」を切り分けてから検討しましょう。判断の目安を整理します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-2">代行が有力なケース</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-green-700 font-bold mt-0.5">・</span><span>ハラスメントなどで、直接伝えること自体が心身の負担になる</span></li>
                <li className="flex items-start gap-2"><span className="text-green-700 font-bold mt-0.5">・</span><span>強い引き止めや恫喝で、自力での退職が進まない</span></li>
                <li className="flex items-start gap-2"><span className="text-green-700 font-bold mt-0.5">・</span><span>有給・退職日・賃金などで会社と争点があり、交渉が必要</span></li>
                <li className="flex items-start gap-2"><span className="text-green-700 font-bold mt-0.5">・</span><span>SES・客先常駐で損害賠償などをちらつかせられている</span></li>
              </ul>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-800 mb-2">まず自力を検討したいケース</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">・</span><span>切り出すのが気まずい・緊張する、という心理的ハードルだけが理由</span></li>
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">・</span><span>争点がなく、退職の意思を伝えれば手続きが進みそう</span></li>
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">・</span><span>前職の人脈・評判を今後のキャリアで活かしたい</span></li>
                <li className="flex items-start gap-2"><span className="text-slate-500 font-bold mt-0.5">・</span><span>引き継ぎを丁寧に残して円満に去りたい</span></li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            切り出しや引き止めへの不安が中心なら、第一声の例文や引き止めの返し方を押さえるだけで自力で乗り越えられることも多いです。具体的な進め方は<Link href="/knowledge/smooth-resignation/" className="text-petrol hover:underline">円満退職の交渉術</Link>を参照してください。それでも難しいと判断したら、運営主体を見極めたうえで代行を使い分けるのが現実的です。
          </p>
        </section>

        <section id="check" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">使う前のチェックリスト</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <ul className="space-y-3 text-sm text-slate-600">
              {[
                "運営主体（民間業者・労働組合・弁護士）と、自分のケースで交渉が必要かを確認した",
                "有給休暇の残日数を確認した（消化や買い取りの相談に備える）",
                "離職票・源泉徴収票など退職後に必要な書類の受け取り方法を整理した",
                "貸与PC・社員証・書類など、会社・客先からの貸与物の返却方法を確認した",
                "常駐先に置いた私物の引き取り方法を確認した（SES・客先常駐の場合）",
                "料金に含まれる範囲と追加費用の発生条件を確認した",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">✓</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 有給や退職後の手続きは<Link href="/knowledge/paid-leave/" className="text-petrol hover:underline">有給消化の法律論</Link>・<Link href="/knowledge/after-resignation-procedures/" className="text-petrol hover:underline">退職後の手続き</Link>も参照。</p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点：次の転職に響くか</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ミドル層が退職代行を検討するときに気になるのが、「次の転職や業界内の評判に響かないか」という点です。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">選考に直接響くとは限らない</h3>
              <p className="text-sm text-slate-600">退職代行を使った事実が次の転職先に自動的に伝わるわけではなく、選考で直接不利になるとは限りません。利用に合理的な理由（ハラスメント・心身の負担など）があるなら、有力な選択肢です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">人脈・評判とのトレードオフ</h3>
              <p className="text-sm text-slate-600">一方で、円満退職に比べると前職の良好な関係は残りにくくなります。IT業界は再会が多く、元同僚がリファラル元や取引先になることもあるため、その点はトレードオフとして理解しておきましょう。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">まず自分で伝えられないかを検討</h3>
              <p className="text-sm text-slate-600">可能であれば自分で伝えるのが望ましいとされます。引き止めや切り出しに不安があるだけなら、<Link href="/knowledge/smooth-resignation/" className="text-petrol hover:underline">円満退職の交渉術</Link>で対処できる場合もあります。それでも難しい状況なら、運営主体を見極めて代行を使い分けてください。</p>
            </div>
          </div>
        </section>

        <section id="faq" className="mb-10 scroll-mt-20">
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
          <p className="text-xs text-slate-500 mt-3">
            ※ 上記は一般的な情報の説明であり、個別の事案への助言ではありません。非弁行為や損害賠償など法的な判断が必要な場合は、必ず弁護士などの専門家にご相談ください。
          </p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">まずは次のキャリアの相談を</h2>
          <p className="text-blue-100 text-sm mb-4">
            退職を考えるきっかけが職場環境なら、IT特化型エージェントに次の選択肢を無料で相談できます。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "円満退職の交渉術", href: "/knowledge/smooth-resignation/" },
              { name: "退職の伝え方（切り出し方の例文集）", href: "/knowledge/resignation/" },
              { name: "有給消化の法律論", href: "/knowledge/paid-leave/" },
              { name: "退職後の手続き（健保・年金・失業給付）", href: "/knowledge/after-resignation-procedures/" },
              { name: "引き継ぎドキュメントの作り方", href: "/knowledge/handover/" },
              { name: "SESからの脱出ガイド", href: "/industry/ses-exit/" },
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
