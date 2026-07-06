# 🎓 GramBook - 西語萌萌學園文法練習平台

西班牙語互動式文法練習平台，由 Luz Ran Jyue 創建 ✨

---

## 📚 專案特色

- ✨ **Cloudflare Workers** 部署 — 快速全球化
- 🔐 **課程密碼保護** — 每課程獨立密碼
- 📱 **響應式設計** — 桌面 + 行動裝置支援
- 🚀 **自動化部署** — GitHub Actions CI/CD
- 📊 **課程管理** — 易於新增課程

---

## 🏗️ 專案結構

```
spanishlu-grambook/
├── src/
│   └── index.js                 # Cloudflare Worker 進入點
├── content/
│   ├── elcumpleanos01-protected.html
│   └── lesson2-protected.html
├── .github/
│   └── workflows/
│       └── deploy.yml           # 自動部署設定
├── package.json                 # Node.js 依賴
├── wrangler.toml               # Cloudflare 設定
└── README.md
```

---

## 🚀 快速開始

### 1️⃣ 前置要求

- Node.js 18+
- npm 或 yarn
- Cloudflare 帳戶
- GitHub 帳戶

### 2️⃣ 本地開發

```bash
# 1. 複製仓庫
git clone https://github.com/Ranjyue/spanishlu-grambook.git
cd spanishlu-grambook

# 2. 安裝依賴
npm install

# 3. 本地執行
npm run dev

# 4. 訪問 http://localhost:8787
```

### 3️⃣ 部署到 Cloudflare Workers

#### 方式 A：使用 GitHub Actions（推薦）

1. **取得 Cloudflare 認證**
   - 訪問 [Cloudflare 儀表板](https://dash.cloudflare.com)
   - 取得你的 **Account ID** 和 **API Token**

2. **新增 GitHub Secrets**
   - 進入仓庫 → Settings → Secrets and variables → Actions
   - 新增兩個密鑰：
     - `CLOUDFLARE_API_TOKEN`: 你的 API Token
     - `CLOUDFLARE_ACCOUNT_ID`: 你的 Account ID

3. **推送程式碼自動部署**
   ```bash
   git add .
   git commit -m "部署更新"
   git push origin main
   ```

#### 方式 B：手動部署

```bash
# 1. 登入 Cloudflare
npx wrangler login

# 2. 部署
npm run deploy
```

---

## 🔐 管理課程和密碼

### 新增課程

1. **更新 `src/index.js`**

```javascript
// 新增密碼
const LESSON_PASSWORDS = {
  'elcumpleanos': 'password_1',
  'nuevo_curso': 'password_2',  // 新課程
};

// 新增元資料
const LESSONS_METADATA = {
  'nuevo_curso': {
    name: '新課程名稱',
    slug: 'nuevo_curso',
    level: 'A1',
    file: 'nuevo_curso-protected.html',
    description: '課程描述'
  }
};
```

2. **新增 HTML 檔案**
   - 將 HTML 放在 `content/` 目錄下
   - 檔案名稱格式：`{課程-slug}-protected.html`

3. **推送更新**
   ```bash
   git add .
   git commit -m "新增課程：新課程名稱"
   git push origin main
   ```

---

## 📋 課程管理

### 課程元資料欄位

| 欄位 | 類型 | 說明 |
|------|------|------|
| `name` | string | 課程顯示名稱（繁體中文） |
| `slug` | string | URL 路由標識（小寫英文/數字/連字號） |
| `level` | string | 西班牙語級別（A1, A2, B1, B2 等） |
| `file` | string | HTML 檔案名 |
| `description` | string | 簡短課程描述 |

---

## 🔑 密碼安全最佳實踐

⚠️ **重要**：密碼目前儲存在 `src/index.js` 中。如果需要更高安全性：

1. **使用 Cloudflare KV**（生產環境推薦）
   ```javascript
   const password = await env.LESSONS.get(slug);
   ```

2. **使用環境變數**
   ```javascript
   const password = env[`PASSWORD_${slug.toUpperCase()}`];
   ```

---

## ✅ 部署檢查清單

部署前確認：

- [ ] 所有 HTML 檔案已上傳
- [ ] 密碼已在 `src/index.js` 中設定
- [ ] 課程元資料已更新
- [ ] `wrangler.toml` 中的 Account ID 已設置
- [ ] GitHub Secrets 已設定
- [ ] 本地測試 `npm run dev` 成功

---

## 🌍 訪問你的 GramBook

部署後訪問：

```
https://spanishlu-grambook.YOUR_SUBDOMAIN.workers.dev
```

或使用自訂網域：
```
https://grambook.luzranjyue.com
```

（需要在 Cloudflare 中設定）

---

## 📚 相關資源

- [Cloudflare Workers 文件](https://developers.cloudflare.com/workers/)
- [Wrangler CLI 參考](https://developers.cloudflare.com/workers/wrangler/)
- [GitHub Actions 工作流語法](https://docs.github.com/zh/actions/using-workflows/workflow-syntax-for-github-actions)

---

## 📝 開發日誌

- **2026-07-06**: 初始化 GitHub 專案結構，設置 Cloudflare Workers + Node.js

---

## 👩‍💫 維護者

**Luz Ran Jyue** — 西語萌萌學園 ✨ con Luz

連繫我：

- 🌐 [官方網站](https://luzranjyue.com)
- 📷 [Instagram @luz_ranjyue](https://instagram.com/luz_ranjyue)
- 💬 [Discord 社群](https://discord.gg/XpJt7V8Yp)

---

## 📄 授權

MIT License

---

**Made with ❤️ for Spanish learners everywhere**
