import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "企業別エンジニア転職ガイド一覧【90社】業態別に分類",
  description:
    "外資ビッグテック・メガベンチャー・SaaS・SIer・メーカー・ゲーム・インフラ・通信金融の全90社をエンジニア転職の視点で業態分類。各社の年収レンジ・技術スタックの傾向と、企業研究の進め方を解説します。",
};

const categories = [
  {
    name: "外資系ビッグテック",
    intro: "GAFAM中心。高年収だが英語力とアルゴリズム面接など独自の選考対策が必須の領域です。",
    companies: [
      { slug: "google", name: "Google Japan", salary: "1,200〜2,000万円", tech: "Go / Python / Kubernetes / GCP", desc: "コーディング面接の比重が高い世界水準のテック企業。" },
      { slug: "amazon", name: "Amazon Japan", salary: "1,000〜1,800万円", tech: "Java / AWS / Python / TypeScript", desc: "Leadership Principlesに沿った行動面接が特徴。" },
      { slug: "apple", name: "Apple Japan", salary: "1,000〜1,800万円", tech: "Swift / Objective-C / C++ / ML", desc: "プロダクト志向。ハード×ソフトの統合領域が強み。" },
      { slug: "meta", name: "Meta Japan", salary: "1,200〜2,200万円", tech: "React / Hack / Python / C++", desc: "大規模分散システムとフロント技術の最先端。" },
      { slug: "microsoft", name: "Microsoft Japan", salary: "1,000〜1,800万円", tech: "C# / TypeScript / Azure / Python", desc: "クラウド・エンタープライズに強い外資。働き方も柔軟。" },
    ],
  },
  {
    name: "メガベンチャー",
    intro: "Web系自社開発の中核。技術的裁量と成長環境を求めるエンジニアに人気の選択肢です。",
    companies: [
      { slug: "mercari", name: "メルカリ", salary: "700〜1,200万円", tech: "Go / Kubernetes / GCP / Microservices", desc: "マイクロサービス基盤と多国籍チームが特徴。" },
      { slug: "line-yahoo", name: "LINEヤフー", salary: "600〜1,100万円", tech: "Java / Kotlin / Spring / Kubernetes", desc: "国内最大級のトラフィックを扱う大規模開発。" },
      { slug: "cyberagent", name: "サイバーエージェント", salary: "600〜1,000万円", tech: "Go / React / AWS / MLOps", desc: "広告・メディア・ゲームと幅広い事業領域。" },
      { slug: "rakuten", name: "楽天グループ", salary: "600〜1,000万円", tech: "Java / Spring / AWS / React", desc: "社内英語公用化。EC〜フィンテックまで横断。" },
      { slug: "dena", name: "DeNA", salary: "600〜1,100万円", tech: "Go / Python / AWS / Unity", desc: "ゲーム・ヘルスケア・モビリティと多角的。" },
      { slug: "recruit", name: "リクルート", salary: "650〜1,100万円", tech: "Java / React / GCP / Python", desc: "事業ドメインが広く、データ活用に積極的。" },
      { slug: "zozo", name: "ZOZO", salary: "600〜1,000万円", tech: "Go / Kotlin / AWS / Microservices", desc: "ファッションECの技術刷新を推進。研究組織も。" },
      { slug: "visional", name: "Visional（ビズリーチ）", salary: "600〜1,000万円", tech: "Scala / TypeScript / AWS / Kubernetes", desc: "HR Tech領域。プロダクト志向のエンジニア組織。" },
      { slug: "softbank", name: "ソフトバンク", salary: "600〜1,000万円", tech: "Java / Python / AWS / AI/ML", desc: "通信×AI。大規模インフラと新規事業の両輪。" },
      { slug: "smartnews", name: "SmartNews", salary: "公式平均は非公開", tech: "Java / Scala / Spark / AWS", desc: "大規模配信×機械学習を少数精鋭で支えるメディアテック。" },
      { slug: "gmo-internet", name: "GMOインターネットグループ", salary: "持株693万円(2024/12)", tech: "Go / PHP / Java / TypeScript / AWS", desc: "ドメイン・クラウド・決済・金融の基盤を支える持株会社。" },
      { slug: "dmm", name: "DMM.com", salary: "非開示(非上場)", tech: "Go / PHP / TypeScript / React / Vue", desc: "50以上の事業を展開する非上場メガベンチャー。" },
    ],
  },
  {
    name: "SaaS・フィンテック",
    intro: "プロダクト改善とドメイン知識が両立する成長企業群。年収も高め水準が中心です。",
    companies: [
      { slug: "freee", name: "freee", salary: "600〜1,000万円", tech: "Ruby / React / GCP / Kubernetes", desc: "会計SaaSの先駆。開発文化の発信に積極的。" },
      { slug: "smarthr", name: "SmartHR", salary: "600〜1,000万円", tech: "Ruby / React / AWS / GraphQL", desc: "労務SaaSで急成長。アクセシビリティ重視の開発。" },
      { slug: "moneyforward", name: "マネーフォワード", salary: "600〜950万円", tech: "Ruby / Go / React / AWS", desc: "家計・バックオフィスSaaSを多数展開。" },
      { slug: "sansan", name: "Sansan", salary: "600〜950万円", tech: "Kotlin / TypeScript / AWS / ML", desc: "名刺・契約管理SaaS。データ活用に強み。" },
      { slug: "plaid", name: "プレイド", salary: "600〜1,000万円", tech: "Go / TypeScript / GCP / BigQuery", desc: "CX領域のデータ処理基盤が技術的に先進。" },
      { slug: "layerx", name: "LayerX", salary: "600〜1,000万円", tech: "Go / TypeScript / AWS / Blockchain", desc: "業務効率化SaaSとフィンテックを推進。" },
      { slug: "paypay", name: "PayPay", salary: "公式平均は非公開", tech: "Java / Spring Boot / Kubernetes / AWS", desc: "国内最大級の決済基盤。英語を使う多国籍な開発組織。" },
      { slug: "ubie", name: "Ubie（ユビー）", salary: "職種別レンジ（公式）", tech: "Go / Node.js / TypeScript / GCP", desc: "医師×エンジニア創業のヘルステック。年齢不問・要件主義。" },
      { slug: "kakehashi", name: "カケハシ", salary: "参考値（非公式集計）", tech: "TypeScript / React / Node.js / AWS", desc: "薬局DX。TypeScript一貫のサーバーレス。選考フロー公開。" },
      { slug: "m3", name: "エムスリー（M3）", salary: "全社平均975万円(2026/3)", tech: "Kotlin / Scala / TypeScript / Ruby / Go", desc: "医療×ITのプラットフォーム。チーム裁量の技術選定と高収益。" },
      { slug: "medpeer", name: "メドピア（MedPeer）", salary: "単体618万円(2024/9)", tech: "Ruby on Rails / TypeScript / React / Vue / AWS", desc: "医師向けプラットフォームを核に医療DXを進める東証プライムのヘルステック。" },
      { slug: "rakus", name: "ラクス（RAKUS）", salary: "全社平均664万円(2026/3)", tech: "Java / PHP / Go / Vue.js / TypeScript", desc: "楽楽精算等のバックオフィスSaaS。堅実な自社開発（4384とは別）。" },
      { slug: "10x", name: "10X（テンエックス）", salary: "参考値（非公式集計）", tech: "Dart / Flutter / GCP / gRPC", desc: "ネットスーパーDX「Stailer」。クライアントもサーバーもフルDart。" },
      { slug: "andpad", name: "ANDPAD（アンドパッド）", salary: "参考値（非公式集計）", tech: "Ruby on Rails / Go / Kubernetes", desc: "建設DXシェアNo.1クラス。SRE文化・プレIPO。" },
      { slug: "cybozu", name: "サイボウズ", salary: "約687〜719万円(年度で差)", tech: "Java / Go / TypeScript / React", desc: "kintone等の長寿SaaSを刷新。働き方の自由度が高い。" },
      { slug: "base", name: "BASE", salary: "700万円(全従業員平均)", tech: "PHP / Go / Next.js / AWS", desc: "ネットショップ・決済。PHP資産の進化とGo移行を両立。" },
      { slug: "stores", name: "STORES", salary: "参考値（非公式集計）", tech: "Ruby on Rails / Go / React / AWS", desc: "店舗DX群（EC/POS/決済/予約）のマルチプロダクト。" },
      { slug: "cookpad", name: "クックパッド", salary: "約948万円(全従業員平均)", tech: "Ruby on Rails / AWS ECS / Hako", desc: "世界最大級のRailsモノリス。規模は縮小・技術志向。" },
      { slug: "note", name: "note（ノート）", salary: "全社平均763万円(2025/11)", tech: "Ruby on Rails / Go / TypeScript", desc: "クリエイター向けメディアプラットフォーム（東証グロース）。" },
      { slug: "uzabase", name: "ユーザベース（UZABASE）", salary: "上場最終期約760万円", tech: "Elixir / Go / Next.js / TypeScript", desc: "SPEEDA・NewsPicksの経済情報PF（現在は非公開化）。" },
      { slug: "raksul", name: "ラクスル（RAKSUL）", salary: "全社平均742万円(2025/7)", tech: "Ruby on Rails / TypeScript / Vue", desc: "産業のデジタル化を進めるプラットフォーム企業（東証プライム）。" },
      { slug: "wantedly-inc", name: "ウォンテッドリー（Wantedly）", salary: "全社平均約681万円", tech: "Ruby on Rails / Go / React", desc: "ビジネスSNSを運営する東証グロース企業（agent口コミとは別）。" },
      { slug: "kaonavi", name: "カオナビ", salary: "上場最終期690万円(2025/3)", tech: "PHP / Laravel / Go / React", desc: "タレントマネジメントSaaS（現在は非公開化）。" },
      { slug: "timee", name: "タイミー（Timee）", salary: "上場時約594万円(2024/10)", tech: "Ruby on Rails / Go / Next.js", desc: "スキマバイトマッチングの2024年上場の急成長企業。" },
      { slug: "monotaro", name: "MonotaRO（モノタロウ）", salary: "全社平均686万円(2024/12)", tech: "Python / Django / BigQuery / AWS", desc: "大規模BtoB ECとデータ基盤を内製するデータドリブン企業。" },
      { slug: "sbi", name: "SBIホールディングス", salary: "持株単体1,062万円(2025/3)", tech: "Java / Go / AWS / ブロックチェーン", desc: "ネット証券・銀行からWeb3まで幅広い総合金融グループ。" },
    ],
  },
  {
    name: "SIer・コンサル",
    intro: "大規模案件と上流工程が中心。安定基盤と高めの待遇を両立しやすい領域です。",
    companies: [
      { slug: "accenture", name: "アクセンチュア", salary: "600〜1,200万円", tech: "Java / SAP / AWS / Azure", desc: "戦略〜実装まで担う総合コンサル。育成体制が手厚い。" },
      { slug: "nri", name: "野村総合研究所（NRI）", salary: "700〜1,200万円", tech: "Java / AWS / Salesforce / SAP", desc: "金融系に強い国内大手。コンサル×SIの両面。" },
      { slug: "ntt-data", name: "NTTデータ", salary: "550〜950万円", tech: "Java / AWS / Azure / Spring", desc: "官公庁・金融の大規模システムに実績多数。" },
      { slug: "ibm", name: "日本IBM", salary: "公式平均は非公開", tech: "OpenShift / IBM Cloud / watsonx / Java", desc: "バンド制の外資。コンサル・アーキ志向のミドル向け。" },
      { slug: "scsk", name: "SCSK", salary: "全社平均796万円(2026/3)", tech: "Java / Python / AWS / Azure / クラウドネイティブ", desc: "住友商事系のフルラインナップ大手SIer。働き方改革に積極的。" },
      { slug: "shift", name: "SHIFT", salary: "全社平均684万円(2025/8)", tech: "ソフトウェアテスト / 品質保証(QA) / テスト自動化", desc: "ソフトウェア品質保証(QA)を軸に急成長する東証プライム企業。" },
      { slug: "tis", name: "TIS", salary: "全社平均828万円(2026/3)", tech: "Java / Python / TypeScript / AWS / Azure / GCP", desc: "決済・金融に強い国内大手SIer（TISインテックグループ中核）。" },
      { slug: "obic", name: "オービック（OBIC）", salary: "全社平均1,129万円(2026/3)", tech: "ERP「OBIC7」/ 基幹システム開発・導入", desc: "統合ERPをワンストップ提供する高収益・高年収のIT企業。" },
      { slug: "fujisoft", name: "富士ソフト", salary: "全社平均640万円(2024/12)", tech: "C / C++ / Java / Web・クラウド / AI・ロボット", desc: "組込みから業務システム・AIまで幅広い独立系総合SIer。" },
    ],
  },
  {
    name: "メーカー・製造業大手",
    intro: "組込み・IoT・社内DX。製造業出身ミドルが業務知識を活かしやすい選択肢です。",
    companies: [
      { slug: "toyota", name: "トヨタ自動車", salary: "600〜950万円", tech: "C++ / Python / ROS / AWS", desc: "自動運転・モビリティのソフトウェア投資を強化。" },
      { slug: "sony", name: "ソニーグループ", salary: "650〜1,100万円", tech: "Python / C++ / AWS / AI/ML", desc: "ハード×AIの研究開発から事業まで幅広い。" },
      { slug: "hitachi", name: "日立製作所", salary: "600〜950万円", tech: "Java / Python / Azure / IoT", desc: "社会インフラ×ITのLumadaを軸にDXを推進。" },
      { slug: "panasonic", name: "パナソニック", salary: "550〜900万円", tech: "C++ / Python / AWS / Embedded", desc: "家電〜車載まで組込みソフトの裾野が広い。" },
      { slug: "fujitsu", name: "富士通", salary: "550〜900万円", tech: "Java / Python / Azure / Cloud", desc: "ジョブ型へ移行。クラウド・DX人材を募集強化。" },
      { slug: "nec", name: "NEC（日本電気）", salary: "963万円(全従業員平均)", tech: "AI / 社会インフラ / クラウド / セキュリティ", desc: "生体認証AI・社会インフラ。ジョブ型移行でミドル評価。" },
      { slug: "keyence", name: "キーエンス", salary: "2,039万円(全従業員平均)", tech: "組込 / 画像処理 / 計測制御", desc: "高利益率FAメーカー。年収は営業含む全社員平均で突出。" },
      { slug: "denso", name: "デンソー", salary: "863万円(全従業員平均)", tech: "車載ソフト / SOA / 組込 / AI", desc: "自動車Tier1。SDV/車載ソフト人材を積極登用。" },
      { slug: "fujifilm", name: "富士フイルム", salary: "1,124万円(HD全従業員平均)", tech: "医療画像AI / 画像処理 / データ", desc: "医療画像AI・ヘルスケア。ディープテック寄りのR&D。" },
      { slug: "fastretailing", name: "ファーストリテイリング", salary: "公式レンジ 580〜1,300万円", tech: "EC / SCM / クラウド基盤 / データ", desc: "「情報製造小売業」。EC/サプライチェーンのデジタル変革。" },
      { slug: "kyocera", name: "京セラ", salary: "全社平均693万円(2025/3)", tech: "電子部品 / 半導体 / 通信 / 組込", desc: "電子部品・半導体・通信を手がける多角化メーカー。" },
      { slug: "murata", name: "村田製作所", salary: "全社平均803万円(2025/3)", tech: "電子部品(MLCC) / 通信モジュール / 組込", desc: "MLCC世界トップの電子部品大手。" },
      { slug: "renesas", name: "ルネサスエレクトロニクス", salary: "全社平均809万円(2024/12)", tech: "半導体設計 / HDL / EDA / 組込", desc: "マイコン・SoCの半導体大手。需要逼迫で経験者評価が高い。" },
      { slug: "tokyo-electron", name: "東京エレクトロン", salary: "全社平均1,354万円(2025/3)", tech: "装置制御 / 組込 / 画像処理 / AI", desc: "半導体製造装置の世界大手。製造業最高水準の年収。" },
      { slug: "omron", name: "オムロン", salary: "全社平均820万円(2025/3)", tech: "FA制御 / 組込 / 画像処理AI", desc: "制御機器(FA)で世界的強み。組込・画像処理が活きる。" },
      { slug: "preferred-networks", name: "Preferred Networks（PFN）", salary: "非開示(非上場)", tech: "深層学習 / MN-Core / PLaMo / PyTorch", desc: "深層学習とAI半導体を一貫開発する高度専門のAI企業。" },
      { slug: "ricoh", name: "リコー", salary: "単体860万円(2025/3)", tech: "組込み / クラウド / データ・AI", desc: "複合機からデジタルサービスへ転換する精密大手。" },
      { slug: "canon", name: "キヤノン", salary: "単体865.7万円(2024/12)", tech: "組込み / 画像処理 / AI", desc: "光学・画像・組込みを中核とする精密大手。" },
    ],
  },
  {
    name: "ゲーム・エンタメ",
    intro: "ゲーム好きが本領を発揮できる領域。C++/C#やゲームエンジンの経験が評価されます。",
    companies: [
      { slug: "nintendo", name: "任天堂", salary: "600〜950万円", tech: "C++ / C# / Unity / 自社エンジン", desc: "ハード一体型開発。独自エンジンの知見が中心。" },
      { slug: "bandai-namco", name: "バンダイナムコ", salary: "550〜900万円", tech: "C++ / C# / Unreal Engine / Unity", desc: "IP×ゲームの大規模開発。多様な職種を擁する。" },
      { slug: "square-enix", name: "スクウェア・エニックス", salary: "持株1,427万円(実態乖離注意)", tech: "C++ / C# / Java / 自社エンジン", desc: "FF・ドラクエを擁する大手。専門性重視の中途採用。" },
      { slug: "capcom", name: "カプコン", salary: "918万円(2025/3単体)", tech: "C++ / 内製RE ENGINE", desc: "モンハン・スト6。内製エンジン中心の開発。" },
      { slug: "konami", name: "コナミ", salary: "持株789万円(開発はコナミデジタル)", tech: "C / C++ / C#", desc: "eFootball・遊戯王・桃鉄の総合エンタメ。" },
      { slug: "sega-sammy", name: "セガ（セガサミーHD）", salary: "持株939万円(開発は株式会社セガ)", tech: "C++ / C# / Hedgehog / Unreal / Unity", desc: "ソニック・龍が如く。内製＋商用エンジン併用。" },
      { slug: "koei-tecmo", name: "コーエーテクモ", salary: "持株793万円(開発はゲームス)", tech: "C++ / 内製Katana Engine", desc: "無双・仁王・信長の野望。内製文化が強い。" },
      { slug: "gungho", name: "ガンホー", salary: "750万円(2024/12単体)", tech: "Unity / C# / 大規模サーバー", desc: "パズドラ運営。長期運用タイトル＋サーバー開発。" },
      { slug: "mixi", name: "MIXI（ミクシィ）", salary: "単体791万円(2025/3)", tech: "Go / Ruby / Swift / Kotlin / C++", desc: "モンスト・みてね等を展開するエンタメ企業。" },
      { slug: "gree", name: "グリー（GREE）", salary: "持株865万円(2025/6)", tech: "PHP / Go / Unity / Swift / Kotlin", desc: "ゲーム・メタバース軸のテック企業。" },
      { slug: "colopl", name: "コロプラ", salary: "単体681万円(2025/9)", tech: "PHP(Laravel) / Go / Unity / Spanner", desc: "白猫等のモバイルゲーム。大規模サーバー運用。" },
      { slug: "kadokawa", name: "KADOKAWA", salary: "単体885万円(2025/3)", tech: "Scala / TypeScript / Go / Kotlin", desc: "出版・IP・ニコニコ(ドワンゴ)。開発は事業会社。" },
    ],
  },
  {
    name: "インフラ・クラウド",
    intro: "データセンター・自社クラウド・基盤運用が中核。インフラ実務×クラウド資格（AWS等）の掛け算が効く領域です。",
    companies: [
      { slug: "sakura-internet", name: "さくらインターネット", salary: "全社平均612万円(2025/3)", tech: "Linux / KVM / OpenStack / K8s / Terraform", desc: "DC・自社クラウド・GPU基盤を運営する国産インフラ。" },
      { slug: "gmo-pepabo", name: "GMOペパボ", salary: "全社平均551万円(2024/12)", tech: "Ruby / Rails / Go / Linux / K8s", desc: "ホスティング〜EC・minne。技術発信が活発。" },
      { slug: "classmethod", name: "クラスメソッド", salary: "非公開(非上場)", tech: "AWS / Terraform / TypeScript / Python", desc: "AWSプレミアティアパートナー・DevelopersIOのクラウド専業。" },
      { slug: "future", name: "フューチャー（Future）", salary: "親会社単体841万円(2024/12)", tech: "Java / Go / AWS / GCP / Azure / K8s", desc: "戦略から実装まで一気通貫のITコンサル。" },
      { slug: "iij", name: "IIJ（インターネットイニシアティブ）", salary: "全社平均747万円(2026/3)", tech: "ネットワーク / クラウド基盤 / セキュリティ / IoT", desc: "日本のインターネットを支えてきたネットワーク・クラウドの老舗。" },
    ],
  },
  {
    name: "通信・金融",
    intro: "通信×ITや金融決済システムの大規模基盤。大企業のジョブ型移行でミドル中途の門戸が広がっています。",
    companies: [
      { slug: "kddi", name: "KDDI", salary: "単体1,018万円(2025/3)", tech: "5G / クラウド / データ・AI", desc: "通信×ITを軸に事業拡張する通信大手。" },
      { slug: "ntt", name: "NTT（日本電信電話）", salary: "持株単体1,069万円(2025/3)", tech: "IOWN / AI / クラウド / ソフトウェア工学", desc: "グループのR&Dを担う持株会社。事業会社とは別。" },
      { slug: "jcb", name: "JCB（ジェーシービー）", salary: "非開示(非上場)", tech: "Go / Java / Python / GCP / Kubernetes", desc: "日本発の国際カードブランドの決済システム。" },
    ],
  },
];

