import { useForm } from "react-hook-form";
import { SearchSchema } from "../schemas/Search";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchIcon } from "lucide-react";
import FormError from "./FormError";

export default function Search() {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SearchSchema),
    mode: "onChange",
  });
  return (
    <form
      action=""
      className="relative flex flex-col gap-2 justify-center w-full "
    >
      <div className="flex items-center">
        <SearchIcon className="absolute left-2" />
        <input
          placeholder="Type here to search..."
          type="search"
          id="search"
          {...register("search")}
          className="w-full px-5 py-2 pl-10 rounded border border-slate-400"
        />
      </div>
      {errors.search && <FormError error={errors.search} />}
    </form>
  );
}
