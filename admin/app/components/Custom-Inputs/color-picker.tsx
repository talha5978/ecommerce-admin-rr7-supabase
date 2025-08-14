import { forwardRef, useMemo, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { cn } from "@ecom/shared/lib/utils";
import { useForwardedRef } from "~/hooks/use-forward-ref";
import { Button, type ButtonProps } from "~/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { Input } from "~/components/ui/input";

interface ColorPickerProps {
	value: string;
	onChange: (value: string) => void;
	onBlur?: () => void;
}

const ColorPicker = forwardRef<
	HTMLInputElement,
	Omit<ButtonProps, "value" | "onChange" | "onBlur"> & ColorPickerProps & ButtonProps
>(({ disabled, value, onChange, onBlur, name, className, size, ...props }, forwardedRef) => {
	const ref = useForwardedRef(forwardedRef);
	const [open, setOpen] = useState(false);

	const parsedValue = useMemo(() => {
		return value || "#FFFFFF";
	}, [value]);

	return (
		<Popover onOpenChange={setOpen} open={open}>
			<PopoverTrigger asChild disabled={disabled} onBlur={onBlur}>
				<Button
					{...props}
					className={cn("block", className)}
					name={name}
					onClick={() => {
						setOpen(true);
					}}
					size={size}
					style={{
						backgroundColor: parsedValue,
					}}
					variant="outline"
				>
					<div />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-full space-y-3">
				<HexColorPicker color={parsedValue} onChange={onChange} className="!w-full" />
				<Input
					maxLength={7}
					onChange={(e) => {
						onChange(e?.currentTarget?.value);
					}}
					ref={ref}
					value={parsedValue}
				/>
			</PopoverContent>
		</Popover>
	);
});

ColorPicker.displayName = "ColorPicker";

export { ColorPicker };
