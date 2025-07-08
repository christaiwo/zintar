import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/settings/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="space-y-6 ">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Preferences
        </h1>
        <p className="text-sm md:text-base text-muted-foreground">
          Customize your AI assistant preferences
        </p>
      </div>

      <Tabs defaultValue="filters" className="space-y-6">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2">
          <TabsTrigger value="filters">Job Filters</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="ai">AI Settings</TabsTrigger>
        </TabsList>

        {/* Job Filters Tab */}
        <TabsContent value="filters" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Job Search Filters</CardTitle>
              <CardDescription>
                Configure your job search preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="categories">Categories</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-dev">Web Development</SelectItem>
                      <SelectItem value="mobile-dev">
                        Mobile Development
                      </SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1000-3000">$1,000 - $3,000</SelectItem>
                      <SelectItem value="3000-5000">$3,000 - $5,000</SelectItem>
                      <SelectItem value="5000+">$5,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="client-rating">Minimum Client Rating</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select minimum rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4.0">4.0+</SelectItem>
                    <SelectItem value="4.5">4.5+</SelectItem>
                    <SelectItem value="4.8">4.8+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Manage your email and push notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  id: "new-jobs",
                  title: "New Job Alerts",
                  desc: "Get notified when new jobs match your criteria",
                },
                {
                  id: "proposal-updates",
                  title: "Proposal Updates",
                  desc: "Get notified about proposal status changes",
                },
                {
                  id: "ai-tips",
                  title: "AI Tips & Insights",
                  desc: "Receive personalized tips from your AI assistant",
                },
              ].map((item, idx) => (
                <div key={item.id}>
                  <div className="flex items-start justify-between gap-4 flex-col sm:flex-row">
                    <div>
                      <Label htmlFor={item.id}>{item.title}</Label>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                    <Switch id={item.id} />
                  </div>
                  {idx < 2 && <Separator />}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* AI Settings Tab */}
        <TabsContent value="ai" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>AI Assistant Settings</CardTitle>
              <CardDescription>
                Customize your AI proposal writing style
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tone">Writing Tone</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select writing tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="friendly">Friendly</SelectItem>
                    <SelectItem value="confident">Confident</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="length">Proposal Length</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select proposal length" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short (100-200 words)</SelectItem>
                    <SelectItem value="medium">
                      Medium (200-400 words)
                    </SelectItem>
                    <SelectItem value="long">Long (400+ words)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="custom-intro">Custom Introduction</Label>
                <Textarea
                  id="custom-intro"
                  placeholder="Add a custom introduction that will be included in all proposals..."
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
