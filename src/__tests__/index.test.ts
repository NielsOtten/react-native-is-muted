import IsMutedModule from "../IsMutedModule";
import { isMuted } from "../index";

jest.mock("../IsMutedModule", () => ({
  __esModule: true,
  default: { isMuted: jest.fn() },
}));

const mockedIsMuted = jest.mocked(IsMutedModule.isMuted);

describe("isMuted", () => {
  it("resolves to true when the native module reports muted", async () => {
    mockedIsMuted.mockResolvedValueOnce(true);
    await expect(isMuted()).resolves.toBe(true);
    expect(mockedIsMuted).toHaveBeenCalledTimes(1);
  });

  it("resolves to false when the native module reports not muted", async () => {
    mockedIsMuted.mockResolvedValueOnce(false);
    await expect(isMuted()).resolves.toBe(false);
  });

  it("propagates rejections from the native module", async () => {
    mockedIsMuted.mockRejectedValueOnce(new Error("ERR_SIMULATOR_UNSUPPORTED"));
    await expect(isMuted()).rejects.toThrow("ERR_SIMULATOR_UNSUPPORTED");
  });
});
