import Navbar from './components/Navbar/Navbar'

export function App() {
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
      <main>
      </main>
    </>
  )
}
