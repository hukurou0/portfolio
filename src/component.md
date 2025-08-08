```markdown
# 1ページスクロール版ポートフォリオ 実装依頼資料

## 1. 目的
現状の `currentView` によるページ切り替え構造を廃止し、  
**1ページでスクロールしながら全コンテンツを閲覧できるポートフォリオ**に変更する。

- 各セクションに「もっと見る」リンクを設置し、詳細ページに遷移できる構造にする。
- レスポンシブ対応（スマホ・タブレット・PC）

---

## 2. ディレクトリ構造案

```

src/
components/
Hero.tsx                  # トップのキャッチコピー、自己紹介、CTAボタン
ProfileSection.tsx        # プロフィール・略歴・得意分野
ProjectsSection.tsx       # プロジェクトカード一覧（トップでは一部のみ表示）
ArticlesSection.tsx       # 記事カード一覧（トップでは一部のみ表示）
TalksSection.tsx          # 登壇カード一覧（トップでは一部のみ表示）
MediaAwardsSection.tsx    # メディア掲載・受賞歴（トップでは一部のみ表示）
Footer.tsx                 # お問い合わせ・SNSリンク
Card.tsx                   # プロジェクト/記事/登壇共通カードUI
data/
projects.ts
articles.ts
talks.ts
mediaAwards.ts
types/
index.ts                   # Project, Article, Talk, MediaAward などの型定義
pages/
index.tsx                  # 1ページスクロール構造のメイン
projects.tsx               # プロジェクト詳細一覧ページ
articles.tsx               # 記事詳細一覧ページ
talks.tsx                  # 登壇詳細一覧ページ
media-awards.tsx           # メディア掲載・受賞詳細ページ

```

---

## 3. コンポーネント設計

### Hero.tsx
- **役割**: キャッチコピー、自己紹介、CTAボタン
- **props**
  - `title: string`
  - `subtitle: string`
  - `ctaText?: string`
  - `ctaLink?: string`

---

### ProfileSection.tsx
- **役割**: プロフィール・略歴・得意分野
- **props**
  - `name: string`
  - `bio: string`
  - `skills: string[]`

---

### ProjectsSection.tsx
- **役割**: プロジェクトカードを最大3件表示、「もっと見る」ボタンで `/projects` へ遷移
- **props**
  - `projects: Project[]`
  - `showCount: number`

---

### ArticlesSection.tsx
- **役割**: 記事カードを最大2件表示、「もっと見る」ボタンで `/articles` へ遷移
- **props**
  - `articles: Article[]`
  - `showCount: number`

---

### TalksSection.tsx
- **役割**: 登壇カードを最大2件表示、「もっと見る」ボタンで `/talks` へ遷移
- **props**
  - `talks: Talk[]`
  - `showCount: number`

---

### MediaAwardsSection.tsx
- **役割**: メディア掲載・受賞歴をロゴや名前で表示、「もっと見る」ボタンで `/media-awards` へ遷移
- **props**
  - `mediaAwards: MediaAward[]`
  - `showCount: number`

---

### Card.tsx（共通カードUI）
- **役割**: プロジェクト・記事・登壇・メディア掲載で共通して使えるカードUI
- **props**
  - `title: string`
  - `description?: string`
  - `image?: string`
  - `tags?: string[]`
  - `link: string`
  - `variant: 'project' | 'article' | 'talk' | 'media'`

---

### Footer.tsx
- **役割**: SNSリンク、メールリンク、お問い合わせ
- **props**
  - `socialLinks: { type: 'x' | 'github' | 'linkedin' | 'email', url: string }[]`

---

## 4. スクロール構造のUIフロー

```

Hero
↓
ProfileSection
↓
ProjectsSection
↓
ArticlesSection
↓
TalksSection
↓
MediaAwardsSection
↓
Footer

```

- ナビゲーションバーから各セクションへのアンカーリンクを追加
- 各「もっと見る」リンクから詳細ページに遷移可能

---

## 5. 実装上の注意点
- **レスポンシブ対応必須**（スマホ時は縦1カラム、PCは2〜3カラム）
- **画像にはalt属性を付与**
- Tailwindのユーティリティクラスを使用し、インラインstyleを避ける
- 各セクションは独立しており、後から順序変更可能な構造にする
- `data/` 内のデータを props 経由で渡し、コンポーネント内で直接定義しない
```

---

このまま渡せば、実装者が迷わず**1ページスクロール＋詳細ページ付き**の構造に作り直せます。
