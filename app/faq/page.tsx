import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "よくある質問 | 30代・40代エンジニア転職のQ&A",
  description:
    "30代・40代のITエンジニア転職に関するよくある質問をまとめました。年収、スキル、年齢制限、エージェントの選び方など、転職活動で気になる疑問にお答えします。",
};

const faqs = [
  {
    q: "30代エンジニアの転職市場は実際どうなっていますか？",
    a: "30代エンジニアは「即戦力」として最も市場価値が高い年代です。特にIT業界は慢性的な人材不足が続いており、3年以上の実務経験があれば多くの企業から需要があります。2024年現在、IT人材の有効求人倍率は他業種の2倍以上で、30代エンジニアの求人倍率はさらに高い傾向にあります。Web系自社開発、SaaS企業、DX推進部門など、活躍の場は広がり続けています。",
  },
  {
    q: "40代でITエンジニアに転職するのは現実的ですか？",
    a: "40代の転職は30代と比較するとハードルは上がりますが、十分に現実的です。ポイントは「何を武器にするか」です。マネジメント経験がある方はPM・テックリードとして、技術特化の方はアーキテクト・スペシャリストとして需要があります。また、金融や製造など他業界の知識を持つエンジニアは、DX推進やフィンテック領域で希少人材として評価されます。dodaやレバテックキャリアは40代の転職実績が豊富です。",
  },
  {
    q: "転職エージェントは何社に登録すべきですか？",
    a: "2〜3社の併用が最も効率的です。おすすめの組み合わせは「IT特化型1社 + 総合型1社」。例えば、レバテックキャリア（IT特化）+ doda（総合型）の組み合わせなら、IT業界の深い知見とIT以外も含めた幅広い選択肢の両方を得られます。4社以上になると管理が大変になり、各エージェントとのコミュニケーションが薄くなるため注意が必要です。",
  },
  {
    q: "SIerから自社開発企業への転職で注意すべき点は？",
    a: "SIerと自社開発では開発スタイルが大きく異なります。自社開発企業はアジャイル開発、CI/CD、モダンな技術スタックを採用していることが多いため、ウォーターフォール型の経験だけでは不安材料になることがあります。転職前にGitHub上でのOSS活動や、個人開発でモダンな技術を触っておくと評価が上がります。レバテックキャリアやGeeklyはWeb系自社開発企業とのコネクションが強く、SIerからの転職支援実績も豊富です。",
  },
  {
    q: "転職で年収はどのくらい上がりますか？",
    a: "IT特化エージェント利用者の平均では50〜100万円のUPが一般的です。ただし、年収UP幅はスキルセット、経験年数、転職先の業界によって大きく異なります。Geeklyは平均76万円UP、レバテックキャリアは年収800万以上の求人が半数を占めています。年収交渉はエージェントの腕の見せ所なので、年収UPを重視するならIT特化エージェントの利用が有効です。",
  },
  {
    q: "プログラミング言語のトレンドは転職にどう影響しますか？",
    a: "2024年現在、TypeScript、Python、Go、Rustの需要が特に高まっています。JavaやPHPも引き続き求人数は多いですが、年収UP幅はモダン言語の方が大きい傾向にあります。ただし、言語だけでなくクラウド（AWS/GCP/Azure）、コンテナ（Docker/Kubernetes）、CI/CDなどのインフラ知識も重視されています。30代エンジニアの場合、現在のスキルをベースにしつつ、モダン技術への移行をアピールするのが効果的です。",
  },
  {
    q: "リモートワーク可能な求人は増えていますか？",
    a: "はい、IT業界ではリモートワーク可能な求人が大幅に増加しています。特にWeb系自社開発企業やSaaS企業はフルリモートやハイブリッド勤務を採用している企業が多く、勤務地に縛られない働き方が実現しやすくなっています。地方在住でも首都圏の企業に応募できるケースが増えており、年収の地域格差も縮まりつつあります。",
  },
  {
    q: "製造業や金融業からITエンジニアへの転職は可能ですか？",
    a: "十分に可能で、近年はむしろ「業界知識 x ITスキル」の掛け算人材として高く評価される傾向にあります。製造業出身者はIoTや製造DX、金融業出身者はフィンテックや金融系システム開発で重宝されます。プログラミングの基礎スキルは必要ですが、ワークポートの「みんスク」のような無料スクールで学びながら転職活動を進める方法もあります。30代前半までならキャリアチェンジの成功率は高いです。",
  },
  {
    q: "転職活動はどのくらいの期間がかかりますか？",
    a: "一般的には2〜4ヶ月程度です。準備期間（自己分析・書類作成）に2〜3週間、応募・選考に1〜2ヶ月、内定後の退職手続きに1ヶ月程度が目安です。IT特化エージェントを利用すると書類作成や面接対策がスムーズになるため、期間を短縮できる場合もあります。Geeklyは内定まで平均25日と特に早いです。在職中の転職活動が一般的ですので、無理のないペースで進めましょう。",
  },
  {
    q: "転職エージェントの面談ではどんなことを聞かれますか？",
    a: "主に以下の内容を聞かれます。(1) これまでの経歴・スキルセット、(2) 転職理由・動機、(3) 希望する年収・勤務地・働き方、(4) 転職希望時期、(5) 今後のキャリアビジョン。事前にこれらを整理しておくと面談がスムーズに進みます。IT特化エージェントの場合、使用言語やフレームワーク、チーム規模、開発手法など技術的な内容も確認されます。正直に答えることが最適なマッチングにつながります。",
  },
];

export default function FaqPage() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "よくある質問" }]} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
          よくある質問
        </h1>
        <p className="text-slate-500 text-sm mb-10">
          30代・40代エンジニアの転職に関する疑問にお答えします
        </p>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group border border-slate-200 rounded-lg overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800">
                <span>Q{i + 1}. {faq.q}</span>
                <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform shrink-0">
                  &#9662;
                </span>
              </summary>
              <div className="px-6 py-4 text-sm text-slate-600 leading-relaxed">
                A. {faq.a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">まずはエージェントに相談してみよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            転職の悩みは、プロのキャリアアドバイザーに相談するのが最も効率的です。
            無料で利用できるので、気軽に相談してみましょう。
          </p>
          <a
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            エージェントランキングを見る
          </a>
        </div>
      </div>
    </>
  );
}
