import dynamic from 'next/dynamic'

const PortfolioSection = dynamic(
  () => import('./PortfolioSection'),
  { ssr: false }
)

export default PortfolioSection
