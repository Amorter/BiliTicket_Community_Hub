import { communityApps } from '@/config/apps'
import { AppCard } from '@/components/AppCard'

export function AppShowcase() {
  return (
    <section id="apps" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            社区应用
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            探索 BiliTicket 社区的各种应用和服务
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
    </section>
  )
}
