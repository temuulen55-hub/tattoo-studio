"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import {
  BLOG_CATEGORIES,
  BLOG_POSTS,
  type BlogCategory,
} from "@/lib/data/blogPosts";

const ALL = "Бүгд";

export default function BlogList() {
  const [active, setActive] = useState<BlogCategory | typeof ALL>(ALL);

  const posts =
    active === ALL
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === active);

  return (
    <div>
      {/* Filter chips */}
      <div className="-mx-5 flex gap-2.5 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-wrap lg:px-0">
        {[ALL, ...BLOG_CATEGORIES].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category as BlogCategory | typeof ALL)}
            className={`whitespace-nowrap rounded-pill px-4 py-2 font-sans text-sm font-medium tracking-wide transition-all duration-300 ${
              active === category
                ? "border border-[#FF1053] bg-[rgba(255,16,83,0.12)] text-[#FF1053] shadow-[0_0_12px_rgba(255,16,83,0.2)]"
                : "border border-[rgba(240,234,224,0.1)] bg-transparent text-[rgba(240,234,224,0.55)] hover:border-[rgba(255,16,83,0.4)] hover:text-[#FF1053]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/zovlogoo/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-[rgba(240,234,224,0.07)] bg-[#161412] transition-all duration-300
              hover:-translate-y-1.5 hover:border-[rgba(255,16,83,0.25)]"
            style={{ willChange: "transform" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 8px 40px rgba(0,0,0,0.8), 0 0 24px rgba(255,16,83,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "";
            }}
          >
            {/* Cover image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Dark gradient overlay over image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,12,11,0.5)] to-transparent" />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#FF1053]">
                {post.category}
              </span>
              <h3 className="mt-2 font-serif text-xl leading-snug text-[#F0EAE0] transition-colors duration-300 group-hover:text-white">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-3 font-sans text-sm leading-relaxed text-[rgba(240,234,224,0.5)]">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-3 font-sans text-xs text-[rgba(240,234,224,0.35)]">
                <span>{format(new Date(post.date), "yyyy.MM.dd")}</span>
                <span aria-hidden="true">·</span>
                <span>{post.readTime} унших</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="mt-12 text-center font-sans text-[rgba(240,234,224,0.4)]">
          Удахгүй шинэ нийтлэл нэмэгдэх болно.
        </p>
      )}
    </div>
  );
}
