import cactusImg from './assets/Cactus.jpg'
import cactusImg2x from './assets/Cactus@2x.jpg'
import Card from './components/Card'

export default function App() {
  return (
    <Card
      image={cactusImg}
      imageSrcSet={`${cactusImg} 1x, ${cactusImg2x} 2x`}
      imageAlt="A green cactus in a terracotta pot on a blush background"
      tag="Design"
      title="Embracing Minimalism"
      description="From minimalist sculptures to minimalist paintings, this blog will inspire you to appreciate the beauty that lies in simplicity."
      author="Annie Spratt"
    />
  )
}
