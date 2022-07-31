interface Author {
  id: number
  name: string
  about: string
}

interface News {
  id: number
  headline: string
  headerImage: string
  content: {
    type: "text" | "image"
    value: string
  }[]
  date: string
  author: Author
  comments: {
    user: string
    text: string
    time: string
  }[]
  category: "news" | "business" | "sport" | "life" | "tech" | "travel"
}

type Categories = "news" | "business" | "sport" | "life" | "tech" | "travel"
