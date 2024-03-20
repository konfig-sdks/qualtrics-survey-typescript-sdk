import { Qualtrics } from "./index";

describe("qualtrics-survey-typescript-sdk", () => {
    it("initialize client", async () => {
        const qualtrics = new Qualtrics({
            apiKey: "API_KEY",
        });
    });
});
