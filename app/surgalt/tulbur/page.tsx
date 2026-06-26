import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BankTransferCard from "@/components/sections/BankTransferCard";

export const metadata: Metadata = {
  title: "Шивээс захиалга",
};

export default async function BookingPage() {
  return (
    <section className="py-16 lg:py-24">
      <Container className="max-w-2xl">
        <Link href="/surgalt" className="font-sans text-sm text-dusty-rose">
          ← Үнийн жагсаалт руу буцах
        </Link>

        <div className="mt-6">
          <SectionHeading
            eyebrow="Захиалга баталгаажуулах"
            title="Шивээс хийлгэх захиалга"
            subtitle="Шивээс хийлгэх товоо баталгаажуулахын тулд урьдчилгаа төлбөрөө шилжүүлнэ үү. Гүйлгээний утга дээр өөрийн нэр, утасны дугаараа заавал бичээрэй."
          />
        </div>

        <div className="mt-10">
          <BankTransferCard
            label="Doxy Tattoo - Урьдчилгаа төлбөр"
            amount="50,000₮"
            showQr={false}
          />

          <div className="mt-8 rounded-2xl bg-ivory p-6">
            <p className="font-serif text-lg text-charcoal">Дараагийн алхам</p>
            <ol className="mt-3 space-y-2 font-sans text-sm leading-relaxed text-charcoal/70">
              <li>
                1. Урьдчилгаа төлбөр болох 50,000₮-ийг данс руу шилжүүлнэ.
              </li>
              <li>
                2. Гүйлгээний утганд таны бүтэн нэр, утасны дугаараа бичнэ үү.
              </li>
              <li>
                3. Төлбөр шилжүүлсний дараа бид тантай холбогдож, цаг товлон
                дизайны талаар ярилцах болно (24 цагийн дотор).
              </li>
            </ol>
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
