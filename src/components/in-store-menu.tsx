import Image from "next/image";
import { Link } from "next-view-transitions";

export default function InStoreMenu() {
  // TODO: hardcoded for now until we get real content
  const tempArray = [
    {
      href: "/menu/drinks/",
      src: "/temp-black-sesame.JPG",
      name: "Black Sesame Latte",
    },
    {
      href: "/menu/drinks/",
      src: "/temp-black-sesame.JPG",
      name: "Black Sesame Latte",
    },
    {
      href: "/menu/drinks/",
      src: "/temp-black-sesame.JPG",
      name: "Black Sesame Latte",
    },
    {
      href: "/menu/drinks/",
      src: "/temp-black-sesame.JPG",
      name: "Black Sesame Latte",
    },
    {
      href: "/menu/drinks/",
      src: "/temp-black-sesame.JPG",
      name: "Black Sesame Latte",
    },
    {
      href: "/menu/drinks/",
      src: "/temp-black-sesame.JPG",
      name: "Black Sesame Latte",
    },
    {
      href: "/menu/drinks/",
      src: "/temp-black-sesame.JPG",
      name: "Black Sesame Latte",
    },
    {
      href: "/menu/drinks/",
      src: "/temp-black-sesame.JPG",
      name: "Black Sesame Latte",
    },
  ];

  return (
    <section className="bg-kape-beige px-4 py-10">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          In Store Drinks
        </h2>
        <div className="flex flex-wrap gap-y-10">
          {tempArray.map((drink) => {
            return (
              <Link
                key={drink.src}
                href={drink.href}
                className="w-1/2 md:w-1/4"
              >
                <div className="relative px-[6px]">
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
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
