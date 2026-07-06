# 🔧 GramBook 完整設置指南

按照這個指南逐步設置你的 GramBook 項目

## 📋 第一步：準備工作

### ✅ 已安裝

確保你已經安裝：
- Git
- Node.js 18+
- npm 或 yarn

檢查版本：
```bash
node --version    # 應該是 v18 或更高
npm --version     # 應該是 9 或更高
git --version     # 任何最新版本
```

---

## 🏗️ 第二步：本地項目設置

### 1. 克隆仓库到本地

```bash
git clone https://github.com/Ranjyue/spanishlu-grambook.git
cd spanishlu-grambook
```

### 2. 安装依赖

```bash
npm install
```

你會看到：
```
added 123 packages in 5.12s
```

### 3. 驗證安装

```bash
npm run dev
```

你應該看到：
```
▲ [wrangler] Serving on http://localhost:8787
```

在瀏覽器中訪問 `http://localhost:8787` ✨

按 `Ctrl+C` 停止本地伺服器

---

## ☁️ 第三步：Cloudflare 配置

### 1. 創建/登錄 Cloudflare 帳戶

訪問 [cloudflare.com](https://cloudflare.com) 並登錄

### 2. 獲取 Account ID

1. 進入 Cloudflare Dashboard
2. 右上角 → 用戶名 → [Account Home](https://dash.cloudflare.com)
3. 在「API 令牌」區域中，複製 **Account ID**

```
Account ID 看起來像：
a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
```

### 3. 生成 API Token

1. Cloudflare Dashboard → 右上角 → My Profile
2. 左側菜單 → **API Tokens**
3. 點擊「Create Token」按鈕
4. 選擇「Edit Cloudflare Workers」模板
5. 點擊「Use template」
6. 確認權限（默認即可）
7. 複製整個 Token（隱藏部分點擊「Show」）

```
API Token 看起來像：
v1.0abc123def456ghi789jkl012mnopqrstu...
```

### 4. 更新 wrangler.toml

在項目根目錄編輯 `wrangler.toml`：

```toml
name = "spanishlu-grambook"
main = "src/index.js"
compatibility_date = "2024-07-06"
compatibility_flags = ["nodejs_compat"]

# 替換為你的 Account ID
account_id = "YOUR_ACCOUNT_ID_HERE"

workers_dev = true
```

將 `YOUR_ACCOUNT_ID_HERE` 替換為你的實際 Account ID

### 5. 本地測試部署（可選）

```bash
# 使用 CLI 登錄
npx wrangler login

# 部署到 Cloudflare
npm run deploy
```

你會看到部署成功的訊息 ✅

---

## 🤖 第四步：GitHub Actions 自動部署

### 1. 添加 GitHub Secrets

進入你的 GitHub 仓库：

1. 點擊 **Settings** 標籤
2. 左側菜單 → **Secrets and variables** → **Actions**
3. 點擊「New repository secret」

**添加第一個 Secret：**
- Name: `CLOUDFLARE_API_TOKEN`
- Value: 你從 Cloudflare 複製的 API Token
- 點擊「Add secret」

**添加第二個 Secret：**
- Name: `CLOUDFLARE_ACCOUNT_ID`
- Value: 你的 Account ID
- 點擊「Add secret」

✅ 現在你的仓库有兩個 secrets

### 2. 驗證 GitHub Actions

1. 進入仓库的 **Actions** 標籤
2. 你應該看到一個 workflow：「部署到 Cloudflare Workers」

---

## 📝 第五步：添加課程內容

### 1. 準備你的 HTML 文件

確保你的 HTML 文件是獨立的（包含所有 CSS 和 JS）

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <style>
    /* 你的所有 CSS 內聯在這裡 */
  </style>
</head>
<body>
  <!-- 你的課程內容 -->
  <script>
    // 你的所有 JavaScript 內聯在這裡
  </script>
</body>
</html>
```

### 2. 放入 content 目錄

```bash
# 例如
content/
├── elcumpleanos01-protected.html
├── lesson2-protected.html
└── lesson3-protected.html
```

### 3. 更新 src/index.js

添加每個課程的密碼和元數據：

```javascript
// 課程密碼配置
const LESSON_PASSWORDS = {
  'elcumpleanos': 'password_for_lily',
  'lesson2': 'password_for_lesson2',
  'lesson3': 'password_for_lesson3',
};

// 課程元數據
const LESSONS_METADATA = {
  'elcumpleanos': {
    name: '莉莉的生日',
    slug: 'elcumpleanos',
    level: 'A1',
    file: 'elcumpleanos01-protected.html',
    description: 'POD 和 POI 代詞練習'
  },
  'lesson2': {
    name: '第二課名稱',
    slug: 'lesson2',
    level: 'A2',
    file: 'lesson2-protected.html',
    description: '課程描述'
  },
  // 繼續添加...
};
```

---

## 🚀 第六步：推送和部署

### 1. 提交本地更改

```bash
git add .
git commit -m "初始化 GramBook 項目設置"
git push origin main
```

### 2. 監控部署

1. 進入 GitHub 仓库
2. 點擊 **Actions** 標籤
3. 你應該看到工作流正在運行

等待綠色 ✅ 標記，表示部署成功

### 3. 訪問你的 GramBook

部署成功後，訪問：

```
https://spanishlu-grambook.YOUR-RANDOM-SUBDOMAIN.workers.dev
```

你將看到課程列表頁面 ✨

---

## 🌍 第七步（可選）：自定義域名

### 用 Cloudflare 自定義域名

1. Cloudflare Dashboard → Workers → spanishlu-grambook
2. 點擊「Settings」
3. 在「Domains」區域添加自定義域名
4. 將域名 DNS 指向 Cloudflare
5. 完成！

你的 GramBook 現在可在 `https://grambook.luzranjyue.com` 訪問 🎉

---

## 🔐 安全檢查清單

部署到生產環境前檢查：

- [ ] 所有課程密碼已更新且足夠複雜
- [ ] GitHub Secrets 已配置
- [ ] HTML 文件不包含敏感信息
- [ ] `wrangler.toml` 中沒有敏感信息（Account ID 是公開的）
- [ ] 已測試 GitHub Actions 部署流程
- [ ] 已驗證課程可正常訪問和密碼驗證

---

## 🆘 故障排除

### 問題：`npm install` 失敗

```bash
# 清除 npm 緩存
npm cache clean --force

# 重新安裝
npm install
```

### 問題：本地開發 `npm run dev` 無法運行

```bash
# 檢查 Node 版本
node --version

# 更新 wrangler
npm install -g wrangler@latest

# 重新嘗試
npm run dev
```

### 問題：GitHub Actions 部署失敗

1. 檢查 GitHub Secrets 是否正確設置
2. 檢查 `wrangler.toml` 中的 Account ID
3. 查看 Actions 日誌獲取具體錯誤信息

### 問題：密碼驗證不工作

1. 確認 `src/index.js` 中的密碼與課程 slug 匹配
2. 檢查是否有拼寫錯誤（區分大小寫）
3. 清除瀏覽器緩存重試

---

## 📚 後續學習資源

- [Cloudflare Workers 完整教程](https://developers.cloudflare.com/workers/get-started/)
- [Wrangler 命令參考](https://developers.cloudflare.com/workers/wrangler/)
- [GitHub Actions 工作流語法](https://docs.github.com/zh/actions/using-workflows/workflow-syntax-for-github-actions)

---

## ✨ 完成！

恭喜！你已經成功設置了 GramBook。現在你可以：

1. 🎓 添加更多課程
2. 🔐 管理課程密碼
3. 🚀 自動部署更新
4. 🌍 分享給學生

如有問題，請聯繫 Luz Ran Jyue ✨

---

**最後更新：2026-07-06**
