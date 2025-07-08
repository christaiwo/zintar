import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { Eye } from "lucide-react";

export const Route = createFileRoute("/proposals/")({
  component: RouteComponent,
});

function RouteComponent() {
  const proposals = [
    {
      id: 1,
      job: "React Developer for E-commerce Platform",
      status: "Won",
      date: "2024-01-15",
      preview:
        "I'm excited to help you build your e-commerce platform using React and modern web technologies...",
    },
    {
      id: 2,
      job: "Full-Stack Developer - SaaS Application",
      status: "Pending",
      date: "2024-01-14",
      preview:
        "With over 5 years of experience in full-stack development, I can help you create a robust SaaS application...",
    },
    {
      id: 3,
      job: "Frontend Developer - Dashboard UI",
      status: "Sent",
      date: "2024-01-13",
      preview:
        "I specialize in creating beautiful and intuitive dashboard interfaces using Vue.js and modern CSS frameworks...",
    },
  ];

  return (
    <div className="space-y-6 ">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Proposals
        </h1>
        <p className="text-muted-foreground">
          Your AI-generated proposal history
        </p>
      </div>

      <div className="space-y-4">
        {proposals.map((proposal) => (
          <Card key={proposal.id} className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{proposal.job}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {proposal.preview}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Sent on {proposal.date}
                  </p>
                </div>

                <div className="flex items-center gap-2 md:ml-4 self-start md:self-auto">
                  <Badge
                    variant={
                      proposal.status === "Won"
                        ? "default"
                        : proposal.status === "Pending"
                          ? "secondary"
                          : "outline"
                    }
                    className={
                      proposal.status === "Won"
                        ? "bg-green-500 hover:bg-green-600"
                        : ""
                    }
                  >
                    {proposal.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
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
