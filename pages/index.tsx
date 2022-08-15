import Head from "next/head";
import { GorgiasChat } from "../components/GorgiasChat";
import { ProductCard } from "../components/ProductCard";
import { MERCHANT_ID, SERVER_URL } from "../config";

export default function Home({
  isGorgiasChatEnabled,
}: {
  isGorgiasChatEnabled: boolean;
}) {
  return (
    <div className="h-screen">
      <Head>
        <title>Mike Shop: Buy everything!</title>
      </Head>
      <header className="h-20 bg-lime-400 flex justify-center items-center border-t-8 border-lime-900">
        <h1 className="text-4xl">
          Mike Shop - A place on you could buy that you want!
        </h1>
      </header>
      <main>
        <div className="flex w-full justify-evenly py-10">
          <ProductCard imgUrl="/images/product-1.jpg" />
          <ProductCard imgUrl="/images/product-2.jpg" />
          <ProductCard imgUrl="/images/product-3.jpg" />
        </div>
      </main>
      {isGorgiasChatEnabled && <GorgiasChat />}
    </div>
  );
}

export async function getStaticProps() {
  const isChatApplicationEnabled = process.env.NEXT_PUBLIC_GORGIAS === "true";
  /**
   * We have to do this fetch because the implementation of merchant chat enabled feature
   * is running over that file in memory. In real world scenarios, this does not makes any sense to have it
   * because in this place we would have access to server methods, and we could use them
   * to check in the database without using networks calls
   */
  const merchantSettingsResponse = await fetch(
    `${SERVER_URL}/api/merchant/settings/${MERCHANT_ID}`
  );
  if (!merchantSettingsResponse.ok) {
    return {
      props: {
        isGorgiasChatEnabled: false,
      },
    };
  }

  const settings = await merchantSettingsResponse.json();

  return {
    props: {
      isGorgiasChatEnabled:
        (isChatApplicationEnabled && settings?.isChatEnabled) ?? false,
    },
  };
}
