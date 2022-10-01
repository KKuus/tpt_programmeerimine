import { getDataFromURL } from "./util";

const DATA_URL = `https://raw.githubusercontent.com/timotr/progre-helper/main/tellimus.js`;

type OrderRow = {
    article_id: number,
    name: string,
    product_code: string,
    price: number,
    amount: number,
    vat: number,
};

type Order = {
    id: number,
    orderNumber: string,
    createdAt: string,
    clientName: string,
    deliveryType: string,
    deliveryValue: number,
    rows: OrderRow[]
}

const getData = async () => JSON.parse(await getDataFromURL<string>(DATA_URL).then(data => data.slice(15))) as Order;

export default async function orderSummary() {
    const order = await getData();

    const totalPrice = order.rows.reduce((sum, { price, vat, amount }) => sum + (price + price * vat) * amount, 0);

    for (const row of order.rows) {
        console.log(`${row.name} ${row.amount} ${row.price} ${(row.price + row.price * row.vat) * row.amount}`);
    }

    console.log(totalPrice);
}