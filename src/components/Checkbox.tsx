import * as CheckboxPrimit from "@radix-ui/react-checkbox"
import { Check } from "phosphor-react"

export interface CheckboxProps {}

export function Checkbox({  }: CheckboxProps) {

  return (
    <CheckboxPrimit.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded">
        <CheckboxPrimit.Indicator asChild>
            <Check weight="bold" className="h5- w-5 text-cyan-500"/>
        </CheckboxPrimit.Indicator>
    </CheckboxPrimit.Root>
  );
}
