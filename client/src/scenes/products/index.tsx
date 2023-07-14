import Header from '../../components/Header';
import { useGetProductsQuery } from '../../state/api';
import Grid from '../../components/grid/Grid';
import Loading from '../../components/loading/Loading';
import Spacer from '../../components/separator/Spacer';
import ProductCard from './ProductCard';

export default function Products() {
    const { isLoading, data } = useGetProductsQuery();
    console.log(data == undefined ? ":(" : data[0].stat);

    return (
        <>
            <Header title='PRODUCTS' subtitle='See your list of products.' />
            <Spacer height={50} />
            {data || isLoading ?
                <Grid>
                    {data?.map(
                        ({
                            _id,
                            name,
                            price,
                            description,
                            category,
                            rating,
                            supply,
                            stat,
                        }) => (
                            <ProductCard
                                key={_id}
                                id={_id}
                                name={name}
                                description={description}
                                price={price}
                                rating={rating}
                                category={category}
                                supply={supply}
                                stat={stat}
                            />
                        )
                    )}
                </Grid>
                : <Loading />}
        </>
    );
}