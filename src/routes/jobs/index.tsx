import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Tabs from "../../components/jobs/Tabs";
import JobCard from "../../components/jobs/JobCard";

export const Route = createFileRoute("/jobs/")({
  component: RouteComponent,
});

const jobData = [
  {
    title: "Software",
    url: "https://www.upwork.com/jobs/Software-Developer-Team-Lead-Needed-for-Technical-Oversight-Platform-Stabilization_~021942548869673243300/",
    posted: "10 minutes ago",
    type: "Hourly: $15-$35",
    experienceLevel: "Intermediate",
    duration: "More than 6 months, 30+ hrs/week",
    description:
      "We’re seeking an experienced Software Developer Team Lead to provide strategic technical oversight...",
    skills: ["Web Application", "Web Development", "JavaScript"],
    paymentVerified: true,
    clientLocation: "United States",
    clientSpent: "$70K+",
    rating: "4.8",
    proposals: "10 to 15",
  },
];

function RouteComponent() {
  const [_activeTab, setActiveTab] = useState("All Jobs");

  const tabs = ["All Jobs", "Saved", "Applied"];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Tabs tabs={tabs} onTabChange={(tab: string) => setActiveTab(tab)} />

      <div className="space-y-6">
        {jobData.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
}
