"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { GalleryItem } from "@/data/data";

interface Gallery6Props {
  heading?: string;
  items?: GalleryItem[];
}

function usePortalPopover(open: boolean) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!open || !triggerRef.current) return;

    function update() {
      if (!triggerRef.current) return;
      const rect = triggerRef.current.getBoundingClientRect();
      const popoverWidth = popoverRef.current?.offsetWidth ?? 280;
      let left = rect.left;
      if (left + popoverWidth > window.innerWidth - 16) {
        left = window.innerWidth - popoverWidth - 16;
      }
      if (left < 16) left = 16;
      setPos({ top: rect.top - 8, left });
    }

    update();
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [open]);

  return { triggerRef, popoverRef, pos };
}

function VisitPopover({ links }: { links: NonNullable<GalleryItem["links"]> }) {
  const [open, setOpen] = useState(false);
  const { triggerRef, popoverRef, pos } = usePortalPopover(open);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        popoverRef.current?.contains(e.target as Node) ||
        triggerRef.current?.contains(e.target as Node)
      )
        return;
      setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, popoverRef, triggerRef]);

  return (
    <>
      <button
        ref={triggerRef}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(!open);
        }}
        className="flex items-center text-sm font-medium hover:text-gray-900 transition-colors"
      >
        Visit
        <ArrowUpRight className="ml-1.5 size-4" />
      </button>
      {open &&
        createPortal(
          <div
            ref={popoverRef}
            className="fixed w-64 rounded-xl border border-gray-200 bg-white shadow-lg p-2 z-[9999]"
            style={{
              top: pos.top,
              left: pos.left,
              transform: "translateY(-100%)",
            }}
          >
            {links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg p-2 hover:bg-gray-50 transition-colors"
              >
                {link.thumbnail && (
                  <img
                    src={link.thumbnail}
                    alt={link.label}
                    className="w-10 h-10 rounded-md object-cover shrink-0"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {link.label}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {link.url.replace("https://", "")}
                  </p>
                </div>
                <ArrowUpRight className="size-3.5 text-gray-400 shrink-0" />
              </a>
            ))}
          </div>,
          document.body,
        )}
    </>
  );
}

function SummaryWithPopover({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const { triggerRef, popoverRef, pos } = usePortalPopover(open);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        popoverRef.current?.contains(e.target as Node) ||
        triggerRef.current?.contains(e.target as Node)
      )
        return;
      setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, popoverRef, triggerRef]);

  return (
    <div className="mb-4">
      <p className="line-clamp-2 text-sm text-muted-foreground md:text-base">
        {text}
      </p>
      <button
        ref={triggerRef}
        className="text-xs text-gray-400 hover:text-gray-600 mt-1 transition-colors"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(!open);
        }}
      >
        more...
      </button>
      {open &&
        createPortal(
          <div
            ref={popoverRef}
            className="fixed w-72 rounded-xl border border-gray-200 bg-white shadow-lg p-4 z-[9999]"
            style={{
              top: pos.top,
              left: pos.left,
              transform: "translateY(-100%)",
            }}
          >
            <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
          </div>,
          document.body,
        )}
    </div>
  );
}

const Gallery6 = ({
  heading = "Work",
  items = [],
}: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);
  return (
    <section className="mt-14">
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{heading}</h2>
          <div className="flex shrink-0 items-center gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
          className="relative"
        >
          <CarouselContent className="-mr-4">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 basis-[80%] md:basis-[452px]"
              >
                <div className="group flex flex-col justify-between">
                  <a
                    href={item.links ? undefined : item.url}
                    target={item.links ? undefined : "_blank"}
                    rel={item.links ? undefined : "noopener noreferrer"}
                  >
                    <div>
                      <div className="flex aspect-[3/2] overflow-clip rounded-xl">
                        <div className="flex-1">
                          <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                      {item.title}
                    </div>
                  </a>
                  <SummaryWithPopover text={item.summary} />
                  {item.links ? (
                    <VisitPopover links={item.links} />
                  ) : (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium hover:text-gray-900 transition-colors"
                    >
                      Visit
                      <ArrowUpRight className="ml-1.5 size-4" />
                    </a>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery6 };
