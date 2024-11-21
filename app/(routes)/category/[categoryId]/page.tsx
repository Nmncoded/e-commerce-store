import getCategory from "@/actions/getCategory";
import getColors from "@/actions/getColors";
import getProducts from "@/actions/getProducts";
import getSizes from "@/actions/getSizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import ProductList from "@/components/product-list";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";

type CategoryPageParams = Promise<{ categoryId: string }>;
type SearchParams = Promise<{ colorId?: string , sizeId?: string  }>;

interface CategoryPageProps {
  params: CategoryPageParams,
  searchParams: SearchParams,
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const { categoryId } = await params;
  const { colorId, sizeId } = await searchParams;

  const products = await getProducts({
    categoryId,
    colorId : colorId,
    sizeId: sizeId,
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(categoryId);
  // const suggestedCategorys = await getCategorys({ categoryId: Category?.category?.id });

  // console.log(categoryId, products, colors, sizes, category);

  return <div className="bg-white" >
    <Container >
      <Billboard data={category?.billboard} />
      <div className="px-4 sm:px-6 lg:px-8 pb-24" >
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8" >
          <MobileFilters sizes={sizes} colors={colors} />
          <div className="hidden lg:block" >
            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
            <Filter valueKey="colorId" name="Colors" data={colors} />
          </div>
          <div className="mt-6 lg:col-span-4 lg:mt-0" >
            {
              products.length === 0 && (
                <NoResults />
              )
            }
            {
              products?.map((product) => (
                <ProductCard key={product.id} data={product} />
              ))
            }
          </div>
        </div>
      </div>
    </Container>
  </div>
};

export default CategoryPage;