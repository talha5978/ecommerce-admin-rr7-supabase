import { Button } from "~/components/ui/button";
import { Form, useActionData, useNavigation } from "react-router";
import { IconLogout } from "@tabler/icons-react";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

const LogoutButton = () => {
    const navigation = useNavigation();
    const actionData = useActionData();

	const isLoggingOut =
		navigation.state === "submitting" &&
		navigation.formAction === "/logout" &&
		navigation.formMethod === "POST";

    useEffect(() => {
		if (actionData?.error) {
			toast.error(actionData.error);
		} else if (actionData == undefined && navigation.formAction === "/logout") {
            toast.success("Logged out successfully");
        }
	}, [actionData]);

    return (
        <Form action="/logout" method="POST">
            <Button
                variant="destructive"
                disabled={isLoggingOut}
                className="min-w-full"
                size={"sm"}
            >
                {isLoggingOut ? <Loader2 className="animate-spin" color="white" /> : <IconLogout color="white"/>}
                <span>Logout</span>
            </Button>
        </Form>
    )
};

export default LogoutButton;