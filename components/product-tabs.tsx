"use client"

import type React from "react"

import { useState } from "react"
import { MessageSquare, BookOpen, PenTool, Mic } from "lucide-react"

interface TabItem {
  id: string
  icon: React.ReactNode
  title: string
  description: string
}

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("summary")

  const tabs: TabItem[] = [
    {
      id: "summary",
      icon: <BookOpen className="h-5 w-5" />,
      title: "Summary, flashcards, quizzes, voice mode, and more",
      description:
        "Understand the key points, test your knowledge, get answers with references, and talk with an AI tutor.",
    },
    {
      id: "chat",
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Interactive chat with your learning materials",
      description: "Ask questions about your content and get instant, accurate answers based on your documents.",
    },
    {
      id: "notes",
      icon: <PenTool className="h-5 w-5" />,
      title: "Smart notes and organization",
      description:
        "Automatically organize your learning materials into structured notes with key concepts highlighted.",
    },
    {
      id: "voice",
      icon: <Mic className="h-5 w-5" />,
      title: "Voice learning and dictation",
      description: "Learn on the go with voice mode. Ask questions and get answers read aloud to you.",
    },
  ]

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full">
      <div className="w-full md:w-2/5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full text-left mb-4 p-6 rounded-xl transition-all ${
              activeTab === tab.id ? "bg-gray-200" : "bg-white hover:bg-gray-100"
            }`}
          >
            <div className="flex items-start">
              <div className={`mr-3 ${activeTab === tab.id ? "text-black" : "text-gray-500"}`}>{tab.icon}</div>
              <div>
                <h3 className="font-medium text-lg">{tab.title}</h3>
                <p className="text-gray-600 mt-2">{tab.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="w-full md:w-3/5 bg-black rounded-xl aspect-[4/3]">
        {/* Placeholder for media content */}
        <div className="w-full h-full flex items-center justify-center text-white opacity-30">
          {activeTab === "summary" && <BookOpen className="h-16 w-16" />}
          {activeTab === "chat" && <MessageSquare className="h-16 w-16" />}
          {activeTab === "notes" && <PenTool className="h-16 w-16" />}
          {activeTab === "voice" && <Mic className="h-16 w-16" />}
        </div>
      </div>
    </div>
  )
}
