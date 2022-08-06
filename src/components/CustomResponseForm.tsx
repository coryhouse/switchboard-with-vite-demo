import { customerResponseDefaults } from "../DevTools";
import { CustomResponse } from "../types/types";
import DeleteButton from "./DeleteButton";
import Input from "./Input";

type CustomResponseFormProps = {
  customResponse: CustomResponse;
  setCustomResponses: React.Dispatch<React.SetStateAction<CustomResponse[]>>;
};

export default function CustomResponseForm({
  customResponse,
  setCustomResponses,
}: CustomResponseFormProps) {
  const { endpointName, delay, status, response } = customResponse;

  return (
    <fieldset className="mt-4 border p-2">
      <legend>
        {endpointName}{" "}
        <DeleteButton
          onClick={() =>
            setCustomResponses((r) =>
              r.filter((e) => e.endpointName !== endpointName)
            )
          }
        />
      </legend>
      <div className="flex flex-row">
        <Input
          type="number"
          changed={delay !== customerResponseDefaults.delay}
          label="Delay"
          className="w-20 mr-4"
          value={delay}
          onChange={(e) =>
            setCustomResponses((r) =>
              r.map((s) =>
                s.endpointName === endpointName
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
          changed={status !== customerResponseDefaults.status}
          label="Status"
          className="w-20 mr-4"
          value={status}
          onChange={(e) =>
            setCustomResponses((r) =>
              r.map((s) =>
                s.endpointName === endpointName
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
          changed={response !== customerResponseDefaults.response}
          label="Response"
          className="w-20"
          value={response}
          placeholder="Default"
          onChange={(e) =>
            setCustomResponses((r) =>
              r.map((s) =>
                s.endpointName === endpointName
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
