import DeleteButton from "../components/DeleteButton";
import Input from "../components/Input";
import { HttpSetting } from "./types";

type HttpSettingFormProps = {
  http: HttpSetting;
  setHttp: React.Dispatch<React.SetStateAction<HttpSetting[]>>;
};

export default function HttpSettingForm({
  http,
  setHttp,
}: HttpSettingFormProps) {
  const { endpoint, delay, status, response } = http;

  return (
    <fieldset className="mt-4 border p-2">
      <legend>
        {endpoint}{" "}
        <DeleteButton
          onClick={() =>
            setHttp((http) => http.filter((h) => h.endpoint !== endpoint))
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
            setHttp((http) =>
              http.map((s) =>
                s.endpoint === endpoint
                  ? {
                      ...s,
                      delay: parseInt(e.target.value),
                    }
                  : s
              )
            )
          }
        />

        <Input
          type="number"
          label="Status"
          className="w-20 mr-4"
          value={status}
          onChange={(e) =>
            setHttp((http) =>
              http.map((s) =>
                s.endpoint === endpoint
                  ? {
                      ...s,
                      status: parseInt(e.target.value),
                    }
                  : s
              )
            )
          }
        />

        <Input
          type="text"
          label="Response"
          className="w-20"
          value={response}
          placeholder="Default"
          onChange={(e) =>
            setHttp((http) =>
              http.map((s) =>
                s.endpoint === endpoint
                  ? {
                      ...s,
                      response: e.target.value,
                    }
                  : s
              )
            )
          }
        />
      </div>
    </fieldset>
  );
}
