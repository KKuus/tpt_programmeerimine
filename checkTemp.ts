export default function checkTemp(temp: number) {
    return temp >= 41 ? 1 : temp >= 21 ? 0 : -1;
}