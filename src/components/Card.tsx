import './Card.css'

interface CardProps {
  image: string
  imageSrcSet?: string
  imageAlt: string
  tag: string
  title: string
  description: string
  author: string
}

export default function Card({
  image,
  imageSrcSet,
  imageAlt,
  tag,
  title,
  description,
  author,
}: CardProps) {
  return (
    <article className="card">
      <div className="card__image-wrapper">
        <img
          className="card__image"
          src={image}
          srcSet={imageSrcSet}
          alt={imageAlt}
          width={328}
          height={246}
        />
      </div>

      <div className="card__body">
        <span className="card__tag">{tag}</span>
        <h1 className="card__title">{title}</h1>
        <p className="card__description">{description}</p>
      </div>

      <footer className="card__footer">
        <p className="card__author">{author}</p>
      </footer>
    </article>
  )
}
