export type Article = {
  id: string;
  title: string;
  category: string;
  excerpt?: string;
  date?: string;
  comments?: number;
  image: string;
  imageAlt: string;
  href: string;
};

export type TopicItem = {
  id: string;
  title: string;
  image: string;
  href: string;
};

/** Seeded placeholder image from picsum (deterministic per seed). */
const img = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const featured: Article = {
  id: "featured-1",
  title: "They're the Hottest Team in the Market — and Cost Less Than $20 Million",
  category: "Market",
  date: "January 8, 2025",
  comments: 16,
  excerpt:
    "In the rapidly expanding concrete jungles of the modern world, urban green spaces—parks, gardens, and tree-lined streets—are becoming more vital than ever. These areas...",
  image: img("featured-market", 760, 520),
  imageAlt: "A baseball player at bat during a packed evening game",
  href: "#",
};

export const featuredCaption =
  "Labore nonumes te vel, vis id errem tantas tempor. Solet quidam salutatus at quo. Tantas comprehensam te sea, usu sanctus similique ei. Viderer admodum mea et, probo tantas alienum ne vim.";

export const featuredSubCards: Article[] = [
  {
    id: "sub-1",
    title: "Periculis id eligendi convenire usu lus numquam",
    category: "Sport",
    image: img("sub-sport", 360, 260),
    imageAlt: "American football player in a green helmet",
    href: "#",
  },
  {
    id: "sub-2",
    title: "Eu cum Nibh everti vivendo ius ne",
    category: "Climate Change · Lifestyle",
    image: img("sub-lifestyle", 360, 260),
    imageAlt: "Two people smiling together outdoors",
    href: "#",
  },
  {
    id: "sub-3",
    title: "Solum graeco vel at Has ad alienum",
    category: "Opinion",
    image: img("sub-opinion", 360, 260),
    imageAlt: "Athlete sprinting on a red running track",
    href: "#",
  },
];

export const topics: TopicItem[] = [
  {
    id: "topic-1",
    title: "Diceret erroribus eos ut est nisl summo",
    image: img("topic-1", 200, 150),
    href: "#",
  },
  {
    id: "topic-2",
    title: "Sententiae epicuri concludaturque ius no Id mucius",
    image: img("topic-2", 200, 150),
    href: "#",
  },
];

export const trending: { id: string; title: string; href: string }[] = [
  { id: "t-1", title: "Aliquid Vim wisi mucius no Ex scaevola", href: "#" },
  { id: "t-2", title: "Sententiae epicuri concludaturque ius no Id mucius", href: "#" },
  { id: "t-3", title: "Amet aeterno gubergren ne per illum tincidunt", href: "#" },
  { id: "t-4", title: "Civibus mea Eros wisi intellegam quo et", href: "#" },
];

export const businessArticles: Article[] = [
  {
    id: "biz-1",
    title: "Diceret erroribus eos ut est nisl summo",
    category: "Business",
    image: img("biz-1", 320, 220),
    imageAlt: "Industrial cooling towers releasing steam",
    href: "#",
  },
  {
    id: "biz-2",
    title: "Sententiae epicuri concludaturque ius no Id mucius",
    category: "Business",
    image: img("biz-2", 320, 220),
    imageAlt: "Automated factory production line",
    href: "#",
  },
  {
    id: "biz-3",
    title: "Civibus mea Eros wisi intellegam quo et",
    category: "Business",
    image: img("biz-3", 320, 220),
    imageAlt: "Engineer operating heavy machinery",
    href: "#",
  },
  {
    id: "biz-4",
    title: "An mea nonumy latine volumus Veniam fabulas",
    category: "Business",
    image: img("biz-4", 320, 220),
    imageAlt: "Group of colleagues in a black and white portrait",
    href: "#",
  },
  {
    id: "biz-5",
    title: "Facilisi cum ne ad vero dolorem quo",
    category: "Business",
    image: img("biz-5", 320, 220),
    imageAlt: "Workers at an industrial site at dusk",
    href: "#",
  },
  {
    id: "biz-6",
    title: "Vivendo partem mei ne quo error mucius",
    category: "Business",
    image: img("biz-6", 320, 220),
    imageAlt: "City skyline with financial district towers",
    href: "#",
  },
];

