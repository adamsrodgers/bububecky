from config import db

class emailList(db.Model):
    __bind_key__ = 'email_list'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)