/**
 * 西語萌萌學園 GramBook
 * Cloudflare Worker 入口點
 */

// 課程密碼配置（每個課程獨立密碼）
const LESSON_PASSWORDS = {
  'elcumpleanos': 'YJL-95',
  'llevar-llevarse': 'WNG-28',
};

// 課程元資料
const LESSONS_METADATA = {
  'elcumpleanos': {
    name: 'Lily y sus gatos: Capítulo 1 - El cumpleaños',
    slug: 'elcumpleanos',
    level: 'A1',
    file: 'elcumpleanos01-protected.html',
    description: 'POD 和 POI 代詞練習'
  },
  'llevar-llevarse': {
    name: '練習 Llevar o llevarse',
    slug: 'llevar-llevarse',
    level: 'A2',
    file: 'index.html',
    description: '動詞 llevar 和 llevarse 的用法區別練習'
  },
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // 首頁 / 課程列表
    if (pathname === '/' || pathname === '/index') {
      return handleIndex();
    }

    // API: 取得課程列表
    if (pathname === '/api/lessons') {
      return handleLessonsAPI();
    }

    // API: 驗證密碼
    if (pathname === '/api/verify-password') {
      return handlePasswordVerification(request);
    }

    // 動態課程路由
    const lessonMatch = pathname.match(/^\/lessons\/([a-z0-9\-]+)\/?$/i);
    if (lessonMatch) {
      const lessonSlug = lessonMatch[1].toLowerCase();
      return handleLesson(lessonSlug, request);
    }

    // 404
    return new Response('404 - 頁面未找到', { status: 404 });
  }
};

/**
 * 處理首頁
 */
function handleIndex() {
  const html = `
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>西語萌萌學園 - GramBook</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft JhengHei', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .container {
      background: white;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      max-width: 800px;
      width: 100%;
      padding: 40px;
    }

    h1 {
      color: #333;
      margin-bottom: 10px;
      font-size: 2em;
    }

    .subtitle {
      color: #666;
      margin-bottom: 40px;
      font-size: 1.1em;
    }

    .lessons-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }

    .lesson-card {
      background: #f8f9fa;
      border: 2px solid #e9ecef;
      border-radius: 8px;
      padding: 20px;
      text-decoration: none;
      color: #333;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .lesson-card:hover {
      border-color: #667eea;
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.2);
      transform: translateY(-2px);
    }

    .lesson-level {
      display: inline-block;
      background: #667eea;
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.8em;
      margin-bottom: 10px;
    }

    .lesson-name {
      font-size: 1.2em;
      font-weight: bold;
      margin: 10px 0;
    }

    .lesson-description {
      color: #666;
      font-size: 0.9em;
    }

    .loading {
      text-align: center;
      padding: 40px;
      color: #666;
    }

    footer {
      text-align: center;
      margin-top: 40px;
      color: #999;
      font-size: 0.9em;
    }

    @media (max-width: 600px) {
      .container {
        padding: 20px;
      }

      h1 {
        font-size: 1.5em;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>✨ 西語萌萌學園</h1>
    <p class="subtitle">GramBook - 西班牙語文法互動練習</p>
    
    <div class="lessons-grid" id="lessonsContainer">
      <div class="loading">加載課程中...</div>
    </div>

    <footer>
      © 2026 西語萌萌學園 ✨ con Luz | 
      <a href="https://instagram.com/luz_ranjyue" style="color: #667eea; text-decoration: none;">Instagram</a> |
      <a href="https://discord.gg/XpJt7V8Yp" style="color: #667eea; text-decoration: none;">Discord</a>
    </footer>
  </div>

  <script>
    async function loadLessons() {
      try {
        const response = await fetch('/api/lessons');
        const lessons = await response.json();
        
        const container = document.getElementById('lessonsContainer');
        container.innerHTML = '';
        
        lessons.forEach(lesson => {
          const card = document.createElement('a');
          card.href = \`/lessons/\${lesson.slug}\`;
          card.className = 'lesson-card';
          card.innerHTML = \`
            <div class="lesson-level">\${lesson.level}</div>
            <div class="lesson-name">\${lesson.name}</div>
            <div class="lesson-description">\${lesson.description}</div>
          \`;
          container.appendChild(card);
        });
      } catch (error) {
        console.error('加載課程失敗:', error);
        document.getElementById('lessonsContainer').innerHTML = 
          '<div class="loading">加載失敗，請稍後重試</div>';
      }
    }

    loadLessons();
  </script>
</body>
</html>
  `;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  });
}