export const lifestyleFeature = {
  id: "life-1",
  title: "A new start after 60: I went to art school at 66",
  excerpt:
    "In the rapidly expanding concrete jungles of the modern world, urban green spaces—parks, gardens, and tree-lined streets—are becoming more vital than ever. These areas...",
  author: "Neil",
  readTime: "2 mins read",
  image: img("lifestyle-feature", 720, 620),
  imageAlt: "Black and white portrait of an older man",
  href: "#",
};

export const sportArticles: Article[] = [
  {
    id: "sport-1",
    title: "Reprimique consectetuer usu mel no brute munere",
    category: "Sport",
    image: img("sport-1", 360, 260),
    imageAlt: "Tennis player serving on an outdoor court",
    href: "#",
  },
  {
    id: "sport-2",
    title: "Amet aeterno gubergren ne per illum tincidunt",
    category: "Sport",
    image: img("sport-2", 360, 260),
    imageAlt: "Athlete stretching during a workout",
    href: "#",
  },
  {
    id: "sport-3",
    title: "Sententiae epicuri concludaturque ius no Id mucius",
    category: "Sport",
    image: img("sport-3", 360, 260),
    imageAlt: "Footballer dribbling the ball on a pitch",
    href: "#",
    // marked as video in the UI layer
  },
  {
    id: "sport-4",
    title: "Periculis id eligendi convenire usu lus numquam",
    category: "Sport",
    image: img("sport-4", 360, 260),
    imageAlt: "American football player in a green helmet",
    href: "#",
  },
];

export const navLinks: { label: string; href: string; hasDropdown?: boolean }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blogs", href: "/blogs" },
];

export type BlogPost = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  imageAlt: string;
  href: string;
};

