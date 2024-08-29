"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  getGeneralSentiment,
  getNegativeSentiment,
  getPositiveSentiment,
} from "@/action";

import Markdown from "react-markdown";

function ResultComponent({
  userId,
  videoId,
}: {
  userId: string;
  videoId: string;
}) {
  const [tabValue, setTabValue] = useState("general");
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    async function getResult() {
      let result = "";
      switch (tabValue) {
        case "general":
          result = await getGeneralSentiment(userId, videoId);
          break;
        case "positive":
          result = await getPositiveSentiment(userId, videoId);
          break;
        case "negative":
          result = await getNegativeSentiment(userId, videoId);
          break;

        default:
          break;
      }

      setMarkdown(result);
    }

    getResult();
  }, [tabValue]);

  console.log(markdown);

  return (
    <Tabs
      defaultValue="general"
      value={tabValue}
      onValueChange={setTabValue}
      className="w-full"
    >
      <div className="w-full flex flex-row justify-center">
        <TabsList>
          <TabsTrigger value="general">General Sentiment</TabsTrigger>
          <TabsTrigger value="positive">Positive</TabsTrigger>
          <TabsTrigger value="negative">Negative</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="general">
        <div className="w-full flex flex-row justify-center">
          <div className="">
            <Markdown>{markdown}</Markdown>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="positive">
        <div className="">
          <Markdown>{markdown}</Markdown>
        </div>
      </TabsContent>
      <TabsContent value="negative">
        <div className="">
          <Markdown>{markdown}</Markdown>
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default ResultComponent;
