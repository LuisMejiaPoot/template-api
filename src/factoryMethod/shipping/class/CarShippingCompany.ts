import ShippingCompany from "../abstract/ShippingCompany";
import Shipping from "../interface/shipping";

export default class CarShippingCompany extends  ShippingCompany{
    public createShipping():Shipping{
        console.log("se esta creando una nueva empresa ShippingCompany")
        return new CarShipping();
    }
}

class CarShipping implements Shipping {
    public ship(): string {
        return "Este paquete se esta enviando por carro"
    }
}