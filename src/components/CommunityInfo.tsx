import { Card } from '@/components/ui/Card'

const features = [
  {
    icon: '🎟️',
    title: '邀请制',
    description: '精选社区成员，在论坛输入邀请码注册，保证社区质量。',
  },
  {
    icon: '🔑',
    title: '统一认证',
    description: '通过 Casdoor 统一登录，一个账号访问所有社区应用。',
  },
  {
    icon: '🛠️',
    title: '开源工具',
    description: '汇集优质开源项目，为开发者提供最好的工具和平台。',
  },
]

export function CommunityInfo() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            为什么选择 BiliTicket
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            一个精心打造的开发者兴趣社区
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="p-8 text-center" hover={false}>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
