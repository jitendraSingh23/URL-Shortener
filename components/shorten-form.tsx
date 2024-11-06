"use client";

//import Input from "postcss/lib/input";
//import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

interface ShortenFormProps {
  handleUrlShortened: () => void;
}
export default function ShortenForm({ handleUrlShortened }: ShortenFormProps) {
  const [url, setUrl] = useState<string>("");
  const [isloading, setIsloading] = useState<boolean>(false);

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsloading(true);
    try {
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
        }),
      });
      await response.json();
      setUrl("");
      handleUrlShortened();
    } catch (error) {
      console.error("error shortninng url", error);
    } finally {
      setIsloading(false);
    }
  };
  return (
    <form action="" className="mb-4" onSubmit={HandleSubmit}>
      <div className="space-y-4">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="h-12 "
          type="url"
          placeholder="Enter URL to shorten"
          required
        />
        <Button className="w-full p-2 " type="submit" disabled={isloading}>
          {isloading ? "Shortening.." : "Shorten URL"}
        </Button>
      </div>
    </form>
  );
}
