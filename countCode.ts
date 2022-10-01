import { getDataFromURL } from "./util";

const DATA_URL = `https://raw.githubusercontent.com/timotr/progre-helper/main/data.js`;

const getData = async () => JSON.parse(await getDataFromURL<string>(DATA_URL).then(data => data.slice(13).slice(0, -2))) as string[];

function countCodeLetters(data: string[], letter: string) {
  return data.filter((code) => code.startsWith(letter)).length;
}

export default async function countCode() {
    const data = await getData();

    const lettersCount = countCodeLetters(data, "i");

    return lettersCount;
}