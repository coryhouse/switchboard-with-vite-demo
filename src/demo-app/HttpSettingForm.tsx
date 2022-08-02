import DeleteButton from "../DeleteButton";
import Input from "./Input";
import { DevToolsConfig, HttpSetting } from "./types";

type HttpSettingFormProps = {
  httpSetting: HttpSetting;
  setConfig: React.Dispatch<React.SetStateAction<DevToolsConfig>>;
};

export default function HttpSettingForm({
  httpSetting,
  setConfig,
}: HttpSettingFormProps) {
  const { endpoint, delay, status, response } = httpSetting;

  return (
    <fieldset className="mt-4 border p-2">
      <legend>
        {endpoint}{" "}
        <DeleteButton
          onClick={() =>
            setConfig((config) => ({
              ...config,
              http: config.http.filter((h) => h.endpoint !== endpoint),
            }))
          }
        />
      </legend>
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
                      ...s,
                      delay: parseInt(e.target.value),
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
                      ...s,
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
                      ...s,
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
