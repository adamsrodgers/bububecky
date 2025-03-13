from config import db

class Products(db.Model):
    __bind_key__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(100), unique=True, nullable=False)
    price = db.Column(db.Real, nullable=False)
    quantityOrdered = db.column(db.Integer)