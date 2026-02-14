import Image from 'next/image'
import { communityApps, communityConfig } from '@/config/apps'

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/images/logo_rgb.png"
                alt="BiliTicket"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="text-base font-bold text-gray-900">
                {communityConfig.name}
              </span>
            </div>
            <p className="text-sm text-gray-500">{communityConfig.tagline}</p>
          </div>

          {/* App links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              社区应用
            </h3>
            <ul className="space-y-2">
              {communityApps.map((app) => (
                <li key={app.id}>
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-brand transition-colors"
                  >
                    {app.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">关于</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={communityConfig.discourseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-brand transition-colors"
                >
                  社区论坛
                </a>
              </li>
              <li>
                <a
                  href="/docs"
                  className="text-sm text-gray-500 hover:text-brand transition-colors"
                >
                  文档
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-400 text-center">
            &copy; {new Date().getFullYear()} {communityConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
