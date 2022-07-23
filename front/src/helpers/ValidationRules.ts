export const stringIsNullOrEmpty = (str: string): boolean => !str || 0 === str.length;

export const stringIsNullOrBlank = (str: string): boolean => !str || !str.trim || 0 === str.trim().length;

export function getPlural(number: number, one: string, two: string, five: string) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) return five;
    n %= 10;
    if (n === 1) return one;
    if (n >= 2 && n <= 4) return two;
    return five;
}


export class ValidationRules {
    //errors
    static abstractText = "Значение введено неверно";
    static errorPasswordMassage = "Пароль должен быть длинее 6 символов и содержать минимум 1 цифру";
    static leftLettersMessage = "Посторонние символы";

    //abstract
    public static requiredRule = (v: any) => !!v || v === 0 || "Обязательно к заполнению";
    public static isPositive = (v: number) => (!isNaN(v) && v >= 0) || ValidationRules.abstractText;
    public static requiredStrRule = (v: any) => !stringIsNullOrBlank(v) || "Обязательно к заполнению";
    public static isNumRule = (v: any) => !isNaN(v) || "Значение не является числом";
    public static isNumWithComma = (v: any) => !isNaN(+("" + v).replace(",", ".")) || "Значение не является числом";
    public static dateRule = function (v: any) {
        if (stringIsNullOrEmpty(v)) return "Обязательно к заполнению";
        if (v.match(/[0-3][0-9][.][0-1][0-9][.](19|20)([0-9]{2})/) == null || v == "Invalid Date") return "Неверный формат даты";
        else return true;
    };

    public static isAlphanumeric = (v: string) => /^[a-zA-Z0-9]*$/.test(v) || ValidationRules.abstractText;
    public static isAlphanumericKeys = (v: string) => /^[a-zA-Z0-9\-]*$/.test(v) || ValidationRules.abstractText;
    public static isNumeric = (v: string) => /^[\d.]*$/.test(v) || ValidationRules.abstractText;
    public static isCyrillic = (v: any) => /^[а-яА-ЯёЁ]*$/.test(v) || ValidationRules.leftLettersMessage;
    public static isCyrillicAndNumbers = (v: any) => /^[а-яА-ЯёЁ0-9]*$/.test(v) || ValidationRules.leftLettersMessage;
    public static isLatin = (v: any) => /^[a-zA-Z]*$/.test(v) || ValidationRules.leftLettersMessage;
    public static isLetters = (v: any) => /^[а-яА-Яa-zA-ZёЁ]*$/.test(v) || ValidationRules.leftLettersMessage;
    public static isLettersAndNumber = (v: any) => /^[а-яА-Яa-zA-Z0-9ёЁ]*$/.test(v) || ValidationRules.leftLettersMessage;
    public static isWithoutSigns = (v: any) => /^[^\W]*$/.test(v) || ValidationRules.isLettersAndNumber(v) || ValidationRules.leftLettersMessage;
    public static isWithoutNumbers = (v: any) => /^\D*$/.test(v) || ValidationRules.leftLettersMessage;
    public static max100Percent = (v: any) => v <= 100 || ValidationRules.abstractText;
    public static isName = (v: string) => !v || /^[а-яА-Я- ёЁ]*$/.test(v) || ValidationRules.leftLettersMessage; //a-zA-Z
    public static isNameWithoutSpacesForLimit = (v: string) => !v || /^(?!-)[а-яА-Я-ёЁ]*$/.test(v) || ValidationRules.leftLettersMessage; //a-zA-Z
    public static isWithoutDashesAtEnd = (v: string) => !v.endsWith("-") || ValidationRules.leftLettersMessage;

    public static systemCountLimit = (v: string) => !v || v.length < 40 || "Превышено разрешённое количество символов";

    public static maxUpperCaseChar = (v: string) => {
        let upperCount = 0;
        const maxUpperChars = v?.includes("-") ? 2 : 1;
        v?.split("").forEach((letter) => {
            if (letter >= "А" && letter <= "Я") upperCount++;
        });
        return upperCount <= maxUpperChars || "Превышено разрешённое количество символов в верхнем регистре";
    };


