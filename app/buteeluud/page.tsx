"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { portfolioData, Category, PortfolioItem } from "@/data/portfolio";
// Assuming you created this component based on our previous discussion
import InstagramPost from "@/components/InstagramPost";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const categories: Category[] = ["Fine Line", "Minimalist", "Blackwork"];

  const filteredData = activeCategory
    ? portfolioData.filter((item) => item.category === activeCategory)
    : portfolioData;

  return (
    <div className="min-h-screen bg-champagne px-4 py-12 md:px-8">
      <div className="mx-auto max-w-content">
        {/* ... Header and Filters remain the same ... */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl bg-ivory p-4 shadow-card transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Type-safe Conditional Rendering */}
              {item.type === "before-after" ? (
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <ReactCompareSlider
                    position={15}
                    itemOne={
                      <ReactCompareSliderImage
                        src={item.imageBefore}
                        alt="Хуучин"
                        style={{ objectFit: "cover" }}
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src={item.imageAfter}
                        alt="Шинэ"
                        style={{ objectFit: "cover" }}
                      />
                    }
                    className="h-full w-full"
                  />
                  <div className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-charcoal/70 px-2 py-1 text-xs text-champagne">
                    Өөрчлөлт (Cover-up)
                  </div>
                </div>
              ) : item.type === "instagram" ? (
                // Now TypeScript knows this is an InstagramItem
                <div className="w-full overflow-hidden rounded-xl">
                  <InstagramPost url={item.instagramUrl} />
                </div>
              ) : (
                // Now TypeScript knows this must be a GalleryItem
                <div className="space-y-2">
                  {item.images && item.images.length > 0 ? (
                    <>
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                        <Image
                          src={item.images[0]}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      {item.images.length > 1 && (
                        <div className="grid grid-cols-3 gap-2">
                          {item.images.slice(1).map((img, index) => (
                            <div
                              key={index}
                              className="relative aspect-square overflow-hidden rounded-lg bg-charcoal/10"
                            >
                              <Image
                                src={img}
                                alt={`${item.title} ${index + 2}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="flex aspect-[3/4] items-center justify-center rounded-xl bg-charcoal/5 text-charcoal/30">
                      Зураг байхгүй
                    </div>
                  )}
                </div>
              )}

              {/* Card Meta Content */}
              <div className="mt-4">
                <span className="font-sans text-xs font-semibold tracking-wider text-soft-gold uppercase">
                  {item.category}
                </span>
                <h3 className="mt-1 font-serif text-lg font-medium text-charcoal">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
