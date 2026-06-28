import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StarRating from "@/components/ui/StarRating";
import GlowCard from "@/components/ui/GlowCard";
import { TESTIMONIALS } from "@/lib/data/testimonials";
import { format } from "date-fns";

function average(nums: number[]) {
  return (nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(1);
}

export default function SetgegdelPage() {
  const avg = average(TESTIMONIALS.map((t) => t.rating));

  return (
    <>
      <section className="bg-[#161412] py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Сэтгэгдэл"
            title="Үйлчлүүлэгчдийн сэтгэгдэл"
            subtitle="Таны итгэл бол миний урам зориг."
            align="center"
          />
          <div className="mx-auto mt-8 flex w-fit items-center gap-4 rounded-pill border border-[rgba(240,234,224,0.1)] bg-[#1E1B18] px-6 py-3">
            <span className="font-serif text-3xl text-[#F0EAE0]">{avg}</span>
            <div>
              <StarRating rating={Math.round(Number(avg))} />
              <p className="mt-0.5 font-sans text-xs text-[rgba(240,234,224,0.4)]">
                {TESTIMONIALS.length}+ үйлчлүүлэгчийн үнэлгээ
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <GlowCard key={t.id}>
                <figure className="flex h-full flex-col">
                  <StarRating rating={t.rating} />
                  <blockquote className="mt-4 flex-1 font-sans text-sm leading-relaxed text-[rgba(240,234,224,0.65)]">
                    "{t.comment}"
                  </blockquote>
                  <figcaption className="mt-5 flex items-center justify-between border-t border-[rgba(240,234,224,0.07)] pt-4">
                    <div>
                      <p className="font-serif text-base text-[#F0EAE0]">
                        {t.name}
                      </p>
                      <p className="font-sans text-xs text-[rgba(240,234,224,0.4)]">
                        {t.service}
                      </p>
                    </div>
                    <span className="font-sans text-xs text-[rgba(240,234,224,0.3)]">
                      {format(new Date(t.date), "yyyy.MM")}
                    </span>
                  </figcaption>
                </figure>
              </GlowCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[rgba(255,16,83,0.12)] bg-[#161412] py-14 text-center">
        <Container>
          <p className="font-serif text-2xl text-[#F0EAE0] lg:text-3xl">
            Та ч мөн өөрийн сэтгэгдлээ хуваалцаарай
          </p>
          <p className="mt-2 font-sans text-sm text-[rgba(240,234,224,0.5)]">
            Temka Tattoo-д шивээс хийлгэсний дараа сэтгэгдлээ бидэнтэй
            хуваалцаарай.
          </p>
          <Link href="/holboo-barih" className="btn-secondary mt-6 inline-flex">
            Холбоо барих
          </Link>
        </Container>
      </section>
    </>
  );
}
