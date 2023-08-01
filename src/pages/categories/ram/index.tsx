import RootLayout from "@/components/layouts/RootLayout";
import { ReactElement } from "react";

const Ram = () => {
  return (
    <div>
      Ram
    </div>
  );
};

export default Ram;
Ram.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>{page}</RootLayout>
  )
};