/**
 * 處理課程列表 API
 */
function handleLessonsAPI() {
  const lessons = Object.values(LESSONS_METADATA);
  return new Response(JSON.stringify(lessons), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}

/**
 * 處理課程頁面
 */
function handleLesson(slug, request) {
  const lesson = LESSONS_METADATA[slug];
  if (!lesson) {
    return new Response('課程不存在', { status: 404 });
  }

  const html = `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${lesson.name} - GramBook</title>
  <style>
    * { 
      margin: 0; 
      padding: 0; 
      box-sizing: border-box; 
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft JhengHei', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .password-gate {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
    }

    .password-form {
      background: white;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      max-width: 400px;
      width: 100%;
    }

    .password-form h2 {
      color: #333;
      margin-bottom: 20px;
      text-align: center;
    }

    .password-form p {
      text-align: center;
      color: #666;
      margin-bottom: 20px;
      font-size: 0.9em;
    }

    .password-form input {
      width: 100%;
      padding: 12px;
      border: 2px solid #e9ecef;
      border-radius: 6px;
      font-size: 1em;
      margin-bottom: 20px;
      font-family: inherit;
    }

    .password-form input:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .password-form button {
      width: 100%;
      padding: 12px;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 1em;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s;
    }

    .password-form button:hover {
      background: #764ba2;
    }

    .error {
      color: #dc3545;
      text-align: center;
      margin-bottom: 20px;
      font-size: 0.9em;
    }

    .success {
      color: #28a745;
      text-align: center;
      margin-bottom: 20px;
      font-size: 0.9em;
    }

    .lesson-content {
      display: none;
      width: 100%;
      height: 100vh;
      padding: 20px;
      background: white;
    }

    .lesson-content iframe {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div id="passwordGate" class="password-gate">
    <form class="password-form" onsubmit="verifyPassword(event)">
      <h2>${lesson.name}</h2>
      <p>請輸入密碼存取課程</p>
      <div id="errorMessage" class="error"></div>
      <div id="successMessage" class="success"></div>
      <input 
        type="password" 
        id="passwordInput" 
        placeholder="輸入密碼" 
        required
        autofocus
      >
      <button type="submit">進入課程</button>
    </form>
  </div>

  <div id="lessonContent" class="lesson-content">
    <iframe id="contentFrame"></iframe>
  </div>

  <script>
    const lessonSlug = '${slug}';
    
    async function verifyPassword(event) {
      event.preventDefault();
      const password = document.getElementById('passwordInput').value;
      const errorDiv = document.getElementById('errorMessage');
      const successDiv = document.getElementById('successMessage');
      const passwordInput = document.getElementById('passwordInput');
      
      try {
        const response = await fetch('/api/verify-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug: lessonSlug, password })
        });

        const result = await response.json();
        
        if (result.success) {
          successDiv.textContent = '密碼正確，正在載入課程...';
          errorDiv.textContent = '';
          passwordInput.disabled = true;
          
          setTimeout(() => {
            document.getElementById('passwordGate').style.display = 'none';
            document.getElementById('lessonContent').style.display = 'block';
            console.log('課程已解鎖');
          }, 1000);
        } else {
          errorDiv.textContent = '密碼錯誤，請重試';
          successDiv.textContent = '';
          passwordInput.value = '';
          passwordInput.focus();
        }
      } catch (error) {
        errorDiv.textContent = '驗證失敗，請稍後重試';
        successDiv.textContent = '';
        console.error('驗證錯誤:', error);
      }
    }

    // 頁面載入時的初始化
    window.addEventListener('load', function() {
      console.log('課程頁面已載入，等待密碼驗證');
    });
  </script>
</body>
</html>`;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  });
}

/**
 * 處理密碼驗證 API
 */
async function handlePasswordVerification(request) {
  if (request.method !== 'POST') {
    return new Response('方法不允許', { status: 405 });
  }

  try {
    const { slug, password } = await request.json();
    
    const correctPassword = LESSON_PASSWORDS[slug];
    if (!correctPassword) {
      return new Response(JSON.stringify({ success: false, error: '課程不存在' }), 
        { status: 404, headers: { 'Content-Type': 'application/json; charset=utf-8' } }
      );
    }

    // 直接比較密碼
    const isCorrect = password === correctPassword;
    
    return new Response(
      JSON.stringify({ success: isCorrect }),
      { headers: { 'Content-Type': 'application/json; charset=utf-8' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 400, headers: { 'Content-Type': 'application/json; charset=utf-8' } }
    );
  }
}
