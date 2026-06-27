import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";

export default function HolbooBarihPage() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Холбоо барих"
          title="Temka Tattoo-той холбогдох"
        />

        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          {/* Форм */}
          <div>
            <ContactForm />
          </div>

          {/* Байршил, цаг */}
          <div>
            <h3 className="font-serif text-xl text-charcoal">
              Студийн мэдээлэл
            </h3>

            <dl className="mt-5 space-y-4 font-sans text-sm">
              <div className="flex items-start gap-3">
                <IconPin />
                <div>
                  <dt className="text-charcoal/50">Хаяг</dt>
                  <dd className="mt-0.5 text-charcoal">
                    Улаанбаатар хот, Монгол улс
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <IconClock />
                <div>
                  <dt className="text-charcoal/50">Ажиллах цаг</dt>
                  <dd className="mt-0.5 text-charcoal">
                    Даваа - Бямба: 11:00 - 20:00
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <IconPhone />
                <div>
                  <dt className="text-charcoal/50">Утас</dt>
                  <dd className="mt-0.5">
                    <a
                      href="tel:+97689169169"
                      className="text-charcoal hover:text-dusty-rose"
                    >
                      9988 7766
                    </a>
                  </dd>
                </div>
              </div>
            </dl>

            {/* Газрын зураг */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-charcoal/10">
              <iframe
                title="Байршил"
                src="https://www.google.com/maps/place/ASA+Arena/@47.9120007,106.9046368,17z/data=!3m1!4b1!4m6!3m5!1s0x5d969300464f2d73:0x2230580503f452a6!8m2!3d47.9120007!4d106.9072171!16s%2Fg%2F11x7vfs3l?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function IconPin() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 shrink-0 text-dusty-rose"
      aria-hidden="true"
    >
      <path
        d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 shrink-0 text-dusty-rose"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 7.5V12l3 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 shrink-0 text-dusty-rose"
      aria-hidden="true"
    >
      <path
        d="M5 4h3.2l1.4 4.6-2.1 1.7a12 12 0 0 0 6.2 6.2l1.7-2.1L19 16v3.2c0 .9-.7 1.6-1.6 1.5C9.6 20 4 14.4 3.5 6.6 3.4 5.7 4.1 5 5 5Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}
