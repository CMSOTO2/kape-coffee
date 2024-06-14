import { Skeleton } from "@/components/shadui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex h-[575px] w-full flex-col space-y-3">
      <Skeleton className="h-[100%] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
