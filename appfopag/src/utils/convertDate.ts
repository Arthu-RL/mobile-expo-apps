export function convertDate(data: string): Date {
  const dataArray = data.split("/");
  if (dataArray.length != 3) {
    return new Date(0, 0, 0);
  }

  return new Date(
    Number(dataArray[1]),
    Number(dataArray[0]),
    Number(dataArray[2])
  );
}
