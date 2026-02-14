export interface CommunityApp {
  id: string
  name: string
  description: string
  url: string
  icon: string
  category: 'ai' | 'community' | 'tool' | 'auth' | 'other'
  categoryLabel: string
  allowRegistration: boolean
  isNew?: boolean
  brandColor?: string
}

export const communityApps: CommunityApp[] = [
  {
    id: 'discourse',
    name: 'BiliTicket 论坛',
    description: '社区讨论论坛，在这里交流想法、分享经验。新用户注册请前往此处。',
    url: 'https://bbs.biliticket.top',
    icon: '💬',
    category: 'community',
    categoryLabel: '社区',
    allowRegistration: true,
    brandColor: '#00AEEF',
  },
  {
    id: 'lobehub',
    name: 'LobeHub AI',
    description: '社区 AI 助手平台，探索和使用各种 AI 能力。',
    url: 'https://lobehub.biliticket.top',
    icon: '🤖',
    category: 'ai',
    categoryLabel: 'AI',
    allowRegistration: false,
    isNew: true,
    brandColor: '#000000',
  },
  {
    id: 'casdoor',
    name: '账户管理',
    description: '统一身份认证中心，管理你的账户信息和授权。',
    url: 'https://sso.biliticket.top',
    icon: '🔐',
    category: 'auth',
    categoryLabel: '认证',
    allowRegistration: false,
    brandColor: '#6B48FF',
  },
]

export const communityConfig = {
  name: 'BiliTicket',
  tagline: '开发者兴趣社区',
  description:
    '一个由开发者驱动的兴趣社区，汇集 AI、论坛、工具等多种应用。通过邀请码加入我们！',
  discourseUrl: 'https://bbs.biliticket.top',
  brandColor: '#F7255E',
}
