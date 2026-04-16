import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App', () => {
  it('renders a card with the default content', () => {
    render(<App />)
    expect(screen.getByRole('article')).toBeInTheDocument()
    expect(screen.getByText('Embracing Minimalism')).toBeInTheDocument()
  })
})
