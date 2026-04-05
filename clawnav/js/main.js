// 当前选中的搜索引擎
let currentEngine = 'google';
let currentCategory = 'all';

// 搜索引擎配置
const searchEngines = {
    google: 'https://www.google.com/search?q=',
    baidu: 'https://www.baidu.com/s?wd='
};

// 图标缓存
const iconCache = new Map();

// 获取网站favicon
function getFavicon(url, size = 64) {
    try {
        const domain = new URL(url).hostname;
        return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
    } catch {
        return `https://www.google.com/s2/favicons?domain=example.com&sz=${size}`;
    }
}

// 获取分类图标
function getCategoryIcon(category) {
    const icons = {
        all: 'https://www.google.com/s2/favicons?domain=openclaw.ai&sz=64',
        deploy: 'https://www.google.com/s2/favicons?domain=openclaw.ai&sz=64',
        server: 'https://www.google.com/s2/favicons?domain=aliyun.com&sz=64',
        learn: 'https://www.google.com/s2/favicons?domain=docs.openclaw.ai&sz=64',
        aiapp: 'https://www.google.com/s2/favicons?domain=kimi.com&sz=64',
        devplan: 'https://www.google.com/s2/favicons?domain=github.com&sz=64',
        modelapi: 'https://www.google.com/s2/favicons?domain=siliconflow.cn&sz=64',
        llm: 'https://www.google.com/s2/favicons?domain=openai.com&sz=64',
        plugin: 'https://www.google.com/s2/favicons?domain=clawhub.ai&sz=64',
        community: 'https://www.google.com/s2/favicons?domain=reddit.com&sz=64',
        payment: 'https://www.google.com/s2/favicons?domain=coinbase.com&sz=64',
        trade: 'https://www.google.com/s2/favicons?domain=binance.com&sz=64',
        exchange: 'https://www.google.com/s2/favicons?domain=okx.com&sz=64',
        hardware: 'https://www.google.com/s2/favicons?domain=apple.com&sz=64'
    };
    return icons[category] || icons.all;
}

// 默认图标（当无法获取favicon时使用）
const defaultIcons = [
    'https://www.google.com/s2/favicons?domain=github.com&sz=64',
    'https://www.google.com/s2/favicons?domain=gitlab.com&sz=64',
    'https://www.google.com/s2/favicons?domain=bitbucket.org&sz=64',
    'https://www.google.com/s2/favicons?domain=stackoverflow.com&sz=64',
    'https://www.google.com/s2/favicons?domain=dev.to&sz=64'
];

// 获取随机默认图标
function getDefaultIcon() {
    return defaultIcons[Math.floor(Math.random() * defaultIcons.length)];
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initCategoryList();
    initSearchEngine();
    initSearchBox();
    loadResources('all');
    updateCategoryIcons();
});

// 更新分类图标
function updateCategoryIcons() {
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        const category = item.dataset.category;
        const iconSpan = item.querySelector('.category-icon');
        if (iconSpan) {
            const iconUrl = getCategoryIcon(category);
            iconSpan.innerHTML = `<img src="${iconUrl}" alt="" style="width: 18px; height: 18px; border-radius: 4px; object-fit: cover;">`;
        }
    });
}

// 初始化分类列表
function initCategoryList() {
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有active
            categoryItems.forEach(i => i.classList.remove('active'));
            // 添加active到当前
            this.classList.add('active');
            // 加载对应分类
            const category = this.dataset.category;
            currentCategory = category;
            loadResources(category);
        });
    });
}

// 初始化搜索引擎切换
function initSearchEngine() {
    const engineBtns = document.querySelectorAll('.engine-btn');
    engineBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            engineBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentEngine = this.dataset.engine;
        });
    });
}

// 初始化搜索框
function initSearchBox() {
    const searchInput = document.getElementById('searchInput');
    
    // 回车搜索
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// 执行搜索
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    
    if (query) {
        const searchUrl = searchEngines[currentEngine] + encodeURIComponent(query);
        window.open(searchUrl, '_blank');
    }
}

