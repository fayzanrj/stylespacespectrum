import CardItem from "@/components/cardItem";
import SearchBar from "@/components/searchBar";

export const metadata = {
  title: "Search results",
  descriptions: "T-Shirts Page",
};

const Search = async ({ params }) => {
  const response = await fetch(
    `${process.env.Host}/api/products/search/${params.query}`
  );
  const res = await response.json();
  const products = await res;

  return (
    <>
      <SearchBar />
        <div className="ml-[10%] mt-[5vh] text-[1.2rem]">Search results for <span className="font-semibold">{params.query}</span></div>
      <div className="w-full pt-[3vh]  min_height flex gap-[1.5rem] justify-center items-center flex-wrap pb-[2rem] px-[1rem]">
        {products && products.length > 0 ? (
          products.map((product, index) => {
            return (
              <CardItem
                key={index}
                title={product.productName}
                desc={product.productDesc}
                price={product.productPrice}
                image={product.productImg}
                id={product.productId}
                variants={product.productVariants}
              />
            );
          })
        ) : (
          <div>No products to show</div>
        )}
      </div>
    </>
  );
};

export default Search;
