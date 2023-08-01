import RootLayout from "@/components/layouts/RootLayout";
import { ReactElement } from "react";

const Motherboard = () => {
  return (
    <div>
      Welcome Motherboard
    </div>
  );
};

export default Motherboard;
Motherboard.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>{page}</RootLayout>
  )
};