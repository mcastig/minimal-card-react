import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Card from '../components/Card'

const defaultProps = {
  image: '/test-image.jpg',
  imageAlt: 'A test image',
  tag: 'Design',
  title: 'Embracing Minimalism',
  description: 'A description about minimalism.',
  author: 'Annie Spratt',
}

describe('Card', () => {
  it('renders the article element', () => {
    render(<Card {...defaultProps} />)
    expect(screen.getByRole('article')).toBeInTheDocument()
  })

  it('renders the tag', () => {
    render(<Card {...defaultProps} tag="Technology" />)
    expect(screen.getByText('Technology')).toBeInTheDocument()
  })

  it('renders the title', () => {
    render(<Card {...defaultProps} title="My Title" />)
    expect(screen.getByRole('heading', { name: 'My Title' })).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Card {...defaultProps} description="Custom description." />)
    expect(screen.getByText('Custom description.')).toBeInTheDocument()
  })

  it('renders the author', () => {
    render(<Card {...defaultProps} author="Jane Doe" />)
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
  })

  it('renders the image with the given src and alt', () => {
    render(<Card {...defaultProps} image="/photo.jpg" imageAlt="A photo" />)
    const img = screen.getByAltText('A photo')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/photo.jpg')
  })

  it('renders the image srcSet when provided', () => {
    render(<Card {...defaultProps} imageSrcSet="/photo.jpg 1x, /photo@2x.jpg 2x" />)
    expect(screen.getByAltText('A test image')).toHaveAttribute(
      'srcset',
      '/photo.jpg 1x, /photo@2x.jpg 2x'
    )
  })

  it('applies correct CSS classes', () => {
    render(<Card {...defaultProps} />)
    expect(screen.getByRole('article')).toHaveClass('card')
    expect(screen.getByText('Design')).toHaveClass('card__tag')
    expect(screen.getByRole('heading', { name: defaultProps.title })).toHaveClass('card__title')
    expect(screen.getByText(defaultProps.description)).toHaveClass('card__description')
    expect(screen.getByText(defaultProps.author)).toHaveClass('card__author')
  })
})
