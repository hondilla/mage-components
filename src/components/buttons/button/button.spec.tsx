import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Button } from './button'

describe('Button', () => {
  it('should render', async () => {
    const label = 'Button'
    render(<Button>{label}</Button>)
    expect(screen.getByText(label)).toBeDefined()
  })
})
