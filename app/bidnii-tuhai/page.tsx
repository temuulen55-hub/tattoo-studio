import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";
import Image from "next/image";

const CERTIFICATES = [
  { title: "Tattoo Art & Safety (Certified), Улаанбаатар", year: "2021" },
  { title: "Fine Line & Minimalist Tattoo Workshop", year: "2023" },
  { title: "Advanced Cover-Up Techniques, Сөүл", year: "2025" },
];

const STYLES = ["Fine Line", "Minimalist", "Blackwork", "Custom Design"];

const STATS = [
  { value: "5+", label: "жилийн туршлага" },
  { value: "1000+", label: "сэтгэл хангалуун үйлчлүүлэгч" },
  { value: "3", label: "олон улсын сертификат" },
];

export default function BidniiTuhaiPage() {
  return (
    <>
      <section className="bg-ivory py-16 lg:py-24">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Left: About Text */}
            <div>
              <SectionHeading
                eyebrow="Бидний тухай"
                title="Temka Tattoo-н тухай"
              />
              <p className="mt-6 font-sans leading-relaxed text-charcoal/80">
                Сайн байна уу, намайг Temka гэдэг. Би мэргэжлийн шивээсчин
                артист бөгөөд 5 гаруй жилийн турш үйлчлүүлэгчдийнхээ хүсэл
                мөрөөдлийг арьсан дээр урлагийн бүтээл болгон буулгаж байна.
                Миний хувьд шивээс гэдэг нь зөвхөн зураг биш, харин хүний дотоод
                ертөнц, өөрийн гэсэн өвөрмөц онцлогийг илэрхийлэх мөнхийн урлаг
                юм.
              </p>
              <p className="mt-4 font-sans leading-relaxed text-charcoal/80">
                Би нарийн зураас (Fine line), минималист болон хувь хүний
                онцлогт тохирсон дахин давтагдашгүй дизайнуудыг гаргахыг
                эрмэлздэг. Шивээс бүрийг таны биеийн бүтцэд төгс зохицуулан,
                мэргэжлийн өндөр түвшинд гүйцэтгэнэ.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-3xl text-charcoal">
                      {stat.value}
                    </p>
                    <p className="mt-1 font-sans text-xs text-charcoal/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Artist Image */}
            <div className="flex flex-col gap-6">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-card">
                <Image
                  src="/images/portfolio/miniiprofile.jpeg"
                  alt="Artist Temka"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="font-serif text-2xl font-medium text-charcoal text-center">
                Artist Temka
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Гэрчилгээ, сертификат */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Мэргэжлийн чадамж"
            title="Гэрчилгээ, сертификат"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {CERTIFICATES.map((cert) => (
              <div
                key={cert.title}
                className="rounded-2xl border border-charcoal/10 bg-white/40 p-6"
              >
                <p className="font-sans text-xs uppercase tracking-wide text-dusty-rose">
                  {cert.year}
                </p>
                <p className="mt-2 font-serif text-lg text-charcoal">
                  {cert.title}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Шивээсний төрлүүд */}
      <section className="bg-ivory py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Урлаг"
            title="Миний мэргэшсэн төрлүүд"
            align="center"
          />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {STYLES.map((style) => (
              <span
                key={style}
                className="font-serif text-xl text-charcoal/50 lg:text-2xl"
              >
                {style}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 text-center lg:py-20">
        <Container>
          <p className="font-serif text-2xl text-charcoal lg:text-3xl">
            Өөрийн гэсэн онцгой урлагийг хамтдаа бүтээцгээе
          </p>
          <Link href="/zahialga" className="btn-primary mt-6 inline-flex">
            Шивээс хийлгэхээр захиалах
          </Link>
        </Container>
      </section>
    </>
  );
}
