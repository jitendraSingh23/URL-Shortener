import prisma from "@/lib/db";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = {
  params: {
    shortcode: string;
  };
};
export default async function RedirectPage({ params }:Props) {
  const { shortcode } = params;
  const url = await prisma.url.findUnique({
    where: { shortCode: shortcode },
  });

  if (!url) {
    return (
      <section className="bg-background dark:bg-background">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary dark:text-primary">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-forground md:text-4xl dark:text-white">
              Something missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we can not find that Link. You will find lots to explore on the
              home page.{" "}
            </p>
           
            <Link
            href={"/"} className="inline-flex text- bg-primary-600 hover:bg-forground hover:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</Link>
          </div>
        </div>
      </section>
    );
  }
  await prisma.url.update({
    where: {
      id: url.id,
    },
    data: { visits: { increment: 1 } },
  });

  redirect(url?.originalUrl);
}