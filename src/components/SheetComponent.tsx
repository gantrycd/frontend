import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import "@/styles/sheet.scss";
import Link from "next/link";
import { ReactNode } from "react";
import TabComponent from "@/components/TabComponent";

function SheetComponent({
  title,
  children,
}: {
  id?: string;
  children: ReactNode;
  description?: string;
  title: string;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='title'>{title}</SheetTitle>
        </SheetHeader>
        <TabComponent />
      </SheetContent>
    </Sheet>
  );
}

export default SheetComponent;
