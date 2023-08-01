import RootLayout from "@/components/layouts/RootLayout";
import { ReactElement } from "react";

const Others = () => {
  return (
    <div>
      Others
    </div>
  );
};

export default Others;
Others.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>{page}</RootLayout>
  )
};