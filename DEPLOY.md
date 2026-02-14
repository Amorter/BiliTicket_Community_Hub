# BiliTicket 门户网站 - 部署文档

## 前置要求

- Node.js >= 18
- pnpm
- Git
- Vercel 账号

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 本地预览生产版本
pnpm start
```

## 部署到 Vercel

### 方式一：通过 Git 仓库（推荐）

1. 将项目推送到 GitHub/GitLab：

```bash
git init
git add .
git commit -m "初始化 BiliTicket 门户网站"
git remote add origin <你的仓库地址>
git push -u origin main
```

2. 打开 [vercel.com](https://vercel.com)，点击 "Add New Project"
3. 导入你的 Git 仓库
4. Vercel 会自动识别 Next.js 项目，直接点击 "Deploy"
5. 部署完成后绑定自定义域名（如 `www.biliticket.top`）

后续每次 `git push` 到 main 分支，Vercel 会自动重新部署。

### 方式二：通过 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署（首次会创建项目）
vercel

# 部署到生产环境
vercel --prod
```

## 自定义域名

1. 在 Vercel 项目 Settings → Domains 中添加域名
2. 按提示在你的 DNS 服务商处添加 CNAME 记录，指向 `cname.vercel-dns.com`
3. Vercel 会自动配置 HTTPS 证书

## 日常维护

### 添加/修改社区应用

编辑 `src/config/apps.ts` 文件中的 `communityApps` 数组：

```typescript
{
  id: 'new-app',           // 唯一标识
  name: '新应用名称',        // 显示名称
  description: '应用描述',   // 简短介绍
  url: 'https://xxx.biliticket.top',
  icon: '🎯',              // emoji 图标
  category: 'tool',        // ai | community | tool | auth | other
  categoryLabel: '工具',    // 分类显示文字
  allowRegistration: false, // 仅论坛为 true
  isNew: true,             // 可选，显示"新"标签
  brandColor: '#FF6600',   // 可选，卡片链接颜色
}
```

### 添加文档

在 `content/` 目录下创建 `.mdx` 文件，并在 `content/_meta.ts` 中注册：

```typescript
// content/_meta.ts
export default {
  index: '简介',
  guide: '使用指南',    // 对应 content/guide.mdx
  faq: '常见问题',      // 对应 content/faq.mdx
}
```

## 项目结构

```
src/config/apps.ts       ← 应用配置（日常维护）
src/app/page.tsx         ← 首页
src/app/docs/            ← 文档路由
src/components/          ← 页面组件
content/                 ← 文档内容（MDX）
public/images/           ← Logo 和图片
```
