"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GrNotes } from "react-icons/gr";
import { SiZenn } from "react-icons/si";

export default function Blog() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/parse-xml");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
        console.log(result); // デバッグ用に追加
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data || !data.rss || !data.rss.channel || !data.rss.channel.item) {
    return <div>No items found</div>;
  }

  const items = Array.isArray(data.rss.channel.item)
    ? data.rss.channel.item
    : [data.rss.channel.item];

  return (
    <section className="bg-gray-900 text-white pb-20">
      <h2 className="text-center text-4xl font-bold pt-20 pb-8">
        My{" "}
        <motion.span
          whileInView={{ fontSize: "50px", content: "value" }}
          className="bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-fill-transparent"
        >
          BLOG
        </motion.span>
      </h2>
      <div className="flex justify-center">
        {items.length === 0 ? (
          <div>No items found</div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl px-4">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="relative block overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-gray-800 hover:bg-opacity-80"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <GrNotes className="text-4xl text-gray-500" />
                    <div className="text-xs text-[#aaa]">
                      {item.pubDate
                        ? new Date(item.pubDate).toLocaleDateString("ja-JP")
                        : "Invalid Date"}
                    </div>
                  </div>
                  <div className="text-lg font-bold text-gray-200 mb-2 line-clamp-3">
                    {item.title || "No Title"}
                  </div>
                  <div className="text-sm text-gray-300 mb-4 line-clamp-3">
                    {item.description || "No Description"}
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <SiZenn className="text-[#3EA8FF] mr-2" />
                    Zenn
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
