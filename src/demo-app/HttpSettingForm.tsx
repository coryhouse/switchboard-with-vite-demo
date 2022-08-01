import Input from "./Input";
import { DevToolsConfig } from "./types";

type HttpSettingFormProps = {
  label: string;
  delay: number;
  status: number;
  setConfig: React.Dispatch<React.SetStateAction<DevToolsConfig>>;
};

export default function HttpSettingForm({
  label,
  delay,
  status,
  setConfig,
}: HttpSettingFormProps) {
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
            setConfig((config) => ({
              ...config,
              http: config.http.map((s) =>
                s.label === label
                  ? {
                      label,
                      delay: parseInt(e.target.value),
                      status,
                    }
                  : s
              ),
            }))
          }
        />

        <Input
          type="number"
          label="Status"
          className="w-20"
          value={status}
          onChange={(e) =>
            setConfig((config) => ({
              ...config,
              http: config.http.map((s) =>
                s.label === label
                  ? {
                      label,
                      delay,
                      status: parseInt(e.target.value),
                    }
                  : s
              ),
            }))
          }
        />
      </div>
    </fieldset>
  );
}
