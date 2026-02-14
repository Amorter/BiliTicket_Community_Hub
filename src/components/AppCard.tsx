import type { CommunityApp } from '@/config/apps'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

interface AppCardProps {
  app: CommunityApp
}

export function AppCard({ app }: AppCardProps) {
  return (
    <Card className="p-6 flex flex-col h-full border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <Badge variant={app.category}>{app.categoryLabel}</Badge>
          {app.isNew && <Badge variant="new">新</Badge>}
        </div>
        {app.allowRegistration ? (
          <span className="text-xs text-green-600 font-medium">可注册</span>
        ) : (
          <span className="text-xs text-gray-400">仅限登录</span>
        )}
      </div>

      <div className="text-3xl mb-3">{app.icon}</div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">{app.name}</h3>

      <p className="text-sm text-gray-500 mb-4 flex-1">{app.description}</p>

      <a
        href={app.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-light transition-colors"
        style={app.brandColor ? { color: app.brandColor } : undefined}
      >
        前往
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </Card>
  )
}
