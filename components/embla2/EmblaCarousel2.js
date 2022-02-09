import React, { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons2";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel2 = ({ imgSlide }) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);


const carouselSelect2 = (index) => {

  if (index === 0) {
    return <img src="/books/cover_book2.jpg"/>;
  }
  if (index === 1) {
    return <img src="/books/cover_book1.jpg"/>;;
  }
  if (index === 2) {
    return <img src="/books/cover_book6.jpg"/>;;
  }
  if (index === 3) {
    return <img src="/books/cover_book7.jpg"/>;;
  }
  return null;
  
  }

  return (
    <>
      <div id="Books" className="embla">
        <div className="relative right-0 py-6"><h1 className="text-center font-bold xl:text-4xl text-2xl text text-blue-950">Books</h1></div>
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {imgSlide.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner h-screen bg-slate-100">
                  {carouselSelect2(index)}

                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className="embla__dots bg-cream-100 pb-4">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => {scrollTo(index); console.log(index)}}
          />
        ))}
      </div>
    </>
  );
};

export default EmblaCarousel2;