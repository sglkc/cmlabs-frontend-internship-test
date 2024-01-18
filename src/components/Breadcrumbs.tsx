export type BreadcrumbProps = {
  crumbs: Array<{
    text?: string
    href?: string
  }>
}

export default function Breadcrumb({ crumbs }: BreadcrumbProps) {
  const current = crumbs.pop()

  return (
    <header class="flex gap-2 text-md">
      <a href="/">
        <i class="pl-4 pr-4 i-mdi:home" />
        <span>Home</span>
      </a>
      { crumbs.map(({ text, href }) => (
        <>
          <i class="i-mdi:chevron-right text-2xl" />
          <a href={href}>{ text ?? 'Loading...' }</a>
        </>
      ))
      }
      <i class="i-mdi:chevron-right text-2xl" />
      <span class="text-gray">{ current?.text }</span>
    </header>
  )
}
