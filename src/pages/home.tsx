import { useQuery } from '@tanstack/react-query'
import Card from '@/components/Card'
import Navbar from '@/components/Navbar/Navbar'

export default function Home() {
  const { data, isSuccess } = useQuery<Categories>({
    queryKey: ['categories'],
    queryFn: () =>
      fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((res) => res.json())
  })

  return (
    <>
      <Navbar />
      <section class="pt-16 pb-32 bg-gray-100 flex flex-col gap-8 items-center">
        <div class="flex gap-8 text-(red 3xl)">
          <div class="i-mdi:pot-steam" />
          <div class="i-mdi:rice" />
          <div class="i-mdi:cookie" />
        </div>
        <h1 class="fw-bold">mealapp API website</h1>
        <h2 class="fw-black text-5xl">See All The Delicious Foods</h2>
      </section>
      <main class="m-auto px-8 py-16 max-w-6xl grid grid-cols-3 sm:grid-cols-4 gap-4">
        { isSuccess
          ? data.categories.map(({ idCategory, strCategory, strCategoryThumb }) =>
            <Card
              key={idCategory}
              href={'/category/' + strCategory}
              text={strCategory}
              image={strCategoryThumb}
            />
          )
          : <>Fetching...</>
        }
      </main>
    </>
  )
}
