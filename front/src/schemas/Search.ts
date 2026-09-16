import { z } from "zod";

export const SearchSchema = z.object({
    search: z.string().min(3, {
        message: "The search must be at least 3 characters long"
    })
})