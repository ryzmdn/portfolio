import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex justify-center items-center gap-x-10 w-full min-h-dvh bg-transparent px-4 sm:px-6 lg:px-8">
        <div className="grid items-center lg:grid-cols-3">
          <div className="space-y-5">
            <div className="flex items-center gap-x-3">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex size-2.5 rounded-full bg-green-500"></span>
              </span>

              <p className="text-sm/6 text-zinc-700">Open for work in June</p>
            </div>

            <p className="text-3xl/tight font-medium text-zinc-900">
              Carter is solving problems through strategic design and compelling
              visuals
            </p>
          </div>

          <div className="relative aspect-3/4 w-[70%] mx-auto rounded-md overflow-hidden">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJlDIQheXMH4wwGiw86Y8qX5XrQIqZdulknJjE-we8FQ&s=10"
              alt="Rizky Ramadhan"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-5">
            <p className="leading-7">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              architecto autem dolores minus quasi suscipit neque maxime maiores
              recusandae ducimus obcaecati.
            </p>
            <Button>Email Me</Button>
          </div>
        </div>
      </section>
    </>
  );
}
