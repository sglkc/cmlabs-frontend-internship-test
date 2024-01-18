import Breadcrumb, { BreadcrumbProps } from "@/components/Breadcrumbs"
import Card from "@/components/Card"
import Navbar from "@/components/Navbar/Navbar"
import { useQuery } from "@tanstack/react-query"

type DetailProps = {
  category: string
}

export default function Detail({ category }: DetailProps) {
  const crumbs: BreadcrumbProps['crumbs'] = [
    { text: 'Foods', href: '/' },
    { text: category }
  ]

  const { data, isSuccess } = useQuery<Meals>({
    queryKey: ['meals'],
    queryFn: () =>
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((res) => res.json())
  })

  return (
    <>
      <Navbar />
      <section class="m-auto px-8 py-8 max-w-6xl">
        <Breadcrumb crumbs={crumbs} />
        <h1 class="my-16 text-6xl">{ category } Meals</h1>
        <hr />
        <main class="py-16 grid grid-cols-3 sm:grid-cols-4 gap-4">
          { isSuccess
            ? data.meals.map(({ idMeal, strMeal, strMealThumb }) =>
              <Card
                key={idMeal}
                href={`${location.pathname}/${idMeal}`}
                text={strMeal}
                image={strMealThumb}
                large
              />
            )
            : <>Fetching...</>
          }
        </main>
      </section>
    </>
  )
}
