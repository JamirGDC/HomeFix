"""empty message

Revision ID: 52c3e2f2daac
Revises: 1729f5a1a906
Create Date: 2024-01-22 09:41:18.312703

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '52c3e2f2daac'
down_revision = '1729f5a1a906'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('products',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('produc_name', sa.String(length=120), nullable=False),
    sa.Column('product_price', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('product')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('product',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('produc_name', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('product_price', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='product_pkey')
    )
    op.drop_table('products')
    # ### end Alembic commands ###
