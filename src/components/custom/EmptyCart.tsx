import { FC } from "react";
import emptyCartImg from "@/assets/images/empty-cart.png";
import { Paths } from "@/routes/paths";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const EmptyCart: FC = () => {

  return (
    <section className="flex-center flex-wrap">
      <img src={emptyCartImg} alt="empty cart" width={200} height={200} decoding="async" loading="lazy"
        className="h-auto md:h-52 lg:h-96 w-auto"
      />
      <div className="max-w-80">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Your Cart is Empty!
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Looks like you have not added anything to your cart. Go ahead and explore latest categories.{" "}
          <Link to={Paths.LANDING} className="underline underline-offset-2">explore <ArrowUpRight className="inline" size={15} /></Link>
        </p>
      </div>
    </section>
  )
}

export default EmptyCart