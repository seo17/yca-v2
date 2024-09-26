"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

import Markdown from "react-markdown";

function ResultComponent({
  sentiment,
  selectedSentiment,
}: {
  sentiment: { general: string; positive: string; negative: string };
  selectedSentiment?: string;
}) {
  const [tabValue, setTabValue] = useState(selectedSentiment || "general");

  return (
    <Tabs
      defaultValue="general"
      value={tabValue}
      onValueChange={setTabValue}
      className="w-full"
    >
      <div className="w-full flex flex-row justify-center">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="positive">Positive</TabsTrigger>
          <TabsTrigger value="negative">Negative</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="general">
        <div className="w-full flex flex-row justify-center text-justify">
          <div className="sm:px-14 md:px-24 lg:px-36">
            <Markdown>{sentiment?.general}</Markdown>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="positive">
        <div className="w-full flex flex-row justify-center text-justify">
          <div className="sm:px-14 md:px-24 lg:px-36">
            <Markdown>{sentiment?.positive}</Markdown>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="negative">
        <div className="w-full flex flex-row justify-center text-justify">
          <div className="sm:px-14 md:px-24 lg:px-36">
            <Markdown>{sentiment?.negative}</Markdown>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default ResultComponent;
