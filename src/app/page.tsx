"use client";
import { useState } from "react";
import InputFieldPlayground from "../components/InputField/InputFieldPlayground";
import DataTablePlayground from "@/components/DataTable/DataTablePlayground";

export default function Page() {
  const [activeTab, setActiveTab] = useState<"input" | "table">("input");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div
      className={`min-h-screen flex flex-col items-center p-6 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Top Bar */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Assignment React components</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 cursor-pointer"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 mt-20">
        <button
          onClick={() => setActiveTab("input")}
          className={`px-4 py-2 rounded cursor-pointer ${
            activeTab === "input" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          InputField
        </button>
        <button
          onClick={() => setActiveTab("table")}
          className={`px-4 py-2 rounded cursor-pointer ${
            activeTab === "table" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          DataTable
        </button>
      </div>

      {/* Active Component */}
      <div className="flex flex-col items-center justify-center w-full max-w-4xl">
        {activeTab === "input" && <InputFieldPlayground theme={theme} />}
        {activeTab === "table" && <DataTablePlayground theme={theme} />}
      </div>
    </div>
  );
}
