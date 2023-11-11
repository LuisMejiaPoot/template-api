import Shipping from "../interface/shipping";

export default abstract class ShippingCompany{
    public abstract createShipping():Shipping;
    public sendPackage():string{
        const shipping = this.createShipping();
        return `Shipping Company: ${shipping.ship()}`
    }
}