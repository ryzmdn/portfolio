import { Button } from "@/components/ui/button";
import Image from "next/image";

const stats = [
  { label: "Transactions every 24 hours", value: "44 million" },
  { label: "Assets under holding", value: "$119 trillion" },
  { label: "New users annually", value: "46,000" },
];

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

      <section className="mx-auto max-w-7xl w-full my-10 py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-zinc-900 sm:text-5xl">
          Our mission
        </h2>
        <div className="mt-6 flex flex-col gap-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-4xl lg:flex-auto">
            <p className="text-xl/8 text-zinc-600">
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas ac. Diam nulla orci at in viverra
              scelerisque eget. Eleifend egestas fringilla sapien.
            </p>
            <p className="mt-10 max-w-3xl text-base/7 text-zinc-700">
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit. Faucibus commodo massa rhoncus, volutpat.
              Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
              sed turpis id.
            </p>
          </div>
          <div className="lg:flex lg:flex-auto lg:justify-center">
            <dl className="w-64 space-y-8 xl:w-80">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                  <dt className="text-base/7 text-zinc-600">{stat.label}</dt>
                  <dd className="text-5xl font-semibold tracking-tight text-zinc-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
