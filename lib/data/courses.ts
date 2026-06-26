// lib/data/courses.ts

export type TattooTier = {
  slug: string;
  title: string;
  price: string;
  description: string;
  features: string[];
};

export const COURSES: TattooTier[] = [
  {
    slug: "small-tattoo",
    title: "Жижиг шивээс",
    price: "100,000₮ - 400,000₮",
    description: "Минималист, жижиг хэмжээтэй нарийн зураастай шивээсүүд.",
    features: [
      "Хурдан хугацаанд хийгдэх",
      "Нарийн зураас (Fine line)",
      "Мэргэжлийн хяналт",
      "Дизайн зөвлөгөө",
    ],
  },
  {
    slug: "medium-tattoo",
    title: "Дунд хэмжээний шивээс",
    price: "450,000₮ - 800,000₮",
    description:
      "Дэлгэрэнгүй зураглал, сүүдэрлэлт бүхий дунд хэмжээний бүтээл.",
    features: [
      "Дизайн зөвлөгөө",
      "Сүүдэрлэлтийн техник",
      "Өндөр чанарын будаг",
      "Хувийн онцлогт тохирсон",
    ],
  },
  {
    slug: "coverup-tattoo",
    title: "Cover-up / Засвар",
    price: "300,000₮-с эхлэн",
    description:
      "Хуучин болон хүсээгүй шивээсийг шинэ урлагийн бүтээлээр солих.",
    features: [
      "Мэргэжлийн үнэлгээ",
      "Тусгай дизайн",
      "Төгс ууссан засвар",
      "Олон үе шаттай зөвлөгөө",
    ],
  },
];
