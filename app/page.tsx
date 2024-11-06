import Urlshortnercontainer from "@/components/url-shortner-container";
export default function Home() {
  return (
    <main className=" mx-auto max-w-xl  lg:my-0 md:my-0 md:py-24 space-y-6  lg:mx-auto md:mx-auto my-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl md:text-4xl font-bold"> Url Shortener </h1>
        <p className="md:text-lg ">
          Simplify your links for easy sharing and tracking
        </p>
      </div>
      <Urlshortnercontainer />
    </main>
  );
}
