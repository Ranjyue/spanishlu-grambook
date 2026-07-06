# ⚡ 快速開始 - 5 步部署 GramBook

**預計時間：30 分鐘**

---

## 📋 你已經有的

✅ GitHub 帳號  
✅ Cloudflare 帳號  
✅ 域名：luzranjyue.com  
✅ 課程文件（es.html 和 zh-tw.html）

---

## 🚀 5 個簡單步驟

### **步驟 1：在 GitHub 創建倉庫**

1. 打開 https://github.com/new
2. 倉庫名稱：`spanishlu-grambook`
3. 勾選 ☑️ **Public**
4. 點擊 **「Create repository」**

✅ **完成！**

---

### **步驟 2：上傳所有文件**

**選項 A - 用 GitHub 網頁（最簡單）：**

1. 在你的倉庫中，點擊 **「Add file」→「Upload files」**
2. 拖拽或選擇這些文件：
   ```
   ✓ index.html
   ✓ README.md
   ✓ .gitignore
   ✓ PASSWORD_TEMPLATE.html
   ✓ SETUP_GUIDE.md
   ```
3. 點擊 **「Commit changes」**

**選項 B - 用 GitHub Desktop：**

1. 打開 GitHub Desktop
2. 點擊左上角 **「Current Repository」** → 選擇 **「spanishlu-grambook」**
3. 複製所有文件到本地資料夾
4. 在 GitHub Desktop 中點擊 **「Commit」** → **「Push」**

✅ **完成！**

---

### **步驟 3：創建課程文件夾結構**

**在 GitHub 網頁上：**

1. 點擊 **「Add file」** → **「Create new file」**
2. 文件名：`grambook/01-cumpleaños/es.html`
3. 複製以下內容：

```html
<!-- 複製 PASSWORD_TEMPLATE.html 的全部內容 -->
<!-- 然後在 <div id="content"> 中替換課程內容 -->
```

4. 點擊 **「Commit new file」**

重複一次，創建 `grambook/01-cumpleaños/zh-tw.html`

✅ **完成！**

---

### **步驟 4：在 Cloudflare Pages 部署**

1. 登入 https://dash.cloudflare.com
2. 選擇域名 **luzranjyue.com**
3. 左側 → **Workers & Pages**
4. 點擊 **「Create project」** → **「Connect to Git」**
5. 選擇 **「spanishlu-grambook」**
6. 點擊 **「Save and Deploy」**
7. 等待 **「✓ Deployment successful」**

✅ **完成！**

---

### **步驟 5：添加自定義域名**

1. 在 Cloudflare Pages 中，進入你的項目
2. 點擊 **「Settings」** → **「Custom domains」**
3. 點擊 **「Add custom domain」**
4. 輸入：`grambook.luzranjyue.com`
5. 按照指示更新 DNS（通常自動）
6. 等待 DNS 生效（5-15 分鐘）

✅ **完成！**

---

## 🎉 你已完成！

訪問 **https://grambook.luzranjyue.com** 

輸入密碼：**YJL-95**

---

## 📁 你現在需要的文件

我已為你準備好的文件在這裡：

```
這些文件已經準備好：
✅ index.html - 首頁
✅ README.md - 項目說明
✅ .gitignore - Git 配置
✅ PASSWORD_TEMPLATE.html - 密碼模板
✅ SETUP_GUIDE.md - 詳細指南
✅ QUICK_START.md - 本文件

你需要添加的文件：
✅ grambook/01-cumpleaños/es.html
✅ grambook/01-cumpleaños/zh-tw.html
   （這些是你之前創建的課程文件）
```

---

## 📝 將你的課程文件集成

### 對於 es.html（西班牙語）：

1. 打開 `PASSWORD_TEMPLATE.html`
2. 找到註釋：
   ```html
   <!-- ========================================
        請將你的完整 HTML 內容放在這裡
        ======================================== -->
   ```
3. 複製你之前的 `el_cumpleaños_grambook_interactivo.html` 中，`<container>` 到 `</footer>` 的所有內容
4. 粘貼替換註釋
5. 保存為 `grambook/01-cumpleaños/es.html`

### 對於 zh-tw.html（中文）：

完全相同的步驟，只是使用中文版本的課程內容。

---

## ⏱️ 預計時間表

| 步驟 | 時間 | 累計 |
|------|------|------|
| 1. 創建 GitHub 倉庫 | 2 分鐘 | 2 分 |
| 2. 上傳文件 | 5 分鐘 | 7 分 |
| 3. 創建課程文件 | 10 分鐘 | 17 分 |
| 4. Cloudflare Pages | 5 分鐘 | 22 分 |
| 5. 添加域名 | 5 分鐘 | 27 分 |
| **DNS 生效等待** | **5-15 分鐘** | **32-42 分** |
| **總計** | | **~30-45 分鐘** |

---

## 🐛 快速故障排除

| 問題 | 解決方案 |
|------|---------|
| 看不到首頁 | 等待 DNS 生效，清除緩存 |
| 課程 404 | 檢查文件路徑和文件名 |
| 密碼不工作 | 檢查是否輸入正確 YJL-95 |
| GitHub 無法連接 | 檢查倉庫是否為 Public |

---

## ✅ 驗收清單

完成後檢查：

```
☐ GitHub 倉庫已創建
☐ 所有文件已上傳
☐ Cloudflare Pages 已連接
☐ 可以訪問首頁
☐ 輸入密碼後看到課程
☐ 西班牙語課程正常
☐ 中文課程正常
```

---

## 🎯 下一步

✅ 一切都設置好了！

現在你可以：

1. **在 Gumroad 銷售**
   ```
   產品名稱：GramBook POD y POI - Nivel A1
   交付內容：
   密碼：YJL-95
   鏈接：https://grambook.luzranjyue.com
   ```

2. **添加更多課程**
   ```
   創建 grambook/02-nombre/
   複製相同的結構
   Push 到 GitHub
   Cloudflare 自動部署！
   ```

3. **更新課程**
   ```
   編輯 HTML 文件
   Git push
   完成！（5 分鐘自動部署）
   ```

---

## 📞 需要詳細幫助？

查看 **SETUP_GUIDE.md** 了解詳細說明。

---

**祝賀！你的 GramBook 已上線！🎉**

Made with ❤️ by Luz Ran Jyue
