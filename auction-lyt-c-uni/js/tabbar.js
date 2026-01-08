/**
 * TabBar 底部导航栏组件
 * 自动根据当前页面路径设置激活状态
 */

(function() {
    // 计算当前页面相对于pages目录的深度
    function getPathDepth() {
        // 处理file://协议路径
        let path = window.location.pathname.replace(/\\/g, '/');
        const segments = path.split('/').filter(s => s);

        // 找到auction-lyt-c-uni的位置
        const baseIndex = segments.indexOf('auction-lyt-c-uni');
        if (baseIndex === -1) return 0;

        // 计算从pages之后到当前页面的深度
        const pagesIndex = segments.indexOf('pages');
        if (pagesIndex === -1) return 0;

        // pages/index/index.html -> depth = 2 (index和index.html两层)
        // pages/auction/list/index.html -> depth = 3 (auction、list和index.html三层)
        return Math.max(0, segments.length - pagesIndex - 1);
    }

    // 生成相对路径
    function getRelativePath(targetPage) {
        const depth = getPathDepth();

        // 如果depth是2,说明在pages/xxx/index.html,target中已有../,直接使用
        // 如果depth是3,说明在pages/xxx/yyy/index.html,需要额外添加一个../
        let backPath = '';
        for (let i = 2; i < depth; i++) {
            backPath += '../';
        }

        return backPath + targetPage;
    }

    // 创建TabBar HTML
    function createTabBar() {
        const tabbar = document.createElement('div');
        tabbar.className = 'tabbar';

        // 获取当前页面路径
        const currentPath = window.location.pathname;

        // 判断当前是哪个页面
        let activePage = 'index';
        if (currentPath.includes('/auction/list/')) {
            activePage = 'auction';
        } else if (currentPath.includes('/lots/list/')) {
            activePage = 'lots';
        } else if (currentPath.includes('/investment/list/')) {
            activePage = 'investment';
        } else if (currentPath.includes('/info/index') || currentPath.includes('/info/my')) {
            activePage = 'info';
        }

        // Tab配置
        const tabs = [
            { page: 'index', icon: '🏠', text: '首页', target: '../index/index.html' },
            { page: 'auction', icon: '🔨', text: '拍卖会', target: '../auction/list/index.html' },
            { page: 'lots', icon: '📦', text: '标的物', target: '../lots/list/index.html' },
            { page: 'investment', icon: '💼', text: '资产招商', target: '../investment/list/index.html' },
            { page: 'info', icon: '👤', text: '我的', target: '../info/index.html' }
        ];

        // 生成Tab项
        tabs.forEach(tab => {
            const isActive = tab.page === activePage;
            const tabItem = document.createElement('a');
            // 使用计算出的相对路径
            tabItem.href = getRelativePath(tab.target);
            tabItem.className = 'tab-item' + (isActive ? ' active' : '');

            tabItem.innerHTML = `
                <div class="tab-icon">${tab.icon}</div>
                <div class="tab-text">${tab.text}</div>
            `;

            tabbar.appendChild(tabItem);
        });

        document.body.appendChild(tabbar);
    }

    // 页面加载完成后创建TabBar
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createTabBar);
    } else {
        createTabBar();
    }
})();
