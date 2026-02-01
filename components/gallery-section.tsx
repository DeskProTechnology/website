"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function GallerySection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    [
      {
        title: "Smart Office IoT",
        category: "Automation",
        image:
          "https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg",
      },
      {
        title: "Server Room Setup",
        category: "Infrastructure",
        image:
          "https://cdn.pixabay.com/photo/2024/01/04/15/10/mountain-8487679_1280.jpg",
      },
      {
        title: "Corporate Network",
        category: "Networking",
        image:
          "https://cdn.pixabay.com/photo/2025/10/07/10/59/parrot-9878922_1280.jpg",
      },
      {
        title: "Fire Safety Installation",
        category: "Safety",
        image:
          "https://cdn.pixabay.com/photo/2025/12/17/14/00/fishing-10020362_1280.jpg",
      },
      {
        title: "CCTV Surveillance Center",
        category: "Security",
        image:
          "https://cdn.pixabay.com/photo/2025/12/16/18/52/nature-10019029_1280.jpg",
      },
    ],

    ...Array(5)
      .fill(null)
      .map(() => [
        {
          title: "Server Room Setup",
          category: "Infrastructure",
          image:
            "https://cdn.pixabay.com/photo/2025/12/10/21/39/chicken-10007444_1280.jpg",
        },
        {
          title: "CCTV Surveillance Center",
          category: "Security",
          image:
            "https://cdn.pixabay.com/photo/2025/12/18/14/52/14-52-47-696_1280.jpg",
        },
        {
          title: "Fire Safety Installation",
          category: "Safety",
          image:
            "https://cdn.pixabay.com/photo/2025/11/08/15/01/15-01-19-332_1280.jpg",
        },
        {
          title: "Corporate Network",
          category: "Networking",
          image:
            "https://cdn.pixabay.com/photo/2025/11/04/07/47/winter-woods-9935921_1280.jpg",
        },
        {
          title: "Smart Office IoT",
          category: "Automation",
          image:
            "https://cdn.pixabay.com/photo/2024/07/21/11/36/dachshund-8910099_1280.jpg",
        },
      ]),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => prev + 1);
    }, 3500); // slower = more premium

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold sm:text-5xl">Our Work Gallery</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Glimpses of our technical excellence and project executions across
            Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((projectArray, cardIndex) => {
            const project =
              projectArray[
                (currentImageIndex + cardIndex) % projectArray.length
              ];

            return (
              <div
                key={cardIndex}
                className="relative overflow-hidden rounded-xl aspect-[4/3] group"
              >
                {/* IMAGE */}
                <Image
                  key={project.image}
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
    object-cover
    animate-fade-zoom
    transition-transform duration-700 ease-out
    group-hover:scale-110
  "
                />

                {/* OVERLAY */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end"
                >
                  <span className="text-primary text-sm font-medium mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">
                    {project.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
