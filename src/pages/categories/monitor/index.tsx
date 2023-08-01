import RootLayout from "@/components/layouts/RootLayout";
import { ReactElement } from "react";

const Monitor = () => {
  return (
    <div>
      Welcome Monitor
    </div>
  );
};

export default Monitor;
Monitor.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>{page}</RootLayout>
  )
};