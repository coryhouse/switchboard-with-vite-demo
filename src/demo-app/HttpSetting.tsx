import Input from "./Input";
import { DevToolsConfig } from "./types";

type HttpSettingProps = {
  label: string;
  delay: number;
  status: number;
  setDevToolsConfig: React.Dispatch<React.SetStateAction<DevToolsConfig>>;
};

export default function HttpSetting({
  label,
  delay,
  status,
  setDevToolsConfig,
}: HttpSettingProps) {
  function onChange(key: string, value: string) {
    setDevToolsConfig((devToolsConfig) => {
      const r: DevToolsConfig = {
        ...devToolsConfig,
        apiResponse: {
          ...devToolsConfig.apiResponse,
          [legend]: {
            [key]: parseInt(value),
          },
        },
      };
      return r;
    });
  }

  return (
    <fieldset className="mt-4 border p-4">
      <legend>{label}</legend>
      <div className="flex flex-row">
        <Input
          type="number"
          label="Delay"
          className="w-20 mr-4"
          value={delay}
          onChange={(e) => onChange("delay", e.target.value)}
        />

        <Input
          type="number"
          label="Status"
          className="w-20"
          value={status}
          onChange={(e) => onChange("status", e.target.value)}
        />
      </div>
    </fieldset>
  );
}
