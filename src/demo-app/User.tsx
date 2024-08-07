import { mockPersonas } from "./mocks/data/personas.mocks";
import useUserSync from "./useUserSync";
import Field from "../components/Field";
import Select from "../components/Select";
import { useDevToolsState } from "react-switchboard";
export function User() {
  const [userId, setUserId] = useDevToolsState("userId", "");

  useUserSync(parseInt(userId), setUserId);

  return (
    <Field>
      <Select
        width="full"
        id="user"
        label="Persona"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      >
        <option value="">Logged out</option>
        {mockPersonas.map(({ id, description, response }) => (
          <option value={id} key={id}>
            {response.name} ({description.role}, {description.todos})
          </option>
        ))}
      </Select>
    </Field>
  );
}
