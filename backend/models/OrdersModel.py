from config import db

class Orders(db.Model):
    __bind_key__ = 'orders'

    order_id = db.Column(db.Integer, primary_key=True)
    order_date = db.Colmun(db.String(100), nullable=False)
    order_time = db.Column(db.String(100), nullable=False)
    billing_address = db.Column(db.String(100), nullable=False)
    shipping_address = db.Column(db.String(100), nullable=False)
    order_total = db.Column(db.Real, nullable=False)
    tax_amount = db.Column(db.Real, nullable=False)
    

    #method to use JSON for API
    def to_json(self):
        return {
            "orderId" : self.order_id,
            "orderDate" : self.order_date,
            "orderTime" : self.order_time,
            "billingAddress" : self.billing_address,
            "shippingAddress" : self.shipping_address,
            "orderTotal" : self.order_total,
            "taxAmount" : self.tax_amount
        }