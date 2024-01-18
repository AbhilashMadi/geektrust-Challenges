import { cn, scrollTo } from "@/lib/utils";

describe("cn function", () => {
  it("should properly merge the classNames", () => {
    const result = cn("class1", "class2 ", "");
    const expected = "class1 class2";

    expect(result).toBe(expected);
  })

  it("should properly merge the conditional classes", () => {
    const result1 = cn({ foo: true }, { bar: false }, null, { "--foobar": "hello" });
    const expected1 = "foo --foobar";

    const result2 = cn("foo", true && "bar", "baz");
    const expected2 = "foo bar baz";

    expect(result1).toBe(expected1);
    expect(result2).toBe(expected2);
  })

  it("should remove the overrided classNames", () => {
    const result = cn("px-2 py-1 bg-red hover:bg-dark-red", "p-3 bg-[#B91C1C]");
    const expected = "hover:bg-dark-red p-3 bg-[#B91C1C]";

    expect(result).toBe(expected);
  })
})

describe("scrollTo function", () => {
  const originalScroll = window.scroll = jest.fn();

  afterEach(() => jest.clearAllMocks());

  it("scrollTo scrolls to the specified position with default values", () => {
    scrollTo();

    expect(originalScroll).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  });

  it("scrollTo scrolls to the specified position with given arguments", () => {
    scrollTo(100, 200, "smooth");

    expect(originalScroll).toHaveBeenCalledWith({
      top: 100,
      left: 200,
      behavior: "smooth",
    });
  });
});