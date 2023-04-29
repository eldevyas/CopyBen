import { GetStaticPaths, GetStaticProps } from "next";
// import { Product } from "../../types";
// import ProductPage from "../../components/ProductPage";

// interface ProductPageProps {
//     product: Product;
// }

// const ProductPageRoute = ({ product }: ProductPageProps) => {
//     return <ProductPage product={product} />;
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//     // Fetch the list of products and create a list of paths
//     const products = await fetch("/api/products").then((res) => res.json());
//     const paths = products.map((product: Product) => ({
//         params: { product: product.name },
//     }));
//     return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     // Fetch the data for the product based on the name in the URL
//     const productName = params?.product;
//     const product = await fetch(`/api/products/${productName}`).then((res) =>
//         res.json()
//     );
//     return { props: { product } };
// };

// export default ProductPageRoute;
