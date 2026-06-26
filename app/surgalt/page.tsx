import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";

const TATTOO_TIERS = [
  {
    title: "Жижиг шивээс",
    description: "Минималист, жижиг хэмжээтэй нарийн зураастай шивээсүүд.",
    price: "100,000₮ - 200,000₮",
    features: [
      "Хурдан хугацаанд хийгдэх",
      "Нарийн зураас",
      "Мэргэжлийн хяналт",
    ],
  },
  {
    title: "Дунд хэмжээний шивээс",
    description:
      "Дэлгэрэнгүй зураглал, сүүдэрлэлт бүхий дунд хэмжээний бүтээл.",
    price: "250,000₮ - 500,000₮",
    features: [
      "Дизайн зөвлөгөө",
      "Сүүдэрлэлтийн техник",
      "Өндөр чанарын будаг",
    ],
  },
  {
    title: "Cover-up / Засвар",
    description:
      "Хуучин болон хүсээгүй шивээсийг шинэ урлагийн бүтээлээр солих.",
    price: "300,000₮-с эхлэн",
    features: ["Мэргэжлийн үнэлгээ", "Тусгай дизайн", "Төгс ууссан засвар"],
  },
];

export default function SurgaltPage() {
  return (
    <>
      <section className="bg-[#161412] py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Үйлчилгээний үнэ"
            title="Шивээсний үнийн зэрэглэл"
            subtitle="Таны сонгох шивээсний хэмжээ, нарийн төвөгтэй байдал болон дизайнаас үнэ хамаарах болно."
            align="center"
          />
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {TATTOO_TIERS.map((tier) => (
              <GlowCard key={tier.title}>
                <article className="flex h-full flex-col">
                  <h3 className="font-serif text-2xl text-[#F0EAE0]">
                    {tier.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[rgba(240,234,224,0.55)]">
                    {tier.description}
                  </p>
                  <ul className="mb-8 mt-5 flex-1 space-y-2.5">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 font-sans text-sm text-[rgba(240,234,224,0.7)]"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                          className="mt-0.5 shrink-0 text-[#C9A66B]"
                          aria-hidden="true"
                        >
                          <path
                            d="M4 10.5l3.5 3.5L16 5.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto border-t border-[rgba(240,234,224,0.07)] pt-6">
                    <span className="font-serif text-xl font-medium text-[#F0EAE0]">
                      {tier.price}
                    </span>
                    <Link
                      href="/holboo-barih"
                      className="btn-primary mt-5 block w-full text-center"
                    >
                      <span>Захиалга өгөх</span>
                    </Link>
                  </div>
                </article>
              </GlowCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[rgba(255,16,83,0.12)] bg-[#161412] py-14">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
            <div>
              <p className="font-serif text-2xl text-[#F0EAE0] lg:text-3xl">
                Таны хүсэж буй дизайн өвөрмөц үү?
              </p>
              <p className="mt-2 font-sans text-sm text-[rgba(240,234,224,0.5)]">
                Бидэнтэй холбогдон зураг төслөө ярилцаж, үнийн санал аваарай.
              </p>
            </div>
            <Link href="/holboo-barih" className="btn-secondary shrink-0">
              Зөвлөгөө авах
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