const allCompanies = categories.flatMap((c) => c.companies);

const toc = [
  { id: "guide", label: "企業研究の使い方" },
  ...categories.map((c, i) => ({ id: `cat-${i}`, label: c.name })),
];

export default function CompanyIndexPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "企業別エンジニア転職ガイド一覧",
    description:
      "外資ビッグテック・メガベンチャー・SaaS・SIer・メーカー・ゲーム・インフラ・通信金融の全90社をエンジニア転職の視点で業態分類した一覧ページ。",
    url: "https://middle-engineer.com/company/",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allCompanies.length,
      itemListElement: allCompanies.map((company, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://middle-engineer.com/company/${company.slug}/`,
        name: `${company.name} エンジニア転職ガイド`,
      })),
    },
  };

  return (
    <>
      <ArticleJsonLd
        title="企業別エンジニア転職ガイド一覧【90社】業態別に分類"
        description="外資ビッグテック・メガベンチャー・SaaS・SIer・メーカー・ゲーム・インフラ・通信金融の全90社をエンジニア転職の視点で業態分類した一覧ページ。"
        url="/company/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "企業別ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          企業別エンジニア転職ガイド一覧【90社】
        </h1>
        <p className="text-slate-600 leading-relaxed mb-4">
          GAFAMから国内メガベンチャー、SaaS、SIer、メーカー、ゲームまで、全{allCompanies.length}社を業態別に分類しました。同じ「エンジニア採用」でも、業態によって求められる経験・選考スタイル・年収レンジは大きく異なります。気になる企業のガイドでは、採用の特徴・技術スタック・年収データ・選考フロー・30代40代視点での向き不向きまで掘り下げています。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={["各社公式採用ページ・技術ブログ", "上場企業の有価証券報告書", "口コミサイト集計値"]}
        />

        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月｜年収レンジは公式求人の提示レンジや口コミサイト集計値の傾向であり、職種・等級により変動します。
        </p>

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ガイド: 企業研究の使い方 */}
        <section id="guide" className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">企業研究の使い方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            企業別ガイドは「応募する/しない」を決める前の比較材料として使うのが効果的です。ミドル層が企業研究で見るべきポイントは、知名度ではなく次の4点に絞られます。
          </p>
          <ul className="space-y-3 text-slate-600 leading-relaxed list-disc pl-5 mb-4">
            <li>
              <span className="font-medium text-slate-700">技術スタックと自分の経験の重なり</span>
              ：使用言語・クラウドが現職と近いほど即戦力として評価され、年代のハードルが下がります。
            </li>
            <li>
              <span className="font-medium text-slate-700">選考スタイル</span>
              ：外資ビッグテックはコーディング・アルゴリズム面接、SIerやメーカーは経歴と業務知識重視など、対策の方向性が業態で変わります。
            </li>
            <li>
              <span className="font-medium text-slate-700">年収の構造</span>
              ：上場企業は有価証券報告書の平均年収が一つの目安になりますが、これは全社平均であり、エンジニア職や等級によってレンジは上下します。提示レンジは求人ベースで確認しましょう。
            </li>
            <li>
              <span className="font-medium text-slate-700">働き方とカルチャー</span>
              ：リモート可否・評価制度・組織規模は、30代40代が長く働けるかを左右する重要な判断軸です。
            </li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            まず業態カテゴリで方向性を絞り、2〜3社のガイドを横断して比較すると、自分に合う企業タイプが見えてきます。具体的な求人や非公開の選考情報は、その業態に強いエージェント経由で集めるのが現実的です。
          </p>
        </section>

        {/* カテゴリ別 */}
        {categories.map((category, ci) => (
          <section key={category.name} id={`cat-${ci}`} className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-2 pb-2 border-b border-slate-200">
              {category.name}
            </h2>
            <p className="text-sm text-slate-600 mb-4">{category.intro}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {category.companies.map((company) => (
                <Link
                  key={company.slug}
                  href={`/company/${company.slug}/`}
                  className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors group"
                >
                  <h3 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-petrol transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-xs text-slate-600 mb-2">{company.desc}</p>
                  <p className="text-xs text-slate-500 mb-1">
                    <span className="font-medium text-slate-600">年収目安:</span> {company.salary}
                  </p>
                  <p className="text-xs text-slate-500">
                    <span className="font-medium text-slate-600">技術:</span> {company.tech}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* 関連 */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-800 mb-4">企業選びに役立つガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Link href="/knowledge/startup-vs-enterprise/" className="text-petrol hover:underline">→ スタートアップvs大企業の選び方</Link>
            <Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">→ 技術面接対策ガイド</Link>
            <Link href="/knowledge/offer-compare/" className="text-petrol hover:underline">→ 複数オファーの比較方法</Link>
            <Link href="/skill/" className="text-petrol hover:underline">→ スキル別の転職戦略を見る</Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">あなたに合った企業を見つけよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに無料相談して、最適な企業をマッチングしてもらいましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>
      </article>
    </>
  );
}
