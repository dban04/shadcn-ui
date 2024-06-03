"use client"
 
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
 

export default function Page() {
  const { toast } = useToast()

  return (
    <div className="grid grid-cols-4 gap-3">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Message sent",
            description: "Your message has been sent.",
          })
        }}
      >
        Show Toast
      </Button>
    </div>
  );
}