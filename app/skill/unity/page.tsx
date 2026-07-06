import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/skill/unity/" },
  title: "Unityエンジニアの転職市場ガイド｜年収・求人の探し方",
  description:
    "Unityエンジニアの転職市場を30代・40代視点で解説。平均年収の実データ、求められる経験レベル、ゲーム・XR・非ゲーム領域のキャリアパス、求人の探し方、ポートフォリオ戦略、FAQを網羅します。",
};

const toc = [
  { id: "conclusion", label: "結論：Unity転職の攻め方" },
  { id: "market", label: "市場・年収データ" },
  { id: "level", label: "求められる経験レベル" },
  { id: "career", label: "キャリアパスの選択肢" },
  { id: "find", label: "求人の探し方" },
  { id: "entry", label: "経験浅めからの参入ルート" },
  { id: "middle", label: "30代・40代視点" },
  { id: "learning", label: "スキルアップ・学習戦略" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "voice", label: "求人・転職支援の口コミ傾向" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const careerPaths = [
  {
    role: "ゲームプログラマー（モバイル/コンシューマー）",
    note: "ソーシャル/モバイルからコンシューマーまで。求人母数が最も多い王道ルート。",
    demand: "高",
  },
  {
    role: "XR/メタバースエンジニア",
    note: "VR/AR/MRコンテンツ開発。XRデバイス普及で需要が拡大中。",
    demand: "中〜高",
  },
  {
    role: "テクニカルアーティスト",
    note: "シェーダー・エフェクト・描画最適化。エンジニアとアーティストの橋渡し。希少。",
    demand: "中（希少性高）",
  },
  {
    role: "非ゲーム領域（産業用途）",
    note: "建築可視化・自動車シミュレーション・デジタルツイン・医療トレーニング等。",
    demand: "中（拡大傾向）",
  },
];

const faqs = [
  {
    q: "Unityエンジニアの平均年収はどのくらい？",
    a: "レバテックキャリアの集計では、Unityに関わるエンジニアの平均年収は約417万円・中央値450万円とされています。多くは400万〜600万円台に分布し、シニアやリードクラス、XR領域で高めの提示になる傾向です。なお同領域はソーシャル系よりコンシューマー系のほうが年収が高い傾向があるとされます。",
  },
  {
    q: "Unityの需要は今後も続く？",
    a: "モバイルゲームでのシェアが高く、加えてVR/AR・メタバース・建築可視化・自動車シミュレーションなど非ゲーム領域でも採用が広がっています。ゲーム市況の波はありますが、活用領域が複数あることが需要の下支えになっています。",
  },
  {
    q: "UnityとUnreal Engineのどちらが転職に有利？",
    a: "モバイル・インディー・XRではUnity、AAAタイトルや映像制作ではUnreal Engineが強い傾向です。求人母数はUnityが多めですが、両方扱えると応募できる枠が広がります。まずは実務で使うエンジンを深め、もう一方を読める程度にしておくのが現実的です。",
  },
  {
    q: "Unityの求人はどんな企業が多い？",
    a: "ゲーム会社（モバイル/コンシューマー）、XR開発企業、メタバース関連スタートアップ、建築・製造業のDX部門などに分布します。フリーランス案件では玩具・ゲーム業界が大きな割合を占めるという調査もあります。",
  },
  {
    q: "Web系エンジニアからUnityに転向できる？",
    a: "C#の経験があれば入りやすい部類です。ただしコンポーネント指向、物理エンジン、シェーダー、アセット管理などUnity固有の概念を学ぶ必要があります。基礎があれば数か月で簡単な作品は作れますが、転職では「完成させて公開した作品」が評価の中心になります。",
  },
  {
    q: "ポートフォリオはどの程度必要？",
    a: "Unity転職ではポートフォリオがほぼ必須です。App Store/Google Playへのリリース、itch.ioでの公開、プレイ可能なビルドの提示が強い証拠になります。ソースコードをGitHubで公開し、設計意図を説明できるとさらに評価が上がります。",
  },
  {
    q: "Unityエンジニアにおすすめの転職エージェントは？",
    a: "IT/Web/ゲーム業界に特化し提案スピードが強みのGeekly、IT全般＋ゲーム案件を扱うレバテックキャリア、ベンチャー/スタートアップ求人に強くカジュアル面談で社風を確認できるGreenの併用が現実的です。いずれもポートフォリオの準備が前提になります。",
  },
];

export default function UnitySkillPage() {
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
        title="Unityエンジニアの転職市場ガイド｜年収・求人の探し方"
        description="Unityエンジニアの転職市場を30代・40代視点で解説。平均年収の実データ、キャリアパス、求人の探し方、ポートフォリオ戦略、FAQを網羅します。"
        url="/skill/unity/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Unityエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Unityエンジニアの転職市場ガイド｜年収・求人の探し方
        </h1>
        <p className="text-slate-500 text-sm mb-4">
          最終更新: 2026年6月 | Unityエンジニアの転職市場を30代・40代視点で分析
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          Unityはモバイルゲームで高いシェアを持つゲームエンジンであり、VR/AR・メタバース・建築可視化・自動車シミュレーションなど非ゲーム領域にも活躍の場が広がっています。本記事では求人DBサイトと同じ土俵で勝負するのではなく、ミドル層が「どこを狙い、どう見せれば内定に近づくか」という情報意図に絞って解説します。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテックキャリア（Unity関連職種の年収統計）",
            "PE-BANK・SOKUDAN等の市場調査記事",
            "レバテック公表の年代別平均年収（2025年）",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ul className="space-y-1.5">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-sm text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Unity転職の攻め方</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3 font-medium">
              Unity転職の合否は「プレイできる作品があるか」と「どの領域で年収を上げるか」でほぼ決まります。30代・40代は<strong>ポートフォリオ＋専門領域（XR・最適化・非ゲーム）</strong>で勝負するのが王道です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① Unity関連職の平均年収は約417万円・中央値450万円（レバテックキャリア集計）。上振れは領域とポジションで決まる。</li>
              <li>② 年収を上げたいならコンシューマー/XR/最適化/非ゲーム産業へ。ソーシャル単独より高めの提示が出やすい。</li>
              <li>③ 探し方はゲーム特化のGeekly＋IT全般のレバテック＋ベンチャー直結のGreenを併用。作品の提示が前提。</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Unityエンジニアの年収は媒体や集計方法で幅が出ますが、特化型エージェントの集計値が実態に近い目安になります。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["平均年収（正社員）", "約417万円・中央値450万円（レバテックキャリアのUnity関連職種集計）。多くは400万〜600万円台に分布"],
                  ["年収が上振れしやすい領域", "コンシューマーゲーム、XR/メタバースのリード、テクニカルアーティスト、非ゲーム産業用途"],
                  ["フリーランス単価の目安", "市場調査記事では月額60〜70万円・年収換算720万〜840万円とする例も（PE-BANK等の解説記事ベース）"],
                  ["活用領域の広がり", "ゲームに加えVR/AR・建築可視化・自動車/製造シミュレーション・医療トレーニング等"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            ITエンジニア全体の年代別水準と並べると、自分の提示額が市場でどの位置かを判断しやすくなります。レバテックが公表する正社員SEの年代別平均年収は、20代約378万円／30代約499万円／40代約618万円／50代約685万円（2025年）です。Unity平均（約417万円）はこの30代水準の手前にあるため、ミドルが年収を伸ばすには「ゲームプログラマー一般」から専門領域へ踏み込むことが鍵になります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            なお「モバイルゲームの◯◯%がUnity」といった具体的シェア数値や「求人前年比＋◯%」は、確かな一次出典を確認できなかったため本記事では断定しません。確実に言えるのは「ゲーム以外にも活用領域が複数あり、需要の裾野が広い」という構造的な強みです。
          </p>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル（求人要件の傾向）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Unity求人は「C#＋Unityの基礎」だけでは差がつきにくく、最適化や特定領域の実装経験で評価が分かれます。求人票で頻出する要件は次の通りです。
          </p>
          <div className="space-y-3">
            {[
              { lv: "歓迎されやすい人", body: "C#の実務経験、Unityでの開発・リリース経験、Gitでのチーム開発経験。プレイ可能な作品があること。" },
              { lv: "ミドル〜シニア要件", body: "描画/メモリのパフォーマンス最適化（Draw Call削減・LOD・オブジェクトプーリング）、設計力、後輩レビューやチームリードの経験。" },
              { lv: "領域別の上乗せ要件", body: "XRならXR Interaction Toolkit・各デバイスSDK、対戦系ならNetcode/同期処理、グラフィックスならシェーダー、非ゲームならドメイン知識（建築/自動車等）。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{item.lv}</h3>
                <p className="text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* キャリアパス */}
        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスの選択肢</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Unityスキルの活かし方は一つではありません。年収を上げる方向と、安定して長く働ける方向で選択肢が分かれます。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">方向性</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">内容</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 w-28">求人の出やすさ</th>
                </tr>
              </thead>
              <tbody>
                {careerPaths.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium align-top">{item.role}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{item.note}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 align-top">{item.demand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方（どの窓口が強いか）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ゲーム/エンタメ求人は専門エージェントの保有数が物を言います。性質の違う窓口を組み合わせましょう。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly（IT/Web/ゲーム特化・提案スピード）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT/Web/ゲーム業界に専門特化し、提案スピードが強み。ゲーム・エンタメ領域の求人保有に定評があり、Unity案件を探す主力窓口になります。
              </p>
              <Link href="/review/geekly/" className="text-sm text-petrol hover:underline">Geeklyの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT全般＋ゲーム案件）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT/Web全般に強く高年収求人比率が高い特化型。非ゲーム領域のUnity案件（産業用途）や、Web系企業のXR部門なども含めて探せます。
              </p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Green（ベンチャー直結・カジュアル面談）</h3>
              <p className="text-sm text-slate-600 mb-2">
                エージェント仲介ではなく企業と直接やり取りする成功報酬型サービス。XR/メタバース系のスタートアップが多く、カジュアル面談で社風を確かめてから進められます。
              </p>
              <Link href="/review/green/" className="text-sm text-petrol hover:underline">Greenの詳細レビュー →</Link>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            ゲーム業界全体の事情は<Link href="/industry/gaming/" className="text-petrol hover:underline">ゲーム業界転職ガイド</Link>、エージェントの使い分けは<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">転職エージェントの併用ガイド</Link>を参考にしてください。
          </p>
        </section>

        {/* 参入ルート */}
        <section id="entry" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからの参入ルート</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Web系/業務系からUnityへ、あるいはゲーム未経験からUnityへ進みたいミドルに現実的なルートです。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "完成・公開した作品を1本作る", desc: "学習の証明よりも『リリースまで持っていった』実績が効きます。小規模でもApp Store/Google Playやitch.ioで公開し、プレイ可能なビルドを提示できる状態にします。" },
              { num: "2", title: "C#の実務をUnityに接続する", desc: ".NET/C#の業務経験があるなら、まずは現職スキルとの地続きであることをアピール。Unity固有の概念（コンポーネント・ライフサイクル）を補えば転向のハードルは下がります。" },
              { num: "3", title: "非ゲーム領域から入る", desc: "建築可視化・製造シミュレーション・XR業務アプリなど、自分の業界知識が活きる非ゲーム領域は競争が比較的緩やか。ゲーム未経験でもドメインで勝負できます。" },
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

        {/* 30代・40代視点 */}
        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点：体力勝負を避けて専門性で勝つ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ゲーム業界には「若手中心・繁忙期は激務」というイメージがありますが、ミドルが価値を出せるのは、若手が苦手とする「設計」「最適化」「チームの底上げ」です。プレイヤーとしての速さより、品質と再現性で勝負するのがミドルの戦い方です。
          </p>
          <div className="space-y-3">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">最適化・テクニカルアートで希少人材になる</h3>
              <p className="text-sm text-petrol-deep">
                パフォーマンス最適化やシェーダー/描画はノウハウの蓄積が物を言う領域。ミドルの経験が直接効くため、年収を上げやすい方向です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">非ゲーム産業はワークライフバランスを取りやすい</h3>
              <p className="text-sm text-petrol-deep">
                建築・製造・医療などのUnity活用は、ゲーム特有の繁忙より落ち着いた働き方になりやすい傾向。家庭との両立を重視するミドルに向きます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">マネジメント／リードへの分岐も視野に</h3>
              <p className="text-sm text-petrol-deep">
                プレイングだけでなく、リードエンジニアやテックリードへ進む道もあります。チーム経験を職務経歴書で言語化しておくと選択肢が広がります。
              </p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            年代別の現実は<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>、働き方の観点は<Link href="/knowledge/work-life-balance/" className="text-petrol hover:underline">エンジニアのワークライフバランス</Link>も参考にしてください。
          </p>
        </section>

        {/* 学習戦略 */}
        <section id="learning" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Unity転職では「学んだ」より「作って公開した」が評価軸です。作品を軸に逆算して学ぶのが効率的です。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 mb-4">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>小さくても完成・リリースした作品を1本作り、プレイ可能な形で公開する</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>パフォーマンス最適化（プロファイラの読み方・Draw Call削減）を一通り実践する</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>狙う領域（XR/対戦/グラフィックス/非ゲーム）の専門スキルを1つ深掘りする</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>GitHubでソースを公開し、設計判断を説明できるよう整理する</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>C#の言語仕様・非同期処理の理解を深め、面接の技術深掘りに備える</li>
          </ul>
          <p className="text-slate-600 leading-relaxed text-sm">
            作品の見せ方は<Link href="/knowledge/portfolio/" className="text-petrol hover:underline">ポートフォリオの作り方</Link>、学習継続は<Link href="/knowledge/continuous-learning/" className="text-petrol hover:underline">働きながら学び続ける方法</Link>で詳しく解説しています。
          </p>
        </section>

        {/* 向いている人 */}
        <section id="fit" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Unityでの転職が活きる人と、別の見せ方を考えた方がよい人の傾向を整理します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3 text-sm">Unity転職が向いている人</h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>完成・公開した作品を提示できる（または短期で作れる）</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>C#の実務経験がある</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>最適化・XR・グラフィックス等の専門領域を持つ／作る意欲がある</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>非ゲーム産業（建築/製造/医療）の業界知識を活かしたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>プレイヤー以外にリード/最適化でも価値を出せる</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-3 text-sm">向いていない可能性が高い人</h3>
              <ul className="space-y-2 text-sm text-amber-800">
                <li className="flex items-start gap-2"><span className="shrink-0">!</span>提示できる作品がなく、用意する時間も取れない</li>
                <li className="flex items-start gap-2"><span className="shrink-0">!</span>年収の上限を最優先する（平均は他職種よりやや低め）</li>
                <li className="flex items-start gap-2"><span className="shrink-0">!</span>繁忙期の波がある働き方を避けたい（領域選びで緩和は可能）</li>
                <li className="flex items-start gap-2"><span className="shrink-0">!</span>特定領域の深掘りより広く浅く触れたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">!</span>地方で求人量を最優先したい（都市部に偏りがち）</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            年収の上限を重視するなら、<Link href="/skill/csharp/" className="text-petrol hover:underline">C#/.NET</Link>のバックエンド方向や非ゲーム産業を併せて検討すると選択肢が広がります。
          </p>
        </section>

        {/* 口コミ傾向 */}
        <section id="voice" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人・転職支援の口コミ傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Unity案件を扱うエージェントについて、Qiita Job Change・みん評・転職アンテナ等の口コミプラットフォームで見られる傾向を、出典名を挙げて要約します（原文転載は行いません）。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">Geeklyに見られる傾向</h3>
              <p className="text-sm text-slate-600">
                転職アンテナ等の口コミでは「レスポンスが早い」「選考までスムーズ」「実務経験者への提案数が多い」という声がある一方、「連絡がしつこい」「担当者の質にばらつき」という指摘も。ゲーム/エンタメ求人の保有が強みとして語られる傾向です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">レバテックキャリアに見られる傾向</h3>
              <p className="text-sm text-slate-600">
                Qiita Job Change・イーデス等の口コミでは「書類添削・面接対策が丁寧」「高年収求人が多い」という声がある一方、「未経験者は紹介されにくい」という指摘も見られます。非ゲーム領域のUnity案件を探す窓口として語られることもあります。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">Greenに見られる傾向</h3>
              <p className="text-sm text-slate-600">
                みん評等の口コミでは「企業と直接やり取りでき速い」「ベンチャー求人が豊富」「カジュアル面談が好評」という声がある一方、「地方求人が少ない」「エージェント支援がない」という指摘も。自分で動ける人ほど活かしやすいサービスです。
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
          <h2 className="text-xl font-bold mb-3">Unityのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            ゲーム・XR求人はエージェントの保有数で差が出ます。特化型エージェントを併用して、ポートフォリオを活かしましょう。
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
              { name: "C#/.NETエンジニアの転職ガイド", href: "/skill/csharp/" },
              { name: "ゲーム業界転職ガイド", href: "/industry/gaming/" },
              { name: "ポートフォリオの作り方", href: "/knowledge/portfolio/" },
              { name: "40代エンジニアの転職", href: "/age/40s/" },
              { name: "転職エージェントの併用ガイド", href: "/knowledge/multiple-agents/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
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
    
      <section className="mx-auto max-w-3xl px-4 pb-10">
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
          <h2 className="font-bold text-slate-900 mb-2">この技術と関連の深い掲載企業</h2>
          <p className="text-xs text-slate-500 mb-2">各社の公開技術情報でこの技術への言及が確認できた掲載企業です。年収・選考は各社ページをご覧ください。</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/bandai-namco/" className="text-petrol-deep hover:underline">バンダイナムコ</a></li><li><a href="/company/dena/" className="text-petrol-deep hover:underline">DeNA</a></li><li><a href="/company/gungho/" className="text-petrol-deep hover:underline">ガンホー</a></li><li><a href="/company/sega-sammy/" className="text-petrol-deep hover:underline">セガ（セガサミーHD）</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-petrol-deep hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-petrol-deep hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
