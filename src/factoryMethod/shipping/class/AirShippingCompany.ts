import ShippingCompany from "../abstract/ShippingCompany";
import Shipping from "../interface/shipping";

export default class AirShippingCompany extends ShippingCompany{
    public createShipping(): Shipping {
        return new AirShipping();
    }
}


class AirShipping implements Shipping{
    public ship():string {
        return "Este paquete se esta enviando por avion"
    }
}