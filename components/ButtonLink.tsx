import React, { forwardRef } from 'react'
import Button, { ButtonProps } from '@material-ui/core/Button'
import Link, { LinkProps } from 'next/link'

export type ButtonLinkProps = Omit<ButtonProps, 'href'> &
  Pick<LinkProps, 'href' | 'as' | 'prefetch'>

export const ButtonLink = forwardRef<HTMLButtonElement, any>(
  function ButtonLink({ href, as, prefetch, ...props }: ButtonLinkProps, ref) {
    return (
      <Link href={href} as={as} prefetch={prefetch} passHref>
        <Button ref={ref} {...props} />
      </Link>
    )
  },
)
