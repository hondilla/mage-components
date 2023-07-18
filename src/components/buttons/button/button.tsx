'use client'

import { Button as _Button } from '@/components/buttons/_button'
//import { forwardRef } from 'react'
import styled from '@emotion/styled'

// const Component = styled(_Button)`
//   background-color: red;
// `

// interface ButtonProps {
//   children: React.ReactNode
// }

// const Wrapper = (
//   { children, ...props }: ButtonProps,
//   ref: React.ForwardedRef<HTMLButtonElement>
// ) => {
//   return (
//     <Component {...props} ref={ref}>
//       {children}
//     </Component>
//   )
// }

export const Button = styled.button`
  background-color: red;
`
