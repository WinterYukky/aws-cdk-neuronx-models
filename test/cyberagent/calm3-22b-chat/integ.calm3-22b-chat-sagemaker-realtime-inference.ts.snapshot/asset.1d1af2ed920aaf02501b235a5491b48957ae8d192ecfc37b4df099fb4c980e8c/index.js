"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onEvent = void 0;
const onEvent = async (event) => {
    console.log(event);
    const image = JSON.parse(event.ResourceProperties.image);
    console.log(image);
    return {
        Data: image,
    };
};
exports.onEvent = onEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcHJpdmF0ZS9uZXVyb254LWFtaS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFTyxNQUFNLE9BQU8sR0FBNkIsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO0lBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixPQUFPO1FBQ0wsSUFBSSxFQUFFLEtBQUs7S0FDWixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBUFcsUUFBQSxPQUFPLFdBT2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHlwZSBDZGtDdXN0b21SZXNvdXJjZUhhbmRsZXIgfSBmcm9tIFwiYXdzLWxhbWJkYVwiO1xuXG5leHBvcnQgY29uc3Qgb25FdmVudDogQ2RrQ3VzdG9tUmVzb3VyY2VIYW5kbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgY29uc3QgaW1hZ2UgPSBKU09OLnBhcnNlKGV2ZW50LlJlc291cmNlUHJvcGVydGllcy5pbWFnZSk7XG4gIGNvbnNvbGUubG9nKGltYWdlKTtcbiAgcmV0dXJuIHtcbiAgICBEYXRhOiBpbWFnZSxcbiAgfTtcbn07XG4iXX0=