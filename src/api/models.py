from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import json
import json

db = SQLAlchemy()

class User_be(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    province_id = db.Column(db.Integer, db.ForeignKey('province.id'))
    province = db.relationship('Province', backref='users')
    products = db.relationship('Product', backref='seller', lazy=True)

    mangoid = db.Column(db.Integer, nullable=True)
    mangoidwallet = db.Column(db.Integer, nullable=True)
    nombre = db.Column(db.String(120), nullable=True)
    apellido = db.Column(db.String(120), nullable=True)
    perfildone = db.Column(db.Boolean(), default=False,  nullable=True)


    def __repr__(self):
        return f'<User_be {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "province": self.province.name if self.province else None,
        }
    
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Float, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user_be.id'), nullable=False)
    province_id = db.Column(db.Integer, db.ForeignKey('province.id'))
    province = db.relationship('Province', back_populates='products')
    images_urls = db.Column(db.String(2000))

    def serialize(self):
        images_urls = json.loads(self.images_urls) if self.images_urls else []

        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "seller": self.seller.serialize(),
            "province": self.province.name if self.province else None,
            "images_urls": images_urls,
        }

    @classmethod
    def search(cls, search_term, province_name=None):
        query = cls.query.filter(cls.name.ilike(f'%{search_term}%'))

        if province_name:
            province = Province.query.filter_by(name=province_name).first()
            query = query.filter(cls.province == province)

        return query.all()
        


class Province(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    products = db.relationship('Product', back_populates='province')

    def __repr__(self):
        return f'<Province {self.name}>'
    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'products': [product.serialize() for product in self.products]
        }
