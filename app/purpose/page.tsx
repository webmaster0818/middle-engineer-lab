import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "目的別エンジニア転職ガイド一覧【2026年版】12の転職目的に対応",
  description:
    "年収UP・ワークライフバランス・リモートワーク・大企業・英語力活用など、12の転職目的別にエンジニア向けの転職戦略とおすすめエージェントを紹介。",
};

const purposes = [
  { slug: "salary-up", title: "年収UPしたい", desc: "年収100万円以上アップを実現するための転職戦略。スキル別の年収プレミアムや交渉術を解説。" },
  { slug: "wlb", title: "ワークライフバランス重視", desc: "残業少なめ・有給消化率が高い企業への転職。フレックス・リモート制度が充実した企業の見つけ方。" },
  { slug: "remote-full", title: "フルリモートで働きたい", desc: "完全在宅勤務可能な企業・ポジションの探し方。フルリモート求人が多いエージェントも紹介。" },
  { slug: "daikigyo", title: "大企業に転職したい", desc: "メガベンチャー・大手SIer・製造業大手へのエンジニア転職ガイド。安定性と年収を両立。" },
  { slug: "stable", title: "安定した環境で働きたい", desc: "離職率が低く福利厚生が充実した企業への転職。長く安心して働ける職場の見極め方。" },
  { slug: "growth", title: "スキルアップ・成長したい", desc: "最新技術に触れられる環境への転職。技術投資が盛んな企業の選び方と学習支援制度。" },
  { slug: "english", title: "英語力を活かしたい", desc: "外資系IT・グローバル企業への転職戦略。英語力を年収に変えるためのキャリアプラン。" },
  { slug: "management-no", title: "マネジメントを避けたい", desc: "IC（Individual Contributor）として技術を極めるキャリアパス。スペシャリスト採用の求人を紹介。" },
  { slug: "no-overtime", title: "残業なしで働きたい", desc: "定時退社が文化として根付いた企業の見つけ方。残業月10時間以下の企業の特徴を解説。" },
  { slug: "second-new-grad", title: "第二新卒でIT転職", desc: "社会人経験1〜3年の第二新卒がIT業界に転職するためのガイド。未経験歓迎の求人も紹介。" },
  { slug: "uturnable", title: "Uターン・Iターン転職", desc: "地方へのUターン・Iターンを考えるエンジニア向け。地方IT企業の実態と年収事情を解説。" },
  { slug: "jigyoukaihatsu", title: "事業開発に携わりたい", desc: "エンジニアから事業開発・プロダクトオーナーへの転身。技術力を武器にビジネスサイドへ。" },
  { slug: "housing-allowance", title: "住宅手当・家賃補助がある企業へ", desc: "住宅手当・家賃補助・借り上げ社宅の違いと課税、求人での見極め方を解説。固定費に効く補助を実質手取りで選ぶ。" },
  { slug: "stock-option", title: "ストックオプションがある企業へ", desc: "SOの仕組み・税制適格/非適格・RSUとの違いを公的情報で整理。持分や上場リスクを踏まえた評価法。" },
  { slug: "mens-childcare", title: "男性育休が取りやすい企業へ", desc: "産後パパ育休など法定ルールと、取得率・実績で本当に取れる会社を見極める方法を解説。" },
  { slug: "short-hours", title: "時短勤務ができる企業へ", desc: "育児・介護の短時間勤務の法定ルールと、利用期間・評価・給与への影響を踏まえた見極め方。" },
  { slug: "taishokukin", title: "退職金制度がある企業へ", desc: "退職一時金と企業型DCの違い、退職所得控除と転職時のポータビリティを解説。老後資産で選ぶ。" },
  { slug: "workation", title: "ワーケーションができる企業へ", desc: "ワーケーションの種類とフルリモート前提条件、労働時間・税務・費用の注意点と見極め方。" },
  { slug: "benefits", title: "福利厚生が充実した企業へ", desc: "法定福利と法定外福利の違いを整理し、現金/現物の課税・実質価値で充実の中身を見極める。" },
  { slug: "no-degree", title: "学歴不問でエンジニア転職", desc: "学歴不問の建前と実態を正直に解説。30-40代が問われる実力・実務経験と求人の見極め方。" },
  { slug: "no-age-limit", title: "年齢不問の求人を狙う転職", desc: "年齢不問の建前と実態。年齢制限禁止の法的背景と、問われる実力・納得感を整理。" },
  { slug: "no-english", title: "英語不要のIT企業へ転職", desc: "英語を使わず働ける転職先を正直に解説。英語不要な企業・職種の実態と見極め方。" },
  { slug: "remote-allowance", title: "在宅勤務手当がある企業へ", desc: "在宅勤務手当の種類と相場感、課税の扱い、通勤手当との関係と求人での見極め方。" },
  { slug: "childcare-leave", title: "育休取得実績が豊富な企業へ", desc: "くるみん認定など公的指標の読み方、男性育休取得率の確認、制度と実態の差を解説。" },
  { slug: "training", title: "研修・学習支援が充実した企業へ", desc: "研修制度の種類、求人での見極め方、形骸化を見抜く視点を30-40代向けに整理。" },
  { slug: "casual-dress", title: "服装自由な企業へ転職", desc: "私服・服装自由なIT企業への転職。求人での見極め方と実態を解説。" },
];

export default function PurposeIndexPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "目的別エンジニア転職ガイド一覧",
    numberOfItems: purposes.length,
    itemListElement: purposes.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://middle-engineer.com/purpose/${p.slug}/`,
      name: p.title,
    })),
  };

  return (
    <>
      <ArticleJsonLd
        title="目的別エンジニア転職ガイド一覧【2026年版】"
        description="年収UP・ワークライフバランス・リモートワークなど、12の転職目的別にエンジニア向けの転職戦略を紹介。"
        url="/purpose/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "目的別ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          目的別エンジニア転職ガイド一覧【2026年版】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          あなたの転職目的に合わせたガイドを全{purposes.length}パターン用意しました。目的を明確にして、最適な転職戦略を立てましょう。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {purposes.map((purpose) => (
            <Link
              key={purpose.slug}
              href={`/purpose/${purpose.slug}/`}
              className="block border border-slate-200 rounded-lg p-5 hover:bg-slate-50 hover:border-blue-300 transition-colors group"
            >
              <h2 className="font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                {purpose.title}
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">{purpose.desc}</p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">転職の目的が決まったら</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに相談して、あなたの目的に合った求人を紹介してもらいましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>
      </article>
    </>
  );
}