    //contacts
    public static isEmail = (v: string) =>
        !v ||
        (!v.includes("@mail.pampadu.com") &&
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                v
            )) ||
        "Email введен неверно";
    public static isPhone = (v: string) =>
        !v || /(^['+']\d{11}$)|(^\d{11}$)|(^[\+]?[\d][-]?\d{3}-?\d{3}[-]?\d{2}[-]?\d{2}$)/.test(v) || "Телефон введен неправильно";
    public static isPhoneRU = (v: string) => !v || v.startsWith("79") || v.startsWith("+7-9") || "Телефон введен неправильно";
    public static isPhoneWithOutCode = (v: string) => /^\d{10}$/.test(v) || "Телефон введен неправильно";
    public static isHref = (v: string) => /^(http|https):\/\/\S{2,255}\S$/.test(v) || "Ссылка введена неверно";
    //public static isPassword = (v: string) => /(?=^.{6,}$)((?=.*\d)(?=.*\S+))/.test(v) || ValidationRules.errorPasswordMassage;
    public static isPassword = (v: string) => (!!v && v.length >= 6) || ValidationRules.errorPasswordMassage;

    //documents
    //public static vinRule = (v: string) => (/^[A-Z0-9]{9}[A-Z0-9]{2}[0-9]{0,6}$/.test(v)) || "Неверный формат VIN";

    public static policySerial = (v: string) => !v || /^[А-Я]{3}$/.test(v) || ValidationRules.abstractText;
    public static isPolicySerialChar = (v: string) => !v || /^[а-яА-Я]*$/.test(v) || ValidationRules.abstractText;
    public static policyNumber = (v: string) => !v || /^[0-9]{10}$/.test(v) || ValidationRules.abstractText;
    public static policyNumberCL = (v: string) => !v || /^[0-9]{8,9}$/.test(v) || ValidationRules.abstractText;

    public static vinRule = (v: string) => /^[ABCDEFGHJKLMNPRSTUVWXYZ0-9]{17}$/.test(v) || "Неверный формат VIN";
    public static isVinCH = (v: string) =>
        /^[ABCDEFGHJKLMNPRSTUVWXYZabcdefghjklmnprstuvwxyzфФиИсСвВуУаАпПрРоОлЛдДьЬтТзЗкКыЫеЕгГмМцЦчЧнНяЯ0-9]*$/.test(v) || ValidationRules.leftLettersMessage;
    public static bodyNumberRule = (v: string) => /^[A-Z0-9\-]{3,18}$/.test(v) || ValidationRules.abstractText;
    public static chassisNumberRule = (v: string) => /^[A-Z0-9\-]{3,20}$/.test(v) || ValidationRules.abstractText;
    public static chassisbodyNumberRule = (v: string) => /^[A-Z0-9]+[\-]?[A-Z0-9]+$/.test(v) || ValidationRules.abstractText;

    public static isCatCWeight = (v: string) => (+v >= 2500 && +v <= 100000) || ValidationRules.abstractText;
    public static isCatAEngineVolume = (v: string) => (+v >= 50 && +v <= 1800) || ValidationRules.abstractText;
    public static isCatDSeats = (v: string) => (+v >= 8 && +v <= 200) || ValidationRules.abstractText;

    public static gosSign = (v: string) => !v || /^[АВЕКМНОРСТУХ]\d{3}[АВЕКМНОРСТУХ]{2}\d{2,3}$/.test(v) || "Номер введен неверно";
    public static gosSignCatA = (v: string) => !v || /^\d{4}[АВЕКМНОРСТУХ]{2}\d{2,3}$/.test(v) || "Номер введен неверно";
    public static isGosSignChar = (v: string) => !v || /^[авекмнорстухАВЕКМНОРСТУХfFdDtTrRvVyYjJhHcCnNeE[{\d]*$/.test(v) || "Номер введен неверно";


    public static siteRule = (v: string) => !v || v.includes(".") || "Укажите в формате site.ru";
}
