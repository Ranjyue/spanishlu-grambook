# 🎓 GramBook - 西語萌萌學園文法練習平台

西班牙語互動式文法練習平台，由 Luz Ran Jyue 創建

## 📚 專案特色

- ✨ **Cloudflare Workers** 部署 - 快速全球化
- 🔐 **課程密碼保護** - 每課程獨立密碼
- 📱 **響應式設計** - 桌面 + 行動端支持
- 🚀 **自動化部署** - GitHub Actions CI/CD
- 📊 **課程管理** - 易於添加新課程

## 🏗️ 項目結構

```
spanishlu-grambook/
├── src/
│   └── index.js                 # Cloudflare Worker 入口
├── content/
│   ├── elcumpleanos01-protected.html
│   └── lesson2-protected.html
├── .github/
│   └── workflows/
│       └── deploy.yml           # 自動部署配置
├── package.json                 # Node.js 依賴
├── wrangler.toml               # Cloudflare 配置
└── README.md
```

## 🚀 快速開始

### 1️⃣ 前置要求

- Node.js 18+
- npm 或 yarn
- Cloudflare 帳戶
- GitHub 帳戶

### 2️⃣ 本地開發

```bash
# 1. 克隆倉庫
git clone https://github.com/Ranjyue/spanishlu-grambook.git
cd spanishlu-grambook

# 2. 安装依賴
npm install

# 3. 本地運行
npm run dev

# 4. 訪問 http://localhost:8787
```

### 3️⃣ 部署到 Cloudflare Workers

#### 方案 A：使用 GitHub Actions（推薦）

1. **獲取 Cloudflare 憑證**
   - 訪問 [Cloudflare Dashboard](https://dash.cloudflare.com)
   - 获取你的 **Account ID** 和 **API Token**

2. **添加 GitHub Secrets**
   - 進入倉庫 → Settings → Secrets and variables → Actions
   - 添加兩個密碼：
     - `CLOUDFLARE_API_TOKEN`: 你的 API Token
     - `CLOUDFLARE_ACCOUNT_ID`: 你的 Account ID

3. **推送代码自动部署**
   ```bash
   git add .
   git commit -m "部署更新"
   git push origin main
   ```

#### 方案 B：手动部署

```bash
# 1. 登录 Cloudflare
npx wrangler login

# 2. 部署
npm run deploy
```

## 🔐 管理課程和密碼

### 添加新課程

1. **更新 `src/index.js`**

```javascript
// 添加密码
const LESSON_PASSWORDS = {
  'elcumpleanos': 'password_1',
  'nuevo_curso': 'password_2',  // 新课程
};

// 添加元数据
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

2. **添加 HTML 文件**
   - 将 HTML 放在 `content/` 目录下
   - 文件名格式：`{课程-slug}-protected.html`

3. **推送更新**
   ```bash
   git add .
   git commit -m "添加新課程：新課程名稱"
   git push origin main
   ```

## 📋 課程管理

### 課程元數據字段

| 字段 | 類型 | 說明 |
|------|------|------|
| `name` | string | 課程顯示名稱（繁体中文） |
| `slug` | string | URL 路由標識（小寫英文/數字/連字符） |
| `level` | string | 西班牙語級別（A1, A2, B1, B2 等） |
| `file` | string | HTML 文件名 |
| `description` | string | 簡短課程描述 |

## 🔑 密碼安全最佳實踐

⚠️ **重要**：密碼現在存儲在 `src/index.js` 中。如果需要更高安全性：

1. **使用 Cloudflare KV**（生產環境推薦）
   ```javascript
   const password = await env.LESSONS.get(slug);
   ```

2. **使用環境變量**
   ```javascript
   const password = env[`PASSWORD_${slug.toUpperCase()}`];
   ```

## 🚀 部署檢查清單

部署前確認：

- [ ] 所有 HTML 文件已上傳
- [ ] 密碼已在 `src/index.js` 中配置
- [ ] 課程元數據已更新
- [ ] `wrangler.toml` 中的 Account ID 已設置
- [ ] GitHub Secrets 已配置
- [ ] 本地測試 `npm run dev` 成功

## 🌍 訪問你的 GramBook

部署後訪問：

```
https://spanishlu-grambook.YOUR_SUBDOMAIN.workers.dev
```

或用自定義域名：
```
https://grambook.luzranjyue.com
```

（需要在 Cloudflare 中配置）

## 📚 相關資源

- [Cloudflare Workers 文檔](https://developers.cloudflare.com/workers/)
- [Wrangler CLI 文檔](https://developers.cloudflare.com/workers/wrangler/)
- [GitHub Actions 文檔](https://docs.github.com/en/actions)

## 📝 開發日誌

- **2026-07-06**: 初始化 GitHub 項目結構，設置 Cloudflare Workers + Node.js

## 👩‍💫 維護者

**Luz Ran Jyue** - 西語萌萌學園 ✨ con Luz

- 🌐 [官方網站](https://luzranjyue.com)
- 📱 [Instagram](https://instagram.com)
- 💬 [Discord 社群](https://discord.com)

## 📄 許可證

MIT License

---

**Made with ❤️ for Spanish learners everywhere**
