import GenerateProposalModal from "@/components/injects/GenerateProposalModal";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/test/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <GenerateProposalModal />
    </div>
  );
}
