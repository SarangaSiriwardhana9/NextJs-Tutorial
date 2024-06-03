import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function ToastDestructive({ onDelete }) {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        onDelete();
        toast({
          variant: "destructive",
          title: "Billing Data Deleted",
          description: "The billing data has been deleted.",
        });
      }}
    >
      Delete
    </Button>
  );
}
