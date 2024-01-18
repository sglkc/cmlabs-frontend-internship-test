type Categories = {
  categories: Array<{
    idCategory: number
    strCategory: string
    strCategoryDescription: string
    strCategoryThumb: string
  }>
}

type Meals = {
  meals: Array<{
    idMeal: string
    strMeal: string
    strMealThumb: string
  }>
}

type MealDetail = {
  idMeal: string
  strMeal: string
  strDrinkAlternate?: string
  strCategory: string
  strArea: string
  strInstructions: string
  strMealThumb: string
  strTags: string
  strYoutube: string
  [key: `strIngredient${number}`]: string
  [key: `strMeasure${number}`]: string
  strSource: string
  strImageSource?: string
  strCreativeCommonsConfirmed?: string
  dateModified?: string
}

type MealDetailResponse = {
  meals: Array<MealDetail>
}
