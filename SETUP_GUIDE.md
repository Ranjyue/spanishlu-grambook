# 🚀 GramBook 設置和部署指南

**完整的分步驟說明，適合初學者**

---

## 📋 你需要的東西

- ✅ GitHub 帳號（已有）
- ✅ Cloudflare 帳號（已有）
- ✅ 自定義域名：luzranjyue.com（已有）
- ✅ Git 客戶端（可選，可用 GitHub Desktop）

---

## 🔧 第一步：在 GitHub 創建倉庫

### 選項 A：使用 GitHub 網站（最簡單）

1. **登入 GitHub：** https://github.com/login

2. **創建新倉庫：**
   - 點擊右上角 `+` → `New repository`
   - 或直接訪問 https://github.com/new

3. **填寫信息：**
   ```
   Repository name: spanishlu-grambook
   Description: GramBook - 西班牙語文法互動練習
   Public ☑️ (必須公開，讓 Cloudflare 可以看到)
   Add a README file ☑️
   Add .gitignore ☑️ (選擇 None)
   ```

4. **點擊 `Create repository`**

---

### 選項 B：使用 GitHub Desktop（推薦新手）

1. **安裝 GitHub Desktop：** https://desktop.github.com

2. **登入帳號**

3. **創建新倉庫：**
   - File → New Repository
   ```
   Name: spanishlu-grambook
   Description: GramBook - 西班牙語文法互動練習
   Local Path: 選擇保存位置
   Initialize this repository with a README ☑️
   ```

4. **點擊 `Create Repository`**

---

## 📁 第二步：添加文件

### 下載我為你準備的文件

我已為你創建了以下文件，你可以從這裡下載：
- ✅ `index.html` - 首頁
- ✅ `README.md` - 項目說明
- ✅ `.gitignore` - Git 配置
- ✅ `PASSWORD_TEMPLATE.html` - 密碼模板

### 創建本地文件夾結構

在你電腦上創建此結構（如果還沒有）：

```
spanishlu-grambook/
├── index.html
├── README.md
├── .gitignore
├── SETUP_GUIDE.md (本文件)
├── PASSWORD_TEMPLATE.html
└── grambook/
    └── 01-cumpleaños/
        ├── es.html (稍後添加)
        └── zh-tw.html (稍後添加)
```

### 添加我的文件

1. **下載文件包**（我已為你準備）

2. **複製到本地資料夾：**
   ```
   spanishlu-grambook/
   ├── index.html ← 複製進來
   ├── README.md ← 複製進來
   ├── .gitignore ← 複製進來
   └── PASSWORD_TEMPLATE.html ← 複製進來
   ```

3. **創建課程文件夾：**
   ```bash
   # 如果用命令行
   mkdir -p grambook/01-cumpleaños
   ```

   或用文件瀏覽器手動創建

---

## 📝 第三步：準備課程文件

### 創建密碼保護的課程

#### 對於西班牙語版本 (es.html)：

1. **複製模板：**
   ```
   複製 PASSWORD_TEMPLATE.html
   粘貼到 grambook/01-cumpleaños/
   重命名為 es.html
   ```

2. **編輯 es.html：**
   - 用文本編輯器打開
   - 找到這一行：
     ```html
     <!-- ========================================
          請將你的完整 HTML 內容放在這裡
          ...
          ======================================== -->
   ```

3. **替換內容：**
   - 打開你之前的 `el_cumpleaños_grambook_interactivo.html`
   - 複製 `<container>` 到 `</footer>` 之間的所有內容
   - 粘貼到 es.html 中，替換註釋部分
   - **不要替換最上面的 `<!DOCTYPE>` 和 `<head>` 部分**

4. **保存文件**

#### 對於中文版本 (zh-tw.html)：

**完全相同的步驟，只是：**
- 創建 `grambook/01-cumpleaños/zh-tw.html`
- 使用你的中文版本內容
- 替換同樣的位置

### 完成後的結構：
```
grambook/01-cumpleaños/
├── es.html (密碼保護 + 西班牙語課程)
└── zh-tw.html (密碼保護 + 中文課程)
```

---

## 🎯 第四步：測試本地文件

### 打開網頁測試

1. **打開 index.html：**
   - 雙擊 `spanishlu-grambook/index.html`
   - 應該看到首頁，有兩個課程按鈕

2. **測試課程：**
   - 點擊「西班牙語」或「中文」
   - 應該看到密碼登入屏幕
   - 輸入密碼：`YJL-95`
   - 應該看到課程內容

3. **如果看不到課程內容：**
   - 檢查是否正確粘貼了課程 HTML
   - 查看瀏覽器控制台（F12）是否有錯誤
   - 確認密碼是否正確

---

## 📤 第五步：上傳到 GitHub

### 使用 GitHub Desktop（推薦）

1. **打開 GitHub Desktop**

2. **選擇本地倉庫：**
   - 點擊左上角「Current Repository」
   - 選擇 `spanishlu-grambook`

3. **提交變更：**
   - 左側應該顯示你新增的所有文件
   - 在底部「Summary」輸入：
     ```
     Initial commit: Add GramBook El Cumpleaños
     ```
   - 點擊「Commit to main」

4. **發布到 GitHub：**
   - 點擊右上角「Publish repository」
   - 保持「Private」取消勾選（必須公開）
   - 點擊「Publish Repository」

### 使用命令行