/** Categories used to filter the Blogs page (first one is the "all" pseudo-tab). */
export const blogCategories = [
  "All",
  "Market",
  "Business",
  "Lifestyle",
  "Sport",
  "Opinion",
  "Travel",
  "Food",
] as const;

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "They're the Hottest Team in the Market — and Cost Less Than $20 Million",
    category: "Market",
    excerpt:
      "In the rapidly expanding markets of the modern world, value plays are becoming more vital than ever for investors chasing outsized returns.",
    date: "January 8, 2025",
    author: "Neil",
    readTime: "5 mins read",
    image: img("blog-market-1", 640, 420),
    imageAlt: "Baseball player at bat under stadium lights",
    href: "#",
  },
  {
    id: "post-2",
    title: "Diceret erroribus eos ut est nisl summo",
    category: "Business",
    excerpt:
      "Supply chains are reshaping around automation as factories chase efficiency gains and resilience after a turbulent decade of disruption.",
    date: "January 6, 2025",
    author: "Mara",
    readTime: "4 mins read",
    image: img("blog-biz-1", 640, 420),
    imageAlt: "Automated factory production line",
    href: "#",
  },
  {
    id: "post-3",
    title: "A new start after 60: I went to art school at 66",
    category: "Lifestyle",
    excerpt:
      "It is never too late to begin again. One reader shares how returning to education reshaped her sense of purpose and community.",
    date: "January 5, 2025",
    author: "Neil",
    readTime: "2 mins read",
    image: img("blog-life-1", 640, 420),
    imageAlt: "Black and white portrait of an older man",
    href: "#",
  },
  {
    id: "post-4",
    title: "Reprimique consectetuer usu mel no brute munere",
    category: "Sport",
    excerpt:
      "The new season opens with surprises across every court, as underdog clubs rewrite expectations and veterans defy the odds.",
    date: "January 4, 2025",
    author: "Jonah",
    readTime: "3 mins read",
    image: img("blog-sport-1", 640, 420),
    imageAlt: "Tennis player serving on an outdoor court",
    href: "#",
  },
  {
    id: "post-5",
    title: "Solum graeco vel at Has ad alienum",
    category: "Opinion",
    excerpt:
      "Why the loudest voices in the room are rarely the ones worth listening to — a case for slower, more deliberate public debate.",
    date: "January 3, 2025",
    author: "Priya",
    readTime: "6 mins read",
    image: img("blog-opinion-1", 640, 420),
    imageAlt: "Athlete sprinting on a red running track",
    href: "#",
  },
  {
    id: "post-6",
    title: "Civibus mea Eros wisi intellegam quo et",
    category: "Business",
    excerpt:
      "Small caps quietly outperformed this quarter. We look at the data behind the rally and what it signals for the months ahead.",
    date: "January 2, 2025",
    author: "Mara",
    readTime: "4 mins read",
    image: img("blog-biz-2", 640, 420),
    imageAlt: "City skyline with financial district towers",
    href: "#",
  },
  {
    id: "post-7",
    title: "Eu cum Nibh everti vivendo ius ne",
    category: "Travel",
    excerpt:
      "Off-season escapes that cost less and feel richer: five destinations that reward travellers willing to skip the crowds.",
    date: "December 30, 2024",
    author: "Lena",
    readTime: "5 mins read",
    image: img("blog-travel-1", 640, 420),
    imageAlt: "Scenic coastal town at golden hour",
    href: "#",
  },
  {
    id: "post-8",
    title: "Sententiae epicuri concludaturque ius no Id mucius",
    category: "Food",
    excerpt:
      "A weeknight guide to slow cooking on a budget — big flavour, minimal effort, and ingredients you already keep on hand.",
    date: "December 28, 2024",
    author: "Theo",
    readTime: "3 mins read",
    image: img("blog-food-1", 640, 420),
    imageAlt: "Rustic home-cooked meal on a wooden table",
    href: "#",
  },
  {
    id: "post-9",
    title: "Amet aeterno gubergren ne per illum tincidunt",
    category: "Market",
    excerpt:
      "Volatility is back, but so is opportunity. A measured look at where capital is rotating as the cycle turns once more.",
    date: "December 24, 2024",
    author: "Priya",
    readTime: "7 mins read",
    image: img("blog-market-2", 640, 420),
    imageAlt: "Trading charts on a digital screen",
    href: "#",
  },
  {
    id: "post-10",
    title: "Periculis id eligendi convenire usu lus numquam",
    category: "Sport",
    excerpt:
      "Inside the training methods reshaping recovery for elite athletes — and what amateurs can borrow without the budget.",
    date: "December 21, 2024",
    author: "Jonah",
    readTime: "4 mins read",
    image: img("blog-sport-2", 640, 420),
    imageAlt: "American football player in a green helmet",
    href: "#",
  },
  {
    id: "post-11",
    title: "An mea nonumy latine volumus Veniam fabulas",
    category: "Lifestyle",
    excerpt:
      "Designing a calmer home: small, low-cost changes that researchers link to better focus, sleep and everyday wellbeing.",
    date: "December 18, 2024",
    author: "Lena",
    readTime: "5 mins read",
    image: img("blog-life-2", 640, 420),
    imageAlt: "Bright minimalist living room interior",
    href: "#",
  },
  {
    id: "post-12",
    title: "Facilisi cum ne ad vero dolorem quo",
    category: "Opinion",
    excerpt:
      "The case for boring infrastructure: why the least glamorous investments often deliver the most durable returns.",
    date: "December 15, 2024",
    author: "Theo",
    readTime: "6 mins read",
    image: img("blog-opinion-2", 640, 420),
    imageAlt: "Industrial site at dusk",
    href: "#",
  },
];
