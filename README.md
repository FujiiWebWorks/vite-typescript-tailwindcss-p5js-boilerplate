# daisyUI(Tailwind CSS)とp5.jsがサクッと使えるVite+TypeScript Boilerplate

Vite+TypeScript(Vanilla)フロントエンド開発環境にて、daisyUIをベースにしたTailwind CSS UIフレームワークと p5.js を使用して、インタラクティブなWebサイトを作成するためのボイラープレートです。
複雑なサイト構成は想定しておらず、最小限のサイト内遷移を前提として、クリエイティブな作業に集中できるように考えて作成しました。

# デモ

https://fujii-web.works/

# 特徴

- Vite[^1]: 次世代フロントエンドツール。Vite のインスタントホットモジュールリプレースメント (HMR) により、超高速な開発をお楽しみください。
- TypeScript[^2]: 静的型付けを活用して、コードの保守性とエラー防止を向上させます。
- Tailwind CSS[^3]: Tailwind CSS のユーティリティファーストのアプローチで、プロジェクトを迅速にスタイリングできます。
- daisyUI[^4]: daisyUI が提供する追加のコンポーネントとユーティリティで Tailwind CSSをより使いやすく強化します。
- Theme Change[^5]: Theme Change プラグインを使用して、ライトテーマとダークテーマを簡単に切り替えることができます。
- p5.js[^6]: p5.js の直感的な描画ライブラリを使用して、魅力的なビジュアルとインタラクティブな要素を作成します。

# 始め方

1. このリポジトリをクローンします。
1. 依存関係をインストールします: npm install
1. 開発サーバーを起動します: npm run dev

[^1]: https://vitejs.dev/
[^2]: https://www.typescriptlang.org/
[^3]: https://tailwindcss.com/
[^4]: https://daisyui.com/
[^5]: https://github.com/saadeghi/theme-change
[^6]: https://p5js.org/
