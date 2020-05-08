import React, { forwardRef } from 'react'
import Link, { LinkProps } from 'next/link'
import { MenuItem, MenuItemProps } from '@material-ui/core'

export type MenuItemLinkProps = MenuItemProps &
  Pick<LinkProps, 'href' | 'as' | 'prefetch'>

export const MenuItemLink = forwardRef<HTMLLIElement, any>(
  function MenuItemLink(
    { href, as, prefetch, ...props }: MenuItemLinkProps,
    ref,
  ) {
    return (
      <Link href={href} as={as} prefetch={prefetch} passHref>
        <MenuItem
          component={'a' as any}
          button={true as any}
          ref={ref}
          {...props}
        />
      </Link>
    )
  },
)
