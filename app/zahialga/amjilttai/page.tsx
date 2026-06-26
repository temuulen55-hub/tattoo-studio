import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BankTransferCard from "@/components/sections/BankTransferCard";
import { BOOKING_DEPOSIT_AMOUNT } from "@/lib/data/payment";

export const metadata: Metadata = {
  title: "Захиалга баталгаажуулах",
};

type PageProps = {
  searchParams: Promise<{ service?: string }>;
};

export default async function ZahialgaAmjilttaiPage({
  searchParams,
}: PageProps) {
  const { service } = await searchParams;
  const label = service ?? "Шивээс хийлгэх урьдчилгаа";

  return (
    <section className="py-16 lg:py-24">
      <Container className="max-w-2xl">
        <Link
          href="/zahialga"
          className="font-sans text-sm text-dusty-rose hover:underline"
        >
          ← Цаг сонголт руу буцах
        </Link>

        <div className="mt-6">
          <SectionHeading
            eyebrow="Алхам 2 / 2"
            title="Захиалга бүртгэгдлээ"
            subtitle="Таны сонгосон цагийг түр нөөцөллөө. Доорх дансанд урьдчилгаа төлбөрөө шилжүүлж, гүйлгээний утганд өөрийн нэр болон утасны дугаараа бичсэний дараа цаг эцэслэн баталгаажина."
          />
        </div>

        <div className="mt-10">
          <BankTransferCard
            label={label}
            amount={BOOKING_DEPOSIT_AMOUNT}
            showQr
          />

          <div className="mt-8 rounded-2xl bg-ivory p-6">
            <p className="font-serif text-lg text-charcoal">Дараагийн алхам</p>
            <ol className="mt-3 space-y-2 font-sans text-sm leading-relaxed text-charcoal/70">
              <li>
                1. QR кодоор уншуулах эсвэл дансны дугаарыг хуулж шилжүүлнэ үү.
              </li>
              <li>
                2. Гүйлгээний утганд өөрийн бүтэн нэр, утасны дугаараа заавал
                бичнэ үү.
              </li>
              <li>
                3. Төлбөр хүлээн авсны дараа таны шивээс хийлгэх цаг эцэслэн
                баталгаажиж, баталгаажуулах мессеж илгээх болно.
              </li>
            </ol>
            <p className="mt-4 font-sans text-xs text-charcoal/50">
              * Урьдчилгаа төлбөр нь таны захиалгыг баталгаажуулахад
              зориулагдсан бөгөөд нийт үйлчилгээний төлбөрөөс хасагдах болно.
            </p>
            <Link
              href="/holboo-barih"
              className="btn-secondary mt-5 inline-flex"
            >
              Асуулт байвал холбогдох
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
