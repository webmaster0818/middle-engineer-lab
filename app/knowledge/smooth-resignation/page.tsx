import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/smooth-resignation/" },
  title: "円満退職の交渉術【切り出す順序・引き止め返し・難航打開】",
  description:
    "エンジニアの円満退職を実現する交渉術を例文付きで解説。直属上司への切り出し順序、カウンターオファーの返し方、後任不在や損害賠償の脅しへの打開策を30代・40代向けに整理しました。",
};

const toc = [
  { id: "conclusion", label: "結論：相談ではなく報告。順序と前向きな理由で決める" },
  { id: "law", label: "退職の法的な前提（民法627条・一般論）" },
  { id: "frame", label: "「相談」ではなく「報告」というフレーム" },
  { id: "order", label: "切り出す順序：直属上司が最初" },
  { id: "first-voice", label: "第一声の例文" },
  { id: "counter", label: "引き止め（カウンターオファー）の返し方" },
  { id: "hard", label: "難航ケースと打開策" },
  { id: "reason", label: "退職理由は前向きな個人的事情に" },
  { id: "engineer", label: "エンジニア特有：仕掛中開発と属人化" },
  { id: "timeline", label: "切り出しから退職までの時系列" },
  { id: "middle", label: "30代・40代視点：交渉の重みが違う" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const counters = [
  {
    q: "「年収を上げる」（カウンターオファー）",
    a: "年収提示で残留しても、不満の根本が金額でなければ再び転職を考えるケースや、一度退職を切り出した事実が評価に残るケースが指摘されています。金額が唯一の理由でなければ、感謝のうえで断ります。",
    script:
      "「ご評価いただき本当にありがとうございます。ただ今回は金額だけの問題ではなく、◯◯に取り組める環境を選んだ決断です。次の会社とは入社日まで合意済みのため、予定どおり進めさせてください。」",
  },
  {
    q: "「ポジション・役職を用意する」",
    a: "実現時期や内容が不確実なことが多く、約束が口頭にとどまると後から立ち消えになるリスクがあります。やりたいことが現職で本当に実現するのか、冷静に切り分けます。",
    script:
      "「お気持ちは大変ありがたいです。ただ私が挑戦したい◯◯は、現在の組織では構造的に難しいと判断しての決断でした。方向性は変わりませんので、退職の方向で進めさせてください。」",
  },
  {
    q: "「異動・チーム変更で解決できないか」",
    a: "希望のポジションになる保証がなく、時期も不透明なことが多いです。すでに次が決まっているなら、入社日の確定を理由に丁重に断ります。",
    script:
      "「ご提案ありがとうございます。ただ次の会社と入社日を確定しており、変更ができません。今回は退職という結論を変えるつもりはありませんので、引き継ぎに集中させてください。」",
  },
  {
    q: "「もう少し考えてから返事を」と保留される",
    a: "保留は引き止めの時間稼ぎになりがちです。意思が固いなら、考え直す前提に乗らず、退職日と引き継ぎの話へ前向きに切り替えます。",
    script:
      "「考え直すというより、すでに固めた結論のご報告です。お時間をいただくより、円滑な引き継ぎのために最終出社日のご相談を先に進めさせていただけますか。」",
  },
];

const hardCases = [
  {
    q: "後任がいないと言われる",
    a: "後任の確保は本来、会社側が対応する組織課題です。退職の意思とは切り離し、引き継ぎへの全面協力で応じます。ドキュメント整備とレクチャー計画を先に示すと、議論が「辞めるか否か」から「どう引き継ぐか」に移ります。",
    script:
      "「ご迷惑をおかけする点は承知しています。残りの期間でドキュメントを整え、後任の方が入っても困らない状態を最優先で作ります。後任の人選は私からも全面的に協力します。」",
  },
  {
    q: "繁忙期・リリース直前を理由に止められる",
    a: "繁忙期は常に存在し、それを待つと退職時期が定まりません。法律上の取り扱い（後述）を踏まえつつ、現実的な落とし所として「区切りのよいタイミングまで引き継ぎを厚くする」提案で歩み寄ります。",
    script:
      "「リリースへの影響を最小化したいので、◯月の山場を越えるところまでは引き継ぎを厚めに対応します。ただ入社日は確定しているため、最終出社は◯月◯日とさせてください。」",
  },
  {
    q: "「損害賠償を請求する」と脅される",
    a: "退職そのものを理由に労働者へ損害賠償を負わせることは、一般に容易ではないとされます。脅し文句に動揺せず、冷静に引き継ぎ協力の姿勢を示すのが基本です。実際に書面での請求や強い圧力を受けた場合は、自己判断せず専門家に相談してください。",
    script:
      "「ご心配をおかけしないよう、引き継ぎは責任を持って完了させます。賠償のお話については、私には判断しかねますので、必要であれば然るべき窓口を通じて確認させていただきます。」",
  },
  {
    q: "退職届を受け取ってもらえない",
    a: "口頭での申し出だけで進まない場合、書面を内容証明郵便などの記録が残る形で提出する方法があります。ただし円満退職を重視するなら、まずは人事部門を巻き込んで正規の手続きに乗せるのが穏当です。受理拒否が続く場合は労働相談窓口へ。",
    script:
      "「直属の上司にご相談しましたが手続きが進まないため、人事のご担当にも正式にご相談させてください。所定の書式があればご指示ください。」",
  },
];

const order = [
  { step: "1", title: "直属の上司", desc: "最初に伝えるのは必ず直属の上司。先に同僚・人事・他部署へ漏れると、上司の心証を損ね交渉が難しくなります。" },
  { step: "2", title: "上司との合意・調整", desc: "退職日と引き継ぎ方針を上司とすり合わせ。ここで時系列の大枠を握っておくと後がスムーズです。" },
  { step: "3", title: "人事・正式手続き", desc: "上司の了承後に人事へ。退職届の提出、社会保険・貸与品の手続き案内を受けます。" },
  { step: "4", title: "チーム・関係者への共有", desc: "上司と相談のうえ、共有のタイミングと範囲を決定。後任やステークホルダーへ引き継ぎを開始します。" },
];

const timeline = [
  { period: "2ヶ月前", title: "直属上司へ報告", desc: "1対1の場で口頭。退職先の社名は伝えなくてよい。法定2週間とは別に、実務目安として希望日の1.5〜2ヶ月前に切り出す人が多いとされます。" },
  { period: "6週間前", title: "退職日・引き継ぎ方針の合意", desc: "上司と最終出社日・有給消化の見通し・引き継ぎ範囲を合意。難航しそうなら早めに人事を巻き込みます。" },
  { period: "4〜5週間前", title: "引き継ぎ実施・退職届提出", desc: "ドキュメント整備とレクチャーを進めつつ、所定書式で退職届を提出します。" },
  { period: "最終週", title: "有給消化・最終出社", desc: "引き継ぎ完了後に有給消化へ。PC・カード返却、アカウント整理を済ませます。" },
];

const faqs = [
  {
    q: "退職は「相談」として伝えるべきですか？",
    a: "意思が固まっているなら「相談」ではなく「報告」として伝えるのが基本です。『相談したいことがあります』という入り方は、上司に『説得すれば翻意する余地がある』と受け取られ、引き止め交渉が長引く原因になります。日程調整の連絡だけは『ご相談が』としても構いませんが、本題の第一声は『◯月末で退職させていただきたくご報告に参りました』と結論から伝えましょう。退職を伝える際の例文全般は、退職の伝え方の記事も参考にしてください。",
  },
  {
    q: "退職は法律上、何日前に言えば良いのですか？",
    a: "期間の定めのない雇用契約では、民法627条1項により、労働者からの解約の申し入れの日から原則2週間を経過することで雇用契約は終了するとされています。一方、就業規則に『1ヶ月前までに申し出る』等の定めがあることも一般的です。法律上の2週間と、円満な引き継ぎのための実務目安（1.5〜2ヶ月前）は別物として考えてください。具体的なトラブルや、就業規則と民法の関係が問題になる場合は、自己判断せず弁護士や労働相談の窓口など専門家にご相談ください。",
  },
  {
    q: "カウンターオファーを受けたらどうすべきですか？",
    a: "意思が固いなら、感謝を述べたうえで丁重に断るのが基本です。条件提示で残留しても、不満の根本が解消されず再び転職を検討するケースや、一度退職を切り出した事実が社内評価に影響するケースが指摘されています。最も効くのは『次の会社と入社日を合意済み』という事実を伝えることです。残留を本気で検討する場合の判断軸は、カウンターオファーへの対応の記事を参照してください。",
  },
  {
    q: "「後任が決まるまで辞めさせない」と言われたら？",
    a: "後任の確保は基本的に会社側の組織課題であり、退職の意思とは切り離して考えて問題ありません。引き継ぎへの全面協力（ドキュメント整備・レクチャー・人選への協力）を示しつつ、入社日が確定していることを伝えると、議論が『辞めるか否か』から『どう引き継ぐか』へ移ります。それでも手続きが進まない場合は人事を巻き込み、なお解決しなければ労働相談窓口に相談してください。",
  },
  {
    q: "退職時に損害賠償を請求すると脅されました。応じる必要はありますか？",
    a: "退職そのものを理由として労働者へ損害賠償を負わせることは、一般に容易ではないとされています。脅し文句に動揺して退職を撤回する必要は通常ありません。ただし、実際に書面での請求や強い圧力を受けた場合、また競業避止や秘密保持に関わる事情がある場合は、状況により取り扱いが異なります。個別の事案は必ず弁護士などの専門家に相談してください。",
  },
  {
    q: "退職理由は正直に伝えるべきですか？",
    a: "不満をそのままぶつける必要はありません。『新しい技術領域に挑戦したい』『キャリアの方向性を変えたい』など、前向きで個人的な事情に整理して伝えるのが円満退職のコツです。会社批判は事実であっても引き止めの口実を与え、業界内の評判にも影響しかねません。具体的な転職先名を伝える義務もありません。",
  },
];

export default function SmoothResignationPage() {
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
        title="円満退職の交渉術【切り出す順序・引き止め返し・難航打開】"
        description="エンジニアの円満退職を実現する交渉術を例文付きで解説。直属上司への切り出し順序、カウンターオファーの返し方、後任不在や損害賠償の脅しへの打開策を30代・40代向けに整理しました。"
        url="/knowledge/smooth-resignation/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "円満退職の交渉術" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          円満退職の交渉術【切り出す順序・引き止め返し・難航打開】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 切り出す順序・カウンターオファー対応・難航ケースの打開策
        </p>

        {/* 直答box (P6-C2) */}
        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】円満退職の交渉、どう進めれば引き止めに揺らがない？</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 意思が固いなら「相談」ではなく「報告」として、直属上司から順に伝え、前向きな個人的理由で決めるのが基本です。</strong></p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・切り出す順序は直属上司が最初。同僚や他部署へ先に漏らさない</li><li>・カウンターオファーは感謝のうえで断る。「次の会社と入社日を合意済み」が最も効く</li><li>・損害賠償の脅しに動揺しない。書面請求など個別の事案は弁護士など専門家に相談する</li></ul>
          </div>
        </section>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-4">
            退職の「伝え方」は知っていても、いざ切り出すと引き止めや難航ケースで揺らいでしまう——これは30代・40代のエンジニアに特に多い悩みです。本記事は、退職を伝えた後の<strong>交渉術</strong>に絞って掘り下げます。切り出す順序、カウンターオファーの返し方、後任不在・繁忙期・損害賠償の脅しといった難航ケースの打開策を、例文付きで整理しました。退職そのものの切り出し方の例文集は
            <Link href="/knowledge/resignation/" className="text-petrol hover:underline">退職の伝え方</Link>
            、退職後の手続きは
            <Link href="/knowledge/after-resignation-procedures/" className="text-petrol hover:underline">退職後の手続き</Link>
            にまとめています。
          </p>
        </section>

        <DataNote surveyedAt="2026年6月" sources={["民法（退職に関する一般的な規定）"]} />

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
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：相談ではなく報告。順序と前向きな理由で決める</h2>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・意思が固いなら「相談」でなく<strong>「報告」</strong>として伝える。翻意の余地を見せない。</li>
              <li>・切り出す順序は<strong>直属上司が最初</strong>。先に同僚・人事へ漏らさない。</li>
              <li>・引き止めには<strong>「入社日を合意済み」</strong>という事実が最も効く。</li>
              <li>・後任不在・繁忙期・賠償の脅しは、<strong>退職の意思と切り離し引き継ぎ協力</strong>で打開する。</li>
            </ul>
          </div>
        </section>

        <section id="law" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">退職の法的な前提（民法627条・一般論）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            交渉で揺らがないためには、最低限の法的な前提を押さえておくと安心です。以下はあくまで一般論であり、実際の取り扱いは雇用契約・就業規則・個別事情によって異なります。<strong>具体的なトラブルや判断は、弁護士や労働相談の窓口など専門家に相談してください。</strong>
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">申し入れから「2週間」で終了（民法627条1項）</h3>
              <p className="text-sm text-slate-600">
                正社員のような期間の定めのない雇用契約では、民法627条1項により、労働者からの解約の申し入れの日から原則2週間を経過することで雇用契約は終了するとされています。つまり退職は「会社の許可制」ではなく、申し入れによって一定期間後に成立する、という考え方が基本です。「後任が決まるまで辞めさせない」といった引き止めに対し、心理的な拠り所になります。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">就業規則の「1ヶ月前」規定との関係</h3>
              <p className="text-sm text-slate-600">
                就業規則に「退職は1ヶ月前までに申し出る」等の定めがあることは一般的です。民法上の規定と就業規則の関係には解釈の分かれる論点もあるため、ここでは断定せず、まずは就業規則を確認し、規定の期間を尊重して伝えることをおすすめします。規定と実態が食い違ってトラブルになりそうな場合は、専門家に相談してください。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">法定2週間と「実務目安」は別物</h3>
              <p className="text-sm text-slate-600">
                法律上の2週間は、あくまで「申し入れから契約が終了するまで」の最短ラインの考え方です。一方、円満退職と丁寧な引き継ぎのためには、退職希望日の1.5〜2ヶ月前に切り出す人が多いとされます。この2つを混同すると、「2週間で辞められるから」と急いで関係を壊したり、逆に必要以上に長く拘束されたりします。交渉では両者を切り分けて考えましょう。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 本セクションは一般的な制度の解説であり、法的助言ではありません。個別の事案については、必ず弁護士・社会保険労務士・労働相談窓口などの専門家にご相談ください。
          </p>
        </section>

        <section id="frame" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">「相談」ではなく「報告」というフレーム</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            円満退職の交渉で最も差がつくのが、最初のフレーミングです。意思が固まっているのに「ご相談が」と切り出すと、上司は「説得すれば残ってくれる」という前提で会話を始めます。これがカウンターオファーや引き止め交渉を呼び込みます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-800 mb-2">NG：相談フレーム</h3>
              <p className="text-sm text-slate-600">「実はキャリアについて少し悩んでいて、ご相談したくて……」</p>
              <p className="text-xs text-slate-500 mt-2">→ 翻意の余地ありと受け取られ、引き止め交渉が長引く。</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-2">OK：報告フレーム</h3>
              <p className="text-sm text-slate-600">「◯月末をもって退職させていただきたく、ご報告に参りました。」</p>
              <p className="text-xs text-slate-500 mt-2">→ 結論を先に置くことで、議論が引き継ぎへ向かう。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            注意点として、日程調整の一報だけは「少しご相談が」と柔らかくして構いません。問題なのは<strong>本題の第一声</strong>を相談調にしてしまうことです。結論ファーストで報告し、その後に感謝と引き継ぎの姿勢を添えるのが鉄則です。
          </p>
        </section>

        <section id="order" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">切り出す順序：直属上司が最初</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            誰に・どの順で伝えるかは、円満度を大きく左右します。順序を誤ると、それだけで「不義理」と受け取られかねません。
          </p>
          <div className="space-y-4">
            {order.map((item) => (
              <div key={item.step} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="first-voice" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">第一声の例文</h2>
          <div className="space-y-5">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">① 面談を依頼するメッセージ</h3>
              <p className="text-sm text-slate-600 bg-slate-50 rounded p-3">「お疲れさまです。少しご相談したいことがあり、近いうちに15分ほどお時間をいただけないでしょうか。1対1でお話しできるとありがたいです。」</p>
              <p className="text-xs text-slate-500 mt-2">※ 用件は「退職」と書かず、内容は対面/ビデオ通話で。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">② 報告フレームの第一声</h3>
              <p className="text-sm text-slate-600 bg-slate-50 rounded p-3">「お時間ありがとうございます。突然のご報告で恐縮ですが、◯月末をもって退職させていただきたく、ご報告に参りました。これまで大変お世話になり、感謝しています。」</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">③ 意思の固さと引き継ぎ姿勢を同時に示す</h3>
              <p className="text-sm text-slate-600 bg-slate-50 rounded p-3">「次の環境とは入社日まで合意済みで、決断は固めています。残りの期間は、担当システムの引き継ぎを最優先で進めますので、進め方をご相談させてください。」</p>
            </div>
          </div>
        </section>

        <section id="counter" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">引き止め（カウンターオファー）の返し方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            条件提示で残留するかどうかを本気で検討する場合の判断軸は、
            <Link href="/knowledge/counter-offer/" className="text-petrol hover:underline">カウンターオファーへの対応</Link>
            にまとめています。ここでは「断る」と決めた前提での返し方を例文化します。
          </p>
          <div className="space-y-4">
            {counters.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{item.q}</h3>
                <p className="text-sm text-slate-600 mb-2">{item.a}</p>
                <p className="text-sm text-slate-700 bg-petrol-soft rounded p-3">返し方：{item.script}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="hard" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">難航ケースと打開策</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            円満を狙っても、相手の事情で交渉が難航することがあります。共通する打開の型は「退職の意思と問題を切り離し、引き継ぎ協力に話を寄せる」ことです。
          </p>
          <div className="space-y-4">
            {hardCases.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{item.q}</h3>
                <p className="text-sm text-slate-600 mb-2">{item.a}</p>
                <p className="text-sm text-slate-700 bg-petrol-soft rounded p-3">対応例：{item.script}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            ハラスメントを伴う強い引き止めや、心身の負担で直接の交渉が難しい場合は、第三者に間に入ってもらう選択肢もあります。運営主体ごとの違い（民間業者・労働組合・弁護士）と、SES・客先常駐特有の注意点は
            <Link href="/knowledge/retirement-agency/" className="text-petrol hover:underline">退職代行の選び方</Link>
            で解説しています。
          </p>
        </section>

        <section id="reason" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">退職理由は前向きな個人的事情に</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            退職理由は、引き止めの口実を与えないために「会社が解決できない、前向きで個人的な事情」に整理するのが鉄則です。改善提案で潰せる不満を語ると、それがそのままカウンターオファーの材料になります。
          </p>
          <div className="space-y-3">
            <div className="bg-slate-50 rounded p-3 text-sm text-slate-600"><strong>NG：</strong>「評価制度に納得できない」「レガシーな環境に限界を感じる」→ 制度改定や異動を提案され、断りにくくなる。</div>
            <div className="bg-slate-50 rounded p-3 text-sm text-slate-600"><strong>OK：</strong>「今後は◯◯領域に深く関わりたい」「家庭の事情で働き方を変えたい」→ 会社側で解決しにくく、引き止めの口実になりにくい。</div>
          </div>
        </section>

        <section id="engineer" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア特有：仕掛中開発と属人化</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            エンジニアの退職交渉が難航しやすい最大の理由は、仕掛中の開発と属人化です。「あなたにしか分からない」状態が残っていると、それ自体が引き止めの強力な材料になります。逆に言えば、属人化を解いておくことが最良の交渉カードになります。
          </p>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">✓</span><span>仕掛中のタスクは状態（着手済/レビュー待ち/未着手）を早めに可視化し、いつでも他者が引き取れる形にしておく。</span></li>
            <li className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">✓</span><span>属人化したコード・インフラ設定・運用手順を文書化し、「私がいないと回らない」を解消する。</span></li>
            <li className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">✓</span><span>リリースや障害対応の山場を避けて切り出すと、引き止めの正当性が下がる。</span></li>
          </ul>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            引き継ぎドキュメントの具体的な構成とテンプレートは
            <Link href="/knowledge/handover/" className="text-petrol hover:underline">引き継ぎドキュメントの作り方</Link>
            にまとめています。
          </p>
        </section>

        <section id="timeline" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">切り出しから退職までの時系列（2ヶ月計画の例）</h2>
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center min-w-[80px] h-8 rounded-full bg-petrol text-white font-bold text-xs shrink-0">{item.period}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 週数は一例です。就業規則の通知期間や担当業務に合わせて調整してください。全体の活動計画は<Link href="/knowledge/timeline/" className="text-petrol hover:underline">転職スケジュール</Link>も参照。</p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点：交渉の重みが違う</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            30代・40代の退職交渉は、20代とは難易度が違います。担当が広く属人化しやすいぶん引き止めも強くなり、一方で業界内の人脈が今後のキャリアに直結するため、交渉の進め方そのものが評判になります。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">引き止めが強くなりやすい</h3>
              <p className="text-sm text-slate-600">中核を担うミドルほど代替が効かず、カウンターオファーや情に訴える引き止めを受けやすい立場です。だからこそ、入社日の確定と引き継ぎ計画を先に固めておくことが盾になります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">「立つ鳥跡を濁さず」が後で効く</h3>
              <p className="text-sm text-slate-600">IT業界は転職で再会する機会が多く、元上司や元同僚が次の取引先・リファラル元になることも珍しくありません。交渉で関係を壊さないことが、将来の選択肢を守ります。年収条件の交渉は<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉テクニック</Link>も参考に。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">家庭の事情を「引けない理由」に変える</h3>
              <p className="text-sm text-slate-600">住宅ローンや家族の都合など、会社側で解決できない前向きな事情は、引き止めを収める理由として機能します。感情的な引き止めに揺れそうなときほど、確定した入社日と個人的事情を静かに繰り返すのが有効です。</p>
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
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">退職交渉に不安があれば相談を</h2>
          <p className="text-blue-100 text-sm mb-4">
            切り出すタイミングや引き止め対応に迷ったら、IT特化型エージェントに無料で相談できます。
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
              { name: "退職の伝え方（切り出し方の例文集）", href: "/knowledge/resignation/" },
              { name: "退職後の手続き（健保・年金・失業給付）", href: "/knowledge/after-resignation-procedures/" },
              { name: "有給消化の法律論", href: "/knowledge/paid-leave/" },
              { name: "引き継ぎドキュメントの作り方", href: "/knowledge/handover/" },
              { name: "退職代行の選び方", href: "/knowledge/retirement-agency/" },
              { name: "競業避止義務と同業他社への転職", href: "/knowledge/non-compete/" },
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
