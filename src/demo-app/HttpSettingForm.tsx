import Input from "./Input";
import { HttpSetting } from "./types";

type HttpSettingFormProps = {
  label: string;
  delay: number;
  status: number;
  setHttpSettings: React.Dispatch<React.SetStateAction<HttpSetting[]>>;
};

export default function HttpSettingForm({
  label,
  delay,
  status,
  setHttpSettings,
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
            setHttpSettings((httpSettings) => {
              return httpSettings.map((a) =>
                a.label === label
                  ? {
                      label,
                      delay: parseInt(e.target.value),
                      status,
                    }
                  : a
              );
            })
          }
        />

        <Input
          type="number"
          label="Status"
          className="w-20"
          value={status}
          onChange={(e) =>
            setHttpSettings((httpSettings) => {
              return httpSettings.map((a) =>
                a.label === label
                  ? {
                      label,
                      delay,
                      status: parseInt(e.target.value),
                    }
                  : a
              );
            })
          }
        />
      </div>
    </fieldset>
  );
}
