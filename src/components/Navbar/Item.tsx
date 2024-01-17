import { ComponentChildren } from "preact";
import { Link } from "preact-router";

type ItemProps = {
  href: string,
  children: ComponentChildren
}

export default function NavbarItem(props: ItemProps) {
  return (
    <Link
      class="py-8 px-4 b-b-2 transition-colors hover:(bg-gray-50 b-b-red)"
      {...props}
    />
  )
}
