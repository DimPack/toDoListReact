import * as Yup from "yup";

export const taskShema = Yup.object({
  content: Yup.string()
    .trim()
    .min(3, "must be more 3 symbols")
    .max(255, "must be less 3 symbols")
    .matches(
      /^[\u0400-\u04FF0-9A-Za-z ,.!?]{3,255}$/,
      "does not correspond to the field filling form"
    )
    .required(),
});
