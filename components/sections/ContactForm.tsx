"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    console.log("Холбоо барих форм:", payload);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[rgba(255,16,83,0.2)] bg-[rgba(255,16,83,0.06)] p-8 text-center">
        <p className="font-serif text-xl text-[#F0EAE0]">Баярлалаа!</p>
        <p className="mt-2 font-sans text-sm text-[rgba(240,234,224,0.6)]">
          Таны зурвасыг хүлээн авлаа. Удахгүй холбогдох болно.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-5"
        >
          Дахин зурвас илгээх
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Нэр" name="name" type="text" required />
        <Field label="Утасны дугаар" name="phone" type="tel" required />
      </div>
      <Field label="Имэйл хаяг" name="email" type="email" required />

      <div>
        <label
          htmlFor="message"
          className="font-sans text-sm text-[rgba(240,234,224,0.55)]"
        >
          Зурвас
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full rounded-xl border border-[rgba(240,234,224,0.1)] bg-[#1E1B18] px-4 py-3 font-sans text-sm text-[#F0EAE0] outline-none placeholder:text-[rgba(240,234,224,0.25)] transition-all duration-300 focus:border-[#FF1053] focus:shadow-[0_0_12px_rgba(255,16,83,0.15)]"
          placeholder="Захиалга, сургалт эсвэл бусад асуултаа бичнэ үү..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:opacity-50"
      >
        <span>{status === "submitting" ? "Илгээж байна..." : "Илгээх"}</span>
      </button>

      {status === "error" && (
        <p className="font-sans text-sm text-[#FF1053]">
          Алдаа гарлаа. Дахин оролдоно уу, эсвэл шууд утсаар холбогдоно уу.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-sans text-sm text-[rgba(240,234,224,0.55)]"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-[rgba(240,234,224,0.1)] bg-[#1E1B18] px-4 py-3 font-sans text-sm text-[#F0EAE0] outline-none placeholder:text-[rgba(240,234,224,0.2)] transition-all duration-300 focus:border-[#FF1053] focus:shadow-[0_0_12px_rgba(255,16,83,0.15)]"
      />
    </div>
  );
}
