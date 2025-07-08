import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, DollarSign, Heart, Star } from "lucide-react";

export const Route = createFileRoute("/jobs/")({
  component: RouteComponent,
});

function RouteComponent() {
  const jobs = [
    {
      id: 1,
      title: "React Developer for E-commerce Platform",
      budget: "$3,000 - $5,000",
      tags: ["React", "TypeScript", "E-commerce"],
      client: "TechCorp Inc.",
      rating: 4.9,
      posted: "2 hours ago",
      description:
        "Looking for an experienced React developer to build a modern e-commerce platform...",
    },
    {
      id: 2,
      title: "Full-Stack Developer - SaaS Application",
      budget: "$4,500 - $7,000",
      tags: ["Next.js", "Node.js", "PostgreSQL"],
      client: "StartupXYZ",
      rating: 4.7,
      posted: "4 hours ago",
      description:
        "We need a full-stack developer to help us build our SaaS application from the ground up...",
    },
    {
      id: 3,
      title: "Frontend Developer - Dashboard UI",
      budget: "$2,000 - $3,500",
      tags: ["Vue.js", "Tailwind CSS", "Charts"],
      client: "DataViz Solutions",
      rating: 4.8,
      posted: "6 hours ago",
      description:
        "Create a beautiful and responsive dashboard interface for our analytics platform...",
    },
  ];

  return (
    <div className="space-y-6 ">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Job Feed
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            AI-curated opportunities matching your skills
          </p>
        </div>
      </div>

      {/* Job Cards */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <Card
            key={job.id}
            className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                {/* Job Info */}
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {job.budget}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {job.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.posted}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-sm font-medium text-foreground">
                    Client: {job.client}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 w-full md:w-auto">
                  <Button className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg">
                    Apply with AI
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full md:w-auto"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
