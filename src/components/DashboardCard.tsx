import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { EllipsisVerticalIcon } from "lucide-react";
import { DASHBOARD_CARD_MENU } from "../index.ts";

type Props = {
  title: string;
  description: string;
  text?: string;
  buttonText: string;
  footerText?: string;
};

export const DashboardCard = ({
  title,
  description,
  buttonText,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <Card className="bg-background">
      <CardHeader className="border-b flex justify-between">
        <div>
          <CardTitle>{title}</CardTitle>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisVerticalIcon size={20} />
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            {DASHBOARD_CARD_MENU.map((item) => (
              <DropdownMenuItem key={item.label}>
                <item.Icon />
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      <CardContent className="grid grid-cols-1 grow">
        {children}
      </CardContent>

      <CardFooter className="border-t">
        <Button variant="outline" className="ml-auto">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};
