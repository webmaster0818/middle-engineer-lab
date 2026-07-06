import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/editorial/" },
  title: "記事制作ポリシー",
  description:
    "ミドルエンジニア転職ラボの記事制作ポリシーです。評価基準、制作フロー、ランキングの根拠、アフィリエイト収益の透明性について説明しています。",
};

export default function EditorialPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "記事制作ポリシー" },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
          記事制作ポリシー
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          当サイトのコンテンツ制作における方針・基準・プロセスを透明性をもって公開します。
        </p>

        {/* 評価基準 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職エージェントの評価基準</h2>
          <p className="text-sm text-slate-600 mb-4">
            当サイトでは、転職エージェントを以下の6つの基準で総合的に評価しています。各基準を5段階で採点し、総合評価を算出しています。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">評価基準</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">配点</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">評価内容</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["求人数・質", "20点", "公開求人数、非公開求人の割合、IT・Web系に特化した求人の質"],
                  ["サポート体制", "20点", "面接対策、職務経歴書添削、年収交渉、入社後フォローの充実度"],
                  ["担当者の質", "20点", "IT業界への理解度、レスポンスの速さ、提案力、コミュニケーション力"],
                  ["口コミ評価", "15点", "口コミプラットフォーム等で公開されている利用者の評判の傾向分析"],
                  ["対応業界・職種", "15点", "対応するIT職種の幅広さ、業界横断キャリア支援の可否"],
                  ["利用しやすさ", "10点", "登録の手軽さ、面談の柔軟性、オンライン対応、退会のしやすさ"],
                ].map(([name, score, desc], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 font-medium text-slate-700 border-b border-slate-200">{name}</td>
                    <td className="px-4 py-3 text-petrol-deep font-medium border-b border-slate-200">{score}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 制作フロー */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">記事制作フロー</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "調査", desc: "対象エージェント・企業の公式情報、口コミ、業界レポートを収集・分析。複数ソースでファクトチェック。" },
              { step: "2", title: "執筆", desc: "IT業界経験10年以上のエンジニアが、実務経験に基づいて記事を執筆。読者目線で実用的な情報を優先。" },
              { step: "3", title: "レビュー", desc: "執筆者とは別のメンバーが内容の正確性・公平性・分かりやすさを確認。必要に応じて修正。" },
              { step: "4", title: "公開", desc: "レビュー完了後、SEO最適化（メタデータ・構造化データ）を確認して公開。" },
              { step: "5", title: "定期更新", desc: "月次でデータの鮮度を確認し、情報が古くなった箇所を更新。サービス変更があった場合は随時対応。" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-petrol text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ランキングの根拠 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ランキングの根拠</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-lg p-6">
            <div className="space-y-3 text-sm text-slate-700">
              <p>
                当サイトのランキングは、上記の評価基準に基づくスコアリング結果をもとに作成しています。
              </p>
              <p>
                <strong>ランキング順位に影響する要素:</strong>
              </p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>6つの評価基準の総合スコア</li>
                <li>公開されている利用者の評判・口コミの傾向</li>
                <li>30代・40代エンジニアへの適性（当サイトの対象読者層に合致するか）</li>
              </ul>
              <p>
                <strong>ランキング順位に影響しない要素:</strong>
              </p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>アフィリエイト報酬の額</li>
                <li>広告掲載の有無</li>
                <li>企業からのスポンサーシップ</li>
              </ul>
            </div>
          </div>
        </section>

        {/* データの取得時点と鮮度 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">データの取得時点と鮮度</h2>
          <div className="border border-slate-200 rounded-lg p-6">
            <div className="space-y-3 text-sm text-slate-600">
              <p>
                記事中の求人数・年収・実績などの数値データには、原則として<strong>「◯年◯月時点」の調査時点を明記</strong>しています。データは各サービスの公式サイト・公式発表を一次ソースとし、取得日とあわせて記録しています。
              </p>
              <p>
                数値は調査時点のものであり、最新の情報と異なる場合があります。重要な判断の際は必ず各サービスの公式サイトで最新情報をご確認ください。
              </p>
            </div>
          </div>
        </section>

        {/* 口コミ・評判の取扱い */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の取扱い</h2>
          <div className="border border-slate-200 rounded-lg p-6">
            <div className="space-y-3 text-sm text-slate-600">
              <p>
                記事内で紹介する利用者の評判・口コミは、<strong>出典（口コミプラットフォーム名等）を明記</strong>したうえで、傾向を要約して掲載しています。架空の口コミ・体験談を創作して掲載することはありません。
              </p>
              <p>
                良い評判だけでなく、ネガティブな評判も公平に取り上げ、どのような人に向かないかも記載する方針です。
              </p>
            </div>
          </div>
        </section>

        {/* アフィリエイト収益の透明性 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">アフィリエイト収益の透明性</h2>
          <div className="border border-slate-200 rounded-lg p-6">
            <div className="space-y-3 text-sm text-slate-600">
              <p>
                当サイトは、アフィリエイトプログラムに参加しています。利用者が当サイト内のリンクを経由してサービスに登録した場合、当サイト運営者が紹介報酬を受け取る場合があります。
              </p>
              <p>
                この収益は、サイトの運営費用（サーバー代、調査費用、コンテンツ制作費用）に充てられており、利用者に追加費用が発生することはありません。
              </p>
              <p>
                <strong>当サイトの方針として、アフィリエイト報酬の多寡がランキングや評価に影響を与えることはありません。</strong>評価基準に基づく客観的なスコアリングにより順位を決定しています。
              </p>
              <p>
                アフィリエイトリンクを含むページには「PRを含みます」の表記を掲載しています。
              </p>
            </div>
          </div>
        </section>

        {/* 関連ページ */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連ページ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/about/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              運営者情報 →
            </Link>
            <Link href="/privacy/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              プライバシーポリシー →
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
