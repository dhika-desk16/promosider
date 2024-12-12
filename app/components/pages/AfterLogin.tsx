import { Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
export default function Index() {
  return (
    <div>
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="email4" value="SUdah Login" />
        </div>
        <TextInput
          id="email4"
          type="email"
          icon={HiMail}
          rightIcon={HiMail}
          placeholder="Sudah Login"
          required
        />
      </div>
    </div>
  );
}
