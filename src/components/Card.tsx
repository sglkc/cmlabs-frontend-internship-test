type CardProps = {
  href?: string
  text: string
  image: string
  large?: boolean
}

export default function Card({ href, text, image, large }: CardProps) {
  return (
    <div class={'relative ' + (large ? 'h-64' : 'h-32')}>
      <img
        class={'w-full rd-[2rem] object-cover ' + (large ? 'h-64' : 'h-32')}
        src={image}
        alt={text + ' image'}
      />
      <a
        class="absolute inset-0 p-8 bg-black/35 flex justify-center items-center text-center rd-[2rem]"
        href={href ?? '/'}
      >
        <span class="text-(white 2xl) fw-bold">{ text }</span>
      </a>
    </div>
  )
}
