import cactusImg from './assets/Cactus.jpg'
import cactusImg2x from './assets/Cactus@2x.jpg'
import Card from './components/Card'

const image = cactusImg
const imageSrcSet = `${cactusImg} 1x, ${cactusImg2x} 2x`
const imageAlt = 'A green cactus in a terracotta pot on a blush background'
const tag = 'Design'
const title = 'Embracing Minimalism'
const description =
  'From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity.'
const author = 'Annie Spratt'

export default function App() {
  return (
    <Card
      image={image}
      imageSrcSet={imageSrcSet}
      imageAlt={imageAlt}
      tag={tag}
      title={title}
      description={description}
      author={author}
    />
  )
}
