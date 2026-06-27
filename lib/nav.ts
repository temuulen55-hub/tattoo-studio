// lib/nav.ts

export type NavItem = {
  label: string;
  href: string;
};

export const PRIMARY_NAV: NavItem[] = [
  { label: "Бидний тухай", href: "/bidnii-tuhai" },
  { label: "Галерей", href: "/buteeluud" },
  { label: "Үнэ", href: "/surgalt" },
  { label: "Зөвлөгөө", href: "/zovlogoo" },
  { label: "Сэтгэгдэл", href: "/setgegdel" },
  { label: "Холбоо барих", href: "/holboo-barih" },
];

export const BOOKING_CTA: NavItem = {
  label: "Цаг захиалах",
  href: "/zahialga",
};

export const SITE_CONFIG = {
  name: "Temka Tattoo",
  phone: "9988 7766",
  phoneHref: "tel:+97699887766",
  email: "hello@Temkatattoo.com",
  emailHref: "mailto:temuulen.iphone5@gmail.com",
  // Updated to business and personal Instagrams per your request
  instagramBusiness: "https://www.instagram.com/temulenni/",
  instagramPersonal: "https://www.instagram.com/temulenni/",
  hours: "Даваа - Бямба: 11:00 - 20:00",
  address: "Улаанбаатар, Монгол улс",
};
