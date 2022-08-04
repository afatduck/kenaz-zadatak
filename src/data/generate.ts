globalThis.fetch = require("node-fetch")

const authors: Author[] = [
  {
    id: 0,
    name: "Pedro Collins",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta grav.",
  },
  {
    id: 1,
    name: "Phillip Palmer",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec",
  },
  {
    id: 2,
    name: "Morris Bishop",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec",
  },
  {
    id: 3,
    name: "Tony May",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec",
  },
  {
    id: 4,
    name: "Delores Bishop",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec",
  },
  {
    id: 5,
    name: "Robinson Rd",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec",
  },
]

const headlines = {
  news: [
    "All You Need To Know About News.",
    "Seven Precious Tips To Help You Get Better In News Industry.",
    "7 Important Facts That You Should Know About The News Industry.",
    "Why Is News So Famous?",
    "Is News Still Relevant?",
    "Be A Pioneer In The News Industry. Here's What You'll Need.",
    "The Hidden Agenda Of News.",
    "5 Top Risks Of News.",
    "The Reasons Why We Love The News Industry.",
    "Learn From These Mistakes Before You Learn News.",
  ],
  business: [
    "Never Mess With Business And Here's The Reasons Why.",
    "7 Mind Numbing Facts About Business.",
    "15 Innovative Approaches To Improve Your Business.",
    "7 Useful Tips From Experts In Business.",
    "This Is Why This Year Will Be The Year Of Business.",
    "Here's What No One Tells You About Business.",
    "Ten Shitty Things Business Have Done In 2015.",
    "These Local Practices In Business Are So Bizarre That They Will Make Your Jaw Drop!",
    "This Is Why Business Is So Famous!",
    "15 Ways To Learn Business Effectively.",
  ],
  sports: [
    "7 Lessons That Will Teach You All You Need To Know About Sports.",
    "The Advantages Of Being In Sports Industry.",
    "10 Ways To Learn Sports Effectively.",
    "Seven Reliable Sources To Learn About Sports.",
    "15 Fishy Things That Nobody Told You About Sports Industry.",
    "How To Have A Fantastic Sports With Minimal Spending.",
    "There's No Point Doing Sports If You're Not Doing It Right.",
    "The Hidden Agenda Of Sports.",
    "The Ultimate Revelation On The Sports Industry.",
    "Five Explanation On Why Sports Is Important.",
  ],
  life: [
    "7 Factors That Affect Life's Longevity.",
    "Understand Life Before You Regret.",
    "The Shocking Revelation of Life.",
    "How Life Can Help You Improve Your Health.",
    "7 Lessons I've Learned From Life.",
    "What You Know About Life And What You Don't Know About Life.",
    "Everything You Need To Know About Life.",
    "Learn The Truth About Life In The Next 60 Seconds.",
    "This Is Why Life Is So Famous!",
    "10 Things Nobody Told You About Life.",
  ],
  tech: [
    "Understanding The Background Of Tech.",
    "What I Wish Everyone Knew About Tech.",
    "Seven Reasons You Should Fall In Love With Tech.",
    "The Reasons Why We Love Tech.",
    "This Story Behind Tech Will Haunt You Forever!",
    "This Year Will Be The Year of Tech.",
    "Five Explanation On Why Tech Is Important.",
    "Seven Facts You Never Knew About Tech.",
    "7 Awesome Things You Can Learn From Studying Tech.",
    "Ten Ways Tech Can Improve Your Business.",
  ],
  travel: [
    "Learn From These Mistakes Before You Learn Traveling.",
    "How To Own Traveling For Free.",
    "20 Wonderful Traveling. Number 16 is Absolutely Stunning.",
    "The Worst Advices We've Heard For Traveling.",
    "7 Important Facts That You Should Know About Traveling.",
    "7 Lessons I've Learned From Traveling.",
    "This Is Why Traveling Is So Famous!",
    "Seven Explanation On Why Traveling Is Important.",
    "The Millionaire Guide On Traveling To Help You Get Rich.",
    "7 Various Ways To Do Traveling.",
  ],
}

const categories = ["news", "business", "sports", "life", "tech", "travel"]
const textSizes = ["short", "medium", "large"]

const getRandom = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)]

const getRandomText = async (
  size: typeof textSizes[number],
  paragraphs: number
): Promise<string[]> => {
  const url = `https://loripsum.net/generate.php?p=${paragraphs}&l=${size}`
  try {
    const response = await fetch(url)
    let text = await response.text()
    text = text.replaceAll("<p>", "").replaceAll("</p>", "")
    return text.split("\n").filter((t) => t.length > 0)
  } catch (e) {
    return Array(paragraphs).fill("")
  }
}

const getRandomName = async (): Promise<string> => {
  const res = await fetch("https://api.namefake.com/")
  const data = await res.json()
  return (data as { name: string }).name
}

const numOfNews = 100
const news: News[] = []

async function generateNews() {
  for (let i = 0; i < numOfNews; i++) {
    // Just so typescript doesn't complain
    const category = getRandom(categories) as "life"
    const headline = getRandom(headlines[category]) as string
    // Random date in last month
    const d = new Date()
    d.setMonth(d.getMonth() - 1)
    d.setDate(Math.floor(Math.random() * d.getDate()))
    const date = d.toLocaleString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    const headerImage = Math.floor(Math.random() * 11).toString() + "./webp"
    const contentLength = Math.floor(Math.random() * 4) + 4
    const paragraphs = await getRandomText(getRandom(textSizes), contentLength)
    const content = paragraphs.map((paragraph) => ({
      type: "text" as "text" | "image",
      value: paragraph,
    }))
    content.splice(Math.trunc(contentLength / 2), 0, {
      type: "image",
      value: Math.floor(Math.random() * 11).toString() + "./webp",
    })
    const author = getRandom(authors) as Author
    const comments = []
    const commentNum = Math.floor(Math.random() * 5) + 1
    for (let i = 0; i < commentNum; i++) {
      const user = await getRandomName()
      const text = (await getRandomText("short", 1))[0]
      const time = new Date().toLocaleString()
      const id = i
      comments.push({ user, text, time, id, replies: [] })
    }
    news.push({
      id: i,
      headline,
      headerImage,
      content,
      date,
      author,
      comments,
      category,
    })
  }
  console.log(JSON.stringify(news, null, 2))
}

generateNews()
