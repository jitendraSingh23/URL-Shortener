"use client";
import Link from "next/link";
import { Button } from "./button";
import { Check, CopyIcon, EyeIcon } from "lucide-react";
import { useEffect, useState } from "react";
//import { CopyIcon, EyeIcon, Ghost } from "lucide-react";
type Url = {
  id: string;
  shortCode: string;
  originalUrl: string;
  visits: number;
};

export default function UrlList() {
  const [urls, setUrls] = useState<Url[]>([]);
  const [copied, setCopied] = useState<boolean>(false);
  const [copyUrl, setCopyUrl] = useState<string>("");
  const [isloading, setIsloading] = useState<boolean>(false);

  const shortenerurl = (code: string) =>
    `${process.env.NEXT_PUBLIC_BASE_URL}/${code}`;

  const fetchUrls = async () => {
    setIsloading(true);
    try {
      const response = await fetch("/api/urls");
      const data = await response.json();

      setUrls(data);
    } catch (error) {
      console.error("Error Fetching urls", error);
    } finally {
      setIsloading(false);
    }
  };
  const HandleCopyUrl = (code: string) => {
    const fullUrl = `${shortenerurl(code)}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setCopyUrl(code);
      setTimeout(() => {
        setCopied(false);
        setCopyUrl("");
      }, 3000);
    });
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  if (isloading) {
    return (
      <div className="animate-pulse">
        <div className="h-6  bg-gray-300 rounded w-1/3 mb-4"></div>
        <ul className="space-y-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <li
              key={num}
              className="flex items-center gap-2 justify-between bg-gray-300  rounded-md text-card-foreground border px-4 py-2"
            >
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 bg-gray-300 rounded-full mr-2"></div>
                <div className="h-6 w-6 bg-gray-300 rounded-full mr-2"></div>
                <div className="flex items-center">
                  <div className="h-4 w-4 bg-gray-300 rounded mr-1"></div>
                  <div className="h-3 w-6 bg-gray-300 rounded"></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Recent URLS</h2>

      <ul className="space-y-2">
        {urls.map((url) => (
          <li
            key={url.id}
            className="flex items-center gap-2 justify-between bg-card rounded-md text-card-foreground border px-4 py-2"
          >
            <Link
              href={`/${url.shortCode}`}
              target="_blank"
              className="text-blue-500"
            >
              {shortenerurl(url.shortCode)}
            </Link>
            <div className="flex items-center gap-3">
              <Button
                variant={"ghost"}
                size="icon"
                onClick={() => HandleCopyUrl(url.shortCode)}
                className="text-muted-forgroung hover:bg-muted"
              >
                {copied && copyUrl == url.shortCode ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <CopyIcon className="w-4 h-4" />
                )}
                <span className="sr-only">copy url</span>
              </Button>
              <span className="flex items-center">
                <EyeIcon className="w-4 h-4 mr-1" />
                {url.visits}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
