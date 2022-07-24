import {Locales} from "@/localization";

export type TUser = {
    firstName: string,
    lastName: string,
    email: string,
    id: number,
    isBanned: boolean,
    createdAt: Date,
    updatedAt: Date,
    locale: Locales,
}
