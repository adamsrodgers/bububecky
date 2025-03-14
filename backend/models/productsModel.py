from config import db

class Products(db.Model):
    __bind_key__ = 'products'

    product_id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(100), unique=True, nullable=False)
    price = db.Column(db.Real, nullable=False)
    quantity_ordered = db.column(db.Integer)


    def to_json(self):
        return {
            "productId" : self.product_id,
            "productName" : self.product_name,
            "price" : self.price,
            "quantityOrdered" : self.quantity_ordered
        }