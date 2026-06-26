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
  name: "Doxy Tattoo",
  phone: "89-169-169",
  phoneHref: "tel:+97689169169",
  email: "hello@doxytattoo.com",
  emailHref: "mailto:hello@doxytattoo.com",
  // Updated to business and personal Instagrams per your request
  instagramBusiness: "https://www.instagram.com/doxy_tattoo/",
  instagramPersonal: "https://www.instagram.com/doxy_fsn/",
  hours: "Даваа - Бямба: 11:00 - 20:00",
  address: "Улаанбаатар, Монгол улс",
};
