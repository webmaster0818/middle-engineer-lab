# KW拡張 制作ルール（middle-engineer.com / 全フェーズ共通）

## 必読・準拠
- 既存テンプレ: 同種の既存ページ（例: skill/aws, age/40s, knowledge/resume, company/nintendo）をRead して構造・コンポーネント・トーンを完全踏襲
- research/style-guide.md（P0-P2の構成定義）も準拠

## 技術ルール（厳守・過去の失敗から）
- `export const metadata: Metadata = {...}` を**必ずexport**（const定義だけは禁止＝デフォルトtitle化する）
- **titleに「| ミドルエンジニア転職ラボ」を付けない**（layout.tsxのtemplate `%s | ミドルエンジニア転職ラボ` が自動付与。二重禁止）
- title 32字前後、description 110字前後
- `import DataNote from "@/components/DataNote"` を使い、H1導入後に `<DataNote surveyedAt="2026年6月" sources={[...]} />`
- 内部リンクは**末尾スラッシュ・実在ルートのみ**（存在しないページにリンクしない。新設する兄弟ページ同士はOK）
- ArticleJsonLd + FAQPage JSON-LD + Breadcrumb を使用（既存パターン踏襲）
- 単一サーバーコンポーネント（"use client"なし）。ビルドは親が実行

## コンテンツルール（勝つために・MEMORYルール準拠）
- 競合調査で特定した「勝ち要素」を必ず全て満たす
- 結論ファースト→目次→本文→30/40代独自視点→FAQ→関連記事6本
- **数値は提供データシートの出典付きデータのみ**。各数値に「(出典・時点)」を併記
- 信頼度: 公的・公式（厚労省/経産省/IPA/PMI/国税庁/各公式）を「権威データ」、転職メディア集計は「参考値」と明示し断定回避
- 「確認不可/未確認」とされた数値は使わない or 取得日付き引用に留める
- **架空データ・架空口コミ・架空体験談は絶対禁止**。「当サイト独自アンケート」への言及も禁止
- デメリット・限界も正直に書く（E-E-A-T）
- 30-40代ミドル軸の独自視点を必ず入れる（最大のInformation Gain）

## 文字数
- 各ページ実テキスト8,000〜11,000字相当（水増しでなく情報密度で）
