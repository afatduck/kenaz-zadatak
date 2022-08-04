interface Author {
  id: number
  name: string
  about: string
}

interface NewsComment {
  id: number
  user: string
  text: string
  time: string
  replies: {
    to: string
    text: string
    time: string
    user: string
  }[]
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
  comments: NewsComment[]
  category: "news" | "business" | "sport" | "life" | "tech" | "travel"
}

type Categories = "news" | "business" | "sport" | "life" | "tech" | "travel"
