import { ReactNode } from "react";
import { StarFill } from "react-bootstrap-icons";

import './_style.scss';
import Collapse from "../../components/collapse";

interface productCardProps {
    id: string,
    name: string,
    description: string,
    price: number,
    rating: number,
    category: string,
    supply: number,
    stat: {
        id: string,
        productId: string,
        yearlySalesTotal: number,
        yearlyTotalSoldUnits: number,
        year: number,
        monthlyData: string,
        dailyData: string,
    },
}

export default function ProductCard(props: productCardProps) {
    return (
        <div className="product-card">
            <p className="category">{props.category}</p>
            <h6 className="name">{props.name}</h6>
            <p className="price">R${props.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</p>
            <p className="rating">Rating: {props.rating}<span><StarFill /></span></p>
            <p className="description">{props.description}</p>
            <Collapse title="DETALHES">
                <p>ID: {props.id}</p>
                <p>Supply: {props.supply}</p>
                <p>Yearly sales this year: {props.stat.yearlySalesTotal}</p>
                <p>Yearly units sold this year: {props.stat.productId}</p>
            </Collapse>
        </div>
    );
}