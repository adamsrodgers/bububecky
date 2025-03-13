#importing flask libaries
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

app.config['SQLALCHEMY_DATBASE_URI'] = 'sqlite:///email_list.db'

#configurating multiple databases
app.config['SQLALCHEMY_BINDS'] = {
    'orders' : 'sqlite:///orders.db',
    'products' : 'sqlite:///products.db'
}


db =SQLAlchemy(app)