```bash
# 進入資料夾
cd spanishlu-grambook

# 初始化 Git（如果還沒有）
git init

# 添加遠程倉庫
git remote add origin https://github.com/YourUsername/spanishlu-grambook.git
git branch -M main

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Add GramBook El Cumpleaños"

# 推送到 GitHub
git push -u origin main
```

---

## 🚀 第六步：在 Cloudflare Pages 部署

### 連接 GitHub

1. **登入 Cloudflare：**
   - 訪問 https://dash.cloudflare.com
   - 選擇你的帳號和域名 `luzranjyue.com`

2. **進入 Pages：**
   - 左側邊欄 → Workers & Pages
   - 點擊「Pages」標籤

3. **創建項目：**
   - 點擊「Create project」
   - 選擇「Connect to Git」

4. **授權 GitHub：**
   - 點擊「GitHub」
   - 授權 Cloudflare 訪問你的 GitHub

5. **選擇倉庫：**
   - 在列表中找到 `spanishlu-grambook`
   - 點擊「Begin setup」

6. **配置構建設置：**
   ```
   Production branch: main
   Build command: (留空 - 不需要構建)
   Build output directory: (留空)
   Environment variables: (不需要)
   ```
   - 點擊「Save and Deploy」

7. **等待部署：**
   - Cloudflare 會自動部署
   - 看到「✓ Deployment successful」後完成

---

## 🌐 第七步：配置自定義域名

### 添加域名到 Pages

1. **在 Cloudflare Pages 中：**
   - 進入 spanishlu-grambook 項目
   - 點擊「Settings」
   - 點擊「Custom domains」

2. **添加域名：**
   - 點擊「Add custom domain」
   - 輸入：`grambook.luzranjyue.com`
   - 點擊「Continue」

3. **驗證域名：**
   - 按照 Cloudflare 的說明更新 DNS
   - 通常自動配置，無需手動操作
   - 等待 DNS 生效（通常 5-15 分鐘）

4. **測試：**
   - 訪問 `https://grambook.luzranjyue.com`
   - 應該看到首頁
   - 輸入密碼 `YJL-95` 測試課程

---

## ✅ 驗收清單

完成以下步驟後，你的 GramBook 就已部署好了！

```
☐ GitHub 倉庫已創建（spanishlu-grambook）
☐ 所有文件已上傳到 GitHub
☐ Cloudflare Pages 已連接 GitHub
☐ 自定義域名已配置（grambook.luzranjyue.com）
☐ 可以訪問首頁（https://grambook.luzranjyue.com）
☐ 課程密碼保護工作（輸入 YJL-95）
☐ 西班牙語課程可以打開
☐ 中文課程可以打開
```

---

## 🔄 更新課程（之後如何更新）

一旦設置完成，更新課程只需 3 步：

### 1. 編輯文件
```
編輯你的本地文件
例如：grambook/01-cumpleaños/es.html
```

### 2. 上傳到 GitHub
```bash
git add .
git commit -m "Update lesson content"
git push origin main
```

### 3. Cloudflare 自動部署
```
無需操作！Cloudflare 會自動檢測變更並部署
通常在 1-2 分鐘內完成
```

---

## 🐛 故障排除

### 問題：看不到首頁
**解決方案：**
- 等待 5 分鐘（DNS 生效時間）
- 清除瀏覽器緩存（Ctrl+Shift+Delete）
- 在 Cloudflare 儀表板檢查部署狀態

### 問題：課程文件找不到（404 錯誤）
**解決方案：**
- 檢查文件路徑是否正確
- 確保文件已上傳到 GitHub
- 檢查文件名是否匹配（區分大小寫）

### 問題：密碼保護不工作
**解決方案：**
- 檢查密碼是否輸入正確（YJL-95）
- 確保 JavaScript 已啟用
- 刷新頁面（Ctrl+F5）

### 問題：HTTPS 有紅色警告
**解決方案：**
- Cloudflare 自動提供 HTTPS
- 通常在 24 小時內解決
- 不需要做任何操作

---

## 💡 常見問題

**Q: 我需要技術知識嗎？**
A: 不需要！GitHub Desktop 和 Cloudflare 都很直觀，按照步驟操作即可。

**Q: 文件更新後多久生效？**
A: Cloudflare Pages 通常在 1-2 分鐘內部署。

**Q: 密碼可以改嗎？**
A: 可以！編輯 `es.html` 和 `zh-tw.html` 中的密碼，然後 push 即可。

**Q: 可以有多個密碼嗎？**
A: 簡單版本不支持。如果需要多個密碼，可以升級到 Cloudflare Access（後期進行）。

**Q: 學生會看到密碼嗎？**
A: 不會。密碼在客戶端進行驗證，用戶只看到「輸入密碼」提示。

---

## 🎯 下一步：在 Gumroad 銷售

一旦課程部署到 Cloudflare，你可以在 Gumroad 上銷售：

1. **在 Gumroad 創建產品**
2. **在交付內容中提供密碼和鏈接**
3. **每次更新課程時，同時更新 Gumroad 和 GitHub**

---

## 📞 需要幫助？

如果遇到問題：
1. 重新閱讀本指南
2. 檢查 GitHub 和 Cloudflare 的官方文檔
3. 查看瀏覽器控制台的錯誤信息（F12）

---

**祝你設置順利！🚀**

Made with ❤️ for SpanishLu
