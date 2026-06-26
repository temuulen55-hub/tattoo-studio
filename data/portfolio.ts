// data/portfolio.ts

export type Category = "Fine Line" | "Minimalist" | "Blackwork";

// 1. Base interface
interface BasePortfolioItem {
  id: string;
  title: string;
  category: Category;
}

// 2. Before/After items
interface BeforeAfterItem extends BasePortfolioItem {
  type: "before-after";
  imageBefore: string;
  imageAfter: string;
}

// 3. Standard Gallery items
interface GalleryItem extends BasePortfolioItem {
  type: "gallery";
  images: string[];
}

// 4. Instagram Embed interface
interface InstagramItem extends BasePortfolioItem {
  type: "instagram";
  instagramUrl: string;
}

// 5. Combine them
export type PortfolioItem = BeforeAfterItem | GalleryItem | InstagramItem;

// 6. Final Tattoo Data
export const portfolioData: PortfolioItem[] = [
  {
    id: "blackwork-01",
    title: "Цээж дүүргэлт",
    category: "Blackwork",
    type: "gallery",
    images: [
      "/images/portfolio/a1.jpeg",
      "/images/portfolio/a2.jpeg",
      "/images/portfolio/a3.jpeg",
      "/images/portfolio/a4.jpeg",
    ],
  },

  {
    id: "minimalist-01",
    title: "Нурууны шивээс",
    category: "Minimalist",
    type: "gallery",
    images: ["/images/portfolio/b1.jpeg", "/images/portfolio/b2.jpeg"],
  },
  {
    id: "fine-line-01",
    title: "Жижиг шивээс",
    category: "Fine Line",
    type: "gallery",
    images: ["/images/portfolio/c1.jpeg", "/images/portfolio/c2.jpeg"],
  },
];
