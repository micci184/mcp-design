---
description: 
auto_execution_mode: 1
---

## Design to GitHub Issues

このワークフローはFigmaデザインを分析し、実装に必要なissueを自動作成します。

### 前提条件:
- GitHub MCPが設定済み
- Figma MCPが設定済み  
- tokens.jsonがfrontendディレクトリに存在
- .windsurf/rules/issue-templates.mdにテンプレート定義済み

### 設定:

```yaml
figma_url: "https://www.figma.com/design/0MgopTkQXeu6xM7wSu87u0/Simple-Design-System--Community-?node-id=175-5828"
target_labels: ["frontend", "component", "design-system"]
```

### ステップ:

1. **GitHub既存issue確認**
   - GitHub MCPで全オープンissueを取得
   - "component", "design", "frontend"ラベルのissueを抽出
   - 既存コンポーネント実装issueをリスト化
   - 重複作成防止のため、タイトルと説明を保存

2. **Figmaデザイン取得と分析**
   - Figma MCPで指定URLのデザインを取得:
     * URL: https://www.figma.com/design/0MgopTkQXeu6xM7wSu87u0/Simple-Design-System--Community-?node-id=175-5828
     * ファイルID: 0MgopTkQXeu6xM7wSu87u0
     * ノードID: 175-5828 を直接参照
   - デザインの構造を分析:
     * コンポーネント数をカウント
     * セクション構成を把握（Header, Hero, Pricing, FAQ, Footer）
     * カラーバリエーションを確認
     * インタラクティブ要素を特定（ボタン、アコーディオン）

3. **デザイントークン検証**
   - frontend/tokens.jsonを読み込み
   - Figmaで使用されている値と照合:
     * カラートークンの一致確認
     * スペーシングシステムの確認
     * タイポグラフィスケールの確認
   - 不足トークンをリスト化

4. **ギャップ分析と必要issue洗い出し**
   
   a. **Figmaコンポーネントと実装状況の照合**
      - Figmaで識別したコンポーネント:
        * Header/Navigation
        * Hero Section
        * Pricing Cards (3 variants)
        * Accordion/FAQ
        * Footer
      - 各コンポーネントについて既存issue確認
      - 未作成のコンポーネントを特定

   b. **実装優先順位の決定**
      - 依存関係を分析:
        * 基盤コンポーネント（Button, Typography）
        * 独立コンポーネント（並行作業可能）
        * 統合コンポーネント（他に依存）
      - 優先順位を設定

   c. **必要なissueリスト生成**
