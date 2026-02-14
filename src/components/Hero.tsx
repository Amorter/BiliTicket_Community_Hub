import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { communityConfig } from '@/config/apps'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-bg via-white to-brand-bg-deep">
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand/5" />
      <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-brand/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-brand/3" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32 lg:py-40">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/logo_rgb.png"
            alt="BiliTicket"
            width={80}
            height={80}
            className="mb-6 rounded-2xl"
            priority
          />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {communityConfig.name}
          </h1>

          <p className="text-xl sm:text-2xl text-brand font-medium mb-4">
            {communityConfig.tagline}
          </p>

          <p className="max-w-xl text-base sm:text-lg text-gray-600 mb-8">
            {communityConfig.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" href="#apps">
              浏览应用
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={communityConfig.discourseUrl}
            >
              加入社区
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
