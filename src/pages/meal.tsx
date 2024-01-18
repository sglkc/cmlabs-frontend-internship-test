import Breadcrumb, { BreadcrumbProps } from "@/components/Breadcrumbs"
import Card from "@/components/Card"
import Navbar from "@/components/Navbar/Navbar"
import { useQuery } from "@tanstack/react-query"

type MealProps = {
  id: string
}

export default function Meal({ id }: MealProps) {
  const { data, isSuccess } = useQuery<MealDetailResponse, unknown, MealDetail>({
    queryKey: ['meals'],
    queryFn: () =>
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json()),
    select: (data) => {
      const meal = data.meals?.[0]

      meal.strInstructions = meal.strInstructions.replace(/\r\n/g, '\n\n')
      meal.strYoutube = meal.strYoutube.replace('watch?v=', 'embed/')

      return meal
    },
  })

  const crumbs: BreadcrumbProps['crumbs'] = [
    { text: 'Foods', href: '/' },
    { text: data?.strCategory, href: '/' + data?.strCategory },
    { text: data?.strMeal }
  ]

  return (
    <>
      <Navbar />
      <section class="m-auto px-8 py-8 max-w-6xl">
        <Breadcrumb crumbs={crumbs} />
        <h1 class="my-16 text-6xl">{ data?.strMeal }</h1>
        <hr />
        <main class="py-8 flex flex-col gap-4">
          <h2 class="fw-bold text-red-500">{ data?.strArea } Culinary</h2>
          <section class="grid sm:grid-cols-2 grid-cols-1 gap-8">
            <img class="rd-[2rem]" src={data?.strMealThumb} />
            <article class="flex flex-col gap-4">
              <h3 class="text-4xl">Instructions</h3>
              <p class="whitespace-pre-line">{ data?.strInstructions }</p>
              <h3 class="mt-4 text-4xl">Recipes</h3>
              <ol class="list-disc list-inside">
                { data &&
                  Object.entries(data)
                    .filter(([k, v]) => k.startsWith('strIngredient') && v)
                    .map(([, v], i) =>
                      <li>{ data[`strMeasure${i + 1}`] }  { v }</li>
                    )
                }
              </ol>
            </article>
            <section
              class="mt-8 sm:col-span-2 col-span-1 flex flex-col gap-4 justify-center"
            >
              <h3 class="text-(4xl center)">Tutorials</h3>
              <iframe class="aspect-video" src={data?.strYoutube} />
            </section>
          </section>
        </main>
      </section>
    </>
  )
}