// 加载资源
function loadResources(category) {
    const container = document.getElementById('resourcesContainer');
    
    if (category === 'all') {
        // 显示所有分类
        container.innerHTML = '';
        Object.keys(resourcesData).forEach(key => {
            if (key !== 'all' && resourcesData[key]) {
                const section = createCategorySection(key, resourcesData[key]);
                container.appendChild(section);
            }
        });
    } else {
        // 显示单个分类
        const data = resourcesData[category];
        if (data) {
            container.innerHTML = '';
            const section = createCategorySection(category, data);
            container.appendChild(section);
        }
    }
}

// 创建分类区块
function createCategorySection(key, data) {
    const section = document.createElement('div');
    section.className = 'category-section';
    section.id = `section-${key}`;
    
    // 获取分类图标
    const categoryIconUrl = getCategoryIcon(key);
    
    // 标题（带图标）
    const title = document.createElement('h2');
    title.className = 'category-title';
    title.innerHTML = `<img src="${categoryIconUrl}" alt="" style="width: 28px; height: 28px; border-radius: 6px; object-fit: cover; margin-right: 10px;">${data.title}`;
    section.appendChild(title);
    
    // 资源网格
    const grid = document.createElement('div');
    grid.className = 'resources-grid';
    
    data.items.forEach((item, index) => {
        const card = createResourceCard(item, index);
        grid.appendChild(card);
    });
    
    section.appendChild(grid);
    return section;
}

// 创建资源卡片
function createResourceCard(item, index) {
    const card = document.createElement('a');
    card.className = 'resource-card';
    card.href = item.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.style.animationDelay = `${index * 0.05}s`;
    
    // 获取真实favicon
    const faviconUrl = getFavicon(item.url, 64);
    
    // 图标
    const icon = document.createElement('img');
    icon.className = 'resource-icon';
    icon.src = faviconUrl;
    icon.alt = item.name;
    icon.loading = 'lazy';
    
    // 处理图标加载失败 - 使用多个回退
    let fallbackIndex = 0;
    icon.onerror = function() {
        if (fallbackIndex === 0) {
            // 尝试不同尺寸的favicon
            this.src = getFavicon(item.url, 32);
            fallbackIndex++;
        } else if (fallbackIndex === 1) {
            // 尝试直接获取favicon.ico
            try {
                const domain = new URL(item.url).hostname;
                this.src = `https://${domain}/favicon.ico`;
            } catch {
                this.src = getDefaultIcon();
            }
            fallbackIndex++;
        } else if (fallbackIndex < defaultIcons.length + 2) {
            // 使用随机默认图标
            this.src = defaultIcons[fallbackIndex - 2] || getDefaultIcon();
            fallbackIndex++;
        } else {
            // 最终回退
            this.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23c96442" width="100" height="100" rx="20"/><text x="50" y="65" font-size="50" text-anchor="middle" fill="white">🔗</text></svg>';
        }
    };
    
    // 信息
    const info = document.createElement('div');
    info.className = 'resource-info';
    
    const name = document.createElement('div');
    name.className = 'resource-name';
    name.textContent = item.name;
    
    const desc = document.createElement('div');
    desc.className = 'resource-desc';
    desc.textContent = item.desc;
    
    const tag = document.createElement('span');
    tag.className = 'resource-tag';
    tag.textContent = item.tag || '资源';
    
    info.appendChild(name);
    info.appendChild(desc);
    info.appendChild(tag);
    
    card.appendChild(icon);
    card.appendChild(info);
    
    return card;
}

// 显示飞书弹窗
function showFeishuModal() {
    const modal = document.getElementById('wechatModal');
    modal.classList.add('show');
}

// 关闭飞书弹窗
function closeFeishuModal() {
    const modal = document.getElementById('wechatModal');
    modal.classList.remove('show');
}

// 点击弹窗外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('wechatModal');
    if (event.target === modal) {
        modal.classList.remove('show');
    }
}

// 平滑滚动到指定分类
function scrollToCategory(category) {
    const section = document.getElementById(`section-${category}`);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
