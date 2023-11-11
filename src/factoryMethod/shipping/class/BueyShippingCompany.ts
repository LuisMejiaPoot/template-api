import ShippingCompany from "../abstract/ShippingCompany";
import Shipping from "../interface/shipping";

export class BueyShippingCompany extends ShippingCompany{
    public createShipping(): Shipping {
        console.log("se esta creando una nueva empresa ShippingCompany")
        return new BueyShipping();
    }
}


class BueyShipping implements Shipping{
    public ship(): string {
        return "Este paquete se esta enviando por buey"
    }
}