import { FC } from "react";

import { Status } from "@/lib/types";
import { cn } from "@/lib/utils";

interface IStatusLabelProps {
  children: React.ReactNode;
  status: Status;
  disabled?: boolean;
}

const StatusLabel: FC<IStatusLabelProps> = ({ children, status, disabled }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium",
        status === Status.Active && "text-green-700 bg-green-100",
        status === Status.NoActive && " text-red-700 bg-red-100",
        status === Status.Pendind && "text-orange-700 bg-orange-100",
        status === Status.Suspended && "text-blue-700 bg-blue-100 ",
        disabled && "opacity-75 cursor-not-allowed"
      )}
    >
      <div className="w-1 h-1 mr-2 rounded-full bg-current" />
      {children}
    </div>
  );
};

export default StatusLabel;
