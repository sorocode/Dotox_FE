import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "tailwind.config.jspeer tailwind.config.jsh-4 tailwind.config.jsw-4 tailwind.config.jsshrink-0 tailwind.config.jsrounded-sm tailwind.config.jsborder tailwind.config.jsborder-primary tailwind.config.jsring-offset-background focus-visible:tailwind.config.jsoutline-none focus-visible:tailwind.config.jsring-2 focus-visible:tailwind.config.jsring-ring focus-visible:tailwind.config.jsring-offset-2 disabled:tailwind.config.jscursor-not-allowed disabled:tailwind.config.jsopacity-50 data-[state=checked]:tailwind.config.jsbg-primary data-[state=checked]:tailwind.config.jstext-primary-foreground",
      className
    )}
    {...props}>
    <CheckboxPrimitive.Indicator
      className={cn(
        "tailwind.config.jsflex tailwind.config.jsitems-center tailwind.config.jsjustify-center tailwind.config.jstext-current"
      )}>
      <Check className="tailwind.config.jsh-4 tailwind.config.jsw-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
