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
        console.log("API Response:", result); // データを確認

        // データがオブジェクトの場合、配列に変換
        const items = result?.rss?.channel?.item ? [result.rss.channel.item] : [];
        setData(items);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-gray-900 text-white pb-[5rem]">
      <h2 className="text-center text-4xl font-bold pt-[5rem] pb-[2rem]">
        My{" "}
        <motion.span
          whileInView={{ fontSize: "50px", content: "value" }}
          className="bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-fill-transparent"
        >
          BLOG
        </motion.span>
      </h2>
      <div className="text-center">
        <div className="w-[100%] max-w-[840px] inline-block text-left">
          {error && <p className="text-red-500 text-center">{error}</p>}
          {data && data.length === 0 ? (
            <p className="text-gray-300 text-center">No items found</p>
          ) : (
            <div className="space-y-4">
              {data?.map((item, index) => (
                <div key={index} className="relative bg-gray-800 hover:bg-opacity-80 p-4 rounded-lg">
                  <div className="absolute top-4 left-4 text-3xl text-gray-500">
                    <GrNotes />
                  </div>
                  <div className="pl-16 text-left">
                    <div className="text-ellipsis text-xl mt-2 font-bold text-gray-200">
                      {item.title}
                    </div>
                    <div className="text-ellipsis text-base mt-1 text-gray-300">
                      {item.description}
                    </div>
                    <div className="text-ellipsis text-sm mt-2 text-gray-300 flex items-center">
                      <span className="text-[#3EA8FF] mr-2">
                        <SiZenn />
                      </span>
                      Zenn
                    </div>
                    <div className="text-ellipsis text-xs mt-1 text-gray-500">
                      {new Date(item.pubDate).toLocaleDateString()}
                    </div>
                    <a
                      href={item.link}
                      className="text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
