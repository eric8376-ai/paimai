# 鹭易通拍卖平台 - UI/UX 设计规范

## 设计理念

作为国有金融企业的拍卖平台，设计遵循以下原则：
- **可靠性**: 稳重、专业、值得信赖
- **专业性**: 清晰的信息层级，规范的视觉系统
- **易用性**: 直观的交互，流畅的用户体验
- **现代感**: 在保持专业的同时融入现代设计元素

## 色彩系统

### 主色调 (体现国企稳重可靠)

```css
/* 主色 - 深蓝色系，体现专业可靠 */
--primary-50: #E8EEF6;
--primary-100: #C5D9ED;
--primary-200: #9BC2E0;
--primary-300: #6BABF0;
--primary-400: #4696E6;
--primary-500: #1E88E5;  /* 主色 */
--primary-600: #1976D2;
--primary-700: #1565C0;
--primary-800: #0D47A1;  /* 深色主色 */
--primary-900: #0A3D8C;

/* 辅助色 - 金色系，体现价值 */
--accent-50: #FFF8E1;
--accent-100: #FFECB3;
--accent-200: #FFE082;
--accent-300: #FFD54F;
--accent-400: #FFCA28;
--accent-500: #FFC107;  /* 金色 */
--accent-600: #FFB300;
--accent-700: #FFA000;
--accent-800: #FF8F00;
--accent-900: #FF6F00;

/* 状态色 */
--success: #52C41A;      /* 成功 - 绿色 */
--warning: #FAAD14;      /* 警告 - 橙色 */
--error: #F5222D;        /* 错误 - 红色 */
--info: #1890FF;         /* 信息 - 蓝色 */

/* 中性色 */
--gray-50: #FAFAFA;
--gray-100: #F5F5F5;
--gray-200: #EEEEEE;
--gray-300: #E0E0E0;
--gray-400: #BDBDBD;
--gray-500: #9E9E9E;
--gray-600: #757575;
--gray-700: #616161;
--gray-800: #424242;
--gray-900: #212121;
```

## 字体系统

```css
/* 字体族 */
--font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB",
                   "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
--font-family-code: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;

/* 字号 */
--font-size-xs: 12px;      /* 辅助信息 */
--font-size-sm: 14px;      /* 正文 */
--font-size-base: 16px;    /* 基础 */
--font-size-lg: 18px;      /* 小标题 */
--font-size-xl: 20px;      /* 标题 */
--font-size-2xl: 24px;     /* 大标题 */
--font-size-3xl: 30px;     /* 主标题 */
--font-size-4xl: 36px;     /* 特大标题 */

/* 字重 */
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

## 间距系统

```css
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-2xl: 48px;
--spacing-3xl: 64px;
```

## 圆角系统

```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 24px;
--radius-full: 9999px;
```

## 阴影系统

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

## 布局系统

```css
/* 容器宽度 */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1400px;  /* 主容器 */

/* 断点 */
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

## 组件样式规范

### 按钮
- 主要按钮: 使用主色背景，白色文字
- 次要按钮: 使用透明背景，主色边框
- 悬停状态: 增加透明度和阴影
- 圆角: 8px
- 高度: 40px (标准), 48px (大)

### 卡片
- 背景: 白色
- 边框: 1px solid #E0E0E0
- 圆角: 12px
- 阴影: --shadow-md
- 悬停: --shadow-lg

### 表单输入框
- 边框: 1px solid #E0E0E0
- 聚焦边框: 主色
- 圆角: 8px
- 高度: 48px

### 导航
- 高度: 72px
- 背景: 白色 + 微妙阴影
- Logo + 文字组合
- 当前页面: 主色下划线指示器

## 特殊设计元素

### 1. 国企标识元素
- 顶部横幅: 深蓝色背景，展示"国企"标识
- 徽章: 使用金色强调
- 认证标识: 显示相关资质

### 2. 信任元素
- 实时数据展示 (参拍人数、成交额等)
- 安全认证图标
- 客服保障承诺
- 透明流程展示

### 3. 视觉层次
- 使用卡片阴影区分层级
- 渐变背景增强视觉深度
- 微动画提升交互体验

## 响应式设计

### 移动优先策略
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### 关键断点处理
- 导航栏: 移动端折叠为汉堡菜单
- 卡片网格: 4列 → 2列 → 1列
- 表单: 单列布局
- 字体: 根据屏幕大小调整

## 可访问性

- 颜色对比度符合 WCAG AA 标准
- 所有交互元素有明确的悬停/焦点状态
- 键盘导航支持
- 语义化 HTML

## 动画与过渡

- 持续时间: 200ms (快速), 300ms (标准), 500ms (缓慢)
- 缓动函数: ease-out
- 避免过度动画，保持专业感
