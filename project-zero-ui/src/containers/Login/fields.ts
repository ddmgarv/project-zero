import fieldsCreator from "@/utils/fieldsCreator";

export default [{ ...fieldsCreator("email"), autoFocus: true }, fieldsCreator("password")];
