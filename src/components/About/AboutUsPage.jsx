import * as React from "react";
import { NavigationHeader } from "./NavigationHeader";
import { PageTitle } from "./PageTitle";
import { AboutUsContent } from "./AboutUsContent";

function AboutUsPage() {
  return (
    <main className="flex flex-col items-start">
      <NavigationHeader />
      <AboutUsContent />
    </main>
  );
}

export default AboutUsPage;