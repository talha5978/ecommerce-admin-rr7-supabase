import { ActionFunctionArgs } from "react-router";
import { CategoryService } from "~/services/category.service";
import { ApiError } from "~/utils/ApiError";

export const action = async ({ request, params }: ActionFunctionArgs) => {
    const categoryId = (params.categoryId as string) || "";
	if (!categoryId || categoryId == "") {
        return {
            success: false,
            error: "Category ID is required",
        }
	}

	try {
		const categoryService = new CategoryService(request);
		// await categoryService.deleteCategory(categoryId);

		return { success: true };
	} catch (error: any) {
		console.error("Error in action:", error);
		const errorMessage =
			error instanceof ApiError ? error.message : error.message || "Failed to create category";

		if (error instanceof ApiError && error.details.length) {
			console.error("ApiError details:", error.details);
		}
		return {
			success: false,
			error: errorMessage,
		};
	}
};