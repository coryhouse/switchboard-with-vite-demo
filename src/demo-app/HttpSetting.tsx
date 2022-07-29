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
  return (
    <fieldset className="mt-4 border p-2">
      <legend>{label}</legend>
      <div className="flex flex-row">
        <Input
          type="number"
          label="Delay"
          className="w-20 mr-4"
          value={delay}
          onChange={(e) =>
            setDevToolsConfig((devToolsConfig) => {
              return {
                ...devToolsConfig,
                mockApis: [
                  ...devToolsConfig.mockApis.filter((a) => a.label !== label),
                  {
                    label,
                    delay: parseInt(e.target.value),
                    status,
                  },
                ],
              };
            })
          }
        />

        <Input
          type="number"
          label="Status"
          className="w-20"
          value={status}
          onChange={(e) =>
            setDevToolsConfig((devToolsConfig) => {
              return {
                ...devToolsConfig,
                mockApis: [
                  ...devToolsConfig.mockApis.filter((a) => a.label !== label),
                  {
                    label,
                    delay,
                    status: parseInt(e.target.value),
                  },
                ],
              };
            })
          }
        />
      </div>
    </fieldset>
  );
}
