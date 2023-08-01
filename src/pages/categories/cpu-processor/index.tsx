import RootLayout from "@/components/layouts/RootLayout";
import { ReactElement } from "react";

const CpuProcessor = () => {
  return (
    <div>
      welcome Cpu-processor      
    </div>
  );
};

export default CpuProcessor;


CpuProcessor.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>{page}</RootLayout>
  )
};