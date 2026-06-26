"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { BANK_TRANSFER_INFO, PAYMENT_INSTRUCTION } from "@/lib/data/payment";

type Props = {
  label: string;
  amount: string;
  showQr?: boolean;
};

export default function BankTransferCard({
  label,
  amount,
  showQr = false,
}: Props) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const qrPayload = [
    BANK_TRANSFER_INFO.bankName,
    BANK_TRANSFER_INFO.accountNumber,
    BANK_TRANSFER_INFO.accountHolderName,
    `Дүн: ${amount}`,
  ].join("\n");

  async function copyToClipboard(value: string, field: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(
        () => setCopiedField((current) => (current === field ? null : current)),
        1800,
      );
    } catch {
      // Clipboard unavailable — graceful degradation
    }
  }

  return (
    <div className="rounded-2xl border border-[rgba(240,234,224,0.08)] bg-[#161412] p-6 lg:p-8">
      <div className="flex items-center justify-between gap-4 border-b border-[rgba(240,234,224,0.08)] pb-5">
        <div>
          <p className="font-sans text-xs uppercase tracking-wide text-[rgba(240,234,224,0.4)]">
            {label}
          </p>
          <p className="mt-1 font-serif text-2xl text-[#F0EAE0]">{amount}</p>
        </div>
        {showQr && (
          <div className="rounded-xl border border-[rgba(240,234,224,0.1)] bg-white p-2">
            <QRCodeSVG
              value={qrPayload}
              size={88}
              bgColor="#FFFFFF"
              fgColor="#0D0C0B"
            />
          </div>
        )}
      </div>

      <dl className="mt-5 space-y-4">
        <BankField
          label="Банк"
          value={BANK_TRANSFER_INFO.bankName}
          onCopy={() => copyToClipboard(BANK_TRANSFER_INFO.bankName, "bank")}
          copied={copiedField === "bank"}
        />
        <BankField
          label="Дансны дугаар"
          value={BANK_TRANSFER_INFO.accountNumber}
          onCopy={() =>
            copyToClipboard(BANK_TRANSFER_INFO.accountNumber, "account")
          }
          copied={copiedField === "account"}
        />
        <BankField
          label="Хүлээн авагч"
          value={BANK_TRANSFER_INFO.accountHolderName}
          onCopy={() =>
            copyToClipboard(BANK_TRANSFER_INFO.accountHolderName, "name")
          }
          copied={copiedField === "name"}
        />
      </dl>

      <div className="mt-6 flex items-start gap-3 rounded-xl border border-[rgba(255,16,83,0.15)] bg-[rgba(255,16,83,0.06)] p-4">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="mt-0.5 shrink-0 text-[#FF1053]"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 8v5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="12" cy="16" r="0.9" fill="currentColor" />
        </svg>
        <p className="font-sans text-sm leading-relaxed text-[rgba(240,234,224,0.7)]">
          <strong className="font-medium text-[#F0EAE0]">Анхаар:</strong>{" "}
          {PAYMENT_INSTRUCTION}
        </p>
      </div>
    </div>
  );
}

function BankField({
  label,
  value,
  onCopy,
  copied,
}: {
  label: string;
  value: string;
  onCopy: () => void;
  copied: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <dt className="font-sans text-xs text-[rgba(240,234,224,0.4)]">
          {label}
        </dt>
        <dd className="mt-0.5 font-sans text-base font-medium text-[#F0EAE0]">
          {value}
        </dd>
      </div>
      <button
        type="button"
        onClick={onCopy}
        className={`shrink-0 rounded-pill border px-3.5 py-1.5 font-sans text-xs font-medium transition-all duration-300 ${
          copied
            ? "border-[#FF1053] bg-[rgba(255,16,83,0.1)] text-[#FF1053]"
            : "border-[rgba(240,234,224,0.12)] text-[rgba(240,234,224,0.55)] hover:border-[#FF1053] hover:text-[#FF1053]"
        }`}
      >
        {copied ? "Хуулсан ✓" : "Хуулах"}
      </button>
    </div>
  );
}
