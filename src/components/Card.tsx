type CardProps = {
  text: string
  image: string
}

export default function Card({ text, image }: CardProps) {
  return (
    <div class="relative h-32">
      <img
        class="h-32 w-full rd-[2rem] object-cover"
        src={image}
        alt={text + ' image'}
      />
      <a
        class="absolute inset-0 bg-black/35 flex justify-center items-center rd-[2rem]"
        href="/"
      >
        <span class="text-(white 2xl) fw-bold">{ text }</span>
      </a>
    </div>
  )
}
