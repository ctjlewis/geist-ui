import React from 'react'
import NextLink from 'next/link'
import { Controls } from 'lib/components/pures'
import { useTheme, Image } from 'components'
import { useConfigs } from 'lib/config-context'

const MenuLinks = () => {
  const theme = useTheme()
  const { isChinese } = useConfigs()

  return (
    <nav>
      <NextLink href={isChinese ? '/zh-cn' : '/en-us'}>
        <a className="geist-logo" aria-label="Go Home">
          <Image
            src="/images/logo.png"
            width="20px"
            height="20px"
            mr={0.5}
            draggable={false}
            title="Logo"
          />
          Geist
        </a>
      </NextLink>
      <div className="links">
        <Controls />
      </div>
      <style jsx>{`
        nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1000px;
          user-select: none;
          position: relative;
          margin: 0 auto;
          padding: 0 ${theme.layout.gap};
          height: var(--geist-page-nav-height);
        }

        .geist-logo {
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          font-size: 1.125rem;
          font-weight: 500;
          color: inherit;
          height: 28px;
        }

        .geist-logo :global(.image) {
          border: 1px solid ${theme.palette.border};
          border-radius: 2rem;
        }
      `}</style>
    </nav>
  )
}

export default MenuLinks
