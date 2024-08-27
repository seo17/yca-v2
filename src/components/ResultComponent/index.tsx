import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

function ResultComponent() {
  return (
    <div>
      <Tabs defaultValue="general" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="general">General Sentiment</TabsTrigger>
          <TabsTrigger value="positive">Positive</TabsTrigger>
          <TabsTrigger value="negative">Negative</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="positive">Change your password here.</TabsContent>
        <TabsContent value="negative">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default ResultComponent;
