import RootLayout from "@/components/layouts/RootLayout";
import { ReactElement } from "react";

const StorageDevice = () => {
  return (
    <div>
      StorageDevice
    </div>
  );
};

export default StorageDevice;
StorageDevice.getLayout = function getLayout(page: ReactElement) {
  return (
    <RootLayout>{page}</RootLayout>
  )
};