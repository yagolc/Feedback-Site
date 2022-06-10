import { Popover } from "@headlessui/react"
import { X } from "phosphor-react";

export function CloseButton(){
  return(
    <Popover.Button className="top-5 right-5 text-zinc-400 hover:text-zinc-100 absolute" title="fechar formulario de Feedback">
      <X width="bold" className="w-4 h-4" />

    </Popover.Button>
  );
}