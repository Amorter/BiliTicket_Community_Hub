import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'BiliTicket 文档',
}

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pageMap = await getPageMap('/docs')

  return (
    <Layout
      navbar={
        <Navbar
          logo={
            <span className="font-bold">BiliTicket 文档</span>
          }
        />
      }
      pageMap={pageMap}
      docsRepositoryBase="https://github.com/biliticket/portal"
      footer={<Footer>BiliTicket 社区</Footer>}
    >
      {children}
    </Layout>
  )
}
