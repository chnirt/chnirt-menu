import { Loader2 } from "lucide-react";

const MyLoading = () => {
  return (
    <div
      role="status"
      className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
    >
      <Loader2 className="animate-spin w-8 h-8" aria-hidden="true" />
    </div>
  );
};

export default MyLoading;
