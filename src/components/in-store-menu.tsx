import Image from "next/image";

export default function InStoreMenu() {
  // TODO: hardcoded for now until we get real content
  const tempArray = [
    {
      src: "/temp-black-sesame.JPG",
      name: "Black Sesame Latte",
    },
    {
      src: "/green-tea.jpg",
      name: "Green Tea",
    },
    {
      src: "/capp.JPG",
      name: "Peppermint Mocha",
    },
    {
      src: "/placeholder.JPG",
      name: "Leisure Club Mocha",
    },
  ];

  return (
    <section className="bg-kape-beige px-4 pb-20 pt-10">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          In Store Drinks
        </h2>
        <div className="flex flex-wrap gap-y-20">
          {tempArray.map((drink, idx) => {
            return (
              <div key={idx} className="w-1/2 md:w-1/4">
                <div className="relative h-full px-[6px]" key={drink.src}>
                  <Image
                    src={drink.src}
                    alt=""
                    width={250}
                    height={160}
                    className="h-full w-full rounded-[30px] object-cover"
                  />
                </div>
                <p className="mt-2 text-center text-xl font-bold text-kape-green">
                  {drink.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
