# 龙虾导航 ClawNav

一个 OpenClaw 中文社区导航网站，汇聚 AI 智能体相关资源。

## 🚀 在线预览

GitHub Pages: `https://你的用户名.github.io/clawnav/`

## 📁 项目结构

```
clawnav/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   ├── data.js         # 资源数据
│   └── main.js         # 交互逻辑
└── README.md           # 项目说明
```

## ✨ 功能特性

- 🔍 **双搜索引擎** - 支持谷歌和百度搜索切换
- 📂 **分类导航** - 13个分类，涵盖 OpenClaw 生态各个方面
- 📱 **响应式设计** - 适配桌面端和移动端
- ⚡ **纯静态** - 无需后端，部署简单
- 🎨 **现代化UI** - 渐变色彩、卡片布局、悬停动画

## 🛠️ 技术栈

- HTML5
- CSS3 (Flexbox + Grid)
- Vanilla JavaScript
- 无第三方依赖

## 📦 部署方式

### 1. GitHub Pages（推荐）

1. Fork 或上传代码到 GitHub 仓库
2. 进入 Settings → Pages
3. Source 选择 main 分支
4. 访问 `https://你的用户名.github.io/clawhub-nav/`

### 2. 阿里云 OSS

1. 创建 OSS Bucket
2. 开启静态网站托管
3. 上传所有文件
4. 绑定自定义域名（可选）

### 3. 其他静态托管

- Vercel
- Netlify
- Cloudflare Pages

## 📝 自定义内容

编辑 `js/data.js` 文件，修改 `resourcesData` 对象即可自定义导航内容。

```javascript
const resourcesData = {
    categoryKey: {
        title: "分类标题",
        items: [
            {
                name: "网站名称",
                desc: "网站描述",
                url: "https://example.com",
                icon: "🚀",
                tag: "标签"
            }
        ]
    }
};
```

## 🔧 本地开发

```bash
# 克隆仓库
git clone https://github.com/你的用户名/clawnav.git

# 进入目录
cd clawnav

# 本地预览（Python）
python -m http.server 8080

# 或（Node.js）
npx serve .
```

访问 `http://localhost:8080`

## 📄 许可证

MIT License
