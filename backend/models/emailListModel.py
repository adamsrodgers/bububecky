from config import db

class emailList(db.Model):
    __bind_key__ = 'email_list'

    email = db.Column(db.String(100), unique=True, nullable=False)


    def to_json(self):
        return {
            "email" : self.email
        }