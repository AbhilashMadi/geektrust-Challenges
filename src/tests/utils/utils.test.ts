import { cn } from "@/lib/utils";

describe("cn function", () => {
  it("should concatenate and merge class names correctly", () => {
    const result = cn("class1", "class2", "class3", "class4", {
      "class5": true,
      "class6": false,
    });

    expect(result).toEqual("class1 class2 class3 class4 class5");
  })

  it("should remove the overrided class names", () => {
    const result = cn("px-2 py-1 bg-red hover:bg-dark-red", "p-3 bg-[#B91C1C]");

    expect(result).toEqual("hover:bg-dark-red p-3 bg-[#B91C1C]");
  })
})

// describe("scrollTo function", () => {
//   it("should call window.scroll with correct arguments", () => {

//     //mocking the window.scroll method
//     const scrollMock = jest.fn();
//     window.scroll = scrollMock;

//     scrollTo(100, 200);

//     expect(scrollMock).toHaveBeenCalledWith({
//       top: 100,
//       left: 200,
//       behavior: "smooth",
//     })
//   });

//   it("shuld call the scrollTo method with default arguments", () => {
//     const scrollMock = jest.fn();
//     window.scroll = scrollMock;

//     scrollTo();

//     expect(scrollMock).toHaveBeenCalledWith({
//       top: 0,
//       left: 0,
//       behavior: "smooth",
//     })
//   })
// })