'use client'
import { useState } from "react";

import { 
  AlertDialogHeader, 
  AlertDialogFooter, 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogTitle,
  AlertDialogTrigger 
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";


export default function Page() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="grid grid-cols-2 gap-2">
      <AlertDialog 
        open={isOpen}
        // onOpenChange={(open) => alert({ open })}
        onOpenChange={ setIsOpen }
      >
        <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>

      </AlertDialog>

      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
    </div>
  );
}