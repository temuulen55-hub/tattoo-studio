import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogList from "@/components/sections/BlogList";

export default function ZovlogooPage() {
  return (
    <>
      <section className="bg-ivory py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Зөвлөгөө"
            title="Doxy Tattoo-н зөвлөх булан"
            subtitle="Шивээс хийлгэхээс өмнөх бэлтгэл, хийлгэсний дараах арчилгаа, болон шивээсний урлагийн тухай мэргэжлийн зөвлөгөөнүүд."
          />
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <BlogList />
        </Container>
      </section>
    </>
  );
}
