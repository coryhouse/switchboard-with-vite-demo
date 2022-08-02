import Input from "./Input";
import { DevToolsConfig } from "./types";

type HttpSettingFormProps = {
  endpoint: string;
  delay?: number;
  status?: number;
  response?: string;
  setConfig: React.Dispatch<React.SetStateAction<DevToolsConfig>>;
};

export default function HttpSettingForm({
  endpoint,
  delay,
  status,
  response,
  setConfig,
}: HttpSettingFormProps) {
  return (
    <fieldset className="mt-4 border p-2">
      <legend>{endpoint}</legend>
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
                s.endpoint === endpoint
                  ? {
                      endpoint,
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
          className="w-20 mr-4"
          value={status}
          onChange={(e) =>
            setConfig((config) => ({
              ...config,
              http: config.http.map((s) =>
                s.endpoint === endpoint
                  ? {
                      endpoint,
                      delay,
                      status: parseInt(e.target.value),
                    }
                  : s
              ),
            }))
          }
        />

        <Input
          type="text"
          label="Response"
          className="w-20"
          value={response}
          onChange={(e) =>
            setConfig((config) => ({
              ...config,
              http: config.http.map((s) =>
                s.endpoint === endpoint
                  ? {
                      endpoint,
                      delay,
                      status,
                      response: e.target.value,
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
