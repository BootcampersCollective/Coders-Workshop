
/**
* Tests for capitalizeATitle
*/
import {CapitalizeTitle} from "./capitalize-title";

describe('CapitalizeTitleFunctional', () => {
    it("should return proper title case", () => {
        const str = "the old man and the see";
        const result = CapitalizeTitle.capitalizeTitleFunctional(str);
        expect(result).toEqual("The Old Man and the See");
    });

    it("should return proper title case with multiple excluded words", () => {
        const str = "the old man and the see of may be good, test";
        const result = CapitalizeTitle.capitalizeTitleFunctional(str);
        expect(result).toEqual("The Old Man and the See of May Be Good, Test");
    });

    it("should return proper title case with leading and trailing spaces", () => {
        const str = " the old man and the see ";
        const result = CapitalizeTitle.capitalizeTitleFunctional(str);
        expect(result).toEqual("The Old Man and the See");
    });

    it("should return proper title case with undefined", () => {
        const str = undefined;
        const result = CapitalizeTitle.capitalizeTitleFunctional(str);
        expect(result).toEqual(undefined);
    });

    it("should return proper title case with multiple spaces between words", () => {
        const str = " test   list  ";
        const result = CapitalizeTitle.capitalizeTitleFunctional(str);
        expect(result).toEqual("Test List");
    });
    it("should return proper title case with one  word only", () => {
        const str = "class";
        const result = CapitalizeTitle.capitalizeTitleFunctional(str);
        expect(result).toEqual("Class");
    });
    it("should return proper title case with one exclusion word only", () => {
        const str = "of";
        const result = CapitalizeTitle.capitalizeTitleFunctional(str);
        expect(result).toEqual("Of");
    });
});

describe('CapitalizeTitleImperative', () => {
    it("should return proper title case", () => {
        const str = "the old man and the see";
        const result = CapitalizeTitle.capitalizeTitleImperative(str);
        expect(result).toEqual("The Old Man and the See");
    });

    it("should return proper title case with multiple excluded words", () => {
        const str = "the old man and the see of may be good, test";
        const result = CapitalizeTitle.capitalizeTitleImperative(str);
        expect(result).toEqual("The Old Man and the See of May Be Good, Test");
    });

    it("should return proper title case with leading and trailing spaces", () => {
        const str = " the old man and the see ";
        const result = CapitalizeTitle.capitalizeTitleImperative(str);
        expect(result).toEqual("The Old Man and the See");
    });

    it("should return proper title case with undefined", () => {
        const str = undefined;
        const result = CapitalizeTitle.capitalizeTitleImperative(str);
        expect(result).toEqual(undefined);
    });

    it("should return proper title case with multiple spaces between words", () => {
        const str = " test   list  ";
        const result = CapitalizeTitle.capitalizeTitleImperative(str);
        expect(result).toEqual("Test List");
    });
    it("should return proper title case with one  word only", () => {
        const str = "class";
        const result = CapitalizeTitle.capitalizeTitleImperative(str);
        expect(result).toEqual("Class");
    });
    it("should return proper title case with one exclusion word only", () => {
        const str = "of";
        const result = CapitalizeTitle.capitalizeTitleImperative(str);
        expect(result).toEqual("Of");
    });
});