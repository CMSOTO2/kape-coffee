import InStoreMenu from "@/components/in-store-menu";
import Hero from "../components/Hero";

const getHomePageContent = async () => {
  const version = process.env.SB_DATA_VERSION;
  const token = process.env.SB_TOKEN;
  const url = `https://api-us.storyblok.com/v2/cdn/stories/home-page?version=${version}&token=${token}`;

  let req = await fetch(url, { cache: "no-store" });

  const storyData = await req.json();
  const { nav_section } = storyData.story.content;

  return {
    nav_section: nav_section[0],
  };
};

export default async function Home() {
  const storyData = await getHomePageContent();

  return (
    <>
      <Hero />
      <InStoreMenu />
    </>
  );
}
