import { Button } from "~/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { cn } from "~/lib/utils";
import { Calendar } from "~/components/Custom-Inputs/calendar";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState, HTMLAttributes } from "react";
import { type DateRange } from "react-day-picker";

interface DateRangePickerProps extends HTMLAttributes<HTMLDivElement> {
	/** controlled value from RHF Controller */
	value?: DateRange | null;
	/** called when user selects new range */
	onDateRangeChange?: (range: DateRange | undefined) => void;
}

export default function DateRangePicker({
	className,
	value: controlledValue,
	onDateRangeChange: controlledOnChange,
	...rest
}: DateRangePickerProps) {
	const isControlled = controlledOnChange != null;
	const [internal, setInternal] = useState<DateRange | undefined>({
		from: addDays(new Date(), -20),
		to: new Date(),
	});

	// decide which to render
	const date = isControlled ? controlledValue ?? undefined : internal;

	function handleSelect(range: DateRange | undefined) {
		if (isControlled) {
			controlledOnChange!(range);
		} else {
			setInternal(range);
		}
	}

	return (
		<div {...rest} className={cn("grid gap-2", className)}>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						id="date"
						variant="outline"
						className={cn(
							"w-full justify-start text-left font-normal",
							!date && "text-muted-foreground"
						)}
					>
						<CalendarIcon className="mr-2 h-4 w-4" />
						{date?.from ? (
							date.to ? (
								<>
									{format(date.from, "LLL dd, y")} – {format(date.to, "LLL dd, y")}
								</>
							) : (
								format(date.from, "LLL dd, y")
							)
						) : (
							<span>Pick a date</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0" align="end">
					<Calendar
						autoFocus
						mode="range"
						defaultMonth={date?.from}
						selected={date}
						onSelect={handleSelect}
						numberOfMonths={2}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}
