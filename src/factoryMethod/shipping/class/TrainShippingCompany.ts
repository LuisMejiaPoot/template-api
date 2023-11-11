import ShippingCompany from "../abstract/ShippingCompany";
import Shipping from "../interface/shipping";

export default class TrainShippingCompany extends ShippingCompany{
    public createShipping(): Shipping {
        return new TrainShipping();
    }
}


class TrainShipping implements Shipping{
    public ship():string{
        return "Este paquete se esta enviando por tren"
    }
}