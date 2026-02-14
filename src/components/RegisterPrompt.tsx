import { Button } from '@/components/ui/Button'
import { communityConfig } from '@/config/apps'

export function RegisterPrompt() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-r from-brand to-brand-light">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          想加入我们？
        </h2>
        <p className="text-white/80 max-w-lg mx-auto mb-8">
          BiliTicket 采用邀请制注册，请前往社区论坛输入邀请码完成注册。注册后即可使用所有社区应用。
        </p>
        <Button
          variant="secondary"
          size="lg"
          href={communityConfig.discourseUrl}
          className="!bg-white !text-brand !border-white hover:!bg-white/90"
        >
          前往论坛注册
        </Button>
      </div>
    </section>
  )
}
