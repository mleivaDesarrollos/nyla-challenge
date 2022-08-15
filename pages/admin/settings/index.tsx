import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Admin } from "../../../components/Admin";
import { AdminButton } from "../../../components/AdminLayout/AdminButton";
import { MERCHANT_ID } from "../../../config";

type Inputs = {
  enableChat: boolean;
};

type SettingsSaveStatus = "error" | "success";

const SettingsContent = () => {
  const [status, setStatus] = useState<SettingsSaveStatus | null>();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ enableChat }) => {
    const response = await fetch(`/api/merchant/settings/${MERCHANT_ID}`, {
      method: "POST",
      body: JSON.stringify({ enableChat }),
    });
    if (!response.ok) {
      setStatus("error");
      return;
    }

    setStatus("success");
  };
  return (
    <div className="h-screen">
      <header className="h-20 bg-gray-800 flex items-center pl-10">
        <h1 className="text-3xl">Settings for Merchant</h1>
      </header>
      <main className="h-screen">
        <form
          className="flex flex-col items-center space-y-8 justify-center h-screen"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label>
            <input {...register("enableChat")} type="checkbox" />
            Chat Enabled
          </label>
          <AdminButton className="w-20">Save</AdminButton>
          {status === "success" && (
            <span>Settings has been saved successfully.</span>
          )}
          {status === "error" && (
            <span>There is an error saving settings for this merchant.</span>
          )}
        </form>
      </main>
    </div>
  );
};

const Settings = () => (
  <Admin title="Merchant - Settings">
    <SettingsContent />
  </Admin>
);

export default Settings;
