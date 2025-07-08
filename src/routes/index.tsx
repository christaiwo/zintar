import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Send, TrendingUp, Clock, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-muted-foreground">
              Your AI-powered job search overview
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Jobs Found Today
              </CardTitle>
              <Briefcase className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">24</div>
              <p className="text-xs text-muted-foreground">
                +12% from yesterday
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Proposals Sent
              </CardTitle>
              <Send className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">8</div>
              <p className="text-xs text-muted-foreground">+3 from yesterday</p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Response Rate
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">68%</div>
              <p className="text-xs text-muted-foreground">+5% this week</p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/50 dark:to-red-950/50 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg. Response Time
              </CardTitle>
              <Clock className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">2.4h</div>
              <p className="text-xs text-muted-foreground">
                -30min improvement
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              AI Insights & Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-4">
              <h4 className="font-medium text-blue-700 dark:text-blue-300">
                Optimize Your Profile
              </h4>
              <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                Jobs in "React Development" are trending. Consider highlighting
                your React skills in proposals.
              </p>
            </div>
            <div className="rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-4">
              <h4 className="font-medium text-green-700 dark:text-green-300">
                Best Time to Apply
              </h4>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                Your proposals sent between 9-11 AM have a 23% higher response
                rate.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
