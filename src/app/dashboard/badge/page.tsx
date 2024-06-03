'use client';

import { Badge } from "@/components/ui/badge";
export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Badge>default</Badge>
      <Badge variant={"destructive"}>destructive</Badge>
      <Badge variant={"secondary"}>secundary</Badge>
      <Badge variant={"outline"}>outline</Badge>
      <Badge variant={"info"}>info</Badge>
      <Badge capitalize variant={"success"}>success</Badge>
    </div>
  );
}