module.exports = {
    "env": {
        "browser": true,
        "es6": true,
    },
    "extends": [
        "eslint:recommended",

        // 型を必要としないプラグインの推奨ルールをすべて有効
        // 'plugin:@typescript-eslint/recommended',
        // 型を必要とするプラグインの推奨ルールをすべて有効
        'plugin:@typescript-eslint/recommended-requiring-type-checking',

        "prettier", // prettierのextendsは他のextendsより後に記述する
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json" // TypeScriptのLint時に参照するconfigファイルを指定
      },
    "plugins": ["@typescript-eslint"],
    "root": true, // 上位ディレクトリにある他のeslintrcを参照しないようにする
    "rules": {}
}