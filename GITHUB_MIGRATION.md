# 📦 GitHub 重新設置清單

用這個清單完整重組你的 GramBook GitHub 仓库

---

## 🔄 重新設置步驟

### 第一步：備份當前仓库（可選）

```bash
# 如果需要保留舊文件，先備份
git branch backup-before-migration
```

### 第二步：清理舊文件

在你的本地仓库中，刪除舊的無用文件：

```bash
# 删除这些旧文件
git rm 05072026
git rm README.md  # （我们会用新的替换）

# 如果有其他旧文件也删除
git rm <旧文件名>

# 提交删除
git commit -m "清理：移除旧的项目文件"
```

### 第三步：添加新項目文件

複製以下文件到你的仓库根目錄：

```
新項目文件結構：
spanishlu-grambook/
├── package.json           ✅ 新增
├── wrangler.toml         ✅ 新增
├── README.md             ✅ 新增（替換舊的）
├── SETUP_GUIDE.md        ✅ 新增（詳細指南）
├── GITHUB_MIGRATION.md   ✅ 新增（本文件）
├── .gitignore            ✅ 新增
├── .github/
│   └── workflows/
│       └── deploy.yml    ✅ 新增
├── src/
│   └── index.js          ✅ 新增
└── content/
    └── elcumpleanos01-protected.html  ✅ 已有
```

### 第四步：提交所有新文件

```bash
git add package.json wrangler.toml README.md SETUP_GUIDE.md \
        GITHUB_MIGRATION.md .gitignore .github/ src/

git commit -m "重构：采用 Cloudflare Workers + Node.js 项目结构"

git push origin main
```

### 第五步：驗證 GitHub 結構

訪問你的 GitHub 仓库，確認：

- [ ] ✅ 文件樹顯示新的項目結構
- [ ] ✅ `.github/workflows/deploy.yml` 存在
- [ ] ✅ `src/` 目錄有 `index.js`
- [ ] ✅ `package.json` 存在
- [ ] ✅ `wrangler.toml` 存在

---

## 🔑 Cloudflare 配置

### 第一步：登錄 Cloudflare

訪問 [Cloudflare Dashboard](https://dash.cloudflare.com)

### 第二步：複製你的認證信息

1. **Account ID**
   - 進入 Dashboard 首頁
   - 右下角找到「Account ID」
   - 複製它

2. **API Token**
   - 右上角 → My Profile
   - 左側 → API Tokens
   - 「Create Token」→ 「Edit Cloudflare Workers」
   - 複製整個 Token

### 第三步：更新本地 wrangler.toml

編輯 `wrangler.toml`，將以下字段替換為你的實際值：

```toml
account_id = "YOUR_ACCOUNT_ID_HERE"
```

### 第四步：本地測試（可選但推薦）

```bash
# 安裝依賴
npm install

# 本地運行
npm run dev

# 訪問 http://localhost:8787 測試
# 按 Ctrl+C 停止
```

---

## 🚀 GitHub Actions 配置

### 第一步：添加 GitHub Secrets

進入仓库 Settings → Secrets and variables → Actions

**添加 2 個 Secrets：**

| Name | Value |
|------|-------|
| `CLOUDFLARE_API_TOKEN` | 你的 API Token |
| `CLOUDFLARE_ACCOUNT_ID` | 你的 Account ID |

### 第二步：驗證 Workflow

1. 進入仓库 → **Actions** 標籤
2. 你應該看到「部署到 Cloudflare Workers」workflow

### 第三步：觸發首次部署

```bash
# 推送任何變更來觸發部署
git add .
git commit -m "初始部署配置"
git push origin main
```

進入 Actions 標籤，觀察部署過程 ✅

---

## 📝 課程和密碼配置

### 第一步：編輯 src/index.js

打開 `src/index.js` 並查找：

```javascript
const LESSON_PASSWORDS = {
  'elcumpleanos': 'tu_password_aqui_1',
  'lesson2': 'tu_password_aqui_2',
};
```

**更新現有課程密碼：**

```javascript
const LESSON_PASSWORDS = {
  'elcumpleanos': 'YOUR_ACTUAL_PASSWORD_HERE',
};
```

### 第二步：添加新課程

當你準備好新課程 HTML 時：

1. **保存 HTML 到 content/your-lesson.html**

2. **更新密碼配置：**
   ```javascript
   const LESSON_PASSWORDS = {
     'elcumpleanos': 'password1',
     'your-lesson': 'password2',  // 新增
   };
   ```

3. **更新元數據：**
   ```javascript
   const LESSONS_METADATA = {
     'your-lesson': {
       name: '你的課程名稱',
       slug: 'your-lesson',
       level: 'A1',  // 或其他級別
       file: 'your-lesson.html',
       description: '課程描述'
     }
   };
   ```

4. **提交並推送：**
   ```bash
   git add src/index.js content/your-lesson.html
   git commit -m "添加新課程：你的課程名稱"
   git push origin main
   ```

---

## ✅ 最終檢查清單

在開始使用前，確認所有項目都已完成：

- [ ] **本地開發**
  - [ ] 克隆仓库到本地
  - [ ] `npm install` 成功
  - [ ] `npm run dev` 可運行
  - [ ] 訪問 http://localhost:8787 正常

- [ ] **Cloudflare 設置**
  - [ ] 複製了 Account ID
  - [ ] 生成了 API Token
  - [ ] 更新了 wrangler.toml

- [ ] **GitHub 設置**
  - [ ] 添加了 2 個 Secrets
  - [ ] 刪除了舊的無用文件
  - [ ] 推送了所有新文件
  - [ ] Actions workflow 可見

- [ ] **課程配置**
  - [ ] 更新了第一個課程的密碼
  - [ ] 驗證了課程元數據
  - [ ] HTML 文件已放入 content/ 目錄

- [ ] **部署驗證**
  - [ ] GitHub Actions 成功運行
  - [ ] 訪問部署的 URL 成功
  - [ ] 課程列表頁面顯示正確
  - [ ] 密碼驗證工作正常

---

## 🎉 成功！

當所有檢查都完成後，你的 GramBook 已準備就緒！

**下一步：**

1. 📚 添加更多課程
2. 👥 邀請學生開始使用
3. 📊 收集反饋並改進
4. 🚀 持續部署更新

---

## 📞 需要幫助？

如有任何問題，參考：

- 📖 [SETUP_GUIDE.md](./SETUP_GUIDE.md) - 詳細設置指南
- 📝 [README.md](./README.md) - 項目概述
- 🔗 [Cloudflare Workers 文檔](https://developers.cloudflare.com/workers/)

---

**最後更新：2026-07-06**

**Made with ❤️ for Spanish learners**
