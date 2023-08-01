import RootLayout from "@/components/layouts/RootLayout";
import { ReactElement } from "react";

const PowerSupply = () => {
  return (
    <div>
      PowerSupply
    </div>
  );
};

export default PowerSupply;
PowerSupply.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>{page}</RootLayout>
  )
};